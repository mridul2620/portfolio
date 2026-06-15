import dynamic from 'next/dynamic'
import Navigation from '@/components/navigation'
import Hero from '@/components/sections/hero'

const Particles = dynamic(() => import('@/components/particles'), { ssr: false })
const About     = dynamic(() => import('@/components/sections/about'))
const Skills    = dynamic(() => import('@/components/sections/skills'))
const Experience = dynamic(() => import('@/components/sections/experience'))
const Projects  = dynamic(() => import('@/components/sections/projects'))
const Contact   = dynamic(() => import('@/components/sections/contact'))
const Footer    = dynamic(() => import('@/components/footer'))

export default function Home() {
  return (
    <main className="relative overflow-hidden">

      <Particles />

      <Navigation />

      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>

      <Footer />
    </main>
  )
}