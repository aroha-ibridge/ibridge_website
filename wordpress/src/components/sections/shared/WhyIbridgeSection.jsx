import '../../../styles/why-ibridge.css';
import { cn, Container, Section } from '../../ui';

function IconTarget() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="22" cy="26" r="14" stroke="currentColor" strokeWidth="2.4" />
      <circle cx="22" cy="26" r="8" stroke="currentColor" strokeWidth="2.4" />
      <circle cx="22" cy="26" r="2.6" fill="currentColor" />
      <path
        d="M30.5 12.5l9.5-4-3.2 9.2-10.8 6.6"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M32.8 15.2l5.2-1.6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

function IconCode() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="8" y="8" width="32" height="32" rx="7" stroke="currentColor" strokeWidth="2.4" />
      <path
        d="M20 17l-7 7 7 7M28 17l7 7-7 7"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconHex() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M24 5.5l11 6.4v12.7L24 31 13 24.6V11.9L24 5.5z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M13 24.6L24 31l11-6.4 5.5 3.2L24 42.5 7.5 27.8 13 24.6z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconMentor() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="22" cy="16" r="7" stroke="currentColor" strokeWidth="2.4" />
      <path
        d="M8.5 38.5c2.2-6.4 6.6-9.6 13.5-9.6 4.2 0 7.6 1.2 10.2 3.5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M34.5 9.2l1.35 2.75 3.05.44-2.2 2.15.52 3.02-2.72-1.43-2.72 1.43.52-3.02-2.2-2.15 3.05-.44 1.35-2.75z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconLaptop() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="8" y="10" width="32" height="22" rx="3" stroke="currentColor" strokeWidth="2.4" />
      <path d="M5 36.5h38" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path
        d="M20 17.5l-5 5 5 5M28 17.5l5 5-5 5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconBook() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M8 11c5-2.8 9.4-2.8 13 0v27c-3.6-2.8-8-2.8-13 0V11z"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M40 11c-5-2.8-9.4-2.8-13 0v27c3.6-2.8 8-2.8 13 0V11z"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconBriefcase() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="7" y="16" width="34" height="22" rx="4" stroke="currentColor" strokeWidth="2.4" />
      <path
        d="M18 16v-3.2A3.8 3.8 0 0 1 21.8 9h4.4A3.8 3.8 0 0 1 30 12.8V16"
        stroke="currentColor"
        strokeWidth="2.4"
      />
      <path d="M7 25h34" stroke="currentColor" strokeWidth="2.4" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M24 42s12.5-10.8 12.5-20.5a12.5 12.5 0 1 0-25 0C11.5 31.2 24 42 24 42z"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="21.5" r="4.5" stroke="currentColor" strokeWidth="2.4" />
    </svg>
  );
}

const ICONS = {
  target: IconTarget,
  code: IconCode,
  hex: IconHex,
  mentor: IconMentor,
  laptop: IconLaptop,
  book: IconBook,
  briefcase: IconBriefcase,
  pin: IconPin,
};

function WhyIbridgeSection({
  title = 'Why Choose',
  titleAccent = 'iBridge360?',
  description = 'We go beyond learning – we build your career.',
  items = [],
  tone = 'transparent',
  className = '',
} = {}) {
  if (!items.length) return null;

  return (
    <Section
      tone={tone}
      spacing="flow"
      className={cn('program-page-flow__section why-ibridge', className)}
      id="why-ibridge360"
    >
      <Container>
        <header className="why-ibridge__header">
          <h2 className="why-ibridge__title">
            {title}
            {titleAccent ? <span className="why-ibridge__title-accent"> {titleAccent}</span> : null}
          </h2>
          {description ? <p className="why-ibridge__subtitle">{description}</p> : null}
          <span className="why-ibridge__rule" aria-hidden="true" />
        </header>

        <ul className="why-ibridge__grid">
          {items.map((item) => {
            const Icon = ICONS[item.icon] || IconTarget;
            return (
              <li key={item.title} className="why-ibridge__card">
                <span className="why-ibridge__icon">
                  <Icon />
                </span>
                <strong className="why-ibridge__card-title">{item.title}</strong>
                <span className="why-ibridge__card-rule" aria-hidden="true" />
                {item.text ? <p className="why-ibridge__card-text">{item.text}</p> : null}
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}

export default WhyIbridgeSection;
