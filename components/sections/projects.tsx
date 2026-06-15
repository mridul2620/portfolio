/* eslint-disable @next/next/no-img-element */
'use client'

import Image from 'next/image'
import { useState, useRef, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { Badge } from '@/components/ui/badge'
import {
  ExternalLink,
  Github,
  ArrowRight,
  X,
  Layers,
  Target,
  Zap,
  Clock,
  User,
  ChevronRight,
  TrendingUp,
  CheckCircle2,
  AlertTriangle,
  Cpu,
} from 'lucide-react'
import {
  PROJECTS,
  type Project,
} from '@/lib/data'
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useInView,
  useMotionValueEvent,
} from 'motion/react'

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<Project | null>(null)
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (expandedProject || lightboxImage) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [expandedProject, lightboxImage])

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 max-w-7xl">

        <SectionHeader />

        <ProjectGrid
          projects={PROJECTS}
          onExpand={setExpandedProject}
        />
      </div>

      {mounted && createPortal(
        <AnimatePresence>
          {expandedProject && (
            <ProjectDetail
              project={expandedProject}
              onClose={() => setExpandedProject(null)}
            />
          )}
        </AnimatePresence>,
        document.body
      )}

      {mounted && createPortal(
        <AnimatePresence>
          {lightboxImage && (
            <Lightbox
              image={lightboxImage}
              onClose={() => setLightboxImage(null)}
            />
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  )
}

function SectionHeader() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      className="text-center mb-16 md:mb-24"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-6">
        <Layers className="w-3.5 h-3.5 text-primary" />
        <span className="text-xs font-mono tracking-wider text-primary uppercase">
          Case Studies
        </span>
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-syne font-bold mb-4 tracking-tight">
        Featured{' '}
        <span className="gradient-text">Projects</span>
      </h2>

      <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto font-inter mb-10 leading-relaxed">
        Each project is a case study in solving real problems with modern engineering.
        Measurable impact, clean architecture, production-grade code.
      </p>
    </motion.div>
  )
}

