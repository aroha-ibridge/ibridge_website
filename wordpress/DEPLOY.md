# Deploy: GitHub → Vercel

Step-by-step for the **iBridge360 marketing site** (Astro static, base `/website`).

## 1. Push to GitHub

Prefer a **new private** repo (recommended). From this app folder (`wordpress/`):

```bash
# If not already a git repo:
git init
git branch -M main
git add .
git commit -m "Initial Astro static marketing site for iBridge360."

# Create private repo (example with gh), then:
gh repo create YOUR_ORG/ibridge_website --private --source=. --remote=origin
git push -u origin main
```

Or add a remote manually:

```bash
git remote add origin https://github.com/YOUR_ORG/ibridge_website.git
git push -u origin main
```

Do **not** commit `.env`, `node_modules/`, or `dist/`.

## 2. Import project in Vercel

1. Open [Vercel Dashboard](https://vercel.com/dashboard) → **Add New…** → **Project**.  
2. Import the GitHub repository.  
3. Confirm the settings below before deploying.

## 3. Framework & build settings

| Setting | Value |
|---------|--------|
| Framework Preset | **Astro** (or Other; `vercel.json` sets build/output) |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` (default) |
| Node.js Version | **20.x** (Project → Settings → General → Node.js Version; matches `.nvmrc`) |

## 4. Root directory (monorepo)

| How you connected GitHub | Root Directory |
|--------------------------|----------------|
| Repo **is** this app (only `package.json` at root) | *(leave empty)* |
| Parent monorepo contains this folder as `wordpress/` | **`wordpress`** |

This folder name is `wordpress` for historical reasons; the app is Astro static, **not** WordPress/PHP.

## 5. Environment variables

Set for **Production** and **Preview** (and Development if you use `vercel dev`):

| Variable | Environments | Notes |
|----------|--------------|--------|
| `PUBLIC_LEARNER_API_ORIGIN` | Production + Preview | `https://learner.ibridge360.com` |
| `PUBLIC_ENQUIRY_TO_EMAIL` | Production + Preview | e.g. `support@ibridge360.com` |
| `PUBLIC_WEB3FORMS_KEY` | Optional | Only if using Web3Forms |
| `GROQ_API_KEY` | Production + Preview | **Server-only** — chatbot |
| `GROQ_MODEL` | Optional | e.g. `groq/compound-mini` |

Never add Groq keys as `PUBLIC_*` or `VITE_*`.

## 6. Domain & `/website` base path

- Astro config: `site: https://ibridge360.com`, `base: '/website'`.  
- HTML asset and link URLs are prefixed with `/website`.  
- Build output files still live at the **root of `dist/`** (e.g. `dist/about-us/index.html`).  
- `vercel.json` **rewrites** map `/website` and `/website/:path*` → the matching files under `dist/` (path strip only — **not** an SPA rewrite of everything to `index.html`).  
- Live home: `https://ibridge360.com/website/`  
- Chatbot API stays at `https://ibridge360.com/api/marketing-chatbot` (no `/website` prefix).

If the marketing site shares the apex domain with other apps, ensure the host/CDN routes `/website/*` (and `/api/marketing-chatbot`) to this Vercel project.

## 7. Redirects

**Source of truth:** `vercel.json` → `redirects` (HTTP 301).

- Legacy paths without prefix (e.g. `/lms`) → canonical under `/website/...`.  
- Same aliases under `/website/...` are listed so base-path URLs also 301.  
- Astro also emits static redirect HTML for several aliases at build time; prefer verifying the Vercel 301 in Network tab after deploy.

## 8. Chatbot / API (`GROQ_API_KEY`)

- Handler: `api/marketing-chatbot.js` (Vercel Serverless Function).  
- Shared logic: `src/server/marketingChatbotHandler.js`.  
- Client calls `POST /api/marketing-chatbot` (absolute path from site origin).  
- Set **`GROQ_API_KEY`** (and optional `GROQ_MODEL`) only in Vercel Environment Variables — never in the client bundle or git.

Local preview with chatbot: `npm run build && npm run preview` (loads `.env`).

## 9. Post-deploy checklist

Open and confirm:

1. `https://ibridge360.com/website/` — content + images (`/website/wp-content/...`)  
2. `/website/about-us` — unique title in View Source  
3. One program (e.g. `/website/courses/data-engineering`) — Course + FAQ JSON-LD in source  
4. Enquire form → redirect to `/website/thank-you`  
5. `/website/sitemap-index.xml` — URLs include `/website`, no thank-you/terms/privacy/training  
6. `/website/robots.txt` — Sitemap line points at `.../website/sitemap-index.xml`  
7. View Source on home: one `<h1>`, correct `<title>`, canonical `https://ibridge360.com/website`  
8. Unknown path returns custom 404 (not a blank SPA shell)  
9. Chatbot reply works (GROQ key set)  
10. Self-learning / programs data loads from learner API  

## 10. Google Search Console after go-live

1. Confirm property for `https://ibridge360.com` (or URL-prefix as applicable).  
2. Submit sitemap: `https://ibridge360.com/website/sitemap-index.xml`  
3. URL Inspection on at least 5 URLs: home, about, one program, one blog, thank-you (expect **noindex** on thank-you).  
4. Confirm real HTML (not client-only shell) and unique titles.

## 11. Rollback notes

- **Instant:** Vercel → Project → Deployments → previous Production deployment → **Promote to Production**.  
- **Git:** revert or redeploy the last known-good commit on `main`.  
- **Env mistake:** fix variables and **Redeploy** (env changes do not apply to an old deployment until rebuilt).  
- Keep `vercel.json` redirects when rolling back unless the old build expected different paths.

## Exact Vercel settings (summary)

```
Framework:        Astro (or Other)
Root Directory:   wordpress   # only if monorepo parent; else blank
Build Command:    npm run build
Output Directory: dist
Node.js:          20.x

Env (Production + Preview):
  PUBLIC_LEARNER_API_ORIGIN=https://learner.ibridge360.com
  PUBLIC_ENQUIRY_TO_EMAIL=support@ibridge360.com
  PUBLIC_WEB3FORMS_KEY=          # optional
  GROQ_API_KEY=                  # server-only, required for chatbot
  GROQ_MODEL=groq/compound-mini  # optional
```
