'use client'

import { useRef, useEffect, useState } from 'react'
import { Card } from '@/components/ui/card'
import { User, Terminal } from 'lucide-react'
import { useReveal } from '@/hooks/use-reveal'
import { INFO_CARDS } from '@/lib/data'

import dynamic from 'next/dynamic'
const SplineScene = dynamic(
  () => import('@/components/ui/spline-scene').then((m) => m.SplineScene),
  { ssr: false }
)

export default function About() {
  const sectionRef = useReveal<HTMLElement>(0.05)
  const headerRef  = useReveal<HTMLDivElement>(0.1)
  const statsRef   = useReveal<HTMLDivElement>(0.1)

  const splineWrapRef = useRef<HTMLDivElement>(null)
  const [splineVisible, setSplineVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setSplineVisible(true)
      window.removeEventListener('scroll', handleScroll)
    }

    if (window.scrollY > 0) {
      setSplineVisible(true)
    } else {
      window.addEventListener('scroll', handleScroll, { passive: true })
    }

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="reveal-on-scroll relative section-gradient overflow-hidden pt-24 md:pt-32 pb-12 md:pb-16"
    >

      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-background/10 via-background/40 to-background/90" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-col pointer-events-none container mx-auto px-4 md:px-8 max-w-7xl">

        <div ref={headerRef} className="reveal-on-scroll mb-8 text-center pointer-events-auto">
          <div className="inline-flex items-center justify-center p-2 mb-6 rounded-full bg-primary/10 text-primary">
            <User className="w-5 h-5 mr-2 ml-1" />
            <span className="text-sm font-semibold tracking-wider uppercase pr-3">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tighter mb-6 text-white drop-shadow-lg">
            Engineering with <span className="gradient-text">Precision.</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-inter">
            Full-stack engineer with 3+ years of experience building enterprise SaaS platforms, AI-powered applications, and scalable backend systems. Specializing in Java, Node.js, Python, and React with a strong focus on cloud architecture and production-grade software.
          </p>
        </div>

        <div ref={statsRef} className="reveal-on-scroll relative w-full mt-8 pointer-events-none">

          <div
            ref={splineWrapRef}
            className="absolute inset-0 w-full h-[350px] md:h-[450px] lg:h-[500px] flex items-center justify-center pointer-events-auto z-0 group mx-auto my-auto lg:my-0"
          >

            <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full pointer-events-none transition-opacity duration-700 opacity-80 group-hover:opacity-100 scale-y-50" />

            {splineVisible && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-full scale-[1.3] lg:scale-[1.4] transition-transform duration-700 ease-out origin-center pointer-events-auto">
                <SplineScene
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(300px,1fr)_auto_minmax(300px,1fr)] gap-8 lg:gap-0 items-center relative z-10 pointer-events-none">

            <div className="w-full max-w-[340px] mx-auto lg:ml-auto lg:mr-0 z-10 pointer-events-none">
              <Card className="glass-effect border border-white/5 bg-[rgba(10,10,15,0.6)] backdrop-blur-xl rounded-2xl relative p-6 lg:p-8 h-full pointer-events-none">
                <h3 className="text-xl lg:text-2xl font-display font-bold text-white mb-6 flex items-center gap-3 relative z-10">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 text-primary">
                    <Terminal className="w-4 h-4" />
                  </div>
                  What I Deliver
                </h3>
                <ul className="space-y-3 relative z-10 text-sm text-neutral-300 font-inter">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span> Enterprise SaaS Platforms
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span> AI-Powered Applications
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span> Internal Business Tools
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span> Role-Based Access Control Systems
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span> Secure Authentication Systems
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span> Backend APIs & Microservices
                  </li>
                </ul>
              </Card>
            </div>

            <div className="hidden lg:block w-[45vw] max-w-[650px] h-[500px] pointer-events-none" />

            <div className="w-full max-w-[340px] mx-auto lg:mr-auto lg:ml-0 z-10 pointer-events-none">
              <Card className="glass-effect border border-white/5 bg-[rgba(10,10,15,0.6)] backdrop-blur-xl rounded-2xl relative p-6 lg:p-8 pointer-events-none">
                <h3 className="text-xl lg:text-2xl font-display font-bold text-white mb-6 flex items-center gap-3 relative z-10">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 text-primary">
                    <User className="w-4 h-4" />
                  </div>
                  Professional Profile
                </h3>
                <ul className="space-y-4 relative z-10">
                  <li>
                    <p className="text-[10px] md:text-xs uppercase tracking-widest text-primary font-semibold mb-1">Current Role</p>
                    <p className="text-sm text-neutral-200 font-inter">Programmer Analyst</p>
                  </li>
                  <li>
                    <p className="text-[10px] md:text-xs uppercase tracking-widest text-primary font-semibold mb-1">Education</p>
                    <p className="text-sm text-neutral-200 font-inter">B.Tech (IT) - First Class</p>
                  </li>
                  <li>
                    <p className="text-[10px] md:text-xs uppercase tracking-widest text-primary font-semibold mb-1">Location</p>
                    <p className="text-sm text-neutral-200 font-inter">Coventry, UK</p>
                  </li>
                  <li>
                    <p className="text-[10px] md:text-xs uppercase tracking-widest text-primary font-semibold mb-1">Specialisation</p>
                    <p className="text-sm text-neutral-200 font-inter">Full-Stack Product Development</p>
                  </li>
                </ul>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mt-8 pointer-events-auto">
            {INFO_CARDS.map((card) => (
              <Card key={card.label} className="glass-effect border border-white/5 bg-[rgba(10,10,15,0.4)] backdrop-blur-xl rounded-xl p-5 md:p-6 text-center hover:bg-[rgba(10,10,15,0.6)] transition-all duration-300 group flex flex-col justify-center">
                <p className="text-[10px] md:text-xs uppercase tracking-widest text-primary font-semibold mb-2 group-hover:text-white transition-colors">{card.label}</p>
                <p className="text-base md:text-lg font-display font-bold text-white tracking-tight mb-1">{card.value}</p>
                <p className="text-[10px] md:text-xs text-neutral-400 font-inter">{card.subtitle}</p>
              </Card>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}