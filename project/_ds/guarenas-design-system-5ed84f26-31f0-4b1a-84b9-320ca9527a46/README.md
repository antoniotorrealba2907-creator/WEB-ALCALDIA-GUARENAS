# Alcaldía Bolivariana de Guarenas — Design System

> Identidad visual institucional de la **Alcaldía Bolivariana de Guarenas — Municipio Ambrosio Plaza**, estado Miranda, Venezuela. Basado en el *Manual de Marca 2025 (v2)*.

This design system packages the brand of the Guarenas Mayor's Office (a Venezuelan municipal government) so design agents can produce on-brand interfaces, social campaigns, documents and decks. It contains the verified color & type tokens, the official logo set (recolored from the source SVGs), content/voice guidance, visual foundations, an iconography policy, and high-fidelity UI kits.

---

## 1. Context — who this is for

**Alcaldía Bolivariana de Guarenas** is the local government of the municipality of Guarenas (Municipio Ambrosio Plaza), in the Venezuelan state of Miranda. The brand is bilingual-ready but primarily **Spanish (Venezuela)**. Its communication mixes formal institutional authority with a warm, community-first ("cercanía") tone.

**Brand concept (from the manual):** the logotype's symbol is a **"G" shaped as a heart** — a dynamic, fluid mark giving the initial of *Guarenas* and evoking *movement, growth and unity*. The flowing curves convey openness, adaptability and the connection between the institution and its citizens. The mark projects "una Guarenas moderna, inclusiva y en constante desarrollo."

**Misión (resumen):** impulsar el crecimiento integral de Guarenas mediante gestión eficiente de recursos, inversión y empleo, modernización de servicios públicos, seguridad, turismo y cultura, garantizando espacios inclusivos.

**Visión (resumen):** convertir a Guarenas en un municipio modelo de Venezuela, reconocido por su desarrollo económico, seguridad ciudadana, calidad de vida y orgullo cultural.

**Slogan:** *“Mi querida Guarenas”* / *“Cuidemos a nuestra querida Guarenas.”*

### Sub-brands / expansion ("expansión de marca")
The institution sub-brands its departments off the master logo:
- **Administración**
- **Obras Públicas**
- **Cultura**
- **Aseo Urbano** (waste collection / sustainability — uses **Guarenas Green `#25664A`**)

### Surfaces / products
The brand mostly produces **social-media campaign graphics** (Instagram-style 4:5 posts & carousels — e.g. the *Rutas de Recolección de Desechos Sólidos* set) and an implied **citizen web portal** (`www.guarenas.com`, referenced in the manual under "uso isotipo / página web"), plus printed stationery (papelería), office signage and merchandise.

### Sources provided
- `uploads/MANUAL DE MARCA ALCALDIA DE GUARENAS v2.pdf` — 36-page brand manual (2025). Mirrored to `assets/manual-de-marca.pdf`.
- `uploads/ALCALDIA DE GUARENAS LOGOTIPO.svg` — full lockup (wordmark + isotipo + flag bars). The source had its color `<defs>` stripped (rendered black); recolored versions live in `assets/`.
- `uploads/ISOTIPO.svg` — the standalone "G-heart" isotype.
- `uploads/PORTADA.jpg.jpeg` — a real campaign post (waste-collection routes). Mirrored to `assets/portada-recoleccion.jpg`. Used to sample the true brand blue.

> ⚠️ No codebase, Figma file or live site was provided. The web UI kit is an **original, on-brand reconstruction** of what `guarenas.com` would plausibly be, built strictly from the manual's tokens — not a copy of an existing site. Flagged for the user to confirm/replace with real references.

---

## 2. CONTENT FUNDAMENTALS — voice & copy

**Language:** Spanish (Venezuela). Use Venezuelan civic vocabulary: *guarenero/guarenera, ciudadano/a, municipio, gestión, comunidad, jornada, recaudo, trámite*.

**Pronoun & address:** institutional **first-person plural** ("nosotros") for the government's actions — *"Cuidemos", "Trabajamos por", "Construimos"* — and **second person plural inclusive** toward citizens. Gender-inclusive doublets appear in formal copy: *"cada guarenero y guarenera"*. Avoid the informal *tú* in headlines; keep it warm but respectful.

**Tone:** institutional + close ("cercanía"). Authoritative but never cold. Optimistic, forward-looking, community-centered. Pride in the city is explicit ("nuestra querida Guarenas", "orgullo cultural").

