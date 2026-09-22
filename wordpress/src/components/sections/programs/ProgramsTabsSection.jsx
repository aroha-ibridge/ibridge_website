import { Link } from 'react-router-dom';

import '../../../styles/home-program-cards.css';
import { Container, Section } from '../../ui';
import homeProgramCards from '../home/homeProgramCardsData';

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

          <Link to={program.href} className="home-program-card__cta">
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

function ProgramsTabsSection() {
  return (
    <Section tone="soft" spacing="compact" className="relative overflow-hidden programs-page-section">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0"
        style={{
          background:
            'radial-gradient(1000px 420px at 50% 0%, rgba(24, 71, 159, 0.07), transparent 65%)',
        }}
      />

      <Container className="relative">
        <div className="home-career-path__header max-w-3xl mx-auto text-center mb-7 md:mb-9">
          <p className="home-career-path__eyebrow">Our Programs</p>
          <h1 className="text-3xl md:text-[42px] font-bold leading-[1.15] tracking-tight text-ink">
            Industry-ready learning paths for{' '}
            <span className="text-brand">ambitious careers</span>
          </h1>
          <p className="mt-5 text-ink-muted text-[15px] md:text-base leading-[1.7]">
            Explore job-focused programs built around mentorship, real projects, and placement support —
            designed to help you grow with confidence.
          </p>
        </div>

        <div className="home-program-cards-grid">
          {homeProgramCards.map((program, index) => (
            <ProgramCard key={program.id} program={program} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default ProgramsTabsSection;
