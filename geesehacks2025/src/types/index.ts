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

export interface LearningItemProps {
    title: string;
    description: string;
    image: string;
    longtext: string;
    ref: string;
    points: number;
    time: number;
}
