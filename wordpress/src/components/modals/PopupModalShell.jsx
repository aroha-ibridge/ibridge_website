import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const CLOSE_ICON = (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 1 0 5.7 7.11L10.59 12l-4.89 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z" />
  </svg>
);

function PopupModalShell({ popupId, children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <div
      id={`elementor-popup-modal-${popupId}`}
      className="dialog-widget dialog-lightbox-widget dialog-type-lightbox elementor-popup-modal"
      aria-hidden="true"
    >
      <div className="dialog-widget-content dialog-lightbox-widget-content">
        <a
          href="#"
          className="dialog-close-button dialog-lightbox-close-button"
          role="button"
          aria-label="Close"
        >
          {CLOSE_ICON}
          <span className="elementor-screen-only">Close</span>
        </a>
        <div className="dialog-message dialog-lightbox-message">{children}</div>
      </div>
    </div>,
    document.body,
  );
}

export default PopupModalShell;
