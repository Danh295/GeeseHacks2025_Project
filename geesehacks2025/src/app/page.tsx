"use client";
import { useEffect, useState } from "react";
import ChallengesContainer from "@/components/ChallengesCarousel";
import { ChallengeCardProps } from "@/types/index";

export default function Home() {
  const [challengeList, setChallengeList] = useState<ChallengeCardProps[]>([]);

  const getChallenges = async () => {
    try {
      const response = await fetch("http://localhost:5005/api/challenges");
      const data = await response.json();
  
      // Log the data to check its structure
      console.log("API Response:", data);
  
      // Check if challenges property exists and is an array with length
      if (data.challenges && Array.isArray(data.challenges) && data.challenges.length > 0) {
        // Map JSON response to ChallengeCardProps format
        const mappedChallenges: ChallengeCardProps[] = data.challenges.map((item: any) => {
          
          // Explicitly construct each ChallengeCardProps object
          const challenge: ChallengeCardProps = {
            
            name: item.name || "Untitled Challenge", // Default name if not provided
            description: item.description || "No description provided.", // Default description if not provided
            currentAmount: isNaN(Number(item.currentAmount)) ? 0 : Number(item.currentAmount), // Default to 0 if invalid
            goalAmount: isNaN(Number(item.goalAmount)) ? 0 : Number(item.goalAmount), // Default to 0 if invalid
            image: item.image || "/default-image.jpg", // Default image if not provided
            reward: item.reward || "No reward specified", // Default reward if not provided
            completionDate: item.completionDate || "No completion date specified", // Default completion date if not provided
          };
  
          return challenge;
        });
  
        setChallengeList(mappedChallenges);
      } else {
        console.log("No challenges found or invalid data format.");
        setChallengeList([]); // Handle accordingly
      }
    } catch (error) {
      console.error("Error fetching challenges:", error);
    }
  };
  
  
  

  useEffect(() => {
    getChallenges();
  }, []);

  return (
    <div>
      <ChallengesContainer challenges={challengeList} />
    </div>
  );
}
