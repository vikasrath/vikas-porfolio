import React from 'react'

import Image from 'next/image'
function HeroSection() {
  return (
    <>


<div className="w-full min-h-screen bg-[#0A0B14]  overflow-hidden flex items-center justify-center">
  <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-8 py-10">
    {/* Left Section (Text) */}
    <div className="text-white flex flex-col gap-4 text-center md:text-left w-full md:w-1/2">
      <h1 className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-semibold">
        Hi there, I am
      </h1>
      <h1 className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-semibold bg-text">
        Vikas Rathore
      </h1>
      <p className="lg:text-3xl sm:text-xl text-lg lg:my-6 my-2">
        I am an experienced full-stack developer with 1+ years of expertise in React.js, NestJS, Node.js, Express.js, JavaScript, C++, and some React Native experience.
      </p>

      {/* Buttons */}
      <div className="flex sm:flex-row flex-col gap-4 lg:mt-4 mt-2">
        <button className="md:px-8 px-4 md:py-4 py-2 md:text-xl text-lg font-semibold rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
          Hire Me
        </button>
        <button className="md:px-8 px-4 md:py-4 py-2 md:text-xl text-lg font-semibold outline outline-2 rounded-md">
          About Me
        </button>
      </div>
    </div>

    {/* Right Section (Image) */}
    <div className="w-full md:w-1/2 flex justify-center">
      <img
        src="/vk.jpg"
        alt="Vikas Rathore"
        className="w-[80%] md:w-[90%] lg:w-[75%] max-w-md rounded-xl shadow-lg object-cover"
      />
    </div>
  </div>
</div>


    </>
  )
}

export default HeroSection;
