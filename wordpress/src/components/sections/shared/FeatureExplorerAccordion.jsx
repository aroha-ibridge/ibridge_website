import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { cn } from '../../ui';

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

function findFeatureFromHash(categories, hash) {
  if (!hash?.startsWith('#feature-')) return null;
  const featureId = hash.slice('#feature-'.length);
  for (let index = 0; index < categories.length; index += 1) {
    const item = categories[index].items?.find((entry) => (entry.id || entry.title) === featureId);
    if (item) {
      return { categoryIndex: index, itemId: item.id || item.title };
    }
  }
  return null;
}

function FeatureExplorerAccordion({ categories = [], items = [] }) {
  const { hash } = useLocation();
  const resolvedCategories = useMemo(
    () =>
      categories.length > 0
        ? categories
        : items.length > 0
          ? [{ id: 'all', title: 'All Features', items }]
          : [],
    [categories, items],
  );

  const initialMatch = findFeatureFromHash(resolvedCategories, hash);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(initialMatch?.categoryIndex || 0);
  const activeCategory = resolvedCategories[activeCategoryIndex];
  const [openId, setOpenId] = useState(
    initialMatch?.itemId || activeCategory?.items?.[0]?.id || null,
  );

  useEffect(() => {
    const match = findFeatureFromHash(resolvedCategories, hash);
    if (!match) return;
    setActiveCategoryIndex(match.categoryIndex);
    setOpenId(match.itemId);
    const timer = window.setTimeout(() => {
      document.getElementById(`feature-${match.itemId}`)?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }, 80);
    return () => window.clearTimeout(timer);
  }, [hash, resolvedCategories]);

  useEffect(() => {
    if (findFeatureFromHash(resolvedCategories, hash)) return;
    setOpenId(activeCategory?.items?.[0]?.id || null);
  }, [activeCategoryIndex, activeCategory, hash, resolvedCategories]);

  if (!resolvedCategories.length) return null;

  return (
    <div
      className="audience-feature-explorer relative rounded-[28px] bg-white/60 backdrop-blur-sm border border-brand/10 p-4 md:p-6 lg:p-7"
      style={{
        boxShadow:
          '0 30px 60px -30px rgba(24, 71, 159, 0.20), 0 12px 32px -18px rgba(15, 23, 42, 0.10), inset 0 1px 0 rgba(255,255,255,0.9)',
      }}
    >
      <div className="grid gap-5 lg:grid-cols-[minmax(240px,300px)_1fr] lg:gap-6">
        <ul
          className="list-none m-0 p-0 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-1 lg:pb-0"
          role="tablist"
          aria-label="Feature categories"
        >
          {resolvedCategories.map((category, index) => {
            const isActive = index === activeCategoryIndex;
            return (
              <li key={category.id} className="list-none m-0 p-0 shrink-0 lg:shrink">
                <button
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategoryIndex(index)}
                  className={cn(
                    'audience-feature-explorer__nav group relative w-full text-left rounded-xl border-0 outline-none transition-all duration-200 ease-out tw-focus-ring',
                    isActive
                      ? 'bg-surface-muted shadow-[0_6px_20px_-6px_rgba(15,23,42,0.10)]'
                      : 'bg-transparent hover:bg-surface-muted/70',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'absolute left-0 top-3.5 bottom-3.5 w-[3px] rounded-full transition-all duration-200',
                      isActive ? 'bg-brand opacity-100' : 'bg-brand/0 opacity-0',
                    )}
                  />
                  <span
                    className={cn(
                      'audience-feature-explorer__badge audience-feature-explorer__badge--nav',
                      isActive && 'audience-feature-explorer__badge--active',
                    )}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={cn(
                      'audience-feature-explorer__nav-label text-sm leading-snug transition-colors duration-200',
                      isActive
                        ? 'text-brand font-semibold tracking-[-0.005em]'
                        : 'text-ink font-medium group-hover:text-brand-700',
                    )}
                  >
                    {category.title}
                  </span>
                  <ChevronRight
                    className={cn(
                      'audience-feature-explorer__nav-chevron hidden lg:block transition-all duration-200',
                      isActive
                        ? 'text-brand opacity-100 translate-x-0'
                        : 'text-brand/60 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0',
                    )}
                  />
                </button>
              </li>
            );
          })}
        </ul>

        <div
          key={activeCategory.id}
          className="relative bg-white rounded-2xl border border-surface-border p-5 md:p-7 lg:p-8 animate-scaleIn"
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

          {activeCategory.description && (
            <p className="mb-6 text-sm text-ink-muted leading-relaxed">{activeCategory.description}</p>
          )}

          <div className="flex flex-col gap-3.5">
            {activeCategory.items.map((item, index) => {
              const itemId = item.id || item.title;
              const isOpen = openId === itemId;
              return (
                <div
                  key={itemId}
                  className={cn(
                    'rounded-xl border transition-all duration-200',
                    isOpen ? 'border-brand/20 bg-brand/2' : 'border-surface-border bg-white',
                  )}
                >
                  <button
                    type="button"
                    id={`feature-${itemId}`}
                    aria-expanded={isOpen}
                    aria-controls={`feature-panel-${itemId}`}
                    onClick={() => setOpenId(isOpen ? null : itemId)}
                    className="audience-feature-explorer__trigger tw-focus-ring"
                  >
                    <span
                      className={cn(
                        'audience-feature-explorer__badge',
                        isOpen && 'audience-feature-explorer__badge--active',
                      )}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="audience-feature-explorer__title">{item.title}</span>
                    <span
                      className={cn(
                        'audience-feature-explorer__chevron',
                        isOpen && 'audience-feature-explorer__chevron--open',
                      )}
                      aria-hidden="true"
                    >
                      <ChevronDown />
                    </span>
                  </button>

                  <div
                    id={`feature-panel-${itemId}`}
                    role="region"
                    aria-labelledby={`feature-${itemId}`}
                    hidden={!isOpen}
                    className="audience-feature-explorer__panel"
                  >
                    <div className="audience-feature-explorer__panel-inner">
                      <p className="m-0 text-[15px] text-ink-muted leading-[1.7]">{item.text}</p>
                      {item.bullets?.length > 0 && (
                        <ul className="mt-4 mb-0 pl-0 list-none flex flex-col gap-2.5">
                          {item.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="list-none m-0 p-0 flex items-start gap-3 text-sm text-ink leading-relaxed"
                            >
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
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureExplorerAccordion;
