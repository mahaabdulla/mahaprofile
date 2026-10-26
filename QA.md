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

## Beyond the Line — final validation, 25 October 2026

- Both locales now use خارج السطر. / Beyond the Line. in the section and page metadata; navigation labels and old /lab/ routes remain functional. Software projects and the other sections remain in place.
- TypeScript, ESLint, and the final production build pass. The static audit passes 15 bilingual pages and 518 internal links/assets. Initial route JavaScript is approximately 175 kB.
- Actual browser scrolling changes the title word transform from identity to the intended break and morphs the SVG line from its straight path to its final curved composition. No pin spacers or scroll interception are introduced.
- Arabic RTL and English LTR were inspected. English heading text bounds fit at 320px and 390px; Arabic mobile was checked at 390px. Tablet at 768px and desktop at 1440px have no horizontal overflow. Original Arabic artwork is retained inside the English interface.
- The two owner-supplied Ghanima images match their source attachments byte for byte in public/ and out/. Uroob uses two original files from the named series archive; public/content/SOURCES.md records asset hashes and provenance. No publication dates, metrics, or individual post URLs are inferred.
- Both Ghanima covers were navigated in the browser. Enlargement, keyboard arrows, Escape, modal focus, and focus restoration were checked. The mobile dialog fits within the 390 x 844 viewport and displays the full artwork.
- The site reduced-motion control restores untransformed, visible headings and previews and removes the cursor. OS reduced-motion is also handled in the GSAP matchMedia query and CSS; browser OS preference emulation was unavailable. Content is readable in the server HTML and no animation-dependent hidden state is used.
- Route navigation to Work removes the section and its dialogs; re-entry through the mobile navigation produces one section, two previews, and two dialogs. No console warnings or errors were recorded.
- Review screenshots: maha-beyond-line-ghanima.jpg, maha-beyond-line-ghanima-second.jpg, and maha-beyond-line-mobile.jpg.

This is a local source/export update. No public deployment was performed. Existing font license status is unchanged; see LICENSES.md.

## Signature motion and visual refinement — final validation, 25 October 2026

- TypeScript and ESLint passed explicitly; the final production build also passed compilation, lint, types, prerendering, and static export. Route JavaScript is approximately 178 kB. The export audit passes 15 bilingual pages and 533 internal links/assets. Eight introductory-session regression tests pass.
- The former Orbit component, its Hero/About instances, and the oversized Contact star are absent. Intro geometry uses three separate drafting strokes rather than intersecting orbital ellipses. Existing content covers and project screenshots remain unchanged.
- The Arabic Hero was observed in all three automatic states. Its headline height remained 451.85px, and Selected Work remained at document position 945.29px across states. Pause held the same phrase for more than a cycle; resume works. Arabic words remain intact and the accessible heading stays stable. The loop pauses when the Hero or browser document is not visible.
- English Hero text bounds fit at 320px and 390px, including the longest phrase. Desktop checks at 1440px pass in both locales. Arabic body uses IBM Plex Sans Arabic, major headings retain Palestine, and English headings retain Inter. No horizontal overflow was found in the inspected Hero, About, Work, or Contact layouts.
- Blueprint selection was checked using keyboard activation on desktop and clicking on mobile. The diagram and relevant example update together. Mobile buttons measure approximately 94 x 87px. About biography lines are constrained to 490px on desktop; the blueprint was compacted from approximately 703px to 587px high.
- Both Selected Work surrounds compute to #DCD8F0 on #EAE8E4. The actual Azad and Sigil Film images, links, and contribution statements are preserved. Both desktop and mobile layouts were inspected.
- Actual Contact scroll changes its normalized path offset from 0.941177 to 0.368024 while the point moves along the SVG path. The standalone CTA aligns with the path endpoint and links directly to the supplied email address; all four contact channels remain available. The button remains immediately usable.
- Reduced motion was checked through the site control: the Hero returns to its first readable phrase, the Contact path is fully drawn, and the point returns to the endpoint (245,240). The OS preference is also guarded in each component and CSS; browser OS emulation was unavailable.
- Navigation among Home, About, Work, and Contact, language switching, and returning to the Hero were checked without console warnings or errors. GSAP contexts, delayed calls, visibility/intersection listeners, and pointer tweens have cleanup paths. Temporary viewport overrides were reset.
- Review images: maha-refined-hero-desktop.jpg, maha-refined-about-desktop.jpg, maha-refined-work-desktop.jpg, maha-refined-contact-desktop.jpg, and matching -mobile.jpg views.

