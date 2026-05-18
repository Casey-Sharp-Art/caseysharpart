# AGENTS.md

Project architecture reference for AI agents working on this codebase.

## Overview

Art portfolio site built with TanStack Start. Artwork is managed as markdown files via Content Collections. The site has three main routes: a portfolio homepage, per-collection gallery pages, and a contact page with Netlify Forms + social links.

## Key Directories

```
content/artwork/          ← One .md file per artwork piece
src/routes/               ← File-based TanStack Router routes
  index.tsx               ← Homepage: hero + all collections
  collections.$collection.tsx  ← Per-collection gallery (/collections/[name])
  contact.tsx             ← Contact form + social links
src/components/
  Header.tsx              ← Sticky nav with social icons (Instagram, X, Cara)
public/
  contact.html            ← Static skeleton required for Netlify Forms detection
content-collections.ts    ← Artwork schema (Zod)
```

## Content Schema

Artwork files live in `content/artwork/*.md` with this frontmatter:

```typescript
{
  title: string
  collection: string        // groups pieces together (e.g. "Oil Paintings")
  description: string
  year: string
  medium?: string
  dimensions?: string
  tags: string[]
  image?: string            // path relative to /public
  featured?: boolean        // featured pieces shown first
}
```

## Routing Conventions

- `/` — `src/routes/index.tsx` — portfolio homepage
- `/collections/:name` — `src/routes/collections.$collection.tsx` — individual collection
- `/contact` — `src/routes/contact.tsx` — contact form + social links

TanStack Router uses file-based routing. Dynamic segments use `$param` syntax.

## Styling

- Tailwind CSS 4 utility classes throughout
- Stone color palette as the base neutral (`stone-50` background, `stone-900` text)
- Each collection has a gradient color mapped in `collectionGradients` in both `index.tsx` and `collections.$collection.tsx` — add new entries when adding new collection types
- Artwork cards show gradient placeholders when no `image` is provided

## Netlify Forms

Contact form submission works via Netlify Forms. The static `public/contact.html` file is required for Netlify to detect the form at build time. The React form POSTs to `/contact.html` (not the route) with URL-encoded data. Forms **do not work in local dev** — they require a deployed Netlify environment.

## Non-obvious Decisions

- `collections.$collection.tsx` uses `encodeURIComponent` / `decodeURIComponent` for collection names in URLs because collection names contain spaces (e.g. "Oil Paintings").
- The `allArtwork` import from `content-collections` is a flat array; grouping by collection is done at render time in `index.tsx`.
- The `__root.tsx` uses both `shellComponent` (SSR HTML wrapper) and `component` (layout with Header + Outlet). `shellComponent` wraps `component`.
