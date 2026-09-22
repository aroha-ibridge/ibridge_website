import { useEffect } from 'react';

/**
 * Shows the sticky enquiry bar on the Data Engineering program page after scroll.
 */
function useStickyBottomBar() {
  useEffect(() => {
    const bar = document.querySelector('[data-de-sticky-bar]');
    if (!bar) return undefined;

    const hidden = ['opacity-0', 'pointer-events-none', 'translate-y-full'];

    const reveal = () => {
      if (window.scrollY < 320) {
        bar.classList.add(...hidden);
      } else {
        bar.classList.remove(...hidden);
      }
    };

    document.body.classList.add('de-sticky-bar-active');
    reveal();
    window.addEventListener('scroll', reveal, { passive: true });

    return () => {
      window.removeEventListener('scroll', reveal);
      document.body.classList.remove('de-sticky-bar-active');
    };
  }, []);
}

export default useStickyBottomBar;
