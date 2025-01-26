"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { FaHome, FaTrophy, FaComments, FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname(); // Get the current active path

  const navLinks = [
    { icon: <FaHome />, path: "/" },
    { icon: <FaTrophy />, path: "/challenges" },
    { icon: <FaComments />, path: "/chat" },
    { icon: <FaShoppingCart />, path: "/shop" },
  ];

  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-3/5 h-[55px] bg-white flex items-center justify-between px-6 rounded-full shadow-lg">
      {/* Navigation Links */}
      <div className="flex flex-1 justify-evenly">
        {navLinks.map((link) => (
          <a
            key={link.path}
            href={link.path}
            className={`flex flex-col items-center justify-center ${
              pathname === link.path ? "text-primary-yellow" : "text-gray-500"
            } hover:text-primary-yellow`}
          >
            {React.cloneElement(link.icon, { size: 18 })}
          </a>
        ))}
      </div>

      {/* Profile Icon */}
      <div className="w-[25px] h-[25px] bg-gray-200 rounded-full overflow-hidden border border-gray-300 shadow-md flex-shrink-0 ml-4">
        <img
          src="https://wallpapers.com/images/hd/placeholder-profile-icon-8qmjk1094ijhbem9.jpg"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    </nav>
  );
}
