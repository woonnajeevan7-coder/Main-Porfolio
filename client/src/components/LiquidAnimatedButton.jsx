import React, { useState } from 'react';
import { Liquid } from './ui/button-1';

const COLORS = {
  color1: '#FFFFFF',
  color2: '#1E10C5',
  color3: '#9089E2',
  color4: '#FCFCFE',
  color5: '#F9F9FD',
  color6: '#B2B8E7',
  color7: '#0E2DCB',
  color8: '#0017E9',
  color9: '#4743EF',
  color10: '#7D7BF4',
  color11: '#0B06FC',
  color12: '#C5C1EA',
  color13: '#1403DE',
  color14: '#B6BAF6',
  color15: '#C1BEEB',
  color16: '#290ECB',
  color17: '#3F4CC0',
};

const LiquidAnimatedButton = ({ children = "Github", href, icon: Icon, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className={`flex justify-center ${className}`}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative inline-block px-8 py-3 w-40 h-[3.2em] group bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 border-t border-white/20 rounded-xl transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-glow-blue overflow-hidden"
      >
        {/* Liquid Glow Layer */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none">
            <Liquid isHovered={isHovered} colors={COLORS} />
        </div>

        {/* Inner Surface with Liquid Effect */}
        <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
          {/* Subtle Liquid inside on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <Liquid isHovered={isHovered} colors={COLORS} />
          </div>
          
          <div className="relative z-10 flex items-center gap-2.5 text-white transition-colors duration-300 font-bold tracking-tight text-[1.1rem]">
            {Icon && <Icon size={20} />}
            <span>{children}</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default LiquidAnimatedButton;
