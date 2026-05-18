# Art Portfolio

A personal art portfolio site built with [TanStack Start](https://tanstack.com/start) and deployed on [Netlify](https://netlify.com). Shows artwork organized into collections (e.g., Oil Paintings, Watercolors, Digital Art, Photography) with a contact form and links to social platforms.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | TanStack Start (React 19 + Vite 7) |
| Routing | TanStack Router (file-based) |
| Styling | Tailwind CSS 4 |
| Content | Content Collections (type-safe markdown) |
| Forms | Netlify Forms |
| Deployment | Netlify |

## Project Structure

```
content/artwork/   ← Markdown files for each artwork piece
src/routes/        ← File-based routes (index, collections.$collection, contact)
src/components/    ← Header with nav and social links
public/            ← Static assets including contact.html form skeleton
```

## Running Locally

```bash
npm install
npm run dev      # starts dev server on port 3000
```

## Adding Artwork

Create a new Markdown file in `content/artwork/`:

```markdown
---
title: "My Painting"
collection: "Oil Paintings"
description: "A short description of the work."
year: "2024"
medium: "Oil on canvas"
dimensions: "16 × 20 in"
tags: ["landscape", "oil"]
image: "/images/my-painting.jpg"   # optional
featured: true                      # shows first in listings
---

Optional longer artist's note about this piece.
```

Place any artwork images in `public/images/`. The `collection` field groups pieces together — pieces with the same collection name appear together on the homepage and have a dedicated `/collections/[name]` page.

## Customization

- **Artist name**: update in `src/components/Header.tsx` and `src/routes/__root.tsx`
- **Social handles**: update URLs in `src/components/Header.tsx` and `src/routes/contact.tsx`
- **Hero text**: edit the intro paragraph in `src/routes/index.tsx`
- **Collection colors**: add entries to `collectionGradients` in `index.tsx` and `collections.$collection.tsx`
