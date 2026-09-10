import React, { forwardRef, useState } from 'react';
import { Sparkles as LucideSparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import './glow-button.css';

const GlowButton = forwardRef(({ label = "Live Demo", onClick, className, href }, ref) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e) => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200);
    if (onClick) onClick(e);
  };

  const sharedClasses = cn(
    "cursor-target glow-btn-v2 relative inline-flex items-center justify-center h-[46px] px-7 min-w-[155px] rounded-xl bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 text-white overflow-hidden group transition-all duration-300 hover:scale-[1.03] active:scale-95 border-t border-white/25 select-none no-underline outline-none whitespace-nowrap",
    className
  );

  const content = (
    <>
      <span className="relative z-10 flex items-center justify-center gap-2.5 font-bold tracking-tight text-[1.05rem] whitespace-nowrap">
        <span>{label}</span>
        <LucideSparkles size={18} className="text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 pointer-events-none shrink-0" />
      </span>
      {/* Glossy Top Glass Rim */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/5 to-transparent pointer-events-none rounded-xl" />
      {/* Animated Shine on Hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:animate-shimmer-fast pointer-events-none" />
      {/* Dynamic Cyan Ambient Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </>
  );

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={sharedClasses}
        onClick={handleClick}
        data-state={isClicked ? "clicked" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      type="button"
      aria-label={label}
      className={sharedClasses}
      onClick={handleClick}
      data-state={isClicked ? "clicked" : undefined}
    >
      {content}
    </button>
  );
});

GlowButton.displayName = "GlowButton";

export { GlowButton };

