# Green Harbor Labs Website

Public website for Green Harbor Labs, built with Next.js, React, TypeScript, and Tailwind CSS. The site presents the studio, its engineering approach, capabilities, and the Paygate product page.

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Playwright for end-to-end tests
- ESLint for static checks

## Getting Started

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Scripts

```bash
npm run dev        # Start the Next.js development server
npm run build      # Create a production build
npm run start      # Serve the production build
npm run lint       # Run ESLint
npm run typecheck  # Run TypeScript checks
npm run test:e2e   # Run Playwright tests
npm run test:e2e:ui # Run Playwright in UI mode
```

## Project Structure

```text
app/                  Next.js app routes and global layout
components/           Reusable page sections and UI components
data/                 Site metadata, navigation, capabilities, and products
lib/                  Shared helpers
public/brand/         Public brand images and icons
assets/brand/         Source brand assets
tests/                Playwright end-to-end tests
```

## Content

Most editable site copy lives in:

- `data/site.ts` for metadata, navigation, CTAs, contact links, build areas, capabilities, and process copy.
- `data/products.ts` for product data, currently focused on Paygate.
- `components/` for the homepage sections and shared presentation components.

Contact links in `data/site.ts` are intentionally blank until launch-ready URLs exist. Empty links are not rendered.

## Testing

Playwright tests cover:

- Homepage first viewport content
- Desktop anchor navigation
- Mobile menu behavior
- Paygate homepage and product page content
- Missing placeholder contact links
- Horizontal overflow across key viewports
- Reduced-motion visibility

Run them with:

```bash
npm run test:e2e
```

The Playwright config starts `npm run dev` automatically and reuses an existing server on `http://localhost:3000` when available.

## Deployment

This is a standard Next.js app and can be deployed on Vercel or any platform that supports `npm run build` and `npm run start`.

Before deploying, run:

```bash
npm run lint
npm run typecheck
npm run build
npm run test:e2e
```
