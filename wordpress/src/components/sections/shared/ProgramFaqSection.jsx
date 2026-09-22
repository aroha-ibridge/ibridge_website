import { useEffect, useState } from 'react';

import { Container, Section, cn } from '../../ui';

function ChevronRight({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" className={className} aria-hidden="true">
      <path
        d="M9 6l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronDown({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" className={className} aria-hidden="true">
      <path
        d="M6 9l6 6 6-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FaqAnswer({ item }) {
  return (
    <div>
      <p className="text-[15px] md:text-base text-ink-muted leading-[1.7] m-0">{item.answer}</p>
      {item.bullets?.length > 0 && (
        <ul className="mt-4 mb-0 pl-0 list-none flex flex-col gap-3">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="list-none m-0 p-0 flex items-start gap-3 text-[15px] text-ink leading-relaxed">
              <span
                className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                aria-hidden="true"
              />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/**
 * FAQ section with Course Structure-style layout:
 * category titles on the left, questions & answers on the right.
 */
function ProgramFaqSection({
  eyebrow = 'FAQ',
  title = 'Frequently Asked',
  titleAccent = 'Questions',
  description = '',
  categories = [],
  id = 'faq',
  tone = 'default',
  spacing = 'default',
  className = '',
}) {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const activeCategory = categories[activeCategoryIndex];
  const [openQuestionId, setOpenQuestionId] = useState(activeCategory?.items[0]?.id ?? null);

  useEffect(() => {
    const firstId = activeCategory?.items[0]?.id ?? null;
    setOpenQuestionId(firstId);
  }, [activeCategoryIndex, activeCategory]);

  if (!categories.length) return null;

  return (
    <Section
      tone={tone}
      spacing={spacing}
      className={cn('relative overflow-hidden', className)}
      id={id}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0"
        style={{
          background:
            'radial-gradient(1200px 500px at 50% 0%, rgba(24, 71, 159, 0.07), transparent 60%), radial-gradient(900px 400px at 100% 100%, rgba(45, 116, 217, 0.06), transparent 60%)',
        }}
      />

      <Container className="relative">
        <div
          className={cn(
            'text-center max-w-3xl mx-auto',
            spacing === 'flow' ? 'mb-8 md:mb-10' : 'mb-10 md:mb-14',
          )}
        >
          {eyebrow && (
            <div className="inline-flex items-center gap-3 text-ink-muted text-[11px] font-semibold uppercase tracking-[0.18em] mb-5">
              <span className="h-px w-8 bg-brand/40" aria-hidden="true" />
              {eyebrow}
              <span className="h-px w-8 bg-brand/40" aria-hidden="true" />
            </div>
          )}
          {title && (
            <h2 className="text-3xl md:text-[40px] font-bold leading-[1.15] tracking-tight text-ink">
              {title}
              {titleAccent && <span className="text-brand"> {titleAccent}</span>}
            </h2>
          )}
          {description && (
            <p className="mt-5 text-ink-muted text-[15px] md:text-base leading-[1.7]">{description}</p>
          )}
        </div>

        <div
          className="relative rounded-[28px] bg-white/60 backdrop-blur-sm border border-brand/10 p-3 md:p-5 lg:p-6"
          style={{
            boxShadow:
              '0 30px 60px -30px rgba(24, 71, 159, 0.20), 0 12px 32px -18px rgba(15, 23, 42, 0.10), inset 0 1px 0 rgba(255,255,255,0.9)',
          }}
        >
          <div className="program-faq-layout grid gap-4 lg:grid-cols-[minmax(260px,320px)_1fr] lg:items-start">
            <ul
              className="program-faq-categories list-none m-0 p-0 flex flex-col justify-start gap-1.5 self-start w-full lg:max-h-[620px] lg:overflow-y-auto lg:pr-1"
              role="tablist"
              aria-label="FAQ categories"
            >
              {categories.map((category, index) => {
                const isActive = index === activeCategoryIndex;
                return (
                  <li key={category.id} className="list-none m-0 p-0">
                    <button
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveCategoryIndex(index)}
                      className={cn(
                        'group relative w-full text-left pl-6 pr-4 py-4 rounded-xl border-0 outline-none transition-all duration-200 ease-out tw-focus-ring',
                        isActive
                          ? 'bg-surface-muted shadow-[0_6px_20px_-6px_rgba(15,23,42,0.10)]'
                          : 'bg-transparent hover:bg-surface-muted/70',
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={cn(
                          'absolute left-0 top-3 bottom-3 w-[3px] rounded-full transition-all duration-200',
                          isActive ? 'bg-brand opacity-100' : 'bg-brand/0 opacity-0',
                        )}
                      />

                      <div className="flex items-start gap-3">
                        <span
                          aria-hidden="true"
                          className={cn(
                            'inline-block w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[0.45em] transition-colors duration-200',
                            isActive ? 'bg-brand' : 'bg-ink-soft/50 group-hover:bg-brand/60',
                          )}
                        />
                        <span
                          className={cn(
                            'text-sm leading-snug flex-1 transition-colors duration-200',
                            isActive
                              ? 'text-brand font-semibold tracking-[-0.005em]'
                              : 'text-ink font-medium group-hover:text-brand-700',
                          )}
                        >
                          {category.title}
                        </span>
                        <ChevronRight
                          className={cn(
                            'shrink-0 mt-0.5 transition-all duration-200',
                            isActive
                              ? 'text-brand opacity-100 translate-x-0'
                              : 'text-brand/60 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0',
                          )}
                        />
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>

            <div
              key={activeCategory.id}
              className="relative bg-white rounded-2xl border border-surface-border p-6 md:p-8 lg:p-10 animate-scaleIn"
              style={{
                boxShadow:
                  '0 4px 24px -12px rgba(15, 23, 42, 0.06), 0 1px 0 rgba(255,255,255,1) inset',
              }}
            >
              <span
                aria-hidden="true"
                className="absolute top-0 left-8 right-8 h-[3px] rounded-b-full"
                style={{
                  background: 'linear-gradient(90deg, #123A85 0%, #18479F 50%, #2D74D9 100%)',
                }}
              />

              <div className="flex flex-col gap-3">
                {activeCategory.items.map((item) => {
                  const isOpen = openQuestionId === item.id;
                  return (
                    <div
                      key={item.id}
                      className={cn(
                        'program-faq-item rounded-xl border transition-all duration-200',
                        isOpen
                          ? 'program-faq-item--open border-brand/20 bg-brand/[0.02]'
                          : 'border-surface-border bg-white',
                      )}
                    >
                      <button
                        type="button"
                        id={`faq-${item.id}`}
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${item.id}`}
                        onClick={() => setOpenQuestionId(isOpen ? null : item.id)}
                        className="program-faq-item__trigger flex w-full items-center justify-between gap-4 px-4 py-4 md:px-5 text-left border-0 outline-none bg-transparent rounded-xl tw-focus-ring"
                      >
                        <span className="text-[15px] font-semibold text-ink leading-snug pr-2">
                          {item.question}
                        </span>
                        <ChevronDown
                          className={cn(
                            'shrink-0 text-brand transition-transform duration-200',
                            isOpen && 'rotate-180',
                          )}
                        />
                      </button>

                      <div
                        id={`faq-panel-${item.id}`}
                        role="region"
                        aria-labelledby={`faq-${item.id}`}
                        hidden={!isOpen}
                        className="px-4 pb-4 md:px-5 md:pb-5"
                      >
                        <div className="pt-1 border-t border-brand/10">
                          <FaqAnswer item={item} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default ProgramFaqSection;
