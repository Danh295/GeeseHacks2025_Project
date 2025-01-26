"use client"

import { Card, Label } from "flowbite-react";
import React, { useState } from "react";
import { HiPlusCircle } from "react-icons/hi";

export default function Shop(){
  const [points, setPoints] = useState(1000);

  const items = [
    { id: 1, name: "Campus Merch", price: 300, description: "Show off your school spirit with exclusive campus gear.", image: "https://media0.giphy.com/media/NEhiN1d2dVTzpUfF9F/giphy.gif?cid=6c09b9520bbhzuqv38zutl8uvnqpshfhq2b4abopqie4kng5&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g" },
    { id: 2, name: "15% off Textbook Purchases", price: 200, description: "Save big on textbooks for the term.", image: "https://www.ednewsdaily.com/wp-content/uploads/2019/07/Noyes-Math-textbooks.jpg" },
    { id: 3, name: "$35 Cash Back", price: 400, description: "Get rewarded with cash for your savings, or splurge.", image: "https://www.shutterstock.com/shutterstock/videos/8627338/thumb/1.jpg?ip=x480" },
    { id: 4, name: "Free Coffee at the Campus Cafe", price: 150, description: "Fuel your next all-nighter.", image: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/09/30143352/cofee-recipes.jpg?tr=w-480,f-jpg,pr-true" },
  ];

  const handlePurchase = (price: number) => {
    if (points >= price) {
      setPoints(points - price);
      alert("Item purchased successfully!");
    } else {
      alert("Not enough points to purchase this item.");
    }
  };

  return (
    <div className="flex flex-col items-left p-6">
     
        

    

      {/* Shop Front Gri */}
      <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-primary-yellow">Rewards Shop</h1>
      
      <h3 className="mb-3 font-light">You have <span className="font-semibold">{points}</span> points to spend.</h3>
            <div className="w-11/12 max-w-5xl bg-white shadow-md rounded-2xl p-6 space-y-6">
              <Label className="text-xl font-bold text-gray-800">Items for sale</Label>
              <div className="flex flex-row space-x-4 overflow-x-auto p-2">
        {items.map((item) => (
          <Card
          key={item.id}
          className="max-w-sm flex flex-col justify-between h-[25rem] relative"
          imgAlt={item.name}
          imgSrc={item.image}
        >
          {/* Title and Time */}
          <div className="flex justify-between items-start">
            {/* Title */}
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.name}
            </h5>
          </div>
        
          {/* Description */}
          <p className="font-normal text-gray-700 dark:text-gray-400 mb-4">
            {item.description}
          </p>
        
          {/* Points */}
          <div className="flex items-center justify-between mt-auto">
            <span className="text-primary-yellow font-bold text-lg">
              {item.price} points
            </span>
          </div>
        
          {/* Arrow Button */}
          <button
            className="absolute bottom-4 right-4 bg-primary-yellow p-2 rounded-full shadow-lg transition-transform duration-300 hover:scale-105 active:scale-95"
            aria-label="Next"
            onClick={() => handlePurchase(item.price)} // Add purchase logic here
          >
            <HiPlusCircle className="text-white h-6 w-6" />
          </button>
        </Card>
        ))}
              </div>
            </div>
      </div>
    </div>
  );
};
