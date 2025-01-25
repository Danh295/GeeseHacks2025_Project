"use client";

import React from 'react';
import { ChallengeCardProps } from '@/types';
import {Card} from 'flowbite-react';
import Link from 'next/link';
import useRouter from 'next/navigation';

export const Challenge: React.FC<ChallengeCardProps> = ({title, description, image, onClick}) => {
    return (
        <Card className="max-w-sm"
        imgAlt = "Image not found"
        imgSrc = {image}
        >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
        </Card>
    );
}

export default Challenge;