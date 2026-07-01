import React, { useEffect, useRef } from 'react';
import { useScrollContext } from '../context/ScrollContext';
import { portfolioData } from '../data/portfolio';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export function About() {
  const { setActiveSection } = useScrollContext();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

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
    if (statsRef.current && sectionRef.current) {
      const statCards = Array.from(statsRef.current.children);
      gsap.fromTo(statCards,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1, opacity: 1, stagger: 0.15, duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "top 20%",
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
      className="py-24 relative z-10"
      aria-label="About section"
      style={{ backgroundColor: 'rgba(13, 15, 18, 0.5)', backdropFilter: 'blur(4px)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div ref={contentRef} className="space-y-8">
            <div>
              <span className="inline-block text-xs font-mono uppercase tracking-widest text-accent mb-4 px-4 py-2 rounded-full border border-accent/20 bg-accent/5">
                Background
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Who I Am</h2>
              <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
                {about.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="rounded-xl border border-border p-6" style={{ background: 'rgba(20, 23, 32, 0.6)' }}>
              <h3 className="text-lg font-display font-bold mb-4 text-text-primary flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 4L12 14.01l-3-3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Certifications
              </h3>
              <ul className="grid grid-cols-1 gap-3 list-none p-0">
                {about.certifications.map((cert, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stats grid */}
          <div ref={statsRef} className="grid grid-cols-2 gap-6">
            {about.stats.map((stat, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-border p-6 transition-all duration-300 hover:border-accent/50 hover:-translate-y-1"
                style={{
                  background: 'rgba(20, 23, 32, 0.6)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                {/* Accent glow on hover */}
                <div
                  className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'radial-gradient(circle, rgba(0, 229, 200, 0.2), transparent 70%)' }}
                  aria-hidden="true"
                />
                <div className="relative z-10">
                  <div className="text-3xl md:text-5xl font-display font-bold text-accent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-text-secondary uppercase tracking-wider font-semibold">
                    {stat.label}
                  </div>
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
