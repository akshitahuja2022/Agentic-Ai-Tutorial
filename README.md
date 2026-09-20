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
