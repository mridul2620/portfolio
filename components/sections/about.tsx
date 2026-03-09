'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { SplineScene } from '@/components/ui/spline-scene';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, MapPin, Code2, Lightbulb } from 'lucide-react';

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"]
  });

  // Robot zooms out as user scrolls (starts zoomed in, zooms out to normal)
  const robotScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.8, 1.3, 1]);
  const robotOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  
  // Content fades in after robot settles
  const contentOpacity = useTransform(scrollYProgress, [0.4, 0.7], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.4, 0.7], [20, 0]);

  const skills = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'Java', 'Python', 'AWS', 'MongoDB'
  ];

  const quickFacts = [
    { icon: GraduationCap, label: 'B.Tech in IT', sublabel: 'Information Technology' },
    { icon: MapPin, label: 'United Kingdom', sublabel: 'Based' },
    { icon: Code2, label: '3+ Years', sublabel: 'Experience' },
    { icon: Lightbulb, label: 'Problem Solver', sublabel: 'Mindset' },
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="min-h-screen bg-black relative overflow-hidden"
    >
      {/* Spline scene covering entire section for mouse tracking */}
      <motion.div 
        style={{ scale: robotScale, opacity: robotOpacity }}
        className="absolute inset-0 z-0"
      >
        <SplineScene 
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </motion.div>

      {/* Content overlay - using flex column to position header at top and content at bottom */}
      <div className="absolute inset-0 z-10 flex flex-col pointer-events-none">
        
        {/* Header - Fixed at top */}
        <div className="pt-16 pb-4 px-4">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              About Me
            </h2>
            <p className="mt-3 text-neutral-400 text-lg md:text-xl">
              Full-Stack Developer & Problem Solver
            </p>
          </motion.div>
        </div>

        {/* Spacer to push content to bottom */}
        <div className="flex-1" />

        {/* Bottom content - Two columns on sides */}
        <motion.div 
          style={{ opacity: contentOpacity, y: contentY }}
          className="px-4 md:px-8 lg:px-16 pb-12"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
              
              {/* Left Column - Bio & Skills */}
              <div className="lg:max-w-md space-y-6">
                <div className="p-6 rounded-2xl bg-neutral-950/70 border border-neutral-800/50 backdrop-blur-md">
                  <p className="text-neutral-300 leading-relaxed">
                    I build scalable, high-performance applications that bridge the gap 
                    between elegant design and robust engineering. With expertise in 
                    modern web technologies and cloud solutions, I transform complex 
                    problems into seamless digital experiences.
                  </p>
                </div>
                
                <div className="p-6 rounded-2xl bg-neutral-950/70 border border-neutral-800/50 backdrop-blur-md">
                  <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">
                    Core Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2 pointer-events-auto">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="bg-neutral-800/80 text-neutral-200 border border-neutral-700/50 hover:bg-neutral-700 hover:border-neutral-600 transition-all cursor-default"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Quick Facts */}
              <div className="lg:max-w-sm">
                <div className="grid grid-cols-2 gap-3 pointer-events-auto">
                  {quickFacts.map((fact, index) => (
                    <motion.div
                      key={fact.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="p-4 rounded-xl bg-neutral-950/70 border border-neutral-800/50 backdrop-blur-md hover:border-neutral-700/50 transition-colors"
                    >
                      <fact.icon className="w-5 h-5 text-neutral-400 mb-2" />
                      <p className="text-lg font-semibold text-neutral-100">{fact.label}</p>
                      <p className="text-sm text-neutral-500">{fact.sublabel}</p>
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
