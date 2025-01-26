"use client";

import React, { useEffect, useState } from "react";
import { Button, TextInput, Label } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";
import axios from "axios";

export default function StartChat() {
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
 // Initialize the conversation with a greeting message when the component is mounted

  const initConversation = async () => {
    try {
      const response = await axios.post("http://localhost:5005/api/message", { message: "This is the message from the server telling you the conversation has started. Begin conversation with user now." });
      // Add bot's initial message to the chat
      setMessages([{ role: "assistant", content: response.data.reply }]);
    } catch (error) {
      console.error("Error initializing conversation:", error);
    }
  };

 
  const handleSendMessage = async () => {
    if (!message.trim()) return;
  
    // Add user's message to the chat
    setMessages((prev) => [...prev, { role: "user", content: message }]);
  
    try {
      // Send message to the backend
      const response = await axios.post("http://localhost:5005/api/message", { message });
  
      // Add GPT's response to the chat (do not add the user's message again)
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: response.data.reply },
      ]);
  
      setMessage(""); // Clear input field
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    }
  };
  

  if (!showChat) {
    return (
      <main className="flex flex-col items-center justify-center h-screen">
        <div className="space-y-5 text-center">
          <h2 className="text-2xl font-bold">Set your goals</h2>
          <p className="text-gray-600">
            Receive personalized, achievable goals related to your finances.
          </p>
          <Button
            style={{
              backgroundColor: "var(--primary-yellow)",
              borderColor: "var(--primary-yellow)",
            }}
            onClick={() => {
              setShowChat(true)
              initConversation()
            }}
          >
            Start Chat!
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Conversation Container */}
      <div className="w-3/4 max-w-3xl bg-white shadow-md rounded-2xl p-4 space-y-4">
        <Label>SunLife Chat</Label>
        <div className="flex flex-col space-y-3 h-96 overflow-y-auto pr-2">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-start space-x-2 ${
                msg.role === "user" ? "self-end" : "self-start"
              }`}
            >
              {msg.role === "assistant" && (
                <img
                  src="https://static.stocktitan.net/company-logo/slf-lg.png"
                  alt="User Icon"
                  className="h-8 w-8 rounded-full"
                />
              )}
              <div
                className={`p-3 rounded-lg ${
                  msg.role === "user" ? "bg-primary-yellow text-white" : "bg-gray-200"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Input Section */}
      <div className="flex items-center justify-center w-3/4 max-w-3xl space-x-2 mt-4">
        <TextInput
          id="message"
          placeholder="Type your message here!"
          required
          shadow
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          sizing="lg"
          className="w-full"
        />
        <Button
          style={{
            backgroundColor: "var(--primary-yellow)",
            borderColor: "var(--primary-yellow)",
          }}
          onClick={handleSendMessage}
        >
          <HiOutlineArrowRight className="h-6 w-6" />
        </Button>
      </div>
    </main>
  );
}
