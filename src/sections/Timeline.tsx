import React, { useEffect, useRef } from 'react';
import { useScrollContext } from '../context/ScrollContext';
import { portfolioData } from '../data/portfolio';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const typeColors: Record<string, string> = {
  current: '#00E5C8',
  milestone: '#5eead4',
  progression: '#4A90D9',
  foundation: '#6B7280',
};

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
      className="py-24 relative z-10"
      aria-label="Career timeline"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-mono uppercase tracking-widest text-accent mb-4 px-4 py-2 rounded-full border border-accent/20 bg-accent/5">
            Career Path
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Journey
          </h2>
        </div>
        <div className="relative">
          {/* Vertical line with gradient */}
          <div
            className="absolute left-[15px] top-4 bottom-4 w-[2px] md:left-1/2 md:-ml-[1px]"
            style={{
              background: 'linear-gradient(to bottom, var(--color-accent), var(--color-border) 30%, var(--color-border) 70%, transparent)',
            }}
            aria-hidden="true"
          />
          <ul ref={listRef} className="flex flex-col gap-12 relative z-10 list-none p-0">
            {portfolioData.timelineItems.map((item, i) => {
              const isEven = i % 2 === 0;
              const dotColor = typeColors[item.type] || typeColors.foundation;
              return (
                <li key={item.id} className="flex flex-col md:flex-row gap-6 md:gap-0 items-start relative">
                  <div
                    className={`md:w-1/2 flex items-center ${
                      isEven ? 'md:justify-end md:pr-12' : 'md:ml-auto md:pl-12'
                    }`}
                  >
                    <div
                      className="group w-full ml-12 md:ml-0 rounded-xl border border-border p-6 transition-all duration-300 hover:border-accent/40 hover:-translate-y-1"
                      style={{
                        background: 'rgba(20, 23, 32, 0.6)',
                        backdropFilter: 'blur(8px)',
                      }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-accent font-mono text-sm">
                          {item.period}
                        </span>
                        {item.type === 'current' && (
                          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-display font-bold group-hover:text-accent transition-colors duration-300">
                        {item.title}
                      </h3>
                      <div className="text-sm text-text-muted mb-4">
                        <span className="font-semibold text-text-primary">{item.company}</span>
                        {item.companyNote && (
                          <span className="block text-xs mt-0.5 opacity-70">{item.companyNote}</span>
                        )}
                        <span className="block text-xs mt-1 opacity-60">{item.location}</span>
                      </div>
                      <ul className="list-none pl-0 space-y-2 text-text-secondary text-sm">
                        {item.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 leading-relaxed">
                            <span className="text-accent mt-1.5 flex-shrink-0" style={{ fontSize: '6px' }}>●</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {/* Dot on timeline */}
                  <div
                    className="absolute left-0 w-8 h-8 rounded-full border-4 flex items-center justify-center md:left-1/2 md:-ml-4"
                    style={{ borderColor: 'var(--color-bg)', backgroundColor: 'var(--color-surface)' }}
                    aria-hidden="true"
                  >
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{
                        backgroundColor: dotColor,
                        boxShadow: item.type === 'current' ? `0 0 12px ${dotColor}` : 'none',
                      }}
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
