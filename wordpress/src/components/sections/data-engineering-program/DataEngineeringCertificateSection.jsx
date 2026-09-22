import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import ENQUIRE_POPUP_LINK from '../../../constants/enquirePopupLink';
import { Button, Container, Section, cn } from '../../ui';

/** Shared sample certificate for all program pages (for now). */
export const SHARED_CERTIFICATE_IMAGE =
  '/wp-content/uploads/2026/07/data-engineering-certificate.png';

function DataEngineeringCertificateSection({
  title = 'Data Engineering',
  titleAccent = 'Certification',
  description = 'Earn an official Certificate of Completion for a comprehensive Data Engineering Program covering modern data pipelines, cloud technologies, databases, and ETL workflows.',
  descriptionSecondary = 'Stand out on your resume, LinkedIn, and interviews with a credential employers recognize.',
  image = SHARED_CERTIFICATE_IMAGE,
  imageAlt = 'Data Engineering Program Certificate of Completion from iBridge360',
} = {}) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (!lightboxOpen) return undefined;

    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') setLightboxOpen(false);
    };
    document.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [lightboxOpen]);

  return (
    <>
      <Section
        tone="transparent"
        spacing="flow"
        className="relative overflow-hidden program-page-flow__section"
        id="certification"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-0"
          style={{
            background:
              'radial-gradient(900px 420px at 50% 0%, rgba(24, 71, 159, 0.06), transparent 65%)',
          }}
        />

        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-[40px] font-bold leading-[1.15] tracking-tight text-ink">
              {title}{' '}
              <span className="text-brand">
                {titleAccent}
              </span>
            </h2>

            <p className="mt-5 text-ink-muted text-[15px] md:text-base leading-[1.7] max-w-2xl mx-auto">
              {description}
            </p>
            {descriptionSecondary ? (
              <p className="mt-3 text-ink text-[15px] md:text-base font-medium leading-relaxed max-w-2xl mx-auto">
                {descriptionSecondary}
              </p>
            ) : null}
          </div>

          <div className="relative mx-auto mt-8 md:mt-10 w-full max-w-[640px]">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted mb-4">
              Sample certificate
            </p>

            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              className={cn(
                'group relative block w-full m-0 p-0 border-0 bg-transparent cursor-zoom-in tw-focus-ring rounded-[20px] overflow-hidden',
                'border border-brand/10',
                'transition-all duration-200 hover:border-brand/25 hover:shadow-card',
              )}
              style={{
                boxShadow:
                  '0 16px 40px -20px rgba(24, 71, 159, 0.2), inset 0 1px 0 rgba(255,255,255,0.95)',
              }}
              aria-label="View certificate full size"
            >
              <figure className="relative m-0 bg-white p-3 md:p-4 pb-3">
                <div className="overflow-hidden rounded-[14px] border border-[#d4af37]/20 bg-[#fafafa]">
                  <img
                    src={image}
                    alt={imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="block h-auto w-full mx-auto"
                  />
                </div>
                <figcaption className="sr-only">
                  {imageAlt}
                </figcaption>
              </figure>
              <span className="block w-full bg-surface-muted py-3 text-center text-sm text-ink-muted font-medium group-hover:text-brand group-hover:underline">
                Click to enlarge
              </span>
            </button>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button href={ENQUIRE_POPUP_LINK} size="lg">
              Get Started
            </Button>
          </div>
        </Container>
      </Section>

      {lightboxOpen &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            className="tw-scope fixed inset-0 z-[1000000] flex items-center justify-center p-4 md:p-8 bg-slate-900/70 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label="Certificate preview"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white hover:bg-white/20 tw-focus-ring"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 1 0 5.7 7.11L10.59 12l-4.89 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z" />
              </svg>
            </button>
            <img
              src={image}
              alt={imageAlt}
              className="max-h-[90vh] w-auto max-w-full rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>,
          document.body,
        )}
    </>
  );
}

export default DataEngineeringCertificateSection;
