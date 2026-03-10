"use client"

import { useEffect, useRef } from "react"
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { gsap } from "@/lib/gsap"

export default function Hero() {

  const heroRef = useRef<HTMLElement>(null)
  const avatarRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const iconsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {

  const ctx = gsap.context(() => {

    const tl = gsap.timeline()

    tl.from(avatarRef.current, {
      scale: 0.7,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    })

    tl.from(titleRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.4")

    tl.from(subtitleRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.6
    }, "-=0.5")

    tl.from(buttonsRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.5
    }, "-=0.4")

    tl.from(iconsRef.current?.children || [], {
      opacity: 0,
      y: 10,
      stagger: 0.15
    })

  }, heroRef)

  return () => ctx.revert()

}, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >

      {/* <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-background/40"></div> */}

      <div className="container mx-auto px-4 text-center z-10">

        {/* Avatar */}
        <div ref={avatarRef} className="mb-8">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-4xl font-bold text-primary">
              MS
            </div>
          </div>
        </div>

        {/* Title */}
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold mb-6 text-balance"
        >
          <span className="text-foreground">Hi, I'm </span>
          <span className="text-primary">
            Mridul Srivastava
          </span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto"
        >
          Full Stack & Backend Developer building scalable web systems with
          modern technologies.
        </p>

        {/* Buttons */}
        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button asChild size="lg">
            <a href="#contact">Get In Touch</a>
          </Button>

          <Button variant="outline" size="lg" asChild>
            <a href="#projects">View Projects</a>
          </Button>
        </div>

        {/* Social Icons */}
        <div
          ref={iconsRef}
          className="flex justify-center space-x-6"
        >
          <a
            href="https://github.com/mridul2620"
            target="_blank"
            className="text-muted-foreground/70 hover:text-primary transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>

          <a
            href="https://www.linkedin.com/in/mridul-srivastava-a198b51b5/"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>

          <a
            href="mailto:mridulsriv26@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </a>
      </div>

    </section>
  )
}