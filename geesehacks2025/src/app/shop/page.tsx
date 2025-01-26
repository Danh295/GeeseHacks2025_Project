"use client"

import React, { useState } from "react";

export default function Shop(){
  const [points, setPoints] = useState(1000);

  const items = [
    { id: 1, name: "Campus Merch", price: 300, description: "Show off your school spirit with exclusive campus gear.", image: "https://cdn-icons-png.flaticon.com/512/5530/5530523.png" },
    { id: 2, name: "15% off Textbook Purchases", price: 200, description: "Save big on textbooks for the term.", image: "https://cdn-icons-png.flaticon.com/512/3561/3561304.png" },
    { id: 3, name: "$35 Cash Back", price: 400, description: "Get rewarded with cash for your savings, or splurge.", image: "https://cdn-icons-png.flaticon.com/512/7514/7514355.png" },
    { id: 4, name: "Free Coffee at the Campus Cafe", price: 150, description: "Fuel your next all-nighter.", image: "https://cdn-icons-png.flaticon.com/512/10751/10751407.png" },
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
      <span className="inline-flex">
        <h1 className="text-primary-yellow">Rewards Shop</h1>
      </span>
      <h3 className="mb-6 font-light">You have <span className="font-semibold">{points}</span> points to spend.</h3>

      <h2 className="mb-1 text-xl">Items for Sale:</h2>   

      {/* Shop Front Gri */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
        {items.map((item) => (
          <div key={item.id} className="p-4 border rounded-lg shadow-lg">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-4 rounded-lg" />
            <h2 className="text-x2l font-bold mb-2">{item.name}</h2>
            <p className="mb-4">{item.description}</p>
            <p className="text-lg font-semibold mb-4">Price: {item.price} points</p>
            <button
              onClick={() => handlePurchase(item.price)}
              disabled={points < item.price}
              className={`w-full px-4 py-2 rounded-lg text-white transition-all duration-300 ease-in-out
                ${points >= item.price 
                    ? "bg-primary-yellow hover:bg-secondary-yellow hover:text-black hover:scale-105 hover:shadow-md active:opacity-90 active:scale-95 active:shadow-inner" 
                    : "bg-gray-400 cursor-not-allowed"}`}
            >
              <p className="text-white font-bold">
                {points >= item.price ? "Buy Now" : "Not Enough Points"}
              </p>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
