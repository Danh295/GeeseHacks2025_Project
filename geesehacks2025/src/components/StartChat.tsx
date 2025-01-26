"use client";
import React, { useEffect, useState, useRef } from "react";
import { Button, TextInput, Label } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";
import axios from "axios";

export default function StartChat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [isBotTyping, setIsBotTyping] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Scroll to the latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    initConversation();
  }, []);

  const initConversation = async () => {
    try {
      const response = await axios.post("http://localhost:5005/api/message", {
        message:
          "This is the message from the server telling you the conversation has started. Begin conversation with user now.",
      });
      setMessages([{ role: "assistant", content: response.data.reply }]);
      setIsBotTyping(false);
    } catch (error) {
      console.error("Error initializing conversation:", error);
    }
  };

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    setMessages((prev) => [...prev, { role: "user", content: message }]);
    setMessage("");

    try {
      setIsBotTyping(true);
      const response = await axios.post("http://localhost:5005/api/message", { message });
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: response.data.reply },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsBotTyping(false);
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen bg-background">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 z-0"></div>

      {/* Conversation Container */}
      <div className="relative z-10 w-3/4 max-w-3xl bg-gradient-to-br from-primary-yellow to-yellow-300 shadow-md rounded-2xl p-4 space-y-4 backdrop-blur-lg bg-opacity-80">
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
                  msg.role === "user" ? "bg-primary-teal text-white" : "bg-gray-200"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {isBotTyping && (
            <div className="flex items-start space-x-2">
              <div className="p-3 rounded-lg bg-gray-200">
                <div className="animate-pulse">
                  <div className="h-2.5 bg-gray-400 rounded w-24 mb-2"></div>
                  <div className="h-2.5 bg-gray-400 rounded w-16"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef}></div>
        </div>

        {/* Input Section */}
        <div className="flex items-center justify-center w-full max-w-3xl space-x-2 mt-4">
          <TextInput
            id="message"
            placeholder="Type your message here!"
            required
            shadow
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            sizing="lg"
            className="w-full"
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSendMessage();
            }}
          />
          <Button
            style={{
              backgroundColor: "var(--primary-teal)",
              borderColor: "var(--primary-yellow)",
            }}
            onClick={handleSendMessage}
          >
            <HiOutlineArrowRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </main>
  );
}
