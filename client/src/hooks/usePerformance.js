import { useMemo } from 'react';

export const useLowPerformance = () => {
  return useMemo(() => {
    if (typeof window === 'undefined') return false;
    const isMobile = window.innerWidth < 768;
    const hasLowCores = navigator.hardwareConcurrency ? navigator.hardwareConcurrency < 6 : false;
    return isMobile || hasLowCores;
  }, []);
};
