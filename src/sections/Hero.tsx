import React, { useEffect, useRef } from 'react';
import { useScrollContext } from '../context/ScrollContext';
import { portfolioData } from '../data/portfolio';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { splitText } from '../utils/gsap';

export function Hero() {
  const { setActiveSection } = useScrollContext();
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) setActiveSection('hero'); },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [setActiveSection]);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    if (headlineRef.current) {
      const split = splitText(headlineRef.current, { type: "chars" });
      if (split) {
        gsap.set(split.chars, { opacity: 0, y: 40 });
        tl.to(split.chars, {
          opacity: 1, y: 0, stagger: 0.03, duration: 0.6, ease: "power3.out"
        }, 0.4);
      } else {
        tl.fromTo(headlineRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.6 },
          0.4
        );
      }
    }

    if (subheadRef.current) {
      tl.fromTo(subheadRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        0.7
      );
    }

    if (ctasRef.current) {
      tl.fromTo(ctasRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 },
        0.9
      );
    }
  }, { scope: sectionRef });

  const { heroContent } = portfolioData;

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-24 pb-16 z-10 pointer-events-none"
      aria-label="Hero introduction"
    >
      <div className="max-w-7xl mx-auto px-6 w-full pointer-events-auto">
        <div className="max-w-3xl">
          {/* Hero badges */}
          <div className="flex gap-4 mb-6">
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent bg-accent/10 px-4 py-2 rounded-full border border-accent/20">
              {heroContent.badgeLeft}
            </span>
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-text-muted bg-surface/50 px-4 py-2 rounded-full border border-border">
              {heroContent.badgeRight}
            </span>
          </div>
          <h1
            ref={headlineRef}
            className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6"
          >
            {heroContent.headline}
          </h1>
          <p
            ref={subheadRef}
            className="text-lg md:text-xl text-text-secondary leading-relaxed mb-10 opacity-0"
          >
            {heroContent.subheadline}
          </p>
          <div ref={ctasRef} className="flex flex-wrap gap-4">
            <a
              href={heroContent.ctaPrimary.href}
              className="bg-accent text-bg px-6 py-3 rounded-md font-semibold hover:bg-accent-dim transition-colors shadow-glow-accent"
              aria-label={heroContent.ctaPrimary.label}
            >
              {heroContent.ctaPrimary.label}
            </a>
            <a
              href={heroContent.ctaSecondary.href}
              className="bg-surface text-text-primary px-6 py-3 rounded-md font-semibold border border-border hover:border-accent transition-colors shadow-card"
              aria-label={heroContent.ctaSecondary.label}
            >
              {heroContent.ctaSecondary.label}
            </a>
            <a
              href={heroContent.ctaTertiary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent text-text-secondary px-6 py-3 rounded-md font-semibold hover:text-text-primary transition-colors"
              aria-label={`${heroContent.ctaTertiary.label} (opens in new tab)`}
            >
              {heroContent.ctaTertiary.label}
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-50 pointer-events-auto">
        <span className="text-xs tracking-widest uppercase text-text-muted mb-2">
          {heroContent.scrollCueLabel}
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-text-muted to-transparent" />
      </div>
    </section>
  );
}

Hero.displayName = 'Hero';
