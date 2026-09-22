# Deploy checklist

## Pre-push

- [ ] `npm run build` succeeds locally  
- [ ] `.env` is not staged (`git check-ignore -v .env`)  
- [ ] No `gsk_` / Groq secrets in tracked files  
- [ ] `.gitignore` includes `node_modules`, `dist`, `.env`, `.astro`  
- [ ] `.env.example` lists `PUBLIC_*` + server-only `GROQ_*`  
- [ ] Login header buttons remain commented (use learner host only where intended)  

## Pre-Vercel

- [ ] GitHub remote connected; private repo preferred  
- [ ] Vercel Root Directory = `wordpress` if monorepo, else blank  
- [ ] Build: `npm run build` · Output: `dist` · Node: **20.x**  
- [ ] Env set for Production + Preview: `PUBLIC_LEARNER_API_ORIGIN`, `GROQ_API_KEY` (server-only)  
- [ ] Domain / proxy routes `/website/*` and `/api/marketing-chatbot` to this project  

## Post-deploy

- [ ] `/website/` loads (images under `/website/wp-content/...`)  
- [ ] `/website/about-us` + one program + one blog — unique title/description/canonical  
- [ ] Home View Source: one H1, correct title  
- [ ] Enquire → `/website/thank-you`  
- [ ] `/website/robots.txt` + `/website/sitemap-index.xml` look correct  
- [ ] thank-you / terms / privacy / training/* are noindex and absent from sitemap  
- [ ] 404 page works for a nonsense path under `/website/`  
- [ ] Chatbot responds (GROQ configured)  
- [ ] GSC: submit sitemap; inspect ~5 URLs  

See [DEPLOY.md](./DEPLOY.md) for full steps and [README.md](./README.md) for local/env details.
