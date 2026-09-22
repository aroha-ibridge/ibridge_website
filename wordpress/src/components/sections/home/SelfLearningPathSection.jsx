import { Link } from 'react-router-dom';

import '../../../styles/trending-skills.css';
import '../../../styles/rating-stars.css';
import '../../../styles/home-program-cards.css';
import { Container, Section } from '../../ui';
import { RatingStars } from '../programs/RatingStars';
import homeSelfLearningCards from './homeSelfLearningCardsData';

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.8 2.5 15.2 0 18M12 3c-2.5 2.8-2.5 15.2 0 18" strokeLinecap="round" />
    </svg>
  );
}

/** Homepage Self Learning cards — same design as /self-learning page cards */
function SelfLearningCard({ program }) {
  const priceAmount =
    program.price != null ? Number(program.price).toLocaleString('en-IN') : null;
  const chips = [program.duration, program.resourcesLabel, program.levelLabel].filter(Boolean);

  return (
    <article className="trending-skills__card">
      <Link
        to={program.href}
        className="trending-skills__media-link"
        aria-label={`View course: ${program.title}`}
      >
        <div className="trending-skills__media">
          {program.image ? (
            <img src={program.image} alt="" loading="lazy" decoding="async" />
          ) : (
            <div className="trending-skills__media-fallback" aria-hidden="true">
              {(program.title || 'P').trim().charAt(0).toUpperCase()}
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
        <Link to={program.href} className="trending-skills__name-link">
          <h3 className="trending-skills__name" title={program.title}>
            {program.title}
          </h3>
        </Link>

        {program.summary ? <p className="trending-skills__desc">{program.summary}</p> : null}

        <div className="trending-skills__rating-row">
          <RatingStars value={program.rating ?? 4.5} className="rating-stars--compact" size={14} />
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
              <p className="trending-skills__price trending-skills__price--enquire">Enquire for fee</p>
            )}
          </div>
          <Link to={program.href} className="trending-skills__details-btn">
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}

function SelfLearningPathSection() {
  return (
    <Section
      tone="transparent"
      spacing="compact"
      className="relative overflow-hidden home-career-path home-self-learning-path"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0"
        style={{
          background:
            'radial-gradient(900px 420px at 50% 0%, rgba(24, 71, 159, 0.05), transparent 65%)',
        }}
      />

      <Container className="relative">
        <div className="home-career-path__top">
          <div className="home-career-path__header max-w-3xl">
            <p className="home-career-path__eyebrow">Self Learning</p>
            <h2 className="text-3xl md:text-[40px] font-bold leading-[1.15] tracking-tight text-ink">
              Upskill with{' '}
              <span className="text-brand">self-paced courses</span>
            </h2>
            <p className="mt-4 text-ink-muted text-[15px] md:text-base leading-[1.7]">
              Learn trending skills on your schedule — practical modules designed to help you grow
              faster, one course at a time.
            </p>
          </div>

          <Link to="/self-learning" className="home-career-path__see-all">
            <span>See All</span>
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div className="trending-skills__grid home-self-learning-path__grid">
          {homeSelfLearningCards.map((program) => (
            <SelfLearningCard key={program.id} program={program} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default SelfLearningPathSection;
