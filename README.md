# Romeo Parulian Marpaung · Portfolio

My UI/UX portfolio: a homepage and four case studies (ZapCart, Vaya, Mellow and Atma Barbershop), built from the Minimal design in `../portfolio-templates/romeo-portfolio.figcraft`.

Built with Next.js 16 (App Router), React, TypeScript and Tailwind CSS 4. Every page is static, so it can be hosted for free on Vercel.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Where things live

| What | Where |
| --- | --- |
| Name, email, LinkedIn, GitHub, resume link, About text | `lib/site.ts` |
| Project cards, their order, and the prototype/Figma/code links | `lib/projects.ts` |
| Case study pages | `app/work/<project>/page.tsx` |
| Buttons, chips and cards | `components/ui.tsx` |
| Case study layout pieces (sections, rows, decisions, closing) | `components/case-study.tsx` |
| Screenshots | `assets/shots/` (also listed in `lib/shots.ts`) |
| Resume PDF | `public/Romeo-Parulian-Marpaung-CV.pdf` |
| Social preview image and favicon | `app/opengraph-image.png`, `app/icon.svg` |

## Common changes

- **Add a link to a project** (for example Mellow's live prototype): add `{ label: "Open the prototype ↗", href: "https://…", external: true }` to that project's `links` in `lib/projects.ts`. The buttons appear under its "Final design" section.
- **Change the project order**: reorder the `projects` array in `lib/projects.ts`. The homepage and the "Next project" links follow it.
- **Replace a screenshot**: overwrite the file in `assets/shots/` with the same name.
- **Update the resume**: replace `public/Romeo-Parulian-Marpaung-CV.pdf`. Keep it to the CV pages only, without diplomas or transcripts.

## Deploy

The site deploys on Vercel from the `main` branch. Every push to `main` publishes a new version.
