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

### Simple Flow

```text
Start Application
       ↓
Take User Input
       ↓
Send Input to LLM
       ↓
Receive AI Response
       ↓
Display Response
       ↓
Take Next User Input
       ↓
       ...
```