**Casing:**
- **Headlines / campaign titles:** ALL-CAPS, heavy weight, often two-tone size (e.g. small `RUTAS DE` over huge `RECOLECCIÓN`). This is the signature campaign treatment.
- **Subtitles / slogans:** Title-style caps in the rounded font (e.g. `CUIDEMOS A NUESTRA QUERIDA GUARENAS`).
- **Body / sentence copy:** normal sentence case.
- Always keep Spanish accents (CÓ, Ó, Á, Í, É, Ñ) — including on uppercase.

**Punctuation:** Spanish opening marks (¿ ¡) where applicable. Call-to-action microcopy is imperative and short: *"Desliza para ver las rutas", "Más información", "Reporta aquí"*.

**Emoji:** **not** part of the institutional system. Do not use emoji. (Iconography is handled with line/solid icons and the recycling/flag glyphs — see §4.)

**Vibe:** civic, dependable, modern-public-sector. Think "a well-run city hall that loves its people." Examples of on-brand lines:
- *"Cuidemos a nuestra querida Guarenas."*
- *"Trabajamos por un municipio modelo de Venezuela."*
- *"Servicios más cercanos para cada guarenero y guarenera."*
- *"Rutas de recolección de desechos sólidos — conoce tu día."*

---

## 3. VISUAL FOUNDATIONS

**Color vibe.** Anchored by a **bright primary blue (`#106CFF`)** — "color principal" — backed by a darker institutional **navy (`#0B2C66`)** for titles and dark surfaces. Two brand secondaries carry meaning: **Guarenas Yellow (`#EF892F`)** is reserved **only to highlight sections in the administrative area**, and **Guarenas Green (`#25664A`)** is tied to everything **waste-collection routes (Aseo Urbano)**. The **Venezuela flag triad** (yellow `#FFCE00`, blue `#00269A`, red `#CF142B`) appears as the three-bar device beneath the logo and as a patriotic accent — used sparingly, never as large fills. Overall the palette reads **bright, confident, governmental**.

**Typography.** Three roles from the manual:
- **Poppins** → titles ("se utilizan en títulos de gran tamaño"). Geometric, friendly-authoritative. *Exact match, loaded from Google Fonts.*
- **Arial Rounded** → subtitles & the slogan ("Mi querida Guarenas"). Rounded, warm. *Not web-available → substituted with **Fredoka** (see §6). Flagged.*
- **Arial** → body / paragraphs. *Kept native in the stack; **Arimo** loaded as a metric-compatible web fallback.*

Headlines lean heavy (700–800), tight tracking, balanced wrap. Body stays at comfortable 1.6 line-height.

**Backgrounds.** Two registers: (1) **clean light** — white and a cool near-white wash (`#F5F7FC`) with a very soft top-light/diagonal sheen (seen on the campaign cover); (2) **deep navy** sections for emphasis and footers. **Full-bleed photography** of the city, civic works and vehicles is central to campaigns; photos are placed on the light or navy ground with the logo lockup. No heavy gradients, no noise/grain, no busy textures — surfaces are flat with at most a subtle radial light.

**Imagery vibe.** Real, bright, optimistic documentary photography — municipal vehicles, public works, community, the city. Saturated and **warm-to-neutral**, daylight, not moody. Subjects often cut out or shot against light backgrounds so the brand blue/navy type reads on top. Avoid b&w except for the grayscale logo lock-up case.

**Spacing & layout.** 4-pt base scale. Generous margins; centered, symmetrical compositions for campaign posts (logo top-center, stacked headline, supporting slogan, image below). Web layouts use a 12-col feel with comfortable gutters. Logo **safe area: 5× the module digitally, 3 cm in print** (from the manual).

**Corner radii.** Soft but not bubbly — cards `12–16px`, buttons `8px` or pill, inputs `8px`, large feature media `24px`. Pills (`999px`) for tags, route chips and primary CTAs in campaign contexts.

**Cards.** White surface, hairline border `#DCE3F1`, soft navy-tinted shadow (`0 4px 12px rgba(12,42,94,.10)`); no colored left-border gimmick. Elevation comes from shadow, not borders. Feature cards may invert to navy.

**Shadows / elevation.** A single navy-tinted shadow family (sm→xl) — shadows are blue-black, never neutral grey. Used restrainedly: resting cards `sm`, menus/hovers `md`, modals `lg/xl`.

**Borders & dividers.** Hairlines `#DCE3F1`; stronger dividers `#C3CDE4`. The **three-bar flag device** is itself a recurring divider/footer motif.

