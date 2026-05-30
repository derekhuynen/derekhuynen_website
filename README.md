<div align="center">

# Derek Huynen &middot; Personal Website

**The source for [derekhuynen.com](https://derekhuynen.com)**, a fast, accessible, single-page portfolio built from scratch with no UI framework.

[![Live site](https://img.shields.io/badge/live-derekhuynen.com-1f3fd1?style=flat-square&logo=azurestaticwebapps&logoColor=white)](https://derekhuynen.com)
[![CI](https://img.shields.io/github/actions/workflow/status/derekhuynen/derekhuynen_website/ci.yml?branch=main&style=flat-square&label=CI&logo=githubactions&logoColor=white)](https://github.com/derekhuynen/derekhuynen_website/actions/workflows/ci.yml)
[![Lighthouse](https://img.shields.io/github/actions/workflow/status/derekhuynen/derekhuynen_website/lighthouse.yml?branch=main&style=flat-square&label=Lighthouse&logo=lighthouse&logoColor=white)](https://github.com/derekhuynen/derekhuynen_website/actions/workflows/lighthouse.yml)
[![CodeQL](https://img.shields.io/github/actions/workflow/status/derekhuynen/derekhuynen_website/codeql.yml?branch=main&style=flat-square&label=CodeQL&logo=github&logoColor=white)](https://github.com/derekhuynen/derekhuynen_website/actions/workflows/codeql.yml)

![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Playwright](https://img.shields.io/badge/Playwright-tested-2EAD33?style=flat-square&logo=playwright&logoColor=white)
![Azure Static Web Apps](https://img.shields.io/badge/Azure-Static%20Web%20Apps-0078D4?style=flat-square&logo=microsoftazure&logoColor=white)

</div>

---

## Highlights

- **Zero UI framework.** Hand-written HTML, CSS, and TypeScript. The whole site ships as roughly 2 KB of JavaScript (gzipped).
- **Light and dark themes** with a no-flash theme switch that respects `prefers-color-scheme` and persists the user's choice.
- **Accessibility first.** WCAG 2.1 AA is enforced in CI with axe across light and dark themes on desktop and mobile.
- **Quality gated.** Lint, build, end-to-end tests, accessibility, Lighthouse, and CodeQL all run before anything reaches production.
- **Hardened delivery.** Security headers (CSP, HSTS, and friends) via Azure Static Web Apps, plus optimized WebP imagery.

## Tech stack

| Layer | Choice |
|-------|--------|
| Markup and styles | Semantic HTML + handcrafted CSS design system (custom properties, fluid type) |
| Behavior | TypeScript (strict), bundled by Vite |
| Hosting | Azure Static Web Apps, deployed from GitHub Actions on push to `main` |
| Testing | Playwright (smoke + e2e) and `@axe-core/playwright` (accessibility) |
| Quality gates | ESLint, Lighthouse CI, CodeQL, Dependabot |

## Project layout

```text
frontend/
├─ index.html                  # all page content (single page)
├─ src/
│  ├─ styles.css               # design system + light/dark themes
│  └─ main.ts                  # theme toggle, scroll reveals, nav
├─ public/
│  ├─ derekhuynen/             # avatar + favicon assets
│  ├─ robots.txt, sitemap.xml  # SEO
│  └─ staticwebapp.config.json # security headers + routing
└─ tests/                      # Playwright smoke + axe accessibility specs
```

## Getting started

```sh
cd frontend
npm install
npm run dev          # local dev server with hot reload
```

## Scripts

| Command | What it does |
|---------|--------------|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Production build to `frontend/dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Lint with ESLint |
| `npm test` | Run the Playwright + axe suite |
| `npm run test:ui` | Run Playwright in interactive UI mode |

## Quality and CI

Every push and pull request runs the full quality suite, and deployment is gated on it passing:

1. **CI** (`ci.yml`): lint, production dependency audit, build, and the Playwright + axe tests, then the gated Azure Static Web Apps deploy.
2. **Lighthouse** (`lighthouse.yml`): performance, accessibility, best practices, and SEO budgets.
3. **CodeQL** (`codeql.yml`): static security analysis.
4. **Dependabot**: weekly grouped dependency updates.

## Contact

- Email: [derek.huynen@gmail.com](mailto:derek.huynen@gmail.com)
- LinkedIn: [linkedin.com/in/derekhuynen](https://www.linkedin.com/in/derekhuynen/)
- GitHub: [github.com/derekhuynen](https://github.com/derekhuynen)
