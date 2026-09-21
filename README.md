# Anoop Shukla — AI Automation Engineer Portfolio.

[![Tech Stack](https://img.shields.io/badge/Tech_Stack-Production_Ready-3776AB?style=flat-square)](https://github.com/Anoopshukla-AI/3d-portfolio-anoop)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)


A 3D interactive portfolio built with React Three Fiber, GSAP ScrollTrigger, and TypeScript. Features a particle-network scene, scroll-driven camera animations, and a fully responsive design with mobile SVG fallback.

## Setup

```bash
# Clone the repository
git clone https://github.com/Anoopshukla-AI/3d-portfolio-anoop.git
cd 3d-portfolio-anoop

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customization

All content lives in a single file: `src/data/portfolio.ts`.

| Section        | Key in `portfolioData`      |
|----------------|------------------------------|
| Hero           | `heroContent`                |
| About          | `personalInfo`               |
| Services       | `services[]`                 |
| Projects       | `projects[]`                 |
| Tech Stack     | `stackItems{}`               |
| Timeline       | `timelineItems[]`            |
| Contact        | `contactLinks`               |

TypeScript types are defined in `src/types/portfolio.types.ts`. Update the types if you add or remove fields.

### Design Tokens

All colors, typography, spacing, and animation easing values are defined as CSS custom properties in `src/styles/tokens.css`. Change them there for a global theme update.

## Deployment

### Vercel (recommended)

```bash
npx vercel --prod
```

Or connect the GitHub repository to Vercel for automatic deployments on push.

### Other platforms

Any static hosting platform works. The build output is in the `dist/` directory after running `npm run build`.

## Tech Stack

| Category       | Technologies                                                    |
|----------------|-----------------------------------------------------------------|
| Framework      | React 18, TypeScript 5.4                                       |
| 3D             | Three.js 0.165, React Three Fiber 8.x, Drei, Postprocessing    |
| Animation      | GSAP 3.12 with ScrollTrigger                                    |
| Styling        | Tailwind CSS 3.4, CSS Custom Properties                         |
| Build          | Vite 5.2                                                        |

## Architecture

```
src/
  components/    → Reusable UI (Navbar)
  sections/      → Page sections (Hero, About, Services, etc.)
  scenes/        → R3F canvas and 3D geometry
  data/          → Single portfolio.ts data file
  hooks/         → useScrollProgress, useReducedMotion, useMobile
  utils/         → GSAP plugin registration and helpers
  context/       → ScrollContext (scrollY, activeSection, isMobile)
  styles/        → tokens.css + global.css
  types/         → TypeScript interfaces
```

## Known Issues and Workarounds

1. **Peer dependency warning for `postprocessing`**: The `@react-three/postprocessing@2.16.2` package requests `three >= 0.168.0`, but we pin `three@0.165.0` for R3F 8.x compatibility. This warning is safe to ignore; the Bloom effect works correctly.

2. **GSAP SplitText**: The free GSAP package does not include `SplitText`. A lightweight custom implementation is used in `src/utils/gsap.ts` that splits text into individual `<span>` elements for character-level animation.

3. **Large bundle size**: Three.js adds significant weight. The production build is around 330 KB gzipped. Consider code-splitting the 3D scene further or using dynamic imports for Three.js if bundle size is a concern.

## Performance Notes

- Sections below the fold are lazy-loaded with `React.lazy` and `Suspense`.
- The 3D canvas uses instanced meshes for all 80 nodes (single draw call).
- Geometry and materials are disposed on component unmount.
- Mobile devices (below 768px) skip the WebGL canvas entirely and show a CSS-animated SVG fallback.
- `prefers-reduced-motion` is respected across all GSAP and CSS animations.

## License

MIT
