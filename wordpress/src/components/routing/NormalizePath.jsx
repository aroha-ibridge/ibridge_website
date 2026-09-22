import { Navigate, useLocation } from 'react-router-dom';

/**
 * Redirects mistyped URLs like `/courses/data-engineering.` to the clean path.
 */
function NormalizePath({ children }) {
  const location = useLocation();
  const normalizedPath = location.pathname.replace(/\.+$/, '') || '/';

  if (normalizedPath !== location.pathname) {
    return (
      <Navigate
        to={{ pathname: normalizedPath, search: location.search, hash: location.hash }}
        replace
      />
    );
  }

  return children;
}

export default NormalizePath;
