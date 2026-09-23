/**
 * Local preview: static dist/ + POST /api/marketing-chatbot (Groq key stays server-side).
 * astro preview alone cannot host API routes with output: 'static'.
 */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadEnv } from 'vite';
import { handleMarketingChatbot, readJsonBody } from '../src/server/marketingChatbotHandler.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const dist = path.join(root, 'dist');
const port = Number(process.env.PORT || 4321);

if (!fs.existsSync(dist) || !fs.existsSync(path.join(dist, 'index.html'))) {
  console.error(
    [
      'Missing production build in dist/.',
      'Run this first, then start again:',
      '  npm run build',
      '  npm start',
    ].join('\n'),
  );
  process.exit(1);
}

const env = loadEnv(process.env.NODE_ENV || 'development', root, '');
for (const [k, v] of Object.entries(env)) {
  if (process.env[k] === undefined) process.env[k] = v;
}

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.map': 'application/json',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml',
};

function sendJson(res, status, json) {
  const body = JSON.stringify(json);
  res.writeHead(status, {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(body),
  });
  res.end(body);
}

function safeJoin(base, reqPath) {
  const decoded = decodeURIComponent(reqPath.split('?')[0]);
  const cleaned = path.normalize(decoded).replace(/^(\.\.[/\\])+/, '');
  const full = path.join(base, cleaned);
  if (!full.startsWith(base)) return null;
  return full;
}

/** Strip Astro `base: '/website'` so /website/about-us maps to dist/about-us. */
function stripSiteBase(urlPath) {
  if (urlPath === '/website' || urlPath === '/website/') return '/';
  if (urlPath.startsWith('/website/')) return urlPath.slice('/website'.length) || '/';
  return urlPath;
}

function resolveFile(rawUrlPath) {
  const urlPath = stripSiteBase(rawUrlPath);
  let filePath = safeJoin(dist, urlPath === '/' ? '/index.html' : urlPath);
  if (!filePath) return null;

  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    return filePath;
  }

  // trailingSlash never → /about-us → about-us/index.html
  const asIndex = safeJoin(dist, `${urlPath.replace(/\/$/, '')}/index.html`);
  if (asIndex && fs.existsSync(asIndex) && fs.statSync(asIndex).isFile()) {
    return asIndex;
  }

  const notFound = path.join(dist, '404.html');
  return fs.existsSync(notFound) ? notFound : null;
}

const server = http.createServer(async (req, res) => {
  const url = req.url || '/';

  if (url.startsWith('/api/marketing-chatbot')) {
    if (req.method === 'OPTIONS') {
      res.writeHead(204, {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      });
      return res.end();
    }
    if (req.method !== 'POST') {
      return sendJson(res, 405, { error: 'Method not allowed' });
    }
    try {
      const body = await readJsonBody(req);
      const result = await handleMarketingChatbot(body);
      return sendJson(res, result.status, result.json);
    } catch (err) {
      return sendJson(res, err.status || 500, { error: err.message || 'Chatbot request failed' });
    }
  }

  const pathname = url.split('?')[0];
  const filePath = resolveFile(pathname);
  if (!filePath) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    return res.end('Not found');
  }

  const ext = path.extname(filePath).toLowerCase();
  const logicalPath = stripSiteBase(pathname);
  const status =
    filePath.endsWith(`${path.sep}404.html`) && logicalPath !== '/404' ? 404 : 200;
  res.writeHead(status, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
  fs.createReadStream(filePath).pipe(res);
});

server.listen(port, () => {
  console.log(`Preview + chatbot API: http://localhost:${port}/website/`);
  console.log(`(Also accepts unprefixed paths for convenience.)`);
  console.log(`GROQ_API_KEY: ${process.env.GROQ_API_KEY ? 'set' : 'MISSING'}`);
  console.log(`GROQ_MODEL: ${process.env.GROQ_MODEL || '(default)'}`);
});
