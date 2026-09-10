import { useEffect } from 'react';
import Lenis from 'lenis';
import { addAnimation, removeAnimation } from '../utils/animationManager';

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const lenis = new Lenis({
      lerp: isMobile ? 0.12 : 0.1,
      direction: 'vertical',
      gestureDirection: 'vertical',
      smoothHorizontal: false,
      mouseMultiplier: 1.0,
      wheelMultiplier: 1.0,
      smoothTouch: false, // Native touch scrolling on mobile for optimal 120Hz response
      syncTouch: false,
      touchMultiplier: 1.5,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
    }

    addAnimation(raf);

    return () => {
      removeAnimation(raf);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
