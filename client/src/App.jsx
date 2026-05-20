import React, { useState, useEffect, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import TargetCursor from './components/TargetCursor/TargetCursor'
import SmoothScroll from './components/SmoothScroll'
import LoadingScreen from './components/LoadingScreen/LoadingScreen'
import SEO from './components/SEO'

const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Certifications = lazy(() => import('./components/Certifications'));
const Contact = lazy(() => import('./components/Contact'));
const Resume = lazy(() => import('./components/Resume'));
const CertificationDetail = lazy(() => import('./components/CertificationDetail'));
const SkillsOverview = lazy(() => import('./components/SkillsOverview'));

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
      <SEO />
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
          <Suspense fallback={<div className="min-h-screen bg-black" />}>
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/certifications" element={<CertificationDetail />} />
              <Route path="/skills" element={<SkillsOverview />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </SmoothScroll>
    </Router>
  )
}

export default App
