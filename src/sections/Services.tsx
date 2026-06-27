import React, { useEffect, useRef } from 'react';
import { useScrollContext } from '../context/ScrollContext';
import { portfolioData } from '../data/portfolio';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

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
      className="py-24 relative z-10 bg-surface/90 border-y border-border"
      aria-label="Core capabilities"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 text-center">
          Core Capabilities
        </h2>
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.services.map((service) => (
            <article
              key={service.id}
              className="bg-bg p-8 rounded-lg border border-border hover:border-accent hover:-translate-y-1 transition-all duration-200 group hover:shadow-glow-accent"
            >
              <div className="text-accent mb-4 text-3xl" aria-hidden="true">
                <span className="opacity-80 group-hover:opacity-100 transition-opacity">✦</span>
              </div>
              <h3 className="text-xl font-display font-bold mb-3">{service.title}</h3>
              <p className="text-accent-dim text-sm font-medium mb-4">{service.tagline}</p>
              <p className="text-text-secondary leading-relaxed">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

Services.displayName = 'Services';

export default Services;
