'use client'
import React from 'react';
import { cn } from "../../lib/utils";

export const RainbowButton = ({ 
  children, 
  className, 
  onClick, 
  type = "button",
  ...props 
}) => {
  return (
    <div className={cn("relative inline-block", className)}>
      <button 
        type={type}
        onClick={onClick}
        className="rainbow-border relative flex items-center justify-center gap-2.5 px-6 py-3 bg-black rounded-xl border-none text-white cursor-pointer font-black transition-all duration-200 w-full hover:scale-[1.02] active:scale-[0.98]"
        {...props}
      >
        {children}
      </button>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .rainbow-border::before,
        .rainbow-border::after {
          content: '';
          position: absolute;
          left: -2px;
          top: -2px;
          border-radius: 12px;
          background: linear-gradient(45deg, #fb0094, #0000ff, #00ff00, #ffff00, #ff0000, #fb0094, #0000ff, #00ff00, #ffff00, #ff0000);
          background-size: 400%;
          width: calc(100% + 4px);
          height: calc(100% + 4px);
          z-index: -1;
          animation: rainbow 20s linear infinite;
        }
        .rainbow-border::after {
          filter: blur(25px);
          opacity: 0.6;
        }
        @keyframes rainbow {
          0% { background-position: 0 0; }
          50% { background-position: 400% 0; }
          100% { background-position: 0 0; }
        }
      ` }} />
    </div>
  );
};
