import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

export function createTimeline(options: gsap.TimelineVars = {}) {
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  return gsap.timeline({
    paused: true,
    ...options,
    defaults: isReducedMotion ? { duration: 0 } : options.defaults
  });
}

export function splitText(element: string | HTMLElement, options = {}) {
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return null;
  
  const text = el.textContent || '';
  el.innerHTML = '';
  
  const chars = text.split('').map(char => {
    const span = document.createElement('span');
    span.textContent = char;
    if (char === ' ') {
      span.innerHTML = '&nbsp;';
    }
    span.style.display = 'inline-block';
    el.appendChild(span);
    return span;
  });
  
  return { chars, revert: () => { el.textContent = text; } };
}

export function scrollReveal(element: string | HTMLElement, options: gsap.TweenVars = {}) {
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (isReducedMotion) {
    gsap.set(element, { opacity: 1, y: 0, x: 0 });
    return null;
  }

  return gsap.fromTo(element, 
    { opacity: 0, y: 30, ...options.from },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none reverse"
      },
      ...options
    }
  );
}
