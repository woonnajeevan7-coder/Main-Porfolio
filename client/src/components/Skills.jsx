import React, { useRef } from 'react'
import { useInView } from 'framer-motion'
import FloatingLines from './FloatingLines/FloatingLines'
import LightBeamButton from './LightBeamButton/LightBeamButton'
import { Link } from 'react-router-dom'

const techLogosTier1 = [
  { name: 'HTML5', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', glow: 'rgba(227, 79, 38, 0.4)' },
  { name: 'CSS3', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', glow: 'rgba(21, 114, 182, 0.4)' },
  { name: 'JavaScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', glow: 'rgba(247, 223, 30, 0.4)' },
  { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', glow: 'rgba(97, 218, 251, 0.4)' },
  { name: 'Tailwind', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', glow: 'rgba(6, 182, 212, 0.4)' },
  { name: 'Redux', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg', glow: 'rgba(118, 74, 188, 0.4)' },
  { name: 'Next.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', glow: 'rgba(255, 255, 255, 0.2)' }
]

const techLogosTier2 = [
  { name: 'Node.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', glow: 'rgba(51, 153, 51, 0.4)' },
  { name: 'Express', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', glow: 'rgba(255, 255, 255, 0.2)' },
  { name: 'MongoDB', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', glow: 'rgba(71, 162, 72, 0.4)' },
  { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', glow: 'rgba(55, 118, 171, 0.4)' },
  { name: 'PostgreSQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', glow: 'rgba(51, 103, 145, 0.4)' },
  { name: 'GitHub', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', glow: 'rgba(255, 255, 255, 0.2)' },
  { name: 'Docker', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', glow: 'rgba(36, 150, 237, 0.4)' }
]

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "200px" })

  return (
    <section ref={ref} id="skills" className="py-16 relative overflow-hidden bg-black min-h-screen flex flex-col justify-center">
      {/* Premium Background Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[30px] rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-secondary/15 blur-[30px] rounded-full animate-pulse-slower"></div>
      </div>

      {/* FloatingLines Background */}
      <div className="absolute inset-0 z-0 opacity-80 scale-110">
        {isInView && (
          <FloatingLines 
            linesGradient={['#4338ca', '#6366f1', '#a855f7']} 
            lineCount={[6, 6, 6]} 
            interactive={true} 
            animationSpeed={0.7} 
          />
        )}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-7xl font-black mb-4 text-white tracking-tighter drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            TECH STACK
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full shadow-[0_0_30px_rgba(99,102,241,0.8)]"></div>
          <p className="mt-6 text-slate-300 max-w-md mx-auto text-lg font-medium opacity-80">
            Building premium digital experiences with a modern toolkit.
          </p>
        </div>

        {/* 3D Rotatable Tickers */}
        <div className="perspective-2000 space-y-10">
          
          {/* Tier 1: Left Scroll, Tilted Forward */}
          <div className="relative overflow-hidden glass rounded-[1.5rem] md:rounded-[2rem] py-8 md:py-12 rotate-x-6 md:rotate-x-12 pause-on-hover border-transparent shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            {/* Gradient Edge Fade */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
            
            <div className="animate-scroll-left flex items-center gap-10 will-change-transform">
              {[...techLogosTier1, ...techLogosTier1, ...techLogosTier1].map((logo, idx) => (
                <div key={idx} className="group flex flex-col items-center justify-center min-w-[100px] relative">
                  <div className="absolute inset-0 bg-[var(--glow)] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full scale-125" style={{ '--glow': logo.glow }}></div>
                  <img 
                    src={logo.url} 
                    alt={logo.name} 
                    className="w-12 h-12 mb-3 relative z-20 transition-all duration-700 group-hover:scale-125 group-hover:drop-shadow-[0_0_15px_var(--glow)]"
                    style={{ '--glow': logo.glow }}
                   loading="lazy" decoding="async" />
                  <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] relative z-20 group-hover:text-white transition-colors">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tier 2: Right Scroll, Tilted Backward */}
          <div className="relative overflow-hidden glass rounded-[1.5rem] md:rounded-[2rem] py-8 md:py-10 rotate-x-neg-6 md:rotate-x-neg-12 pause-on-hover border-transparent shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            {/* Gradient Edge Fade */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
            
            <div className="animate-scroll-right flex items-center gap-10 will-change-transform">
              {[...techLogosTier2, ...techLogosTier2, ...techLogosTier2].map((logo, idx) => (
                <div key={idx} className="group flex flex-col items-center justify-center min-w-[100px] relative">
                  <div className="absolute inset-0 bg-[var(--glow)] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full scale-125" style={{ '--glow': logo.glow }}></div>
                  <img 
                    src={logo.url} 
                    alt={logo.name} 
                    className="w-12 h-12 mb-3 relative z-20 transition-all duration-700 group-hover:scale-125 group-hover:drop-shadow-[0_0_15px_var(--glow)]"
                    style={{ '--glow': logo.glow }}
                   loading="lazy" decoding="async" />
                  <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] relative z-20 group-hover:text-white transition-colors">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Minimal Bottom CTA */}
        <div className="mt-20 text-center">
          <Link to="/skills">
            <LightBeamButton>
              Exploring Latest Technologies 
              <span className="inline-block ml-3 transition-transform group-hover:translate-x-2">→</span>
            </LightBeamButton>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Skills
