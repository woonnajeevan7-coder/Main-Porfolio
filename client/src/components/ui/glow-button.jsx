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

  const Component = href ? 'div' : 'button';

  const content = (
    <Component
      ref={ref}
      type={href ? undefined : "button"}
      aria-label={label}
      className={cn(
        "glow-btn-v2 h-[3.2em] px-10 rounded-xl bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 text-white relative overflow-hidden group transition-all duration-300 hover:scale-[1.03] active:scale-95 border-t border-white/20 flex items-center justify-center",
        className
      )}
      onClick={handleClick}
      data-state={isClicked ? "clicked" : undefined}
    >
      <span className="relative z-10 flex items-center justify-center gap-2.5 font-bold tracking-tight text-[1.1rem]">
        {label}
        <LucideSparkles size={18} className="text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
      </span>
      {/* Glossy Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
      {/* Animated Shine */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer-fast" />
    </Component>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block outline-none no-underline">
        {content}
      </a>
    );
  }

  return content;
});

GlowButton.displayName = "GlowButton";

export { GlowButton };
