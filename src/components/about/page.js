import React from "react";
import { FaGithub, FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiC, SiCplusplus, SiReact } from "react-icons/si";

function About() {
  return (
    <div className="w-full bg-[#0A0B14] text-white py-16 px-4 flex flex-col items-center">
      {/* Heading */}
      <h1 className="text-5xl font-bold mb-6 text-center">WHO I AM</h1>
      <p className="max-w-3xl text-lg text-center mb-10">
        I am a passionate Full Stack Developer with expertise in React.js, Next.js, Node.js, and more.
        I love building high-performance web and mobile applications, optimizing backend architecture, and crafting intuitive UI/UX experiences.
      </p>

      {/* GitHub Stats */}
      <div className="flex flex-wrap justify-center w-full max-w-4xl gap-6">
        <img
          src="https://github-readme-stats.vercel.app/api?username=vikasrath&show_icons=true&theme=radical"
          alt="GitHub Stats"
          className="w-full md:w-[48%] h-auto rounded-xl shadow-lg"
        />
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=vikasrath&layout=donut&theme=transparent"
          alt="Top Languages"
          className="w-full md:w-[48%] h-auto rounded-xl shadow-lg"
        />
      </div>

      {/* CTA Buttons */}
      <div className="flex gap-6 mt-10">
        <button className="px-6 py-3 text-lg font-semibold rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 transition">
          Hire Me
        </button>
        <button className="px-6 py-3 text-lg font-semibold border border-white rounded-md hover:bg-white hover:text-black transition">
          About Me
        </button>
      </div>
    </div>
  );
}

export default About;
