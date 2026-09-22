import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const MOBILE_BREAKPOINT = 767;
const PORTAL_CLASS = 'elementor-mobile-nav-portaled';
const BACKDROP_ID = 'elementor-mobile-nav-backdrop';

function isMobileHeader() {
  return window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).matches;
}

function getDropdownNav(toggle) {
  const widget = toggle?.closest('.elementor-widget-nav-menu');
  if (!widget) return document.querySelector(`.${PORTAL_CLASS}`);

  return (
    widget.querySelector('nav.elementor-nav-menu--dropdown.elementor-nav-menu__container') ||
    document.querySelector(`.${PORTAL_CLASS}`)
  );
}

function applyDropdownStyles(dropdown) {
  dropdown.style.setProperty('display', 'block', 'important');
  dropdown.style.setProperty('visibility', 'visible', 'important');
  dropdown.style.setProperty('opacity', '1', 'important');
  dropdown.style.setProperty('position', 'fixed', 'important');
  dropdown.style.setProperty('top', '64px', 'important');
  dropdown.style.setProperty('left', '0', 'important');
  dropdown.style.setProperty('right', '0', 'important');
  dropdown.style.setProperty('bottom', 'auto', 'important');
  dropdown.style.setProperty('width', '100vw', 'important');
  dropdown.style.setProperty('max-width', '100vw', 'important');
  dropdown.style.setProperty('min-width', '100vw', 'important');
  dropdown.style.setProperty('height', 'auto', 'important');
  dropdown.style.setProperty('max-height', 'calc(100dvh - 64px)', 'important');
  dropdown.style.setProperty('margin', '0', 'important');
  dropdown.style.setProperty('padding', '8px 0 16px', 'important');
  dropdown.style.setProperty('transform', 'none', 'important');
  dropdown.style.setProperty('overflow-x', 'hidden', 'important');
  dropdown.style.setProperty('overflow-y', 'auto', 'important');
  dropdown.style.setProperty('background', '#ffffff', 'important');
  dropdown.style.setProperty('z-index', '100000', 'important');
  dropdown.style.setProperty('box-shadow', '0 12px 28px rgba(15, 23, 42, 0.12)', 'important');
}

function clearDropdownStyles(dropdown) {
  [
    'display',
    'visibility',
    'opacity',
    'position',
    'top',
    'left',
    'right',
    'bottom',
    'width',
    'max-width',
    'min-width',
    'height',
    'max-height',
    'margin',
    'padding',
    'transform',
    'overflow-x',
    'overflow-y',
    'background',
    'z-index',
    'box-shadow',
  ].forEach((prop) => dropdown.style.removeProperty(prop));
}

function ensureBackdrop() {
  let backdrop = document.getElementById(BACKDROP_ID);
  if (backdrop) return backdrop;

  backdrop = document.createElement('div');
  backdrop.id = BACKDROP_ID;
  backdrop.setAttribute('aria-hidden', 'true');
  Object.assign(backdrop.style, {
    position: 'fixed',
    inset: '0',
    background: 'rgba(15, 23, 42, 0.35)',
    zIndex: '99999',
    display: 'none',
  });
  document.body.appendChild(backdrop);
  return backdrop;
}

function setBackdropVisible(visible) {
  const backdrop = ensureBackdrop();
  backdrop.style.display = visible ? 'block' : 'none';
}

function closeSubmenu(item) {
  item.classList.remove('menu-open');
  const anchor = item.querySelector(':scope > a.elementor-item');
  anchor?.classList.remove('highlighted');
  anchor?.setAttribute('aria-expanded', 'false');
}

function toggleSubmenu(item) {
  const anchor = item.querySelector(':scope > a.elementor-item');
  const isOpen = item.classList.contains('menu-open');

  item.closest('.elementor-nav-menu')?.querySelectorAll('.menu-item-has-children.menu-open').forEach((openItem) => {
    if (openItem !== item) closeSubmenu(openItem);
  });

  item.classList.toggle('menu-open', !isOpen);
  anchor?.classList.toggle('highlighted', !isOpen);
  anchor?.setAttribute('aria-expanded', String(!isOpen));
}

