"use client";

import React from 'react'
import { MessageProps } from '@/types';

export const SentMessage: React.FC<MessageProps> = ({message}) =>{
  return (
    <div className="p-3 bg-primary-yellow text-white rounded-lg self-end">
          {message}
        </div>
  )
}
