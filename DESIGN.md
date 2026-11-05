---
name: Capitol
description: A paper collage on a printed sky. Cream torn-edged sheet, one ink, one blue, photographic cut-outs.
colors:
  paper: "#fffef2"
  ink: "#151d23"
  ink-soft: "#32424e"
  ink-rule: "rgba(21, 29, 35, 0.5)"
  ink-hairline: "rgba(21, 29, 35, 0.12)"
  sky-top: "#7ec9ff"
  sky-bottom: "#dff2ff"
  blue: "#009dff"
  blue-pressed: "#0089de"
  blue-cross: "#2f77ad"
  logo-brown: "#352a28"
  plate-grey: "#cfcfc9"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Canterbury, 'Old English Text MT', UnifrakturMaguntia, serif"
    fontSize: "calc(237.8 * var(--u))"
    fontWeight: 400
    lineHeight: 0.905
    letterSpacing: "normal"
  headline:
    fontFamily: "'PT Serif', Georgia, serif"
    fontSize: "38px"
    fontWeight: 700
    lineHeight: 1.406
    letterSpacing: "normal"
  page-title:
    fontFamily: "'PT Serif', Georgia, serif"
    fontSize: "44px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "normal"
  title:
    fontFamily: "'PT Serif', Georgia, serif"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: 1.406
    letterSpacing: "normal"
  card-title:
    fontFamily: "'PT Serif', Georgia, serif"
    fontSize: "24.8px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "normal"
  lead:
    fontFamily: "'PT Sans', 'Segoe UI', system-ui, sans-serif"
    fontSize: "24px"
    fontWeight: 400
    lineHeight: 1.406
    letterSpacing: "normal"
  body:
    fontFamily: "'PT Sans', 'Segoe UI', system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  body-small:
    fontFamily: "'PT Sans', 'Segoe UI', system-ui, sans-serif"
    fontSize: "15.5px"
    fontWeight: 400
    lineHeight: 1.406
    letterSpacing: "normal"
  control:
    fontFamily: "'PT Sans', 'Segoe UI', system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 700
    lineHeight: 1.406
    letterSpacing: "normal"
rounded:
  none: "0px"
  focus: "2px"
  pill: "999px"
spacing:
  box-gap: "15px"
  heading-gap: "28px"
  strip-gap: "34.88px"
  section-page: "56px"
  section-home: "68px"
  sheet-bottom-page: "96px"
  sheet-bottom-home: "114px"
  column-narrow: "758px"
  column-wide: "1100px"
  column-nav: "1200px"
components:
  button-primary:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.white}"
    typography: "{typography.control}"
    rounded: "{rounded.pill}"
    padding: "10px 22px"
  button-primary-hover:
    backgroundColor: "{colors.blue-pressed}"
    textColor: "{colors.white}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.control}"
    rounded: "{rounded.pill}"
    padding: "10px 22px"
  button-ghost-hover:
    backgroundColor: "rgba(21, 29, 35, 0.06)"
    textColor: "{colors.ink}"
  apply-button:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "0 44px"
    height: "48px"
  rule-box:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "22px 26px"
  faq-card:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body-small}"
    rounded: "{rounded.none}"
    padding: "21px 25px"
  project-card:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body-small}"
    rounded: "{rounded.none}"
    width: "241.84px"
  project-card-plate:
    backgroundColor: "{colors.plate-grey}"
    rounded: "{rounded.none}"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "4px 0"
  nav-cta:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "8px 18px"
  footer:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    padding: "calc(212.16 * var(--w) + 72px) 24px 56px"
---

# Design System: Capitol

## Overview

**Creative North Star: "The Paper Collage"**

Everything on the site is a physical thing stuck to another physical thing. A printed sky sits at the top; a single cream sheet with torn edges is laid over it and carries every page's content; the U.S. Capitol and cherry-blossom branches are photographic cut-outs pasted onto smaller torn scraps; the dark ground under the sheet is where the footer lives. Depth comes from the paper itself: drop shadows under torn edges, a photographed grain multiplied over both the sky and the sheet, inset shadows where a control is pressed into the surface. Nothing is a floating white card.

The world was recreated from a Figma comp (1728px wide). The homepage hero is placed in that frame's own pixels through one design unit, `--u`, and the paper sheet's torn edges are the comp's exported paths with their shadows intact. The result is dense at the top (a full-height collage) and open on the sheet (a 758px reading column, generous section gaps, a single ink for all text).

The incumbent Hack Club red/navy palette, Phantom Sans, star motifs, wave banners, and the starfield were discarded entirely in the redesign; they are not fallbacks.

