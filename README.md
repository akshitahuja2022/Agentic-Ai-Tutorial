# Agentic AI — Learning Notes

## 1. Before AI — Traditional Programming

Before **Machine Learning, Generative AI, and Agentic AI**, most software systems were built using **traditional programming**.

In traditional programming, we explicitly define the **rules and logic** that the system should follow.

For example, in a typical application:

```text
User → Register → Login → API Request → Backend Logic → Database → Response
```

We write rules such as:

```text
IF username and password are correct
    → Login successful
ELSE
    → Login failed
```

This works very well when the problem can be clearly described using rules.

### Limitation of Traditional Programming

Traditional programming struggles with problems where it is difficult to define exact rules.

For example:

> **"Is this image a cat or not?"**

It is extremely difficult to manually write rules such as:

```text
IF ears have this exact shape
AND eyes have this exact size
AND face has this exact structure
AND fur looks like this
THEN it is a cat
```
So instead of manually defining every rule, we moved toward **Machine Learning**.

---

## 2. Machine Learning → Deep Learning → Generative AI

### Machine Learning

In **Machine Learning (ML)**, instead of explicitly writing every rule, we provide the system with **data** and allow a model to learn patterns from that data.

For example, to create a **Cat vs Not-Cat classifier**, we can collect many images:

After training, we can give it a new image:

```text
New Image
    ↓
ML Model
    ↓
Prediction
    ↓
"Cat" / "Not Cat"
```

### Important Point

Machine Learning does **not** mean the model knows with 100% certainty that something is a cat.

It generally produces a **prediction or probability** based on the patterns it learned.

So ML is mainly used for tasks such as:

* Classification
* Prediction
* Pattern recognition
* Regression
* Anomaly detection

---

### Deep Learning

**Deep Learning** is a subset of Machine Learning.

Instead of manually designing many features, deep neural networks can learn increasingly complex representations from large amounts of data.

### Large Language Models (LLMs)

An **LLM (Large Language Model)** is a type of deep-learning model trained on very large amounts of text data.

Examples of what an LLM can do:

* Understand natural-language instructions
* Generate text
* Summarize information
* Translate languages
* Generate code
* Answer questions
* Reason over provided information

This led to a major shift.

Previously, if we wanted a program to perform a task, we generally had to **explicitly write the logic**.

With Generative AI, we can give the model an instruction such as:

```text
"Create a JavaScript function that checks whether
a number is prime."
```

The LLM can generate the corresponding code.

Similarly, generative AI models can generate:

```text
Text
Code
Images
Audio
Video
```

depending on the type of model.


> **Key idea:** Traditional programming tells the computer **exactly what to do**.
> Machine Learning allows a model to **learn patterns from data**.
> Generative AI allows models to **generate new content**.
> Agentic AI goes a step further by allowing AI systems to **use tools and take actions toward a goal**.


## 3. How Can We Use an LLM?

Once we have an LLM, there are different ways we can use it in our applications.

The three common approaches are:

1. **Local**
2. **Self-Hosted**
3. **API-Based**

These are better understood as **ways of running or accessing an LLM**, rather than different types of LLMs.

---

### 1. Local LLM

In the **local approach**, we download an open-weight model and run it directly on our own computer.

Tools such as **Ollama** make it easier to download and run supported models locally.

```text
Our Computer
     ↓
Ollama
     ↓
LLM Model
     ↓
Our Application
```

For example, we can run a model locally and communicate with it from our application.

### Advantages

* No API request is required for inference.
* Data can remain on our local machine.
* Useful for learning, experimentation, and development.
* Can be useful when internet access is limited or when local processing is preferred.

### Limitations

The main limitation is **hardware**.

Large LLMs can require significant:

* RAM
* GPU/VRAM
* CPU resources
* Storage
* Processing power

Therefore, a small or efficient model may work well on a personal computer, while running a very large model can require much more powerful hardware.

For example:

