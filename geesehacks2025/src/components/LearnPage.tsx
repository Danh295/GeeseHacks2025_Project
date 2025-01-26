"use client";

import { Label } from "flowbite-react";
import React from "react";
import LearningItem from "./LearningItem";
import { LearningItemProps } from "@/types";

export default function LearnPage() {
  const learningItems: LearningItemProps[] = [
    {
      title: "Market Indicators",
      description: "Learn about the macro economic indicators",
      image:
        "https://equitablegrowth.org/wp-content/uploads/2025/01/Benchmarking-the-U.S.-economy-1080x675.jpg",
      ref: "https://www.investopedia.com/articles/personal-finance/020215/top-ten-us-economic-indicators.asp",
      points: 50,
      time: 10,
      longtext: "",
    },
    {
      title: "Tracker",
      description: "Interpret the economy based on the data you receive",
      image:
        "https://ibpf.org/wp-content/uploads/2020/08/Insta-Blog-Template-21-1080x675.png",
      ref: "https://www150.statcan.gc.ca/n1/pub/71-607-x/71-607-x2023022-eng.htm",
      points: 75,
      time: 12,
      longtext: "",
    },
    {
      title: "ETFs",
      description: "What makes them so attractive over other tools?",
      image:
        "https://kenyanwallstreet.com/wp-content/uploads/2022/11/Univeris-Blog-Mastheads_1080x67_ETF25.png",
      ref: "https://www.investopedia.com/terms/e/etf.asp",
      points: 150,
      time: 15,
      longtext: "",
    },
    
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-11/12 max-w-5xl bg-white shadow-md rounded-2xl p-6 space-y-6">
        <Label className="text-xl font-bold text-gray-800">Education Centre</Label>
        <div className="flex flex-row space-x-4 overflow-x-auto p-2">
          {learningItems.map((item, index) => (
            <LearningItem key={index} {...item} />
          ))}
        </div>
      </div>
    </main>
  );
}
