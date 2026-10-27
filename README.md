# MAHA — From ideas to experiences

A bilingual editorial portfolio built with Next.js App Router, TypeScript, Tailwind CSS 3, GSAP / ScrollTrigger, and Lucide. Static export makes every page portable without a backend.

## Run

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3000. Use `npm run build` for the production static site in `out/`. Serve that directory with any static HTTP host. `npm start` serves the production export locally at http://127.0.0.1:4173 using the included Node static server.

## Content

`src/lib/content.ts` is the single source for identity, localized navigation and section copy, process steps, capabilities, contact details, and the owner-supplied projects. Long-form page scaffolding is in `src/components/portfolio.tsx`.

The brief and owner-provided follow-up contact details are the content sources for this implementation. No employment, testimonials, metrics, or project results have been invented.

- Azad and Sigil Film replace the initial sample projects. The owner confirmed software development within a team for both. No framework, sole authorship, metrics, or engineering outcomes are inferred.
- Project images come from the Azad Google Play listing and a screenshot of the live Sigil Film homepage. Project details include a concise overview, confirmed contribution, and the supplied live destination.
- `site.contact.email`, `github`, `linkedin`, and `instagram` contain the contact destinations supplied by the owner. Instagram replaces Resume. Each channel has a labeled icon and working destination; the email row also offers copying. Shared contact sections show the actual email address. Tracking query parameters are omitted.
- Beyond the Line (خارج السطر) replaces the Creative Lab label and contains two independent content worlds: عُرُوب البرمجة (Arabic literature, poetry, history, storytelling) and العلوم الغانمة (wide-ranging programming topics with unexpected explanations). The two editorial showcases use original owner artwork. عُرُوب assets were found in the named Downloads series archive; العلوم الغانمة covers were attached by the owner. See public/content/SOURCES.md. Keyboard-accessible galleries and native modal previews display the complete artwork. Instagram links to the owner-supplied account.
- No Notes section is included because real notes were not supplied.

## Routes and localization

`/` is English. `/en/` and `/ar/` contain Home, `work/`, `about/`, `lab/`, `contact/`, and two `work/[project]/` pages. Language switching preserves the current page. The document and shell both have appropriate `lang` and `dir` attributes. Arabic words remain intact during animation; English tracking is not applied to Arabic text.

## Design and motion

Charcoal `#111114`, ivory `#F1F0EB`, and lilac `#A6A0DF` define the main identity. Emerald, warm ivory, and gold are confined to the Arabic storytelling series. Selected Work uses charcoal #17171C, slightly raised #202027 surrounds, off-white headings, and readable muted text around the unchanged project screenshots. Lilac is reserved for small interactive accents and active filters. Layouts recompose at 1100, 760, 540, and 360px. Motion uses natural scrolling, one-shot heading reveals, a whole-phrase masked Hero headline, a scroll-linked Beyond the Line motif, CSS hover feedback, and page entry reveals. Beyond the Line uses an unpinned scroll-linked typographic break, a bending editorial line, two full-width series showcases, and a restrained exit thread. Mobile uses smaller movement and natural document flow. Process tabs have keyboard support. GSAP is the only motion library. On desktop and mobile, the process advances and reverses with native scrolling and remains directly selectable. Reduced-motion preferences disable transitions, animated reveals, smooth scrolling, and sticky storytelling.

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

- Hero: the approved geometric opening followed by Fragmented Reality typography. Full shaped phrases are masked into eight ink fragments, then return to uncut text.
- Build journey: native scrolling with a sticky four-stage GSAP/ScrollTrigger sequence (idea, wireframe, working interface, data integration). Stage controls also support arrows, Home and End. The task interface changes state; the data example makes a real HTTP GET to the local static `/demo/workflow.json` resource and displays loading, success, or retry states. It demonstrates an integration contract and does not claim a live application backend.
- Projects: real images with inside-image previous/next controls, RTL/LTR keyboard navigation, horizontal swipes, and a native modal with Escape, focus restoration, and actual project links.
- Creative Lab: independent emerald/gold and lilac/ink worlds, scroll chapters, and reversible interactive explanations. No published content, thumbnails, metrics, or results are invented.
- Motion: respects the OS reduced-motion preference. Reduced motion exposes all build stages, removes sticky storytelling and animated transitions, and keeps the interactions usable. GSAP contexts and listeners are cleaned up on route/preference changes.

Interaction references reviewed: https://whoisjoa.studio/ (primary) and https://hiddenheroes.netguru.com/ (secondary narrative inspiration). The secondary site text was accessible through web retrieval; its browser page did not load in this environment. No reference assets or animation code were copied.

