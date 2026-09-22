/**
 * Drop-in shim for react-router-dom after Astro migration.
 * Link uses real <a href> so static HTML and crawlers see URLs.
 * Params / location come from RouterContext (set by SiteShell) or window.
 */
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  forwardRef,
} from 'react';

import { stripBase, withBase } from '../utils/siteBase.js';

export const RouterContext = createContext({
  pathname: '/',
  search: '',
  hash: '',
  params: {},
});

export function RouterProvider({ pathname = '/', search = '', hash = '', params = {}, children }) {
  const value = useMemo(
    () => ({
      pathname: pathname || '/',
      search: search || '',
      hash: hash || '',
      params: params || {},
    }),
    [pathname, search, hash, params],
  );
  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

function readWindowLocation() {
  if (typeof window === 'undefined') {
    return { pathname: '/', search: '', hash: '' };
  }
  return {
    pathname: stripBase(window.location.pathname.replace(/\/+$/, '') || '/'),
    search: window.location.search || '',
    hash: window.location.hash || '',
  };
}

export function useLocation() {
  const ctx = useContext(RouterContext);
  if (ctx?.pathname) {
    return { pathname: ctx.pathname, search: ctx.search || '', hash: ctx.hash || '', state: null };
  }
  return { ...readWindowLocation(), state: null };
}

export function useParams() {
  const ctx = useContext(RouterContext);
  return ctx?.params || {};
}

function toPublicHref(to) {
  const raw = typeof to === 'string' ? to : to?.pathname || '/';
  return withBase(raw);
}

export function useNavigate() {
  return useCallback((to, options = {}) => {
    if (typeof window === 'undefined') return;
    const href = toPublicHref(to);
    if (options.replace) {
      window.location.replace(href);
    } else {
      window.location.assign(href);
    }
  }, []);
}

export const Link = forwardRef(function Link(
  { to, href, children, className, onClick, replace, state, ...rest },
  ref,
) {
  const destination = href ?? (typeof to === 'string' ? to : to?.pathname || '/');
  const isExternal = /^https?:\/\//i.test(destination) || destination.startsWith('mailto:');
  const resolved = isExternal ? destination : withBase(destination);

  return (
    <a
      ref={ref}
      href={resolved}
      className={className}
      onClick={onClick}
      {...(isExternal ? { rel: rest.rel, target: rest.target } : {})}
      {...rest}
    >
      {children}
    </a>
  );
});

/** Host-level 301s should own redirects; this is a last-resort client fallback. */
export function Navigate({ to, replace = true }) {
  if (typeof window !== 'undefined') {
    const href = toPublicHref(to);
    if (replace) window.location.replace(href);
    else window.location.assign(href);
  }
  return null;
}

export function Outlet() {
  return null;
}

export function Routes({ children }) {
  return <>{children}</>;
}

export function Route() {
  return null;
}

export function BrowserRouter({ children }) {
  return <>{children}</>;
}

export function MemoryRouter({ children }) {
  return <>{children}</>;
}

export default {
  Link,
  Navigate,
  useNavigate,
  useLocation,
  useParams,
  Outlet,
  Routes,
  Route,
  BrowserRouter,
  RouterProvider,
  RouterContext,
};
