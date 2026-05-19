import React, { useRef, useState } from 'react'
import { useInView, motion, AnimatePresence } from 'framer-motion'
import TubesBackground from './TubesBackground/TubesBackground'
import ProfileCard from './ProfileCard/ProfileCard'
import Particles from './Particles/Particles'
import { GradientButton } from './ui/gradient-button'

const About = React.memo(() => {
  const ref = useRef(null)
  const [isExpanded, setIsExpanded] = useState(false)
  const isInView = useInView(ref, { margin: "200px" })

  return (
    <section ref={ref} id="about" className="relative overflow-hidden min-h-screen flex items-center border-t border-white/5 will-change-transform content-visibility-auto">
      <div className="absolute inset-0 z-0 pointer-events-none translate-z-0">
        {isInView && <TubesBackground enableClickInteraction={true} />}
      </div>

      <div className="absolute inset-0 z-[1] bg-black/40 pointer-events-none" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative z-20 translate-z-0">
            <div className="absolute inset-[-40px] z-[-1] pointer-events-none opacity-50">
              {isInView && (
                <Particles
                  particleColors={["#ffffff", "#4338ca", "#818cf8"]}
                  particleCount={150}
                  particleSpread={8}
                  speed={0.08}
                  particleBaseSize={80}
                  moveParticlesOnHover={true}
                  alphaParticles={true}
                  disableRotation={false}
                />
              )}
            </div>
            <ProfileCard
              name="WOONNA JEEVAN"
              title="Full Stack Developer & UI/UX Designer"
              handle="woonnj"
              status="Online"
              contactText="Connect"
              onContactClick={() => window.open('https://www.instagram.com/jevena_woonna/', '_blank')}
              avatarUrl="/profile.jpg"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt
              behindGlowColor="rgba(64, 121, 255, 0.5)"
              behindGlowEnabled={true}
              innerGradient="linear-gradient(145deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.8) 100%)"
            />
          </div>
          <div className="space-y-6 pointer-events-auto">
            <h2 className="text-3xl font-bold text-white drop-shadow-lg">About Me</h2>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
            <p className="text-lg text-slate-200 leading-relaxed drop-shadow">
              I'm a Computer Science undergraduate at SRM Institute of Science and Technology, specializing in full stack development with the MERN stack. I've built multiple real-world projects including an e-commerce platform, a weather forecast app, and a Firebase-powered donation tracker. I completed the Deloitte Technology Job Simulation and participated in two hackathons, sharpening my teamwork and problem-solving skills.
            </p>
            
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden space-y-6"
                >
                  <p className="text-lg text-slate-200 leading-relaxed drop-shadow">
                    Passionate about clean code, DSA, and continuous learning, I bring curiosity and a growth mindset to everything I build. I'm actively seeking opportunities to contribute meaningfully to innovative teams while growing as a developer.
                  </p>

                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white">What I Do:</h3>
                    <ul className="list-disc list-inside text-slate-300 space-y-1 ml-2">
                      <li>Build responsive, accessible front-end interfaces using HTML, CSS, JavaScript, and Tailwind CSS.</li>
                      <li>Implement reusable UI components and clean layouts for portfolio and product pages.</li>
                      <li>Connect front-end UIs with APIs, handle state, and improve performance where needed.</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <h3 className="text-lg font-bold text-primary mb-1">Currently Seeking:</h3>
                    <p className="text-slate-300 italic">
                      A Full Stack Development internship to gain real-world experience building responsive web applications using HTML, CSS, JavaScript, and React — while contributing clean, maintainable code and collaborating with a passionate engineering team.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <GradientButton 
              className="text-sm px-6 py-3"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "Show Less" : "Read More"}
            </GradientButton>

            <p className="text-white/30 text-xs mt-2 select-none">Click background to randomize colors</p>
          </div>
        </div>
      </div>
    </section>
  )
});

export default About
