# Capitol

The landing site for Capitol, a free 36-hour hackathon in Washington, D.C. run by
[Hack Club](https://hackclub.com) with the Congressional App Challenge and Middlebury College,
and for the certificate Hack Club gives to any student who open-sources their Congressional App
Challenge project.

It is a static site: there is no database, no authentication, no API and no server. `pnpm build`
writes plain files to `out/` that any static host can serve. Applications go to
`forms.hackclub.com/capitol-apply` and certification requests to
`forms.hackclub.com/congressional_certification`.

## Tech stack

- [Next.js 15](https://nextjs.org/) (App Router) and React 18
- Tailwind CSS for utilities; the design system itself is plain CSS in `src/app/globals.css`
- Self-hosted fonts in `public/fonts` (PT Sans, PT Serif, Canterbury)
- Guides written in MDX under `guides/`

## Getting started

```bash
pnpm install
pnpm dev
```

Then open <http://localhost:3000>. `pnpm build && pnpm start` builds `out/` and serves it locally,
and `./run.sh` builds it in Docker and serves it with nginx (which also sets the security headers;
see `nginx.conf`).

## Project structure

```
src/app/page.js            Homepage (the Figma comp, recreated)
src/app/certificate/       How to earn the certificate
src/app/faq/               Frequently asked questions
src/app/overview/          The certificate, in one page
src/app/resources/         Guides on building and submitting a project
src/app/gallery/           Certified projects (static: projects.json + public/gallery)
src/app/[slug]/            Renders guides/*.mdx (github, parents, travel-info)
src/app/components/        Nav, footer, paper sheet, page shell, project card and strip
src/app/globals.css        The design system: tokens, type, paper, hero, components
public/collage/            Assets exported from the Figma comp (clouds, cut-outs, torn edges, logos)
DESIGN.md                  The design system, documented
```

## Updating the gallery

`src/app/gallery/projects.json` is a plain list of `{ projectName, demoUrl, codeUrl,
githubUsername, imageSrc }`; screenshots live in `public/gallery/screenshots`. Edit the file and
add the image to update it.