**Key Characteristics:**
- One cream sheet, torn top and bottom, carries all content on every page.
- One ink for all text, with a soft ink for secondary lines; one control blue, used almost exclusively for the primary action and link underlines.
- A blackletter wordmark ("Capitol") and nothing else in that face; PT Serif Bold for every heading; PT Sans for all running text.
- Photographic cut-outs and one-ink logo plates; no illustration, no stock hero, no coloured fields.
- Square, 4px half-ink rule boxes for grouped copy; pills only for controls.
- Paper grain multiplied over every surface so gradients and flats read as printed.

## Colors

A three-material palette: cream paper, near-black ink, printed sky, plus one bright control blue that is spent sparingly.

### Primary
- **Control Blue** (`{colors.blue}`): the Apply button, the interior nav CTA, primary buttons, the text-selection highlight, the focus ring, and every link underline. It is the only saturated colour on the sheet. Its pressed/hover value is `{colors.blue-pressed}`.

### Secondary
- **Cross Blue** (`{colors.blue-cross}`): the small x glyph between the partner logos (Hack Club x CAC x Middlebury). Nothing else; it is the comp's colour for that one mark.

### Tertiary
- **Logo Brown** (`{colors.logo-brown}`): the single ink every "recognized by" mark is recoloured to, then printed at 80% opacity so five different brand colours read as one row of print. It lives in the PNGs, not in CSS.

### Neutral
- **Paper** (`{colors.paper}`): the sheet, the solid nav, and footer text on the dark ground. Body background.
- **Ink** (`{colors.ink}`): all text, the page's `<html>` background (so overscroll past the footer stays dark), and the footer ground.
- **Soft Ink** (`{colors.ink-soft}`): the "Hack Club presents" line, guide-nav links at rest, blockquotes, card meta ("2 min"), list markers.
- **Ink Rule** (`{colors.ink-rule}`): the 4px border of every rule box and FAQ card, the ghost button's border, the strip scrollbar thumb, blockquote rules.
- **Ink Hairline** (`{colors.ink-hairline}`): the 1px line under a solid nav and between mobile menu items.
- **Sky** (`{colors.sky-top}` to `{colors.sky-bottom}`): a vertical gradient, top to bottom, always with the sky grain multiplied over it at 55%.
- **Plate Grey** (`{colors.plate-grey}`): the ground behind a project screenshot while it loads or where it doesn't fill.

### Named Rules
**The One Blue Rule.** Control Blue is for the thing a visitor does next and for underlines. It is never a background for a section, a card, a badge, or a heading.

**The Printed Surface Rule.** Every large colour field (sky, sheet) carries the photographed grain at multiply. A flat gradient or flat cream with no grain is a rendering, not paper, and does not belong.

## Typography

**Display Font:** Canterbury (with Old English Text MT, UnifrakturMaguntia, serif)
**Heading Font:** PT Serif Bold (with Georgia, serif)
**Body Font:** PT Sans (with Segoe UI, system-ui, sans-serif)

All three are self-hosted from `public/fonts`; no font request leaves the origin.

**Character:** A blackletter wordmark set once, like a masthead, over a plain transitional serif and a humanist sans. It reads as a printed programme rather than a landing page. The serif is always bold; the sans is always regular except inside controls.

### Hierarchy
- **Display** (400, `calc(237.8 * var(--u))`; `clamp(64px, 21vw, 118px)` under 900px, line-height 0.905): the word "Capitol" in the hero and, at 56px / line-height 1, in the footer. Nothing else is ever set in Canterbury. The 0.905 line-height is Canterbury's own hhea metric and must be set explicitly so Windows browsers don't drop the word 60px lower.
- **Page Title** (700, 44px; 32px under 720px, line-height 1.2): the `<h1>` on interior pages.
- **Headline** (700, 38px; 28px under 720px, line-height 1.406): every section heading on the sheet. Interior page sections use it at 30px.
- **Card Title** (700, 24.8px, line-height 1): the project name under a screenshot plate, single line, ellipsised.
- **Title** (700, 20px, line-height 1.406): a rule box's or FAQ card's question line. Footer column headings at 18px.
- **Lead** (400, 24px; 19px under 720px, line-height 1.406): the homepage's opening paragraphs and every interior page intro. Paragraphs are separated by one line-height (1.406em).
- **Body** (400, 18px; 17px under 720px, line-height 1.5): running text on interior pages. Rule box bodies at 16px.
- **Body Small** (400, 15.5px, line-height 1.406): project-card text and FAQ answers.
- **Control** (700, 16px): buttons, the nav CTA; the hero Apply button at 18 design px.

