'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, Cloud, Smartphone } from 'lucide-react';
import dynamic from 'next/dynamic';

const GlowingEffect = dynamic(
  () => import('@/components/ui/glowing-effect').then((m) => m.GlowingEffect),
  { ssr: false }
);

const skillCategories = [
  {
    icon: Code,
    title: "Frontend",
    className: "md:col-span-2 lg:col-span-2",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Flutter",
      "Dart",
      "HTML/CSS",  
    ],
  },
  {
    icon: Database,
    title: "Backend",
    className: "md:col-span-1 lg:col-span-1",
    skills: [
      "Java",
      "Node.js",
      "Express.js",
      "Python",
      "Spring Boot",
      "FastAPI",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    className: "md:col-span-1 lg:col-span-1",
    skills: [
      "AWS (EC2, S3)",
      "Docker",
      "CI/CD",
      "Git & GitHub"
    ],
  },
  {
    icon: Smartphone,
    title: "Architecture & Data",
    className: "md:col-span-2 lg:col-span-2",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "SQL",
      "RESTful APIs",
      "Microservices",
      "MVC / MVVM",
      "Agile (Scrum)"
    ],
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-4"
      >
        <motion.div 
          variants={cardVariants}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-2 mb-4 rounded-full bg-primary/10 text-primary">
            <Code className="w-5 h-5 mr-2 ml-1" />
            <span className="text-sm font-semibold tracking-wider uppercase pr-3">Tech Stack</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I leverage to build scalable, modern applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className={`h-full ${category.className} relative p-[2px] rounded-2xl`}
            >
              <GlowingEffect
                spread={40}
                glow
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
              />
              <Card className="h-full glass-effect border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden relative group bg-card/60 backdrop-blur-md rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader className="flex flex-row items-center gap-4 pb-4 relative z-10">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500 shrink-0">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl m-0 tracking-tight">{category.title}</CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="relative z-10 flex flex-col justify-end mt-2">
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className="px-3.5 py-1.5 text-sm font-medium bg-secondary/50 text-secondary-foreground rounded-lg border border-border/50 hover:bg-primary hover:border-transparent hover:text-primary-foreground cursor-default transition-all duration-300 shadow-sm"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}