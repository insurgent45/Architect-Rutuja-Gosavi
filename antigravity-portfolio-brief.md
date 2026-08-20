# Architect Portfolio Website — Build Brief for Antigravity

Use this whole document as your instruction to Antigravity. It's written so you can
paste it in as one prompt, then feed additional project content afterward without
having to redo the brief (see "How to add more content" at the end).

---

## 1. Goal

Build a **single, static, minimalist portfolio website** for an architect/landscape
architect, to send to recruiters. Requirements:

- Deployable as-is on **GitHub Pages** (no build step required, or a simple static
  build that outputs to `/docs` or `gh-pages` branch).
- **Minimalist visual style**: generous whitespace, restrained type palette (1
  serif or display font for headings + 1 clean sans for body), neutral background,
  one accent color max. No busy backgrounds, no clutter.
- **Smooth, "over the top" but tasteful scroll animations**: fade/slide-in on
  scroll, subtle parallax on hero and project images, animated section
  transitions, maybe a subtle cursor or hover-reveal effect on project cards.
  Animations must respect `prefers-reduced-motion` and must be **fully disabled
  in print/PDF output** (see Section 5).
- **Print-to-PDF via Ctrl+P must produce a clean, professional, multi-page PDF
  resume/portfolio** — not a broken screenshot of the animated site. This needs a
  dedicated `@media print` stylesheet (see Section 5) — treat this as a first-class
  requirement, not an afterthought.
- Fully responsive (mobile → desktop).
- Fast, no heavy frameworks required.

---

## 2. Tech stack (keep it simple, zero-friction for GitHub Pages)

Recommended: **plain HTML + CSS + vanilla JS**, no bundler.

- Animation library: **AOS (Animate On Scroll)** via CDN, or a small hand-rolled
  IntersectionObserver script if you want zero dependencies. Optionally GSAP
  (CDN) for the hero parallax only — keep it light.
- Fonts: Google Fonts, e.g. `Fraunces` or `Cormorant` (display serif for name/
  section titles) + `Inter` or `Archivo` (body/UI). Self-host or CDN-link.
- Icons: `lucide` (CDN) or simple inline SVG — no icon-font bloat.
- No React/Vue/build tooling needed. This keeps GitHub Pages deployment to
  "push the repo, enable Pages on `main` /root or `/docs`" — nothing else.
- If Antigravity strongly prefers a framework, **Astro** is the acceptable
  fallback (outputs pure static HTML, still deploys cleanly to Pages) — but
  default to vanilla unless there's a good reason not to.

### File structure

```
/
├── index.html
├── /assets
│   ├── /css
│   │   ├── style.css        (main styles)
│   │   └── print.css        (print/PDF-only stylesheet, @media print)
│   ├── /js
│   │   └── main.js          (scroll animations, nav, project modal/lightbox)
│   ├── /images
│   │   ├── /projects/<project-slug>/...   (drawings, renders, plans as jpg/png)
│   │   └── /profile/...
│   └── /docs                (optional: original PDFs available for download)
├── /data
│   └── projects.js          (array of project objects — see Section 4)
└── README.md                 (how to run locally + deploy)
```

Keeping project content in `data/projects.js` as an array of objects is what lets
you add the rest of your material later — see Section 6.

---

## 3. Site structure / sections (single page, anchor-navigated)

1. **Hero** — Name, title ("Architect" / "Landscape Architect"), one-line
   positioning statement, subtle animated intro (fade/slide up), scroll-cue.
2. **About** — short bio, education, tools/software proficiency (shown as
   clean progress bars or tag pills, not the gradient-bar resume-template look).