## The Impossible Transformation — 26 October 2026

The original 2.45-second Hero sequence transforms a lilac spark into drafting lines, a continuous wireframe, and a polished interface. Interface fragments depart as the two intact heading lines appear. It replaces the former full-screen intro, so the user encounters one brief sequence. There is no loading overlay, fake progress, body lock, asset wait, or visible pause/play control.

A guarded pre-paint script claims a clean Home entry in sessionStorage (maha:hero:impossible-v1). A CSS version starts immediately. GSAP takes over at the same elapsed position after hydration; an independent 2.8-second deadline exposes the finished heading if setup fails or hydration is unavailable. Wheel, pointer, and keyboard input immediately end the optional reveal. Reloads, internal route changes, and direct hash links skip it. Storage denial fails open. With JavaScript disabled the static heading and document remain readable.

The living headline uses a fixed-size phrase grid, pauses outside the viewport or a hidden document, and obeys the system reduced-motion preference. Escape stops the loop without adding a visible control. Reduced motion presents the first complete phrase.

Project and content galleries intentionally loop. The circular controls sit inside each image, appear on desktop hover/focus, and remain visible at mobile/touch breakpoints. Horizontal swipes follow RTL/LTR reading direction, while vertical pans stay native. Arrow keys, Home/End, dialog Escape, and focus restoration remain available. Single-image projects have no navigation arrows. Mobile process demonstrations use the same reversible sticky scroll journey, with compact responsive cards and working stage tabs.

Navbar and footer use the owner-confirmed Downloads/مهو(1).png, copied byte-for-byte with its existing alpha transparency. See public/brand/SOURCES.md. The image keeps its square intrinsic aspect ratio; proportional positioning accommodates transparent padding without cropping the artwork.

Run npm run test:motion for session/failure-path and gallery direction regression tests; npm run check:export audits all exported routes, contacts, assets, and semantics.

## Beyond the Line — 25 October 2026

The existing `/lab/` routes remain stable in both locales. Navigation, page titles, page descriptions, home section, and series copy use the new name. `#creative-lab`, `#uroob`, and `#ghanima` remain supported; `#beyond-line` is also available. The signature title preserves whole Arabic words; GSAP + ScrollTrigger transform the active line into the two-world editorial narrative without pinning or replacing native scrolling. The OS reduced-motion preference restores the fully readable static state, and all GSAP contexts are reverted on navigation.

Series previews use supplied original covers without cropping, invented metrics, publication dates, or assumed individual post links. Each preview supports previous/next, enlargement, keyboard arrows in its native modal, Escape, and focus restoration. Instagram CTAs point to the verified owner profile. Palestine remains the existing local display font with the unresolved web-license status documented in LICENSES.md; this task does not deploy the site.

## Signature motion refinement — 25 October 2026

The React-like orbit mark is removed from Hero and About. The introduction now uses three independent drafting strokes that resolve into interface geometry, preserving its session-once behavior and fail-open guards.

The Hero cycles three localized phrases inside a fixed grid. Each stays readable for 1.9 seconds, then fractures into eight parts of the fully shaped phrase. The next phrase assembles while the outgoing pieces depart. Escape pauses the loop; it also stops outside the viewport, when the document is hidden, or when reduced motion is enabled. Its accessible label changes only when a complete phrase has formed, without an aria-live announcement.

About uses an original THINK / BUILD / CREATE blueprint. Hover, focus, and tap select a stage, reveal a concrete example, and transform the diagram. Paragraph widths, spacing, and the illustration’s height are constrained for balance.

Contact keeps the lilac background, replaces the oversized star with a drawn SVG idea path, and moves a point along its actual length in a 900ms reveal triggered with the three editorial heading lines. The contact CTA remains immediately usable. Standalone Contact provides the requested Let’s begin email CTA alongside the four established contact channels. No new dependencies, project claims, screenshots, or publication details are introduced.

## Final Hero and Contact refinement — 26 October 2026

The approved opening GSAP sequence, SVG geometry, session bootstrap, and first-paint CSS remain unchanged. The subsequent living headline now uses the Fragmented Reality implementation below. English begins with Ideas turn.

Contact now has exactly three localized lines: عندك فكرة؟ / خلّينا نشوف / إلى وين توصل. and Have an idea? / Let's see / where it could go. Whole-line masks reveal with a short 85ms stagger on scroll entry. The existing curved path follows with its travelling point, guiding attention toward the requested CTA. Both animations have static, fully readable reduced-motion fallbacks and clean up on navigation. The lilac background and all other sections are preserved.

