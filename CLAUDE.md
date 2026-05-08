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

The entire portfolio is a single page at `src/routes/+page.svelte`. It renders sections in order: Hero → About Me → Experience → Projects → Education → Contact. There is a stub blog route at `src/routes/blog/+page.svelte`.

### Data layer

Content lives in `src/lib/components/` as plain JS/JSON files — not in a database or CMS:

- `experience.js` — work history array
- `projects.js` — projects array
- `skills.json` — skills grouped by category
- `education.json` — education entries

To add or update content, edit these files directly. Each entry follows a consistent shape (title, date, skills[], highlights[], description[]).

### Component barrel export

All components, data, and asset imports are re-exported from `src/lib/index.js`. The page imports everything from `$lib`, not from individual paths. When adding a new component or asset, register it in `src/lib/index.js`.

### Animation pattern

Animations are isolated into dedicated "Animation" components (`HeroAnimations.svelte`, `ExperienceAnimations.svelte`, `ProjectAnimations.svelte`). These components have no markup — they only run `onMount` GSAP logic targeting CSS class selectors on elements in the main page. GSAP `ScrollTrigger` is registered only in the browser. Mobile devices skip entry animations (opacity is set to 1 directly) for performance.

### Modal pattern

`DetailModal.svelte` is a single shared modal used for both experience and project detail views. It accepts a `type` prop (`'experience' | 'project'`) that controls color scheme and which optional sections render (context, demo image, project link).

### Deployment

Uses `@sveltejs/adapter-auto` targeting Vercel. Contact form submits to Formspree (`https://formspree.io/f/xqakqokj`).

### Custom font

A custom cursive font (`Rochester-Regular.ttf`) is loaded in `src/app.css` as `CustomCursive` and applied inline via `style="font-family: 'CustomCursive'"` on section headings.