This is a local source/export update. No public deployment or new font licensing claim is made.

## Selected Work neutral palette — 25 October 2026

Replaced the lilac project surrounds with neutral #E9E7E2 on the established #F1F0EB off-white section background. Text and frame borders are neutral; lilac remains on small hover/focus interactions. Original project imagery, content, layout, and other sections are preserved.

Production build passed compilation, lint, type validation, and static export. The export audit passes 15 bilingual pages and 533 internal links/assets. Browser checks confirmed both surrounds compute to rgb(233,231,226) on rgb(241,240,235), with no horizontal overflow at 1440px Arabic desktop and 390px English mobile. Mobile uses one column. No console warnings/errors were recorded; temporary viewport settings were reset. Review images: maha-work-neutral-desktop.jpg and maha-work-neutral-mobile.jpg.

## Selected Work charcoal theme — 26 October 2026

The entire formerly white Selected Work section now uses #17171C with raised #202027 image surrounds. Headings use the established off-white; body copy uses #B8B5C4. Metadata, borders, image controls, project links, focus outlines, and active filters were adapted for the dark background. Original project images, copy, routes, and layout are unchanged. Main text contrast against the section background ranges from 7.51:1 to 15.65:1.

Final production build passed compilation, lint, types, and export. The export audit passes 15 bilingual pages and 533 internal links/assets. Browser verification at 1440 x 1000 Arabic desktop and 375 x 524 English mobile confirmed the expected background/surface colors, readable description text, and no horizontal overflow. The mobile Applications filter selected one project and kept its lilac active state readable. No console warnings/errors were recorded on the working preview. Temporary viewport settings were reset.

The stopped local static preview server was restarted at http://127.0.0.1:4173. Review screenshots: maha-work-charcoal-desktop.jpg and maha-work-charcoal-mobile.jpg. No public deployment was performed.

## UX polish and signature Hero — 26 October 2026

This entry supersedes earlier descriptions of the full-screen intro, visible motion toggles, duplicate gallery rows, and duplicate standalone email CTA.

- Explicit TypeScript and ESLint checks pass. Production compilation, lint/type validation, prerendering, and static export pass. Nine session/failure-path and gallery-direction tests pass. The export audit passes 15 bilingual pages and 534 internal links/assets. Route first-load JavaScript remains approximately 179 kB; no dependencies were added.
- Navbar and footer use the original owner-confirmed Downloads/مهو(1).png. Its 500 x 500 dimensions, alpha channel, and SHA-256 are verified; original bytes are exported unchanged. Transparent padding is accommodated with proportional CSS placement. No artwork was recreated, distorted, or cropped.
- The Hero has one 2.45-second local transformation: spark, drafting geometry, wireframe, application interface, fragments, typography. The production browser visibly showed the interface and typography reveal on fresh entries. Returning through language navigation and reloading in the same session skip the sequence. Navigation and the underlying document remain available throughout. No overlay, fake progress, or asset-loading wait remains.
- The first-paint CSS sequence and independent 2.8-second bootstrap deadline are tested without application hydration. Wheel/pointer/keyboard cancellation, denied storage, reduced-motion session handling, direct hash-link skipping, and clean-home detection pass. OS reduced-motion guards and static CSS were inspected; this browser exposes no OS motion-emulation capability, so an emulated OS screenshot is not claimed.
- Desktop Arabic and English, Arabic/English mobile at 390px, and English at 320px were inspected. No horizontal overflow was found. All three English phrase text widths fit at 320px (approximately 246.35, 241.86, and 151.48px in a 257.93px phrase container). Whole Arabic phrases retain shaping and the established Palestine display face. The heading uses a fixed phrase grid, without changing section geometry.
- Previous/next controls are inside the images. Desktop focus reveals both 44px controls; mobile controls are always visible. Native RTL drag changed Azad from azad-screen.png to azad-learning.png without opening the modal. RTL ArrowLeft and LTR ArrowRight both advance correctly. Galleries intentionally wrap; Sigil Film has no arrows because it has one image. There is no navigation row below the images.
- Azad enlargement focuses Close; native ArrowRight switches the image, Escape closes, and focus returns to the original Preview button. The Ghanima gallery and dialog were also operated through the keyboard, including switching from the curiosity cover to the supplied dark engineer cover and closing with Escape. Original content artwork and project screenshots are unchanged.
- Mobile menu opens with a trapped focus and navigates correctly. Contact retains all four approved channels and the copy-email button; the standalone duplicate email CTA is removed. Mobile process stages use a relative, approximately 722–737px compact section rather than a long pinned journey. Current charcoal Selected Work surfaces remain #17171C / #202027.
- Fresh production preview tabs recorded no warnings/errors during the inspected language, Work, Lab, and Contact route cycle. An inherited preview tab recorded three GSAP scope warnings around its first stale-page navigation; subsequent fresh tabs and route cycles did not reproduce them.
- Review files: maha-ux-hero-desktop.png, maha-ux-hero-ar-mobile.png, maha-ux-hero-en-mobile.png, maha-ux-gallery-mobile.png, maha-ux-contact-mobile.png, and maha-ux-sequence-0.png through -3.png. Temporary viewport overrides are reset after QA. Source and static archives are refreshed. This is a local update; no public deployment is claimed.

