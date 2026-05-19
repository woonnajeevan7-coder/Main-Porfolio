import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { InteractiveWavesBackground } from "./InteractiveWavesBackground/InteractiveWavesBackground";
import { LocationMap } from "./ui/location-map";
import { AwardBadge } from "./ui/award-badge";
import InteractiveHoverButton from "./ui/interactive-hover-button";
import { 
  Layers, Code2, Layout, GitBranch, FileCode, Binary, 
  Atom, Server, Terminal, Database, Briefcase, GraduationCap,
  Award, Globe, Mail, Phone
} from "lucide-react";
import "./Neumorphism.css";

const skillsWithIcons = [
  { name: "Full Stack Development", icon: Layers },
  { name: "Fundamentals of Full Stack", icon: Code2 },
  { name: "Web Page Designing", icon: Layout },
  { name: "Git & GitHub", icon: GitBranch },
  { name: "JavaScript", icon: FileCode },
  { name: "DSA in JavaScript", icon: Binary },
  { name: "React", icon: Atom },
  { name: "Node.js", icon: Server },
  { name: "Express.js", icon: Terminal },
  { name: "MongoDB", icon: Database }
];

export default function Resume() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const pathOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <section id="resume" className="min-h-screen relative bg-[#E0E5EC] flex flex-col justify-center py-32 font-body text-[#3D4852] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(108,99,255,0.08)_0%,_transparent_70%)]" />
        <InteractiveWavesBackground 
          lineColor="rgba(163, 177, 198, 0.5)"
          backgroundColor="transparent"
          waveSpeedX={0.01}
          waveSpeedY={0.005}
          waveAmpX={35}
          waveAmpY={20}
        />
      </div>

      <div className="container mx-auto relative z-10 px-6">
        {/* Animated Journey Line */}
        <div className="absolute left-1/2 -ml-[450px] top-40 bottom-40 w-1 hidden lg:block overflow-visible pointer-events-none z-0">
          <svg width="100%" height="100%" viewBox="0 0 4 1000" preserveAspectRatio="none">
            <motion.path
              d="M 2 0 L 2 1000"
              fill="none"
              stroke="rgba(108, 99, 255, 0.2)"
              strokeWidth="2"
              strokeDasharray="10 10"
            />
            <motion.path
              d="M 2 0 L 2 1000"
              fill="none"
              stroke="#6C63FF"
              strokeWidth="2"
              style={{ pathLength }}
            />
          </svg>
          <motion.div 
            className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-[#6C63FF] rounded-full shadow-[0_0_15px_rgba(108,99,255,0.8)]"
            style={{ 
              top: useTransform(pathLength, [0, 1], ["0%", "100%"]),
              opacity: pathOpacity
            }}
          />
        </div>

        <motion.div
          ref={containerRef}
          className="max-w-4xl mx-auto nm-extruded rounded-[24px] md:rounded-[32px] p-6 md:p-16 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
            <div className="flex-1">
              <motion.h1 
                className="text-4xl md:text-7xl font-black tracking-tighter text-[#3D4852] mb-3"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                WOONNA <span className="text-[#6C63FF]">JEEVAN</span>
              </motion.h1>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <AwardBadge type="full-stack" link="#" />
                <AwardBadge type="ui-ux" link="#" />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
                <div className="scale-75 origin-left mt-2">
                  <LocationMap 
                    location="Visakhapatnam, AP" 
                    coordinates="17.6868° N, 83.2185° E" 
                  />
                </div>
                
                <div className="flex flex-wrap gap-3 text-[11px] md:text-sm font-semibold text-[#6B7280]">
                  <a href="mailto:woonnajeevan7@gmail.com" className="nm-inset-small px-3 py-2 rounded-full hover:text-[#6C63FF] transition-colors">
                    <Mail className="inline w-3 h-3 mr-1" /> woonnajeevan7@gmail.com
                  </a>
                  <span className="nm-inset-small px-3 py-2 rounded-full whitespace-nowrap">
                    <Phone className="inline w-3 h-3 mr-1" /> +91 8074958934
                  </span>
                </div>
              </div>
            </div>
            
            <motion.div 
              className="w-full md:w-64 nm-inset-deep rounded-2xl p-6"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-[#6C63FF] text-xs font-black uppercase tracking-widest mb-3">Objective</h3>
              <p className="text-[#6B7280] text-xs leading-relaxed font-medium italic">
                "Adaptable full stack developer skilled in JavaScript, eager to build scalable, user-focused applications. Seeking to contribute problem-solving skills, quick learning, and dedication to innovative teams globally."
              </p>
            </motion.div>
          </div>

          {/* Experience & Education */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
            <div className="space-y-8">
              <h2 className="text-2xl font-black text-[#3D4852] flex items-center gap-3">
                <span className="w-10 h-10 nm-well text-[#6C63FF] flex items-center justify-center rounded-lg">
                  <Briefcase className="w-5 h-5" />
                </span> Experience
              </h2>
              <div className="nm-well p-6 rounded-2xl border-l-4 border-[#6C63FF]">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-[#3D4852]">Virtual Technology Intern</h4>
                  <span className="text-[10px] font-bold text-[#6B7280] uppercase">Feb 2026</span>
                </div>
                <p className="text-[#6C63FF] text-xs font-bold mb-3">Deloitte (Virtual)</p>
                <p className="text-[#6B7280] text-[11px] leading-relaxed">
                  Completed Deloitte Technology Job Simulation (Forage), working on real-world coding tasks aligned with consulting scenarios. Applied problem-solving to design enterprise-level solutions.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-black text-[#3D4852] flex items-center gap-3">
                <span className="w-10 h-10 nm-well text-[#6C63FF] flex items-center justify-center rounded-lg">
                  <GraduationCap className="w-5 h-5" />
                </span> Education
              </h2>
              <div className="nm-well p-4 rounded-xl">
                <div className="flex justify-between mb-1">
                  <h4 className="font-bold text-[#3D4852] text-sm">Bachelor of Technology (B.Tech), CSE</h4>
                  <span className="text-[10px] font-bold text-[#6B7280]">2024–2029</span>
                </div>
                <p className="text-[#6B7280] text-xs">SRM Institute Of Science And Technology, Kattankulathur</p>
              </div>
              <div className="nm-well p-4 rounded-xl">
                <div className="flex justify-between mb-1">
                  <h4 className="font-bold text-[#3D4852] text-sm">Senior Secondary (XII), AP State Board</h4>
                  <span className="text-[10px] font-bold text-[#6B7280]">2023</span>
                </div>
                <p className="text-[#6B7280] text-xs font-bold">Ascent Classes | 80.30%</p>
              </div>
              <div className="nm-well p-4 rounded-xl">
                <div className="flex justify-between mb-1">
                  <h4 className="font-bold text-[#3D4852] text-sm">Secondary (X), AP State Board</h4>
                  <span className="text-[10px] font-bold text-[#6B7280]">2021</span>
                </div>
                <p className="text-[#6B7280] text-xs font-bold">Chalapthi Public School | 89.00%</p>
              </div>
            </div>
          </div>

          {/* Trainings & Certifications */}
          <div className="mb-16">
            <h2 className="text-2xl font-black text-[#3D4852] mb-8 flex items-center gap-3">
              <span className="w-10 h-10 nm-well text-[#6C63FF] flex items-center justify-center rounded-lg">
                <Award className="w-5 h-5" />
              </span> Trainings & Certifications
            </h2>
            <div className="nm-well p-8 rounded-2xl relative overflow-hidden group/toolkit">
               <div className="flex flex-col md:flex-row justify-between mb-8">
                 <div>
                   <h4 className="text-xl font-black text-[#3D4852] tracking-tight">Full Stack Web Development</h4>
                   <p className="text-[#6C63FF] font-black text-sm uppercase tracking-widest">Internshala Specialization</p>
                 </div>
                 <div className="nm-inset-small px-4 py-2 rounded-full h-fit mt-3 md:mt-0">
                    <span className="text-[10px] font-black text-[#6B7280] uppercase">Oct 2025 - Present</span>
                 </div>
               </div>
               
               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                 {skillsWithIcons.map((skill, index) => (
                   <motion.div 
                    key={skill.name}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="nm-inset-small p-4 rounded-2xl flex flex-col items-center justify-center gap-3 group/skill hover:nm-well transition-all duration-300"
                   >
                     <div className="w-10 h-10 rounded-xl nm-well flex items-center justify-center text-[#6B7280] group-hover/skill:text-[#6C63FF] group-hover/skill:nm-inset-small transition-all duration-300">
                        <skill.icon className="w-5 h-5" />
                     </div>
                     <span className="text-[10px] font-black text-[#6B7280] text-center leading-tight uppercase tracking-tighter group-hover/skill:text-[#3D4852] transition-colors">
                       {skill.name}
                     </span>
                   </motion.div>
                 ))}
               </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-black text-[#3D4852] mb-8 flex items-center gap-3">
              <span className="w-10 h-10 nm-well text-[#6C63FF] flex items-center justify-center rounded-lg">🚀</span> Projects built with passion
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "ShoppyGlobe E-commerce",
                  date: "Feb 2026 - Mar 2026",
                  desc: "Implemented a full-featured e-commerce platform with Redux state management and smooth React Router navigation.",
                  tech: "React, Redux, API"
                },
                {
                  title: "ShoppyGlobe APIs",
                  date: "Mar 2026",
                  desc: "Developed secure RESTful endpoints using Node.js, Express, and JWT. Leveraged MongoDB for efficient data persistence.",
                  tech: "Node, Express, MongoDB"
                },
                {
                  title: "Advanced DSA Library",
                  date: "Jan 2026 - Feb 2026",
                  desc: "Solved complex problems in Recursion, Linked Lists, Stacks, Queues, and Trees using JavaScript for real-world optimization.",
                  tech: "JS, Algorithms"
                },
                {
                  title: "Weather Forecast App",
                  date: "Dec 2025",
                  desc: "Live weather prediction app using asynchronous API calls and dynamic DOM updates for real-time forecast data.",
                  tech: "JS, OpenWeather API"
                },
                {
                  title: "Student Registration System",
                  date: "Dec 2025",
                  desc: "CRUD registration system with form validation, LocalStorage persistence, and dynamic multi-page usability.",
                  tech: "HTML, CSS, JS"
                },
                {
                  title: "Project Donation Tracker",
                  date: "Aug 2025 - Oct 2025",
                  desc: "Firebase-powered donor management app with analytics dashboard and Tailwind-styled glassmorphic UI.",
                  tech: "Tailwind, Firebase"
                }
              ].map((p, idx) => (
                <div key={idx} className="nm-extruded-small p-5 rounded-2xl group hover:nm-well transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-black text-[#3D4852] text-sm group-hover:text-[#6C63FF] transition-colors">{p.title}</h4>
                    <span className="text-[9px] font-bold text-[#6B7280]">{p.date}</span>
                  </div>
                  <p className="text-[#6B7280] text-[10px] leading-relaxed mb-3">{p.desc}</p>
                  <div className="inline-block nm-inset-small px-3 py-1 rounded-full text-[9px] font-black text-[#6C63FF] uppercase tracking-tighter">
                    {p.tech}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center sm:text-left">
              <p className="text-[10px] font-bold text-[#6B7280] italic">
                Wait, there's more! View all 8+ projects including "Mastering DSA Alloys" and "Personal Portfolio" on my main page.
              </p>
            </div>
          </div>

          {/* Technical Toolkit & Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-black text-[#3D4852] mb-6 tracking-widest uppercase">⚙️ Technical Toolkit</h2>
              <div className="flex flex-wrap gap-3">
                {[
                  "React", "Node.js", "Express", "MongoDB", "Redux", "Tailwind CSS", 
                  "Python", "JavaScript", "HTML5", "CSS3", "REST API", "Git & GitHub"
                ].map((skill) => (
                  <div key={skill} className="nm-extruded-small px-4 py-2 rounded-xl text-[10px] font-black text-[#64748b]">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xl font-black text-[#3D4852] mb-6 tracking-widest uppercase">💡 Soft Skills</h2>
              <div className="space-y-3">
                {["Leadership", "Problem Solving", "Time Management"].map(skill => (
                   <div key={skill} className="nm-well px-4 py-2 rounded-xl text-[10px] font-bold text-[#6C63FF] text-center">
                     {skill}
                   </div>
                ))}
              </div>
            </div>
          </div>

          <div className="nm-well p-6 rounded-2xl mb-12 italic text-center">
             <p className="text-[11px] font-medium text-[#6B7280]">
               <strong>Additional Details:</strong> Hackathon Participant and Student Volunteer. Collaborated in two hackathons to build innovative solutions under deadlines, showcasing teamwork and adaptability.
             </p>
          </div>

          {/* Final Call to Action */}
          <div className="flex flex-col items-center gap-8 pt-12 border-t border-[#A3B1C6]/30">
            <InteractiveHoverButton 
              text="Download Resume"
              onClick={() => window.open('/resume.pdf', '_blank')}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
