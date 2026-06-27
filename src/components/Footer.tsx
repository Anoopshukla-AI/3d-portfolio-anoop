import React from 'react';
import { portfolioData } from '../data/portfolio';

export function Footer() {
  const { personalInfo, contactLinks } = portfolioData;

  return (
    <footer style={{
      backgroundColor: '#0a0e17',
      borderTop: '1px solid #1e293b',
      padding: '4rem 2rem',
      color: '#eae5ec',
      position: 'relative',
      zIndex: 10,
      fontFamily: '"Geist", sans-serif'
    }} role="contentinfo">
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          {/* Identity */}
          <div>
            <span style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#5eead4',
              display: 'block',
              marginBottom: '0.5rem'
            }}>AS</span>
            <p style={{ fontWeight: 'bold', fontSize: '1.1rem', margin: '0 0 0.25rem 0' }}>{personalInfo.name}</p>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: 0 }}>{personalInfo.title}</p>
          </div>

          {/* Location + Availability */}
          <div>
            <p style={{ fontWeight: '500', margin: '0 0 0.5rem 0' }}>Gurugram, Haryana, India</p>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: '0 0 1rem 0', lineHeight: '1.4' }}>
              Open to roles in Delhi NCR &middot; Remote contracts welcome
            </p>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.75rem',
              fontFamily: 'monospace',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: '#5eead4',
              backgroundColor: 'rgba(94, 234, 212, 0.1)',
              padding: '0.25rem 0.75rem',
              borderRadius: '9999px'
            }}>
              <span style={{
                width: '6px',
                height: '6px',
                backgroundColor: '#5eead4',
                borderRadius: '50%',
                display: 'inline-block'
              }} />
              {contactLinks.availabilityBadge}
            </span>
          </div>

          {/* Links */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem'
          }}>
            <a
              href={contactLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#94a3b8', fontSize: '0.9rem', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseOver={(e) => e.currentTarget.style.color = '#5eead4'}
              onMouseOut={(e) => e.currentTarget.style.color = '#94a3b8'}
              aria-label="Visit LinkedIn profile"
            >
              LinkedIn
            </a>
            <a
              href={contactLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#94a3b8', fontSize: '0.9rem', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseOver={(e) => e.currentTarget.style.color = '#5eead4'}
              onMouseOut={(e) => e.currentTarget.style.color = '#94a3b8'}
              aria-label="Visit GitHub profile"
            >
              GitHub
            </a>
            <a
              href={`mailto:${contactLinks.email}`}
              style={{ color: '#94a3b8', fontSize: '0.9rem', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseOver={(e) => e.currentTarget.style.color = '#5eead4'}
              onMouseOut={(e) => e.currentTarget.style.color = '#94a3b8'}
              aria-label="Send an email"
            >
              {contactLinks.email}
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div style={{
          borderTop: '1px solid #1e293b',
          paddingTop: '2rem',
          textAlign: 'center'
        }}>
          <p style={{ color: '#64748b', fontSize: '0.85rem', margin: 0 }}>
            &copy; {new Date().getFullYear()} {personalInfo.name}. Built with React, Three.js, GSAP.
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
