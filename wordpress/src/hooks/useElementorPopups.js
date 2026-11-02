import { useEffect, useRef } from 'react';

import { getCurrentProgramName, getEnquiryPageDefaults, getProgramNameFromQuery, consumePendingEnquiryContext } from '../utils/programContext';
import {
  ENQUIRE_POPUP_HREF,
  ENQUIRE_POPUP_ID,
  ENQUIRE_POPUP_CLOSE_EVENT,
} from '../constants/enquirePopupLink';

const PAGE_LOAD_POPUP_KEY = 'ibridge-page-load-popups';

const CLEAN_POPUP_HREFS = new Map([
  ['#enquire', ENQUIRE_POPUP_ID],
  ['#enquire-now', ENQUIRE_POPUP_ID],
]);

function parsePopupSettings(modal) {
  const popup = modal.querySelector('.elementor-location-popup');
  if (!popup) return {};

  try {
    const raw = popup.getAttribute('data-elementor-settings') || '{}';
    return JSON.parse(raw.replace(/&quot;/g, '"'));
  } catch {
    return {};
  }
}

function getDurationMs(settings) {
  const size = settings.entrance_animation_duration?.size;
  return typeof size === 'number' ? size * 1000 : 700;
}

function resetMessageStyles(message) {
  if (!message) return;
  message.classList.remove('animated', 'fadeIn', 'zoomIn', 'reverse');
  message.style.opacity = '';
  message.style.transform = '';
  message.style.animationDuration = '';
}

