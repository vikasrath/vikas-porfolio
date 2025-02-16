import { FaCode, FaMobileAlt, FaPaintBrush, FaServer, FaGlobe, FaBriefcase } from "react-icons/fa";

const services = [
    { title: "Web Development", desc: "Building modern, responsive websites and web applications.", icon: <FaCode size={32} className="text-blue-400" /> },
    { title: "Mobile Apps", desc: "Creating scalable cross-platform mobile applications for both Android and iOS", icon: <FaMobileAlt size={32} className="text-green-400" /> },
    { title: "Redesign Websites", desc: "Enhancing website design for better user experience, speed, and SEO optimization.", icon: <FaPaintBrush size={32} className="text-pink-400" /> },
    { title: "Backend Development", desc: "Building scalable and secure server-side applications.", icon: <FaServer size={32} className="text-purple-400" /> },
    { title: "UI/UX Enhancement", desc: "Improving user experience with attractive designs.", icon: <FaGlobe size={32} className="text-yellow-400" /> },
    { title: "Custom Solutions", desc: "Providing tailored solutions for business growth.", icon: <FaBriefcase size={32} className="text-red-400" /> }
];


export default function FreelancingSection() {
    return (
        <section id="freelancing" className="py-20 pb-0 bg-[#0A0B14] text-white">
            <div className="max-w-7xl mx-auto px-6 text-center">
                {/* Title */}
                <h2 className="text-4xl font-bold mb-4">
                    Hire Me as a <span className="text-yellow-500">Freelancer</span>
                </h2>
                <p className="text-lg max-w-2xl mx-auto mb-6">
                    I am a skilled web developer specializing in React.js, Next.js, and full-stack development. 
                    I create high-performance applications that bring business ideas to life. Let's work together!
                </p>

                {/* Services List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
                    {services.map((service, index) => (
                        <div 
                            key={index} 
                            className="bg-[#1A1C2A]/50 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:bg-[#1A1C2A]/80 transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="mb-3 flex justify-center">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-sm text-gray-300">{service.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-10">
                    <a 
                        href="#contact" 
                        className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-3xl hover:scale-105 transition duration-300"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
}
