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
    <main className="flex flex-col items-center justify-center h-screen">
    <div className="space-y-5">
    <h2>Set your goals</h2>
    <p>
      Receive personalized, achievable goals related to your finances.
    </p>
    <Button style={{ backgroundColor: 'var(--primary-yellow)', borderColor: 'var(--primary-yellow)'}} onClick={() => setShowChat(true)}>
        Start Chat!
      </Button>
    </div>
    </main>
  )
} return (
    <main>
        
            
        <div className="flex items-center justify-center h-screen space-x-2 max-w-full">
                     
                     <TextInput
                        id="message"
                        placeholder="Type your message here!"
                        required
                        shadow
                        onChange={(e) => setMessage(e.target.value)}
                        sizing = "lg"
                        className="w-3/4"
                      />
                      <Button style={{ backgroundColor: 'var(--primary-yellow)', borderColor: 'var(--primary-yellow)' }} onClick={() => {}}>
                      <HiOutlineArrowRight className="h-6 w-6" />
                        </Button>
                    </div>
    </main>
)
}

