# Portfolio Hail Mary

> *"Be the light the universe needs."*

My personal portfolio — a Project Hail Mary–inspired single-page site built to show off code, media, and design work all in one place. Hand-rolled canvas graphics, no framework, no build step, no dependencies beyond a CDN or two.

**Live:** [kiansogoni.github.io/Portfolio-Hail-Mary](https://kiansogoni.github.io/) *(swap for your real URL)*

---

## What's in here

A single `index.html` with everything inlined — HTML, CSS, and JS. Sections swap in and out client-side (no routing, no reload) using a simple `switchPage()` helper.

### Pages
- **Home** — hero, tagline, and GraceBot, an interactive canvas companion that waves at you and shoots hearts when you hover.
- **About** — my background, current projects, technical + soft skills, and why I got into this field.
- **Projects** — five featured builds, including an E-Pharmacy system, an online ordering app, a scientific calculator, and a Project Hail Mary 3D UI tribute.
- **Gallery** — links to Google Drive folders with screenshots, journalism photos, and pubmats, plus a 20-image masonry compilation.
- **Contact** — a form that POSTs to a serverless function (`/api/contact`), with client-side phone validation (11-digit Philippine mobile format).

### The star map
Click the compass button in the bottom-right corner. It opens a modal with a hand-rolled **3D star map** built from scratch on HTML5 Canvas:

- Custom 3D → 2D projection math (rotate on X/Y, perspective divide)
- Drag to orbit, scroll to zoom, pinch on mobile
- Click a star to inspect its data
- Culled behind-camera points + a clipped render pass so nothing bleeds outside the canvas frame
- Real-time easing so the camera glides instead of snapping

No Three.js, no external 3D library. Just `Math.cos`, `Math.sin`, and a lot of trial and error.

---

## Tech

- **HTML5 / CSS3 / Vanilla JS** — no framework, no bundler
- **Tailwind CSS** (CDN) — utility classes for layout and theming
- **Google Fonts** — Orbitron (headings), Plus Jakarta Sans (body)
- **Font Awesome** (CDN) — icons
- **HTML5 Canvas** — star field background, star map, and GraceBot
- **Vercel Serverless Function** — handles contact form submissions (`/api/contact`)

### Color palette
Pulled straight off the Project Hail Mary poster:

| Name       | Hex       | Use                          |
|------------|-----------|------------------------------|
| Off-white  | `#E6E8E6` | Primary text                 |
| Sage       | `#B0B8B0` | Secondary text               |
| Yellow     | `#C5B358` | Accents, highlights          |
| Rust       | `#B85042` | Warnings, alternate accents  |
| Teal       | `#1F4E5B` | Panels, mid-tone backgrounds |
| Dark teal  | `#0D1F2D` | Deep panels, cards           |
| Space      | `#06090E` | Page background              |

---

## Running it locally

It's one HTML file, so:

```bash
# clone it
git clone https://github.com/KianSogoni/Portfolio-Hail-Mary.git
cd Portfolio-Hail-Mary

# open it (any of these work)
open index.html          # macOS
start index.html         # Windows
xdg-open index.html      # Linux

# or just double-click index.html in your file manager
