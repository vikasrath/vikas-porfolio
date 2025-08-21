"use client"; // Client-side directive for interactivity

import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";

// Import your project screenshots (place them in public folder or assets)
import solowebImg from "../../../public/solopic.png";
import mttfImg from "../../../public/mttfpic.png";
import amanTailorImg from "../../../public/amantailorpis.png";

function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-[#0A0B14] overflow-hidden text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Title and Description */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left gap-10">
          <div className="md:w-full">
            <h2 className="text-5xl font-extrabold mb-4 leading-tight bg-gradient-to-r from-[#FFD700] via-[#FF6347] to-[#8A2BE2] text-transparent bg-clip-text">
              My Recent Projects
            </h2>
            <p className="text-xl max-w-2xl mx-auto md:mx-0 text-gray-400 mb-8">
              Here are some of the amazing projects I've worked on. Each project
              showcases my skills in Full-Stack development using technologies
              like React.js, Node.js, and more. Feel free to explore the details
              of each project below.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-8 py-3 bg-[#98FF98] text-[#141414] rounded-full text-lg font-semibold transition-transform duration-300 hover:scale-105 hover:bg-transparent hover:text-[#98FF98] hover:border hover:border-[#98FF98]"
            >
              View More Projects
              <ArrowRight size={20} className="ml-2" />
            </a>
          </div>
        </div>

        {/* Projects Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
          {/* Project Card 2 - MathTech */}
          <div className="relative bg-gradient-to-br from-[#0A0B14] to-[#1E1F2B] rounded-2xl shadow-lg border border-gray-700 hover:scale-[1.02] transition-transform duration-300 flex flex-col">
            <img
              src={mttfImg.src}
              alt="MathTech Project"
              className="rounded-t-2xl object-cover "
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-white mb-2">
                MathTech Thinking Foundation
              </h3>
              <p className="text-sm text-gray-400 mb-4">Internship Project</p>
              <ul className="text-gray-300 text-sm space-y-2 flex-grow">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-[#98FF98] mr-2 mt-1" />{" "}
                  Promotes math & tech education
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-[#98FF98] mr-2 mt-1" />{" "}
                  Mentorship & career guidance
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-[#98FF98] mr-2 mt-1" />{" "}
                  Resources for students
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-[#98FF98] mr-2 mt-1" />{" "}
                  Research & innovation focus
                </li>
              </ul>
              <a
                href="https://mttfhub.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block text-center py-2 bg-[#98FF98] text-[#141414] text-sm font-semibold rounded-lg transition duration-300 hover:bg-transparent hover:text-[#98FF98] border border-transparent hover:border-[#98FF98]"
              >
                Visit Website
              </a>
            </div>
          </div>

          {/* Project Card 1 - Solocorp */}
          <div className="relative bg-gradient-to-br from-[#0A0B14] to-[#1E1F2B] rounded-2xl shadow-lg border border-gray-700 hover:scale-[1.02] transition-transform duration-300 flex flex-col">
            <img
              src={solowebImg.src}
              alt="Solocorp Project"
              className="rounded-t-2xl object-cover w-full h-56"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-white mb-2">Solocorp</h3>
              <p className="text-sm text-gray-400 mb-4">
                Developed as a Freelancer
              </p>
              <ul className="text-gray-300 text-sm space-y-2 flex-grow">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-[#98FF98] mr-2 mt-1" />{" "}
                  Register your business legally
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-[#98FF98] mr-2 mt-1" />{" "}
                  Trademarks & copyrights
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-[#98FF98] mr-2 mt-1" />{" "}
                  Professional logos & branding
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-[#98FF98] mr-2 mt-1" />{" "}
                  Hassle-free documentation
                </li>
              </ul>
              <a
                href="https://solocorp.org"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block text-center py-2 bg-[#98FF98] text-[#141414] text-sm font-semibold rounded-lg transition duration-300 hover:bg-transparent hover:text-[#98FF98] border border-transparent hover:border-[#98FF98]"
              >
                Visit Website
              </a>
            </div>
          </div>

          {/* Project Card 3 - Aman Tailor */}
          <div className="relative bg-gradient-to-br from-[#0A0B14] to-[#1E1F2B] rounded-2xl shadow-lg border border-gray-700 hover:scale-[1.02] transition-transform duration-300 flex flex-col">
            <img
              src={amanTailorImg.src}
              alt="Aman Tailors Project"
              className="rounded-t-2xl object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-white mb-2">
                Aman Tailors
              </h3>
              <p className="text-sm text-gray-400 mb-4">Freelance Project</p>
              <ul className="text-gray-300 text-sm space-y-2 flex-grow">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-[#98FF98] mr-2 mt-1" />{" "}
                  Tailoring service website
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-[#98FF98] mr-2 mt-1" />{" "}
                  Services, pricing, and contact
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-[#98FF98] mr-2 mt-1" />{" "}
                  SEO optimized & responsive
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-[#98FF98] mr-2 mt-1" />{" "}
                  Clean and professional UI
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-[#98FF98] mr-2 mt-1" />{" "}
                  Admin Dashboard For Managing Courses
                </li>
              </ul>
              <a
                href="https://www.amantailor4088.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block text-center py-2 bg-[#98FF98] text-[#141414] text-sm font-semibold rounded-lg transition duration-300 hover:bg-transparent hover:text-[#98FF98] border border-transparent hover:border-[#98FF98]"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