function FeaturedProject({
  project,
  index,
  onExpand,
  onImageClick,
}: {
  project: Project
  index: number
  onExpand: () => void
  onImageClick: () => void
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  return (
    <motion.div
      ref={cardRef}
      className="mb-20 md:mb-32"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`
        relative rounded-2xl md:rounded-3xl [overflow:clip]
        border border-white/[0.08] bg-white/[0.02]
        group
      `}>

        <div className={`h-1 w-full bg-gradient-to-r ${project.gradient.replace(/\/20/g, '/60')}`} />

        <div className="flex flex-col lg:flex-row items-stretch">

          <div className="w-full lg:w-[48%] flex flex-col border-b lg:border-b-0 lg:border-r border-white/[0.08] bg-white/[0.01]">

            <button
              onClick={onImageClick}
              className="relative w-full h-64 sm:h-80 lg:h-[380px] overflow-hidden cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary block"
              aria-label={`View ${project.title} fullscreen image`}
            >
              <motion.div
                className="absolute inset-0 flex items-center justify-center p-4 sm:p-8"
                style={{ y: imageY }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-2xl rounded-lg will-change-transform"
                />
              </motion.div>

              <div className="absolute top-4 left-4 flex items-center gap-2">
                <div className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs font-mono text-white/80">
                  <User className="w-3 h-3 inline mr-1.5 opacity-60" />
                  {project.role}
                </div>
                <div className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs font-mono text-white/80">
                  <Clock className="w-3 h-3 inline mr-1.5 opacity-60" />
                  {project.duration}
                </div>
              </div>
            </button>

            <div className="p-6 sm:p-8 flex flex-col gap-6 flex-1">

              <MetricsDashboard metrics={project.metrics} />

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-white/5 text-muted-foreground border border-white/[0.06] transition-colors hover:border-primary/30 hover:text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col justify-between bg-black/20">
            <div className="space-y-6">

              <Badge className="bg-primary/10 text-primary border-primary/20 font-mono text-[10px] tracking-widest uppercase">
                {project.category}
              </Badge>

              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-syne font-bold mb-3 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base font-inter leading-relaxed max-w-lg">
                  {project.subtitle}
                </p>
              </div>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                  <Target className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    <span className="text-red-400 font-semibold block mb-1 font-syne">The Problem</span>
                    {project.problem}
                  </p>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                  <Zap className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    <span className="text-emerald-400 font-semibold block mb-1 font-syne">The Solution</span>
                    {project.solution}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-6 pt-6 border-t border-white/[0.06]">
              <button
                onClick={onExpand}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                View Case Study
                <ArrowRight className="w-4 h-4" />
              </button>

              {project.githubUrl && project.githubUrl !== '#' && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full border border-white/10 text-muted-foreground hover:text-foreground hover:border-white/25 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Github className="w-4 h-4" />
                  Source Code
                </a>
              )}

              {project.liveUrl && project.liveUrl !== '#' && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full border border-white/10 text-muted-foreground hover:text-foreground hover:border-white/25 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function MetricsDashboard({ metrics }: { metrics: Project['metrics'] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
      {metrics.map((metric) => (
        <MetricCard key={metric.label} metric={metric} />
      ))}
    </div>
  )
}

function MetricCard({ metric }: { metric: Project['metrics'][number] }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const [displayValue, setDisplayValue] = useState('0')

  useEffect(() => {
    if (!isInView) return

    const numericValue = parseFloat(metric.value)
    if (isNaN(numericValue)) {
      setDisplayValue(metric.value)
      return
    }

    const duration = 1200
    const startTime = performance.now()
    const isFloat = metric.value.includes('.')

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)

      const current = numericValue * eased
      setDisplayValue(isFloat ? current.toFixed(1) : Math.floor(current).toString())

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, metric.value])

  return (
    <div
      ref={ref}
      className="relative p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-center group hover:border-primary/20 transition-colors duration-300"
    >
      <div className="text-lg sm:text-xl font-bold font-mono text-foreground tracking-tight">
        {metric.prefix}
        {displayValue}
        {metric.suffix && (
          <span className="text-primary text-sm">{metric.suffix}</span>
        )}
      </div>
      <div className="text-[10px] sm:text-xs text-muted-foreground mt-1 font-inter">
        {metric.label}
      </div>
    </div>
  )
}

function ProjectGrid({
  projects,
  onExpand,
}: {
  projects: Project[]
  onExpand: (p: Project) => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div ref={ref}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            onExpand={() => onExpand(project)}
            parentInView={isInView}
          />
        ))}
      </div>
    </div>
  )
}

