import { useEffect } from 'react';

import { submitEnquiryFormElementor } from '../utils/enquiryFormSubmit';

function getProgramSourceFromRoot(root) {
  if (root.classList.contains('elementor-508')) return 'Data Engineering page — inline form';
  if (root.classList.contains('elementor-16948')) return 'Full Stack MERN page — inline form';
  return 'Program page — inline form';
}

const PROGRAM_PAGE_ROOTS = ['.elementor-508', '.elementor-16948'];

function useProgramEnquiryForm() {
  useEffect(() => {
    const roots = PROGRAM_PAGE_ROOTS.map((selector) => document.querySelector(selector)).filter(
      Boolean,
    );
    if (!roots.length) return undefined;

    const handlers = [];

    roots.forEach((root) => {
      root.querySelectorAll('.elementor-form').forEach((form) => {
        const handler = (event) =>
          submitEnquiryFormElementor(event, {
            source: getProgramSourceFromRoot(root),
          });
        form.addEventListener('submit', handler);
        handlers.push({ form, handler });
      });
    });

    return () => {
      handlers.forEach(({ form, handler }) => {
        form.removeEventListener('submit', handler);
      });
    };
  }, []);
}

export default useProgramEnquiryForm;
