
import React from "react";

function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md shadow-md text-white">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-6 py-4">
        {/* Logo / Title */}
        <a
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
        </a>

        {/* Navigation Links */}
        <nav className="flex gap-6 text-lg font-medium">
          <a href="#about" className="hover:text-yellow-400 transition-colors duration-200">
            Who I'm
          </a>
          <a href="#skills" className="hover:text-yellow-400 transition-colors duration-200">
            Skills
          </a>
          <a href="#projects" className="hover:text-yellow-400 transition-colors duration-200">
            Projects
          </a>
          <a href="#education" className="hover:text-yellow-400 transition-colors duration-200">
            Education
          </a>
        </nav>

        {/* Contact Button */}
        <a
          href="#contact"
          className="inline-flex items-center px-3 py-1 md:px-5 md:py-2 rounded-full border border-yellow-400 bg-yellow-400/10 text-yellow-400 font-semibold transition-transform duration-300 hover:scale-105 hover:bg-yellow-400 hover:text-black"
        >
          Contact
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </header>
  );
}

export default Navbar;
