# AI Software Building Guide

A beginner-friendly one-page website that teaches how to build and publish software using **Cursor**, **GitHub**, and **Vercel**.

This site was built with the same workflow it describes.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for production

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this repo to GitHub
2. Sign in to [vercel.com](https://vercel.com) with your GitHub account
3. Import this repository and click **Deploy**

Vercel auto-detects Next.js. Every push to `main` triggers a new deployment.

## Project structure

- `app/page.tsx` — single-page content
- `components/` — section components (Hero, Steps, Tips, etc.)
- `public/images/` — add real screenshots here when ready
- `PLAN.md` — project plan and implementation notes

## Replace screenshot placeholders

Add real images to `public/images/` and update the `ScreenshotPlaceholder` components in the step sections when you capture screenshots of Cursor, GitHub, and Vercel.
