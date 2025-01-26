"use client";

import React from 'react'
import ChallengeCard from './ChallengeCard';

export default function Home() {
  return (
    <div>
      <InsuranceCard
        amount={10000}
        link="https://www.sunnet.sunlife.com/signin/csi/checkcoverage/e/home.wca?"
      />
    </div>
  )
}

type InsuranceCardProps = {
  amount: number;
  link?: string; // optional
}

const InsuranceCard: React.FC<InsuranceCardProps> = ({ amount, link = "#" }) => {
  return (
    <a
      href={link}
      className="bg-primary-yellow text-white rounded-2xl shadow-lg p-6 max-w-sm"
    >
      <p>Available Coverage</p>
      <h1>${amount}</h1>
      <p>See details</p>
    </a>
  );
}
