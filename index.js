import { ChatMistralAI } from "@langchain/mistralai";
import { config } from "dotenv";
import {
  HumanMessage,
  AIMessage,
  AIMessageChunk,
  SystemMessage,
  tool,
  createAgent,
} from "langchain";
import rl from "readline/promises";
import * as z from "zod";
import { tavily } from "@tavily/core";

config();

// tavily is package that is used to connect our web apps. it's like a service provider that give the latest 
// information about our query. 
const tvly = tavily({
  apiKey: process.env.TAVILY_API_KEY,
});

//  It's like tool that llm use to get the latest information
async function getLatestInformation({ query }) {
  const response = await tvly.search(query);
  const results = response.results;
  const content = results.map((result) => result.content).join("\n");

  return content;
}

// import tool from langchain that recive 2 parameter 1. functions of tool and 2. object.in object
// 1. name - what is the name of tool acording to LLM.
// 2. Description - describe the what llm do with the help of tool
// 3. Schema - whatever my tool give the response in which format that is define in schema. so we need *zod*
const latestInformationTool = tool(getLatestInformation, {
  name: "get_latest_information",
  description: "Get letest information about any topic.",
  schema: z.object({
    query: z.string().describe("The topic to get latest information about"),
  }),
});

// intiate the modal - modal-name, api-key
const model = new ChatMistralAI({
  model: "mistral-medium-latest",
  apiKey: process.env.MISTRAL_API_KEY,
});

const agent = createAgent({
  model,
  tools: [getLatestInformation],
});

const readline = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// to store the input and output for access past convestion because llm doesn't store the past conversation
const messages = [
  new SystemMessage(`
        Your name is Alex, You are joyful, senior developer who loves to explain things related to MERN
        current date is ${new Date().toLocaleDateString()}
        `),
];

while (true) {
  const userPrompt = await readline.question("User: ");
  messages.push(new HumanMessage(userPrompt));

  const stream = await agent.stream(
    {
      messages,
    },
    {
      streamMode: "messages",
    },
  );

  // to store the response of ai message
  let aiResponse = "";

  for await (const [chunk] of stream) {
    if (chunk instanceof AIMessageChunk) process.stdout.write(chunk.text);

    aiResponse += chunk.text;
  }

  messages.push(new AIMessage(aiResponse));

  process.stdout.write("\n");
}

readline.close();

// LLM - genereate the data word by word / token by token
// invoke - when we used invoke method then it  display data at once

// const response = await model.invoke("Hello");
// console.log(response.text);

//  if i want display the data word by word then we use stream
// stream - display the data word. So LLM generate one word it return one word ...
// const stream = await model.stream("Hello");

// for await (const chunk of stream) {
//   process.stdout.write(chunk.text);
// }
