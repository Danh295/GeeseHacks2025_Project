const express = require("express");
const cors = require("cors");
const { OpenAI } = require("openai");
const {MongoClient} = require('mongodb')
require("dotenv").config();
const app = express();
const apiKey = process.env.API_KEY;
const uri = process.env.MONGODB_URI;
// Code to kill port: lsof -ti:5005 | xargs kill -9
app.use(express.json());
app.use(cors());
const client = new MongoClient(uri);
try{
   
    client.connect();
    listDatabases()
    } 
    catch(e){
        console.error(e)
   }
async function listDatabases(){
    const databasesList = await client.db().admin().listDatabases()
    databasesList.databases.forEach(db => {
        console.log(`- ${db.name}`)
    })
}
const openai = new OpenAI({ apiKey });

let conversationHistory = [];
let currentChallenge = null;


app.get("/api/challenges", async (req, res) => {
  try {
    const challenges = await client.db("sunlife_chats").collection("chats").find().toArray()
    res.status(200).json({ challenges });
  } catch (error) {
    console.error("Error retrieving challenges:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});
// Endpoint to handle incoming messages
app.post("/api/message", async (req, res) => {
  const userMessage = req.body.message;

  // Add user's message to the conversation history
  conversationHistory.push({ role: "user", content: userMessage });

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `
          You are SunLife's friendly financial assistant, helping users discuss financial topics and set up savings goals called "Challenges." 
          If the user expresses interest in creating a financial goal, guide them to set up a "Challenge." The reward for the challenge should be a number from 50-500 you can use random for now in increments of 25
          Here's the structure of a "Challenge":
          {
            "name": string,        // Name of the goal
            "description": string, // Brief description of the goal
            "currentAmount": number, // Current amount saved
            "goalAmount": number,  // Total amount to save
            "reward": number,      // A reward for completing the goal
            "image": string        // Find a relevant image URL yourself based on the goal
          }
          Always include the updated "Challenge" object in JSON format in the challengeUpdate but not in the actual content of the message the user sees so that it can be used by the frontend
          If the user doesn’t want to set up a goal, engage them in a friendly, natural conversation about financial topics. 
          Keep responses conversational, use a maximum of 2 sentences, and add emojis for a friendly tone. 
          Subtly incorporate SunLife branding into your responses, such as but not 'With SunLife, you've got this! 🌞'.
          `,
        },
        ...conversationHistory,
      ],
    });

    const assistantReply = completion.choices[0].message.content;

    // Extract the structured challenge object from GPT-4's response if it exists
    let challengeUpdate = null;
    const challengeRegex = /{[\s\S]*}/; // Match JSON structure
    const match = assistantReply.match(challengeRegex);
    if (match) {
      try {
        challengeUpdate = JSON.parse(match[0]);
        currentChallenge = challengeUpdate; // Update the current challenge state
      } catch (err) {
        console.error("Failed to parse Challenge object:", err);
      }
    }

    // Append assistant's reply to the conversation history
    conversationHistory.push({ role: "assistant", content: assistantReply });
    if(challengeUpdate){
      console.log("Challenge Update: ", challengeUpdate)
      const result = await client.db("sunlife_chats").collection("chats").insertOne(challengeUpdate)
        console.log(`New challenge created with the following id: ${result.insertedId}`)
    }
    res.status(200).json({ reply: assistantReply, challenge: challengeUpdate });
  } catch (error) {
    console.error("Error with GPT-4 API:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

const PORT = 5005;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});