import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#0A0B14]">
      {/* Card Wrapper */}
      <div className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-8 text-black">LET'S HAVE A CHAT</h2>
        
        {/* Contact Form */}
        <form className="space-y-6">
          {/* Name Input */}
          <input
            type="text"
            placeholder="YOUR NAME"
            className="w-full bg-gray-100 p-4 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#98FF98] placeholder-gray-500"
          />
          
          {/* Email Input */}
          <input
            type="email"
            placeholder="EMAIL ADDRESS"
            className="w-full bg-gray-100 p-4 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#98FF98] placeholder-gray-500"
          />
          
          {/* Chat Textarea */}
          <textarea
            placeholder="CHAT HERE"
            className="w-full bg-gray-100 p-4 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#98FF98] min-h-[120px] placeholder-gray-500"
          />
          
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#98FF98] text-black rounded-md font-semibold hover:bg-[#98FF98]/90 transition duration-300"
          >
            SUBMIT HERE
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