> Running a small model for experimentation is very different from running a large model capable of handling complex production workloads.

So local LLMs are excellent for **learning, experimentation, prototyping, and certain production use cases**, but the suitable model depends heavily on the available hardware and task.

---

### 2. Self-Hosted LLM

In **self-hosting**, instead of running the model on our personal computer, we run the model on a server or cloud infrastructure that we control.

We can:

* Purchase our own hardware, or
* Rent cloud infrastructure

Examples of cloud providers include:

* AWS
* Microsoft Azure
* Google Cloud

The basic architecture looks like:

```text
User
 ↓
Our Application
 ↓
Our Server / Cloud
 ↓
Self-Hosted LLM
 ↓
Response
```

### Advantages

* More control over the infrastructure.
* More control over model deployment and configuration.
* Can be customized for specific requirements.
* Suitable for organizations that need greater control over their data and infrastructure.

### Limitations

The major challenge is **cost and infrastructure management**.

We may need to pay for:

* GPU instances
* CPU
* RAM
* Storage
* Networking
* Server uptime
* Monitoring
* Scaling
* Maintenance

For large models, the required GPU infrastructure can become expensive.

So self-hosting can make sense when an organization needs **control, customization, privacy, or predictable infrastructure**, but it requires managing the infrastructure ourselves.

---

### 3. API-Based LLM

The third approach is using an **LLM API** provided by an AI company.

Instead of running the model ourselves, the provider runs the model on its infrastructure.

Our application sends a request:

```text
Our Application
      ↓
   API Request
      ↓
LLM Provider's Infrastructure
      ↓
      LLM
      ↓
   API Response
      ↓
Our Application
```

Examples of companies that provide LLM APIs include:

* **Google** → Gemini
* **Anthropic** → Claude
* **OpenAI** → GPT models

With an API, we generally pay according to the provider's pricing model and the amount/type of usage.

A major advantage is that **we don't need to purchase or maintain expensive GPU infrastructure ourselves**.

For example:

```text
Small Usage
    ↓
Lower API Cost

More Usage
    ↓
Higher API Cost
```

The exact pricing depends on the provider, model, and billing method.

---

## Why Use an LLM API?

For many developers, APIs are convenient because we can focus on building the application instead of managing the model infrastructure.

For example:

```text
Developer
   ↓
Build Application
   ↓
Send Prompt to API
   ↓
Receive Response
```

We don't need to:

* Download a huge model
* Purchase GPUs
* Maintain inference servers
* Handle model infrastructure ourselves

---

## Using LangChain

When working with multiple LLM providers, libraries such as **LangChain** can provide a common application interface and abstractions around model providers.

For example, conceptually:

```text
             ┌── Google Gemini
             │
LangChain ───┼── Anthropic Claude
             │
             └── OpenAI GPT
```

This can make it easier to structure an application so that provider-specific code is isolated.

For example, our application can conceptually work with:

```text
Application
     ↓
LangChain
     ↓
LLM Provider
```

If we later change providers, we may only need to change the model/provider configuration and some provider-specific details rather than rewriting the entire application.

### Important Note

LangChain does **not** mean that switching providers always requires only one line of code.

Different providers can have differences in:

* Model capabilities
* Tool calling
* Message formats
* Authentication
* Structured output
* Streaming
* Pricing
* Context limits

So LangChain can **reduce the amount of provider-specific code**, but we still need to test the application after switching providers.

## 4. Using Mistral AI with LangChain

In this project, I used **Mistral AI** as the LLM provider and connected it with **LangChain**.

The required packages are:

```bash
npm install langchain
npm install @langchain/mistralai
```

We can then import the Mistral chat model:

```javascript
import { ChatMistralAI } from "@langchain/mistralai";
```

`ChatMistralAI` provides an interface for communicating with Mistral's chat models through LangChain.

Conceptually:

```text
Our Application
      ↓
    LangChain
      ↓
ChatMistralAI
      ↓
 Mistral API
      ↓
    LLM
      ↓
   Response
```

