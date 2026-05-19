import React, { useMemo, useRef } from 'react'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { useInView } from 'framer-motion'
import Hyperspeed from './Hyperspeed/Hyperspeed'
import GlassIcons from './GlassIcons/GlassIcons'
import GradientText from './GradientText/GradientText'
import LightBeamButton from './LightBeamButton/LightBeamButton'

const Home = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "200px" })
  
  const socialItems = [
    { icon: <Github size={28} />, color: 'blue', label: 'GitHub', href: "https://github.com/woonnajeevan7-coder" },
    { icon: <Linkedin size={28} />, color: 'blue', label: 'LinkedIn', href: "https://www.linkedin.com/in/woonna-jeevan-51b4a5391/" },
    { icon: <Twitter size={28} />, color: 'blue', label: 'Twitter', href: "https://twitter.com" },
    { icon: <Mail size={28} />, color: 'red', label: 'Email', href: "https://mail.google.com/mail/?view=cm&to=woonnajeevan7@gmail.com" }
  ];

  const handleScroll = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Hyperspeed Background */}
      <div className="absolute inset-0 z-0">
        <Hyperspeed />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="mb-8">
          <GradientText
            text="FULL STACK DEVELOPER"
            className="text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-4 block"
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
          />
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white tracking-tighter mb-4 animate-in fade-in slide-in-from-top duration-1000">
            WOONNA <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">JEEVAN</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed animate-in fade-in slide-in-from-bottom duration-1000">
            Crafting immersive digital experiences with precision and passion. 
            Blending high-performance code with premium design aesthetics.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-10 animate-in fade-in slide-in-from-bottom duration-1000 mt-12">
          <LightBeamButton onClick={handleScroll}>
            View Portfolio <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
          </LightBeamButton>
          
          <div className="mt-4">
            <GlassIcons items={socialItems} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
