import { RefObject, useEffect, useState } from 'react';
import { useScrollContext } from '../context/ScrollContext';

export function useScrollProgress(ref: RefObject<HTMLElement>) {
  const { scrollY } = useScrollContext();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    
    const calculateProgress = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = rect.height;
      
      const totalScrollDistance = windowHeight + elementHeight;
      const scrolledPast = windowHeight - rect.top;
      
      let currentProgress = scrolledPast / totalScrollDistance;
      currentProgress = Math.max(0, Math.min(1, currentProgress));
      
      setProgress(currentProgress);
    };

    calculateProgress();
  }, [scrollY, ref]);

  return progress;
}
