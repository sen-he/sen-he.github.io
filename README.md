# Sen He — Academic Website

Personal academic website for **Sen He**, Assistant Professor in the Department
of Electrical and Computer Engineering at the University of Arizona.

**Live site**: [https://senhe.ai/](https://senhe.ai/)

## Built With

- [Astro](https://astro.build/) — static site generator
- [GSAP](https://gsap.com/) + [Lenis](https://lenis.darkroom.engineering/) — scroll choreography and smooth scrolling
- [GitHub Pages](https://pages.github.com/) — hosting (via GitHub Actions)

The Astro project lives in [`site/`](site/). The repository root holds only the
project directory, the deploy workflow, and this README.

## Local Development

```bash
cd site
npm install      # first time only
npm run dev      # http://localhost:4321
npm run build    # production build → site/dist/
```

## Content

- **Publications** — `site/src/data/publications.json` (source of truth).
  `site/publications.bib` plus `site/scripts/build-pubs.mjs` regenerate the JSON
  from BibTeX when needed (run from `site/`: `node scripts/build-pubs.mjs`).
- **Projects / News** — markdown content collections in
  `site/src/content/{projects,blog}/`; images in `site/public/`.
- **Pages** — `site/src/pages/` (`about`, `team`, `teaching`, `cv`, ...).
- **CV** — `site/public/resume.pdf`, linked from `/cv`.

## Deployment

Pushing to `master` triggers
[`.github/workflows/deploy.yaml`](.github/workflows/deploy.yaml), which builds
`site/` and publishes to GitHub Pages. The custom domain (`senhe.ai`) is set via
`site/public/CNAME`.
