"use client";

import React, { useState, useEffect } from 'react';
import { ChallengeCardProps } from '@/types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faPencil, faTimes } from "@fortawesome/free-solid-svg-icons";

// import { Card } from 'flowbite-react';
// import Link from 'next/link';
// import useRouter from 'next/navigation';

// Singular Card Component
export const ChallengeCard: React.FC<ChallengeCardProps> = ({
  name,
  description,
  currentAmount,
  goalAmount,
  reward,
  image,
  completionDate,
}) => {
  // Calculate progress percentage
  const [isEditing, setIsEditing] = useState(false);
  const [amount, setAmount] = useState(currentAmount);

  const progress = (amount / goalAmount) * 100;
  const completed = progress >= 100;

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    if (isNaN(newValue)) 
      setAmount(0)
    else 
      setAmount(newValue);
  };

  const handleDelete = () => {
    console.log('Deleted');
  }

  useEffect(() => {
    console.log(name, description, currentAmount, goalAmount, reward, image);
  }, []);

  return (
    <div className="relative">

      {/* Conditional Button (edit/delete card) */}
      {completed
        ? <button
            onClick={handleDelete}
            className="absolute top-[-10] right-2 w-10 h-10 z-[55] bg-red-500 p-[10] text-white rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md hover:bg-red-600 active:opacity-90 active:scale-95 active:shadow-inner"
          >
            <FontAwesomeIcon icon={faTimes} className="w-5 h-5" />
          </button>
      : (<button
        onClick={() => setIsEditing(!isEditing)}
        className="absolute top-[-10] right-2 w-10 h-10 z-[55] bg-primary-yellow p-[10] text-white rounded-full shadow-lg transition-all duration-300 ease-in-out hover:text-primary-yellow hover:scale-105 hover:shadow-md hover:bg-secondary-yellow active:opacity-90 active:scale-95 active:shadow-inner active:text-white"
      >
        <FontAwesomeIcon 
          icon={faPencil} 
          className="w-5 h-5"
        />
      </button>)}      

      <div className="relative max-w-xs min-w-xs h-[400] bg-white shadow-lg rounded-xl flex flex-col p-0 m-4">

        {/* Progress bar */}        
        <div className="absolute top-0 left-0 z-50 w-full bg-secondary-yellow rounded-t-lg shadow-lg h-2 overflow-hidden">
          <div
            className="h-full bg-primary-yellow rounded-full transition duration-300 ease-in-out"
            style={{ width: `${progress + 1}%` }}
          />
        </div>  

        {/* Button */}
        <button
          onClick={() => {}}
          className="absolute right-4 top-[32%] w-16 h-16 z-50 bg-primary-yellow text-white p-4 rounded-full shadow-lg ransition-all duration-300 ease-in-out hover:text-primary-yellow hover:scale-105 hover:shadow-md hover:bg-secondary-yellow active:opacity-90 active:scale-95 active:shadow-inner active:text-white"
        >
          <FontAwesomeIcon 
            icon={faChevronRight} 
            className="w-8 h-8"
          />
        </button>
        
        {/* Image */}
        <div className="relative w-full h-full">
          <img
            src={image}
            alt="img unavailable"
            className="object-cover w-full h-4/6 rounded-t-xl border-7 flex justify-center items-center border"
          />

          {/* Rerward & Progress */}
          <div className="absolute bottom-[148px] flex flex-row justify-left items-left gap-4 pl-4 text-center rounded-b-xl">

            <div className="h-full w-fit px-5 py-2 flex justify-center items-center rounded-full bg-secondary-yellow shadow-md">
              <p >{reward}pts</p>
            </div>

            <div className="flex flex-row h-full w-fit px-5 py-2 flex justify-center items-center rounded-full bg-secondary-yellow shadow-md">
            {completed 
              ? (<p className="text-green-500  font-bold">Completed!!</p>) 
              : (isEditing 
                ? (<input
                    type="number"
                    value={amount}
                    onChange={handleAmountChange}
                    className="w-16 h-6 text-center bg-white rounded-md shadow-sm border border-white appearance-none"
                  />) 
                : (<p>${amount} / ${goalAmount}</p>)
            )}
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col flex-start flex-grow bg-primary-yellow rounded-b-lg w-full h-[135] px-4 py-5">
            <h3 className="text-white">{name}</h3>
            <p className="text-white text-sm">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
