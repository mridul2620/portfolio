'use client'

import Hero from '@/components/sections/hero'
import About from '@/components/sections/about'
import Projects from '@/components/sections/projects'
import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'
import Contact from '@/components/sections/contact'
import Navigation from '@/components/navigation'
import Particles from '@/components/particles'

export default function Home() {
  return (
    <main className="relative overflow-hidden">

      {/* Background Effects */}
      <Particles />

      {/* Navigation */}
      <Navigation />

      {/* Content */}
      <div className="relative z-10">

        <Hero />

        <About />

        <Skills />

        <Experience />

        <Projects />

        <Contact />

      </div>
    </main>
  )
}