import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, Menu, Phone, Mail, ArrowRight } from 'lucide-react';
import InteractiveWavesBackground from './InteractiveWavesBackground/InteractiveWavesBackground';
import { RainbowButton } from './ui/rainbow-borders-button';

const SkillsOverview = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Force dark mode for this premium look
    document.documentElement.classList.add('dark');
  }, []);

  const skills = [
    { name: 'HTML', percent: 90, desc: 'Semantic HTML, forms, accessibility' },
    { name: 'CSS', percent: 85, desc: 'Responsive layouts, Flexbox, Grid' },
    { name: 'JavaScript', percent: 80, desc: 'DOM, events, API calls, logic' },
    { name: 'Tailwind CSS', percent: 84, desc: 'Utility-first styling, responsive UIs' },
    { name: 'DSA', percent: 88, desc: 'Data structures, algorithms, problem solving' },
    { name: 'Git & GitHub', percent: 85, desc: 'Git basics, branching, GitHub workflow' },
  ];

  const SkillRing = ({ percent, name, desc }) => {
    const radius = 56;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percent / 100) * circumference;

    return (
      <div className="flex flex-col items-center space-y-4 group relative">
        <div className="relative w-32 h-32 transition-all duration-500 hover:scale-110">
          {/* Subtle Glow Behind Ring */}
          <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          <svg className="w-32 h-32 -rotate-90 relative z-10" viewBox="0 0 128 128">
            {/* Background Circle */}
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="currentColor"
              strokeWidth="6"
              fill="none"
              className="text-white/5"
            />
            {/* Progress Circle */}
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="url(#skill-gradient)"
              strokeWidth="8"
              fill="none"
              strokeDasharray={circumference}
              style={{
                strokeDashoffset: offset,
                transition: 'stroke-dashoffset 2s cubic-bezier(0.22, 1, 0.36, 1)',
              }}
              className="progress-ring-circle drop-shadow-[0_0_8px_rgba(249,115,22,0.4)]"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <span className="text-2xl font-bold text-white drop-shadow-md">{percent}%</span>
          </div>
        </div>
        <h3
          title={desc}
          className="text-lg font-bold text-center text-white/70 group-hover:text-white transition-colors uppercase tracking-widest text-[11px]"
        >
          {name}
        </h3>
      </div>
    );
  };

  return (
    <div className="dark bg-black text-white min-h-screen selection:bg-primary/30 selection:text-white font-poppins relative overflow-hidden">
      
      {/* Premium Background */}
      <div className="fixed inset-0 z-0">
        <InteractiveWavesBackground 
          backgroundColor="#000000" 
          lineColor="rgba(99, 102, 241, 0.2)"
        />
        {/* Deep Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none"></div>
      </div>

      {/* SVG Gradient Definition */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="skill-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#8b5cf6' }} />
            <stop offset="100%" style={{ stopColor: '#ec4899' }} />
          </linearGradient>
        </defs>
      </svg>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/40 remove-blur bg-black/40 border border-white/10 border-b border-white/5 transition-all duration-300">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-black bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent tracking-tighter hover:scale-110 transition-transform">
              WJ
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              {['Home', 'About', 'Skills', 'Certifications', 'Projects', 'GitHub', 'Contact'].map((item) => (
                <Link 
                  key={item}
                  to={item === 'Skills' ? '/skills' : item === 'Certifications' ? '/certifications' : '/'} 
                  className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all hover:text-primary ${item === 'Skills' ? 'text-primary' : 'text-white/40'}`}
                >
                  {item}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in border-t border-white/5 pt-4">
              {['Home', 'About', 'Skills', 'Certifications', 'Projects', 'GitHub', 'Contact'].map((item) => (
                <Link 
                  key={item}
                  to={item === 'Skills' ? '/skills' : item === 'Certifications' ? '/certifications' : '/'} 
                  className="block py-2 text-[10px] font-bold uppercase tracking-widest text-white/50 hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 pt-32">
        <section className="px-6">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter drop-shadow-2xl">
              CORE <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">ABILITIES</span>
            </h2>

            <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl font-medium mb-20 animate-fade-in-up leading-relaxed opacity-80">
              Merging technical precision with creative vision. My stack is built for scale, 
              performance, and immersive user experiences.
            </p>

            {/* Main skill rings */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mb-32">
              {skills.map((skill, index) => (
                <SkillRing key={index} {...skill} />
              ))}
            </div>

            {/* Other Skills section */}
            <div className="relative py-20 bg-white/5 rounded-[3rem] border border-white/5 remove-blur bg-black/40 border border-white/10">
              <h3 className="text-xs font-black uppercase tracking-[0.5em] text-white/30 mb-8">
                ADVANCED CAPABILITIES
              </h3>
              <div className="flex flex-wrap justify-center gap-4 px-6">
                {['Backend APIs', 'REST Architecture', 'MongoDB Cloud', 'Node.js Core', 'Algorithmic Thinking', 'Motion Design'].map((item) => (
                  <span key={item} className="px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest bg-black/40 border border-white/10 hover:border-primary/50 transition-all hover:-translate-y-1">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Currently Learning */}
            <section className="mt-32 mb-40">
              <div className="inline-block p-1 rounded-3xl bg-gradient-to-r from-primary/50 to-secondary/50">
                <div className="bg-black/90 remove-blur bg-black/40 border border-white/10 px-12 py-6 rounded-[calc(1.5rem-4px)] border border-white/5">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40 mb-3">
                    EXPLORING NOW
                  </h3>
                  <p className="text-xl font-bold text-white tracking-tight">
                    Next.js 15 • Three.js • GSAP ScrollTrigger • WebGL
                  </p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <div className="pb-32 container flex justify-center">
              <Link to="/">
                <RainbowButton className="px-10 py-5 text-sm font-black uppercase tracking-widest h-auto">
                  View Full Portfolio <ArrowRight className="w-5 h-5 ml-2" />
                </RainbowButton>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Minimalistic Dark Footer */}
      <footer className="relative z-10 py-20 px-6 border-t border-white/5 bg-black/60 remove-blur bg-black/40 border border-white/10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-black tracking-tighter mb-2">Woonna Jeevan</h3>
              <p className="text-white/30 text-[10px] font-bold uppercase tracking-[0.3em]">Full Stack Artisan</p>
            </div>
            
            <div className="flex gap-12">
              <a href="tel:+918074958934" className="group flex flex-col items-center gap-2">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:border-primary/50 transition-all">
                  <Phone className="w-5 h-5 text-white/50 group-hover:text-primary" />
                </div>
                <span className="text-[9px] font-black uppercase tracking-widest text-white/20">Call</span>
              </a>
              <a href="mailto:woonnajeevan7@gmail.com" className="group flex flex-col items-center gap-2">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:border-primary/50 transition-all">
                  <Mail className="w-5 h-5 text-white/50 group-hover:text-primary" />
                </div>
                <span className="text-[9px] font-black uppercase tracking-widest text-white/20">Email</span>
              </a>
            </div>
          </div>
          
          <div className="mt-20 border-t border-white/5 pt-10 text-center">
            <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/10">&copy; 2026 Crafted with Precision by WJ</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .font-poppins { font-family: 'Poppins', sans-serif; }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fade-in-up { 
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.5s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 0.8s cubic-bezier(0.22, 1, 0.36, 1); }
      `}</style>
    </div>
  );
};

export default SkillsOverview;
