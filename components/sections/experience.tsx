'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, Briefcase } from 'lucide-react'
import { useReveal } from '@/hooks/use-reveal'
import { EXPERIENCES } from '@/lib/data'

export default function Experience() {
  const headerRef = useReveal<HTMLDivElement>(0.1)

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4">
        <div ref={headerRef} className="reveal-on-scroll text-center mb-20">
          <Badge variant="outline" className="mb-4 bg-primary/5 border-primary/20 text-primary px-4 py-1.5 text-sm">
            Professional Journey
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60">
            Work Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A timeline of my architectural decisions, technical growth, and the impact I&apos;ve delivered.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-primary/20 to-transparent" />

            <div className="space-y-16">
              {EXPERIENCES.map((exp, index) => (
                <ExperienceCard key={exp.title} exp={exp} index={index} delay={index * 150} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({
  exp,
  index,
  delay,
}: {
  exp: typeof EXPERIENCES[number]
  index: number
  delay: number
}) {
  const ref = useReveal<HTMLDivElement>(0.15)
  const isEven = index % 2 === 0

  return (
    <div
      ref={ref}
      className="reveal-on-scroll relative flex flex-col md:flex-row items-center group mb-8 last:mb-0"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Timeline dot */}
      <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-8 h-8 md:w-12 md:h-12 bg-background rounded-full border-4 border-primary/20 flex items-center justify-center z-20 shadow-[0_0_15px_rgba(var(--primary),0.1)] transition-colors duration-500 group-hover:border-primary/40">
        <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-primary rounded-full transition-transform duration-500 group-hover:scale-[1.5] group-hover:shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
        <div className="absolute inset-0 rounded-full border border-primary animate-ping opacity-10 group-hover:opacity-30 transition-opacity duration-300" />
      </div>

      <div className={`w-full ml-16 md:ml-0 flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-between`}>
        {/* Card */}
        <div className={`w-full md:w-[45%] ${isEven ? 'md:text-right' : 'md:text-left'} pt-4 md:pt-0`}>
          {/* Mobile Date */}
          <div className="md:hidden mb-4 text-primary font-medium flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {exp.period}
          </div>

          <div className="hover:-translate-y-1 transition-transform duration-300 relative">
            <Card className="glass-effect relative overflow-hidden group/card border-primary/10 hover:border-primary/30 transition-colors duration-500 rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
              <CardHeader className={`pb-4 items-start ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                <CardTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80 mb-2">
                  {exp.title}
                </CardTitle>
                <div className={`flex flex-col items-start ${isEven ? 'md:items-end' : 'md:items-start'} gap-2`}>
                  <h3 className="text-primary font-semibold text-lg flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    {exp.company}
                  </h3>
                  <span className="flex items-center gap-1.5 text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full w-fit">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </span>
                </div>
              </CardHeader>
              <CardContent className={`space-y-6 text-left ${isEven ? 'md:text-right' : 'md:text-left'} relative z-10`}>
                <p className="text-muted-foreground leading-relaxed text-[15px]">{exp.description}</p>
                <div className={`flex flex-wrap gap-2 justify-start ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-primary/5 hover:bg-primary/15 text-foreground/80 font-medium border border-primary/10 transition-colors">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Spacer */}
        <div className="hidden md:block w-[10%]" />

        {/* Date (Desktop) */}
        <div className={`hidden md:flex w-[45%] ${isEven ? 'justify-start' : 'justify-end'}`}>
          <div className={`text-xl font-bold text-muted-foreground/40 group-hover:text-primary transition-colors duration-300 flex items-center gap-3 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
            <Calendar className="w-5 h-5" />
            {exp.period}
          </div>
        </div>
      </div>
    </div>
  )
}