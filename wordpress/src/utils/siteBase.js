/**
 * Site URL helpers for Astro `base: '/'` (domain root).
 * Logical routes and public hrefs share the same paths (`/about-us`).
 */

/** Empty when the site is served from the domain root. */
export const SITE_BASE = '';

function readBaseUrl() {
  if (typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL) {
    return import.meta.env.BASE_URL;
  }
  return SITE_BASE ? `${SITE_BASE}/` : '/';
}

/** Base without trailing slash. Empty string at domain root. */
export function getBasePath() {
  return readBaseUrl().replace(/\/+$/, '');
}

/**
 * Prefix an internal path with the site base (no-op at domain root).
 * - `/` → `/`
 * - `/about-us` → `/about-us`
 * - External / mailto / hash / already-prefixed paths are left alone
 */
export function withBase(path = '/') {
  if (path == null || path === '') return '/';
  if (typeof path !== 'string') return '/';

  if (
    /^https?:\/\//i.test(path) ||
    path.startsWith('mailto:') ||
    path.startsWith('tel:') ||
    path.startsWith('#') ||
    path.startsWith('data:') ||
    path.startsWith('blob:')
  ) {
    return path;
  }

  const base = getBasePath();
  const clean = path === '/' ? '/' : (path.startsWith('/') ? path : `/${path}`).replace(/\/+$/, '') || '/';

  if (!base) {
    return clean;
  }

  if (path === base || path === `${base}/`) {
    return `${base}/`;
  }

  if (path.startsWith(`${base}/`)) {
    return path === `${base}/` ? `${base}/` : path.replace(/\/+$/, '') || `${base}/`;
  }

  if (clean === '/') {
    return `${base}/`;
  }

  return `${base}${clean}`.replace(/\/+$/, '') || `${base}/`;
}

/** Normalize a browser pathname for app logic (strips base when present). */
export function stripBase(pathname = '/') {
  if (typeof pathname !== 'string' || !pathname) return '/';

  let path = pathname;

  // Legacy `/website` prefix (pre-root migration) — safe no-op when already at root
  if (path === '/website' || path === '/website/') {
    return '/';
  }
  if (path.startsWith('/website/')) {
    path = path.slice('/website'.length) || '/';
  }

  const base = getBasePath();
  if (base) {
    if (path === base || path === `${base}/`) {
      return '/';
    }
    if (path.startsWith(`${base}/`)) {
      path = path.slice(base.length) || '/';
    }
  }

  return path.replace(/\/+$/, '') || '/';
}

/** Absolute https URL for a logical site path (canonicals, JSON-LD). */
export function absoluteSiteUrl(origin, path = '/') {
  if (!path) return undefined;
  if (/^https?:\/\//i.test(path)) return path;

  const prefixed = withBase(path);
  // Home canonical: https://ibridge360.com (origin only, no trailing slash)
  if (prefixed === '/' || prefixed === '' || (getBasePath() && (prefixed === getBasePath() || prefixed === `${getBasePath()}/`))) {
    return getBasePath() ? `${origin}${getBasePath()}` : origin;
  }

  return `${origin}${prefixed.replace(/\/+$/, '')}`;
}
