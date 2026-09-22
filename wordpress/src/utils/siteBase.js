/**
 * Site URL prefix helpers for Astro `base: '/website'`.
 * Logical routes stay unprefixed (`/about-us`); public hrefs use withBase().
 */

export const SITE_BASE = '/website';

function readBaseUrl() {
  if (typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL) {
    return import.meta.env.BASE_URL;
  }
  return `${SITE_BASE}/`;
}

/** Base without trailing slash, e.g. `/website`. */
export function getBasePath() {
  return readBaseUrl().replace(/\/+$/, '') || SITE_BASE;
}

/**
 * Prefix an internal path with the site base.
 * - `/` → `/website/` (home must keep a trailing slash)
 * - `/about-us` → `/website/about-us`
 * - External / mailto / hash / already-prefixed paths are left alone
 */
export function withBase(path = '/') {
  if (path == null || path === '') return `${getBasePath()}/`;
  if (typeof path !== 'string') return `${getBasePath()}/`;

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

  if (path === base || path === `${base}/`) {
    return `${base}/`;
  }

  if (path.startsWith(`${base}/`)) {
    return path === `${base}/` ? `${base}/` : path.replace(/\/+$/, '') || `${base}/`;
  }

  if (path === '/') {
    return `${base}/`;
  }

  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`.replace(/\/+$/, '') || `${base}/`;
}

/** Strip `/website` from a browser pathname so app logic sees `/about-us`. */
export function stripBase(pathname = '/') {
  if (typeof pathname !== 'string' || !pathname) return '/';

  const base = getBasePath();
  let path = pathname;

  if (path === base || path === `${base}/`) {
    return '/';
  }

  if (path.startsWith(`${base}/`)) {
    path = path.slice(base.length) || '/';
  }

  return path.replace(/\/+$/, '') || '/';
}

/** Absolute https URL for a logical site path (canonicals, JSON-LD). */
export function absoluteSiteUrl(origin, path = '/') {
  if (!path) return undefined;
  if (/^https?:\/\//i.test(path)) return path;

  const prefixed = withBase(path);
  // Home canonical: https://ibridge360.com/website (no trailing slash)
  const normalized =
    prefixed === `${getBasePath()}/` || prefixed === getBasePath()
      ? getBasePath()
      : prefixed.replace(/\/+$/, '');

  return `${origin}${normalized}`;
}