This allows us to send messages/prompts to the Mistral model and receive its response.

---

## 5. `invoke()` vs `stream()`

An LLM generates its output progressively, but our application can decide **how that output is delivered to us**.

LangChain provides methods such as `invoke()` and `stream()` for this.

### `invoke()`

If we want to wait for the model's response and then receive the completed response, we can use:

```javascript
const response = await model.invoke("What is Agentic AI?");
```

So `invoke()` is useful when we want to **process the response after the model has completed its generation**.

Example:

```javascript
console.log(response.content);
```

The user sees the complete response after it has been returned.

---

### `stream()`

If we want to display the response progressively as it is generated, we can use streaming:

```javascript
const stream = await model.stream("What is Agentic AI?");

for await (const chunk of stream) {
    process.stdout.write(chunk.content);
}
```
This gives the user the feeling that the AI is **typing the response in real time**.

The exact chunks received depend on the model/provider and streaming implementation.

> **Important:** `invoke()` and `stream()` don't change the underlying intelligence of the LLM. They mainly change **how the generated output is returned to our application**.

---

## 6. Creating a Chatbot in the Terminal

In this project, I wanted to interact with the AI directly from the terminal.

For example:

```text
You: What is Agentic AI?

AI: Agentic AI refers to AI systems that can...
```

For taking input from the user in a Node.js terminal application, we can use Node's built-in **`readline` module**.

### Important

`readline` is part of **Node.js**, so we normally **do not need to install it with npm**.

Instead:

```javascript
import readline from "node:readline";
```

We can create an interface:

```javascript
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
```

Now the terminal can receive input from the user.
For a chatbot, we can continuously ask for user input and send each message to the LLM.

# Problems with LLMs and How We Solve Them

While building the terminal chatbot, I encountered several limitations of a basic LLM setup.

These problems helped me understand why we need **messages, system instructions, tools, and agents**.

---

## 7. Problem #1 — LLM Does Not Automatically Remember Our Conversation

Suppose I start a conversation:

```text
User: What is Agentic AI?

AI: Agentic AI is...

User: What was my first question?
```

If we only send the latest question:

```text
"What was my first question?"
```

the LLM does not automatically know what the previous question was.

### Why?

An LLM does not automatically maintain a permanent memory of every message we have sent to it.

Our application needs to provide the relevant conversation history to the model.

Instead of sending only one message:


we can provide a **sequence/array of messages** containing the conversation history.

### LangChain Message Types

LangChain provides message types such as:

```javascript
import {
    HumanMessage,
    AIMessage,
    SystemMessage
} from "langchain/schema";
```

The exact import path can vary depending on the LangChain version.

The important concept is:

```text
HumanMessage
→ Message sent by the user.

AIMessage
→ Previous response generated by the AI.

SystemMessage
→ Instructions/context that guide the AI's behavior.
```

### Key Idea

> **The LLM doesn't automatically remember our application's previous conversation. Our application needs to provide the relevant conversation history as context.**

This is one of the foundations of **chat memory**.

---

# 8. Problem #2 — LLM May Not Know Current Information

Another problem is that an LLM is trained on data from a particular period.

For example, if I ask:

```text
User: What is today's date?
```

the model cannot necessarily determine the real current date simply from its training data.

### Why?

The model's training data has a **knowledge cutoff**.

Training happens before we use the model, so information that changes after training may not be available from the model's internal knowledge.

Examples of information that can change:

```text
Current date
Current weather
Stock prices
Latest news
Current sports scores
Latest product information
```

So we need a way to provide **additional context** to the model.

One way is through a **System Message**.

---

## System Message

A system message provides instructions or context that guide how the model should behave.

For example:

```javascript
new SystemMessage(`
You are a helpful AI assistant.
Today's date is September 20, 2026.
The current user is Akshit.
`)
```
A system message can contain things such as:

* AI's role/identity
* Behavioral instructions
* Response format
* Rules
* Additional context
* Relevant application information

