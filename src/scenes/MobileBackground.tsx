import React from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface NodeData {
  id: number;
  x: number;
  y: number;
  r: number;
  isAccent: boolean;
}

interface EdgeData {
  id: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export function MobileBackground() {
  const prefersReducedMotion = useReducedMotion();

  // Deterministic pseudo-random for consistent SSR/CSR
  let seed = 1;
  const random = () => {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  };

  const nodes: NodeData[] = [];
  for (let i = 0; i < 30; i++) {
    nodes.push({
      id: i,
      x: random() * 800,
      y: random() * 600,
      r: 3 + random() * 3,
      isAccent: random() > 0.7
    });
  }

  const edges: EdgeData[] = [];
  for (let i = 0; i < 40; i++) {
    const n1 = nodes[Math.floor(random() * 30)];
    const n2 = nodes[Math.floor(random() * 30)];
    if (n1.id !== n2.id) {
      edges.push({ id: i, x1: n1.x, y1: n1.y, x2: n2.x, y2: n2.y });
    }
  }

  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden bg-bg pointer-events-none md:hidden"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full opacity-60"
        role="presentation"
      >
        <style>
          {`
            .network-edge {
              stroke: var(--color-accent);
              stroke-opacity: 0.15;
              ${prefersReducedMotion ? 'animation: none;' : 'animation: edgePulse 4s infinite alternate;'}
            }
            .network-node { fill: var(--color-text-muted); }
            .network-node--accent { fill: var(--color-accent); }
            @keyframes edgePulse {
              0% { stroke-opacity: 0.15; }
              100% { stroke-opacity: 0.4; }
            }
          `}
        </style>
        {edges.map((e) => (
          <line
            key={`edge-${e.id}`}
            x1={e.x1}
            y1={e.y1}
            x2={e.x2}
            y2={e.y2}
            strokeWidth="1"
            className="network-edge"
            style={{ animationDelay: `${(e.id * 0.3) % 4}s` }}
          />
        ))}
        {nodes.map((n) => (
          <circle
            key={`node-${n.id}`}
            cx={n.x}
            cy={n.y}
            r={n.r}
            className={`network-node${n.isAccent ? ' network-node--accent' : ''}`}
          />
        ))}
      </svg>
    </div>
  );
}

MobileBackground.displayName = 'MobileBackground';