3. **Experience** — timeline layout: role, firm, dates, 2–3 bullets each.
4. **Selected Works** — the core of the site. Grid of project cards → each opens
   a **case-study page or expandable section** with:
   - Project name, typology, location, role, year.
   - A short narrative/description.
   - Key drawing sheets displayed as large, zoomable images (site sections,
     plans, details) — NOT raw PDFs embedded; convert to optimized JPG/PNG/WebP.
   - Materials/specs pulled from the legend if relevant (optional, keep light —
     recruiters skim, they don't read spec sheets).
5. **Skills & Tools** — software list (AutoCAD, Revit, SketchUp, Rhino, Lumion,
   Adobe Suite, etc.) as clean pill tags or minimal bars.
6. **Contact / Footer** — email, phone, LinkedIn, location, a "Download PDF"
   button that triggers `window.print()`.

---

## 4. Content inventory from what you've already given me

I can only pull structured facts from what's actually in front of me — you said
you have more, so treat this as the **starter dataset**, not the full one.

**Profile (from CV):**
- Name: Rutuja Gosavi
- Contact: +91-7264822770, gosavirutuja09@gmail.com, based in Aurangabad
- Bio: Architect with 1+ year practical experience in residential & commercial
  projects, sustainable design thinking, confident with AutoCAD, Revit,
  SketchUp, Rhino, Lumion, Adobe Suite.
- Education: Bachelor of Architecture, JNEC MGM University, Aurangabad
  (2020–2025); High school diploma, Deogiri Junior College (2018–2020).
- Experience:
  - Jr. Architect, Wyoma Architects, Pune (since Dec) — interior design &
    detailed drawings, client/vendor coordination, site ops, resorts/
    restaurants/residences, 3D assets & renders.
  - Jr. Partner, Eco Envisage, Pune (Jun–Dec) — client comms, architectural/
    landscape solutions, original concepts, comprehensive working drawings.
  - Professional Internship, ARH Architects, Mumbai (Jun–Nov) — working
    drawings, parking/landscape layout planning, gate/elevation design dev,
    on-site coordination.
- Tools: AutoCAD 90%, Revit 80%, Lumion 65%, Photoshop 70%, Rhino 50%,
  plus SketchUp, Adobe Creative Suite, Microsoft 365.

**Project — "Zen-Dale" (Eco Envisage Pvt. Ltd., client Mr. Parag Patil),
landscape architecture, multi-zone site:**
- *Pergola C* — steel + RCC pergola structure, ferrocrete decking, planting
  soil beds, seating, railing detail, plan/roof plan/two sections + 3D views.
- *Site Sections (Zone 01 & 02)* — long sectional cuts through kids' play
  area, toilet block, adult pool, water feature, lawns, pathways, planter
  beds, stepwell area, compound wall, gutter/waterproofing detailing.
- *Multipurpose Hall* (Zone 01) — 2-storey block: ground floor multipurpose
  hall (9m × 17.8m) + pantry/service; first floor gym, green room, toilets,
  balcony; rooftop water tank (OHWT, 150,000 L); staircases; full door/window
  schedule; ~250 sq.m total built-up area.
- *Tree Plantation Layout (Zone 1)* — planting plan with a 10-species tree
  schedule (common name, botanical name, qty, C/C spacing, min height,
  features) — good source for a nice "materials/planting palette" graphic.

**Reference files you also uploaded** (not yet parsed into content, but noted
so nothing gets lost): `Academic_portfolio.pdf`, `Portfolio_Presentation_
Shraddha_Dikshit.pdf` — if either of these is meant as a *style reference* for
layout/tone rather than content to include, say so explicitly when you brief
Antigravity, so it doesn't get treated as this portfolio's actual content.

---

## 5. Print / PDF stylesheet requirements (critical section)

Add `assets/css/print.css`, linked with `media="print"`. On `Ctrl+P` the
result should read like a clean multi-page resume/portfolio PDF, not a
captured webpage. Rules to give Antigravity explicitly:

- Kill all scroll-triggered animation classes and `transform`/`opacity`
  transition states in print — force every animated element to its final,
  fully-visible state (`opacity: 1 !important; transform: none !important;`).
- Hide: nav bar, "back to top" button, hamburger menu, any cursor-follow
  elements, video/canvas backgrounds, the "Download PDF" button itself.
- Switch to a **light background, dark text**, single-column, print-safe
  layout — no fixed/sticky positioning, no `100vh` hero sections (these break
  pagination badly).
- Set explicit `@page { margin: 1.5cm; size: A4; }` (or Letter if you want
  US-standard — pick one and stay consistent).
- Force page breaks sensibly: `break-inside: avoid` on project cards and the
  experience timeline entries so a card/entry never splits across a page;
  `break-before: page` before "Selected Works" if you want each major section
  to start clean.
- Convert any large hero image to a smaller, print-appropriate size — full-
  bleed images waste ink/pages and look unprofessional printed.
- Make sure link URLs (email, LinkedIn) are still legible as plain text, since
  clickable styling is meaningless on paper.
- Test print output at each major screen breakpoint's content, since some
  browsers rasterize at desktop width regardless of window size.

---

## 6. How to add more content later (without rewriting this brief)

Since your full project set didn't fit in one chat message, structure content
as data, not hardcoded markup, so you (or Antigravity in a follow-up session)
can extend it cheaply:

1. Keep every project as one object in `data/projects.js`:
   ```js
   {
     slug: "zen-dale-multipurpose-hall",
     title: "Zen-Dale — Multipurpose Hall",
     typology: "Community / Recreation",
     location: "Urse, Pune",
     year: "2024",
     role: "Working drawings, detailing",
     summary: "Two-storey multipurpose hall with rooftop water tank...",
     images: ["assets/images/projects/zen-dale-hall/plan.jpg", "..."],
     tags: ["Architecture", "AutoCAD", "Revit"]
   }
   ```
2. To add a new project: drop its images into
   `assets/images/projects/<new-slug>/`, append one object to `projects.js`.
   No HTML/CSS changes needed — the grid and case-study template render from
   the array.
3. For each remaining PDF sheet you have, export the relevant views as JPG/PNG
   (2000px wide is plenty) rather than uploading raw CAD-sheet PDFs — CAD
   titleblocks/legends look cluttered on a portfolio site; crop to the
   drawing/render itself.
4. Give Antigravity your PDFs/images in a follow-up message or drop them
   straight into `assets/images/` — you don't need to re-paste this whole
   brief again, just say "add these N projects to `data/projects.js`
   following the existing schema."

---

## 7. GitHub Pages deployment steps (put this in the README Antigravity generates)

1. `git init`, commit the site, push to a GitHub repo (public, or private with
   Pages enabled on a paid plan).
2. Repo Settings → Pages → Source: `main` branch, root (or `/docs` if you
   prefer keeping source separate from the served folder).
3. Site goes live at `https://<username>.github.io/<repo-name>/`.
4. Optional: custom domain via `CNAME` file in the repo root + DNS records.
5. No build step needed if vanilla HTML/CSS/JS — every push updates the live
   site within a minute or two.

---

## 8. Copy-paste prompt for Antigravity

> Build me a single-page, minimalist architecture/landscape-architecture
> portfolio website, static HTML/CSS/vanilla JS, deployable directly to GitHub
> Pages with no build step. Follow the file structure, section list, animation
> rules, and — most importantly — the dedicated print/PDF stylesheet
> requirements exactly as specified in this brief [paste Sections 1–7 above].
>
> Before writing any code, **scan and analyze every file in
> `Rutuja Portfolio/Material/`** in this project (all the PDFs: the Zone-01
> and Zone-02 EEPL drawing sheets, Academic portfolio, both Internship
> Portfolio PDFs, revit bim portfolio, Rutuja Gosavi CV, Teak County Proposed
> Design Presentation, and Portfolio Presentation_Shraddha Dikshit). For each
> one, extract: project name, typology, location/client if stated, role,
> year, a short description, and which sheets/pages are worth using as
> images (plans, sections, renders, 3D views — skip pure title-blocks/
> legends/dimension-only sheets). Treat `Portfolio Presentation_Shraddha
> Dikshit` as a **style/layout reference only**, not content to include —
> confirm this reading matches, since it isn't Rutuja's own work.
>
> Populate `data/projects.js` with one object per real project you find
> (following the schema in Section 6), using the starter dataset in Section 4
> as the baseline for the projects already summarized there, and add entries
> for whatever new projects turn up in the Material folder (e.g. Teak County,
> the internship-portfolio projects, BIM/Revit work). Export the relevant
> drawing/render pages as optimized JPG/PNG into
> `assets/images/projects/<slug>/` rather than embedding raw PDFs.
>
> Make the scroll animations elegant and smooth (fade/slide-in via AOS or
> IntersectionObserver, subtle hero parallax) but ensure
> `prefers-reduced-motion` is respected and that `assets/css/print.css` fully
> neutralizes them so Ctrl+P produces a clean, professional, paginated PDF —
> not a broken snapshot of the animated page. Include a working "Download
> PDF" button that calls `window.print()`. Write a README with local-preview
> and GitHub Pages deployment instructions.

This works because Antigravity runs locally with filesystem access to your
`D:\Rutuja Porfolio\Material` folder — it can open and read every PDF itself.
I can't reach your local drive from this chat, which is why I could only work
from what you uploaded directly here.

---

## 10. Where to get a head-start template (instead of building from scratch)

If you'd rather point Antigravity at an existing template and have it adapt/
theme it than generate everything from zero, these are solid free starting
points:

- **[Archi — Architect Portfolio HTML/CSS Template](https://templatesjungle.gumroad.com/l/archi-free-portfolio-html-template)**
  — free, purpose-built for architecture portfolios (portfolio grid,
  one-page layout option, clean/minimal). Closest match to your actual use
  case; probably the best starting point.
- **[devportfolio (RyanFitzgerald)](https://github.com/RyanFitzgerald/devportfolio)**
  — Astro + Tailwind, very clean minimalist layout with timeline-style
  experience/education sections; easy to re-theme away from "developer" copy.
- **[MinimalistTemplate (worldsocoled)](https://github.com/worldsocoled/MinimalistTemplate)**
  — pure HTML/CSS/JS, no framework, has a portfolio grid + about + contact
  section structure close to what's in Section 3 here.
- **[Simple-HTML-Portfolio-Template (NickCulbertson)](https://github.com/NickCulbertson/Simple-HTML-Portfolio-Template)**
  — deliberately minimal, no bloat, good if you want Antigravity to build up
  from a bare skeleton rather than strip down a heavier template.

Tell Antigravity which one to use as a base (or paste its repo URL) and it
can clone the structure, then restyle and rewire it per Sections 1–7 above —
that'll likely be faster than a from-scratch build, but you'll want to
double check none of them carry attribution/license requirements you'd
rather avoid before shipping this to recruiters.

---

## 9. A few open decisions worth pinning down before you brief Antigravity

- One-page scrolling site vs. project pages that get their own URL
  (`/projects/zen-dale.html`)? One-page is simpler for a recruiter's quick
  skim and for print; separate pages are nicer if the case studies get long.
- Accent color — pick one now (a muted terracotta or sage would suit the
  landscape-architecture material) so Antigravity doesn't invent one.
- Whether `Academic_portfolio.pdf` / `Shraddha Dikshit`'s portfolio are style
  references only, or contain more of your own project content to include.