So system instructions are useful for **providing information and controlling behavior**, but they don't magically give the model live access to the internet or current events.

---

# 9. Problem #3 — LLM Cannot Automatically Search the Internet

Now suppose I ask:

```text
"What happened in the latest AI news today?"
```

The LLM may not know the latest information because its internal knowledge is not automatically updated with every new event.

So we need to give the AI access to an external capability.

This is where **Tools** come into the picture.

---

## What is a Tool?

A tool is essentially a function that allows an AI system to perform an action or access an external capability.

For example:

```text
Tool:
getLatestInformation()

Task:
Search the internet and return the latest information.
```

The tool can perform an operation that the LLM itself cannot directly perform.

Examples of tools:

```text
Web Search
Calculator
Weather API
Database Query
File Search
Send Email
Create Calendar Event
```

---

# 10. Agent = LLM + Tools

This leads us to an important Agentic AI concept.

A simple way to remember it is:

```text
Agent
=
LLM
+
Tools
+
Ability to decide when/how to use them
```

The LLM provides the reasoning/language capability, while tools provide the ability to interact with external systems.

For example:

```text
User:
"What is the latest information about AI?"

        ↓

      Agent
        ↓
      LLM
        ↓
Decides that web search is required
        ↓
   Web Search Tool
        ↓
    Internet Search
        ↓
   Search Results
        ↓
      LLM
        ↓
  Final Response
```

---

## Does the LLM Directly Call the Tool?

A useful concept to understand is that the LLM typically **does not perform the external operation itself**.

Instead, the model can determine that a particular tool should be used and provide the tool call/arguments.

The framework or our application then actually executes the tool.

Conceptually:

```text
User Request
     ↓
    LLM
     ↓
"I need to use web search"
     ↓
Tool Call
     ↓
LangChain / Application
     ↓
Execute Tool
     ↓
Internet Search
     ↓
Tool Result
     ↓
    LLM
     ↓
Final Answer
```

So we can think of the responsibilities as:

```text
LLM
→ Decides what tool is needed.

Tool
→ Performs the actual operation.

Agent/Framework
→ Coordinates the LLM and tools.
```

---

# 11. Creating a Web Search Tool

In this project, I created a tool conceptually called:

```javascript
getLatestInformation()
```

Its purpose is:

```text
User asks for latest information
        ↓
Agent decides web search is required
        ↓
getLatestInformation()
        ↓
Search the internet
        ↓
Return information to the LLM
        ↓
LLM generates final answer
```

This is where the chatbot starts moving from a **basic LLM application toward an Agentic AI application**.

---

# 12. Using Tavily for Internet Search

To give our agent web-search capability, we can use **Tavily**.

Tavily provides search functionality designed for AI applications and agents.

The package used in this project is:

```bash
npm install @tavily/core
```

The Tavily search functionality acts as the connection between our AI application and web search.

---

# Overall Evolution of Our Chatbot

At this point, our application has evolved from a simple LLM call into a system with multiple capabilities.

### Step 1 — Basic LLM

```text
User
 ↓
LLM
 ↓
Response
```

### Step 2 — Conversation Context

```text
Conversation History
        ↓
       LLM
        ↓
    Response
```

### Step 3 — System Instructions

```text
System Message
      +
Conversation
      ↓
     LLM
      ↓
   Response
```

### Step 4 — Tools

```text
User
 ↓
LLM
 ↓
Tool Call
 ↓
External System
 ↓
Tool Result
 ↓
LLM
 ↓
Final Response
```

### Step 5 — Agent

```text
                    ┌──────────────┐
                    │     Tool     │
                    │ Web Search   │
                    └──────▲───────┘
                           │
                           │
User → Agent → LLM ────────┘
                 │
                 ↓
           Decide what to do
                 │
                 ↓
          Use required tool
                 │
                 ↓
            Get result
                 │
                 ↓
          Generate response
```

