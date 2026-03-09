'use client';

import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Projects from '@/components/sections/projects';
import Experience from '@/components/sections/experience';
import Skills from '@/components/sections/skills';
import Contact from '@/components/sections/contact';
import Navigation from '@/components/navigation';
import Particles from '@/components/particles';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
  if (typeof window === "undefined") return;

  const handleSmoothScroll = (e: Event) => {
    const target = e.target as HTMLAnchorElement;
    if (target.getAttribute("href")?.startsWith("#")) {
      e.preventDefault();
      const id = target.getAttribute("href")?.slice(1);
      const element = document.getElementById(id!);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  document.addEventListener("click", handleSmoothScroll);
  return () => document.removeEventListener("click", handleSmoothScroll);
}, []);

  return (
    <main className="relative">
      <Particles />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}