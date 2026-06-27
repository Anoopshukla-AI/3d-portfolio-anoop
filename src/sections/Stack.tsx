import React, { useEffect, useRef } from 'react';
import { useScrollContext } from '../context/ScrollContext';
import { portfolioData } from '../data/portfolio';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export function Stack() {
  const { setActiveSection } = useScrollContext();
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) setActiveSection('stack'); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [setActiveSection]);

  useGSAP(() => {
    if (itemsRef.current && sectionRef.current) {
      const items = Array.from(itemsRef.current.querySelectorAll('.stack-item'));
      gsap.fromTo(items,
        { scale: 0.6, opacity: 0 },
        {
          scale: 1, opacity: 1, stagger: 0.05, duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "top 25%",
            scrub: 1.5,
          }
        }
      );
    }
  }, { scope: sectionRef });

  return (
    <section
      id="stack"
      ref={sectionRef}
      className="py-24 relative z-10 bg-surface/90 border-y border-border"
      aria-label="Technology stack"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 text-center">
          Tech Stack
        </h2>
        <div ref={itemsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {Object.entries(portfolioData.stackItems).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-accent font-mono mb-6 uppercase tracking-wider text-sm">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((item) => (
                  <div
                    key={item.name}
                    className="stack-item bg-bg border border-border px-4 py-2 rounded-md hover:border-accent hover:scale-110 transition-transform duration-150 shadow-card cursor-default"
                  >
                    <span className="text-text-primary font-medium">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Stack.displayName = 'Stack';

export default Stack;
