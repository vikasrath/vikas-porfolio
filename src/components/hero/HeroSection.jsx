"use client";

import React from "react";
import { motion } from "motion/react";

function HeroSection() {
  return (
    <div className="w-full min-h-screen bg-[#0B0A1A] overflow-hidden flex items-center justify-center">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-8 py-10">
        {/* Left Section (Text) */}
        <div className="text-white flex flex-col gap-4 text-center md:text-left w-full md:w-1/2">
          <motion.h1
            initial={{ opacity: 0, x: -100, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false, amount: 0.5 }}
            className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-semibold"
          >
            Hi there, I am
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, x: -100, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: false, amount: 0.5 }}
            className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-semibold bg-text"
          >
            Vikas Rathore
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: 100, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: false, amount: 0.5 }}
            className="lg:text-3xl sm:text-xl text-lg lg:my-6 my-2"
          >
            I am an experienced full-stack developer with 1+ years of expertise
            in React.js, NestJS, Node.js, Express.js, JavaScript, C++, and some
            React Native experience.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false, amount: 0.5 }}
            className="flex sm:flex-row flex-col gap-4 lg:mt-4 mt-2"
          >
            <a href="#contact" className="md:px-8 px-4 md:py-4 py-2 md:text-xl text-lg font-semibold rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer transition-all duration-300 hover:shadow-xl hover:brightness-110">
              Hire Me
            </a>
            <button className="md:px-8 px-4 md:py-4 py-2 md:text-xl text-lg font-semibold outline outline-2 rounded-md transition-all duration-300 hover:bg-white hover:text-black">
              About Me
            </button>
          </motion.div>
        </div>

        {/* Right Section (Image) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src="/mying.jpg"
            alt="Vikas Rathore"
            className="w-[100%] md:w-[90%] lg:w-[75%] lg:max-w-md rounded-xl shadow-lg object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;
