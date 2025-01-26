"use client";

import React, { useEffect } from 'react';
import { ChallengeCardProps } from '@/types';
import { Card } from 'flowbite-react';
import Link from 'next/link';
import useRouter from 'next/navigation';

// Singular Card Component
export const ChallengeCard: React.FC<ChallengeCardProps> = ({
  name,
  description,
  currentAmount,
  goalAmount,
  reward,
  image,
}) => {
  // Calculate progress percentage
  const progress =  (currentAmount / goalAmount) * 100;
  const completed = progress >= 100;
  useEffect(() => {
    console.log(name, description, currentAmount, goalAmount, reward, image);
  }, []);
  return (
    <Card className="max-w-xs bg-white shadow-lg rounded-xl border border-gray-200">
      <div className="relative">
        <img
          src={image}
          alt="Image not found"
          className="object-cover w-full h-48 rounded-t-xl"
        />
        <div className="absolute top-0 left-0 bg-yellow-400 p-2 text-white text-xs rounded-bl-xl">
          {completed ? 'Completed' : `${Math.round(progress)}%`} completed
        </div>
      </div>

      <div className="p-4">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900">{name}</h5>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
      </div>

      <div className="p-4 bg-yellow-400 text-center rounded-b-xl">
        <div className="mb-2 text-gray-900 font-semibold">
          <span>Reward: </span>
          <span className="text-white">{reward}</span>
        </div>

        <div className="mb-2 text-gray-900 font-semibold">
          <span>Current: </span>
          <span className="text-white">${currentAmount}</span> / ${goalAmount}
        </div>

        <button
          onClick={() => {}}
          className="text-white font-bold py-2 px-4 rounded-full hover:bg-yellow-500 transition-all"
        >
          <span className="mr-2">Go</span> <span>&#8594;</span>
        </button>
      </div>
    </Card>
  );
};

export default ChallengeCard;
