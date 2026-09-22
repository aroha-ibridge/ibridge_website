import { ELEMENTOR_STYLESHEETS } from './elementorStylesheets';
import { withBase } from '../utils/siteBase';

/** Layout-critical CSS — splash waits for these; remaining sheets load in parallel. */
export const CRITICAL_ELEMENTOR_STYLESHEETS = [
  '/wp-content/themes/hello-elementor/assets/css/reset08cb.css',
  '/wp-content/themes/hello-elementor/assets/css/theme08cb.css',
  '/wp-content/themes/hello-elementor/assets/css/header-footer08cb.css',
  '/wp-content/plugins/elementor/assets/css/frontend.min81e1.css',
  '/wp-content/uploads/elementor/css/global.css',
  '/wp-content/plugins/elementor-pro/assets/css/frontend.min225e.css',
  '/wp-content/plugins/elementskit-lite/widgets/init/assets/css/widget-styles3621.css',
  '/wp-content/plugins/elementskit-lite/widgets/init/assets/css/responsive3621.css',
  '/wp-content/uploads/elementor/css/post-21289826a.css',
  '/wp-content/uploads/elementor/css/post-211676fa3.css',
  '/wp-content/plugins/elementor/assets/css/widget-heading.min81e1.css',
  '/wp-content/plugins/elementor/assets/css/widget-image.min81e1.css',
  '/wp-content/plugins/elementor/assets/css/widget-icon-list.min81e1.css',
];

const ATTR = 'data-marketing-stylesheet';
const READY_CLASS = 'marketing-styles-ready';
const PENDING_CLASS = 'marketing-styles-pending';

let injectStarted = false;
let readyPromise = null;

function injectStylesheet(href) {
  const resolved = withBase(href);
  const existing = Array.from(document.head.querySelectorAll(`link[${ATTR}]`)).find(
    (node) => node.getAttribute('href') === resolved,
  );
  if (existing) return existing;

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = resolved;
  link.setAttribute(ATTR, 'true');
  document.head.appendChild(link);
  return link;
}

function waitForLink(link) {
  return new Promise((resolve) => {
    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      link.dataset.loaded = '1';
      resolve();
    };

    if (link.dataset.loaded === '1') {
      finish();
      return;
    }

    try {
      if (link.sheet) {
        finish();
        return;
      }
    } catch {
      /* cross-origin sheet access — wait for load */
    }

    link.addEventListener('load', finish, { once: true });
    link.addEventListener('error', finish, { once: true });

    // Cached stylesheets sometimes skip firing `load`
    let tries = 0;
    const poll = window.setInterval(() => {
      try {
        if (link.sheet) {
          window.clearInterval(poll);
          finish();
          return;
        }
      } catch {
        /* ignore */
      }
      if (++tries > 40) {
        window.clearInterval(poll);
        finish();
      }
    }, 50);
  });
}

export function setMarketingStylesheetsActive(active) {
  if (typeof document === 'undefined') return;

  document.head.querySelectorAll(`link[${ATTR}]`).forEach((link) => {
    // Keep in DOM (avoids re-FOUC) but disable outside marketing routes
    link.media = active ? 'all' : 'not all';
    link.disabled = !active;
  });
}

/**
 * Inject all Elementor/WP marketing stylesheets once (never remove — avoids re-FOUC).
 * Resolves when critical CSS can style the shell, or after timeout.
 */
export function ensureMarketingStyles({ timeoutMs = 4000 } = {}) {
  if (typeof document === 'undefined') {
    return Promise.resolve();
  }

  if (!injectStarted) {
    injectStarted = true;
    // Do NOT add marketing-styles-pending — BaseLayout already links Elementor CSS.
    // Pending + opacity:0 was blanking the whole shell after Astro hydration.
    ELEMENTOR_STYLESHEETS.forEach((href) => injectStylesheet(href));
  }

  setMarketingStylesheetsActive(true);

  if (readyPromise) return readyPromise;

  readyPromise = new Promise((resolve) => {
    const criticalHrefs = CRITICAL_ELEMENTOR_STYLESHEETS.filter((href) =>
      ELEMENTOR_STYLESHEETS.includes(href),
    );
    const links = criticalHrefs.map((href) => injectStylesheet(href));
    const settled = Promise.all(links.map((link) => waitForLink(link)));

    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      window.clearTimeout(timeout);
      document.documentElement.classList.add(READY_CLASS);
      document.documentElement.classList.remove(PENDING_CLASS);
      document.body?.classList.add(READY_CLASS);
      resolve();
    };

    const timeout = window.setTimeout(finish, timeoutMs);
    settled.then(finish).catch(finish);
  });

  return readyPromise;
}

/** Start fetching styles as early as possible (only while on marketing). */
export function prefetchMarketingStyles() {
  if (typeof document === 'undefined') return;
  ensureMarketingStyles();
}

export function areMarketingStylesReady() {
  return typeof document !== 'undefined' && document.documentElement.classList.contains(READY_CLASS);
}
