import React from 'react'


function Navbar() {
    return (
        <header className=" body-font  ">
        <div className="container mx-auto flex  flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center  mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10  rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Vikas Rathore</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center  justify-center text-xl font-medium">
            <a href='#about' className="mr-5 hover:text-yellow-500 "> Who I'm</a>
            <a href='#skills' className="mr-5 hover:text-yellow-500 ">Skills</a>
            <a href='#projects' className="mr-5 hover:text-yellow-500 ">Projects</a>
            <a href= "#education" className="mr-5  hover:text-yellow-500">Education</a>
          </nav>
          <button className="inline-flex items-center  border border-white py-1 px-3 focus:outline-none ext-2xl font-bold  mt-4 md:mt-0 rounded-full bg-yellow-400/20 text-yellow-400 ">Contact
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    )
}

export default Navbar