"use client";

import React from 'react'
import { MessageProps } from '@/types';

export const ReceivedMessage: React.FC<MessageProps> = ({message}) =>{
  return (
    <div className="flex items-start space-x-2">
          <div className="flex-shrink-0">
            {/* Icon for received message */}
            <img
              src="https://static.stocktitan.net/company-logo/slf-lg.png" // Replace with your icon's path or URL
              alt="User Icon"
              className="h-8 w-8 rounded-full"
            />
          </div>
          <div className="p-3 bg-gray-200 rounded-lg">
            {message}
          </div>
        </div>
  )
}
