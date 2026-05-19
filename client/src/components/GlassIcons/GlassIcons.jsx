import React from 'react';
import Magnetic from '../Magnetic';
import './GlassIcons.css';

const GlassIcons = ({ items, className = '' }) => {
  return (
    <div className={`glass-icons-container ${className}`}>
      {items.map((item, index) => (
        <Magnetic key={index} strength={0.4}>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`glass-icon-item ${item.color}`}
            aria-label={item.label}
          >
            <div className="glass-icon-inner">
              {item.icon}
            </div>
            <span className="glass-icon-label">{item.label}</span>
          </a>
        </Magnetic>
      ))}
    </div>
  );
};

export default GlassIcons;
