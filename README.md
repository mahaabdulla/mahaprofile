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
- Creative Lab contains two independent content worlds: عُرُوب البرمجة (Arabic literature, poetry, history, storytelling) and العلوم الغانمة (wide-ranging programming topics with unexpected explanations). Examples are original interactive explanations, not fabricated post covers. Instagram links to the owner-supplied account.
- No Notes section is included because real notes were not supplied.

## Routes and localization

`/` is English. `/en/` and `/ar/` contain Home, `work/`, `about/`, `lab/`, `contact/`, and two `work/[project]/` pages. Language switching preserves the current page. The document and shell both have appropriate `lang` and `dir` attributes. Arabic words remain intact during animation; English tracking is not applied to Arabic text.

## Design and motion

Charcoal `#111114`, ivory `#F1F0EB`, and lilac `#A6A0DF` define the main identity. Emerald, warm ivory, and gold are confined to the Arabic storytelling project. Layouts recompose at 1100, 760, 540, and 360px. Motion uses natural scrolling, one-shot heading reveals, a restrained hero orbit, a scroll-linked Lab motif, CSS hover feedback, and page entry reveals. The Lab uses sticky visual chapters on larger screens. Process tabs have keyboard support. GSAP is the only motion library. On larger screens, the process advances with natural scroll and remains directly selectable. Reduced-motion preferences disable transitions, animated reveals, smooth scrolling, and sticky storytelling.

## Typography and references

The current WHOISJOA public stylesheet identifies `Inter` as `--_typography---main-font` and the heading family inherits it. Its secondary font is Tiempos Fine; that proprietary font is **not included**. MAHA uses Inter for English display and body text, system Georgia for selected italic accents, IBM Plex Sans Arabic for Arabic display/body, and JetBrains Mono for annotations.

The owner's local Palestine Regular v1.003 file is now used for major Arabic headings and selected editorial subheadings. Its internal names, glyph coverage, and shaping tables were checked; Arabic body/UI stays IBM Plex Sans Arabic. The file's web-embedding license was not supplied and remains unresolved for public deployment. 29LT Riwaya Informal is not included because its actual licensed webfont files were not found. See LICENSES.md for the exact status and font hash.

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

## Signature interactions — 25 October 2026

The existing Next.js routes, palette, typography, rounded controls, and bilingual RTL/LTR structure are retained. Software development remains the first professional focus; creative programming content is a second practice.

- Hero: masked typography entrance and scroll-responsive title, signature, orbit and star. Arabic text is animated in intact shaped lines.
- Build journey: native scrolling with a sticky four-stage GSAP/ScrollTrigger sequence (idea, wireframe, working interface, data integration). Stage controls also support arrows, Home and End. The task interface changes state; the data example makes a real HTTP GET to the local static `/demo/workflow.json` resource and displays loading, success, or retry states. It demonstrates an integration contract and does not claim a live application backend.
- Projects: real images in an animated, pointer-responsive gallery, image switching, and a native modal with Escape, focus restoration, and actual project links.
- Creative Lab: independent emerald/gold and lilac/ink worlds, scroll chapters, and reversible interactive explanations. No published content, thumbnails, metrics, or results are invented.
- Motion: respects the OS reduced-motion preference and includes an explicit footer control. Reduced motion exposes all build stages, removes sticky storytelling and animated transitions, and keeps the interactions usable. GSAP contexts and listeners are cleaned up on route/preference changes.

Interaction references reviewed: https://whoisjoa.studio/ (primary) and https://hiddenheroes.netguru.com/ (secondary narrative inspiration). The secondary site text was accessible through web retrieval; its browser page did not load in this environment. No reference assets or animation code were copied.

## From Zero to Creation intro

An original 2.52-second GSAP sequence draws a spark and orbital paths, transforms them into interface geometry, reveals MAHA, then exits through a mask. It claims the first visit using sessionStorage; route changes and reloads in the same tab session skip it. The intro does not wait for images, fonts, network calls, or nonessential assets.

The cover is hidden in server HTML. A tiny guarded pre-paint script activates the same 2.52-second sequence directly in CSS, so it does not wait for hydration. If the independent root-layout client component is ready within 300ms, its GSAP timeline takes over; otherwise the first-paint sequence continues uninterrupted. Independent CSS deadlines and a 3-second GSAP timer prevent a stuck cover. Pointer input, keyboard input, wheel input, the skip button, reduced motion, storage denial, and animation setup failure all dismiss or bypass the optional intro. The underlying document is never made inert, scroll-locked, or aria-busy. Native navigation fallback styles are included for disabled JavaScript.

Run `npm run test:intro` for the eight session/failure-path tests.
