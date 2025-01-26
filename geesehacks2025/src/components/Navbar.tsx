"use client";

import React, { useState } from 'react'
import { FaHome, FaTrophy, FaComments, FaShoppingCart } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { icon: <FaHome />, path: "/" },
    { icon: <FaTrophy />, path: "/Challenges" },
    { icon: <FaComments />, path: "/Chat" },
    { icon: <FaShoppingCart />, path: "/Shop" },
  ];

  return (
    <nav className="sticky top-4 z-50 w-full h-auto flex justify-center items-center gap-12 px-10 mt-12">

      {/* Navbar */}
      <div className="flex flex-row gap-1 w-5/6 bg-background opacity-95 rounded-full shadow-lg">
        <div className="w-full h-full flex flex-row px-5 items-center justify-center rounded-full shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className="transform w-full h-full py-8 flex items-center justify-center hover:scale-110"
            >
              {React.cloneElement(link.icon, { 
                size: 40,
                className: "p-0 m-0",
              })}
            </a>
          ))}
        </div>
      </div>

      {/* Auth */}
      <div className="flex justify-center items-center rounded-full bg-background shadow-lg w-1/6">
        <img 
          className="w-full h-full object-fill scale-75 rounded-full" 
          src="https://wallpapers.com/images/hd/placeholder-profile-icon-8qmjk1094ijhbem9.jpg">
        </img>
      </div>
       
    </nav>
  )
}
