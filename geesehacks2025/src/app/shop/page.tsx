"use client"

import React, { useState } from "react";

export default function Shop(){
  const [points, setPoints] = useState(1000);

  const items = [
    { id: 1, name: "Self-help Books", price: 300, description: "For those tryna carry the godamn boats." },
    { id: 2, name: "Free Gym Pass", price: 200, description: "For those tryna get big as hell." },
    { id: 3, name: "Weekend Doom Scroll", price: 400, description: "Unleash your inner procrastiner, drown in endless hours of meaningless stimulation over the weekend." },
    { id: 4, name: "Memes for Days", price: 150, description: "Unleash endless euphoria, unlimited dopamine, limitless potential, for the next 3 days." },
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
        <h1>Welcome to the&nbsp;</h1>
        <h1 className="text-primary-yellow">Shop!</h1>
      </span>
      <h3 className="mb-6 font-light">You have <span className="font-semibold">{points}</span> points to spend.</h3>

      <h2 className="mb-1 text-xl">Items for Sale:</h2>   

      {/* Shop Front Gri */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
        {items.map((item) => (
          <div key={item.id} className="p-4 border rounded-lg shadow-lg">
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
