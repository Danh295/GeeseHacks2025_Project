"use client"
import { Accordion, Card, Label } from 'flowbite-react'
import React from 'react'



export default function LearnPage() {
    return (
        <main className="flex flex-col items-center justify-center m-h-screen bg-gray-100">
      <div className="w-3/4 max-w-3xl bg-white shadow-md rounded-2xl p-4 space-y-4">
              <Label>Financial Literacy Tools</Label>
              <div className="flex flex-row space-x-3 h-96 overflow-x-auto p-2">
              <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://cdn.prod.website-files.com/60c843c7a86d865e99ca8b67/62bd4bf599bfeb3968cf9fde_passive%20index.png"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Some title
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>
    <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://cdn.prod.website-files.com/60c843c7a86d865e99ca8b67/62bd4bf599bfeb3968cf9fde_passive%20index.png"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Some title
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>
    <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://cdn.prod.website-files.com/60c843c7a86d865e99ca8b67/62bd4bf599bfeb3968cf9fde_passive%20index.png"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Some title
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>
    </div>

    
        
      </div>
      </main>
    )
  }