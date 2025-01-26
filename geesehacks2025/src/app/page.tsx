"use client";
import Image from "next/image";

import ChallengeCard from "@/components/Challenge";
export default function Home() {
  return (
    <div>
      <ChallengeCard
        title="Challenge Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        imgSrc="https://media.istockphoto.com/id/184860418/photo/pink-piggybank-stuffed-with-dollar-bills.jpg?s=612x612&w=0&k=20&c=dzeO2lVaZfirFtLtKJtO8Q0RIn1kOnFgp3TzLDMdYOM="
        deadline={40}
        onClick={() => {
          // Navigate to the challenge page
        }}
      />
      {/* Add more ChallengeCard components here */}
    </div>
  );
}
