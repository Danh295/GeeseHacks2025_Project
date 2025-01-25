import { MouseEventHandler } from "react";

export interface ChallengeCardProps {
    title: string;
    description: string;
    image: string;
    onClick: MouseEventHandler;
}

