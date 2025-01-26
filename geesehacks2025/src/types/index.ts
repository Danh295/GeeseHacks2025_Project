import { MouseEventHandler } from "react";

export interface ChallengeCardProps {
    name: string;
    description: string;
    currentAmount: number;
    goalAmount: number;
    reward: number;
    image: string;
    completionDate: string;
    
}

export interface ChallengesCarouselProps {
    challenges: ChallengeCardProps[];
}

export interface MessageProps {
    message: string;
}

