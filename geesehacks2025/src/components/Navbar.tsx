"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { FaHome, FaBook, FaComments, FaShoppingCart, FaUser } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname(); // Get the current active path

  const navLinks = [
    { icon: <FaHome />, path: "/" },
    { icon: <FaBook />, path: "/learn" },
    { icon: <FaComments />, path: "/chat" },
    { icon: <FaShoppingCart />, path: "/shop" },
    { icon: <FaUser />, path: "https://www.linkedin.com/in/kevindstrain/?originalSubdomain=ca" },
  ];

  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[400px] bg-white flex items-center justify-between p-3 rounded-full shadow-xl">
      {/* Navigation Links */}
      <div className="flex flex-1 justify-evenly">
        {navLinks.map((link) => (
          <a
            key={link.path}
            href={link.path}
            className={`flex items-center justify-center ${
              pathname === link.path ? "text-primary-yellow" : "text-gray-400"
            } hover:text-primary-yellow transition-colors`}
          >
            {React.cloneElement(link.icon, { size: 24 })}
          </a>
        ))}
      </div>
    </nav>
  );
}
