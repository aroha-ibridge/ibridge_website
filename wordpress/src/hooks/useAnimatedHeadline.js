import { useEffect } from 'react';

function parseWidgetSettings(widget) {
  try {
    const raw = widget.getAttribute('data-settings') || '{}';
    return JSON.parse(raw.replace(/&quot;/g, '"'));
  } catch {
    return {};
  }
}

/**
 * Replaces Elementor Pro animated-headline JS for the home hero rotator.
 */
function useAnimatedHeadline() {
  useEffect(() => {
    const widgets = document.querySelectorAll('.elementor-widget-animated-headline');
    const cleanups = [];

    widgets.forEach((widget) => {
      const settings = parseWidgetSettings(widget);
      const delay = Number(settings.rotate_iteration_delay) || 2500;
      const texts = widget.querySelectorAll('.elementor-headline-dynamic-text');

      if (texts.length <= 1) return;

      let index = Array.from(texts).findIndex((el) =>
        el.classList.contains('elementor-headline-text-active'),
      );
      if (index < 0) index = 0;

      const activate = (nextIndex) => {
        const current = texts[index];
        const next = texts[nextIndex];

        if (current && current !== next) {
          current.classList.remove('elementor-headline-text-active');
          current.classList.add('elementor-headline-text-inactive');
          window.setTimeout(() => current.classList.remove('elementor-headline-text-inactive'), 700);
        }

        next.classList.remove('elementor-headline-text-inactive');
        next.classList.add('elementor-headline-text-active');
        index = nextIndex;
      };

      const intervalId = window.setInterval(() => {
        activate((index + 1) % texts.length);
      }, delay);

      cleanups.push(() => window.clearInterval(intervalId));
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);
}

export default useAnimatedHeadline;
