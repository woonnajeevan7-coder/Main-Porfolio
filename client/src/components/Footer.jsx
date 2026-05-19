import React from 'react'
import { Phone, Mail, Github, Linkedin, Twitter } from 'lucide-react'
import GlassIcons from './GlassIcons/GlassIcons'
import { Boxes } from './ui/background-boxes'

const Footer = () => {
  return (
    <footer className="relative border-t border-white/5 bg-slate-950 py-16 overflow-hidden min-h-[400px] flex items-center justify-center">
      {/* Background Boxes with Mask */}
      <div className="absolute inset-0 w-full h-full bg-slate-950 z-0 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0 text-slate-400">
          <div className="text-center md:text-left space-y-4">
            <h2 className="text-3xl font-black bg-gradient-to-r from-[#00b4ff] to-[#5227FF] bg-clip-text text-transparent tracking-tighter">
              WJ
            </h2>
            <p className="text-slate-500 max-w-xs font-medium">
              Building the future of the web, one component at a time.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12 text-slate-400">
            <a 
              href="mailto:woonnajeevan7@gmail.com" 
              className="flex items-center space-x-2 hover:text-[#00b4ff] transition-colors group"
            >
              <Mail size={20} className="group-hover:scale-110 transition-transform" />
              <span className="font-medium">woonnajeevan7@gmail.com</span>
            </a>
            <a 
              href="tel:+918074958934" 
              className="flex items-center space-x-2 hover:text-[#00b4ff] transition-colors group"
            >
              <Phone size={20} className="group-hover:scale-110 transition-transform" />
              <span className="font-medium">+91 8074958934</span>
            </a>
          </div>
          
          <div className="flex items-center space-x-6">
            <GlassIcons 
              items={[
                { icon: <Github size={20} />, color: 'blue', label: 'GitHub', href: "https://github.com/woonnajeevan7-coder" },
                { icon: <Linkedin size={20} />, color: 'blue', label: 'LinkedIn', href: "https://www.linkedin.com/in/woonna-jeevan-51b4a5391/" },
                { icon: <Twitter size={20} />, color: 'blue', label: 'Twitter', href: "https://twitter.com" },
                { icon: <Mail size={20} />, color: 'red', label: 'Email', href: "mailto:woonnajeevan7@gmail.com" }
              ]} 
            />
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/5 text-center text-slate-600 text-xs font-bold uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Woonna Jeevan • All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer;
