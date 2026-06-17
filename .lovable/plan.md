# Replicate muhammadtaimoor.netlify.app

A faithful clone of the portfolio: a dark, "terminal/hacker" aesthetic with an emerald-green accent on near-black, an animated starfield background, a decrypting boot loader, and a sticky top nav across 8 single-page sections.

## Visual System

- **Palette**: near-black base (#04110d / #061a13), elevated surfaces (#0b1f17), emerald primary (~#22d3a8 / #34d399), soft mint text on dim sections, muted slate body copy. Subtle grid pattern overlay on hero.
- **Typography**: monospaced display feel for headings + accents (JetBrains Mono / Space Mono), clean sans (Inter or Manrope) for body. Hero name in large bold sans.
- **Effects**:
  - Animated starfield canvas (drifting dots, occasional glow pulses, faint connecting lines) on hero/background.
  - Decrypting boot loader on first visit: centered orbital ring + scrambling text ("Decrypting <word>") + progress bar ("LOADING COGNITION: NN%"), then fades into the site.
  - Glowing emerald corner brackets framing the hero portrait.
  - Section reveal-on-scroll, subtle hover lifts, gradient buttons.
  - Light/dark toggle in nav (dark default).
  - Right-edge floating section-progress indicator ("Home", "About"...).

## Sections (single-page, anchored)

1. **Top Nav** — left links (Home, About, Experience), centered MT signature logo, right links (Education, Projects, Publications, Blog, Contact) + theme toggle.
2. **Hero** — pill tag "AI Researcher & Software Developer", huge name "Muhammad Taimoor Khan", tagline "Master AI & Tech, Unlock the Future!", short bio, three CTAs (View My Work / Get In Touch / Download Resume), framed circular portrait with word-cloud styling, "Scroll Down" indicator.
3. **About** — bio paragraphs, quick stats, skill chips.
4. **Experience** — vertical timeline of roles (company, title, dates, bullets, tech tags).
5. **Education** — degree cards (institution, dates, focus, achievements).
6. **Projects** — card grid (title, description, tech tags, GitHub/demo links, optional thumbnail).
7. **Publications** — paper cards (title, venue, year, authors, links).
8. **Blog** — post cards (title, excerpt, date, tag).
9. **Contact** — email, location, socials (LinkedIn, GitHub, Twitter/X, Google Scholar), contact form.
10. **Footer** — copyright, quick links, socials.

All exact copy, project list, papers, experience entries, dates, and links will be pulled from the live site by the background extraction task and dropped into the components verbatim.

## Technical Plan

- **Routing**: single route `src/routes/index.tsx` with anchored sections (`#about`, `#experience`, etc.); smooth scroll via `Link` `hash`. Update `head()` with the real name/title/OG metadata. Keep `__root.tsx` shell minimal (no nav there — nav is page-level so it can sit over the starfield).
- **Components** (`src/components/portfolio/`): `DecryptLoader`, `Starfield` (canvas), `Nav`, `ThemeToggle`, `Hero`, `About`, `Experience`, `Education`, `Projects`, `Publications`, `Blog`, `Contact`, `Footer`, `SectionProgress`, `SectionHeading`, `GlowCard`, `TechTag`, `CornerBrackets`.
- **Data**: `src/data/portfolio.ts` with typed arrays for experience, education, projects, publications, blog posts, socials — populated from the extracted content.
- **Theme**: extend `src/styles.css` with semantic tokens (background, surface, primary/emerald, primary-glow, muted, border, ring) in oklch; gradient + glow shadow tokens; mono + sans font tokens. Dark default; light mode via `.light` class on `<html>`.
- **Fonts**: `bun add @fontsource/jetbrains-mono @fontsource/inter`, imported in `src/main.tsx` (or router entry), wired into Tailwind theme tokens.
- **Animation**: `framer-motion` for reveal-on-scroll + loader transition; raw `<canvas>` + `requestAnimationFrame` for the starfield to keep it cheap.
- **Portrait image**: generated via `imagegen` with the original's word-cloud overlay vibe, saved to `src/assets/`.
- **SEO**: route `head()` sets title, description, OG/Twitter, JSON-LD `Person` schema, single H1 on hero.
- **Resume button**: links to a `/resume.pdf` placeholder in `public/` (real file can be dropped in later).

## Out of scope

- No backend, no DB, no form submission wiring — Contact form posts to a `mailto:` for now (can swap to Lovable Cloud + email later if you want).
- No CMS for blog — posts are static entries in `portfolio.ts`.
- Full content fidelity depends on the extraction task; any field it can't recover gets a clearly-marked TODO placeholder.