### Named Rules
**The Masthead Rule.** Canterbury is for the word "Capitol" and nothing else. No headings, no labels, no numerals.

**The 1.406 Rule.** Serif headings, lead text, small body, and the hero subtitle all share a 1.406 line-height, the comp's measured value. Only `.t-body` (1.5) and the single-line card title (1) depart from it.

## Layout

Two shells. The homepage is a full-frame collage hero followed by the paper sheet; every interior page is a 190px strip of grained sky under a sticky nav, then the sheet, then the footer.

**Design unit.** The hero was drawn at 1728 x 1117 and everything in it is placed in those pixels: `--u: min(1px, calc(100vw / 1728))` so the composition is exact at 1728 and scales down proportionally below it, never up. Pieces are positioned from the frame's centre line (`left: calc(50% + (x - 864) * var(--u))`) so the composition stays centred on wider screens. A second unit, `--w: calc(100vw / 1728)`, is uncapped and drives the torn edges, which must always span the full width (top edge `190.6 * --w` tall, bottom edge `212.16 * --w`).

**Below 900px** the hero abandons the proportional scale (the subtitle would fall under 10px) and stacks: logo row, title block at readable fixed sizes, the pill, with the cloud, scrap, Capitol and one blossom re-anchored to the corners at viewport-relative sizes and the other blossoms hidden. The hero becomes `min-height: 100svh` with `72vw` of bottom padding for the collage.

**Reading column.** The sheet's body is `min(758px, 100% - 40px)` on the homepage and on narrow interior pages (certificate, FAQ, resources), and `min(1100px, 100% - 40px)` on wide ones (gallery, guides). The nav's inner width is 1200px. The paper sheet's flat top begins `120 * --w` below the hero (`60 * --w` on interior pages) and the torn edge fills that gap, overlapping the sky.

**Rhythm.** Homepage sections are 68px apart; interior page sections 56px. A heading is followed by its content at 10px (text) or 28px (a logo row, strip, or grid). Rule boxes stack at 15px. The project strip breaks out to full viewport width (`100vw`, centred) with 34.88px gaps and 34.88px end padding, scrolls horizontally with proximity snap, and starts 92px scrolled in so the first card is cut off at the left edge as in the comp. The FAQ grid is two columns at `min(909px, 100%)`, centred and wider than the reading column, collapsing to one column under 720px. The gallery is `repeat(auto-fill, minmax(241px, 1fr))` with 34px / 34.88px gaps. Guide pages are a 220px nav column and a fluid prose column, 48px apart, collapsing to a wrapped inline nav under 900px.

**Breakpoints observed:** 720px (type sizes, FAQ and footer columns, logo row), 899px (hero stacking, nav collapse, guide layout).

## Elevation & Depth

This is a layered paper system, not a shadow system. Depth is physical: the sheet sits above the sky and the footer (`z-index: 1`) so both torn edges hang over their neighbours; the torn edges carry the comp's own drop shadows inside the SVG; grain is multiplied over every surface and masked onto the torn edges so the sheet reads as one piece. Interactive elements are pressed into the paper (inset shadows) rather than lifted off it. Nothing on the sheet casts an outward shadow except the two blue controls' faint glow.

### Shadow Vocabulary
- **Torn edge** (SVG filter, two layers: `dy 4 / blur σ 15.55 / alpha 0.10` and `dy 4 / blur σ 5.15 / alpha 0.25`): baked into `edge-top.svg`, `edge-bottom.svg`, `torn-left.svg`, `torn-right.svg`. Never reproduced in CSS; use the assets.
- **Pressed plate** (`box-shadow: inset 0 2px 4px rgba(0,0,0,.25), inset 0 2px 14.6px rgba(0,0,0,.25)`): the recess around a project screenshot, painted by an overlay so the image itself stays flat.
- **Blue glow** (`box-shadow: 0 0 6.3px rgba(129,207,255,.25)`): under the Apply button and primary buttons only.
- **Nav hairline** (`box-shadow: 0 1px 0 rgba(21,29,35,.12)`): the solid nav's bottom line once the page has scrolled 24px.
- **Focus ring** (`0 0 0 3px {colors.blue}` on the pill; `outline: 3px solid {colors.blue}; outline-offset: 3px` everywhere else).

### Named Rules
**The Pressed-Not-Lifted Rule.** Depth on the sheet is inset. Cards, boxes, and images do not float; a screenshot sits in a recess, a field sits in a well. Outward drop shadows belong only to torn paper (in the assets) and the two blue controls' glow.

