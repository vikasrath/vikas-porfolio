"use client"

import React from "react";
import { FaReact, FaNodeJs, FaDatabase,  FaGitAlt, FaHtml5, FaCss3Alt, FaJs, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiC, SiCplusplus, SiReact } from "react-icons/si";
import { motion } from "framer-motion";

function Skills() {
  const skills = [
    { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "React Native", icon: <SiReact className=" text-blue-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
    { name: "MongoDB", icon: <FaDatabase className="text-green-400" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-300" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { name: "C", icon: <SiC className="text-blue-500" /> },
    { name: "C++", icon: <SiCplusplus className="text-indigo-400" /> },
  ];

  return (
    <div id="skills" className=" w-full bg-[#0A0B14] border-t-2 border-b-2  shadow-2xl shadow-white border-white text-white py-16 px-4 flex flex-col items-center">
      {/* Heading */}
      <h1 className="text-5xl font-bold mb-6 text-center text-yellow-400">MY SKILLS</h1>
      <p className="max-w-3xl text-lg text-center mb-10">
        I have experience working with various technologies in web and app development. Here are some of the key skills I specialize in:
      </p>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full max-w-5xl">
        {skills.map((skill, index) => (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            key={index}
            className="flex flex-col items-center p-6 rounded-xl bg-[#131622] shadow-lg transform hover:scale-105 transition"
          >
            <div className="text-5xl mb-3">{skill.icon}</div>
            <p className="text-lg font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
