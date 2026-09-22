import { useRef } from 'react';

import useLearnerTestimonialCarousel from '../../../hooks/useLearnerTestimonialCarousel';
import { Container, Section } from '../../ui';
import ProgramSectionHeader from './ProgramSectionHeader';
import learnerTestimonials from './learnerTestimonialsData';
import '../../../styles/learner-testimonials.css';

function StarRating() {
  return (
    <div className="learner-testimonial-card__stars" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg key={index} viewBox="0 0 20 20" aria-hidden="true">
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.9l-4.94 2.81.94-5.5-4-3.9 5.53-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function LearnerTestimonialCard({ testimonial }) {
  const yearBadge = testimonial.yearBadge || 'May 2026';
  const isPlaced = testimonial.placed !== false;

  return (
    <article className="learner-testimonial-card learner-testimonial-card--placed">
      <span className="learner-testimonial-card__accent" aria-hidden="true" />

      {isPlaced ? (
        <span className="learner-testimonial-card__placed-badge">Placed</span>
      ) : null}

      <div className="learner-testimonial-card__profile">
        <div
          className={`learner-testimonial-card__avatar-wrap${
            testimonial.framed ? ' learner-testimonial-card__avatar-wrap--framed' : ''
          }`}
        >
          <img
            className={`learner-testimonial-card__avatar${
              testimonial.framed ? ' learner-testimonial-card__avatar--framed' : ''
            }`}
            src={testimonial.photo}
            alt={testimonial.name}
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="learner-testimonial-card__meta">
          <h3 className="learner-testimonial-card__name">{testimonial.name}</h3>
          <span className="learner-testimonial-card__year-badge">{yearBadge}</span>
          {testimonial.course ? (
            <p className="learner-testimonial-card__role">{testimonial.course}</p>
          ) : null}
          {testimonial.role ? (
            <p className="learner-testimonial-card__role">{testimonial.role}</p>
          ) : null}
          {!testimonial.course && !testimonial.role ? (
            <p className="learner-testimonial-card__role">iBridge360 Learner</p>
          ) : null}
          <StarRating />
        </div>
      </div>

      <blockquote className="learner-testimonial-card__quote">
        <span className="learner-testimonial-card__quote-mark" aria-hidden="true">
          &ldquo;
        </span>
        <p className="learner-testimonial-card__text">{testimonial.quote}</p>
      </blockquote>
    </article>
  );
}

const trustSignals = [
  { value: '500+', label: 'Learners Trained' },
  { value: '4.9/5', label: 'Average Rating' },
  { value: '100%', label: 'Real Learner Stories' },
];

function LearnerTestimonialsSection({
  excludeIds = [],
  items,
  showTrustSignals = true,
  eyebrow = 'Social Proof',
  title = 'Trusted by',
  titleAccent = 'Real Learners',
  subtitle = 'Honest feedback from professionals who completed our programs — structured training, mentor support, and career outcomes that speak for themselves.',
} = {}) {
  const carouselRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);

  const testimonials = (items || learnerTestimonials).filter(
    (item) => !excludeIds.includes(item.id),
  );

  useLearnerTestimonialCarousel({
    carouselRef,
    prevRef,
    nextRef,
    paginationRef,
    slideCount: testimonials.length,
  });

  if (!testimonials.length) return null;

  return (
    <Section tone="soft" spacing="flow" className="learner-testimonials">
      <div className="learner-testimonials__glow" aria-hidden="true" />

      <Container className="relative">
        <ProgramSectionHeader
          eyebrow={eyebrow}
          title={title}
          titleAccent={titleAccent}
          subtitle={subtitle}
        />

        {showTrustSignals ? (
          <ul className="learner-testimonials__trust">
            {trustSignals.map((item) => (
              <li key={item.label} className="learner-testimonials__trust-item">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="learner-testimonials__carousel-wrap">
          <button
            type="button"
            ref={prevRef}
            className="learner-testimonials__nav learner-testimonials__nav--prev"
            aria-label="Previous testimonial"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M14.5 7.5L10 12l4.5 4.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="swiper learner-testimonials-carousel" ref={carouselRef}>
            <div className="swiper-wrapper">
              {testimonials.map((testimonial) => (
                <div className="swiper-slide" key={testimonial.id}>
                  <LearnerTestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            ref={nextRef}
            className="learner-testimonials__nav learner-testimonials__nav--next"
            aria-label="Next testimonial"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M10.5 7.5L15 12l-4.5 4.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div
          ref={paginationRef}
          className="learner-testimonials__pagination"
          aria-hidden="true"
        />
      </Container>
    </Section>
  );
}

export default LearnerTestimonialsSection;
