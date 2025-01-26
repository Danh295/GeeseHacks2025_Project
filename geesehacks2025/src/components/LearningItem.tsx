import React from "react";
import { LearningItemProps } from "@/types";
import { Card } from "flowbite-react";
import { HiOutlineClock, HiOutlineArrowRight } from "react-icons/hi";

export const LearningItem: React.FC<LearningItemProps> = ({
  title,
  description,
  image,
  ref,
  points,
  time,
  longtext,
}: LearningItemProps) => {
  return (
    <div className="flex">
      <Card
        className="relative max-w-sm flex flex-col justify-between h-full"
        imgAlt={title}
        imgSrc={image}
      >
        {/* Title and Time */}
        <div className="flex justify-between items-start">
          {/* Title */}
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>

          {/* Time */}
          <div className="flex items-center text-gray-500 text-sm whitespace-nowrap">
            <HiOutlineClock className="mr-1 h-5 w-5" />
            {time} mins
          </div>
        </div>

        {/* Description */}
        <p className="font-normal text-gray-700 dark:text-gray-400 mb-4">
          {description}
        </p>

        {/* Points */}
        <div className="flex items-center justify-between mt-auto">
          <span className="text-primary-yellow font-bold text-lg">
            +{points} points
          </span>
        </div>

        {/* Arrow Button */}
        <button
          className="absolute bottom-4 right-4 bg-primary-yellow p-2 rounded-full shadow-lg transition-transform duration-300 hover:scale-105 active:scale-95"
          aria-label="Next"
          onClick={() => window.open(ref, "_blank")}
        >
          <HiOutlineArrowRight className="text-white h-6 w-6" />
        </button>
      </Card>
    </div>
  );
};

export default LearningItem;
