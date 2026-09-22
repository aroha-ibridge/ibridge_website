import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { fileURLToPath } from 'node:url';
import { loadEnv } from 'vite';
import { SEO_REDIRECTS } from './src/content/seo/seoRedirects.js';
import { getIndexableSeoPages, SITE_ORIGIN } from './src/content/seo/pageSeoData.js';
import { SITE_BASE } from './src/utils/siteBase.js';
import {
  handleMarketingChatbot,
  readJsonBody,
} from './src/server/marketingChatbotHandler.js';

const shimRouter = fileURLToPath(new URL('./src/shims/react-router-dom.jsx', import.meta.url));
const shimHelmet = fileURLToPath(new URL('./src/shims/react-helmet-async.jsx', import.meta.url));
const srcRoot = fileURLToPath(new URL('./src', import.meta.url));
const projectRoot = fileURLToPath(new URL('.', import.meta.url));

// Ensure GROQ_* from .env is on process.env for the Vite middleware
const loadedEnv = loadEnv(process.env.NODE_ENV || 'development', projectRoot, '');
for (const [k, v] of Object.entries(loadedEnv)) {
  if (process.env[k] === undefined) process.env[k] = v;
}

const LEARNER_ORIGIN = 'https://learner.ibridge360.com';
const pathSep = process.platform === 'win32' ? '\\' : '/';

const redirectMap = Object.fromEntries(
  SEO_REDIRECTS.map(([from, to]) => [
    from,
    { status: 301, destination: to },
  ]),
);

const indexableUrls = new Set(getIndexableSeoPages().map((p) => p.canonicalUrl));

/** Rewrite root-absolute /wp-content/... strings so public assets load under base. */
function prefixPublicAssetsPlugin(basePath) {
  const prefix = basePath.replace(/\/+$/, '');
  if (!prefix || prefix === '/') {
    return { name: 'prefix-public-assets-noop' };
  }

  return {
    name: 'prefix-public-assets',
    transform(code, id) {
      if (!id.includes('/src/') && !id.includes(`${pathSep}src${pathSep}`)) return null;
      if (id.includes('node_modules')) return null;
      if (!code.includes('/wp-content/')) return null;

      const next = code.replace(/(["'`])\/wp-content\//g, `$1${prefix}/wp-content/`);
      if (next === code) return null;
      return { code: next, map: null };
    },
  };
}
function marketingChatbotDevPlugin() {
  return {
    name: 'marketing-chatbot-dev',
    configureServer(server) {
      // Keep API at site root — never under /website
      server.middlewares.use('/api/marketing-chatbot', async (req, res, next) => {
        if (req.method === 'OPTIONS') {
          res.statusCode = 204;
          res.end();
          return;
        }
        if (req.method !== 'POST') {
          next();
          return;
        }

        try {
          const body = await readJsonBody(req);
          const result = await handleMarketingChatbot(body);
          res.statusCode = result.status;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(result.json));
        } catch (err) {
          res.statusCode = err.status || 500;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: err.message || 'Chatbot request failed' }));
        }
      });
    },
  };
}

export default defineConfig({
  site: SITE_ORIGIN,
  base: SITE_BASE,
  output: 'static',
  trailingSlash: 'never',
  integrations: [
    react(),
    sitemap({
      filter: (page) => {
        if (page.includes('/thank-you')) return false;
        if (page.includes('/terms-conditions')) return false;
        if (page.includes('/privacy-policy')) return false;
        if (page.includes('/training/')) return false;
        if (page.includes('/404')) return false;
        const normalized = page.replace(/\/+$/, '');
        const homeCanon = `${SITE_ORIGIN}${SITE_BASE}`;
        if (normalized === homeCanon || normalized === SITE_ORIGIN) {
          return indexableUrls.has(homeCanon);
        }
        return indexableUrls.has(normalized) || indexableUrls.has(`${normalized}/`);
      },
    }),
  ],
  redirects: redirectMap,
  vite: {
    plugins: [prefixPublicAssetsPlugin(SITE_BASE), marketingChatbotDevPlugin()],
    resolve: {
      alias: {
        'react-router-dom': shimRouter,
        'react-helmet-async': shimHelmet,
        '@': srcRoot,
      },
    },
    server: {
      proxy: {
        '/api/programs': {
          target: LEARNER_ORIGIN,
          changeOrigin: true,
          secure: true,
        },
        '/api/marketing-enquiries': {
          target: LEARNER_ORIGIN,
          changeOrigin: true,
          secure: true,
        },
      },
    },
    css: {
      postcss: './postcss.config.js',
    },
  },
});
