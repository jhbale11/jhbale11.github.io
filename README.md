# jhbale11.github.io

Personal academic website of Junghwan Kim (Human-Centered Computing Lab, Seoul National University), built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Where things live

| What | Where |
|---|---|
| Bio, links, research interests, news | `src/data/site.ts` |
| Education, honors, experience, teaching, skills | `src/data/cv.ts` |
| One Markdown file per publication (frontmatter + abstract) | `src/content/publications/*.md` |
| Teaser images | `public/images/publications/` |
| CV PDF | `public/cv/Junghwan_Kim_CV.pdf` |
| Site-wide styles (navy theme, dark mode) | `src/styles/global.css` |

## Adding a publication

Create `src/content/publications/<slug>.md`. The slug becomes the URL (`/publications/<slug>`). The frontmatter schema is in `src/content.config.ts`; the Markdown body is the abstract. Set `abstractSource: overview` if the body is a description rather than the official abstract, and `selected: true` to feature it on the home page.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. In the repository settings, set **Pages → Source** to **GitHub Actions** once.
