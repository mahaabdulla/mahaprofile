# MAHA — From ideas to experiences

A bilingual editorial portfolio built with Next.js App Router, TypeScript, Tailwind CSS 3, GSAP / ScrollTrigger, and Lucide. Static export makes every page portable without a backend.

## Run

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3000. Use `npm run build` for the production static site in `out/`. Serve that directory with any static HTTP host. `npm start` serves the production export locally at http://127.0.0.1:4173 using the included Node static server.

## Content

`src/lib/content.ts` is the single source for identity, localized navigation and section copy, process steps, capabilities, contact details, and the two owner-supplied projects. Long-form page scaffolding is in `src/components/portfolio.tsx`.

The brief and owner-provided follow-up contact details are the content sources for this implementation. No employment, testimonials, metrics, or project results have been invented.

- Azad and Sigil Film replace the initial sample projects. The owner confirmed software development within a team for both. No framework, sole authorship, metrics, or engineering outcomes are inferred.
- Project images come from the Azad Google Play listing and a screenshot of the live Sigil Film homepage. Project details include a concise overview, confirmed contribution, and the supplied live destination.
- `site.contact.email`, `github`, `linkedin`, and `instagram` contain the contact destinations supplied by the owner. Instagram replaces Resume. Each channel has a labeled icon and working destination; the email row also offers copying. Shared contact sections show the actual email address. Tracking query parameters are omitted.
- Creative Lab chapters demonstrate an original narrative framework for عُرُوب البرمجة. They do not claim published articles, completed educational content, or historical facts.
- No Notes section is included because real notes were not supplied.

## Routes and localization

`/` is English. `/en/` and `/ar/` contain Home, `work/`, `about/`, `lab/`, `contact/`, and two `work/[project]/` pages. Language switching preserves the current page. The document and shell both have appropriate `lang` and `dir` attributes. Arabic words remain intact during animation; English tracking is not applied to Arabic text.

## Design and motion

Charcoal `#111114`, ivory `#F1F0EB`, and lilac `#A6A0DF` define the main identity. Emerald, warm ivory, and gold are confined to the Arabic storytelling project. Layouts recompose at 1100, 760, 540, and 360px. Motion uses natural scrolling, one-shot heading reveals, a restrained hero orbit, a scroll-linked Lab motif, CSS hover feedback, and page entry reveals. The Lab uses sticky visual chapters on larger screens. Process tabs have keyboard support. GSAP is the only motion library. On larger screens, the process advances with natural scroll and remains directly selectable. Reduced-motion preferences disable transitions, animated reveals, smooth scrolling, and sticky storytelling.

## Typography and references

The current WHOISJOA public stylesheet identifies `Inter` as `--_typography---main-font` and the heading family inherits it. Its secondary font is Tiempos Fine; that proprietary font is **not included**. MAHA uses Inter for English display and body text, system Georgia for selected italic accents, IBM Plex Sans Arabic for Arabic display/body, and JetBrains Mono for annotations.

The requested Palestine font's intended family, source files, and web license could not be established. IBM Plex Sans Arabic is the explicitly documented temporary replacement. No unverified Palestine font files were downloaded.

Self-hosted fonts come from the official Google Fonts and Inter repositories and include their SIL OFL 1.1 license files in `public/fonts/`. See `LICENSES.md`.

References were accessed on 23 October 2026:

- https://whoisjoa.studio/ — public page and stylesheet (https://whoisjoa.studio/_astro/queries.BhoufTdB.css) inspected; its current ocean-led design differs from the brief's described reference. The brief's editorial direction guided this original design.
- https://hiddenheroes.netguru.com/ — narrative project structure, selectively interpreted as original Lab chapters.
- https://www.whpcreative.com/ — project-led presentation and concise communication.

No reference artwork, branding, source code, or proprietary animations were reused.

## Quality checks

```sh
npm run typecheck
npm run lint
npm run build
npm run check:export
```

Export checks verify all generated routes, locale attributes, headings, metadata, ARIA references, and internal assets. Browser checks cover desktop/mobile layouts, both languages, navigation, filters, process keyboard interactions, disclosure controls, and runtime logs. Accessibility is checked structurally and through keyboard interaction; this is not a full assistive-technology audit. See `QA.md` for actual results and remaining limitations. A successful local static build does not establish deployed production status.

## Deployment

Set `NEXT_PUBLIC_SITE_URL` to the verified hosting origin before building so Open Graph URLs use that domain. `.env.example` documents the local default. The current export uses the local origin; no public domain has been invented. Host `out/` with directory-index routing and serve `404.html` for unknown paths.

Private publication via the Sites connector was attempted, but the workspace reported that Sites is not enabled. No remote site was created and no public deployment is claimed. Source and static ZIP archives are provided separately.
