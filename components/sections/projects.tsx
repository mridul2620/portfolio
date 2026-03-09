'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Timesheet Management System',
    description: 'A comprehensive timesheet management application for tracking work hours, projects, and generating reports.',
    image: 'https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    liveUrl: '#',
    githubUrl: 'https://github.com/mridul2620/timesheet',
    featured: true,
  },
  {
    title: 'OrderInsta - Food Delivery',
    description: 'Modern food delivery application with real-time tracking, payment integration, and user-friendly interface.',
    image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React Native', 'Firebase', 'Stripe', 'Redux'],
    liveUrl: '#',
    githubUrl: 'https://github.com/mridul2620/OrderInsta',
    featured: true,
  },
  {
    title: 'Research Publication',
    description: 'Published research on modern web technologies and their applications in enterprise solutions.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Research', 'Web Technologies', 'Analysis'],
    liveUrl: 'https://www.irjmets.com/uploadedfiles/paper/issue_4_april_2023/35960/final/fin_irjmets1681551464.pdf',
    githubUrl: '',
    featured: false,
  },
  {
    title: 'E-commerce Platform',
    description: 'Full-featured e-commerce platform with admin dashboard, payment processing, and inventory management.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Next.js', 'PostgreSQL', 'Stripe', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="py-20 section-gradient">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-4"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and contributions to various projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={project.featured ? 'md:col-span-2 lg:col-span-1' : ''}
            >
              <Card className="h-full glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 overflow-hidden group">
                <div className="aspect-video overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ scale: 1.1 }}
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
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
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
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}