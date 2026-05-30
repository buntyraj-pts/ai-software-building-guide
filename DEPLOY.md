# Deploy Guide

The site builds successfully locally. Follow these steps to publish it.

## Prerequisites

Install [Git for Windows](https://git-scm.com/download/win) if you do not have it yet.

## Step 1 — Push to GitHub

Open a terminal in this folder and run:

```bash
git init
git add .
git commit -m "Initial commit: AI software building guide"
git branch -M main
```

Create a new repository on [github.com/new](https://github.com/new) (name suggestion: `ai-software-building-guide`), then:

```bash
git remote add origin https://github.com/YOUR_USERNAME/ai-software-building-guide.git
git push -u origin main
```

## Step 2 — Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **Add New Project**
3. Import the repository you just pushed
4. Leave settings as default (Next.js is auto-detected)
5. Click **Deploy**

Your live URL will look like: `https://ai-software-building-guide.vercel.app`

## Step 3 — Verify

- Open the live URL and check all section links in the header
- Make a small text change, commit, push — Vercel should redeploy automatically

## Local preview (before deploying)

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)
