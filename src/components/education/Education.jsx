
"use client"
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    year: "2023 - Present",
    degree: "Bachelor of Computer Applications",
    institution: "Baba Farid College of Engineering & Technology",
    description: "Currently pursuing BCA, focusing on full-stack web development and software engineering.",
    iconColor: "text-yellow-400", 
    address: " Deon,Bathinda, Punjab",
    cgpa: "75%"
  },
  {
    year: "2021 - 2023",
    degree: "Higher Secondary Education",
    institution: "Government Senior Secondary School",
    description: "Completed 12th with a strong foundation in computer science and mathematics.",
    iconColor: "text-green-400",
    address: "  Shri Muktsar Sahib, Punjab",
    cgpa: "87%"
  },
  {
    year: "2019 - 2021",
    degree: "Secondary Education",
    institution: "Government Senior Secondary School",
    description: "Completed 10th with a focus on science and technology.",
    iconColor: "text-purple-400",
    address: "  Shri Muktsar Sahib, Punjab",
    cgpa: "100%"
  },
];

const Education = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-white text-center mb-12">Education</h2>
        <div className="relative border-l-4 border-blue-500 pl-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-10 ml-5 lg:ml-0 relative group hover:scale-105 transition-transform duration-300"
            >
              {/* Colorful Icon */}
              <div className={`absolute -left-[55px] bg-gray-800 ${edu.iconColor} w-10 h-10 flex items-center justify-center rounded-full shadow-lg shadow-blue-500/50`}>
                <FaGraduationCap size={20} />
              </div>

              {/* Education Details */}
              <h3 className="text-2xl font-semibold text-white  transition">
                {edu.degree}
              </h3>
              <p className="text-gray-300 font-medium">{edu.institution}</p>
              <p className="text-gray-300 font-medium">{edu.address}</p>
              <p className="text-gray-300 font-medium"> Score {edu.cgpa}</p>
              <span className="text-blue-400 font-bold">{edu.year}</span>
              <p className="text-gray-400 mt-2 leading-relaxed">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