**Buttons.** Primary = solid primary blue, white text, radius 8px (or pill in campaigns). Secondary = navy outline on white. Hover = darken ~8% / lift with `md` shadow. Press = slight scale-down (0.98) + remove lift. Focus = 3px blue ring (`rgba(22,60,143,.30)`). Tertiary = text link in blue with underline-on-hover.

**Hover / press states.** Interactive elements darken on hover (or gain a `md` shadow lift); press states compress slightly (`transform: scale(.98)`) and drop the lift. Links underline on hover. No color *lightening* on hover for solid buttons — go darker.

**Animation.** Subtle and functional: fades + short slides (~180–240ms), ease-out (`cubic-bezier(.2,.7,.3,1)`). Campaign carousels use horizontal slide ("Desliza para ver…"). No bounces, no flashy motion — government-appropriate restraint.

**Transparency / blur.** Used lightly: navy headers may use a translucent navy with backdrop-blur when overlaying photos; protection scrims (navy→transparent gradient) sit under text placed on photography. Otherwise surfaces are opaque.

---

## 4. ICONOGRAPHY

The manual does **not** ship a proprietary icon set. The brand's own glyph vocabulary is: the **G-heart isotipo**, the **three-bar Venezuela flag device**, and contextual public-domain marks (the **recycling triangle** in the Aseo Urbano campaign, a **hand-swipe** "desliza" cue). Emoji are **not** used.

**Policy for this system:**
- **Real brand assets first** — use the recolored `assets/isotipo-guarenas*.svg` and `assets/logo-guarenas*.svg` as the hero marks; use the flag-bar device for dividers/footers.
- **UI icons → Lucide** (`https://unpkg.com/lucide@latest`), linked from CDN. Lucide's clean, rounded-join, ~2px stroke pairs naturally with Poppins/Fredoka and the friendly-institutional tone. **This is a substitution** (no official UI icon set exists) — flagged. Keep stroke `2`, line caps round, single-color (currentColor → brand blue/navy).
- For filled/civic pictograms (recycling, services), Lucide's solid-adjacent set or simple inline glyphs are acceptable; keep them monochrome in brand blue.
- Never invent a hand-drawn bespoke icon language or use emoji as icons.

---

## 5. FILE INDEX (manifest)

| Path | What |
|---|---|
| `README.md` | This file — context, voice, visual foundations, iconography, manifest. |
| `design.md` | **Full spec sheet** — tokenized colors, type hierarchy, layout, elevation, shapes, and every component/card documented (BMW-style reference format). |
| `colors_and_type.css` | All design tokens: color, type, spacing, radii, elevation + semantic type classes. **Import this in every artifact.** |
| `SKILL.md` | Agent-Skill entry point (Claude Code compatible). |
| `assets/logo-guarenas.svg` | Full color lockup (wordmark + isotipo + flag bars). |
| `assets/logo-guarenas-white.svg` | All-white lockup for dark/photo backgrounds. |
| `assets/logo-guarenas-mono.svg` | Single-navy (grayscale-case) lockup. |
| `assets/isotipo-guarenas.svg` / `-white.svg` | Standalone G-heart isotype (blue / white). |
| `assets/portada-recoleccion.jpg` | Real campaign reference post. |
| `assets/manual-de-marca.pdf` | Original 2025 brand manual. |
| `preview/*.html` | Design-System tab cards (colors, type, components, brand). |
| `ui_kits/portal-web/` | **Portal Ciudadano** web UI kit — `index.html` + JSX components. |
| `slides/` | Social-campaign post templates (4:5) — `index.html` + JSX. |

### Quick start for agents
1. Link `colors_and_type.css` (it `@import`s the Google Fonts).
2. Use `var(--guarenas-blue)`, `var(--font-display)`, the `.gua-*` type classes.
3. Pull logos from `assets/` — never redraw them.
4. Read §2–§4 before writing copy or composing layouts.

---

## 6. Font substitutions (action needed)
| Manual font | Role | Web substitute | Status |
|---|---|---|---|
| Poppins | Títulos | **Poppins** (Google Fonts) | ✅ exact |
| Arial Rounded MT | Subtítulos / slogan | **Fredoka** (Google Fonts) | ⚠️ closest free match — confirm or supply the licensed Arial Rounded files |
| Arial | Cuerpo de texto | **Arial** native + **Arimo** (Google Fonts) fallback | ✅ metric-compatible |

> If you have the licensed **Arial Rounded MT** font files, drop them in `fonts/` and update `--font-rounded` in `colors_and_type.css`.
