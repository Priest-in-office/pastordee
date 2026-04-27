# The Higher Life Podcast Website

A production-style React single-page application for Pastor Deola Phillips and The Higher Life Podcast.

The site is designed as a polished media + ministry platform with:

- A home experience built from focused content sections
- A searchable episode library with embedded YouTube playback
- An about page with story, milestones, and ministry highlights
- A question submission page with client-side validation and local persistence
- An events page that automatically separates upcoming vs past events

## What This Project Uses

- React 19 + TypeScript
- Vite 8 for development/build tooling
- React Router 7 for client-side routing
- Tailwind CSS v4 (via the Vite plugin)
- Framer Motion for reveal and transition animations
- Lucide React for iconography
- ESLint 9 + TypeScript ESLint for linting

## Quick Start

### 1) Install dependencies

```bash
npm install
```

### 2) Start development server

```bash
npm run dev
```

### 3) Build for production

```bash
npm run build
```

### 4) Preview production build locally

```bash
npm run preview
```

### 5) Run lint checks

```bash
npm run lint
```

## Available Scripts

- `npm run dev`: Starts Vite in development mode with hot reload
- `npm run build`: Runs TypeScript project build and then Vite production build
- `npm run preview`: Serves the built app for local production preview
- `npm run lint`: Runs ESLint across the project

## Application Architecture

The app follows a component-layer approach:

- Layout shell: global navigation, footer, and route container
- Pages: route-level views for each section of the website
- Section components: composed blocks used to build pages
- UI primitives: reusable building blocks (buttons, cards, sections, wrappers)
- Data/types: strongly typed local content source for episodes, events, testimonials

### Entry and Render Flow

1. `src/main.tsx` mounts React in Strict Mode.
2. `src/App.tsx` sets up BrowserRouter.
3. `AppLayout` wraps every page with:
   - `Navbar`
   - Route content area
   - `Footer`
4. A `ScrollToTop` helper resets scroll position on route changes.

## Routing

Defined in `src/App.tsx`:

- `/` → Home page
- `/episodes` → Episode library
- `/about` → About Pastor Deola
- `/ask` → Ask a question form
- `/events` → Events listing

## Folder Structure (High-Level)

```text
src/
  components/
    home/       # Home page sections
    layout/     # Navbar and footer
    ui/         # Reusable primitives
    youtube/    # Episode card and YouTube player
  data/
    episodes.ts # Episodes, events, testimonials, categories
  pages/        # Route-level pages
  types/        # Shared TypeScript interfaces
  App.tsx       # Router + layout composition
  main.tsx      # Application entry point
  index.css     # Tailwind import + theme tokens + base styling
```

## Page Breakdown

### Home Page

Composed in `src/pages/HomePage.tsx` with these sections:

- `HeroSection`: primary introduction and top CTAs
- `ProofStrip`: quick credibility statistics strip
- `FeaturedEpisode`: latest episode spotlight and embed
- `RecentEpisodes`: featured shelf and recent episode cards
- `AboutSnippet`: short host profile preview
- `AskCTASection`: strong call-to-action to submit questions
- `NewsletterSection`: email capture area

### Episodes Page

`src/pages/EpisodesPage.tsx` provides:

- Search by title/description
- Category filtering
- Deep-link playback using URL query string (`?play=VIDEO_ID`)
- Inline now-playing area with episode details/resources
- Empty-state UI when no results match filters

### About Page

`src/pages/AboutPage.tsx` includes:

- Hero with portrait + action buttons
- Narrative biography section
- Highlight cards for ministry areas
- Milestones timeline section
- Podcast impact section with CTA to browse episodes

### Ask Page

`src/pages/AskPage.tsx` includes:

- Guided process explanation cards
- Validated submission form (name, email, category, question)
- Success and error feedback states
- Local persistence of questions in browser storage

### Events Page

`src/pages/EventsPage.tsx` includes:

