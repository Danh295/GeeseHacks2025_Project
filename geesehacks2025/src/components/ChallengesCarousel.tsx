"use client";

import React from 'react'

import { ChallengeCardProps } from '@/types';
import ChallengeCard from './ChallengeCard';

// Carousel of singular card components
export default function ChallengesContainer ({ challenges }: { challenges: ChallengeCardProps[]}) {

  return (
    <div className="flex flex-col gap-3 py-10 px-12">
      <h2>Challenges</h2>
      <div className="relative flex flex-col gap-2 overflow-x-auto">      

        {/* Challenge cards mapping */}
        <div className="w-max flex gap-12">
          {challenges.map((challenge, index) => (
            <div key={index}>
              <ChallengeCard 
                key={index}
                title={challenge.title} 
                description={challenge.description}
                imgSrc={challenge.imgSrc}
                deadline={challenge.deadline}
                onClick={challenge.onClick} 
                />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


