"use client";

import React from 'react'

export default function HomePage() {
  return (
    <div className="px-12 pt-10 flex flex-col gap-8">
      <div className="relative h-[160px] flex flex-row justify-between gap-8">
        <InsuranceCard
          amount={758.92}
          link="https://www.sunnet.sunlife.com/signin/csi/checkcoverage/e/home.wca?"
        />
        <LeaderboardCard 
          rank={1} 
          imgSrc="https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/University_of_Waterloo_seal.svg/1200px-University_of_Waterloo_seal.svg.png"
        />
        <StreakCard days={12}/>
      </div>
      <div className="relative h-[160px] flex flex-row justify-between gap-8">
        <PointsCard 
        amount = {1000}
        link = "/shop"
         />
          
       
      <TuitionCard 
        amount={204.2}
        total={1309}
      />
      </div>
    </div>
  )
}

type InsuranceCardProps = {
  amount: number;
  link?: string; // optional
}

const InsuranceCard: React.FC<InsuranceCardProps> = ({ amount, link = "#" }) => {
  return (
    <div className="relative h-full w-2/4 flex flex-col flex-grow justify-center items-left p-6 bg-primary-yellow text-white rounded-2xl shadow-lg transition-all duration-300 ease-in-out hover:text-black hover:scale-105 hover:shadow-md active:opacity-90 active:scale-95 active:shadow-inner">
      <a
        href={link}
        target="_blank"
        className="absolute top-0 left-0 right-0 bottom-0 rounded-2xl "
      />
      <p className="text-white">Available Coverage:</p>
      <h1 className="text-white">${amount.toFixed(2)}</h1>
      <p className="text-white">Click to check details</p>

    </div>
  );
}
type PointsCardProps = {
  amount: number;
  link?: string; // optional
}

const PointsCard: React.FC<PointsCardProps> = ({ amount, link = "#" }) => {
  return (
    <div className="relative h-full w-2/4 flex flex-col flex-grow justify-center items-left p-6 bg-primary-yellow text-white rounded-2xl shadow-lg transition-all duration-300 ease-in-out hover:text-black hover:scale-105 hover:shadow-md active:opacity-90 active:scale-95 active:shadow-inner">
      <a
        href={link}
        target=""
        className="absolute top-0 left-0 right-0 bottom-0 rounded-2xl "
      />
      <p className="text-white">Points:</p>
      <h1 className="text-white">{amount}</h1>
      <p className="text-white">Click to redeem!</p>

    </div>
  );
}

type StreakProps = {
  days: number;
};

const StreakCard: React.FC<StreakProps> = ({ days }) => {
  return (
    <div className="relative h-full w-1/6 flex flex-col flex-grow justify-center items-left p-6 bg-primary-yellow text-white rounded-2xl shadow-lg transition-all duration-300 ease-in-out hover:text-black hover:scale-105 hover:shadow-md active:opacity-90 active:scale-95 active:shadow-inner">
      <a
        href={""}
        target=""
        className="absolute top-0 left-0 right-0 bottom-0 rounded-2xl"
      />
      <p className="text-white">Daily Streak:</p>
      <div className="flex items-center gap-2">
        <h1 className="text-white">{days}</h1>
        <span className="text-red-500 text-4xl">🔥</span>
      </div>
      <p className="text-white">Keep it up!</p>
    </div>
  );
};

type LeaderboardCardProps = {
  rank: number;
  imgSrc?: string; // optional
  link?: string; // optional
}

const LeaderboardCard: React.FC<LeaderboardCardProps> = ({ rank, imgSrc, link = "" }) => {
  return (
    <div className="relative h-full w-1/6 flex flex-col flex-grow justify-center items-start p-6 bg-primary-yellow text-white rounded-2xl shadow-lg transition-all duration-300 ease-in-out hover:text-black hover:scale-105 hover:shadow-md active:opacity-90 active:scale-95 active:shadow-inner">
      <a
        href={link}
        target="_blank"
        className="absolute top-0 left-0 right-0 bottom-0 rounded-2xl "
      />
      <p className="text-white">Ranking:</p>
      <span className="flex flex-row justify-left items-left gap-4">
        <h1 className="text-white">#{rank}</h1>
        <div className="h-20 w-20 p-2 bg-background rounded-full shadow-lg m-2 mt-[-16px]">
          <img
            src={imgSrc}
            alt="Image not found"
            className="object-cover w-full h-full rounded-full"
          />
        </div>
      </span>
      <p className="text-white">Click to check details</p>

    </div>
  );
}

type TuitionCardProps = {
  amount: number;
  total: number; 
}

const TuitionCard: React.FC<TuitionCardProps> = ({ amount, total }) => {
  const progressPercentage = (amount / total) * 100;

  return (
    <div className="relative h-full w-full flex flex-col flex-grow justify-center items-start p-6 bg-secondary-yellow text-white rounded-2xl border-4 border-primary-yellow">
      <span className="w-full flex flex-row justify-between items-center">
        <h3 className="text-primary-yellow">Cash back towards tuition:</h3>
        <h2 className="text-white font-extrabold">${amount.toFixed(2)}</h2>
      </span>

      {/* Progress bar */}        
      <div className="w-full bg-white rounded-full h-2 mt-2">
        <div
          className="bg-primary-yellow rounded-full h-full transition duration-300 ease-in-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
}

