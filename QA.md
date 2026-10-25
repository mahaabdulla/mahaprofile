# Verification and handover

23 October 2026. Windows, Node.js 22.13.1, Next.js 15.5.22.

## Automated checks

- TypeScript: passed (`tsc --noEmit`).
- ESLint: passed without warnings on the final application source.
- Final production build: passed, including compilation, lint, type validation, and static export. First-load JavaScript is approximately 169 kB according to the build report.
- `npm ci --dry-run --offline --ignore-scripts`: passed, validating that package.json and the complete lockfile agree. This is a dry run, not a second fresh installation.
- `npm run check:export`: verifies 15 portfolio pages and 492 internal links/asset references, one main heading per page, localized document attributes, titles, descriptions, anchors, ARIA control targets, local fonts, and the 404 export. It also checks the compiled hidden-state override, reduced-motion CSS, and 1200 × 630 Open Graph image.

## Browser inspection

Inspected rendered English and Arabic pages at desktop, tablet, and mobile sizes. Captured desktop at 1440 × 1000 and Arabic mobile at 320 × 812; earlier checks also covered 1280, 768, and 390px widths. No document overflow was found in the checked layouts.

- Arabic headings render as intact shaped text, with correct RTL layout and document `lang` / `dir`.
- Language switching retains the current page (tested on Work).
- Work now contains Azad and Sigil Film. Application and website filters each show one matching project. Both bilingual detail pages are included in the export.
- Dedicated case-study navigation works with keyboard activation; native pointer navigation was also verified across About, Creative Lab, and Contact.
- Capability disclosures switch their expanded state and content correctly.
- Process keyboard selection passes End, Home, and Right Arrow checks. The selected stage retains priority over automatic scroll updates after direct interaction.
- The mobile menu initially stays hidden, focuses its first link on opening, makes the main content inert, closes with Escape, and restores focus to the menu button. Only the active process panel is displayed.
- Browser console captures from inspected pages contained no application errors or warnings.

The browser session became intermittently slow during local compilation and was recovered before recording the final preview screenshots. A clean build was used after detecting an obsolete cached stylesheet. The final stylesheet is checked directly by the export audit.

## Accessibility and motion limits

Structural checks, visible focus states, native keyboard interactions, proper labels, semantic headings, and hidden-state behavior were inspected. This is not a complete screen-reader or WCAG audit. The connected browser does not expose reduced-motion emulation; reduced-motion handling was verified in the application code and compiled stylesheet, rather than through a simulated OS preference. No Lighthouse or real-user Core Web Vitals score is claimed.

## Contact and heading update

Email, GitHub, LinkedIn, and Instagram were supplied by the owner and are configured with icons. Resume and forthcoming-contact placeholders were removed. Exact link destinations were checked; no messages were sent and external account ownership was not tested. Display headings no longer end in full stops. The new hero copy fits the checked 390px English and Arabic layouts without horizontal overflow; Arabic contact rows also fit at 390px and 1280px. Browser console inspection returned no errors or warnings.

## Content that needs owner input

- Repository links and any additional project screenshots the owner wants to show.
- Specific responsibilities, requirements, engineering decisions, challenges, and outcomes for any future extended case studies.
- Original Creative Lab stories and publication details.
- The exact intended Palestine font files and their web embedding license. IBM Plex Sans Arabic is the documented licensed replacement.
- A verified production origin for `NEXT_PUBLIC_SITE_URL`; current Open Graph URLs use the local preview origin.

Azad images are published promotional images from its Google Play listing. Sigil Film uses a captured screenshot of its live homepage. Sources are recorded in public/projects/SOURCES.md. The owner confirmed software development within a team for both; no framework, sole authorship, performance metrics, or implementation outcomes are claimed.

## Publication

Private publication was attempted through Sites. The connector reported: “Sites is not yet enabled for this workspace.” No remote site was created, and no public deployment is claimed. `out/` is the portable production export. The included Node server runs it locally at http://127.0.0.1:4173.

## Published projects follow-up — 25 October 2026

Replaced all three sample projects with Azad and Sigil Film, including home cards, Work filters, related cards, localized metadata, and two bilingual project detail routes. Clean production build passed compilation, lint, types, and export. The export audit passes 15 portfolio routes and 492 internal links/assets, checks the two cards and exact Azad package ID, rejects old project content, and confirms the published-project stylesheet is compiled.

Browser inspection confirmed three loaded project images, exact live destinations, two desktop cards, one matching result per tested filter, and no horizontal overflow at desktop 1280px or English mobile 390px. Arabic project detail navigation showed overview and confirmed contribution. Console captures had no errors or warnings.
