import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Award, Calendar, CheckCircle2 } from "lucide-react";
import SpotlightCard from "./SpotlightCard/SpotlightCard";
import { GlowButton } from "./ui/shiny-button-1";
import ShinyText from "./ShinyText/ShinyText";
import ParallaxStarsBackground from "./ParallaxStarsBackground/ParallaxStarsBackground";

const certifications = [
  { 
    id: 'cert1', 
    title: 'Virtual Technology Intern', 
    issuer: 'Deloitte (Forage)', 
    date: 'Feb 2026', 
    image: 'https://images.unsplash.com/photo-1454165833767-027ffea10c4d?auto=format&fit=crop&q=80&w=800',
    description: 'Developed key skills in system architecture and cloud infrastructure during a comprehensive virtual internship.',
    link: 'https://www.theforage.com/simulations/deloitte/technology-strategy-jdfp'
  },
  { 
    id: 'cert2', 
    title: 'Full Stack Development', 
    issuer: 'Internshala', 
    date: 'Oct 2025 – Present', 
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    description: [
      'Fundamentals of Full Stack Development',
      'Web Page Designing',
      'Git & GitHub',
      'JavaScript',
      'DSA in JavaScript',
      'React',
      'Node.js',
      'Express.js',
      'MongoDB'
    ],
    link: '/certifications'
  }
]

const CertCard = ({ cert, index }) => {
  return (
    <div 
        className="sticky w-full max-w-4xl mx-auto" 
        style={{ 
            top: `${120 + index * 40}px`, 
            zIndex: index + 10,
            marginBottom: index === certifications.length - 1 ? '0' : '15vh'
        }}
    >
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        <SpotlightCard 
          spotlightColor="rgba(108, 99, 255, 0.2)" 
          className="glass rounded-3xl p-8 border border-white/10 shadow-2xl flex flex-col md:flex-row gap-8 items-center bg-black/40 remove-blur bg-black/40 border border-white/10"
        >
          <div className="w-full md:w-1/3 h-48 rounded-2xl overflow-hidden border border-white/5">
              <img src={cert.image} alt={cert.title} className="w-full h-full object-cover" />
          </div>
          <div className="w-full md:w-2/3 flex flex-col h-full">
              <span className="text-primary text-xs font-bold tracking-widest uppercase mb-2 block">{cert.issuer}</span>
              <h3 className="text-3xl font-black text-white mb-4">{cert.title}</h3>
              
              {Array.isArray(cert.description) ? (
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-6 pointer-events-auto">
                  {cert.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-300 text-sm cursor-target hover:text-white transition-colors duration-200 p-1 rounded-lg">
                      <CheckCircle2 size={14} className="text-primary mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-slate-400 mb-6 text-lg leading-relaxed flex-grow">{cert.description}</p>
              )}

              <div className="flex flex-col sm:flex-row justify-between items-center mt-auto gap-4">
 {/* Adjusted for centering and responsiveness */}
                  <span className="text-slate-500 font-mono text-sm">{cert.date}</span>
                  <div className="flex items-center gap-4">
                    <GlowButton href={cert.link} target={cert.link.startsWith('/') ? undefined : "_blank"} rel="noopener noreferrer">
                      <div className="flex items-center gap-2">
                        {cert.link.startsWith('/') ? 'View Details' : 'View Certificate'}
                        <ExternalLink size={14} />
                      </div>
                    </GlowButton>
                    <div className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-white/30 text-[10px] font-bold uppercase tracking-widest">Verified</div>
                  </div>
              </div>
          </div>
        </SpotlightCard>
      </motion.div>
    </div>
  )
}

const Certifications = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "200px", once: false })

  return (
    <section ref={ref} id="certifications" className="py-32 relative min-h-screen bg-slate-950">
      <div className="absolute inset-0 z-0">
        {isInView && (
          <ParallaxStarsBackground speed={2} className="opacity-90" />
        )}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tighter">
            <ShinyText text="Certifications & Awards" shineColor="#fff" />
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Recognized excellence in software engineering and digital design.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {certifications.map((cert, index) => (
            <CertCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