## Final Hero and Contact refinement — 26 October 2026

- Explicit TypeScript and ESLint checks pass without warnings. The final production build passes compilation, lint/types, prerendering, and static export; first-load route JavaScript remains approximately 179 kB. The export audit passes 15 bilingual pages and 534 internal links/assets, now checking the exact three Contact lines and English Ideas turn headline. The nine existing session and gallery tests pass.
- The approved opening GSAP effect, Hero SVG geometry, session module, and first-paint CSS were fingerprinted before editing and compared after implementation: all four are identical. No question-mark sequence or new control was introduced.
- After the opening, the complete phrases remain stationary while complementary diagonal clip paths replace one with the next in 580ms. A single fine edge follows the same sweep; it is hidden between transitions. The phrases remain readable for 3.5 seconds. RTL and LTR sweeps were observed through intermediate DOM clip-path values with two fully opaque, stationary phrases (identity transform matrices), while the first line retained transform:none. Arabic stays in whole connected phrases with the existing Palestine display face.
- Arabic desktop Hero height remained 401.46875px and Selected Work stayed at top 869.291687px during the observed sweep. Arabic and English Hero/Contact were checked at 1440px desktop, 390px mobile, and 320px mobile. No horizontal overflow or text clipping was found. At 320px, the longest English Hero phrase measures 246.35px in 257.93px; the longest English Contact line measures 194.55px in 268.67px. The longest Arabic Contact line measures 190.28px in 268.67px.
- Contact renders exactly three supplied Arabic lines and their English equivalent, with stable accessible heading labels. Whole-line reveals use 620ms motion and 85ms stagger, triggered once on scroll entry. The existing curved SVG path follows after 180ms, drawing for 900ms while the point follows its actual length toward the CTA. Intermediate Arabic desktop measurements showed staggered line transforms and path offset 0.942368; the final state has no heading transforms, offset 0, and point (245,240). The lilac background remains rgb(166,160,223). The requested CTA opens the Contact page in shared sections and email on standalone Contact; established contact channels remain available.
- Both components guard OS reduced-motion before creating animations. CSS restores unclipped phrases, static complete Contact lines, and hides the moving edge. The existing opening's reduced-motion/session failure tests remain green. Browser OS emulation is unavailable; no emulated-motion screenshot is claimed. GSAP contexts and one-shot ScrollTriggers clean up on navigation.
- No console warnings/errors were recorded in the final production preview route checks. Temporary viewport overrides were reset and the preview was returned to Arabic Home. Review files: maha-final-hero-sweep.png, maha-final-contact-desktop.png, maha-final-contact-ar-mobile.png, maha-final-contact-en-mobile.png, and maha-final-contact-en-desktop.png. Source/static archives were refreshed; no public deployment was performed.