## Fragmented Reality — 26 October 2026

Only the Hero headline animation changes. Each phrase has one uncut text rendering and eight complementary clip-path masks of the same fully shaped text. Shared polygon edges cover the whole text surface without holes or overlap; no characters are split and no polygon artwork is drawn. Deterministic transform variations scatter the actual ink, with a reading-direction stagger. Disintegration takes 440–482ms; the next assembly begins 180ms into it and takes 804ms including stagger, followed by a 100ms, 0.4% settling motion. At rest, fragment layers are hidden and the uncut phrase is shown, retaining exact font quality. The readable hold is 1.9 seconds.

The existing fixed grid preserves height across all phrases. Only eight pieces per phrase are used on desktop and mobile, with at most two phrases moving. Geometry is cached on setup, font/layout changes, and resize; per-frame animation changes transforms and opacity only. Rotation-aware bounds use the usable viewport width, excluding the scrollbar. A responsive resize completes any active transition cleanly.

Reduced motion keeps the first complete phrase and disables fragment layers. No-JavaScript HTML already contains the uncut first phrase. A failed animation restores the static current phrase; an independent 1.6-second watchdog also fails open. Timeline, delayed call, observer, resize listener, and watchdog cleanup happen on route, visibility, and preference changes. The approved opening effect, SVG, session logic, and first-paint CSS are fingerprint-verified unchanged. No new dependency or controls are added; Contact and all other sections remain as before.

## Mobile build scroll restoration — 27 October 2026

The supplied 384 × 832, 6.72-second reference video shows the four-stage How I Build sequence progressing backward from data to wireframe and idea during native scrolling. The previous mobile breakpoint bypassed ScrollTrigger and applied build-short, leaving only tab selection. That bypass is removed. The same timeline now runs in both directions on mobile, with a 340svh story, native CSS sticky, lighter transforms, and 300ms scrub smoothing. Desktop timing is preserved.

Stage selection stays synchronized on scroll and refresh; tabs still seek to their corresponding scroll positions. Mobile cards adapt to available viewport height, with a compact short-screen layout and a side-by-side landscape layout. Working tasks and the local data request remain interactive. OS reduced motion keeps the existing readable static stages. No scroll hijacking or new dependency is introduced.

## Diabetes Tracker graduation project — 27 October 2026

Added تتبع سكري / Diabetes Tracker as the third project, with Arabic/English detail pages and an application-filter entry. The owner confirmed an unpublished Flutter graduation project developed with one teammate. The copy describes diabetes tracking and the prediction input flow without inferring model architecture, validation, accuracy, or a store URL. The project has no external link or disabled/fake Visit action.

All eleven supplied JPEGs are retained byte-for-byte under public/projects/diabetes-tracker. The dashboard is the cover; the gallery includes welcome, login, journey selection, health profile, prediction, glucose, insulin, walking, water, and launch screens. Each has localized alt text and a caption. A proportional CSS viewport hides only the 40px system status bar and 52px Android navigation bar, keeping the complete app interface visible without redrawing or stretching its pixels. See its SOURCES.md.

The existing looping arrows, RTL/LTR keys, swipes, enlargement, Escape, and focus restoration work across the expanded gallery. Screenshot arrays and optional publication links are now supported by the shared showcase; Azad and Sigil Film retain their original images and destinations.

## Nawel Flutter bootcamp project — 27 October 2026

Added ناول / Nawel as the fourth project, with bilingual detail pages at /ar/work/nawel/ and /en/work/nawel/. The project is a charitable app for donating medicine and medical equipment to people in need. The owner confirmed it was built during a two-and-a-half-month Flutter bootcamp supervised by Engineer Mukhtar Ghaleb (المهندس مختار غالب). It is explicitly unpublished and has no external publishing action. No team size, adoption metrics, or deployment was inferred.

All eleven supplied images are retained byte-for-byte in public/projects/nawel, with SHA-256 provenance in SOURCES.md. The complete brand cover leads the gallery, followed by donation, catalog, basket, medicines, navigation and profile screens. Each has localized alt text and a caption. Proportional CSS framing hides only Android system bars on screenshots; the cover is not cropped. The existing gallery now derives its aspect ratio from each image, preserving the established Diabetes Tracker presentation while supporting the different Nawel capture dimensions. All galleries retain their existing inside-image controls, RTL/LTR keyboard navigation, native swipes and accessible enlargement.
