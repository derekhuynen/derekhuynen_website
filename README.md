# Derek Huynen — Personal Website

Source for [derekhuynen.com](https://derekhuynen.com), a personal portfolio.

## Tech stack

- **HTML, CSS, and TypeScript** with no UI framework
- **Vite** for the build and dev server
- **Azure Static Web Apps** for hosting (deployed via GitHub Actions on push to `main`)

## Project layout

```
frontend/
  index.html        # all page content (single page)
  src/styles.css     # design system + light/dark themes
  src/main.ts        # theme toggle, scroll reveals, nav
  public/            # static assets, robots.txt, sitemap.xml
```

## Getting started

```sh
cd frontend
npm install
npm run dev
```

## Build

```sh
cd frontend
npm run build
```

Output is written to `frontend/dist/`.

## Contact

- Email: derek.huynen@gmail.com
- LinkedIn: [linkedin.com/in/derekhuynen](https://www.linkedin.com/in/derekhuynen/)
- GitHub: [github.com/derekhuynen](https://github.com/derekhuynen)
