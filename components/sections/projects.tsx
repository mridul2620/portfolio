'use client'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github } from 'lucide-react'
import { useReveal } from '@/hooks/use-reveal'
import { PROJECTS } from '@/lib/data'

export default function Projects() {
  const headerRef = useReveal<HTMLDivElement>(0.1)

  return (
    <section id="projects" className="py-20 section-gradient">
      <div className="container mx-auto px-4">

        <div ref={headerRef} className="reveal-on-scroll text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and contributions to various projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} delay={index * 100} />
          ))}
        </div>

      </div>
    </section>
  )
}

function ProjectCard({
  project,
  delay,
}: {
  project: typeof PROJECTS[number]
  delay: number
}) {
  const ref = useReveal<HTMLDivElement>(0.1)

  return (
    <div
      ref={ref}
      className={`reveal-on-scroll hover:-translate-y-1.5 transition-transform duration-300 ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Card className="h-full glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 overflow-hidden group">
        <div className="aspect-video overflow-hidden">
          {/* Using plain <img> with loading="lazy" — compatible with static export.
              Explicit width/height prevents CLS (Cumulative Layout Shift). */}
          <img
            src={project.image}
            alt={project.title}
            width={600}
            height={338}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl">{project.title}</CardTitle>
            {project.featured && (
              <Badge className="bg-primary text-primary-foreground">Featured</Badge>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-4 flex-grow">
          <p className="text-muted-foreground leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex gap-2">
          {project.liveUrl && project.liveUrl !== '#' && (
            <Button variant="outline" size="sm" asChild className="flex-1">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
          {project.githubUrl && project.githubUrl !== '#' && (
            <Button variant="outline" size="sm" asChild className="flex-1">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}