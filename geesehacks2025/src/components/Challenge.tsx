"use client";

import React from 'react';
import { ChallengeCardProps } from '@/types';
import {Card} from 'flowbite-react';

export const Challenge: React.FC<ChallengeCardProps> = ({title, description, image, onClick}) => {
    return (
        <Card className="card">
            <div className="card-image">
                <img src={image} alt={title} />
            </div>
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
            </div>
            <button className="card-button" onClick={onClick}>View Challenge</button>
        </Card>
    );
}
