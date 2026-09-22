import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TABLET_BREAKPOINT = 1024;

function isTabletOrBelow() {
  return window.matchMedia(`(max-width: ${TABLET_BREAKPOINT}px)`).matches;
}

function closeMegamenu(item) {
  item.classList.remove('elementskit-dropdown-open');
  item.querySelector('.elementskit-megamenu-panel')?.classList.remove('elementskit-dropdown-open');
}

function toggleMegamenu(item) {
  const panel = item.querySelector('.elementskit-megamenu-panel');
  const isOpen = item.classList.contains('elementskit-dropdown-open');

  document.querySelectorAll('.elementskit-megamenu-has.elementskit-dropdown-open').forEach((openItem) => {
    if (openItem !== item) closeMegamenu(openItem);
  });

  item.classList.toggle('elementskit-dropdown-open', !isOpen);
  panel?.classList.toggle('elementskit-dropdown-open', !isOpen);
}

function setOffcanvasOpen(open) {
  const menu = document.getElementById('ekit-megamenu-demo-menu');
  const elementskitOverlay = document.querySelector('.elementskit-menu-overlay');
  const ekitOverlay = document.querySelector('.ekit-menu-overlay');

  menu?.classList.toggle('active', open);
  elementskitOverlay?.classList.toggle('active', open);
  ekitOverlay?.classList.toggle('active', open);
  document.body.classList.toggle('mobile-nav-open', open);
}

/**
 * Replaces ElementsKit nav-menu JS for hamburger + megamenu toggles on tablet/mobile.
 */
export default function useElementskitNavMenu() {
  const { pathname } = useLocation();

  useEffect(() => {
    setOffcanvasOpen(false);
    document.querySelectorAll('.elementskit-megamenu-has.elementskit-dropdown-open').forEach(closeMegamenu);
  }, [pathname]);

  useEffect(() => {
    const cleanups = [];

    document.querySelectorAll('.elementskit-menu-toggler').forEach((toggle) => {
      const onToggle = (event) => {
        event.preventDefault();
        const menu = document.getElementById('ekit-megamenu-demo-menu');
        setOffcanvasOpen(!menu?.classList.contains('active'));
      };

      toggle.addEventListener('click', onToggle);
      cleanups.push(() => toggle.removeEventListener('click', onToggle));
    });

    document.querySelectorAll('.elementskit-megamenu-has').forEach((item) => {
      const link = item.querySelector(':scope > .ekit-menu-nav-link');
      if (!link) return;

      const onLinkClick = (event) => {
        if (!isTabletOrBelow()) return;

        const href = link.getAttribute('href');
        const hasRealHref =
          Boolean(href) && href !== '#' && !href.startsWith('javascript:');
        const clickedIndicator = Boolean(
          event.target.closest('.elementskit-submenu-indicator'),
        );

        // Real links (e.g. Programs → /programs): text navigates; arrow toggles submenu
        if (hasRealHref && !clickedIndicator) {
          setOffcanvasOpen(false);
          closeMegamenu(item);
          return;
        }

        event.preventDefault();
        toggleMegamenu(item);
      };

      link.addEventListener('click', onLinkClick);
      cleanups.push(() => link.removeEventListener('click', onLinkClick));
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);
}
