'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code, Database, Cloud, Smartphone } from 'lucide-react';

const skillCategories = [
  {
    icon: Code,
    title: 'Frontend Development',
    skills: [
      { name: 'React/Next.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Vue.js', level: 80 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Dart', level: 90 },
      { name: 'HTML/CSS', level: 95 },
    ],
  },
  {
    icon: Database,
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Java', level: 80 },
      { name: 'Python', level: 70 },
      { name: 'RESTful APIs', level: 90 },
      { name: 'MongoDB', level: 90 },
      { name: 'SQL', level: 70 },
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', level: 70 },
      { name: 'Docker', level: 70 },
      { name: 'Git/GitHub', level: 90 },
      { name: 'CI/CD', level: 85 },
      { name: 'Kubernetes', level: 75 },
      { name: 'Jenkins', level: 70 },
    ],
  },
  {
    icon: Smartphone,
    title: 'Mobile & Tools',
    skills: [
      { name: 'Flutter', level: 90 },
      { name: 'Firebase', level: 90 },
      { name: 'Figma', level: 70 },
      { name: 'VS Code', level: 95 },
      { name: 'Postman', level: 95 },
      { name: 'Android Studio', level: 95 },
    ],
  },
];

export default function Skills() {
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

  const cardVariants = {
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
    <section id="skills" className="py-20 bg-muted/30">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="h-full glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}