- Auto-sorted upcoming events (nearest first)
- Separate archive of past events (most recent first)
- Event metadata display (date, time, location, type)
- Optional registration URL support

## Data Layer and Content Management

All content currently lives in `src/data/episodes.ts` and is strongly typed via `src/types/index.ts`.

Exported data collections:

- `episodes`: podcast episode catalogue
- `events`: event list for upcoming/archive rendering
- `testimonials`: listener quotes
- `categories`: filter list used in episode browsing

### Core Type Models

Defined interfaces:

- `Episode`
- `EpisodeResource`
- `Question`
- `Event`
- `Testimonial`

This structure keeps rendering predictable and makes migration to an API straightforward.

## Local Storage Behaviour

This app currently handles two user-generated data flows entirely on the client:

- Ask form submissions are stored under key: `hlp-questions`
- Newsletter subscriptions are stored under key: `hlp-subscribers`

Important implications:

- Data is browser-local (not shared across devices)
- Data can be cleared by users via browser storage reset
- No server-side persistence, moderation, or authentication yet

## Reusable UI System

The UI primitives in `src/components/ui` define consistency across the app:

- `Button`: variants, sizes, internal/external link support
- `Container`: constrained widths (`narrow`, `default`, `wide`, `full`)
- `Section`: tone + spacing scales for page rhythm
- `SurfaceCard`: elevated content surfaces with consistent paddings
- `SectionIntro` / `SectionHeading`: unified section headings
- `PageHero`: reusable hero layout for route pages
- `NewsletterForm`: shared newsletter input patterns

## YouTube Integration

Video display is intentionally privacy-forward and performance-aware:

- `EpisodeCard` pulls thumbnail images from YouTube image endpoints
- `YouTubePlayer` starts with a static thumbnail shell
- Actual embed is only mounted when user clicks play
- Uses youtube-nocookie embed URL for improved privacy posture

## Styling and Design System

Global styling is defined in `src/index.css`:

- Tailwind v4 import and token definitions
- Font variables (`Inter` body, `Fraunces` heading)
- Project colour tokens (ink, sand, gold, sage)
- Shared shadows and surface variables
- Base element resets and typography defaults
- Accessibility-friendly focus-visible styling
- Reduced-motion support using `prefers-reduced-motion`

## Motion Strategy

Framer Motion is used for focused, meaningful motion:

- Page hero entrance transitions
- Scroll-triggered reveal animations for sections/cards
- Animated episode player open/close transitions

The goal is clarity and emphasis, not decorative over-animation.

## Accessibility Notes

Current accessibility-positive choices include:

- Semantic landmarks (`main`, `section`, `nav`, `footer`)
- Keyboard-visible focus ring styles
- Alt text for imagery
- Button labels and `aria-label` usage for icon-only actions
- Support for reduced-motion preferences

## Known Gaps / Future Improvements

Recommended next production steps:

1. Replace localStorage form handling with backend APIs.
2. Add server-side validation, rate limits, and anti-spam controls.
3. Add analytics for page flows and CTA conversion.
4. Add automated tests:
   - Unit tests for filtering and validation logic
   - Integration tests for route-level behaviour
5. Introduce environment-based config for external links and IDs.

## Deployment

This is a static front-end application and can be deployed on platforms such as:

- Vercel
- Netlify
- Cloudflare Pages
- Any static host that supports SPA fallback routing

For correct route refresh behaviour, ensure rewrites point unknown routes to `index.html`.

## Maintainer Notes

When adding new content:

- Add/update typed records in `src/data/episodes.ts`
- Keep dates in ISO format (YYYY-MM-DD) to preserve sorting
- Keep category labels consistent with the `categories` array
- Prefer composing new UI from existing primitives before introducing new patterns

When adding new pages:

1. Create the page component under `src/pages`
2. Add route definition in `src/App.tsx`
3. Add navigation links in `src/components/layout/Navbar.tsx` and footer if needed
