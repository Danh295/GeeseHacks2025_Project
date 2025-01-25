"use client";
import Image from "next/image";


import Challenge from "@/components/Challenge";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
        <Challenge title="Challenge 1" description="This is the first challenge" image="https://suncentral.sunlife.ca/content/dam/sunlife/regional/canada/images/insurance-solutions/suncentral-socialshare-logo.jpg" onClick={() => {}}></Challenge>

      
        
      </main>
    </div>
  );
}
