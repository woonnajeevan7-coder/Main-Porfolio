import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import PillNav from './PillNav/PillNav';
import { Moon, Sun } from 'lucide-react';

const Header = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark') || 
                       document.body.style.backgroundColor === 'rgb(15, 23, 42)';
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = (e) => {
    if (e) e.preventDefault();
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.setProperty('color-scheme', 'dark');
      document.body.style.backgroundColor = '#0f172a';
      document.body.style.color = '#f1f5f9';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.setProperty('color-scheme', 'light');
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#0f172a';
    }
  };

  const navItems = [
    { label: 'Home', href: '/#home' },
    { label: 'About', href: '/#about' },
    { label: 'Skills', href: '/#skills' },
    { label: 'Certifs', href: '/#certifications' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Contact', href: '/#contact' },
    { label: 'Resume', href: '/#resume' }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[1000] pointer-events-none px-4">
      {/* PillNav Integration */}
      <div className="pointer-events-auto">
        <PillNav
            logo="WJ"
            logoAlt="WJ Logo"
            items={navItems}
            baseColor={isDark ? "rgba(15, 23, 42, 0.9)" : "rgba(255, 255, 255, 0.9)"}
            pillColor={isDark ? "#ffffff" : "#0f172a"}
            hoveredPillTextColor={isDark ? "#000000" : "#ffffff"}
            pillTextColor={isDark ? "#ffffff" : "#0f172a"}
        />
      </div>

      <motion.button 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.8 }}
        onClick={toggleTheme}
        className="fixed top-6 right-6 pointer-events-auto group flex items-center justify-center w-12 h-12 rounded-2xl border border-white/20 bg-white/10 dark:bg-black/20 remove-blur bg-black/40 border border-white/10 shadow-lg z-[1001] transition-all hover:scale-110 active:scale-95"
      >
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-primary/20 to-secondary/20" />
        {isDark ? <Sun className="text-yellow-400 z-10" size={20} /> : <Moon className="text-slate-700 z-10" size={20} />}
      </motion.button>
    </header>
  );
};

export default Header;
