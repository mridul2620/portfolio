'use client'

import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-white/[0.06] bg-[#05050A] pt-16 pb-8 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center md:items-start mb-12">
          
          {/* Brand & Copyright */}
          <div className="text-center md:text-left space-y-4">
            <div className="text-2xl font-bold font-syne text-foreground tracking-tight drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:drop-shadow-[0_0_25px_rgba(168,85,247,0.8)] transition-all duration-300">
              <span className="text-primary">&lt;</span>MS<span className="text-primary">/&gt;</span>
            </div>
            <p className="text-sm text-muted-foreground font-inter max-w-xs mx-auto md:mx-0">
              Crafting premium digital experiences through clean code and modern design.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-center items-center gap-4">
            <a 
              href="https://github.com/mridul2620" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full bg-white/[0.02] border border-white/[0.05] hover:bg-white/10 hover:border-primary/30 hover:text-primary transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/mridul-srivastava-a198b51b5/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full bg-white/[0.02] border border-white/[0.05] hover:bg-white/10 hover:border-primary/30 hover:text-primary transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:mridulsriv26@gmail.com" 
              className="p-3 rounded-full bg-white/[0.02] border border-white/[0.05] hover:bg-white/10 hover:border-primary/30 hover:text-primary transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Back to Top */}
          <div className="flex justify-center md:justify-end">
            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.02] border border-white/[0.05] hover:bg-white/10 hover:border-primary/30 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <span className="text-xs font-mono font-medium tracking-widest uppercase">Back to Top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300 text-primary" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/[0.06] text-[10px] sm:text-xs font-mono text-muted-foreground">
          <p>© {new Date().getFullYear()} Mridul Srivastava. All rights reserved.</p>
          <p className="flex flex-wrap justify-center items-center gap-1.5 opacity-80">
            Built with 
            <span className="text-foreground">Next.js</span> &amp; 
            <span className="text-foreground">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
