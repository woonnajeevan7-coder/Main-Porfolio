import React from 'react';
import './GlowButton.css';
import { ArrowRight } from 'lucide-react';

const GlowButton = ({ text, onClick, className = "", icon = true }) => {
  return (
    <button className={`glow-button-wrapper ${className}`} onClick={onClick}>
      <div className="glow-button-content flex items-center gap-3">
        {text} {icon && <ArrowRight size={18} className="glow-button-icon" />}
      </div>
    </button>
  );
};

export default GlowButton;