## Shapes

Square by default. Rule boxes, FAQ cards, screenshot plates, the sheet, and the footer have no radius. The only curve is the pill (999px) on controls: the hero Apply button, the nav CTA, primary and ghost buttons, the strip scrollbar thumb. The focus outline carries a 2px radius so it doesn't look drawn with a ruler.

Borders are thick and half-transparent: a 4px `{colors.ink-rule}` stroke around any grouped copy, a 2px `{colors.ink-rule}` stroke on the ghost button, a 2px ink underline under the active nav item. Edges of paper are torn, never straight: the sheet's top and bottom and the two hero scraps use the comp's exported paths, scaled with `--w` and `--u`.

Imagery is cut out, not framed: the Capitol (flipped horizontally so the dome faces the title) and the blossom branches are transparent PNGs rotated into place. Project screenshots are printed in one ink (`grayscale(1) contrast(1.05)`, multiplied) and return to colour on hover or focus.

## Components

### Buttons
Tactile pills pressed onto the paper; the blue one is the only saturated element in view.
- **Shape:** pill (999px), 2px transparent border reserved so ghost and primary align.
- **Primary:** Control Blue on white, PT Sans 700 16px, `10px 22px`, blue glow. Hover darkens to Pressed Blue; active scales to 0.97 over 0.15s on `cubic-bezier(0.22, 1, 0.36, 1)`.
- **Ghost:** transparent with a 2px Ink Rule border, ink text; hover fills `rgba(21,29,35,.06)`.
- **Disabled:** 40% opacity, `not-allowed` cursor.
- **Row:** `.btn-row`, wrapping flex, 12px gap, 20px above.
- **Icon:** the arrow glyph from `/collage/arrow-right.svg` at 11.5–12px, white, sits after the label at 8px gap.

### Apply Button (signature)
The hero's one action (`.hero__apply`), standing where the comp draws its email sign-up pill: a 48-tall Control Blue pill, 44px side padding, PT Sans 700 at 18 design px, white, with the arrow glyph after the label at a 12px gap. Carries the blue glow plus a soft 2px-offset ink shadow. Hover darkens to `{colors.blue-pressed}` and lifts 1px; active scales to 0.97. Everything is in `--u` units on the homepage and fixed px (48 tall, 17px type) under 900px. It is an anchor to the application form, not a form control.

### Rule Box / FAQ Card
The system's only container: copy grouped inside a 4px half-ink stroke on bare paper.
- **Corner Style:** square.
- **Background:** none; the paper and its grain show through.
- **Border:** 4px `{colors.ink-rule}`.
- **Internal Padding:** `22px 26px` (`.box`), `21px 25px` (`.faq-card`).
- **Title:** PT Serif 700 20px. **Body:** PT Sans 16px / 1.5 (`.box__body`, 8px under the title) or 15.5px / 1.406 (`.faq-card__a`, 10px under). Paragraphs and lists separate at 0.7em; markers are Soft Ink.
- **Stacking:** 15px between boxes; the FAQ grid uses the same 15px as its gap.
- **Interactive variant** (resources): a whole box as a link gets `hover:bg-ink/[0.04]` and its arrow nudges 4px right; an expandable box uses a `+` that rotates 45 degrees when open.

### Project Card
A screenshot plate, the name in serif, a line of sans.
- **Width:** 241.84px in the strip; fluid (`minmax(241px, 1fr)`) in the gallery.
- **Plate:** aspect 241.84 / 136.03, Plate Grey ground, image `object-fit: cover`, greyscale + multiply at rest, colour on hover/focus over 0.3s, pressed-plate inset overlay.
- **Title:** Card Title, 6.6px under the plate, one line, ellipsised.
- **Text:** Body Small, 12.4px under the title, links underlined in blue at 1.5px with 2px offset.

### Links
Ink text with a 2px Control Blue underline offset 3px (`.link`, `.markdown-body a`); hover turns the text blue over 0.15s. In cards and footer the underline is thinner (1.5px) or appears only on hover.

