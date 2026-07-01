import React, { useEffect, useRef } from 'react';
import { useScrollContext } from '../context/ScrollContext';
import { portfolioData } from '../data/portfolio';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const serviceIcons: Record<string, React.ReactNode> = {
  workflow: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12h4l3-9 4 18 3-9h4" />
    </svg>
  ),
  database: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  nodes: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="18" r="3" />
      <path d="M6 9v6M18 9v6M9 6h6M9 18h6" />
    </svg>
  ),
  plug: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22v-5" />
      <path d="M9 8V2" />
      <path d="M15 8V2" />
      <path d="M18 8v5a6 6 0 0 1-12 0V8z" />
    </svg>
  ),
  chart: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
    </svg>
  ),
  layers: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
};

export function Services() {
  const { setActiveSection } = useScrollContext();
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) setActiveSection('services'); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [setActiveSection]);

  useGSAP(() => {
    if (cardsRef.current && sectionRef.current) {
      const cards = cardsRef.current.children;
      gsap.fromTo(cards,
        { y: 80, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.1, duration: 1,
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
      id="services"
      ref={sectionRef}
      className="py-24 relative z-10"
      aria-label="Core capabilities"
      style={{ backgroundColor: 'rgba(20, 23, 32, 0.9)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-mono uppercase tracking-widest text-accent mb-4 px-4 py-2 rounded-full border border-accent/20 bg-accent/5">
            What I Build
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Core Capabilities
          </h2>
        </div>
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.services.map((service) => (
            <article
              key={service.id}
              className="group relative overflow-hidden rounded-xl border border-border p-8 transition-all duration-300 hover:-translate-y-2 hover:border-accent/50"
              style={{
                background: 'rgba(20, 23, 32, 0.6)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
              }}
            >
              {/* Hover glow effect */}
              <div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'radial-gradient(circle, rgba(0, 229, 200, 0.15), transparent 70%)' }}
                aria-hidden="true"
              />
              <div className="relative z-10">
                <div className="text-accent mb-5 opacity-80 group-hover:opacity-100 transition-opacity">
                  {serviceIcons[service.icon] || serviceIcons.workflow}
                </div>
                <h3 className="text-xl font-display font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm font-medium mb-4" style={{ color: 'var(--color-accent-dim)' }}>
                  {service.tagline}
                </p>
                <p className="text-text-secondary leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

Services.displayName = 'Services';

export default Services;
