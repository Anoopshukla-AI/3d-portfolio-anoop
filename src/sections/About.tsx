import React, { useEffect, useRef } from 'react';
import { useScrollContext } from '../context/ScrollContext';
import { portfolioData } from '../data/portfolio';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from '../utils/gsap';

export function About() {
  const { setActiveSection } = useScrollContext();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) setActiveSection('about'); },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [setActiveSection]);

  useGSAP(() => {
    if (contentRef.current && sectionRef.current) {
      gsap.fromTo(contentRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "top 30%",
            scrub: 1.5,
          }
        }
      );
    }
  }, { scope: sectionRef });

  const { about } = portfolioData;

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 relative z-10 bg-bg/50 backdrop-blur-sm"
      aria-label="About section"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div ref={contentRef} className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Who I Am</h2>
              <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
                {about.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl font-display font-bold mb-4 text-text-primary">Certifications</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-none p-0">
                {about.certifications.map((cert, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-text-secondary">
                    <span className="text-accent" aria-hidden="true">✦</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-6">
            {about.stats.map((stat, idx) => (
              <div key={idx} className="bg-surface border border-border p-6 rounded-2xl shadow-card hover:border-accent transition-all duration-300">
                <div className="text-3xl md:text-5xl font-display font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-text-secondary uppercase tracking-wider font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

About.displayName = 'About';

export default About;
