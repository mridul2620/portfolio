'use client'

import { useRef, useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { GraduationCap, MapPin, Code2, Lightbulb, User, Terminal, Database } from 'lucide-react'
import { useReveal } from '@/hooks/use-reveal'
import { QUICK_FACTS, IMPACT_STATS, ABOUT_SKILLS } from '@/lib/data'

const ICON_MAP = { GraduationCap, MapPin, Code2, Lightbulb } as const

// Dynamically import Spline only when the About section enters the viewport
// so the ~1 MB 3D scene doesn't block initial page load.
import dynamic from 'next/dynamic'
const SplineScene = dynamic(
  () => import('@/components/ui/spline-scene').then((m) => m.SplineScene),
  { ssr: false }
)

export default function About() {
  const sectionRef = useReveal<HTMLElement>(0.05)
  const headerRef  = useReveal<HTMLDivElement>(0.1)
  const leftRef    = useReveal<HTMLDivElement>(0.1)
  const rightRef   = useReveal<HTMLDivElement>(0.1)

  // Only mount the Spline scene after the section scrolls into view
  const splineWrapRef = useRef<HTMLDivElement>(null)
  const [splineVisible, setSplineVisible] = useState(false)

  useEffect(() => {
    const el = splineWrapRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSplineVisible(true)
          obs.unobserve(el)
        }
      },
      { threshold: 0.01 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="reveal-on-scroll relative section-gradient overflow-hidden py-32"
    >
      {/* Robot scene — only loaded when section enters viewport */}
      <div ref={splineWrapRef} className="absolute inset-0 z-0 opacity-70">
        {splineVisible && (
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        )}
      </div>
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-background/10 via-background/40 to-background/90" />

      <div className="relative z-10 flex flex-col pointer-events-none container mx-auto px-4 md:px-8">

        {/* Header */}
        <div ref={headerRef} className="reveal-on-scroll mb-16 text-center">
          <div className="inline-flex items-center justify-center p-2 mb-4 rounded-full bg-primary/10 text-primary pointer-events-auto">
            <User className="w-5 h-5 mr-2 ml-1" />
            <span className="text-sm font-semibold tracking-wider uppercase pr-3">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-4 text-white drop-shadow-lg">
            Engineering with <span className="gradient-text">Precision.</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Building scalable full-stack systems and reliable backend architectures that deliver impact.
          </p>
        </div>

        <div className="pb-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[1.2fr_300px_1.2fr] xl:grid-cols-[1.2fr_450px_1.2fr] gap-8 items-center">

              {/* LEFT */}
              <div ref={leftRef} className="reveal-on-scroll space-y-6 pointer-events-auto" style={{ transitionDelay: '100ms' }}>
                <div className="relative group">
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-2xl blur-sm opacity-50 group-hover:opacity-100 transition duration-500" />
                  <Card className="relative h-full glass-effect border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden bg-card/60 backdrop-blur-xl rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <CardContent className="p-8 relative z-10">
                      <div className="mb-6 flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500">
                          <Terminal className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-display font-semibold tracking-tight text-white m-0">Engineering Journey</h3>
                      </div>
                      <p className="text-neutral-300 leading-relaxed text-base font-body">
                        I am a full-stack engineer with 3+ years building production-grade web systems and cross-platform applications.
                        I specialize in designing robust backend services, scalable microservices, and REST APIs using Node.js, Java, and Python.
                      </p>
                      <p className="text-neutral-400 mt-4 leading-relaxed text-base font-body">
                        On the frontend, I focus on delivering seamless, performant, and modern user experiences using React and Next.js, always obsessing over clean architecture.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {QUICK_FACTS.map((fact) => {
                    const Icon = ICON_MAP[fact.icon as keyof typeof ICON_MAP]
                    return (
                      <Card
                        key={fact.label}
                        className="h-full glass-effect border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden relative group bg-card/40 backdrop-blur-md rounded-xl"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
                        <CardContent className="p-5 flex flex-col justify-center h-full relative z-10">
                          <Icon className="w-5 h-5 text-primary mb-3 group-hover:scale-110 transition-transform duration-500" />
                          <p className="text-sm font-semibold text-neutral-200">{fact.label}</p>
                          <p className="text-xs text-neutral-500 mt-1">{fact.sublabel}</p>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>

              {/* MIDDLE — spacer for robot */}
              <div className="hidden lg:block h-[450px]" aria-hidden="true" />

              {/* RIGHT */}
              <div ref={rightRef} className="reveal-on-scroll space-y-6 pointer-events-auto" style={{ transitionDelay: '200ms' }}>
                <div className="relative group">
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-2xl blur-sm opacity-50 group-hover:opacity-100 transition duration-500" />
                  <Card className="relative h-full glass-effect border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden bg-card/60 backdrop-blur-xl rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-bl from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <CardContent className="p-8 relative z-10">
                      <div className="mb-6 flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500">
                          <Database className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-display font-semibold tracking-tight text-white m-0">Toolkit</h3>
                      </div>
                      <div className="flex flex-wrap gap-2.5">
                        {ABOUT_SKILLS.map((skill) => (
                          <span
                            key={skill}
                            className="px-3.5 py-1.5 text-sm font-medium bg-secondary/30 text-neutral-200 rounded-lg border border-border/50 hover:bg-primary hover:border-transparent hover:text-white cursor-default transition-all duration-300 shadow-sm backdrop-blur-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {IMPACT_STATS.map((stat) => (
                    <Card
                      key={stat.label}
                      className="h-full glass-effect border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden relative group bg-[rgba(10,10,15,0.4)] backdrop-blur-md rounded-xl"
                    >
                      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
                      <CardContent className="p-5 flex flex-col justify-center h-full relative z-10 text-center">
                        <p className="text-3xl font-display font-bold text-white tracking-tighter mb-1 relative inline-block group-hover:scale-105 transition-transform duration-300">
                          {stat.value}
                          <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/0 via-primary to-primary/0 scale-0 group-hover:scale-100 transition-transform duration-500" />
                        </p>
                        <p className="text-sm font-medium text-neutral-300">{stat.label}</p>
                        <p className="text-xs text-neutral-500 mt-0.5">{stat.sub}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}