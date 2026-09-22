import { useEffect } from 'react';

/**
 * Replaces Essential Addons advanced tabs JS on the Home page.
 * Toggles .active / .inactive classes expected by eael-9942f.css.
 */
function useEaelTabs() {
  useEffect(() => {
    const cleanups = [];

    document.querySelectorAll('.eael-advance-tabs').forEach((root) => {
      const navItems = Array.from(root.querySelectorAll('.eael-tab-nav-item'));
      const panels = Array.from(root.querySelectorAll('.eael-tabs-content > .eael-tab-content-item'));

      if (!navItems.length || !panels.length) return;

      const activateTab = (index) => {
        navItems.forEach((item, i) => {
          const isActive = i === index;
          item.classList.toggle('active', isActive);
          item.classList.toggle('inactive', !isActive);
          item.classList.remove('active-default');
          item.setAttribute('aria-selected', isActive ? 'true' : 'false');
          item.tabIndex = isActive ? 0 : -1;
        });

        panels.forEach((panel, i) => {
          const isActive = i === index;
          panel.classList.toggle('active', isActive);
          panel.classList.toggle('inactive', !isActive);
          panel.classList.remove('active-default');
        });
      };

      const defaultIndex = navItems.findIndex(
        (item) => item.classList.contains('active-default') || item.classList.contains('active'),
      );
      activateTab(defaultIndex >= 0 ? defaultIndex : 0);

      navItems.forEach((item, index) => {
        const onClick = () => activateTab(index);
        item.addEventListener('click', onClick);
        cleanups.push(() => item.removeEventListener('click', onClick));
      });
    });

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, []);
}

export default useEaelTabs;
