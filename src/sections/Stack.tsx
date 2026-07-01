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
          scale: 1, opacity: 1, stagger: 0.03, duration: 0.8,
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

  const categoryIcons: Record<string, string> = {
    "LLMs": "🧠",
    "Agents and Orchestration": "🔗",
    "RAG and Vector Search": "🔍",
    "Workflow Automation": "⚡",
    "Backend and MLOps": "🛠",
    "Cloud": "☁️",
    "Data": "📊",
  };

  return (
    <section
      id="stack"
      ref={sectionRef}
      className="py-24 relative z-10"
      aria-label="Technology stack"
      style={{ backgroundColor: 'rgba(20, 23, 32, 0.9)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-mono uppercase tracking-widest text-accent mb-4 px-4 py-2 rounded-full border border-accent/20 bg-accent/5">
            Technologies
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Tech Stack
          </h2>
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto text-lg">
            Production-tested tools and frameworks across the AI engineering stack.
          </p>
        </div>
        <div ref={itemsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {Object.entries(portfolioData.stackItems).map(([category, items]) => (
            <div
              key={category}
              className="rounded-xl border border-border p-6 transition-all duration-300 hover:border-accent/30"
              style={{
                background: 'rgba(13, 15, 18, 0.5)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="text-xl" aria-hidden="true">{categoryIcons[category] || "⚙️"}</span>
                <h3 className="text-accent font-mono text-sm uppercase tracking-wider font-semibold">
                  {category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <div
                    key={item.name}
                    className="stack-item group relative border border-border px-3 py-2 rounded-lg hover:border-accent/60 hover:scale-105 transition-all duration-200 cursor-default"
                    style={{ background: 'rgba(20, 23, 32, 0.8)' }}
                  >
                    <span className="text-text-primary text-sm font-medium group-hover:text-accent transition-colors duration-200">
                      {item.name}
                    </span>
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
