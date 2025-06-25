"use client";

import React from "react";
import { motion } from "motion/react";

function HeroSection() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#0B0A1A] flex items-center justify-start px-6 md:px-16 py-20 md:py-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/myimg3.jpg"
          alt="Background"
          className="w-full h-full object-cover  opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col gap-1 md:gap-5 max-w-4xl w-full text-white text-left mt-48 md:mt-36">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
        >
          Hi there, I am
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-lg"
        >
        Vikas Rathore
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="md:mt-1 sm:mt-2 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl"
        >
           Web & App Developer skilled in React.js, Node.js, React Native & full-stack development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-4"
        >
          <a
            href="/FullStack-Resume.pdf"
            download="Vikas_Resume.pdf"
            className="inline-block px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg font-semibold rounded-full
        bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white
        shadow-md hover:scale-105 transition-transform duration-300"
          >
            🚀 Download Resume
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;
