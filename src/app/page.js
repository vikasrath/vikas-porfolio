import About from '@/components/about/page'
import Contact from '@/components/contact/Contact'
import HeroSection from '@/components/hero/HeroSection'
import Navbar from '@/components/navbar/Navbar'
import Projects from '@/components/project/Project'
import Skills from '@/components/skills/Skills'
import React from 'react'

function page() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    
    <Skills/>
    <Projects/>
    <Contact/>
    </>
  )
}

export default page