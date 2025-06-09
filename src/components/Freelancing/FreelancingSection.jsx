import {
  FaCode,
  FaMobileAlt,
  FaPaintBrush,
  FaServer,
  FaGlobe,
  FaBriefcase,
} from "react-icons/fa";
import { PinContainer } from "../ui/3d-pin";

const services = [
  {
    title: "Web Development",
    desc: "Building modern, responsive websites and web applications.",
    icon: <FaCode size={32} className="text-blue-400" />,
  },
  {
    title: "Mobile Apps",
    desc: "Creating scalable cross-platform mobile applications for both Android and iOS",
    icon: <FaMobileAlt size={32} className="text-green-400" />,
  },
  {
    title: "Redesign Websites",
    desc: "Enhancing website design for better user experience, speed, and SEO optimization.",
    icon: <FaPaintBrush size={32} className="text-pink-400" />,
  },
  {
    title: "Backend Development",
    desc: "Building scalable and secure server-side applications.",
    icon: <FaServer size={32} className="text-purple-400" />,
  },
  {
    title: "UI/UX Enhancement",
    desc: "Improving user experience with attractive designs.",
    icon: <FaGlobe size={32} className="text-yellow-400" />,
  },
  {
    title: "Custom Solutions",
    desc: "Providing tailored solutions for business growth.",
    icon: <FaBriefcase size={32} className="text-red-400" />,
  },
];

export default function FreelancingSection() {
  return (
    <section id="freelancing" className="py-20 pb-0 bg-[#0A0B14] text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-4">
          What We <span className="text-yellow-500">Offer</span>
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          I am a skilled web developer specializing in React.js, Next.js, and
          full-stack development. I create high-performance applications that
          bring business ideas to life. Let's work together!
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

        {/* Freelance Packages */}
        <div className="mt-20 ">
          <h2 className="text-3xl font-bold mb-4">
            Freelance <span className="text-yellow-500">Packages</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-10 text-gray-300">
            Whether you're starting out or scaling up, I offer
            performance-driven websites crafted for your goals — fully
            responsive, custom-built, and lightning fast.
          </p>

          <div class="sm:flex sm:flex-col sm:align-center lg:p-10">
            <div class="mt-12 space-y-3 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 md:max-w-5xl md:mx-auto xl:grid-cols-3">
              {/* <!-- Portfolio Website --> */}

              <div class="border border-slate-200 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 bg-white">
                <div class="p-6">
                  <h2 class="text-2xl font-bold font-serif text-gray-800">
                    Portfolio Website
                  </h2>
                  <p class="mt-2 text-gray-600 text-base leading-relaxed">
                    Perfect for individuals who want to showcase their skills,
                    projects, and contact info.
                  </p>
                  <p class="mt-6">
                    <span class="text-4xl font-extrabold text-indigo-600 tracking-tight">
                      ₹1499
                    </span>
                  </p>
                  <a
                    href="#"
                    class="mt-6 inline-block w-full rounded-md bg-indigo-600 py-2 px-4 text-sm font-semibold text-white text-center hover:bg-indigo-700 transition duration-200"
                  >
                    Get Portfolio Website
                  </a>
                </div>

                <div class="bg-slate-50 pt-5 pb-6 px-6">
                  <h3 class="text-sm font-bold tracking-wider uppercase text-gray-700">
                    What's included
                  </h3>
                  <ul class="mt-4 space-y-2 text-base text-gray-600">
                    <li class="  text-left">
                      <p>• 3+ pages (Home, About, Contact)</p>
                    </li>
                    <li class="  text-left">
                      <p>• Mobile Responsive</p>
                    </li>
                    <li class="  text-left">
                      <p>• Fast & Smooth performance</p>
                    </li>
                    <li class="  text-left">
                      <p>• Custom design (No templates)</p>
                    </li>
                    <li class="  text-left">
                      <p>• Contact form or direct message setup</p>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="border border-slate-200 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 bg-white">
                <div class="p-6">
                  <h2 class="text-2xl font-bold font-serif text-gray-800">
                    Landing Page
                  </h2>
                  <p class="mt-2 text-gray-600 text-base leading-relaxed">
                    Ideal for promoting one service, product, or idea with focus
                    on conversion.
                  </p>
                  <p class="mt-6">
                    <span class="text-4xl font-extrabold text-indigo-600 tracking-tight">
                      ₹1499
                    </span>
                  </p>
                  <a
                    href="#"
                    class="mt-6 inline-block w-full rounded-md bg-indigo-600 py-2 px-4 text-sm font-semibold text-white text-center hover:bg-indigo-700 transition duration-200"
                  >
                    Get Landing Page
                  </a>
                </div>

                <div class="bg-slate-50 pt-5 pb-6 px-6">
                  <h3 class="text-sm font-bold tracking-wider uppercase text-gray-700">
                    What's included
                  </h3>
                  <ul class="mt-4 space-y-2 text-base text-gray-600">
                    <li class="text-left">
                      <span>• Up to 3 sections (Hero, Features, CTA)</span>
                    </li>
                    <li class="text-left">
                      <span>• Speed optimized & SEO friendly</span>
                    </li>
                    <li class="text-left">
                      <span>• Custom design (No templates)</span>
                    </li>
                    <li class="text-left">
                      <span>• Email capture / WhatsApp </span>
                    </li>
                    <li class="text-left">
                      <span>• Mobile-first UI</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* <!-- Full Custom Website --> */}
              <div class="border border-slate-200 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 bg-white">
                <div class="p-6">
                  <h2 class="text-2xl font-bold font-serif text-gray-800">
                    Full Custom Website
                  </h2>
                  <p class="mt-2 text-gray-600 text-base leading-relaxed">
                    Best for businesses looking for a full website tailored to
                    their brand.
                  </p>
                  <p class="mt-6">
                    <span class="text-4xl font-extrabold text-indigo-600 tracking-tight">
                      Starting ₹4999
                    </span>
                  </p>
                  <a
                    href="#"
                    class="mt-6 inline-block w-full rounded-md bg-indigo-600 py-2 px-4 text-sm font-semibold text-white text-center hover:bg-indigo-700 transition duration-200"
                  >
                    Get Business Website
                  </a>
                </div>

                <div class="bg-slate-50 pt-5 pb-6 px-6">
                  <h3 class="text-sm font-bold tracking-wider uppercase text-gray-700">
                    What's included
                  </h3>
                  <ul class="mt-4 space-y-2 text-base text-gray-600">
                    <li class="text-left">
                      <span>• 5–10 pages or more</span>
                    </li>
                    <li class="text-left">
                      <span>• Admin panel (on demand)</span>
                    </li>
                    <li class="text-left">
                      <span>• Responsive + Fast + SEO Friendly</span>
                    </li>
                    <li class="text-left">
                      <span>• Tailor-made design with brand colors</span>
                    </li>
                    <li class="text-left">
                      <span>• Integrated contact & service forms</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
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
