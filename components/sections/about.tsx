'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { SplineScene } from '@/components/ui/spline-scene';
import { Badge } from '@/components/ui/badge';

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"]
  });

  // Track mouse position across the entire section
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      // Calculate position relative to the section
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    section.addEventListener('mousemove', handleMouseMove);
    return () => section.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Robot zooms out as user scrolls (starts zoomed in, zooms out to normal)
  const robotScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.8, 1.3, 1]);
  const robotOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  
  // Content fades in after robot settles
  const contentOpacity = useTransform(scrollYProgress, [0.4, 0.7], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.4, 0.7], [30, 0]);

  const skills = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'Java', 'Python'
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="min-h-screen bg-black relative overflow-hidden"
    >
      <div className="container mx-auto px-4 py-20">
        {/* Header - Always visible */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            About Me
          </h2>
          <p className="mt-4 text-neutral-400 text-lg">
            Full-Stack Developer & Problem Solver
          </p>
        </motion.div>

        {/* Main content with robot */}
        <div className="flex flex-col lg:flex-row items-center gap-8 min-h-[600px]">
          
          {/* Left content */}
          <motion.div 
            style={{ opacity: contentOpacity, y: contentY }}
            className="flex-1 relative z-10 space-y-6 lg:pr-8"
          >
            <p className="text-lg text-neutral-300 leading-relaxed">
              I build scalable, high-performance applications that bridge the gap 
              between elegant design and robust engineering. With expertise in 
              modern web technologies and cloud solutions, I transform complex 
              problems into seamless digital experiences.
            </p>
            
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-neutral-100">Core Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="bg-neutral-800/80 text-neutral-200 border border-neutral-700 hover:bg-neutral-700 transition-colors"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-lg bg-neutral-900/50 border border-neutral-800">
                <p className="text-2xl font-bold text-neutral-100">B.Tech</p>
                <p className="text-sm text-neutral-400">Information Technology</p>
              </div>
              <div className="p-4 rounded-lg bg-neutral-900/50 border border-neutral-800">
                <p className="text-2xl font-bold text-neutral-100">UK</p>
                <p className="text-sm text-neutral-400">Based</p>
              </div>
            </div>
          </motion.div>

          {/* Right - 3D Robot */}
          <motion.div 
            style={{ scale: robotScale, opacity: robotOpacity }}
            className="flex-1 h-[500px] lg:h-[600px] relative"
          >
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
              mousePosition={mousePosition}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
