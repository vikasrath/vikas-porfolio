import About from '@/components/about/page'
import Contact from '@/components/contact/Contact'
import Education from '@/components/education/Education'
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
    <Projects/>
    <Skills/>
    <Education/>
    
    <Contact/>
    
    </>
  )
}

export default page