function ProjectCard({
  project,
  index,
  onExpand,
  parentInView,
}: {
  project: Project
  index: number
  onExpand: () => void
  parentInView: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={parentInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <button
        onClick={onExpand}
        className="group w-full text-left rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.02] hover:border-primary/20 transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >

        <div className={`h-0.5 w-full bg-gradient-to-r ${project.gradient.replace(/\/20/g, '/40')}`} />

        <div className="relative h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden bg-black/20">
          <img
            src={project.image}
            alt={project.title}
            width={600}
            height={400}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            {project.metrics.slice(0, 3).map((m) => (
              <div
                key={m.label}
                className="px-2 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-center flex-1"
              >
                <div className="text-xs font-bold font-mono text-white">
                  {m.prefix}{m.value}{m.suffix}
                </div>
                <div className="text-[9px] text-white/50">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="text-lg sm:text-xl font-syne font-bold tracking-tight group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4 font-inter line-clamp-2">
            {project.subtitle}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-[10px] font-mono rounded-md bg-white/5 text-muted-foreground border border-white/[0.06]"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-2 py-0.5 text-[10px] font-mono text-muted-foreground">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        </div>
      </button>
    </motion.div>
  )
}

function ProjectDetail({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <motion.div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >

      <motion.div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      <motion.div
        className="relative z-10 w-full max-w-4xl mx-4 my-8 sm:my-12 md:my-16 rounded-2xl md:rounded-3xl overflow-hidden border border-white/[0.08] bg-[#0a0a14]"
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} case study`}
      >

        <div className={`h-1 w-full bg-gradient-to-r ${project.gradient.replace(/\/20/g, '/60')}`} />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden bg-black/20">
          <img
            src={project.image}
            alt={project.title}
            width={1200}
            height={800}
            className="w-full h-full object-contain p-4 sm:p-8 drop-shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] via-[#0a0a14]/40 to-transparent pointer-events-none" />

          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-mono text-white/40">
                <User className="w-3 h-3 inline mr-1" />{project.role}
              </span>
              <span className="text-xs font-mono text-white/40">
                <Clock className="w-3 h-3 inline mr-1" />{project.duration}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-syne font-bold tracking-tight">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base mt-1 font-inter">
              {project.subtitle}
            </p>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-10">

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] text-center"
              >
                <div className="text-xl sm:text-2xl font-bold font-mono text-foreground">
                  {m.prefix}{m.value}
                  {m.suffix && <span className="text-primary text-sm">{m.suffix}</span>}
                </div>
                <div className="text-xs text-muted-foreground mt-1">{m.label}</div>
              </div>
            ))}
          </div>

          <div>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-inter">
              {project.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-red-500/5 border border-red-500/10">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-4 h-4 text-red-400" />
                <span className="text-sm font-semibold text-red-400 font-syne">The Problem</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
            </div>
            <div className="p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-semibold text-emerald-400 font-syne">The Solution</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.solution}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {project.businessImpact && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-foreground font-syne">Business Impact</span>
                </div>
                <div className="space-y-2">
                  {project.businessImpact.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.impact && project.impact.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-semibold text-foreground font-syne">Measurable Results</span>
                </div>
                <div className="space-y-2">
                  {project.impact.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                      <ChevronRight className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {project.features && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Layers className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-foreground font-syne">Key Features</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.features.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                    <span className="text-sm text-muted-foreground leading-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.challenges && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-4 h-4 text-orange-400" />
                <span className="text-sm font-semibold text-foreground font-syne">Engineering Challenges Overcome</span>
              </div>
              <div className="space-y-2">
                {project.challenges.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-orange-500/5 border border-orange-500/10">
                    <Target className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {(project.systemDesign || project.architecture) && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Cpu className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-foreground font-syne">System Design &amp; Architecture</span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                <div className="lg:col-span-7 space-y-2">
                  {project.architecture.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                      <span className="w-5 h-5 flex items-center justify-center text-[10px] font-mono font-bold text-primary bg-primary/10 rounded-md flex-shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                {project.systemDesign && (
                  <div className="lg:col-span-5 flex flex-col gap-2">
                    {Object.entries(project.systemDesign).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                        <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{key}</span>
                        <span className="text-sm font-semibold text-foreground text-right max-w-[60%]">{value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          <div>
            <span className="text-sm font-semibold text-foreground font-syne block mb-3">Tech Stack</span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-mono rounded-lg bg-white/5 text-muted-foreground border border-white/[0.08] hover:border-primary/30 hover:text-foreground transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-4 border-t border-white/[0.06]">
            {project.githubUrl && project.githubUrl !== '#' && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full bg-white/5 border border-white/10 text-foreground hover:bg-white/10 transition-all duration-300"
              >
                <Github className="w-4 h-4" />
                View Source Code
              </a>
            )}
            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                View Live
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function Lightbox({ image, onClose }: { image: string; onClose: () => void }) {

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >

      <div className="absolute inset-0 bg-black/95 backdrop-blur-md" onClick={onClose} />

      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-8 sm:right-8 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        aria-label="Close fullscreen image"
      >
        <X className="w-6 h-6" />
      </button>

      <motion.img
        src={image}
        alt="Fullscreen view"
        className="relative z-10 max-w-full max-h-full object-contain drop-shadow-2xl"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.div>
  )
}