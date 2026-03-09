'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Programmer Analyst',
    company: 'Pragmatic Designs & Solutions Ltd',
    location: 'Coventry, UK',
    period: 'November 2023 - Present',
    description: 'Optimized and deployed high-performance Java microservices and scalable web applications with cloud solutions, improving UX, speed, and delivery efficiency',
    technologies: ['React', 'Java', 'Next.js', 'Node.js', 'TypeScript', 'Express.js', 'AWS', 'MongoDB', 'Python', 'RESTful APIs', 'CI/CD', 'Docker', 'GitHub', 'Postman'] ,
  },
  {
    title: 'Full-stack Developer',
    company: 'Safety Circle Pvt Ltd',
    location: 'Chandigarh, India',
    period: 'March 2023 - November 2023',
    description: 'Developed and integrated cross-platform Flutter applications and web applications with robust architectures, improving performance, maintainability, and user experience.',
    technologies: ['Flutter', 'Dart', 'React', 'Java', 'Next.js', 'Node.js', 'TypeScript', 'Express.js', 'Figma', 'MongoDB', 'RESTful APIs', 'CI/CD', 'GitHub', 'Postman'] ,
  },
  {
    title: 'Software Developer Intern',
    company: 'Research Designs and Standard Organization - Indian Railways',
    location: 'Lucknow, India',
    period: ' August 2022 - March 2023',
    description: 'Contributed to feature development and learned industry best practices in agile environment.',
    technologies: ['Flutter', 'Dart', 'Java', 'Python', 'SQL', 'Git', 'GitHub', 'Postman', 'Django', 'RESTful APIs', 'CI/CD'],
  },
];

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="experience" className="py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-4"
      >
        <motion.div 
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and key milestones in software development
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-px bg-border"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } items-center`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-16 md:ml-0`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300">
                        <CardHeader>
                          <CardTitle className="text-xl">{exp.title}</CardTitle>
                          <div className="space-y-2">
                            <p className="text-primary font-medium">{exp.company}</p>
                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {exp.period}
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {exp.location}
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-muted-foreground leading-relaxed">
                            {exp.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}