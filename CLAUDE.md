# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (Vite)
npm run build      # Production build
npm run preview    # Preview production build locally
npm run check      # Type-check with svelte-check
npm run check:watch  # Type-check in watch mode
```

No test suite exists in this project.

## Architecture

This is a **SvelteKit 2 / Svelte 5** single-page portfolio site styled with **Tailwind CSS v4** and animated with **GSAP**.

### Page structure

The entire portfolio is a single page at `src/routes/+page.svelte`. It renders sections in order: Hero → About Me → Experience → Projects → Skills → Education → Contact. There is a stub blog route at `src/routes/blog/+page.svelte`.

### `src/lib/` layout

```
src/lib/
├── components/        # UI components (Svelte files with markup)
│   ├── +Header.svelte
│   ├── +Footer.svelte
│   ├── DetailModal.svelte
│   ├── ExperienceCard.svelte
│   ├── ProjectCard.svelte
│   ├── ImageCarousel.svelte
│   ├── SkillsModal.svelte
│   └── SkillsShowcase.svelte
├── animations/        # Animation-only Svelte files (no markup, GSAP onMount only)
│   ├── HeroAnimations.svelte
│   ├── ExperienceAnimations.svelte
│   └── ProjectAnimations.svelte
├── data/              # Content data files (edit these to update portfolio content)
│   ├── experience.js
│   ├── projects.js
│   ├── skills.json
│   └── education.json
├── assets/            # Image assets organized by section
│   ├── about/
│   ├── experience/
│   └── projects/
├── fonts/             # Custom font files
└── index.js           # Barrel export — all imports go through $lib
```

### Data layer

Content lives in `src/lib/data/` as plain JS/JSON files — not in a database or CMS. Each entry follows a consistent shape (`title`, `date`, `skills[]`, `highlights[]`, `description[]`). Edit these files directly to add or update content.

### Component barrel export

All components, animations, data, and asset imports are re-exported from `src/lib/index.js`. The page imports everything from `$lib`, not from individual paths. When adding a new file in any of these folders, register it in `src/lib/index.js`.

### Animation pattern

Animation components (`src/lib/animations/`) have no markup — they only run `onMount` GSAP logic targeting CSS class selectors on elements in the main page. GSAP `ScrollTrigger` is registered only in the browser. Mobile devices skip entry animations (opacity is set to 1 directly) for performance.

### Modal pattern

`DetailModal.svelte` is a single shared modal used for both experience and project detail views. It accepts a `type` prop (`'experience' | 'project'`) that controls color scheme and which optional sections render (context, demo image, project link).

### Design system

Dark theme: `#111111` background, `#1a1a1a` card surfaces, `#2a2a2a` borders, `blue-500` accent.

- Section headings use `font-black uppercase` (not the legacy `CustomCursive` font)
- Cards in grid sections use `h-full flex flex-col` so all cards in a row share the same height
- Experience card dates use `whitespace-nowrap` to prevent date ranges from wrapping mid-string
- Demo images in project cards use `aspect-[16/9]` with `object-cover object-top` to consistently show the top of the image at any viewport width

### Deployment

Uses `@sveltejs/adapter-auto` targeting Vercel. Contact form submits to Formspree (`https://formspree.io/f/xqakqokj`).
