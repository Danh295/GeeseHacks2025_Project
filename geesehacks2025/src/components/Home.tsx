"use client";

import React from 'react';
import { CardProps } from '@/types';
import {Card} from 'flowbite-react';
import Link from 'next/link';
import useRouter from 'next/navigation';

export const Button: React.FC<Buttons> = ({title, onClick}) => {
    return (
        <Card className="max-w-xs"
        imgAlt = "Image not found"
        imgSrc = {image}
        >
          <h5 className="font-normal text-gray-700 dark:text-gray-400">
            {title}
          </h5>
        </Card>
    );
}

export const Card: React.FC<CardProps> = ({title, description, image, onClick}) => {
    return (
        <Card className="max-w-xs"
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


export default Home;
