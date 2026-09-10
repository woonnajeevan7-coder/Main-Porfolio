import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
  Phone,
  Mail,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  Award,
  Calendar,
  Layers,
  Code2,
  Database,
  Server,
  Globe,
  ShieldCheck,
  Sparkles,
  BookOpen,
  Cpu
} from 'lucide-react';
import InteractiveWavesBackground from './InteractiveWavesBackground/InteractiveWavesBackground';
import { RainbowButton } from './ui/rainbow-borders-button';

const CertificationsOverview = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.classList.add('dark');
  }, []);

  const fullStackModules = [
    {
      number: '01',
      title: 'Fundamentals of Full Stack',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      description: 'Foundations of web architecture, request-response cycle, client-server models, HTTP/HTTPS protocols, and DNS resolution.',
      topics: ['Client-Server Architecture', 'HTTP Methods & Status Codes', 'RESTful API Concepts', 'Browser Rendering Engine', 'Web Security Basics (CORS/CSRF)']
    },
    {
      number: '02',
      title: 'Web Page Designing',
      icon: Layers,
      color: 'from-cyan-500 to-teal-500',
      description: 'Modern, semantic, mobile-first web interface engineering with advanced CSS layouts, animations, and accessible HTML5.',
      topics: ['Semantic HTML5', 'CSS3 Flexbox & Grid Systems', 'Responsive Breakpoints & Media Queries', 'CSS Variables & Modern Theming', 'WCAG Accessibility Standards']
    },
    {
      number: '03',
      title: 'Git & GitHub',
      icon: Code2,
      color: 'from-teal-500 to-emerald-500',
      description: 'Enterprise version control workflows, repository management, collaborative branching strategies, and CI/CD foundations.',
      topics: ['Git Version Tracking', 'Feature Branching & Rebasing', 'Pull Request Reviews & Merging', 'Merge Conflict Resolution', 'GitHub Actions & Automation']
    },
    {
      number: '04',
      title: 'JavaScript Deep Dive',
      icon: Sparkles,
      color: 'from-emerald-500 to-green-500',
      description: 'Advanced ECMAScript standards, asynchronous concurrency, lexical scoping, closures, prototypes, and dynamic DOM manipulation.',
      topics: ['Modern ES6+ Syntax', 'Closures & Scoping Chain', 'Event Loop & Asynchronous Microtasks', 'Promises & Async/Await', 'Functional Programming Patterns']
    },
    {
      number: '05',
      title: 'DSA in JavaScript',
      icon: Cpu,
      color: 'from-green-500 to-amber-500',
      description: 'Rigorous algorithmic problem solving and memory-efficient data structuring for high-performance software engineering.',
      topics: ['Time & Space Complexity (Big-O)', 'Arrays & Hash Tables', 'Linked Lists, Stacks & Queues', 'Searching & Sorting Algorithms', 'Tree Traversal & Recursion']
    },
    {
      number: '06',
      title: 'React.js Architecture',
      icon: Sparkles,
      color: 'from-amber-500 to-orange-500',
      description: 'Declarative component hierarchies, hooks-driven reactive state, context pipelines, and performant virtual DOM reconciliation.',
      topics: ['Component Lifecycle & Virtual DOM', 'Hooks (useState, useEffect, useMemo, useCallback)', 'Custom Reusable React Hooks', 'State Management & Context API', 'Client-side Routing & Vite Tooling']
    },
    {
      number: '07',
      title: 'Node.js Core Runtime',
      icon: Server,
      color: 'from-orange-500 to-rose-500',
      description: 'Server-side runtime engineering utilizing asynchronous event-driven non-blocking I/O and streaming data pipelines.',
      topics: ['V8 Engine & Event-Driven Architecture', 'File System Operations & Streams', 'EventEmitters & Buffers', 'NPM Package Management', 'Process Environment & Thread Pools']
    },
    {
      number: '08',
      title: 'Express.js & RESTful APIs',
      icon: Server,
      color: 'from-rose-500 to-purple-500',
      description: 'Scalable backend routing systems, modular middleware execution chains, input validation, and secure authentication.',
      topics: ['Modular Router Architecture', 'Custom Middleware & Logging', 'JWT Authentication & Security Best Practices', 'Error Handling Protocols', 'Input Validation & Sanitization']
    },
    {
      number: '09',
      title: 'MongoDB & Cloud Data',
      icon: Database,
      color: 'from-purple-500 to-indigo-500',
      description: 'NoSQL document modeling, indexing strategies for sub-millisecond retrieval, complex aggregations, and cloud deployment.',
      topics: ['NoSQL Schema Design & Normalization', 'Mongoose ODM & Schemas', 'Indexing Strategies & Query Optimization', 'Aggregation Pipelines', 'MongoDB Atlas Cloud Management']
    }
  ];

  return (
    <div className="dark bg-black text-white min-h-screen selection:bg-primary/30 selection:text-white font-poppins relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <InteractiveWavesBackground
          backgroundColor="#000000"
          lineColor="rgba(59, 130, 246, 0.22)"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />
      </div>

      {/* Main Content */}
      <main className="relative z-10 pt-28 pb-20">
        <section className="px-6">
          <div className="container mx-auto max-w-6xl">
            {/* Top Bar with Return Navigation */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pt-4">
              <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-slate-500 font-mono">
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                <span>/</span>
                <span className="text-white">Certifications & Training</span>
              </div>

              <Link
                to="/#certifications"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white transition-all duration-300 hover:-translate-x-1"
              >
                <ArrowLeft size={14} className="text-cyan-400" />
                <span>Back to Portfolio</span>
              </Link>
            </div>

            {/* Hero Section */}
            <div className="text-center max-w-4xl mx-auto mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
                <ShieldCheck size={16} /> Verified Credentials & Industry Specializations
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter drop-shadow-2xl">
                CERTIFICATIONS & <br />
                <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                  TRAINING CURRICULUM
                </span>
              </h1>
              <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto">
                Comprehensive breakdown of rigorous professional training programs, verified curriculum milestones, and enterprise software engineering competencies.
              </p>
            </div>

            {/* Featured Specialization Card: Internshala Full Stack */}
            <div className="relative mb-28 p-8 md:p-12 rounded-[2.5rem] bg-slate-900/60 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-8 mb-8">
                  <div>
                    <span className="text-xs font-bold text-cyan-400 tracking-[0.25em] uppercase block mb-1">
                      Featured Specialization
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                      Full Stack Web Development
                    </h2>
                    <p className="text-slate-400 text-sm mt-1 font-mono">
                      Issued by <span className="text-white font-semibold">Internshala Trainings</span> • Oct 2025 – Present
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Active Enrolment
                    </span>
                    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-bold uppercase tracking-widest">
                      Verified
                    </span>
                  </div>
                </div>

                {/* Specialization Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/5 text-center">
                    <div className="text-3xl font-black text-white mb-1">9</div>
                    <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Core Modules</div>
                  </div>
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/5 text-center">
                    <div className="text-3xl font-black text-cyan-400 mb-1">MERN</div>
                    <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Stack Focus</div>
                  </div>
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/5 text-center">
                    <div className="text-3xl font-black text-indigo-400 mb-1">100+</div>
                    <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Hands-on Labs</div>
                  </div>
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/5 text-center">
                    <div className="text-3xl font-black text-emerald-400 mb-1">100%</div>
                    <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Industry Aligned</div>
                  </div>
                </div>

                {/* Detailed Module Grid */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <BookOpen className="text-cyan-400" size={20} />
                    Complete Syllabus & Module Breakdown
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {fullStackModules.map((mod) => {
                      const IconComponent = mod.icon;
                      return (
                        <div
                          key={mod.number}
                          className="group p-6 rounded-2xl bg-black/40 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col"
                        >
                          <div className="flex items-center justify-between mb-4">
                            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${mod.color} flex items-center justify-center text-white shadow-lg`}>
                              <IconComponent size={20} />
                            </div>
                            <span className="font-mono text-xs font-bold text-slate-500 group-hover:text-slate-300 transition-colors">
                              MODULE {mod.number}
                            </span>
                          </div>

                          <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                            {mod.title}
                          </h4>

                          <p className="text-slate-400 text-xs leading-relaxed mb-4 flex-grow">
                            {mod.description}
                          </p>

                          <div className="pt-4 border-t border-white/5 space-y-1.5">
                            {mod.topics.map((t, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-300">
                                <CheckCircle2 size={12} className="text-cyan-400 mt-0.5 shrink-0" />
                                <span>{t}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Deloitte Internship Credential Card */}
            <div className="relative mb-28 p-8 md:p-12 rounded-[2.5rem] bg-slate-900/60 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
              <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-start justify-between">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-3">
                    <Award size={14} /> Completed Credential
                  </div>
                  <h2 className="text-3xl font-black text-white mb-2">
                    Virtual Technology Intern
                  </h2>
                  <p className="text-slate-400 text-sm font-mono mb-4">
                    Issued by <span className="text-white font-semibold">Deloitte (Forage)</span> • Completed Feb 2026
                  </p>
                  <p className="text-slate-300 text-base leading-relaxed mb-6">
                    Completed an intensive industry simulation focused on system architecture, cloud infrastructure analysis, and technology modernization strategy for large-scale enterprise deployments.
                  </p>

                  <div className="flex flex-wrap gap-3 mb-6">
                    {['System Architecture', 'Cloud Infrastructure', 'Tech Feasibility Analysis', 'Scalability Strategy'].map((tag) => (
                      <span key={tag} className="px-4 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://www.theforage.com/simulations/deloitte/technology-strategy-jdfp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm tracking-tight transition-all duration-300 shadow-lg hover:scale-105"
                  >
                    <span>Verify Credential on Forage</span>
                    <ExternalLink size={16} />
                  </a>
                </div>

                <div className="w-full lg:w-80 p-6 rounded-2xl bg-black/40 border border-white/10">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                    Key Outcomes
                  </h4>
                  <ul className="space-y-3 text-xs text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-indigo-400 mt-0.5 shrink-0" />
                      <span>Evaluated enterprise cloud migration architectures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-indigo-400 mt-0.5 shrink-0" />
                      <span>Formulated technology strategy recommendations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-indigo-400 mt-0.5 shrink-0" />
                      <span>Assessed operational scalability and security constraints</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Call to Action */}
            <div className="text-center py-12">
              <Link to="/#projects">
                <RainbowButton className="px-10 py-5 text-sm font-black uppercase tracking-widest h-auto">
                  Explore Featured Projects <ArrowRight className="w-5 h-5 ml-2" />
                </RainbowButton>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CertificationsOverview;
