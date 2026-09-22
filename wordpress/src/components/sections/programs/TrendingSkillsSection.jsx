import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import '../../../styles/trending-skills.css';
import '../../../styles/rating-stars.css';
import {
  TRENDING_CATEGORIES,
  getProgramPriceAmount,
  getProgramDetailPath,
  getProgramLevelLabel,
  getProgramRating,
  getProgramResourcesLabel,
  getProgramShortDescription,
  getProgramTotalHoursLabel,
  groupProgramsByCategory,
  programMatchesSearch,
} from './trendingSkillsUtils';
import { RatingStars } from './RatingStars';
import { isShownOnProgramsPage } from '@/utils/programVisibility';
import { learnerApiUrl } from '../../../constants/apiOrigins';

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.8 2.5 15.2 0 18M12 3c-2.5 2.8-2.5 15.2 0 18" strokeLinecap="round" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      className="trending-skills__search-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}

function ProgramSkillCard({ program }) {
  const detailPath = getProgramDetailPath(program);
  const priceAmount = getProgramPriceAmount(program.price);
  const rating = getProgramRating(program);
  const hoursLabel = getProgramTotalHoursLabel(program);
  const levelLabel = getProgramLevelLabel(program);
  const resourcesLabel = getProgramResourcesLabel();
  const description = getProgramShortDescription(program);
  const initial = (program.name || 'P').trim().charAt(0).toUpperCase();
  const chips = [hoursLabel, resourcesLabel, levelLabel].filter(Boolean);

  return (
    <article className="trending-skills__card">
      <Link
        to={detailPath}
        className="trending-skills__media-link"
        aria-label={`View course: ${program.name}`}
      >
        <div className="trending-skills__media">
          {program.cardImage ? (
            <img src={program.cardImage} alt="" loading="lazy" decoding="async" />
          ) : (
            <div className="trending-skills__media-fallback" aria-hidden="true">
              {initial}
            </div>
          )}
          <span className="trending-skills__media-shade" aria-hidden="true" />
          <div className="trending-skills__badges">
            <span className="trending-skills__badge">
              <GlobeIcon />
              English
            </span>
          </div>
        </div>
      </Link>

      <div className="trending-skills__body">
        <Link to={detailPath} className="trending-skills__name-link">
          <h3 className="trending-skills__name" title={program.name}>
            {program.name}
          </h3>
        </Link>

        {description ? (
          <p className="trending-skills__desc">{description}</p>
        ) : null}

        <div className="trending-skills__rating-row">
          <RatingStars value={rating} className="rating-stars--compact" size={14} />
        </div>

        {chips.length > 0 ? (
          <div className="trending-skills__chips">
            {chips.map((chip) => (
              <span key={chip} className="trending-skills__chip">
                {chip}
              </span>
            ))}
          </div>
        ) : null}

        <div className="trending-skills__footer-row">
          <div className="trending-skills__price-wrap">
            {priceAmount ? (
              <p className="trending-skills__price">
                <span className="trending-skills__currency">Rs.</span>
                <span className="trending-skills__amount">{priceAmount}</span>
              </p>
            ) : (
              <p className="trending-skills__price trending-skills__price--enquire">
                Enquire for fee
              </p>
            )}
          </div>
          <Link to={detailPath} className="trending-skills__details-btn">
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}

function TrendingSkillsSection() {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeCategoryId, setActiveCategoryId] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    let cancelled = false;

    async function loadPrograms() {
      setLoading(true);
      setError('');
      try {
        const response = await fetch(learnerApiUrl('/api/programs/getPrograms'), {
          headers: { Accept: 'application/json' },
          cache: 'no-store',
        });
        const json = await response.json().catch(() => null);
        if (!response.ok) {
          throw new Error(json?.message || 'Failed to load programs');
        }
        if (!cancelled) {
          const list = Array.isArray(json?.data) ? json.data : [];
          setPrograms(list.filter((program) => isShownOnProgramsPage(program)));
        }
      } catch (err) {
        if (!cancelled) {
          setError(err?.message || 'Failed to load programs');
          setPrograms([]);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadPrograms();
    return () => {
      cancelled = true;
    };
  }, []);

  const grouped = useMemo(() => groupProgramsByCategory(programs), [programs]);

  const tabs = useMemo(() => {
    const list = TRENDING_CATEGORIES.filter((c) => grouped[c.id]?.length > 0);
    if (grouped.other?.length) {
      list.push({ id: 'other', label: 'More programs' });
    }
    return list;
  }, [grouped]);

  useEffect(() => {
    if (!tabs.length) {
      setActiveCategoryId('');
      return;
    }
    if (!tabs.some((tab) => tab.id === activeCategoryId)) {
      setActiveCategoryId(tabs[0].id);
    }
  }, [tabs, activeCategoryId]);

  const activeTab = tabs.find((tab) => tab.id === activeCategoryId) || tabs[0];
  const categoryPrograms = activeTab ? grouped[activeTab.id] || [] : [];
  const trimmedSearch = searchQuery.trim();

  const filteredPrograms = useMemo(
    () => categoryPrograms.filter((program) => programMatchesSearch(program, trimmedSearch)),
    [categoryPrograms, trimmedSearch],
  );

  const handleTabChange = (categoryId) => {
    setActiveCategoryId(categoryId);
  };

  return (
    <section className="trending-skills tw-scope" aria-labelledby="trending-skills-heading">
      <div className="trending-skills__inner">
        <header className="trending-skills__header">
          <h2 id="trending-skills-heading" className="trending-skills__title">
            Trending Skills
          </h2>
          <p className="trending-skills__subtitle">
            Explore in-demand courses across web, programming, and data—curated for your career path.
          </p>
        </header>

        {loading ? (
          <div className="trending-skills__skeleton-grid" aria-hidden="true">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="trending-skills__skeleton" />
            ))}
          </div>
        ) : error ? (
          <p className="trending-skills__state">{error}</p>
        ) : !tabs.length ? (
          <p className="trending-skills__state">No programs available yet.</p>
        ) : (
          <>
            <div className="trending-skills__controls">
              <div className="trending-skills__tabs" role="tablist" aria-label="Skill categories">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={tab.id === activeTab?.id}
                    className={`trending-skills__tab${tab.id === activeTab?.id ? ' is-active' : ''}`}
                    onClick={() => handleTabChange(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <label className="trending-skills__search">
                <SearchIcon />
                <input
                  type="search"
                  className="trending-skills__search-input"
                  placeholder="Search courses…"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  aria-label="Search courses"
                  autoComplete="off"
                />
                {trimmedSearch ? (
                  <button
                    type="button"
                    className="trending-skills__search-clear"
                    aria-label="Clear search"
                    onClick={() => setSearchQuery('')}
                  >
                    <CloseIcon />
                  </button>
                ) : null}
              </label>
            </div>

            {trimmedSearch ? (
              <p className="trending-skills__search-meta" role="status">
                {filteredPrograms.length === 0
                  ? `No courses found for “${trimmedSearch}”`
                  : `${filteredPrograms.length} course${filteredPrograms.length === 1 ? '' : 's'} found`}
              </p>
            ) : null}

            <div className="trending-skills__grid" role="tabpanel">
              {filteredPrograms.length > 0 ? (
                filteredPrograms.map((program) => (
                  <ProgramSkillCard key={program._id} program={program} />
                ))
              ) : (
                <p className="trending-skills__state trending-skills__state--inline">
                  {trimmedSearch
                    ? 'Try a different keyword or switch category.'
                    : 'No courses in this category yet.'}
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default TrendingSkillsSection;
