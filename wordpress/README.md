# iBridge360 Marketing Website

Public marketing site for [iBridge360](https://ibridge360.com) — **Astro static**, not the LMS / learner platform.

- **Stack:** Astro 5 (`output: 'static'`) + React islands  
- **Canonical host:** `https://ibridge360.com`  
- **URL base:** `/website` (home = `/website/`, pages = `/website/<path>`)  
- **Learner platform:** `https://learner.ibridge360.com`  
- **Not included:** WordPress/PHP, LMS app code

For GitHub → Vercel steps, see **[DEPLOY.md](./DEPLOY.md)**. Quick boxes: **[CHECKLIST.md](./CHECKLIST.md)**.

## Local development

| Requirement | Value |
|-------------|--------|
| Node | **20+** (see `.nvmrc`; `engines.node` ≥ 18) |
| Package manager | npm |

```bash
nvm use          # or: nvm use 20
npm install
cp .env.example .env   # optional for local chatbot / enquiry overrides
npm run dev
```

Open **http://localhost:4321/website/** (Astro default port; base path is `/website`).

## Build & preview

```bash
npm run build
npm start          # same as: npm run preview
```

- `build` → static HTML in `dist/`  
- `start` / `preview` → serves `dist/` **and** `POST /api/marketing-chatbot` (uses server-only `GROQ_API_KEY` from `.env`)  
- Open: **http://localhost:4321/website/** (or `http://HOST:$PORT/website/`)

There is no Express “app server” beyond this static + chatbot helper. On a VM:

```bash
npm install
cp .env.example .env   # set GROQ_* etc.
npm run build
npm start              # PORT=4321 by default
```

## Environment variables

| Name | Required | Example | Public vs server-only |
|------|----------|---------|------------------------|
| `PUBLIC_LEARNER_API_ORIGIN` | Recommended | `https://learner.ibridge360.com` | **Public** (client bundle) |
| `PUBLIC_ENQUIRY_TO_EMAIL` | Optional | `support@ibridge360.com` | **Public** |
| `PUBLIC_WEB3FORMS_KEY` | Optional | *(empty)* | **Public** |
| `GROQ_API_KEY` | Required for chatbot | *(from Groq console)* | **Server-only** — never `PUBLIC_` / `VITE_` |
| `GROQ_MODEL` | Optional | `qwen/qwen3.8-27b` | **Server-only** |

Copy from `.env.example`. Never commit `.env`. Never put Groq keys in `PUBLIC_*` or `VITE_*`.

## Key URLs

| What | URL |
|------|-----|
| Marketing home | `https://ibridge360.com/website/` |
| About | `https://ibridge360.com/website/about-us` |
| Programs index | `https://ibridge360.com/website/programs` |
| Thank-you (after enquire) | `https://ibridge360.com/website/thank-you` |
| Sitemap | `https://ibridge360.com/website/sitemap-index.xml` |
| Robots | `https://ibridge360.com/website/robots.txt` |
| Learner sign-in / explore | `https://learner.ibridge360.com` |
| Chatbot API (Vercel) | `POST /api/marketing-chatbot` (site root, not under `/website`) |

## Project layout (high level)

- `src/pages/` — Astro routes (real HTML per URL)  
- `src/components/`, `src/views/` — UI  
- `src/content/seo/` — titles, canonicals, redirects, sitemap filters  
- `public/wp-content/` — migrated static assets  
- `api/marketing-chatbot.js` — Vercel serverless chatbot handler  
- `vercel.json` — 301 redirects + `/website` → static file rewrites (not an SPA catch-all)

## Scripts

| Script | Purpose |
|--------|---------|
| `npm run dev` | Astro dev server |
| `npm run build` | Production static build |
| `npm run preview` | Local preview of `dist` + chatbot API |
