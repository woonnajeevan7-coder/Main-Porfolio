import { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import './TargetCursor.css';

const TargetCursor = ({
  targetSelector = '.cursor-target, button, a',
  spinDuration = 2,
  hideDefaultCursor = true,
  hoverDuration = 0.2,
}) => {
  const cursorRef = useRef(null);
  const cornersRef = useRef(null);
  const dotRef = useRef(null);
  const spinTl = useRef(null);

  const isMobile = useMemo(() => {
    if (typeof window === 'undefined') return false;
    const hasTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isSmallScreen = window.innerWidth <= 768;
    return hasTouchScreen && isSmallScreen;
  }, []);

  useEffect(() => {
    if (isMobile || !cursorRef.current) return;

    if (hideDefaultCursor) {
      document.body.style.cursor = 'none';
    }

    const cursor = cursorRef.current;
    cornersRef.current = cursor.querySelectorAll('.target-cursor-corner');
    const corners = Array.from(cornersRef.current);

    // Optimized GSAP setters
    const setCursorX = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3.out" });
    const setCursorY = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3.out" });

    // Initial position
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    const createSpinTimeline = () => {
      if (spinTl.current) spinTl.current.kill();
      spinTl.current = gsap.timeline({ repeat: -1 })
        .to(cursor, { rotation: "+=360", duration: spinDuration, ease: "none" });
    };

    createSpinTimeline();

    // Mouse Move Logic
    const moveHandler = (e) => {
      setCursorX(e.clientX);
      setCursorY(e.clientY);
    };
    window.addEventListener('mousemove', moveHandler, { passive: true });

    // Mouse Interaction
    const mouseDownHandler = () => {
      if (dotRef.current) gsap.to(dotRef.current, { scale: 0.7, duration: 0.2, overwrite: true });
      gsap.to(cursor, { scale: 0.9, duration: 0.2, overwrite: true });
    };

    const mouseUpHandler = () => {
      if (dotRef.current) gsap.to(dotRef.current, { scale: 1, duration: 0.2, overwrite: true });
      gsap.to(cursor, { scale: 1, duration: 0.2, overwrite: true });
    };

    window.addEventListener('mousedown', mouseDownHandler, { passive: true });
    window.addEventListener('mouseup', mouseUpHandler, { passive: true });

    // Hover Target Logic
    let activeTarget = null;
    let leaveHandler = null;

    const enterHandler = (e) => {
      const target = e.target.closest(targetSelector);
      if (!target || target === activeTarget) return;

      if (activeTarget && leaveHandler) {
        activeTarget.removeEventListener('mouseleave', leaveHandler);
        leaveHandler();
      }

      activeTarget = target;
      
      // Pause spin and lock to 0 rotation
      spinTl.current?.pause();
      gsap.to(cursor, { rotation: 0, duration: 0.2, overwrite: true });

      const rect = target.getBoundingClientRect();
      const padding = 6;
      
      // Calculate target corner coordinates relative to center
      const width = rect.width / 2 + padding;
      const height = rect.height / 2 + padding;

      const cornerPos = [
        { x: -width, y: -height }, // TL
        { x: width, y: -height },  // TR
        { x: width, y: height },   // BR
        { x: -width, y: height }   // BL
      ];

      corners.forEach((corner, i) => {
        gsap.to(corner, {
          x: cornerPos[i].x,
          y: cornerPos[i].y,
          duration: hoverDuration,
          ease: "power2.out",
          overwrite: "auto"
        });
      });

      leaveHandler = () => {
        activeTarget = null;

        // Reset corners to default position
        const defaultOffset = 12; // corner size
        const defaultPositions = [
          { x: -defaultOffset*1.5, y: -defaultOffset*1.5 },
          { x: defaultOffset*0.5, y: -defaultOffset*1.5 },
          { x: defaultOffset*0.5, y: defaultOffset*0.5 },
          { x: -defaultOffset*1.5, y: defaultOffset*0.5 }
        ];

        corners.forEach((corner, index) => {
          gsap.to(corner, {
            x: defaultPositions[index].x,
            y: defaultPositions[index].y,
            duration: 0.3,
            ease: "power3.out",
            overwrite: "auto"
          });
        });

        // Resume spin
        if (spinTl.current) {
          gsap.to(cursor, {
            rotation: 360,
            duration: spinDuration,
            ease: "none",
            onComplete: () => {
              gsap.set(cursor, { rotation: 0 });
              spinTl.current?.restart();
            }
          });
        }
      };

      target.addEventListener('mouseleave', leaveHandler, { once: true });
    };

    window.addEventListener('mouseover', enterHandler, { passive: true });

    return () => {
      window.removeEventListener('mousemove', moveHandler);
      window.removeEventListener('mousedown', mouseDownHandler);
      window.removeEventListener('mouseup', mouseUpHandler);
      window.removeEventListener('mouseover', enterHandler);
      spinTl.current?.kill();
      document.body.style.cursor = 'auto';
    };
  }, [targetSelector, spinDuration, hideDefaultCursor, isMobile, hoverDuration]);

  if (isMobile) return null;

  return (
    <div ref={cursorRef} className="target-cursor-wrapper" style={{ pointerEvents: 'none', zIndex: 9999 }}>
      <div ref={dotRef} className="target-cursor-dot" />
      <div className="target-cursor-corner corner-tl" />
      <div className="target-cursor-corner corner-tr" />
      <div className="target-cursor-corner corner-br" />
      <div className="target-cursor-corner corner-bl" />
    </div>
  );
};

export default TargetCursor;
