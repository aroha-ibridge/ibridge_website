import { useEffect } from 'react';

const COLOR_CLASS_RE = /(^|\s)color-\S+/g;
const BUTTON_SELECTORS = ['.buttons1', '.buttons2', '.buttons3', '.buttons4', '.buttons5'];

function stripColorClasses(el) {
  if (!el) return;
  const matches = el.className.match(COLOR_CLASS_RE);
  if (matches) {
    matches.forEach((cls) => el.classList.remove(cls.trim()));
  }
}

/**
 * Highlights the sticky sub-nav button for the scroll panel in view.
 * Replaces the inline jQuery script from the WordPress page (section a88472d).
 */
export default function useCorporateTrainingScrollPanels() {
  useEffect(() => {
    const panels = Array.from(document.querySelectorAll('.panel'));
    if (!panels.length) return undefined;

    const buttons = BUTTON_SELECTORS.map((sel) => document.querySelector(sel)).filter(Boolean);
    const bodyTarget = document.querySelector('.bodybg') || document.body;

    const onScroll = () => {
      const scroll = window.scrollY + window.innerHeight / 15;

      panels.forEach((panel) => {
        const top = panel.getBoundingClientRect().top + window.scrollY;
        const bottom = top + panel.offsetHeight;

        if (top <= scroll && bottom > scroll) {
          const color = panel.dataset.color;
          if (!color) return;

          stripColorClasses(bodyTarget);
          buttons.forEach(stripColorClasses);

          const colorClass = `color-${color}`;
          bodyTarget.classList.add(colorClass);
          buttons.forEach((btn) => btn.classList.add(colorClass));
        }
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return null;
}
