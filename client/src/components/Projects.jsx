import React, { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Aurora from './Aurora/Aurora'
import ShinyText from './ShinyText/ShinyText'

import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    id: 0,
    title: 'Book My Doc (Full Stack)',
    description: 'End-to-end appointment booking platform where patients can discover doctors, book slots, and manage visits with a clean UI and robust backend. Featuring JWT auth and role-based access.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200',
    github: 'https://github.com/woonnajeevan7-coder/Doctor-Appointment-Booking-System-',
    live: 'https://bookmydoc-ten.vercel.app/'
  },
  {
    id: 1,
    title: 'ShoppyGlobe: E-commerce',
    description: 'A cutting-edge e-commerce platform featuring real-time cart synchronization and a sleek product discovery engine. Built for scale and speed.',
    tech: ['React', 'Redux', 'Tailwind CSS', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1200',
    github: 'https://github.com/woonnajeevan7-coder',
    live: 'https://shoppyglobe.vercel.app'
  },
  {
    id: 2,
    title: 'Weather App (Frontend)',
    description: 'Weather Forecast Application built with Tailwind CSS and JavaScript, providing real-time weather and a 5-day forecast using OpenWeatherMap API. Features persistent search history via Local Storage.',
    tech: ['JavaScript', 'Tailwind CSS', 'OpenWeatherMap API'],
    image: 'https://images.unsplash.com/photo-1592210633468-d05a4175133d?auto=format&fit=crop&q=80&w=1200',
    github: 'https://github.com/woonnajeevan7-coder/weather-forecast-application',
    live: 'https://spontaneous-rolypoly-2b67e0.netlify.app/'
  },
  {
    id: 3,
    title: 'Donation Tracking System (Full Stack)',
    description: 'Donation Management System with Firebase authentication, protected dashboard and interactive analytics using modular JavaScript and Local Storage. Includes role-based views and Chart.js visualizations.',
    tech: ['HTML', 'Tailwind CSS', 'Firebase', 'Chart.js'],
    image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80&w=1200',
    github: 'https://github.com/woonnajeevan7-coder/Donation-Tracking-System',
    live: 'https://fancy-kataifi-16f5a0.netlify.app/'
  }
];

import BorderGlow from './BorderGlow/BorderGlow'

import LiquidAnimatedButton from './LiquidAnimatedButton'

import { GlowButton } from './ui/glow-button'

const ProjectCard = ({ project, onVisible }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.5 })

  useEffect(() => {
    if (isInView) {
      onVisible(project)
    }
  }, [isInView, project, onVisible])

  return (
    <div ref={ref} className="mb-20 h-[45vh] flex items-center justify-center">
      <BorderGlow
        edgeSensitivity={5}
        glowColor="60 100 80"
        backgroundColor="transparent"
        borderRadius={32}
        glowRadius={60}
        glowIntensity={1.5}
        coneSpread={30}
        animated
        colors={['#c084fc', '#f472b6', '#38bdf8']}
        className="w-full h-full"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-full relative group rounded-[32px] overflow-hidden"
        >
          <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"  loading="lazy" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] flex items-center justify-center remove-blur bg-black/40 border border-white/10">
              <div className="flex flex-col items-center gap-6 scale-90 group-hover:scale-100 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
                  <div className="flex gap-4 items-center">
                      <LiquidAnimatedButton 
                        href={project.github} 
                        icon={Github}
                      >
                        Github
                      </LiquidAnimatedButton>
                      <GlowButton 
                        href={project.live} 
                        label="Live Demo"
                      />
                  </div>
              </div>
          </div>
        </motion.div>
      </BorderGlow>
    </div>
  )
}

const Projects = () => {
  const ref = useRef(null)
  const sectionInView = useInView(ref, { margin: "200px" })
  const [activeProject, setActiveProject] = useState(projects[0])

  return (
    <section ref={ref} id="projects" className="relative min-h-screen bg-slate-950 py-24 content-visibility-auto">
      <div className="absolute inset-0 z-0 opacity-40">
        {sectionInView && (
          <Aurora
            colorStops={["#0D0221", "#3A29FF", "#FF3232"]}
            blend={0.7}
            amplitude={1.2}
            speed={0.4}
          />
        )}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column: Sticky Content */}
          <div className="lg:w-1/2 lg:sticky lg:top-32 h-fit mb-12 lg:mb-0">
            <div className="h-[400px] flex flex-col justify-center">
                <motion.div
                    key={activeProject.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">
                        <ShinyText text={activeProject.title} shineColor="#fff" />
                    </h2>
                    <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed max-w-lg mb-8">
                        {activeProject.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {activeProject.tech.map((tech, i) => (
                            <span key={i} className="px-4 py-2 bg-primary/10 text-primary text-xs font-bold rounded-full border border-primary/20 remove-blur bg-black/40 border border-white/10">
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
          </div>

          {/* Right Column: Scrolling Images */}
          <div className="lg:w-1/2 flex flex-col">
            {projects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onVisible={setActiveProject} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
