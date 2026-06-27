import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface ScrollContextProps {
  scrollY: number;
  activeSection: string;
  setActiveSection: (sectionId: string) => void;
  isMobile: boolean;
}

const ScrollContext = createContext<ScrollContextProps | undefined>(undefined);

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    let animationFrameId: number;
    let lastScrollY = window.scrollY;

    const checkScroll = () => {
      if (window.scrollY !== lastScrollY) {
        lastScrollY = window.scrollY;
        setScrollY(lastScrollY);
      }
      animationFrameId = requestAnimationFrame(checkScroll);
    };

    animationFrameId = requestAnimationFrame(checkScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  useEffect(() => {
    let timeoutId: number;
    const checkMobile = () => {
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        setIsMobile(window.innerWidth < 768);
      }, 150);
    };

    // Initial check
    checkMobile();

    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ scrollY, activeSection, setActiveSection, isMobile }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error('useScrollContext must be used within a ScrollProvider');
  }
  return context;
};
