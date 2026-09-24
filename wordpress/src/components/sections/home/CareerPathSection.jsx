import { Link } from 'react-router-dom';

import '../../../styles/home-program-cards.css';
import { Container, Section } from '../../ui';
import homeProgramCards from './homeProgramCardsData';

/** Homepage Career Programs — featured only */
const HOME_FEATURED_PROGRAM_IDS = ['data-engineering', 'data-science', 'full-stack-mern'];

const FEATURED_OVERRIDES = {
  'full-stack-mern': {
    title: 'Master in MERN Stack',
    summary: 'Build full-stack apps with MongoDB, Express, React, and Node.js.',
  },
};

function getFeaturedPrograms() {
  return HOME_FEATURED_PROGRAM_IDS.map((id) => {
    const program = homeProgramCards.find((p) => p.id === id);
    if (!program) return null;
    return { ...program, ...FEATURED_OVERRIDES[id] };
  }).filter(Boolean);
}

function ProgramCard({ program, index }) {
  return (
    <div className="home-program-card-wrap">
      <article className="home-program-card">
        <div className="home-program-card__media-shell">
          <img
            className="home-program-card__media"
            src={program.image}
            alt=""
            loading="lazy"
            decoding="async"
            aria-hidden="true"
          />
          <div className="home-program-card__media-shade" aria-hidden="true" />
          <span className="home-program-card__index">{String(index + 1).padStart(2, '0')}</span>
          <span className="home-program-card__chip home-program-card__chip--on-media">
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="5" width="18" height="16" rx="2" />
              <path d="M8 3v4M16 3v4M3 11h18" strokeLinecap="round" />
            </svg>
            {program.duration}
          </span>
        </div>

        <div className="home-program-card__body">
          <h3 className="home-program-card__title">{program.title}</h3>
          <p className="home-program-card__summary">{program.summary}</p>

          <p className="home-program-card__benefit">
            <span className="home-program-card__benefit-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            {program.benefit}
          </p>

          <Link to={`/programs#${program.id}`} className="home-program-card__cta">
            <span>Program Details</span>
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </article>
    </div>
  );
}

function CareerPathSection() {
  const featuredPrograms = getFeaturedPrograms();

  return (
    <Section tone="soft" spacing="compact" className="relative overflow-hidden home-career-path">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0"
        style={{
          background:
            'radial-gradient(900px 420px at 50% 0%, rgba(24, 71, 159, 0.06), transparent 65%)',
        }}
      />

      <Container className="relative">
        <div className="home-career-path__top">
          <div className="home-career-path__header max-w-3xl">
            <p className="home-career-path__eyebrow">Career Programs</p>
            <h2 className="text-3xl md:text-[40px] font-bold leading-[1.15] tracking-tight text-ink">
              Discover your{' '}
              <span className="text-brand">career path</span>
            </h2>
            <p className="mt-4 text-ink-muted text-[15px] md:text-base leading-[1.7]">
              Structured mentorship, real projects, and placement-focused training to help you launch
              your next role with confidence.
            </p>
          </div>

          <Link to="/programs" className="home-career-path__see-all">
            <span>See All</span>
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div className="home-program-cards-grid home-program-cards-grid--featured">
          {featuredPrograms.map((program, index) => (
            <ProgramCard key={program.id} program={program} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default CareerPathSection;
