import React, { useState } from 'react';
import './LiquidAnimatedButton.css';

const LiquidAnimatedButton = ({ children = "Github", href, icon: Icon, className = "" }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200);
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`cursor-target liquid-btn-wrapper relative inline-flex items-center justify-center h-[46px] px-7 min-w-[155px] rounded-xl bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#2563eb] text-white overflow-hidden group transition-all duration-300 hover:scale-[1.03] active:scale-95 border-t border-white/25 select-none no-underline outline-none whitespace-nowrap ${className}`}
    >
      {/* Liquid Organic Wave Layer */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none rounded-xl">
        {/* Wave 2 (Deeper indigo-blue wave) */}
        <div 
          className="animate-liquid-spin-2 absolute left-1/2 -bottom-[215px] group-hover:-bottom-[135px] w-[320px] h-[320px] rounded-[42%] bg-gradient-to-tr from-blue-700/60 via-indigo-600/50 to-cyan-500/40 opacity-70 group-hover:opacity-95 transition-all duration-700 ease-out"
        />

        {/* Wave 1 (Front bright cyan-blue wave) */}
        <div 
          className="animate-liquid-spin-1 absolute left-1/2 -bottom-[225px] group-hover:-bottom-[145px] w-[310px] h-[310px] rounded-[39%] bg-gradient-to-tr from-blue-500/50 via-cyan-400/45 to-blue-300/35 opacity-60 group-hover:opacity-90 transition-all duration-700 ease-out"
        />

        {/* Ambient Top Glow on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/25 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Button Content */}
      <span className="relative z-10 flex items-center justify-center gap-2.5 font-bold tracking-tight text-[1.05rem] whitespace-nowrap">
        {Icon && (
          <Icon
            size={19}
            className="text-white group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 shrink-0 pointer-events-none"
          />
        )}
        <span>{children}</span>
      </span>

      {/* Glossy Top Glass Rim */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/5 to-transparent pointer-events-none rounded-xl" />

      {/* Shimmer Light Beam */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:animate-shimmer-fast pointer-events-none" />
    </a>
  );
};

export default LiquidAnimatedButton;

