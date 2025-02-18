"use client"

import sendMail from '@/utils/sendMail';
import React, { useState } from 'react';
import { FaGithub, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

function Contact() {
  


  const [userdata, setUserData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange =  (e) => {
    setUserData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit  = async (e)=>{
    e.preventDefault();
    
    setUserData({
      name: "",
      email: "",
      message: ""
    })
    await sendMail(userdata)

    
  }

  return (
    <section id="contact" className="py-20 bg-[#0A0B14] flex justify-center">
      <div className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-8 text-black">
          LET'S HAVE A CHAT
        </h2>

        {/* Contact Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            name="name"
            value={userdata.name}
            type="text"
            placeholder="YOUR NAME"
            className="w-full bg-gray-100 p-4 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-500"
            onChange={handleChange}
          />
          <input
            name="email"
            value={userdata.email}
            type="email"
            placeholder="EMAIL ADDRESS"
            className="w-full bg-gray-100 p-4 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-500"
            onChange={handleChange}
          />
          <textarea
            name="message"
            value={userdata.message}
            placeholder="Write Message"
            className="w-full bg-gray-100 p-4 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-green-400 min-h-[120px] placeholder-gray-500"
            onChange={handleChange}
          />
          <button
            type="submit"

            className="w-full py-3 bg-green-400 text-black rounded-md font-semibold hover:bg-green-500 hover:scale-105 transition duration-300"
          >
            SUBMIT HERE
          </button>
        </form>

        {/* Social Media Links */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-center text-black mb-2">
            Connect with me
          </h3>
          <p className='text-gray-800 text-center mb-4'>vikasrathote01322@gmail.com</p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3b5998] transition duration-300"
            >
              <FaGithub size={24} />
            </a>
           
            <a
              href="https://www.linkedin.com/in/vikas-rathore-a799432b9/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0e76a8] transition duration-300"
            >
              <FaLinkedinIn size={24} />
            </a>
            <a
              href="https://www.instagram.com/vikas.rathore0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e4405f] transition duration-300"
            >
              <FaInstagram size={24} />
            </a>
           
          </div>
        
        </div>
      </div>
    </section>
  );
}

export default Contact;
