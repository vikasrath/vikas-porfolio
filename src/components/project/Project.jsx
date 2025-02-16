import React from 'react';
import soloweb from "../../../public/soloweb.jpg"
import mttf from "../../../public/mm.jpg"
import Image from 'next/image';
import Link from 'next/link';
import FreelancingSection from '../Freelancing/FreelancingSection';

function Projects() {
    return (
        <section id="projects" className="py-20 bg-[#0A0B14]">
            <div className="max-w-7xl mx-auto px-6">
                {/* Title and Description */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-10">

                    {/* Right Side (Text/Description) */}
                    <div className="md:w-1/3 text-white">
                        <h2 className="text-4xl font-bold mb-6">My Projects</h2>
                        <p className="text-lg mb-4">
                            Here are some of the amazing projects I've worked on. Each project showcases my skills in Full-Stack development using technologies like React.js, Node.js, and more. Feel free to explore the details of each project below.
                        </p>
                        <button className="px-6 py-3 bg-[#98FF98] text-black rounded-md hover:bg-[#98FF98]/90 transition">
                            View More Projects
                        </button>
                    </div>

                    {/* Left Side (Projects Gallery) */}
                    <div className="md:w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                        {/* Project Card 1 */}
                        <div className="relative bg-[#eaecfa] shadow-md overflow-hidden rounded-xl">
                            {/* Image Background */}
                            <Image
                                src={soloweb}
                                alt="Project 1"
                                className="w-full h-[600px] rounded-3xl object-cover object-top opacity-40" // Reduced opacity for the background image
                            />

                            {/* Overlay for Button */}
                            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-[#0A0B14] to-transparent p-4">
                                <a
                                    href="https://www.solocorp.org"
                                    className="px-6 py-3 text-lg font-semibold bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-3xl transition duration-300 ease-in-out transform hover:scale-105 hover:from-yellow-500 hover:to-yellow-700"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>

                        {/* Project Card 2 */}
                        <div className="relative p-6 rounded-3xl bg-[#eaecfa] shadow-md overflow-hidden">
                            {/* Image Background */}
                            <Image
                                src={mttf}
                                alt="Project 1"
                                className="w-full h-[600px] rounded-3xl object-cover object-top opacity-50" // Reduced opacity for the background image
                            />

                            {/* Overlay for Button */}
                            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-[#0A0B14] to-transparent p-4">
                                <a
                                    href="https://mttf.vercel.app"
                                    className="px-6 py-3 text-lg font-semibold bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-3xl transition duration-300 ease-in-out transform hover:scale-105 hover:from-yellow-500 hover:to-yellow-700"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           <FreelancingSection/>
        </section>
    );
}

export default Projects;
