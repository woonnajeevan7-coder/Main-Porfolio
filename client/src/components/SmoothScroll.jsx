import { useEffect } from 'react';
import Lenis from 'lenis';
import { addAnimation, removeAnimation } from '../utils/animationManager';

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const lenis = new Lenis({
      duration: isMobile ? 1.2 : 2.0,
      lerp: isMobile ? 0.08 : 0.05,
      easing: (t) => 1 - Math.pow(1 - t, 4), // Quartic easing for premium feel
      direction: 'vertical',
      gestureDirection: 'vertical',
      smoothHorizontal: false,
      mouseMultiplier: 1.0,
      wheelMultiplier: 1.0,
      smoothTouch: false, // Native scroll on mobile for better responsiveness
      syncTouch: true,    // Sync touch momentum with Lenis events
      touchMultiplier: 2.0,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
    }

    addAnimation(raf);

    // Optional: Connect scroll events to other libraries like GSAP if needed
    // lenis.on('scroll', (e) => {
    //   console.log(e);
    // });

    return () => {
      removeAnimation(raf);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