function parseActionHref(href) {
  if (!href) return null;

  const cleanId = CLEAN_POPUP_HREFS.get(href.split('?')[0]);
  if (cleanId) return cleanId;

  if (!href.includes('elementor-action')) return null;

  try {
    const decoded = decodeURIComponent(href.replace(/^#/, ''));
    const settingsMatch = decoded.match(/settings=([^&]+)/);
    if (!settingsMatch) return null;
    const data = JSON.parse(atob(settingsMatch[1]));
    return data.id ? String(data.id) : null;
  } catch {
    return null;
  }
}

function resolvePopupIdFromTrigger(trigger) {
  if (!trigger) return null;

  const dataId = trigger.getAttribute('data-open-popup');
  if (dataId) return String(dataId);

  const href = trigger.getAttribute('href');
  return parseActionHref(href);
}

function isEnquireTrigger(element) {
  if (!element) return false;

  const button = element.closest('.elementor-button, a, button');
  if (!button) return false;

  return /enquire/i.test(button.textContent || '');
}

function hasShownPageLoadPopup(popupId) {
  try {
    const shown = JSON.parse(sessionStorage.getItem(PAGE_LOAD_POPUP_KEY) || '[]');
    return Array.isArray(shown) && shown.includes(popupId);
  } catch {
    return false;
  }
}

function markPageLoadPopupShown(popupId) {
  try {
    const shown = JSON.parse(sessionStorage.getItem(PAGE_LOAD_POPUP_KEY) || '[]');
    const next = Array.isArray(shown) ? shown : [];
    if (!next.includes(popupId)) {
      next.push(popupId);
      sessionStorage.setItem(PAGE_LOAD_POPUP_KEY, JSON.stringify(next));
    }
  } catch {
    // ignore storage errors
  }
}

function pauseVideosInModal(modal) {
  if (!modal) return;

  modal.querySelectorAll('video').forEach((video) => {
    video.pause();
    video.currentTime = 0;
  });
}

function playVideosInModal(modal) {
  if (!modal) return;

  modal.querySelectorAll('video').forEach((video) => {
    const playPromise = video.play();
    if (playPromise?.catch) {
      playPromise.catch(() => {});
    }
  });
}

/**
 * Replaces Elementor Pro popup module: modal shell, triggers, and animations.
 */
function useElementorPopups() {
  const activePopupRef = useRef(null);
  const isAnimatingRef = useRef(false);

  useEffect(() => {
    const modals = Array.from(document.querySelectorAll('.elementor-popup-modal'));

    const closePopup = async (popupId) => {
      const targetId = popupId || activePopupRef.current;
      if (!targetId) return;

      const modal =
        document.getElementById(`elementor-popup-modal-${targetId}`) ||
        (activePopupRef.current
          ? document.getElementById(`elementor-popup-modal-${activePopupRef.current}`)
          : null);
      if (!modal) return;

      isAnimatingRef.current = false;
      const settings = parsePopupSettings(modal);
      const message = modal.querySelector('.dialog-message');
      const duration = Math.min(getDurationMs(settings), 300);

      modal.classList.remove('elementor-popup-modal--open');
      modal.style.transition = `opacity ${duration}ms ease`;
      modal.style.opacity = '0';

      await new Promise((resolve) => {
        window.setTimeout(resolve, duration);
      });

      resetMessageStyles(message);
      pauseVideosInModal(modal);

      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
      modal.style.opacity = '';
      modal.style.transition = '';
      document.body.classList.remove('elementor-popup-modal-open');

      if (activePopupRef.current === targetId || !popupId) {
        activePopupRef.current = null;
      }
    };

    const openPopup = async (popupId) => {
      if (isAnimatingRef.current) return;

      const modal = document.getElementById(`elementor-popup-modal-${popupId}`);
      if (!modal) return;

      if (activePopupRef.current && activePopupRef.current !== popupId) {
        await closePopup(activePopupRef.current);
      }

      if (activePopupRef.current === popupId) return;

      isAnimatingRef.current = true;
      const settings = parsePopupSettings(modal);
      const message = modal.querySelector('.dialog-message');
      const duration = getDurationMs(settings);

      resetMessageStyles(message);

      if (message) {
        const popupRoot = modal.querySelector('[data-elementor-type="popup"]');
        if (popupRoot) popupRoot.style.display = 'block';
      }

      modal.style.display = 'flex';
      modal.setAttribute('aria-hidden', 'false');
      modal.style.opacity = '0';
      document.body.classList.add('elementor-popup-modal-open');

      requestAnimationFrame(() => {
        modal.classList.add('elementor-popup-modal--open');
        modal.style.transition = `opacity ${duration}ms ease`;
        modal.style.opacity = '1';
      });

      activePopupRef.current = popupId;
      window.setTimeout(() => {
        isAnimatingRef.current = false;
      }, duration);

      if (popupId === ENQUIRE_POPUP_ID) {
        const pending = consumePendingEnquiryContext();
        const courseName =
          pending.courseName ||
          getProgramNameFromQuery() ||
          getEnquiryPageDefaults()?.courseName ||
          getCurrentProgramName();
        const coursePrice = pending.coursePrice || '';
        const isBrochure = Boolean(
          pending.isBrochure || enquirySource.toLowerCase().includes('brochure'),
        );
        window.dispatchEvent(
          new CustomEvent('enquire-popup-opened', {
            detail: { courseName, coursePrice, source: enquirySource, isBrochure },
          }),
        );
      }

      playVideosInModal(modal);
    };

    modals.forEach((modal) => {
      modal.style.display = 'none';
      pauseVideosInModal(modal);
    });

    const closeCleanups = modals.map((modal) => {
      const popupId = modal.id.replace('elementor-popup-modal-', '');
      const closeBtn = modal.querySelector('.dialog-close-button');

      const onClose = (event) => {
        event.preventDefault();
        closePopup(popupId);
      };

      const onBackdropClick = (event) => {
        if (event.target === modal) {
          closePopup(popupId);
        }
      };

      closeBtn?.addEventListener('click', onClose);
      modal.addEventListener('click', onBackdropClick);

      return () => {
        closeBtn?.removeEventListener('click', onClose);
        modal.removeEventListener('click', onBackdropClick);
      };
    });

    const onDocumentClick = (event) => {
      // 1. Close button click (intercept any close button or icon inside it)
      const closeBtn = event.target.closest(
        '.dialog-close-button, .dialog-lightbox-close-button, [data-close-popup]'
      );
      if (closeBtn) {
        event.preventDefault();
        event.stopPropagation();
        const modal = closeBtn.closest('.elementor-popup-modal');
        const popupId = modal?.id
          ? modal.id.replace('elementor-popup-modal-', '')
          : activePopupRef.current;
        closePopup(popupId || activePopupRef.current || ENQUIRE_POPUP_ID);
        return;
      }

      // 2. Backdrop click (clicking outside the modal box)
      if (
        event.target.classList.contains('elementor-popup-modal') ||
        event.target.classList.contains('dialog-lightbox-widget')
      ) {
        event.preventDefault();
        event.stopPropagation();
        const popupId = event.target.id
          ? event.target.id.replace('elementor-popup-modal-', '')
          : activePopupRef.current;
        closePopup(popupId || activePopupRef.current || ENQUIRE_POPUP_ID);
        return;
      }

      // 3. Open triggers
      const trigger = event.target.closest(
        'a[href*="elementor-action"], a[href="#enquire"], a[href="#enquire-now"], [data-open-popup]',
      );
      if (trigger) {
        event.preventDefault();
        const id = resolvePopupIdFromTrigger(trigger);
        if (id) openPopup(id);
        return;
      }

      if (isEnquireTrigger(event.target)) {
        const enquireBtn = event.target.closest('.elementor-button, a, button');
        const href = enquireBtn?.getAttribute('href');
        if (!href || href === '#' || CLEAN_POPUP_HREFS.has(href.split('?')[0])) {
          event.preventDefault();
          openPopup(ENQUIRE_POPUP_ID);
        }
      }
    };

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        closePopup(activePopupRef.current || ENQUIRE_POPUP_ID);
      }
    };

    const onCloseEnquireRequest = () => {
      closePopup(activePopupRef.current || ENQUIRE_POPUP_ID);
    };

    const onCustomClose = (event) => {
      const popupId = event.detail?.popupId || activePopupRef.current || ENQUIRE_POPUP_ID;
      closePopup(popupId);
    };

    document.addEventListener('click', onDocumentClick);
    document.addEventListener('keydown', onKeyDown);
    window.addEventListener(ENQUIRE_POPUP_CLOSE_EVENT, onCloseEnquireRequest);
    window.addEventListener('close-elementor-popup', onCustomClose);

    modals.forEach((modal) => {
      const settings = parsePopupSettings(modal);
      const popupId = modal.id.replace('elementor-popup-modal-', '');

      if (settings.triggers?.page_load !== 'yes') return;
      if (hasShownPageLoadPopup(popupId)) return;

      markPageLoadPopupShown(popupId);

      const delay = Number(settings.triggers.page_load_delay || 0) * 1000;
      window.setTimeout(() => {
        if (activePopupRef.current === popupId) return;
        openPopup(popupId);
      }, delay);
    });

    return () => {
      closeCleanups.forEach((cleanup) => cleanup());
      document.removeEventListener('click', onDocumentClick);
      document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener(ENQUIRE_POPUP_CLOSE_EVENT, onCloseEnquireRequest);
      window.removeEventListener('close-elementor-popup', onCustomClose);
      document.body.classList.remove('elementor-popup-modal-open');
    };
  }, []);
}

export default useElementorPopups;
export { ENQUIRE_POPUP_HREF, ENQUIRE_POPUP_ID };
