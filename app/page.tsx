import dynamic from 'next/dynamic'
import Navigation from '@/components/navigation'
import Hero from '@/components/sections/hero'

// Above-the-fold sections are loaded eagerly.
// Everything below the fold is code-split and lazy-loaded so the initial JS
// payload only contains what is needed to paint the first screen.

const Particles = dynamic(() => import('@/components/particles'), { ssr: false })
const About     = dynamic(() => import('@/components/sections/about'))
const Skills    = dynamic(() => import('@/components/sections/skills'))
const Experience = dynamic(() => import('@/components/sections/experience'))
const Projects  = dynamic(() => import('@/components/sections/projects'))
const Contact   = dynamic(() => import('@/components/sections/contact'))

// This is a Server Component — no 'use client' directive — so Next.js can
// pre-render the HTML shell. Only the imported Client Components hydrate JS.
export default function Home() {
  return (
    <main className="relative overflow-hidden">

      {/* Background particle canvas — client-only, lazy */}
      <Particles />

      {/* Navigation — eager (above fold) */}
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