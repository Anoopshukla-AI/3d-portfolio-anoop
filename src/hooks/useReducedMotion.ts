import { useEffect, useState } from 'react';
import gsap from 'gsap';

export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const updateMotionPreference = (e: MediaQueryListEvent | MediaQueryList) => {
      const isReduced = e.matches;
      setPrefersReducedMotion(isReduced);
      
      if (isReduced) {
        gsap.defaults({ duration: 0, delay: 0, overwrite: 'auto' });
      } else {
        gsap.defaults({});
      }
    };

    // Initial check
    updateMotionPreference(mediaQuery);

    const listener = (e: MediaQueryListEvent) => updateMotionPreference(e);
    mediaQuery.addEventListener('change', listener);
    
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  return prefersReducedMotion;
}
