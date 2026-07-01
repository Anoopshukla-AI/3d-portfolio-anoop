import React, { useEffect, useRef, useState } from 'react';
import { useScrollContext } from '../context/ScrollContext';
import { portfolioData } from '../data/portfolio';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export function Contact() {
  const { setActiveSection } = useScrollContext();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

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

  const { contactLinks, personalInfo } = portfolioData;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact: ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:${contactLinks.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-32 relative z-10"
      aria-label="Contact information"
      style={{
        backgroundColor: 'rgba(20, 23, 32, 0.9)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div ref={contentRef}>
          {/* Header */}
          <div className="text-center mb-12">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-accent bg-accent/10 px-4 py-2 rounded-full border border-accent/20">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                {contactLinks.availabilityBadge}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-text-primary">
              {contactLinks.headline}
            </h2>
            <p className="text-sm text-text-muted font-mono mb-4">
              {contactLinks.locationLine}
            </p>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              {contactLinks.subtext}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div
              className="rounded-2xl border border-border p-8"
              style={{
                background: 'rgba(13, 15, 18, 0.6)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <h3 className="text-xl font-display font-bold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm text-text-secondary mb-2 font-medium">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border text-text-primary placeholder-text-muted focus:border-accent focus:outline-none transition-colors"
                    style={{ background: 'rgba(13, 15, 18, 0.8)' }}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm text-text-secondary mb-2 font-medium">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border text-text-primary placeholder-text-muted focus:border-accent focus:outline-none transition-colors"
                    style={{ background: 'rgba(13, 15, 18, 0.8)' }}
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm text-text-secondary mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border text-text-primary placeholder-text-muted focus:border-accent focus:outline-none transition-colors resize-none"
                    style={{ background: 'rgba(13, 15, 18, 0.8)' }}
                    placeholder="Tell me about what you need built..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent text-bg px-6 py-3.5 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
                  style={{ boxShadow: '0 0 20px rgba(0, 229, 200, 0.3)' }}
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              {/* Direct contact */}
              <div
                className="rounded-2xl border border-border p-8"
                style={{
                  background: 'rgba(13, 15, 18, 0.6)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <h3 className="text-xl font-display font-bold mb-6">Direct Links</h3>
                <div className="space-y-4">
                  <a
                    href={`mailto:${contactLinks.email}`}
                    className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-accent/50 transition-all duration-200 group"
                    style={{ background: 'rgba(20, 23, 32, 0.5)' }}
                    aria-label="Send an email to Anoop Shukla"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="M22 7l-10 7L2 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-text-primary group-hover:text-accent transition-colors">Email</div>
                      <div className="text-xs text-text-muted font-mono">{contactLinks.email}</div>
                    </div>
                  </a>
                  <a
                    href={contactLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-accent/50 transition-all duration-200 group"
                    style={{ background: 'rgba(20, 23, 32, 0.5)' }}
                    aria-label="Visit LinkedIn profile (opens in new tab)"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-accent">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-text-primary group-hover:text-accent transition-colors">LinkedIn</div>
                      <div className="text-xs text-text-muted font-mono">linkedin.com/in/an-oops</div>
                    </div>
                  </a>
                  <a
                    href={contactLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-accent/50 transition-all duration-200 group"
                    style={{ background: 'rgba(20, 23, 32, 0.5)' }}
                    aria-label="Visit GitHub profile (opens in new tab)"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-accent">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-text-primary group-hover:text-accent transition-colors">GitHub</div>
                      <div className="text-xs text-text-muted font-mono">Anoopshukla-AI</div>
                    </div>
                  </a>
                  <a
                    href={contactLinks.promptbase}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-accent/50 transition-all duration-200 group"
                    style={{ background: 'rgba(20, 23, 32, 0.5)' }}
                    aria-label="Visit PromptBase profile (opens in new tab)"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-text-primary group-hover:text-accent transition-colors">PromptBase</div>
                      <div className="text-xs text-text-muted font-mono">promptbase.com/profile/anoops</div>
                    </div>
                  </a>
                  <a
                    href={contactLinks.gumroad}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-accent/50 transition-all duration-200 group"
                    style={{ background: 'rgba(20, 23, 32, 0.5)' }}
                    aria-label="Visit Gumroad profile (opens in new tab)"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent" strokeLinecap="round" strokeLinejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-text-primary group-hover:text-accent transition-colors">Gumroad</div>
                      <div className="text-xs text-text-muted font-mono">anoops.gumroad.com</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Podcast callout */}
              {personalInfo.podcast && (
                <a
                  href={contactLinks.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl border border-accent/20 p-6 hover:border-accent/50 transition-all duration-300 group"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0, 229, 200, 0.05), rgba(13, 15, 18, 0.6))',
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl group-hover:scale-110 transition-transform">🎙️</span>
                    <h4 className="font-display font-bold text-text-primary group-hover:text-accent transition-colors">Podcast</h4>
                  </div>
                  <p className="text-sm text-text-secondary">
                    {personalInfo.podcast}
                  </p>
                </a>
              )}

              {/* Closing line */}
              <p className="text-text-muted font-mono text-sm uppercase tracking-widest text-center pt-4">
                {contactLinks.closingLine}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Contact.displayName = 'Contact';

export default Contact;
