# Fonts and graphics

Verified on 25 October 2026.

## Verified open fonts

Inter, IBM Plex Sans Arabic, and JetBrains Mono are self-hosted under the SIL Open Font License 1.1. Their original license texts are included in `public/fonts/`.

- Inter: https://github.com/google/fonts/tree/main/ofl/inter and https://github.com/rsms/inter. WHOISJOA's live h1/h2/h3 computed styles were inspected and reported `Inter, sans-serif` (h1 weight 700, sampled section headings weight 400). MAHA therefore uses the actual licensed Inter family for English display and body text; Space Grotesk is unnecessary as a fallback choice.
- IBM Plex Sans Arabic: https://github.com/google/fonts/tree/main/ofl/ibmplexsansarabic. Used for Arabic body text and UI.
- JetBrains Mono: https://github.com/google/fonts/tree/main/ofl/jetbrainsmono. Used for technical annotations.

## Palestine Regular: actual local file, web license unresolved

At the owner's request, the existing local file `C:\Users\G.B\Downloads\alfont_com_Palestine-Regular.ttf` is used in the local preview as `public/fonts/palestine-regular.ttf`.

- Internal family: Palestine; full name: Palestine Regular; PostScript name: Palestine-Regular; version: 1.003.
- Original bytes are unchanged: 26,688 bytes.
- SHA-256: d87183a7f37b7873934b0800a6da1ccd0305738f5df7b46967f20de297db0db1.
- The file contains GSUB, GPOS, and GDEF shaping tables. The Arabic title sample, including vocalization marks in the series names, is covered by its cmap.
- Only its actual Regular weight is declared. Arabic display selectors disable synthetic styles and retain contextual shaping; Arabic body/UI remains IBM Plex Sans Arabic.
- No copyright, designer, or license statement is embedded in its name table. No accompanying web license was found. The OS/2 embedding flag is 8; that technical flag is not treated as a web-embedding license.
- The owner has been asked for the license/source. Inclusion for the requested local preview is not a claim that public hosting or redistribution is licensed. Confirm the actual web-embedding rights before any public deployment. No public deployment is performed in this task.

## 29LT Riwaya Informal: not included

No matching licensed font files or owner web license were found. The official foundry distinguishes desktop and web licenses and supplies its webfonts in WOFF/WOFF2 for a licensed domain: https://www.29lt.com/info/ and https://www.29lt.com/product/29lt-riwaya/.

The font is not declared or impersonated through another family name. It can be added for occasional English editorial accents once the actual authorized webfont files and matching license are supplied.

## Graphics

Lucide icons are supplied by lucide-react under the package's ISC license. MAHA's orbital SVG intro, interface demonstration, and Creative Lab geometry are original code-native artwork. Actual Azad and Sigil Film images have their sources recorded in `public/projects/SOURCES.md`. No reference-site assets, fonts, or animation code were copied.
