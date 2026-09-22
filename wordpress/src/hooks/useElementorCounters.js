import { useEffect } from 'react';

function animateValue(element, from, to, duration) {
  const startTime = performance.now();
  const isDecimal = !Number.isInteger(to);

  const tick = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    const current = from + (to - from) * progress;

    if (isDecimal) {
      element.textContent = current.toFixed(1);
    } else {
      element.textContent = String(Math.round(current));
    }

    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      element.textContent = isDecimal ? to.toFixed(1) : String(to);
    }
  };

  requestAnimationFrame(tick);
}

/**
 * Replaces Elementor Pro counter widget JS (jQuery Numerator).
 * Reads data-to-value / data-duration from .elementor-counter-number elements.
 */
function runCounter(element) {
  const toValue = parseFloat(element.getAttribute('data-to-value') || '0');
  const fromValue = parseFloat(element.getAttribute('data-from-value') || '0');
  const duration = parseInt(element.getAttribute('data-duration') || '2000', 10);
  animateValue(element, fromValue, toValue, duration);
}

function useElementorCounters() {
  useEffect(() => {
    const counters = document.querySelectorAll('.elementor-counter-number[data-to-value]');

    const observers = Array.from(counters).map((element) => {
      const rect = element.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;

      if (inView) {
        runCounter(element);
        return null;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            runCounter(element);
            observer.disconnect();
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -10% 0px' },
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);
}

export default useElementorCounters;
