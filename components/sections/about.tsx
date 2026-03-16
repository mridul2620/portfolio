'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, MapPin, Code2, Lightbulb, User, Terminal, Database } from 'lucide-react';
import { SplineScene } from "@/components/ui/spline-scene"

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center center'],
  });

  const robotScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.3, 1.1, 1]);
  const robotOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  const contentOpacity = useTransform(scrollYProgress, [0.4, 0.7], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.4, 0.7], [40, 0]);

  const skills = [
    'Java',
    'Node.js',
    'Python',
    'React',
    'Next.js',
    'TypeScript',
    'MongoDB',
    'PostgreSQL',
    'AWS',
    'Docker',
  ];

  const quickFacts = [
    { icon: GraduationCap, label: 'B.Tech (IT)', sublabel: 'First Class' },
    { icon: MapPin, label: 'Coventry, UK', sublabel: 'Based in UK' },
    { icon: Code2, label: '3+ Years', sublabel: 'Production Experience' },
    { icon: Lightbulb, label: 'System Design', sublabel: 'APIs & Microservices' },
  ];

  const stats = [
    { value: "60+", label: "Active Users", sub: "SaaS Platform" },
    { value: "35%", label: "Load Time", sub: "Frontend Improvement" },
    { value: "30%", label: "Query Reduction", sub: "DB Optimisation" },
    { value: "25%", label: "API Latency", sub: "Performance Gain" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative section-gradient overflow-hidden py-32"
    >
      {/* Robot scene */}
      <motion.div
        style={{ scale: robotScale, opacity: robotOpacity }}
        className="absolute inset-0 z-0 opacity-70"
      >
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </motion.div>
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-background/10 via-background/40 to-background/90" />

      {/* Content */}
      <div className="relative z-10 flex flex-col pointer-events-none container mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center p-2 mb-4 rounded-full bg-primary/10 text-primary pointer-events-auto">
              <User className="w-5 h-5 mr-2 ml-1" />
              <span className="text-sm font-semibold tracking-wider uppercase pr-3">About Me</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-4 text-white drop-shadow-lg">
              Engineering with <span className="gradient-text">Precision.</span>
            </h2>

            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Building scalable full-stack systems and reliable backend architectures that deliver impact.
            </p>
          </motion.div>
        </div>

        {/* Bottom content */}
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="pb-12"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[1.2fr_300px_1.2fr] xl:grid-cols-[1.2fr_450px_1.2fr] gap-8 items-center">

              {/* LEFT COLUMN */}
              <div className="space-y-6 pointer-events-auto">

                {/* Bio */}
                <div className="relative group">
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-2xl blur-sm opacity-50 group-hover:opacity-100 transition duration-500" />
                  <Card className="relative h-full glass-effect border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden bg-card/60 backdrop-blur-xl rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <CardContent className="p-8 relative z-10">
                      <div className="mb-6 flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500">
                          <Terminal className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-display font-semibold tracking-tight text-white m-0">Engineering Journey</h3>
                      </div>
                      <p className="text-neutral-300 leading-relaxed text-base font-body">
                        I am a full-stack engineer with 3+ years building production-grade web systems and cross-platform applications. 
                        I specialize in designing robust backend services, scalable microservices, and REST APIs using Node.js, Java, and Python.
                      </p>
                      <p className="text-neutral-400 mt-4 leading-relaxed text-base font-body">
                        On the frontend, I focus on delivering seamless, performant, and modern user experiences using React and Next.js, always obsessing over clean architecture.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Quick facts */}
                <div className="grid grid-cols-2 gap-4">
                  {quickFacts.map((fact, index) => (
                    <motion.div
                      key={fact.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="h-full glass-effect border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden relative group bg-card/40 backdrop-blur-md rounded-xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
                        <CardContent className="p-5 flex flex-col justify-center h-full relative z-10">
                          <fact.icon className="w-5 h-5 text-primary mb-3 group-hover:scale-110 transition-transform duration-500" />
                          <p className="text-sm font-semibold text-neutral-200">{fact.label}</p>
                          <p className="text-xs text-neutral-500 mt-1">{fact.sublabel}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* MIDDLE COLUMN (SPACE FOR ROBOT) */}
              <div className="hidden lg:block h-[450px]" aria-hidden="true"></div>

              {/* RIGHT COLUMN */}
              <div className="space-y-6 pointer-events-auto">

                {/* Tech Stack */}
                <div className="relative group">
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-2xl blur-sm opacity-50 group-hover:opacity-100 transition duration-500" />
                  <Card className="relative h-full glass-effect border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden bg-card/60 backdrop-blur-xl rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-bl from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <CardContent className="p-8 relative z-10">
                      <div className="mb-6 flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500">
                          <Database className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-display font-semibold tracking-tight text-white m-0">Toolkit</h3>
                      </div>
                      
                      <div className="flex flex-wrap gap-2.5">
                        {skills.map((skill, index) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            className="px-3.5 py-1.5 text-sm font-medium bg-secondary/30 text-neutral-200 rounded-lg border border-border/50 hover:bg-primary hover:border-transparent hover:text-white cursor-default transition-all duration-300 shadow-sm backdrop-blur-sm"
                          >
                            {skill}
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Impact stats */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="h-full glass-effect border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden relative group bg-[rgba(10,10,15,0.4)] backdrop-blur-md rounded-xl">
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
                        <CardContent className="p-5 flex flex-col justify-center h-full relative z-10 text-center">
                          <p className="text-3xl font-display font-bold text-white tracking-tighter mb-1 relative inline-block group-hover:scale-105 transition-transform duration-300">
                            {stat.value}
                            <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/0 via-primary to-primary/0 scale-0 group-hover:scale-100 transition-transform duration-500" />
                          </p>
                          <p className="text-sm font-medium text-neutral-300">{stat.label}</p>
                          <p className="text-xs text-neutral-500 mt-0.5">{stat.sub}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}