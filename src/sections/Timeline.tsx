import React, { useEffect, useRef } from 'react';
import { useScrollContext } from '../context/ScrollContext';
import { portfolioData } from '../data/portfolio';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export function Timeline() {
  const { setActiveSection } = useScrollContext();
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) setActiveSection('timeline'); },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [setActiveSection]);

  useGSAP(() => {
    if (listRef.current) {
      const items = Array.from(listRef.current.children);
      items.forEach((item) => {
        gsap.fromTo(item,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0,
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              end: "top 60%",
              scrub: 1.5,
            }
          }
        );
      });
    }
  }, { scope: sectionRef });

  return (
    <section
      id="timeline"
      ref={sectionRef}
      className="py-24 relative z-10 bg-bg"
      aria-label="Career timeline"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 text-center">
          Journey
        </h2>
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[15px] top-4 bottom-4 w-[2px] bg-border md:left-1/2 md:-ml-[1px]"
            aria-hidden="true"
          />
          <ul ref={listRef} className="flex flex-col gap-12 relative z-10 list-none p-0">
            {portfolioData.timelineItems.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <li key={item.id} className="flex flex-col md:flex-row gap-6 md:gap-0 items-start relative">
                  <div
                    className={`md:w-1/2 flex items-center ${
                      isEven ? 'md:justify-end md:pr-12' : 'md:order-last md:pl-12'
                    }`}
                  >
                    <div className="bg-surface p-6 rounded-lg border border-border hover:border-accent transition-colors shadow-card w-full ml-12 md:ml-0">
                      <span className="text-accent font-mono text-sm block mb-1">
                        {item.period}
                      </span>
                      <h3 className="text-xl font-display font-bold">{item.title}</h3>
                      <div className="text-sm text-text-muted mb-4">
                        <span className="font-semibold text-text-primary">{item.company}</span>
                        {item.companyNote && ` (${item.companyNote})`}
                        <span className="mx-2">•</span>
                        <span>{item.location}</span>
                      </div>
                      <ul className="list-disc pl-4 space-y-2 text-text-secondary text-sm">
                        {item.highlights.map((highlight, idx) => (
                          <li key={idx} className="leading-relaxed">
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {/* Dot on timeline */}
                  <div
                    className="absolute left-0 w-8 h-8 rounded-full border-4 border-bg flex items-center justify-center bg-surface md:left-1/2 md:-ml-4"
                    aria-hidden="true"
                  >
                    <div
                      className={`w-3 h-3 rounded-full ${
                        item.type === 'current'
                          ? 'bg-accent shadow-glow-accent'
                          : 'bg-text-muted'
                      }`}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

Timeline.displayName = 'Timeline';

export default Timeline;
