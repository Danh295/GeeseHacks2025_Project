"use client";
import Image from "next/image";

import Challenge from "@/components/Challenge";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Card image="https://cdn.discordapp.com/attachments/1332163251860934787/1332885857803178056/image.png?ex=6796e230&is=679590b0&hm=cb629dfd56ba77934dbc24f94b0dcf91f8c1d0e7db9e263b4fa6eb9a17284129&"></Card>
        <Card image="https://cdn.discordapp.com/attachments/1332163251860934787/1332885857501450281/image.png?ex=6796e230&is=679590b0&hm=5b8d5ff1375e0a1af3fc55233f21281ee3f32e0f2cae120dacb618ea5b792a5b&"></Card>
        <Card image="https://cdn.discordapp.com/attachments/1332163251860934787/1332885858239647795/image.png?ex=6796e230&is=679590b0&hm=38663bc8b1cfc31dff78a2fa2b11105693c492767b8ef9f39c516a2164f02a90&">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Challenges</h2>
        </Card>
        <Button title="View All" onClick={() => {}}></Button>
        <Challenge title="Submit a claim" description="Earn 50 points \& By 01/26" image="https://t3.ftcdn.net/jpg/03/04/73/68/360_F_304736811_OYuOZagjYA5nsUvgJzTUDEu5IMxXoC33.jpg" onClick={() => {}}></Challenge>
        <Challenge title="Save $100 towards student loan" description="Earn 100 points \& By 01/31" image="https://media.istockphoto.com/id/971685532/vector/education-cost-line-icon.jpg?s=612x612&w=0&k=20&c=TNcgltUn2PzKUlpzmSFP5zyBMpHTGc91y3SAW7THi5k=" onClick={() => {}}></Challenge>
        <Card image="https://cdn.discordapp.com/attachments/1332163251860934787/1332885858591834153/image.png?ex=6796e230&is=679590b0&hm=fc227281c5514deca0b51e31725e30c2425bee228b73b8eec8573da57e841ca3&"></Card>
        <Card image="https://cdn.discordapp.com/attachments/1332163251860934787/1332885858935771146/image.png?ex=6796e230&is=679590b0&hm=62ce0228bdd22d000d7ac2d73835225bd674935b54a169c45c7101feab86c652&"></Card>
      </main>
    </div>
  );
}
