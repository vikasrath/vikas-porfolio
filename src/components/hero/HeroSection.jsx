"use client";

import React from "react";
import { motion } from "framer-motion"; // Note: Use framer-motion instead of motion/react
import { FaDownload } from "react-icons/fa"; // Added for a better icon on the button

// A subtle background component
const BackgroundComponent = () => {
  return (
    <div className="absolute inset-0 z-0">
      <div className="w-full h-full bg-[#0B0A1A]"></div>
      <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80"></div>
    </div>
  );
};

// Animation variants for staggered reveal
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function HeroSection() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0B0A1A]">
      <BackgroundComponent />

      {/* Foreground Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="relative z-10 flex flex-col items-center justify-center gap-4 text-center text-white px-6 md:px-16 py-20"
      >
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-wide text-gray-200"
        >
          Hi there, I am
        </motion.h1>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-lg"
        >
          Vikas Rathore
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="md:mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-300 max-w-3xl"
        >
          A passionate Web & App Developer skilled in React.js, Node.js, React Native & full-stack development.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-8">
          <a
            href="/Vikas-Resume-software.pdf"
            download="Vikas_Rathore_Resume.pdf"
            className="inline-flex items-center gap-2 px-8 py-4 text-base sm:text-lg font-bold rounded-full
            bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white
            shadow-lg hover:scale-105 transition-transform duration-300 group"
          >

            <FaDownload className="text-xl group-hover:animate-bounce" />
            <span className="relative">
              Download Resume
            </span>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HeroSection;