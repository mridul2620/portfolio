'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Code, Database, Cloud, Smartphone } from 'lucide-react'
import { useReveal } from '@/hooks/use-reveal'
import { SKILL_CATEGORIES } from '@/lib/data'
import dynamic from 'next/dynamic'

const GlowingEffect = dynamic(
  () => import('@/components/ui/glowing-effect').then((m) => m.GlowingEffect),
  { ssr: false }
)

const ICON_MAP = { Code, Database, Cloud, Smartphone } as const

export default function Skills() {
  const headerRef = useReveal<HTMLDivElement>(0.1)

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">

        <div ref={headerRef} className="reveal-on-scroll text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 mb-4 rounded-full bg-primary/10 text-primary">
            <Code className="w-5 h-5 mr-2 ml-1" />
            <span className="text-sm font-semibold tracking-wider uppercase pr-3">Tech Stack</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Skills &amp; Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I leverage to build scalable, modern applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {SKILL_CATEGORIES.map((category, i) => {
            const Icon = ICON_MAP[category.icon as keyof typeof ICON_MAP]
            return (
              <SkillCard
                key={category.title}
                category={category}
                Icon={Icon}
                delay={i * 100}
              />
            )
          })}
        </div>

      </div>
    </section>
  )
}

// Splitting each card into its own component so the useReveal ref attaches
// per-card, giving the staggered reveal effect without Framer Motion.
function SkillCard({
  category,
  Icon,
  delay,
}: {
  category: typeof SKILL_CATEGORIES[number]
  Icon: React.ElementType
  delay: number
}) {
  const ref = useReveal<HTMLDivElement>(0.1)

  return (
    <div
      ref={ref}
      className={`reveal-on-scroll h-full ${category.className} relative p-[2px] rounded-2xl`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
      <Card className="h-full glass-effect border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden relative group bg-card/60 backdrop-blur-md rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <CardHeader className="flex flex-row items-center gap-4 pb-4 relative z-10">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500 shrink-0">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <CardTitle className="text-xl m-0 tracking-tight">{category.title}</CardTitle>
        </CardHeader>
        <CardContent className="relative z-10 flex flex-col justify-end mt-2">
          <div className="flex flex-wrap gap-2.5">
            {category.skills.map((skill) => (
              <span
                key={skill}
                className="px-3.5 py-1.5 text-sm font-medium bg-secondary/50 text-secondary-foreground rounded-lg border border-border/50 hover:bg-primary hover:border-transparent hover:text-primary-foreground cursor-default transition-all duration-300 shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}