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
      className="py-24 relative z-10 bg-bg"
      aria-label="Featured projects"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 text-center">
          Featured Work
        </h2>
        <div ref={cardsRef} className="flex flex-col gap-12">
          {portfolioData.projects.map((project) => (
            <article
              key={project.id}
              className="bg-surface border border-border p-8 rounded-lg relative overflow-hidden group hover:border-accent transition-colors shadow-card"
            >
              <div className="md:w-2/3 relative z-10">
                <div className="flex items-center gap-4 mb-3">
                  <h3 className="text-2xl font-display font-bold">{project.title}</h3>
                  {project.featured && (
                    <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full font-mono uppercase tracking-wider">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-text-secondary mb-6 leading-relaxed text-lg">
                  {project.summary}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm bg-bg border border-border text-text-primary px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-4 p-4 bg-bg rounded-md border-l-2 border-accent">
                  <p className="text-sm text-text-primary">
                    <span className="text-accent font-bold">Outcome:</span> {project.outcome}
                  </p>
                </div>
              </div>
              <div
                className="absolute -right-20 -bottom-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors z-0"
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
