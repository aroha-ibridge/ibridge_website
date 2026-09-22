/**
 * No-op shim — page meta is owned by BaseLayout.astro + pageSeoData.js.
 * Keeps existing Helmet imports from crashing during SSR.
 */
export function Helmet({ children }) {
  return null;
}

export function HelmetProvider({ children }) {
  return children;
}

export default { Helmet, HelmetProvider };
