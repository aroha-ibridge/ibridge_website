import { useEffect } from 'react';

function parseToggleSettings(toggleRoot) {
  const widget = toggleRoot.closest('[data-settings]');
  if (!widget) return { accordion: false };

  try {
    const raw = widget.getAttribute('data-settings') || '{}';
    const settings = JSON.parse(raw.replace(/&quot;/g, '"'));
    return { accordion: settings.accordion === 'yes' };
  } catch {
    return { accordion: false };
  }
}

function setPanelOpen(title, content, open) {
  if (open) {
    title.classList.add('elementor-active');
    title.setAttribute('aria-expanded', 'true');
    content.style.display = 'block';
    return;
  }

  title.classList.remove('elementor-active');
  title.setAttribute('aria-expanded', 'false');
  content.style.display = 'none';
}

/**
 * Replaces Elementor toggle widget JS (jQuery slideToggle).
 * Toggles .elementor-active on titles and shows/hides answer panels.
 */
function useElementorToggle() {
  useEffect(() => {
    const cleanups = [];

    document.querySelectorAll('.elementor-toggle').forEach((toggleRoot) => {
      const { accordion } = parseToggleSettings(toggleRoot);
      const items = Array.from(toggleRoot.querySelectorAll('.elementor-toggle-item'));

      items.forEach((item) => {
        const title = item.querySelector('.elementor-tab-title');
        const content = item.querySelector('.elementor-tab-content');
        if (!title || !content) return;

        setPanelOpen(title, content, title.classList.contains('elementor-active'));

        const onActivate = (event) => {
          if (event.target.closest('a.elementor-toggle-title')) {
            event.preventDefault();
          }

          const isActive = title.classList.contains('elementor-active');

          if (accordion && !isActive) {
            items.forEach((otherItem) => {
              const otherTitle = otherItem.querySelector('.elementor-tab-title');
              const otherContent = otherItem.querySelector('.elementor-tab-content');
              if (otherTitle && otherContent && otherTitle !== title) {
                setPanelOpen(otherTitle, otherContent, false);
              }
            });
          }

          setPanelOpen(title, content, !isActive);
        };

        title.addEventListener('click', onActivate);
        title.addEventListener('keydown', (event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onActivate(event);
          }
        });

        cleanups.push(() => title.removeEventListener('click', onActivate));
      });
    });

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, []);
}

export default useElementorToggle;
