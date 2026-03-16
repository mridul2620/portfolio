"use client"

import { useEffect, useRef } from "react"
import { Github, Linkedin, Mail, ArrowDownRight } from "lucide-react"
import { gsap } from "@/lib/gsap"
import { ScrollTrigger } from "@/lib/gsap"

// Tech stack tags that float in during Act 1
const TECH_TAGS = [
  "React", "Next.js", "Node.js", "TypeScript",
  "Java", "Python", "MongoDB",
  "Docker", "AWS"
]

export default function Hero() {
  const sectionRef  = useRef<HTMLElement>(null)
  const stickyRef   = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const act0Ref     = useRef<HTMLDivElement>(null)
  const act1Ref     = useRef<HTMLDivElement>(null)
  const act2Ref     = useRef<HTMLDivElement>(null)
  const orb1Ref     = useRef<HTMLDivElement>(null)
  const orb2Ref     = useRef<HTMLDivElement>(null)
  const orb3Ref     = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const sticky  = stickyRef.current
    if (!section || !sticky) return

    const ctx = gsap.context(() => {

      gsap.to(orb1Ref.current, {
        x: 60, y: -40, duration: 8, ease: "sine.inOut",
        yoyo: true, repeat: -1,
      })
      gsap.to(orb2Ref.current, {
        x: -50, y: 60, duration: 11, ease: "sine.inOut",
        yoyo: true, repeat: -1, delay: 1.5,
      })
      gsap.to(orb3Ref.current, {
        x: 35, y: 30, duration: 9, ease: "sine.inOut",
        yoyo: true, repeat: -1, delay: 3,
      })

      ScrollTrigger.create({
        trigger  : section,
        start    : "top top",
        end      : "bottom bottom",
        pin      : sticky,
        pinSpacing: false,
      })

      gsap.to(progressRef.current, {
        scaleX : 1,
        ease   : "none",
        scrollTrigger: {
          trigger: section,
          start  : "top top",
          end    : "bottom bottom",
          scrub  : true,
        },
      })

      gsap.set(act0Ref.current, { opacity: 0, yPercent: 12 })

      const entryTl = gsap.timeline({ delay: 0.3 })
      entryTl
        .fromTo(
          sticky.querySelectorAll(".hud-corner"),
          { opacity: 0, scale: 0.6 },
          { opacity: 1, scale: 1, stagger: 0.08, duration: 0.6, ease: "power2.out" }
        )
        .fromTo(
          sticky.querySelector(".hud-top-line"),
          { scaleX: 0 },
          { scaleX: 1, duration: 0.8, ease: "power3.out" },
          "<0.2"
        )
        .fromTo(
          sticky.querySelector(".hud-bottom-line"),
          { scaleX: 0 },
          { scaleX: 1, duration: 0.8, ease: "power3.out" },
          "<"
        )
        .to(
          act0Ref.current,
          { opacity: 1, yPercent: 0, duration: 1, ease: "power3.out" },
          ">-0.1"
        )

      const act0 = act0Ref.current
      if (act0) {
        const tl0 = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start  : "top top",
            end    : "22% top",
            scrub  : 1.2,
          },
        })
        tl0.to(act0, { opacity: 0, yPercent: -8, duration: 1 })
      }

      const act1 = act1Ref.current
      if (act1) {
        const nameChars   = act1.querySelectorAll<HTMLElement>(".char")
        const tags        = act1.querySelectorAll<HTMLElement>(".tech-tag")
        const tl1 = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start  : "22% top",
            end    : "62% top",
            scrub  : 1.2,
          },
        })
        tl1
          .fromTo(act1,
            { opacity: 0 },
            { opacity: 1, duration: 0.12 }
          )
          .fromTo(
            act1.querySelector(".act1-monogram"),
            { opacity: 0, y: 12, scale: 0.9 },
            { opacity: 1, y: 0,  scale: 1, duration: 0.2 },
            "<0.05"
          )
          .fromTo(
            nameChars,
            { opacity: 0, yPercent: 120, rotateX: -90 },
            { opacity: 1, yPercent: 0,   rotateX: 0,
              stagger: 0.012, duration: 0.3, ease: "power3.out" },
            "<0.1"
          )
          .fromTo(
            act1.querySelector(".act1-role"),
            { opacity: 0, letterSpacing: "0.6em" },
            { opacity: 1, letterSpacing: "0.18em", duration: 0.25 },
            "<0.15"
          )
          .fromTo(
            act1.querySelector(".act1-subtitle"),
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.2 },
            "<0.1"
          )
          .fromTo(
            tags,
            { opacity: 0, y: 14, scale: 0.85 },
            { opacity: 1, y: 0, scale: 1, stagger: 0.03, duration: 0.18 },
            "<0.1"
          )
          .to(act1,
            { opacity: 0, yPercent: -6, duration: 0.2 },
            ">0.05"
          )
      }

      const act2 = act2Ref.current
      if (act2) {
        const socials = act2.querySelectorAll<HTMLElement>(".social-icon")
        const tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start  : "62% top",
            end    : "92% top",
            scrub  : 1.2,
          },
        })
        tl2
          .fromTo(act2,
            { opacity: 0, yPercent: 5 },
            { opacity: 1, yPercent: 0, duration: 0.3 }
          )
          .fromTo(
            act2.querySelector(".cta-eyebrow"),
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.2 },
            "<0.1"
          )
          .fromTo(
            act2.querySelector(".cta-headline"),
            { opacity: 0, yPercent: 30 },
            { opacity: 1, yPercent: 0, duration: 0.25 },
            "<0.02"
          )
          .fromTo(
            act2.querySelector(".cta-btns"),
            { opacity: 0, y: 14 },
            { opacity: 1, y: 0, duration: 0.25 },
            "<"
          )
          .fromTo(
            socials,
            { opacity: 0, y: 8 },
            { opacity: 1, y: 0, stagger: 0.04, duration: 0.2 },
            "<"
          )
      }

    }, section)

    return () => ctx.revert()
  }, [])


  const splitChars = (text: string) =>
    text.split("").map((ch, i) => (
      <span key={i} className="char" style={{ display: "inline-block" }}>
        {ch === " " ? "\u00A0" : ch}
      </span>
    ))

  return (
    <section
      id="home"
      ref={sectionRef}
      className="hero-scroll-section"
    >

      <div ref={stickyRef} className="hero-sticky-stage">
        <div className="hero-orbs" aria-hidden="true">
          <div ref={orb1Ref} className="orb orb-1" />
          <div ref={orb2Ref} className="orb orb-2" />
          <div ref={orb3Ref} className="orb orb-3" />
        </div>
        <div className="hero-grid-lines"  aria-hidden="true" />
        <div className="hero-vignette"    aria-hidden="true" />
        <div className="hero-noise"       aria-hidden="true" />
        <div className="hud-overlay" aria-hidden="true">
          <span className="hud-corner hud-tl" />
          <span className="hud-corner hud-tr" />
          <span className="hud-corner hud-bl" />
          <span className="hud-corner hud-br" />
          <span className="hud-top-line" />
          <span className="hud-bottom-line" />
        </div>
        <div
          ref={progressRef}
          className="hero-progress-bar"
          style={{ transformOrigin: "left center", transform: "scaleX(0)" }}
          aria-hidden="true"
        />
        <div className="hero-sys-label" aria-hidden="true">
          <span className="sys-dot" />
          MRIDUL.DEV / SYSTEM ACTIVE
        </div>
        <div ref={act0Ref} className="hero-act hero-act-0">
          <p className="act0-label">Portfolio</p>
          <h2 className="act0-headline">
            Code that ships.<br />
            <span className="gradient-text">Systems that scale.</span>
          </h2>
        </div>
        <div ref={act1Ref} className="hero-act hero-act-1">
          <div className="act1-monogram">
            <span className="mono-bracket">&lt;</span>
            <span className="mono-initials">MS</span>
            <span className="mono-bracket">/&gt;</span>
          </div>
          <h1 className="hero-name" style={{ perspective: "600px" }}>
            {splitChars("Mridul")}
            <br />
            {splitChars("Srivastava")}
          </h1>

          <p className="act1-role">Full Stack Developer</p>

          <p className="act1-subtitle">
            Building scalable systems · Crafting seamless UIs · Shipping impact
          </p>

          <div className="tech-tags-grid">
            {TECH_TAGS.map((tag) => (
              <span key={tag} className="tech-tag">{tag}</span>
            ))}
          </div>
        </div>
        <div ref={act2Ref} className="hero-act hero-act-2">
          <p className="cta-eyebrow">
            <span className="sys-dot" /> Available for work
          </p>

          <h2 className="cta-headline">
            Ready to build<br />
            <span className="gradient-text">something great?</span>
          </h2>

          <div className="cta-btns">
            <a href="#contact" className="btn-primary">
              Get In Touch
              <ArrowDownRight className="btn-icon" />
            </a>
            <a href="#projects" className="btn-outline">
              View Projects
            </a>
          </div>

          <div className="cta-socials">
            <a
              href="https://github.com/mridul2620"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <Github className="w-[18px] h-[18px]" />
            </a>
            <a
              href="https://www.linkedin.com/in/mridul-srivastava-a198b51b5/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-[18px] h-[18px]" />
            </a>
            <a
              href="mailto:mridulsriv26@gmail.com"
              className="social-icon"
              aria-label="Email"
            >
              <Mail className="w-[18px] h-[18px]" />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}