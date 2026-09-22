/**
 * Public API base for marketing enquiries + programs.
 * Prefer learner platform in production; allow override via env.
 */
const fromEnv =
  (typeof import.meta !== 'undefined' &&
    (import.meta.env?.PUBLIC_LEARNER_API_ORIGIN ||
      import.meta.env?.PUBLIC_API_ORIGIN ||
      import.meta.env?.VITE_LEARNER_API_ORIGIN)) ||
  '';

export const LEARNER_API_ORIGIN =
  (fromEnv && String(fromEnv).replace(/\/+$/, '')) || 'https://learner.ibridge360.com';

export function learnerApiUrl(path = '') {
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${LEARNER_API_ORIGIN}${p}`;
}
