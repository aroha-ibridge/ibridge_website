import { useEffect } from 'react';

function setAccordionItemOpen(list, open) {
  const header = list.querySelector('.eael-accordion-header');
  const content = list.querySelector('.eael-accordion-content');
  if (!header || !content) return;

  if (open) {
    header.classList.add('active');
    header.setAttribute('aria-expanded', 'true');
    content.style.display = 'block';
    return;
  }

  header.classList.remove('active');
  header.setAttribute('aria-expanded', 'false');
  content.style.display = 'none';
}

/**
 * Replaces Essential Addons advanced accordion JS on program pages.
 */
function useEaelAccordion() {
  useEffect(() => {
    const cleanups = [];

    document.querySelectorAll('.eael-adv-accordion').forEach((root) => {
      const accordionType = root.getAttribute('data-accordion-type') || 'accordion';
      const lists = Array.from(root.querySelectorAll('.eael-accordion-list'));

      lists.forEach((list) => {
        const header = list.querySelector('.eael-accordion-header');
        const content = list.querySelector('.eael-accordion-content');
        if (!header || !content) return;

        const isOpen = header.classList.contains('active');
        setAccordionItemOpen(list, isOpen);
      });

      lists.forEach((list) => {
        const header = list.querySelector('.eael-accordion-header');
        if (!header) return;

        const onClick = () => {
          const isOpen = header.classList.contains('active');

          if (accordionType === 'accordion' && !isOpen) {
            lists.forEach((other) => {
              if (other !== list) setAccordionItemOpen(other, false);
            });
          }

          setAccordionItemOpen(list, !isOpen);
        };

        header.addEventListener('click', onClick);
        header.addEventListener('keydown', (event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onClick();
          }
        });

        cleanups.push(() => {
          header.removeEventListener('click', onClick);
        });
      });
    });

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, []);
}

export default useEaelAccordion;
