import React, { useEffect, useRef } from 'react';
import { useScrollContext } from '../context/ScrollContext';
import { portfolioData } from '../data/portfolio';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export function Projects() {
  const { setActiveSection } = useScrollContext();
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) setActiveSection('projects'); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [setActiveSection]);

  useGSAP(() => {
    if (cardsRef.current) {
      const cards = Array.from(cardsRef.current.children);
      cards.forEach((card, i) => {
        const xOffset = i % 2 === 0 ? -80 : 80;
        gsap.fromTo(card,
          { x: xOffset, opacity: 0 },
          {
            x: 0, opacity: 1, duration: 1,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 45%",
              scrub: 1.5,
            }
          }
        );
      });
    }
  }, { scope: sectionRef });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 relative z-10"
      aria-label="Featured projects"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-mono uppercase tracking-widest text-accent mb-4 px-4 py-2 rounded-full border border-accent/20 bg-accent/5">
            Production Deployments
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Featured Work
          </h2>
        </div>
        <div ref={cardsRef} className="flex flex-col gap-10">
          {portfolioData.projects.map((project, index) => (
            <article
              key={project.id}
              className="group relative overflow-hidden rounded-xl border border-border transition-all duration-300 hover:border-accent/40"
              style={{
                background: 'rgba(20, 23, 32, 0.6)',
                backdropFilter: 'blur(8px)',
              }}
            >
              {/* Gradient top stripe */}
              <div
                className="h-[2px] w-full"
                style={{
                  background: project.featured
                    ? 'linear-gradient(90deg, var(--color-accent), var(--color-accent-dim), transparent)'
                    : 'linear-gradient(90deg, var(--color-border), transparent)',
                }}
                aria-hidden="true"
              />

              <div className="p-8 md:p-10">
                <div className="md:w-3/4 relative z-10">
                  {/* Header row */}
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-accent font-mono text-sm opacity-60">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {project.featured && (
                      <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full font-mono uppercase tracking-wider border border-accent/20">
                        Featured
                      </span>
                    )}
                    <span className="text-xs text-text-muted font-mono uppercase tracking-wider">
                      {project.role}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary mb-6 leading-relaxed text-lg">
                    {project.summary}
                  </p>

                  {/* Tech stack pills */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs border border-border text-text-primary px-3 py-1.5 rounded-full hover:border-accent/50 transition-colors"
                        style={{ background: 'rgba(13, 15, 18, 0.5)' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Outcome callout */}
                  <div className="p-4 rounded-lg border-l-2 border-accent" style={{ background: 'rgba(13, 15, 18, 0.4)' }}>
                    <p className="text-sm text-text-primary">
                      <span className="text-accent font-bold mr-2">↗ Outcome:</span>
                      {project.outcome}
                    </p>
                  </div>
                </div>
              </div>

              {/* Background glow */}
              <div
                className="absolute -right-20 -bottom-20 w-72 h-72 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl"
                style={{ background: 'rgba(0, 229, 200, 0.06)' }}
                aria-hidden="true"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

Projects.displayName = 'Projects';

export default Projects;
