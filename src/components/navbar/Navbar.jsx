"use client"; // This directive is necessary for client-side functionality like useState

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react"; // Importing icons for a cleaner look

const Navbar = () => {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu and close it after a link is clicked
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#141414] text-white shadow-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-6 py-4">
        {/* Logo / Title */}
        <Link
          href="#"
          className="flex items-center text-2xl font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-transparent bg-clip-text"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 mr-2 text-yellow-400"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          Vikas Rathore
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex gap-6 text-lg font-medium items-center">
          <Link
            href="#about"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            Who I'm
          </Link>
          <Link
            href="#skills"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            Projects
          </Link>
          <Link
            href="#education"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            Education
          </Link>
          {/* Contact Button for desktop */}
          <Link
            href="#contact"
            className="inline-flex items-center px-5 py-2 rounded-full border border-yellow-400 bg-yellow-400/10 text-yellow-400 font-semibold transition-transform duration-300 hover:scale-105 hover:bg-yellow-400 hover:text-black"
          >
            Contact
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </nav>

        {/* Mobile menu toggle button */}
        <button
          onClick={handleMenuClick}
          className="md:hidden text-white focus:outline-none z-50"
          aria-label="Toggle mobile menu"
        >
          {/* Renders an 'X' icon if the menu is open, otherwise a hamburger menu icon */}
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu - A simple dropdown */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-[#141414] shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center py-4 space-y-4 text-white">
          <Link
            href="#about"
            className="hover:text-yellow-400 transition-colors duration-200"
            onClick={handleMenuClick}
          >
            Who I'm
          </Link>
          <Link
            href="#skills"
            className="hover:text-yellow-400 transition-colors duration-200"
            onClick={handleMenuClick}
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="hover:text-yellow-400 transition-colors duration-200"
            onClick={handleMenuClick}
          >
            Projects
          </Link>
          <Link
            href="#education"
            className="hover:text-yellow-400 transition-colors duration-200"
            onClick={handleMenuClick}
          >
            Education
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center px-6 py-3 rounded-full border border-yellow-400 bg-yellow-400/10 text-yellow-400 font-semibold transition-transform duration-300 hover:scale-105 hover:bg-yellow-400 hover:text-black"
            onClick={handleMenuClick}
          >
            Contact
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
