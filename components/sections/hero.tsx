"use client"

import { useMemo } from "react"
import { motion, type Variants } from "framer-motion"
import { ArrowDownRight, Github, Linkedin, Mail } from "lucide-react"

const TECH_TAGS = [
  "React", "Next.js", "TypeScript", "Node.js", "Java",
  "Python", "JavaScript", "Tailwind", "AWS"
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "circOut" },
  },
}

const nameVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.03 },
  },
}

const charVariants: Variants = {
  hidden: { opacity: 0, y: 40, rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: "circOut" },
  },
}

export default function Hero() {
  const splitChars = (text: string) =>
    text.split("").map((ch, i) => (
      <motion.span
        key={i}
        variants={charVariants}
        style={{ display: "inline-block" }}
      >
        {ch === " " ? "\u00A0" : ch}
      </motion.span>
    ))

  const mridulChars = useMemo(() => splitChars("Mridul"), [])
  const srivastavaChars = useMemo(() => splitChars("Srivastava"), [])

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-[#060810]"
    >
      {/* Background Layers (Pure CSS, NO JS calculations on scroll) */}
      <div className="hero-grid-lines" aria-hidden="true" />
      <div className="hero-orbs" aria-hidden="true" style={{ willChange: "transform" }}>
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>
      <div className="hero-vignette" aria-hidden="true" />

      {/* HUD Frame */}
      <div className="hud-overlay" aria-hidden="true">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hud-corner hud-tl"
        />
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hud-corner hud-tr"
        />
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hud-corner hud-bl"
        />
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hud-corner hud-br"
        />
        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "circOut" }}
          className="hud-top-line"
        />
        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "circOut" }}
          className="hud-bottom-line"
        />
      </div>

      <div className="hero-sys-label" aria-hidden="true">
        <span className="sys-dot" />
        MRIDUL.DEV / SYSTEM ACTIVE
      </div>

      {/* Main Content Area */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl w-full pt-16"
      >
        <motion.p
          variants={itemVariants}
          className="font-mono text-sm tracking-[0.25em] text-white/40 uppercase mb-8"
        >
          Portfolio / 2024
        </motion.p>

        <motion.div variants={itemVariants} className="font-mono text-sm flex items-center gap-1 mb-6 text-white/40 tracking-wider">
          <span className="text-primary opacity-70">&lt;</span>
          <span className="text-white font-semibold">MS</span>
          <span className="text-primary opacity-70">/&gt;</span>
        </motion.div>

        <motion.h1
          variants={nameVariants}
          className="font-display text-[clamp(2rem,5vw,5.5rem)] font-extrabold leading-[0.95] tracking-tighter text-white mb-8 drop-shadow-[0_0_80px_rgba(99,130,246,0.3)] whitespace-nowrap flex justify-center gap-x-[clamp(0.5rem,1.5vw,1.5rem)]"
          style={{ perspective: "600px" }}
        >
          <span className="inline-block">{mridulChars}</span>
          <span className="inline-block">{srivastavaChars}</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="font-body text-lg md:text-xl text-white/50 mb-10 tracking-wide font-light max-w-2xl"
        >
          Building scalable systems &middot; Crafting seamless UIs &middot; Shipping impact
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-2 justify-center max-w-2xl mb-12">
          {TECH_TAGS.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs md:text-sm px-4 py-1.5 rounded-full border border-primary/20 text-white/60 bg-primary/5 hover:border-primary/50 hover:text-white/90 transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center w-full mb-10">
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white bg-primary rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative flex items-center gap-2">
              Get In Touch
              <ArrowDownRight className="w-5 h-5 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
            </span>
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white/90 border border-white/20 rounded-full hover:bg-white/10 hover:text-white transition-all duration-300 active:scale-95"
          >
            View Work
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="flex gap-6 justify-center">
          <a href="mailto:contact@mridul.dev" className="text-white/40 hover:text-white hover:scale-110 transition-all duration-300">
            <Mail className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/mridul-srivastava-a198b51b5/" target="_blank" rel="noreferrer" className="text-white/40 hover:text-[#0A66C2] hover:scale-110 transition-all duration-300">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://github.com/mridul2620" target="_blank" rel="noreferrer" className="text-white/40 hover:text-white hover:scale-110 transition-all duration-300">
            <Github className="w-6 h-6" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}