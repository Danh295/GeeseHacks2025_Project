"use client";
import Image from "next/image";

import Challenge from "@/components/Challenge";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Challenge title="Submit a claim" description="Earn 50 points \& By 01/26" image="https://t3.ftcdn.net/jpg/03/04/73/68/360_F_304736811_OYuOZagjYA5nsUvgJzTUDEu5IMxXoC33.jpg" onClick={() => {}}></Challenge>
        <Challenge title="Save $100 towards student loan" description="Earn 100 points \& By 01/31" image="https://media.istockphoto.com/id/971685532/vector/education-cost-line-icon.jpg?s=612x612&w=0&k=20&c=TNcgltUn2PzKUlpzmSFP5zyBMpHTGc91y3SAW7THi5k=" onClick={() => {}}></Challenge>
      </main>
    </div>
  );
}
