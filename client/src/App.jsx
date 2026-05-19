import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Resume from './components/Resume'
import TargetCursor from './components/TargetCursor/TargetCursor'
import GradualBlur from './components/GradualBlur/GradualBlur'
import SmoothScroll from './components/SmoothScroll'
import CertificationDetail from './components/CertificationDetail'
import LoadingScreen from './components/LoadingScreen/LoadingScreen'
import SkillsOverview from './components/SkillsOverview'

const MainContent = () => (
  <main>
    <Home />
    <About />
    <Skills />
    <Certifications />
    <Projects />
    <Contact />
    <Resume />
  </main>
);

function App() {
  const [loading, setLoading] = useState(true);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(hover: none)").matches || window.innerWidth < 768);

    // Initial loading simulation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500); // synced with the 3s progress bar + buffer

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>
      
      <SmoothScroll>
        <div className="min-h-screen relative">
          {!isTouchDevice && (
            <TargetCursor 
              spinDuration={2}
              hideDefaultCursor
              parallaxOn
              hoverDuration={0.2}
              targetSelector="button, a, .cursor-target, .cursor-pointer"
            />
          )}
          <Header />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/certifications" element={<CertificationDetail />} />
            <Route path="/skills" element={<SkillsOverview />} />
          </Routes>
          <Footer />
          <GradualBlur
            preset="page-footer"
            strength={1.5}
            opacity={0.8}
            animationSpeed={0.5}
          />
        </div>
      </SmoothScroll>
    </Router>
  )
}

export default App
