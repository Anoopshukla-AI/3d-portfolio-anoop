import React, { useEffect, useRef } from 'react';
import { useScrollContext } from '../context/ScrollContext';
import { portfolioData } from '../data/portfolio';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export function Contact() {
  const { setActiveSection } = useScrollContext();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) setActiveSection('contact'); },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [setActiveSection]);

  useGSAP(() => {
    if (contentRef.current && sectionRef.current) {
      gsap.fromTo(contentRef.current,
        { scale: 0.95, opacity: 0 },
        {
          scale: 1, opacity: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 40%",
            scrub: 1.5,
          }
        }
      );
    }
  }, { scope: sectionRef });

  const { contactLinks } = portfolioData;

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-32 relative z-10 bg-surface/90 border-t border-border"
      aria-label="Contact information"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div ref={contentRef} className="bg-bg border border-border p-12 rounded-2xl shadow-elevated">
          {/* Availability badge */}
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-accent bg-accent/10 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              {contactLinks.availabilityBadge}
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-text-primary">
            {contactLinks.headline}
          </h2>

          {/* Location line */}
          <p className="text-sm text-text-muted font-mono mb-6">
            {contactLinks.locationLine}
          </p>

          <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
            {contactLinks.subtext}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <a
              href={`mailto:${contactLinks.email}`}
              className="bg-accent text-bg px-8 py-4 rounded-md font-bold text-lg hover:bg-accent-dim transition-colors shadow-glow-accent w-full sm:w-auto"
              aria-label="Send an email to Anoop Shukla"
            >
              Send an Email
            </a>
            <a
              href={contactLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface text-text-primary px-8 py-4 rounded-md font-bold text-lg border border-border hover:border-accent transition-colors shadow-card w-full sm:w-auto"
              aria-label="Visit LinkedIn profile (opens in new tab)"
            >
              LinkedIn
            </a>
            <a
              href={contactLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface text-text-primary px-8 py-4 rounded-md font-bold text-lg border border-border hover:border-accent transition-colors shadow-card w-full sm:w-auto"
              aria-label="Visit GitHub profile (opens in new tab)"
            >
              GitHub
            </a>
          </div>
          <p className="text-text-muted font-mono text-sm uppercase tracking-widest">
            {contactLinks.closingLine}
          </p>
        </div>
      </div>
    </section>
  );
}

Contact.displayName = 'Contact';

export default Contact;
