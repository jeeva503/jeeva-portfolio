# T V Jeeva Anandhan — Portfolio

A dark-themed, fully responsive portfolio built with React + Vite, generated from the resume content (experience, projects, skills, education, certifications).

## Run it locally

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for deployment

```bash
npm run build
```

This outputs a static site to `dist/`, which you can deploy to Vercel, Netlify, GitHub Pages, or any static host.

## Adding your photo

Drop your photo into the `public` folder and name it **`profile.jpg`** (`public/profile.jpg`). The hero automatically picks it up — no code changes needed. If no photo is present, a styled placeholder icon shows instead, so the site always looks complete.

For best results, use a square or 4:5 portrait, at least 800px on the short side.

## Editing content

All resume content lives in one place: `src/data.js`. Update your profile info, skills, experience, projects, education, and certifications there — every section pulls from this file, so you only need to edit it once.

## Structure

```
src/
  data.js            ← all resume content
  index.css           ← design tokens (colors, type, spacing) + global styles
  App.jsx             ← page assembly
  components/
    Navbar.jsx/css
    Hero.jsx/css
    About.jsx/css
    Skills.jsx/css
    Experience.jsx/css
    Projects.jsx/css
    Education.jsx/css
    Contact.jsx/css
    Footer.jsx/css
```

## Notes

- Theme: near-black background with a single warm amber accent, Space Grotesk for display type, Inter for body copy, and JetBrains Mono for technical labels/dates.
- Animated background: drifting gradient orbs, a slow-panning grid, and a soft cursor-follow glow, all behind the content (`src/components/Background.jsx`).
- Hero includes a live particle/constellation canvas (`src/components/ParticleField.jsx`) and a framed photo panel with a rotating ring and floating badge.
- Scroll-triggered reveals throughout (Framer Motion), an animated connecting line in the experience timeline, count-up stats in About, and tilt/glow hover effects on project cards.
- Fully responsive from mobile through desktop, with a collapsible mobile nav. All motion respects `prefers-reduced-motion`.
- No backend — the contact section links directly to email, phone, and LinkedIn.