## Hero tempo adjustment — 26 October 2026

Shortened the shared Arabic/English phrase hold from 3.5s to 2.8s and the coordinated mask/edge sweep from 580ms to 440ms. The approved opening animation, connected glyphs, fixed geometry, visibility/pause behavior, and reduced-motion support are unchanged. Production build and export audit checked after this timing-only change.

## Fragmented Reality Hero — 26 October 2026

Supersedes the diagonal sweep and its intermediate tempo adjustment. This change is confined to the Hero headline animation; Contact and the other content sections are unchanged.

- Explicit TypeScript and ESLint checks pass. The final production build passes compilation, lint/type validation, prerendering, and static export. Route first-load JavaScript is approximately 180 kB; no dependency was added. Eleven tests pass, including new coverage/overlap checks for the fragment tessellation and rotation-aware mobile viewport bounds. The export audit checks all 15 pages, 534 internal links/assets, and the 24 full-phrase fragment renderings plus three uncut resting phrases on each home page.
- Fingerprints verify that the approved opening GSAP effect, SVG geometry, session module, and first-paint CSS remain unchanged. Fragment motion starts only after the opening reports ready. Phrase content and the static first line remain unchanged in both languages.
- Eight complementary masks per phrase cut the fully shaped text surface. Each mask contains the entire original string, preserving Arabic contextual shaping and diacritics. The eight cells cover the complete surface without gaps or overlap. Scatter is deterministic and uses only transforms and opacity, with bounded translation, restrained rotation/scale, and a reversed RTL assembly order. The outgoing phrase disintegrates in 440–482ms. Incoming assembly overlaps from 180ms, completes in 804ms including stagger, then hands over to one uncut rendering with a 100ms subtle settle. The readable pause is 1.9s. There are no generic particles or separately drawn shard polygons.
- Actual desktop browser frames at 1280px show scattered parts of both Palestine Arabic letters and Inter English letters. Intermediate DOM transforms confirmed 16 moving pieces during overlap; each piece retained the full original phrase text and a geometric clip path. The resting state has all fragment layers hidden, one visible uncut phrase, and no source transform. The accessible heading label tracks only the completed phrase and does not use aria-live.
- Desktop Arabic heading height stayed 356.854187px and Selected Work stayed at 827.302124px in both the observed moving and resting states. The static first line retained transform:none. The Arabic resting text still computes to Palestine, Inter, IBM Plex Sans Arabic. Desktop English heading height was 342.3125px. Both locales were observed forming and disintegrating their actual typography, without console warnings/errors.
- Mobile English was checked at 390px during transition, with no horizontal overflow, heading height 127.34375px, and Selected Work top 630.520874px. Both locales were then checked at 320px (305px usable content width). Rotation-aware transformed mask vertices stayed inside the usable width. In 100 narrow Arabic samples, 32 sampled active motion, moving ink bounds were approximately 112.81..274.81px, scroll width stayed 305px, heading height stayed 121.291672px, and Selected Work stayed at 592.833374px. No sample left the viewport. English narrow heading height stayed 104.489586px with Selected Work at 617.78125px.
- Escape was operated in the real browser: motion stopped, every fragment layer became hidden, and a coherent, fully opaque uncut phrase remained, with transform:none and a matching accessible heading label. OS reduced-motion is guarded before setup and has immediate static CSS fallbacks; OS browser emulation is unavailable, so no emulated OS-motion screenshot is claimed. Disabled JavaScript defaults to the uncut first phrase. Setup failure and an independent 1.6s watchdog restore static typography. GSAP contexts, pending calls, observers, resize listeners, and the watchdog clean up on route/visibility/preference changes; font readiness callbacks use an alive guard.
- The temporary viewport setting is reset after QA. Review images: maha-fragments-ar-mid.png, maha-fragments-ar-rest.png, maha-fragments-en-mid.png, maha-fragments-en-mobile-mid.png, maha-fragments-ar-mobile-mid.png, and maha-fragments-ar-mobile-rest.png. Source/static archives are refreshed; this is a local update, without a public deployment claim.
