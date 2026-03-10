'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, MapPin, Code2, Lightbulb } from 'lucide-react';
import GlowCard from "@/components/ui/glow-card"
import dynamic from "next/dynamic"

const GlowingEffect = dynamic(
  () => import("@/components/ui/glowing-effect").then((m) => m.GlowingEffect),
  { ssr: false }
)

const SplineScene = dynamic(
  () =>
    import("@/components/ui/spline-scene").then(
      (mod) => mod.SplineScene
    ),
  { ssr: false }
)

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
  { value: "25%", label: "API Latency", sub: "Performance Gain" },
  { value: "30%", label: "Query Reduction", sub: "DB Optimisation" },
  { value: "35%", label: "Load Time", sub: "Frontend Improvement" },
];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen section-gradient relative overflow-hidden"
    >
      {/* Robot scene */}
      <motion.div
        style={{ scale: robotScale, opacity: robotOpacity }}
        className="absolute inset-0 z-0 opacity-70"
      >
        {/* <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        /> */}
      </motion.div>
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-transparent via-transparent to-black/60" />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col pointer-events-none">

        {/* Header */}
        <div className="pt-12 pb-4 px-4">
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

            <p className="mt-3 text-neutral-400 text-lg md:text-xl max-w-xl mx-auto">
              Building scalable full-stack systems and reliable backend architectures
            </p>

            <div className="w-24 h-[2px] mx-auto mt-4 bg-gradient-to-r from-primary to-transparent opacity-60" />
          </motion.div>
        </div>

        <div className="flex-1" />

        {/* Bottom content */}
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="px-4 md:px-8 lg:px-16 pb-12"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between gap-8">

              {/* LEFT COLUMN */}
              <div className="lg:max-w-md space-y-6">

                {/* Bio */}
                <div className="relative p-[2px] rounded-2xl">
  <GlowingEffect
    spread={40}
    glow
    disabled={false}
    proximity={64}
    inactiveZone={0.01}
    borderWidth={3}
  />
                <div className="p-6 rounded-2xl bg-card/70 border border-border shadow-[0_0_40px_rgba(59,130,246,0.08)] backdrop-blur-md">
                  <p className="text-neutral-300 leading-relaxed " >
                    Full-stack engineer with 3+ years building production grade web systems and cross-platform applications.
                    I specialize in building scalable full-stack applications, designing robust backend services and REST APIs with Node.js, Java and Python while delivering modern frontend experiences using React and Next.js.
                  </p>
                  <p className="text-neutral-400 mt-3">
                    Focused on performance, reliability and clean architecture while delivering modern full-stack applications.
                  </p>
                </div>
                </div>

                  {/* Quick facts */}
                <div className="grid grid-cols-2 gap-3 pointer-events-auto">
  {quickFacts.map((fact, index) => (
    <motion.div
      key={fact.label}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <GlowCard>
        <fact.icon className="w-5 h-5 text-neutral-400 mb-2" />
        <p className="text-lg font-semibold text-neutral-100">{fact.label}</p>
        <p className="text-sm text-neutral-500">{fact.sublabel}</p>
      </GlowCard>
    </motion.div>
  ))}
</div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="lg:max-w-sm space-y-6">
                
                {/* Tech */}
                <div className="relative p-[2px] rounded-2xl">
  <GlowingEffect
    spread={35}
    glow
    disabled={false}
    proximity={64}
    inactiveZone={0.01}
    borderWidth={3}
  />

  <div className="p-6 rounded-2xl bg-card/70 border border-border backdrop-blur-md">
    <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">
      Core Technologies
    </h3>

    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <Badge key={skill}>{skill}</Badge>
      ))}
    </div>
  </div>
</div>

                {/* Impact stats */}
                <div className="grid grid-cols-2 gap-3 mt-4">
  {stats.map((stat, index) => (
    <motion.div
      key={stat.label}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <GlowCard>
        <p className="text-2xl font-bold text-white">{stat.value}</p>
        <p className="text-sm text-neutral-400">{stat.label}</p>
        <p className="text-xs text-neutral-500">{stat.sub}</p>
      </GlowCard>
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