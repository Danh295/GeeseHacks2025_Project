"use client";

import React from 'react'
import {Button, TextInput, Label } from 'flowbite-react'
import { HiOutlineArrowRight } from "react-icons/hi";
import {useState} from 'react'
export default function StartChat() {
    const [showChat, setShowChat] = useState(false);
    const [message, setMessage] = useState("");
    if(!showChat){
  return (
    <main className="flex justify-center min-h-screen">
    <div>
    <h1 className="text-2xl font-bold mb-4">Set your goals</h1>
    <p className="text-gray-700 mb-6">
      Receive personalized, achievable goals related to your finances.
    </p>
    <Button outline gradientDuoTone="redToYellow" onClick={() => setShowChat(true)}>
        Start Chat!
      </Button>
    </div>
    </main>
  )
} return (
  <main className="flex justify-center min-h-screen">
        
            
        <div className="flex items-center space-x-2 text-left">
                     
                     <TextInput
                        id="message"
                        placeholder="Type your message here!"
                        required
                        shadow
                        onChange={(e) => setMessage(e.target.value)}
                        sizing = "lg"
                      />
                      <Button onClick={() => {}}>
                      <HiOutlineArrowRight className="h-6 w-6" />
                        </Button>
                    </div>
                

        
      

    </main>
)
}
