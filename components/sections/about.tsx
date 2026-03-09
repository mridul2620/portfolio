'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function About() {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const interests = [
    'Web Development',
    'Mobile Apps',
    'CI/CD',
    'AI/ML',
    'DevOps',
    'Open Source',
    'Performance optimization',
    'Data Structures and Algorithms',
    'Cloud Computing'
  ];

  return (
    <section id="about" className="py-20 section-gradient">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-4"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences through modern web technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg leading-relaxed">
              I am a Full-stack developer with expertise in building scalable applications, optimizing system performance, and driving innovation through Agile methodologies. 
              I create end-to-end solutions that combine backend efficiency, frontend responsiveness, and cloud scalability.
            </p>
            
            <p className="text-lg leading-relaxed">
            With a strong foundation in Java and expertise in modern web technologies focused on performance and cloud solutions, I bring frontend proficiency in React, Next.js, and TypeScript to deliver end-to-end, high-impact, cross-platform software solutions.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Interests & Passions</h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Badge variant="secondary" className="text-sm">
                      {interest}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="p-6 glass-effect border-primary/20">
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Education</h3>
                  <div>
                    <p className="font-medium">Bachelors of Technology in Information Technology</p>
                    <p className="text-muted-foreground">First Class (equivalent)</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Quick Facts</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Languages</span>
                      <span className="text-muted-foreground">Java, JavaScript, TypeScript, Python, SQL, Dart</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Frameworks</span>
                      <span className="text-muted-foreground">React, Node.js, Express.js MongoDB, Next.js, Tailwind, Vite, Flutter</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Focus</span>
                      <span className="text-muted-foreground">Full Stack Development</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Location</span>
                      <span className="text-muted-foreground">United Kingdom</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}