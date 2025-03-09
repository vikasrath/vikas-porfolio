import React from 'react';
import soloweb from "../../../public/soloweb.jpg"
import mttf from "../../../public/mm.jpg"
import Image from 'next/image';
import Link from 'next/link';
import FreelancingSection from '../Freelancing/FreelancingSection';
import { PinContainer } from '../ui/3d-pin';

function Projects() {
    return (
        <section id="projects" className="py-20 bg-[#0A0B14] overflow-hidden ">
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
                    <div className="md:w-full grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-2 gap-8 gap-y-28  p-16">
                        {/* Project Card 1 */}
                        <PinContainer href="https://solocorp.org" title="SoloWeb">
                            <div className="relative h-96 w-96 p-8 bg-gradient-to-br from-[#0A0B14] to-[#1E1F2B] rounded-2xl shadow-lg  border border-gray-700 transition-transform duration-300 hover:scale-105 flex flex-col justify-between">

                                {/* Title */}
                                <h1 className="text-2xl font-bold text-white mb-2">Solocorp</h1>
                                <p>Developed as a Freelancer</p>

                                {/* Description in Bullet Points */}
                                <ul className="text-gray-300 text-sm space-y-2">
                                    <li>✔️ Register your business under government regulations.</li>
                                    <li>✔️ Get legal trademarks and copyrights.</li>
                                    <li>✔️ Design professional logos and branding.</li>
                                    <li>✔️ Hassle-free documentation and licensing.</li>
                                    <li>✔️ Trusted by startups and entrepreneurs.</li>
                                </ul>

                                {/* Button */}
                                <a
                                    href="https://solocorp.org"
                                    className="w-full mt-6 text-center py-2 bg-[#98FF98] text-black text-sm font-semibold rounded-lg transition duration-300 hover:bg-[#98FF98]/90"
                                >
                                    Visit Website
                                </a>
                            </div>
                        </PinContainer>

                        {/* Project Card 2 */}
                        <PinContainer href="https://mttfhub.com" title="MathTech Thinking Foundation">
                            <div className="relative h-96 w-96 bg-gradient-to-br from-[#0A0B14] to-[#1E1F2B] rounded-2xl shadow-lg p-6 border border-gray-700 transition-transform duration-300 hover:scale-105 flex flex-col justify-between">

                                {/* Title */}
                                <h1 className="text-2xl font-bold text-white mb-2">MathTech Thinking Foundation</h1>
                                <p>Internship </p>

                                {/* Description in Bullet Points */}
                                <ul className="text-gray-300 text-sm space-y-2">
                                    <li>✔️ A platform that promotes math & tech education.</li>
                                    <li>✔️ Offers mentorship, courses, and career guidance.</li>
                                    <li>✔️ Provides valuable resources for students and professionals.</li>
                                    <li>✔️ Focuses on research, innovation, and community learning.</li>
                                    <li>✔️ Trusted by educators, learners, and industry professionals.</li>
                                </ul>

                                {/* Button */}
                                <a
                                    href="https://mttfhub.com"
                                    className="w-full mt-6 text-center py-2 bg-[#98FF98] text-black text-sm font-semibold rounded-lg transition duration-300 hover:bg-[#98FF98]/90"
                                >
                                    Visit Website
                                </a>
                            </div>
                        </PinContainer>

                    </div>
                </div>
            </div>
            <FreelancingSection />
        </section>
    );
}

export default Projects;
