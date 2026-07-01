import React from 'react';
import { portfolioData } from '../data/portfolio';

export function Footer() {
  const { personalInfo, contactLinks } = portfolioData;

  return (
    <footer
      className="relative z-10 pt-16 pb-8 px-6"
      style={{ backgroundColor: 'var(--color-bg)', borderTop: '1px solid var(--color-border)' }}
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Identity */}
          <div>
            <span className="text-2xl font-bold text-accent block mb-2">AS</span>
            <p className="font-bold text-lg text-text-primary mb-1">{personalInfo.name}</p>
            <p className="text-text-secondary text-sm mb-4">{personalInfo.title}</p>
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent bg-accent/10 px-3 py-1.5 rounded-full border border-accent/20">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
              {contactLinks.availabilityBadge}
            </span>
          </div>

          {/* Location + Podcast */}
          <div>
            <p className="font-semibold text-text-primary mb-2">Gurugram, Haryana, India</p>
            <p className="text-text-secondary text-sm mb-4 leading-relaxed">
              Open to roles in Delhi NCR &middot; Remote contracts welcome
            </p>
            {personalInfo.podcast && (
              <a href={contactLinks.spotify} target="_blank" rel="noopener noreferrer" className="block mt-4 p-3 rounded-lg border border-border hover:border-accent/50 transition-colors group" style={{ background: 'rgba(20, 23, 32, 0.5)' }}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg group-hover:scale-110 transition-transform">🎙️</span>
                  <span className="text-xs font-mono text-accent uppercase tracking-wider">Podcast</span>
                </div>
                <p className="text-text-secondary text-xs leading-relaxed group-hover:text-text-primary transition-colors">{personalInfo.podcast}</p>
              </a>
            )}
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <a
              href={contactLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary text-sm hover:text-accent transition-colors duration-200"
              aria-label="Visit LinkedIn profile"
            >
              LinkedIn →
            </a>
            <a
              href={contactLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary text-sm hover:text-accent transition-colors duration-200"
              aria-label="Visit GitHub profile"
            >
              GitHub →
            </a>
            <a
              href={contactLinks.promptbase}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary text-sm hover:text-accent transition-colors duration-200"
              aria-label="Visit PromptBase profile"
            >
              PromptBase →
            </a>
            <a
              href={contactLinks.gumroad}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary text-sm hover:text-accent transition-colors duration-200"
              aria-label="Visit Gumroad profile"
            >
              Gumroad →
            </a>
            <a
              href={`mailto:${contactLinks.email}`}
              className="text-text-secondary text-sm hover:text-accent transition-colors duration-200"
              aria-label="Send an email"
            >
              {contactLinks.email} →
            </a>
            <a
              href={contactLinks.resume}
              download="Anoop_Shukla_Resume.pdf"
              className="inline-flex items-center gap-2 mt-3 text-sm font-semibold text-accent hover:opacity-80 transition-opacity"
              aria-label="Download resume"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7,10 12,15 17,10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t pt-8" style={{ borderColor: 'var(--color-border)' }}>
          <p className="text-center text-text-muted text-sm">
            &copy; {new Date().getFullYear()} {personalInfo.name}. Built with React, Three.js, GSAP, and TypeScript.
          </p>
        </div>

        {/* Hidden geo signal layer for crawlers */}
        <address style={{ display: 'none' }}>
          Anoop Shukla, AI Automation Engineer<br />
          Gurugram, Haryana 122001, India<br />
          Available for AI engineering roles in: Gurugram, Gurgaon, New Delhi, Noida, Ghaziabad, Faridabad, Delhi NCR<br />
          Also available for remote AI automation contracts from India, United States, United Kingdom, Singapore, UAE
        </address>
      </div>
    </footer>
  );
}

Footer.displayName = 'Footer';
export default Footer;
