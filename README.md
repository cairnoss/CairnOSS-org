<div align="center">
  <img src="public/logo_transparent.png" alt="CairnOSS Logo" width="72" height="72" />
  <h1>CairnOSS</h1>
  <p><strong>Building Open. Building Better.</strong></p>
  <p>
    Official website for <strong>CairnOSS</strong> (<em>Cairn + Open Source Software</em>) — an open-source software organization focused on building, maintaining, and contributing to thoughtful, accessible developer tools and infrastructure.
  </p>
</div>

---

## Features

- **System-Adaptive Theming**: Automatically follows the visitor's OS light/dark preference using `color-scheme: light dark`, CSS `light-dark()`, and `@media (prefers-color-scheme: dark)` fallbacks with zero flash of un-themed content.
- **Accessible Navigation**: Sticky header with a single semantic `<nav aria-label="Primary">` landmark, `IntersectionObserver`-driven active section tracking (`aria-current="location"`), and a responsive mobile drawer.
- **Interactive Hero**: Architectural grid, radial lighting, interconnected node SVG backdrop, and a WCAG-compliant Pause/Play ambient motion control respecting `prefers-reduced-motion`.
- **Filterable Project Catalog**: Sample project showcase with category filters (`All`, `Developer Tools`, `Infrastructure`, `Desktop Applications`, `Automation`, `Open Source Libraries`) and status badges (`Active`, `Experimental`, `Archived`).
- **About & Ecosystem**: Highlights CairnOSS's core principles (*Open by Default*, *Developer First*, *Built Together*) alongside the organization's core technology stack (`Go`, `Rust`, `C++`, `Flutter`, `TypeScript`, `Python`, `Docker`, `Linux`).
- **Community & Updates**: Direct links to GitHub, Discussions, and guidelines, plus editorial update cards backed by an accessible native `<dialog>` preview modal.
- **Technical SEO**: Includes `robots.txt`, generated `sitemap.xml`, `site.webmanifest`, canonical URLs, absolute Open Graph & Twitter card metadata, and Schema.org JSON-LD (`Organization` + `WebSite`).

## Tech Stack

- **Framework**: [Astro 7](https://astro.build) with `@astrojs/react`
- **UI & Language**: [React 19](https://react.dev) & TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) (`@tailwindcss/vite`)
- **Animations**: [Framer Motion](https://motion.dev)
- **Icons**: [Lucide React](https://lucide.dev) & custom geometric SVGs

## Project Structure

```text
/
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── logo.png
│   ├── logo_transparent.png   # Primary emblem & favicon
│   ├── robots.txt             # Search engine crawl directives & sitemap URL
│   └── site.webmanifest       # Web app manifest metadata
├── src/
│   ├── components/
│   │   ├── About.tsx          # Organization philosophy & 3 principles
│   │   ├── Blog.tsx           # Placeholder updates & native <dialog> preview
│   │   ├── CairnApp.tsx       # Root client app & IntersectionObserver
│   │   ├── CairnLogo.tsx      # Brand mark & CairnOSS wordmark
│   │   ├── Community.tsx      # Contributor CTAs & community resources
│   │   ├── Footer.tsx         # Site footer, links & tagline
│   │   ├── Hero.tsx           # Hero section with ambient grid/nodes
│   │   ├── Navbar.tsx         # Sticky desktop/mobile navigation
│   │   ├── Projects.tsx       # Filterable sample project showcase
│   │   ├── TechIcons.tsx      # GitHub & restrained technology SVG marks
│   │   └── TechStack.tsx      # Technology & ecosystem grid
│   ├── data/
│   │   └── cairnData.ts       # Typed sample projects, posts & links
│   ├── layouts/
│   │   └── Layout.astro       # Document head, SEO, JSON-LD, fonts & color-scheme
│   ├── pages/
│   │   ├── index.astro        # Main entry page
│   │   └── sitemap.xml.ts     # Static XML sitemap endpoint
│   └── styles/
│       └── global.css         # System theme tokens, utilities & motion rules
├── astro.config.mjs           # Astro integration & production site URL config
├── package.json
└── tsconfig.json
```

## Getting Started

### Prerequisites

- **Node.js** `>= 22.23.4` (see `engines` in `package.json`)
- **npm**

### Commands

| Command | Action |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server at `http://localhost:4321` |
| `npm run build` | Build production static site to `./dist/` |
| `npm run preview` | Preview the `./dist/` production build locally |
| `npm run astro -- --help` | Display Astro CLI help |

For background development server management:

```sh
npx astro dev --background
npx astro dev status
npx astro dev logs
npx astro dev stop
```

## SEO & Content Customization

- **Deployment Domain**: Update `site` in [astro.config.mjs](astro.config.mjs) and the `Sitemap:` URL in [public/robots.txt](public/robots.txt) if deploying under a different domain than `https://cairnoss.org`.
- **Projects, Blog Posts, Community Links & Tech Stack**: Edit [src/data/cairnData.ts](src/data/cairnData.ts) to replace the clearly marked sample project and article placeholders with live CairnOSS repositories and announcements.
- **Brand Emblem & Favicon**: Replace [public/logo_transparent.png](public/logo_transparent.png) to update the navbar, hero strip, footer, Open Graph image, web manifest icon, and browser icon simultaneously.

## Contributing

Contributions, issues, and feature ideas are welcome at [github.com/CairnOSS](https://github.com/CairnOSS).
