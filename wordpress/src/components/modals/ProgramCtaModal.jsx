import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { setPendingProgramName } from '../../utils/programContext';
import { PROOF_STATS } from '../../content/shared/proofStats';

const STORAGE_PREFIX = 'ibridge_program_cta_dismissed:';
const SESSION_STORAGE_PREFIX = 'ibridge_program_cta_dismissed_session:';

const DEFAULT_HIGHLIGHTS = [
  '1:1 mentorship from industry experts',
  'Real projects that mirror job workflows',
  'Dedicated placement & career support',
];

function getDismissalKey(programName, triggerSelector, scope = 'local') {
  const prefix = scope === 'session' ? SESSION_STORAGE_PREFIX : STORAGE_PREFIX;
  return `${prefix}${programName || triggerSelector}`;
}

function getDismissalStore(scope = 'local') {
  try {
    return scope === 'session' ? window.sessionStorage : window.localStorage;
  } catch {
    return null;
  }
}

function hasDismissedProgramCta(programName, triggerSelector, scope = 'local') {
  try {
    const store = getDismissalStore(scope);
    return store?.getItem(getDismissalKey(programName, triggerSelector, scope)) === '1';
  } catch {
    return false;
  }
}

function markProgramCtaDismissed(programName, triggerSelector, scope = 'local') {
  try {
    const store = getDismissalStore(scope);
    store?.setItem(getDismissalKey(programName, triggerSelector, scope), '1');
  } catch {
    // Ignore storage failures
  }
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true">
      <path
        fill="currentColor"
        d="M8.2 13.6L4.6 10l1.2-1.2 2.4 2.4 5.4-5.4L14.8 7l-6.6 6.6z"
      />
    </svg>
  );
}

/**
 * Auto-opening CTA modal for program pages — shared across all programs.
 * Optional `autoOpenDelay` opens after N ms when intersection never fires (short pages).
 */
function ProgramCtaModal({
  triggerSelector,
  title,
  description,
  ctaLabel = 'Talk to a Learning Advisor',
  programName = '',
  panelImage = '',
  panelImageAlt = '',
  highlights = DEFAULT_HIGHLIGHTS,
  eyebrow = 'Limited seats this month',
  panelTitle = 'iBridge360',
  panelSubtitle = 'Experiential learning · Career outcomes',
  autoOpenDelay = 0,
  dismissalScope = 'local',
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dismissedRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    if (hasDismissedProgramCta(programName, triggerSelector, dismissalScope)) {
      dismissedRef.current = true;
      return undefined;
    }

    let observer = null;
    let mutationObserver = null;
    let delayTimer = null;
    let cancelled = false;
    let hasOpened = false;

    const openModal = () => {
      if (cancelled || dismissedRef.current || hasOpened) return;
      hasOpened = true;
      setIsOpen(true);
      observer?.disconnect();
      if (delayTimer) window.clearTimeout(delayTimer);
    };

    const attachObserver = (target) => {
      if (!target || cancelled) return;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting && entry.intersectionRatio <= 0) return;
            openModal();
          });
        },
        {
          threshold: [0, 0.1],
          rootMargin: '0px 0px -20% 0px',
        },
      );

      observer.observe(target);
    };

    const initial = triggerSelector ? document.querySelector(triggerSelector) : null;
    if (initial) {
      attachObserver(initial);
    } else if (triggerSelector) {
      mutationObserver = new MutationObserver(() => {
        const found = document.querySelector(triggerSelector);
        if (found) {
          mutationObserver.disconnect();
          attachObserver(found);
        }
      });
      mutationObserver.observe(document.body, { childList: true, subtree: true });
    }

    if (Number(autoOpenDelay) > 0) {
      delayTimer = window.setTimeout(openModal, Number(autoOpenDelay));
    }

    return () => {
      cancelled = true;
      observer?.disconnect();
      mutationObserver?.disconnect();
      if (delayTimer) window.clearTimeout(delayTimer);
    };
  }, [triggerSelector, programName, autoOpenDelay, dismissalScope]);

  const dismissModal = () => {
    dismissedRef.current = true;
    markProgramCtaDismissed(programName, triggerSelector, dismissalScope);
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) return undefined;

    document.body.classList.add('program-cta-modal-open');
    const onKeyDown = (event) => {
      if (event.key === 'Escape') dismissModal();
    };
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.classList.remove('program-cta-modal-open');
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  if (!isOpen || typeof document === 'undefined') return null;

  const handleCtaClick = (event) => {
    event.preventDefault();
    dismissModal();

    if (programName) {
      setPendingProgramName(programName);
    }

    window.setTimeout(() => {
      const trigger = document.createElement('button');
      trigger.type = 'button';
      trigger.setAttribute('data-open-popup', '17162');
      trigger.style.display = 'none';
      document.body.appendChild(trigger);
      trigger.click();
      trigger.remove();
    }, 100);
  };

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) dismissModal();
  };

  const highlightItems =
    Array.isArray(highlights) && highlights.length > 0
      ? highlights.slice(0, 4)
      : DEFAULT_HIGHLIGHTS;

  return createPortal(
    <div
      className="program-cta-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="program-cta-modal-title"
      onClick={handleBackdropClick}
    >
      <div className="program-cta-modal__card">
        <aside className="program-cta-modal__panel" aria-hidden="true">
          <div className="program-cta-modal__panel-orb program-cta-modal__panel-orb--1" />
          <div className="program-cta-modal__panel-orb program-cta-modal__panel-orb--2" />
          {panelImage ? (
            <div className="program-cta-modal__panel-media">
              <img
                src={panelImage}
                alt={panelImageAlt || programName || 'Program'}
                loading="eager"
                decoding="async"
              />
            </div>
          ) : null}
          <div className="program-cta-modal__panel-content">
            <p className="program-cta-modal__panel-brand">{panelTitle}</p>
            <p className="program-cta-modal__panel-copy">{panelSubtitle}</p>
            <div className="program-cta-modal__panel-stats">
              <div>
                <strong>{PROOF_STATS.learnersShort}</strong>
                <span>Learners</span>
              </div>
              <div>
                <strong>{PROOF_STATS.satisfactionLabel}</strong>
                <span>Completion</span>
              </div>
              <div>
                <strong>{PROOF_STATS.yearsLabel}</strong>
                <span>Years</span>
              </div>
            </div>
          </div>
        </aside>

        <div className="program-cta-modal__main">
          <button
            type="button"
            className="program-cta-modal__close"
            aria-label="Close"
            onClick={dismissModal}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18">
              <path
                fill="currentColor"
                d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 1 0 5.7 7.11L10.59 12l-4.89 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z"
              />
            </svg>
          </button>

          <span className="program-cta-modal__eyebrow">{eyebrow}</span>
          <h2 id="program-cta-modal-title" className="program-cta-modal__title">
            {title}
          </h2>
          <p className="program-cta-modal__desc">{description}</p>

          <ul className="program-cta-modal__list">
            {highlightItems.map((item) => (
              <li key={item}>
                <span className="program-cta-modal__check">
                  <CheckIcon />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="program-cta-modal__actions">
            <button
              type="button"
              className="program-cta-modal__button"
              onClick={handleCtaClick}
            >
              {ctaLabel}
              <span aria-hidden="true">→</span>
            </button>
            <button
              type="button"
              className="program-cta-modal__dismiss"
              onClick={dismissModal}
            >
              Continue browsing
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default ProgramCtaModal;
