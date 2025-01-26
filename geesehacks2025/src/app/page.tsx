"use client";
import Image from "next/image";

import { ChallengeCardProps } from '@/types/index';
import ChallengeCard from "@/components/ChallengeCard";
import ChallengesContainer from "@/components/ChallengesCarousel";

export default function Home() {

  const challenges: ChallengeCardProps[] = [
    {
      title: "Challenge Title 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgSrc: "https://media.istockphoto.com/id/184860418/photo/pink-piggybank-stuffed-with-dollar-bills.jpg?s=612x612&w=0&k=20&c=dzeO2lVaZfirFtLtKJtO8Q0RIn1kOnFgp3TzLDMdYOM=",
      deadline: 20,
      onClick: () => {
        // Navigate to the challenge page
      }
    },
    {
      title: "Challenge Title 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgSrc: "https://media.istockphoto.com/id/184860418/photo/pink-piggybank-stuffed-with-dollar-bills.jpg?s=612x612&w=0&k=20&c=dzeO2lVaZfirFtLtKJtO8Q0RIn1kOnFgp3TzLDMdYOM=",
      deadline: 40,
      onClick: () => {
        // Navigate to the challenge page
      }
    },
    {
      title: "Challenge Title 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgSrc: "https://media.istockphoto.com/id/184860418/photo/pink-piggybank-stuffed-with-dollar-bills.jpg?s=612x612&w=0&k=20&c=dzeO2lVaZfirFtLtKJtO8Q0RIn1kOnFgp3TzLDMdYOM=",
      deadline: 50,
      onClick: () => {
        // Navigate to the challenge page
      }
    },
    {
      title: "Challenge Title 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgSrc: "https://media.istockphoto.com/id/184860418/photo/pink-piggybank-stuffed-with-dollar-bills.jpg?s=612x612&w=0&k=20&c=dzeO2lVaZfirFtLtKJtO8Q0RIn1kOnFgp3TzLDMdYOM=",
      deadline: 60,
      onClick: () => {
        // Navigate to the challenge page
      }
    }
  ]

  return (
    <div>
      <ChallengesContainer challenges={challenges} />


    
    </div>
  );
}
