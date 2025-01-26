"use client";

import React from 'react';
import { ChallengeCardProps } from '@/types';
import {Card} from 'flowbite-react';
import Link from 'next/link';
import useRouter from 'next/navigation';

// Singular Card Component
export const ChallengeCard: React.FC<ChallengeCardProps> = ({title, description, imgSrc, deadline, onClick}) => {
    return (
      <Card className="max-w-xs bg-white shadow-lg rounded-xl border border-gray-200">
      <div className="relative">
        <img src={imgSrc} alt="Image not found" className="object-cover w-full h-48 rounded-t-xl" />
        <div className="absolute top-0 left-0 bg-yellow-400 p-2 text-white text-xs rounded-bl-xl">In {deadline} days</div>
      </div>

      <div className="p-4">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
      </div>

      <div className="p-4 bg-yellow-400 text-center rounded-b-xl">
        <button
          onClick={onClick}
          className="text-white font-bold py-2 px-4 rounded-full hover:bg-yellow-500 transition-all"
        >
          <span className="mr-2">Go</span> <span>&#8594;</span>
        </button>
      </div>
    </Card>
        
    );
}

export default ChallengeCard;