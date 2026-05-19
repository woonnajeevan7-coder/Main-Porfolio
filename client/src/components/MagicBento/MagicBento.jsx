import React, { useRef, useEffect, useCallback, useState, useMemo } from 'react';
import { gsap } from 'gsap';
import './MagicBento.css';

const DEFAULT_PARTICLE_COUNT = 8; // Optimized default
const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = '132, 0, 255';
const MOBILE_BREAKPOINT = 768;

const ParticleCard = ({
  children,
  className = '',
  disableAnimations = false,
  style,
  particleCount = DEFAULT_PARTICLE_COUNT,
  glowColor = DEFAULT_GLOW_COLOR,
  enableTilt = true,
  clickEffect = false,
  enableMagnetism = false
}) => {
  const cardRef = useRef(null);
  const particlesRef = useRef([]);
  const timeoutsRef = useRef([]);
  const isHoveredRef = useRef(false);
  const magnetismAnimationRef = useRef(null);

  const clearAllParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    magnetismAnimationRef.current?.kill();

    particlesRef.current.forEach(particle => {
      gsap.to(particle, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'back.in(1.7)',
        onComplete: () => particle.remove()
      });
    });
    particlesRef.current = [];
  }, []);

  const spawnParticles = useCallback(() => {
    if (!cardRef.current || !isHoveredRef.current) return;

    const { width, height } = cardRef.current.getBoundingClientRect();
    
    for (let i = 0; i < particleCount; i++) {
        const timeoutId = setTimeout(() => {
            if (!isHoveredRef.current || !cardRef.current) return;

            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                border-radius: 50%;
                background: rgba(${glowColor}, 0.8);
                box-shadow: 0 0 8px rgba(${glowColor}, 0.4);
                pointer-events: none;
                z-index: 10;
                left: ${Math.random() * width}px;
                top: ${Math.random() * height}px;
                opacity: 0;
            `;
            
            cardRef.current.appendChild(particle);
            particlesRef.current.push(particle);

            gsap.fromTo(particle, 
                { scale: 0, opacity: 0 }, 
                { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(2)' }
            );

            gsap.to(particle, {
                x: (Math.random() - 0.5) * 60,
                y: (Math.random() - 0.5) * 60,
                duration: 2 + Math.random() * 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }, i * 150);
        timeoutsRef.current.push(timeoutId);
    }
  }, [particleCount, glowColor]);

  useEffect(() => {
    if (disableAnimations || !cardRef.current) return;

    const element = cardRef.current;

    const handleMouseEnter = () => {
      isHoveredRef.current = true;
      spawnParticles();
    };

    const handleMouseLeave = () => {
      isHoveredRef.current = false;
      clearAllParticles();
      gsap.to(element, { rotateX: 0, rotateY: 0, x: 0, y: 0, duration: 0.4, ease: 'power2.out' });
    };

    const handleMouseMove = e => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      if (enableTilt) {
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;
        gsap.to(element, { rotateX, rotateY, duration: 0.1, ease: 'power1.out', transformPerspective: 1000 });
      }

      if (enableMagnetism) {
        gsap.to(element, { x: (x - centerX) * 0.05, y: (y - centerY) * 0.05, duration: 0.2, ease: 'power1.out' });
      }
    };

    const handleClick = e => {
      if (!clickEffect) return;
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rippleSize = Math.max(rect.width, rect.height) * 1.5;

      const ripple = document.createElement('div');
      ripple.className = 'click-ripple';
      ripple.style.cssText = `
        position: absolute; width: ${rippleSize}px; height: ${rippleSize}px;
        background: radial-gradient(circle, rgba(${glowColor}, 0.3) 0%, transparent 70%);
        left: ${x - rippleSize/2}px; top: ${y - rippleSize/2}px;
        pointer-events: none; z-index: 5; border-radius: 50%; opacity: 0;
      `;
      element.appendChild(ripple);
      gsap.fromTo(ripple, { scale: 0, opacity: 1 }, { scale: 1.5, opacity: 0, duration: 0.7, ease: 'power2.out', onComplete: () => ripple.remove() });
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('click', handleClick);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('click', handleClick);
      clearAllParticles();
    };
  }, [spawnParticles, clearAllParticles, disableAnimations, enableTilt, enableMagnetism, clickEffect, glowColor]);

  return (
    <div ref={cardRef} className={`${className} particle-card-base`} style={{ ...style, position: 'relative', overflow: 'hidden' }}>
      {children}
    </div>
  );
};

const MagicBento = ({
  items = [],
  textAutoHide = true,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  disableAnimations = false,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  particleCount = DEFAULT_PARTICLE_COUNT,
  glowColor = DEFAULT_GLOW_COLOR,
  clickEffect = true,
  enableMagnetism = true,
  enableTilt = false,
}) => {
  const gridRef = useRef(null);
  const spotlightRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const shouldDisable = disableAnimations || isMobile;

  useEffect(() => {
    if (shouldDisable || !gridRef.current || !enableSpotlight) return;

    const spotlight = document.createElement('div');
    spotlight.className = 'bento-spotlight';
    spotlight.style.cssText = `
      position: fixed; width: ${spotlightRadius * 2}px; height: ${spotlightRadius * 2}px;
      background: radial-gradient(circle, rgba(${glowColor}, 0.1) 0%, transparent 70%);
      pointer-events: none; z-index: 100; opacity: 0; transform: translate(-50%, -50%);
      mix-blend-mode: screen; will-change: transform, opacity;
    `;
    document.body.appendChild(spotlight);
    spotlightRef.current = spotlight;

    const handleMouseMove = e => {
      const cards = gridRef.current.querySelectorAll('.magic-bento-card');
      let isVisible = false;

      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distance = Math.hypot(e.clientX - centerX, e.clientY - centerY);

        const intensity = Math.max(0, 1 - distance / (spotlightRadius * 1.5));
        if (intensity > 0) isVisible = true;

        card.style.setProperty('--glow-x', `${((e.clientX - rect.left) / rect.width) * 100}%`);
        card.style.setProperty('--glow-y', `${((e.clientY - rect.top) / rect.height) * 100}%`);
        card.style.setProperty('--glow-intensity', intensity.toString());
      });

      gsap.to(spotlight, { left: e.clientX, top: e.clientY, opacity: isVisible ? 1 : 0, duration: 0.15 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      spotlight.remove();
    };
  }, [shouldDisable, enableSpotlight, glowColor, spotlightRadius]);

  return (
    <div className="card-grid bento-grid-container" ref={gridRef}>
      {items.map((item, index) => (
        <ParticleCard
          key={index}
          className={`magic-bento-card ${textAutoHide ? 'autohide' : ''} ${enableBorderGlow ? 'border-glow' : ''} ${item.className || ''}`}
          style={{ '--glow-color': glowColor, '--card-bg': item.color || '#060010' }}
          disableAnimations={shouldDisable}
          particleCount={particleCount}
          glowColor={glowColor}
          enableTilt={enableTilt}
          enableMagnetism={enableMagnetism}
          clickEffect={clickEffect}
        >
          <div className="card-header">
            <span className="card-label nm-inset-small px-3 py-1 rounded-full text-[10px] font-bold opacity-60">{item.label}</span>
            {item.icon && <div className="card-icon">{item.icon}</div>}
          </div>
          <div className="card-content">
            <h3 className="card-title text-base font-bold text-white mb-1">{item.title}</h3>
            <p className="card-description text-xs text-slate-400 leading-tight">{item.description}</p>
            {item.details && <div className="mt-4">{item.details}</div>}
          </div>
        </ParticleCard>
      ))}
    </div>
  );
};

export default MagicBento;
