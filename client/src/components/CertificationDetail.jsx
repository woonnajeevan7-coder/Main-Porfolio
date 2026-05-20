import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { RevolutionBackground } from './ui/revolution-background';
import { GlareCard } from './ui/glare-card';
import { RainbowButton } from './ui/rainbow-borders-button';

const CertificationDetail = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const certifications = [
    {
      id: 1,
      title: "Full Stack Development: Let's Begin",
      issuer: "Internshala",
      year: "2025",
      category: "frontend tools",
      badge: "Core",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
      skills: ["HTML", "CSS", "JavaScript", "Basic Backend"],
      link: "https://trainings.internshala.com/s/v/3797706/b107bd10",
      gradient: "from-orange-400 to-pink-500"
    },
    {
      id: 2,
      title: "Designing Web Pages Using HTML and CSS",
      issuer: "Internshala",
      year: "2024",
      category: "frontend",
      badge: "HTML/CSS",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800",
      skills: ["Semantic HTML", "Responsive Layout", "Flexbox & Grid", "Accessibility Basics"],
      link: "https://trainings.internshala.com/s/v/3807406/1e7dc47f",
      gradient: "from-sky-400 to-blue-500"
    },
    {
      id: 3,
      title: "Git and GitHub: Mastering Version Control",
      issuer: "Internshala",
      year: "2024",
      category: "tools",
      badge: "Git",
      image: "https://images.unsplash.com/photo-1556075798-4825dfafd998?auto=format&fit=crop&q=80&w=800",
      skills: ["Git Basics", "Branching", "GitHub Workflow", "Collaboration"],
      link: "https://trainings.internshala.com/s/v/3808266/6e372655",
      gradient: "from-emerald-400 to-teal-500"
    },
    {
      id: 4,
      title: "Developing Interactive Websites with JavaScript",
      issuer: "Internshala",
      year: "2024",
      category: "frontend",
      badge: "JS",
      image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&q=80&w=800",
      skills: ["DOM Manipulation", "Events", "Async Basics", "Form Handling"],
      link: "https://trainings.internshala.com/s/v/3831899/90f4c5ba",
      gradient: "from-purple-400 to-indigo-500"
    },
    {
      id: 5,
      title: "Cracking the Code: Data Structures and Algorithms (DSA) in JavaScript - I",
      issuer: "Internshala",
      year: "2024",
      category: "backend",
      badge: "DSA",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800",
      skills: ["Arrays & Strings", "Time Complexity", "Problem Solving"],
      link: "https://trainings.internshala.com/s/v/3844994/79f9ef0d",
      gradient: "from-rose-400 to-red-500"
    },
    {
      id: 6,
      title: "Cracking the Code: Data Structures and Algorithms (DSA) in JavaScript - II",
      issuer: "Internshala",
      year: "2024",
      category: "backend",
      badge: "DSA",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800",
      skills: ["Searching Algorithms", "Sorting Algorithms", "Big-O Complexity", "Algorithm Optimization"],
      link: "https://trainings.internshala.com/s/v/3844994/79f9ef0d",
      gradient: "from-rose-400 to-red-500"
    },
    {
      id: 7,
      title: "Featured Full Stack Training",
      issuer: "Internshala",
      year: "2024",
      category: "frontend tools",
      badge: "Featured",
      image: "https://images.unsplash.com/photo-1454165833767-027ffea10c4d?auto=format&fit=crop&q=80&w=800",
      skills: ["Portfolio‑Ready", "End‑to‑End Project", "Best Practices"],
      link: "https://customer-assets.emergentagent.com/job_html-css-portfolio-6/artifacts/t8s992m2_Full%20Stack%20Development_%20Let%27s%20begin%20Training%20-%20Certificate%20of%20Completion.pdf",
      gradient: "from-orange-400 to-pink-500"
    }
  ];

  const filteredCerts = activeFilter === 'all'
    ? certifications
    : certifications.filter(cert => cert.category.includes(activeFilter));

  const filterButtons = [
    { label: 'All', value: 'all' },
    { label: 'Front‑End & UI', value: 'frontend' },
    { label: 'Logic & DSA', value: 'backend' },
    { label: 'Tools & Workflow', value: 'tools' }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-orange-500/30 relative overflow-hidden">
      {/* Revolution Background - Fixed to cover the entire page */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <RevolutionBackground />
      </div>

      <section id="certifications" className="py-24 px-6 min-h-screen relative z-10 overflow-hidden">
        {/* Animated Glow Background (Subtle Overlay) */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
          <div className="absolute -top-24 -left-24 w-[600px] h-[600px] bg-orange-500/5 blur-[30px] rounded-full animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 blur-[30px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Enhanced Back button */}
          <div className="mb-12">
            <Link
              to="/"
              className="group flex items-center gap-3 w-fit px-6 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-orange-500/50 transition-all duration-500 transform hover:-translate-x-2"
            >
              <ArrowLeft className="w-5 h-5 text-orange-500 group-hover:-translate-x-1 transition-transform" />
              <span className="font-bold text-xs tracking-widest uppercase">Back to Portfolio</span>
            </Link>
          </div>

          {/* Dynamic Header */}
          <div className="mt-4 mb-20 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-orange-500 font-black mb-6 animate-fade-in">
              Verified Technical Expertise
            </p>
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-8">
              Skill
              <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                Milestones
              </span>
            </h1>
            <p className="mt-8 text-slate-400 max-w-3xl mx-auto text-xl font-medium leading-relaxed opacity-80">
              A meticulously curated collection of certifications documenting my journey through Full Stack Engineering, Architecture, and Algorithmic Problem Solving.
            </p>
          </div>

          {/* Category Filter System */}
          <div className="flex flex-wrap justify-center gap-6 mb-20">
            {filterButtons.map(btn => (
              <div key={btn.value} className="relative group min-w-[160px]">
                {activeFilter === btn.value ? (
                  <RainbowButton
                    onClick={() => setActiveFilter(btn.value)}
                    className="w-full"
                  >
                    <span className="text-[10px] font-black uppercase tracking-widest">{btn.label}</span>
                  </RainbowButton>
                ) : (
                  <button
                    onClick={() => setActiveFilter(btn.value)}
                    className="w-full px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 border border-white/10 bg-white/5 text-slate-400 hover:border-white/30 hover:text-white hover:scale-105 active:scale-95"
                  >
                    {btn.label}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Premium Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCerts.map((cert) => (
              <GlareCard
                key={cert.id}
                className="group p-8 flex flex-col h-full bg-[#0a0b10] border-white/5 rounded-[2.5rem] overflow-hidden"
              >
                <div className="relative mb-8 flex items-center justify-between w-full">
                  {/* Badge */}
                  <div className={`w-14 h-14 bg-gradient-to-br ${cert.gradient} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <span className="text-[10px] font-black text-white px-2 text-center leading-tight">
                      {cert.badge}
                    </span>
                  </div>

                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-1">{cert.issuer}</span>
                    <span className="text-[10px] font-medium text-slate-500 uppercase tracking-widest">{cert.year}</span>
                  </div>
                </div>

                <div className="w-full mb-8 h-40 rounded-3xl overflow-hidden border border-white/5 relative group-hover:border-white/10 transition-colors">
                  <img src={cert.image} alt={cert.title} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"  loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
                </div>

                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-orange-400 transition-colors leading-tight min-h-[3.5rem]">
                  {cert.title}
                </h3>

                {/* Skill Chips */}
                <div className="mb-10 w-full">
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-xl bg-white/5 text-[10px] font-bold text-slate-300 border border-white/5 group-hover:border-white/10 transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full mt-auto group/link relative z-20"
                >
                  <RainbowButton className="w-full">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Verify Credential</span>
                    <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                  </RainbowButton>
                </a>
              </GlareCard>
            ))}
          </div>
        </div>
      </section>

      {/* Simplified Footer for this page */}
      <footer className="py-20 border-t border-white/5 bg-black">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-500 text-xs font-medium tracking-widest uppercase">
            &copy; 2026 Woonna Jeevan • Skill Milestones Library
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CertificationDetail;
