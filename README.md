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
- **Filterable Project Catalog**: Displays public repositories from [github.com/cairnoss](https://github.com/cairnoss) marked as `Under Development`, with category filters (`All`, `Web & Platform`, `Developer Tools`, `Infrastructure`, `Desktop Applications`, `Automation`, `Open Source Libraries`) and an API-ready data model.
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
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions CI/CD pipeline for GitHub Pages
├── public/
│   ├── .nojekyll              # Bypass Jekyll processing on GitHub Pages
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

## Deployment (GitHub Pages)

Pushes to the `main` branch automatically build and publish the static site to **https://cairnoss.github.io/CairnOSS-org/** via [.github/workflows/deploy.yml](.github/workflows/deploy.yml):

1. In your GitHub repository, open **Settings → Pages** and set **Source** to **GitHub Actions**.
2. Push changes to `main` (or run **Actions → Deploy CairnOSS to GitHub Pages → Run workflow** manually).
3. The workflow runs `actions/configure-pages@v5` so `SITE_URL` and `BASE_PATH` automatically match either `https://cairnoss.github.io/CairnOSS-org/` or a configured custom domain.

## SEO & Content Customization

- **Deployment Domain**: Configured for `https://cairnoss.github.io/CairnOSS-org/`. Update `site`/`base` in [astro.config.mjs](astro.config.mjs), `Sitemap:` in [public/robots.txt](public/robots.txt), and subpath URLs in [public/site.webmanifest](public/site.webmanifest) if deploying under a different domain.
- **Projects, Blog Posts, Community Links & Tech Stack**: Edit [src/data/cairnData.ts](src/data/cairnData.ts) (`PROJECTS` mirrors [github.com/cairnoss](https://github.com/cairnoss) with `Under Development` status and is structured for future GitHub REST API integration).
- **Brand Emblem & Favicon**: Replace [public/logo_transparent.png](public/logo_transparent.png) to update the navbar, hero strip, footer, Open Graph image, web manifest icon, and browser icon simultaneously.

## Contributing

Contributions, issues, and feature ideas are welcome at [github.com/CairnOSS](https://github.com/CairnOSS).