### Navigation
- **Homepage:** no nav bar. The partnership row (Hack Club flag x CAC wordmark x Middlebury seal, x glyphs in Cross Blue at 16 design px) sits top-centre at y 79.54 in a 487px-wide row; logos dim to 80% on hover. Under 900px it becomes a 360px relative row at 0.8px per design unit.
- **Interior:** sticky, transparent over the sky, turning Paper with the nav hairline after 24px of scroll or when the menu is open. Inner: 1200px, `14px 24px`, min-height 64px. The same logo row at 28px tall (seal 34px, x glyphs 12px). Links are PT Sans 17px ink with a 2px transparent bottom border that turns ink on hover and for `aria-current="page"`. Any signed-in-only items (My Projects, Admin, Log out) share the link style; there is deliberately no login button. A `.site-nav__cta` variant is the nav-pill (blue, `8px 18px`, pill).
- **Mobile (< 900px):** links hide, a lucide Menu/X toggle appears, the seal and its x hide, and an opened menu drops a Paper sheet with 18px links separated by Ink Hairline rules.

### Guide Nav (sidebar)
Serif 700 16px section headings, 16px Soft Ink links with 5px vertical padding; the current link is ink, bold, and underlined in blue at 2px / 4px offset. Sections 22px apart; collapses to a wrapped inline list with headings hidden under 900px.

### Footer
The dark ground below the sheet. Ink background, Paper text; top padding leaves `212.16 * --w + 72px` for the sheet's torn bottom edge to hang into. Three columns (`1.4fr 1fr 1fr`, 40px gap, 1100px max) collapsing to one under 720px: the wordmark in Canterbury 56px with a 34ch blurb at 75% paper, then two link columns (serif 700 18px headings, 16px links at 80% paper that go full paper with a blue underline on hover). A legal line at 14px / 60% paper sits above a 1px 18%-paper rule.

### Paper Sheet (signature)
`Paper` wraps every page's content: a `section.paper` (Paper background, `z-index: 1`) with an `<img>` of `edge-top.svg` hung at `bottom: 100%` and `edge-bottom.svg` at `top: 100%`, each followed by a grain layer masked to the same SVG; a full-bleed `.paper__grain` (`paper-grain.jpg`, 512 x 341 tile, multiply, 90%); and `.paper__body` holding the reading column. `top`/`bottom` props drop an edge when the sheet abuts something.

### Sky
`.sky` is the top-to-bottom gradient with `.sky__grain` (`sky-grain.jpg`, cover, multiply, 55%) inside it. On the homepage it is the hero; on interior pages it is a 190px strip under the nav.

### Logo Row (recognized by)
A wrapping, centred flex row (gap `21px 34px`; `16px 24px` under 720px) at 80% opacity. Each mark carries its comp height as `--h` and is rendered at `--h * 1px` (`* 0.72px` under 720px), width auto. Marks are the one-ink brown PNGs in `public/collage`.

## Do's and Don'ts

### Do:
- **Do** put all page content on the `Paper` sheet and let both torn edges show; the sheet is the page.
- **Do** place anything inside the homepage hero in design pixels via `--u`, measured from the 1728-wide frame, and give it a fixed or viewport-relative anchor under 900px.
- **Do** multiply the grain (`sky-grain.jpg` at 55%, `paper-grain.jpg` at 90%) over any new sky or paper surface.
- **Do** group copy in a square 4px `{colors.ink-rule}` box on bare paper; stack boxes at 15px.
- **Do** set every heading in PT Serif 700 and every paragraph in PT Sans, at line-height 1.406 unless it is `.t-body` (1.5).
- **Do** spend Control Blue only on the next action and on underlines, and darken it to `{colors.blue-pressed}` on hover.
- **Do** print screenshots and partner marks in one ink (greyscale-multiplied plates; `{colors.logo-brown}` recoloured PNGs) and let hover restore colour.
- **Do** use the pressed inset shadows for wells and plates and the exported torn-edge SVGs for any new scrap of paper.
- **Do** keep the partnership row (Hack Club x CAC x Middlebury) on every page: in the hero on the homepage, in the nav elsewhere.

### Don't:
- **Don't** set anything but the word "Capitol" in Canterbury.
- **Don't** add rounded cards, white cards, coloured section backgrounds, or outward drop shadows on the sheet; the only pills are controls and the only outward shadows are torn paper and the blue glow.
- **Don't** reproduce the torn-edge shadow in CSS; use `edge-top.svg`, `edge-bottom.svg`, `torn-left.svg`, `torn-right.svg`.
- **Don't** bring back the Hack Club red/navy palette, Phantom Sans, star motifs, wave banners, or the starfield as defaults; they were retired with the comp.
- **Don't** use illustration or stock photography in a hero; imagery is photographic cut-outs on torn scraps.
- **Don't** put a login button in the header; signed-in items appear only once a student is signed in.
- **Don't** let the hero scale above 1px per design unit; `--u` is capped so the composition never grows past the comp.
