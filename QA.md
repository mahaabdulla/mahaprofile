# Verification and handover

25 October 2026. Windows, Node.js 22.13.1, Next.js 15.5.22.

## Current scope

The established Next.js App Router architecture, bilingual routes, charcoal/ivory/lilac identity, Arabic typography, rounded controls, and real Azad/Sigil Film projects are retained. Software development remains the primary professional practice. Creative programming content is represented by two independent series with localized copy.

## Automated validation

- `tsc --noEmit`: passed on the updated application source.
- ESLint CLI: passed without warnings or errors.
- Final production build: passed compilation, lint, type validation, prerendering, and static export. Initial route JavaScript is approximately 175 kB (previously 169 kB).
- Final static-export audit: passed 15 bilingual portfolio pages and 472 internal links/assets.
- The export audit validates generated routes, lang/dir, one h1, metadata, internal assets, anchors, ARIA targets, approved contact/project URLs, exact Azad package ID, two project cards, both Creative Lab series, a prominent Lab Instagram link, four build stages, compiled motion CSS, demo data contract, self-hosted fonts, and the Open Graph image.

## Interaction implementation

1. Hero: intact Arabic/English typography reveal and scroll-responsive title, signature, star, and orbit.
2. Build journey: native scroll with four sticky scenes and GSAP crossfades. Keyboard-selectable stages. A functioning task interface and an actual HTTP request to the included static JSON resource demonstrate state and data flow.
3. Project showcase: actual supplied project images; gallery navigation, pointer response, and native dialog preview with Escape and focus restoration.
4. Creative Lab: independent Uroob and Al Uloom Al Ghanima worlds, scroll chapters, and reversible explanatory examples. No invented posts, thumbnails, metrics, publication counts, or performance results.

The integration demonstration uses `/demo/workflow.json`, a local static data resource, and is labeled accordingly. It is not an application backend. The portfolio remains a portable static export.

## Accessibility and performance

OS reduced-motion preference and an explicit footer toggle disable the choreography. All four build scenes become readable in document flow; controls remain functional. Native dialogs provide background modality. Scene focus is gated with `inert`, stage controls support arrow keys/Home/End, and dynamic request/task results use status announcements. GSAP contexts, scroll listeners, media listeners, and in-flight fetches are cleaned up.

This is structural and interaction verification, not a complete screen-reader or WCAG audit. No Lighthouse or real-user Core Web Vitals score is claimed.

## Sources and publication

Owner-confirmed project role: software development within a team for Azad and Sigil Film. Project visual sources are documented in `public/projects/SOURCES.md`. Instagram is the owner-supplied https://www.instagram.com/maha_devlop/ and remains in Contact as well as Creative Lab. External links are checked as destinations; no messages are sent.

WHOISJOA was the primary interaction reference. Hidden Heroes was secondary inspiration for editorial chapters; web text was accessible, but its browser page did not load in this environment. No assets or animation code from either reference were copied.

The current production origin is the local preview http://127.0.0.1:4173. No new remote deployment was attempted. The existing Sites integration previously reported that Sites was not enabled. `out/` is the portable production export.

## Remaining owner material

Specific engineering responsibilities, repository links, outcomes, and any future post covers can be added when supplied. The actual local Palestine font file has been found and verified by metadata/glyph coverage, and is used for the requested local heading preview. Its web license remains undocumented. 29LT Riwaya Informal files and web license have not been found. IBM Plex Sans Arabic remains the Arabic body/UI font.

## Browser checks performed on this revision

- Hero scroll changed the second title line from no transform to a translated matrix while retaining intact Arabic words.
- Stage selection reached the working interface; completing a task updated the count and pressed state. Backward scrolling returned from data to the interface stage. Home moved selection and keyboard focus to the first stage.
- Arabic and English data requests returned 200 OK and all three demo tasks from the static JSON resource.
- Reduced-motion control changed all four panels to visible, non-inert document-flow content and removed sticky positioning. OS preference support is implemented through matchMedia and CSS; the OS preference itself was not emulated in the connected browser.
- Azad next-image control changed the source to azad-learning.png. The modal opened with focus on Close; Escape closed it and restored focus to the preview button.
- Scrolling advanced the Creative Lab visual chapter. Ghanima could be switched to its concept explanation independently while Uroob stayed in its story view. Computed emerald and lilac world backgrounds are distinct.
- No horizontal overflow was found on checked desktop 1280px, Arabic mobile 390px, and English 320px layouts. At English 320 × 812, the data scene remained within the viewport.
- Browser console inspection returned no application errors or warnings.

Final follow-up: at 375 × 524, the short-screen mode switched to a non-sticky stage selector and had no horizontal overflow. Reduced motion in that layout exposed four visible 490px panels in a 2052px document-flow stage container. MAHA signature direction is explicitly LTR within Arabic pages. Final console inspection returned no errors or warnings. Screenshots are saved as outputs/maha-creative-worlds.jpg and outputs/maha-build-interaction.jpg.

## Typography and signature intro follow-up

The actual local Palestine Regular v1.003 file was checked by internal names, SHA-256, Arabic sample glyph coverage, and GSUB/GPOS/GDEF presence. It is used for Arabic display headings with synthesis disabled; body/UI remains IBM Plex Sans Arabic. WHOISJOA live heading computed styles reported Inter, so licensed Inter remains the English display/body family. Riwaya was not found in Downloads or the relevant font/content archives and was not substituted or renamed. Palestine web licensing is still unresolved; see LICENSES.md.

Eight intro tests pass for session-once behavior, fresh sessions, reduced-motion skipping, inaccessible storage, pre-paint timeout, and immediate keyboard cancellation. TypeScript passed. Cold-browser testing exposed the need to avoid waiting for hydration. The final intro therefore starts the full sequence in CSS at first paint. An independent root-layout GSAP timeline takes over only if ready within 300ms; otherwise CSS completes the sequence and the standalone guard remembers the session. Both paths have independent escape deadlines.

## Final typography / intro validation

- Final production build passed compilation, ESLint, TypeScript, prerendering, and export. Initial route JavaScript is approximately 176 kB.
- Final export audit passes 15 bilingual pages and 509 internal links/assets, including the exact Palestine SHA-256, session key, first-paint animation CSS, server-hidden intro, and no-JavaScript streamed-content fallback.
- Eight session/failure-path tests pass.
- Desktop browser captured the MAHA wordmark and interface geometry during the introduction; its phase completed with the cover hidden and Hero revealed.
- Mobile first visit was checked at 390 × 844 on the alternate loopback origin, capturing the English intro without horizontal overflow. Subsequent reload reported the intro skipped and the cover hidden. English display/body computed styles were Inter.
- Arabic at 390 × 844 used Palestine for the Hero and IBM Plex Sans Arabic for body text. Heading text bounds fit between 22px and 352.67px. The actual desktop and mobile typography were visually inspected.
- The tested browser used the equivalent first-paint CSS path when hydration was later than 300ms. The GSAP path is built and type-checked; both use the same sequence timings. OS reduced-motion behavior is covered by the session tests and CSS/source checks; OS media emulation was not available in the browser.
- Review images: maha-signature-intro.jpg, maha-signature-intro-mobile.jpg, maha-typography-desktop.jpg, and maha-typography-mobile.jpg.

Public deployment was not performed. Palestine web licensing and actual licensed Riwaya files remain owner follow-ups as documented in LICENSES.md.