function portalDropdown(dropdown, open) {
  if (!dropdown) return;

  if (open) {
    if (!dropdown.classList.contains(PORTAL_CLASS)) {
      const placeholder = document.createComment('elementor-mobile-nav-anchor');
      dropdown.parentNode?.insertBefore(placeholder, dropdown);
      dropdown._mobileNavPlaceholder = placeholder;
      document.body.appendChild(dropdown);
      dropdown.classList.add(PORTAL_CLASS);
    }
    applyDropdownStyles(dropdown);
    return;
  }

  clearDropdownStyles(dropdown);

  if (!dropdown.classList.contains(PORTAL_CLASS)) return;

  const placeholder = dropdown._mobileNavPlaceholder;
  if (placeholder?.parentNode) {
    placeholder.parentNode.insertBefore(dropdown, placeholder);
    placeholder.remove();
  }
  dropdown.classList.remove(PORTAL_CLASS);
  delete dropdown._mobileNavPlaceholder;
}

function setMobileMenuOpen(toggle, open) {
  const dropdown = getDropdownNav(toggle);

  toggle.classList.toggle('elementor-active', open);
  toggle.setAttribute('aria-expanded', String(open));

  if (dropdown) {
    dropdown.setAttribute('aria-hidden', String(!open));
    if (isMobileHeader()) {
      portalDropdown(dropdown, open);
    }
  }

  setBackdropVisible(open && isMobileHeader());
  document.body.classList.toggle('mobile-nav-open', open);
}

function closeAllMobileMenus() {
  document.querySelectorAll('.elementor-menu-toggle.elementor-active').forEach((toggle) => {
    setMobileMenuOpen(toggle, false);
  });
  document.querySelectorAll(`.${PORTAL_CLASS}`).forEach((dropdown) => {
    portalDropdown(dropdown, false);
    dropdown.setAttribute('aria-hidden', 'true');
  });
  document.querySelectorAll('.elementor-nav-menu .menu-item-has-children.menu-open').forEach(closeSubmenu);
  setBackdropVisible(false);
  document.body.classList.remove('mobile-nav-open');
}

/**
 * Full-width mobile dropdown for Elementor burger menu (no left drawer).
 */
export default function useElementorNavMenu() {
  const { pathname } = useLocation();

  useEffect(() => {
    closeAllMobileMenus();
  }, [pathname]);

  useEffect(() => {
    const cleanups = [];
    const backdrop = ensureBackdrop();

    const onBackdropClick = () => closeAllMobileMenus();
    backdrop.addEventListener('click', onBackdropClick);
    cleanups.push(() => backdrop.removeEventListener('click', onBackdropClick));

    document.querySelectorAll('.elementor-menu-toggle').forEach((toggle) => {
      const onToggle = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setMobileMenuOpen(toggle, !toggle.classList.contains('elementor-active'));
      };

      toggle.addEventListener('click', onToggle);
      toggle.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onToggle(event);
        }
      });

      cleanups.push(() => toggle.removeEventListener('click', onToggle));
    });

    const onSubmenuClick = (event) => {
      const anchor = event.target.closest(
        `.${PORTAL_CLASS} .menu-item-has-children > a.elementor-item, .elementor-nav-menu--dropdown.elementor-nav-menu__container .menu-item-has-children > a.elementor-item`,
      );
      if (!anchor) return;
      if (event.target.closest('.elementor-sub-item')) return;

      const item = anchor.parentElement;
      if (!item?.classList.contains('menu-item-has-children')) return;

      const href = anchor.getAttribute('href');
      const hasRealHref =
        Boolean(href) && href !== '#' && !href.startsWith('javascript:');

      // Parent items with a real path (e.g. Programs → /programs) should navigate
      if (hasRealHref) {
        closeAllMobileMenus();
        return;
      }

      event.preventDefault();
      toggleSubmenu(item);
    };
    document.addEventListener('click', onSubmenuClick);
    cleanups.push(() => document.removeEventListener('click', onSubmenuClick));

    const onResize = () => {
      if (!isMobileHeader()) closeAllMobileMenus();
    };
    window.addEventListener('resize', onResize);
    cleanups.push(() => window.removeEventListener('resize', onResize));

    return () => {
      closeAllMobileMenus();
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);
}
