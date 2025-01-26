

const express = require("express");
const cors = require("cors");
const { OpenAI } = require("openai");

const { zodResponseFormat } = require("openai/helpers/zod");
const { z } = require("zod");
const app = express();
app.use(express.json());
app.use(cors());

const Challenge = z.object({
    name: z.string(),
    dateStarted: z.string(),
    description: z.string(),
    dateEnding: z.string(),
    completed: z.boolean(),
    reward: z.string(),
    image: z.string(),
  });
  


app.post("/api/message", async (req, res) => {
  const userMessage = req.body.message;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: "You are a chatbot for an insurance company SunLife, who helps users in a friendly way often adding emojis at the end of sentences. You are catered toward students, and offer financial advice and help students create realistic financial goals including investments, insurance claims, and budgeting" },
        { role: "user", content: userMessage },
      ],
    });

    const reply = completion.choices[0].message.content;

    res.status(200).json({ reply });
  } catch (error) {
    console.error("Error communicating with GPT-4o Mini API:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

const PORT = 5005;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
