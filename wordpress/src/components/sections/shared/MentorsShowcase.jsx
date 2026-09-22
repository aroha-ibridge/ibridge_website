import { useRef } from 'react';

import MENTORS from '../../../constants/mentorsData';
import useMentorsCarousel from '../../../hooks/useMentorsCarousel';
import { Container, Section } from '../../ui';
import ProgramSectionHeader from './ProgramSectionHeader';
import '../../../styles/mentors-showcase.css';

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function ChevronIcon({ direction = 'right' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      {direction === 'left' ? (
        <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

function MentorCard({ mentor }) {
  return (
    <article className="mentor-card">
      <div className="mentor-card__photo-wrap">
        <img
          className="mentor-card__photo"
          src={mentor.image}
          alt={mentor.name}
          loading="lazy"
          decoding="async"
          style={{
            ...(mentor.photoPosition
              ? { objectPosition: mentor.photoPosition }
              : null),
            ...(mentor.photoScale
              ? {
                  transform: `scale(${mentor.photoScale})`,
                  transformOrigin: mentor.photoOrigin || 'center top',
                }
              : null),
          }}
        />
      </div>

      <div className="mentor-card__body">
        <p className="mentor-card__role">{mentor.role}</p>
        <h3 className="mentor-card__name">{mentor.name}</h3>
        <p className="mentor-card__bio">{mentor.bio}</p>

        <footer className="mentor-card__footer">
          {mentor.linkedin ? (
            <a
              className="mentor-card__linkedin"
              href={mentor.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${mentor.name} on LinkedIn`}
            >
              <LinkedInIcon />
            </a>
          ) : null}
        </footer>
      </div>
    </article>
  );
}

const trustSignals = [
  { value: `${MENTORS.length}+`, label: 'Expert Mentors' },
  { value: '1:1', label: 'Personalized Guidance' },
];

function MentorsShowcase({
  eyebrow = 'World-Class Faculty',
  title = 'Our',
  titleAccent = 'Mentors',
  subtitle = 'Learn from industry practitioners who bring real-world expertise, hands-on mentorship, and a genuine commitment to your career growth.',
}) {
  const carouselRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);

  useMentorsCarousel({ carouselRef, prevRef, nextRef, paginationRef });

  return (
    <Section id="mentors" tone="soft" spacing="default" className="mentors-showcase">
      <div className="mentors-showcase__glow" aria-hidden="true" />

      <Container className="relative">
        <ProgramSectionHeader
          eyebrow={eyebrow}
          title={title}
          titleAccent={titleAccent}
          subtitle={subtitle}
        />

        <ul className="mentors-showcase__trust">
          {trustSignals.map((signal) => (
            <li key={signal.label} className="mentors-showcase__trust-item">
              <strong>{signal.value}</strong>
              <span>{signal.label}</span>
            </li>
          ))}
        </ul>

        <div className="mentors-showcase__carousel-wrap">
          <button
            type="button"
            ref={prevRef}
            className="mentors-showcase__nav mentors-showcase__nav--prev"
            aria-label="Previous mentor"
          >
            <ChevronIcon direction="left" />
          </button>

          <div ref={carouselRef} className="swiper mentors-showcase-carousel">
            <div className="swiper-wrapper">
              {MENTORS.map((mentor) => (
                <div key={mentor.name} className="swiper-slide">
                  <MentorCard mentor={mentor} />
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            ref={nextRef}
            className="mentors-showcase__nav mentors-showcase__nav--next"
            aria-label="Next mentor"
          >
            <ChevronIcon direction="right" />
          </button>
        </div>

        <div ref={paginationRef} className="mentors-showcase__pagination" />
      </Container>
    </Section>
  );
}

export default MentorsShowcase;
