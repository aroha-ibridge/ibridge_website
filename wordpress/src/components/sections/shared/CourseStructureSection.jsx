import { useMemo, useState } from 'react';

import { Container, Section, cn } from '../../ui';

/**
 * Premium Course Structure section.
 *
 * Design principles:
 *  - Restrained use of color — brand blue for accents, ink black for body copy
 *  - Layered depth via subtle multi-shadow + soft brand-tinted backdrop
 *  - Deliberate typography scale with airy line-heights
 *  - Micro-interactions on hover (indicator dot → arrow) and module switch (fade)
 *  - No module numbering (per product decision) — module titles are the anchor
 */

function BookIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" className={className} aria-hidden="true">
      <path
        d="M4 5.5A2.5 2.5 0 0 1 6.5 3H19a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.5a1.5 1.5 0 0 0 0 3H19a1 1 0 1 1 0 2H6.5A3.5 3.5 0 0 1 3 20.5v-15Zm2 0v13.05A3.48 3.48 0 0 1 6.5 18H18V5H6.5A.5.5 0 0 0 6 5.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

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

function CheckCircle({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.12" />
      <path
        d="M8.5 12.5l2.5 2.5 4.5-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DownloadIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" className={className} aria-hidden="true">
      <path
        d="M12 3v12m0 0-4-4m4 4 4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function getDisplayGroups(module) {
  if (!module) return [];
  if (module.groups?.length) return module.groups;
  if (!module.topics?.length) return [];
  const half = Math.ceil(module.topics.length / 2);
  const left = module.topics.slice(0, half);
  const right = module.topics.slice(half);
  return [
    { label: null, items: left },
    right.length ? { label: null, items: right } : null,
  ].filter(Boolean);
}

function ModuleDetailPane({ module, topicsLabel, id }) {
  const displayGroups = useMemo(() => getDisplayGroups(module), [module]);
  if (!module) return null;

  return (
    <div
      id={id}
      role="tabpanel"
      className="relative bg-white rounded-2xl border border-surface-border p-5 md:p-8 lg:p-10 animate-scaleIn"
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

      <div className="flex items-start gap-4 mb-5">
        <span
          className="inline-flex items-center justify-center w-12 h-12 rounded-xl text-brand shrink-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(24, 71, 159, 0.10), rgba(24, 71, 159, 0.04))',
            boxShadow: 'inset 0 0 0 1px rgba(24, 71, 159, 0.15)',
          }}
        >
          <BookIcon />
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="text-xl md:text-2xl font-bold text-ink leading-tight tracking-tight">
            {module.title}
          </h3>
          {module.headline ? (
            <p className="mt-2 text-sm font-semibold text-brand md:text-[15px]">
              {module.headline}
            </p>
          ) : null}
        </div>
      </div>

      {module.description && (
        <p className="text-[15px] md:text-base text-ink-muted leading-[1.7] mb-8 whitespace-pre-line">
          {module.description}
        </p>
      )}

      {displayGroups.length > 0 && (
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand">
              {module.topicsLabel || topicsLabel}
            </span>
            <span className="flex-1 h-px bg-gradient-to-r from-brand/25 to-transparent" />
          </div>

          <div className="grid gap-x-10 gap-y-6 md:grid-cols-2">
            {displayGroups.map((group, groupIdx) => {
              const isOddLast =
                Boolean(group.label) &&
                displayGroups.length % 2 === 1 &&
                groupIdx === displayGroups.length - 1;

              return (
                <div
                  key={group.label || `group-${groupIdx}`}
                  className={cn(isOddLast && 'md:col-span-2')}
                >
                  {group.label && (
                    <div className="text-sm font-bold text-ink mb-3 pl-1">{group.label}</div>
                  )}
                  <ul
                    className={cn(
                      'list-none m-0 p-0 flex flex-col gap-3',
                      isOddLast && 'md:grid md:grid-cols-2 md:gap-x-10 md:gap-y-3',
                    )}
                  >
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="list-none m-0 p-0 flex items-start gap-3 text-[15px] text-ink leading-relaxed"
                      >
                        <CheckCircle className="text-brand mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

function CourseStructureSection({
  eyebrow,
  title,
  titleAccent,
  description,
  modules = [],
  topicsLabel = 'Topics Covered',
  syllabusUrl,
  syllabusLabel = 'Download Course Syllabus',
  tone = 'default',
  spacing = 'default',
  className = '',
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = modules[activeIndex];
  const panelId = 'course-structure-panel';

  if (!modules.length) return null;

  const showHeader = eyebrow || title || description;

  return (
    <Section
      tone={tone}
      spacing={spacing}
      className={cn('relative overflow-hidden', className)}
      id="course-structure"
    >
      {/* Ambient brand-tinted backdrop — all-blue palette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0"
        style={{
          background:
            'radial-gradient(1200px 500px at 50% 0%, rgba(24, 71, 159, 0.07), transparent 60%), radial-gradient(900px 400px at 100% 100%, rgba(45, 116, 217, 0.06), transparent 60%)',
        }}
      />

      <Container className="relative">
        {showHeader && (
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
              <p className="mt-5 text-ink-muted text-[15px] md:text-base leading-[1.7]">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Curriculum card — glassy, layered depth */}
        <div
          className="relative rounded-[28px] bg-white/60 backdrop-blur-sm border border-brand/10 p-3 md:p-5 lg:p-6"
          style={{
            boxShadow:
              '0 30px 60px -30px rgba(24, 71, 159, 0.20), 0 12px 32px -18px rgba(15, 23, 42, 0.10), inset 0 1px 0 rgba(255,255,255,0.9)',
          }}
        >
          <div className="grid gap-4 lg:grid-cols-[minmax(260px,320px)_1fr]">
            {/* Sidebar — module list */}
            <ul
              className="list-none m-0 p-0 flex flex-col gap-1.5 lg:max-h-[600px] lg:overflow-y-auto lg:pr-1"
              role="tablist"
              aria-label="Course modules"
            >
              {modules.map((module, index) => {
                const isActive = index === activeIndex;
                const modulePanelId = `course-structure-module-${index}`;
                return (
                  <li key={module.title} className="list-none m-0 p-0">
                    <button
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`${modulePanelId} ${panelId}`}
                      onClick={() => setActiveIndex(index)}
                      className={cn(
                        'group relative w-full !text-left pl-6 pr-4 py-4 rounded-xl border-0 outline-none transition-all duration-200 ease-out tw-focus-ring',
                        isActive
                          ? 'bg-surface-muted shadow-[0_6px_20px_-6px_rgba(15,23,42,0.10)]'
                          : 'bg-transparent hover:bg-surface-muted/70',
                      )}
                    >
                      {/* Active side rail */}
                      <span
                        aria-hidden="true"
                        className={cn(
                          'absolute left-0 top-3 bottom-3 w-[3px] rounded-full transition-all duration-200',
                          isActive ? 'bg-brand opacity-100' : 'bg-brand/0 opacity-0',
                        )}
                      />

                      <div className="flex items-start gap-3">
                        {/* Indicator dot — brand accent when active */}
                        <span
                          aria-hidden="true"
                          className={cn(
                            'inline-block w-1.5 h-1.5 mt-1.5 rounded-full flex-shrink-0 transition-colors duration-200',
                            isActive
                              ? 'bg-brand'
                              : 'bg-ink-soft/50 group-hover:bg-brand/60',
                          )}
                        />

                        <span
                          className={cn(
                            'course-structure__module-title block min-w-0 flex-1 text-left text-sm leading-snug transition-colors duration-200',
                            isActive
                              ? 'text-brand font-semibold tracking-[-0.005em]'
                              : 'text-ink font-medium group-hover:text-brand-700',
                          )}
                        >
                          {module.title}
                        </span>

                        {/* Hover / active chevron — points down on mobile accordion */}
                        <ChevronRight
                          className={cn(
                            'shrink-0 mt-0.5 transition-all duration-200',
                            isActive
                              ? 'text-brand opacity-100 translate-x-0 rotate-90 lg:rotate-0'
                              : 'text-brand/60 opacity-100 lg:opacity-0 -translate-x-0 lg:-translate-x-1 group-hover:opacity-100 group-hover:translate-x-0',
                          )}
                        />
                      </div>
                    </button>

                    {isActive && (
                      <div className="lg:hidden mt-1 mb-2">
                        <ModuleDetailPane
                          module={module}
                          topicsLabel={topicsLabel}
                          id={modulePanelId}
                        />
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="hidden lg:block">
              <ModuleDetailPane
                key={activeIndex}
                module={active}
                topicsLabel={topicsLabel}
                id={panelId}
              />
            </div>
          </div>
        </div>

        {syllabusUrl && (
          <div className="mt-10 flex justify-center">
            <a
              href={syllabusUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="tw-scope group inline-flex items-center gap-2.5 h-12 px-7 rounded-full bg-ink text-white text-sm font-semibold transition-all duration-200 hover:bg-brand hover:-translate-y-0.5 tw-focus-ring"
              style={{
                boxShadow: '0 12px 28px -10px rgba(15, 23, 42, 0.35)',
              }}
            >
              {syllabusLabel}
              <DownloadIcon className="transition-transform duration-200 group-hover:translate-y-0.5" />
            </a>
          </div>
        )}
      </Container>
    </Section>
  );
}

export default CourseStructureSection;
