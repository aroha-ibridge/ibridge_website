import { Button, Container, Section } from '../../components/ui';
import thankYouData from '../../content/company/thankYouData';
import '../../styles/thank-you-page.css';

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12.5l4.5 4.5L19 7.5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ThankYou() {
  const data = thankYouData;

  return (
    <Section
      tone="transparent"
      spacing="tight"
      className="thank-you-page"
      aria-labelledby="thank-you-title"
    >
      <div className="thank-you-page__glow" aria-hidden="true" />

      <Container className="thank-you-page__container">
        <div className="thank-you-page__panel">
          <header className="thank-you-page__header">
            <div className="thank-you-page__mark" aria-hidden="true">
              <CheckIcon />
            </div>
            <p className="thank-you-page__eyebrow">{data.eyebrow}</p>
            <h1 id="thank-you-title" className="thank-you-page__title">
              {data.title}{' '}
              <span className="thank-you-page__title-accent">{data.titleAccent}</span>
            </h1>
            <p className="thank-you-page__subtitle">{data.subtitle}</p>
          </header>

          <div className="thank-you-page__actions">
            <Button to={data.primaryCta.href} size="lg" className="thank-you-page__btn">
              {data.primaryCta.label}
            </Button>
            <Button
              to={data.secondaryCta.href}
              variant="outline"
              size="lg"
              className="thank-you-page__btn"
            >
              {data.secondaryCta.label}
            </Button>
          </div>

          <ol className="thank-you-page__highlights">
            {data.highlights.map((item, index) => (
              <li key={item.title} className="thank-you-page__highlight">
                <span className="thank-you-page__step">{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ol>

          <p className="thank-you-page__support">{data.supportNote}</p>
        </div>
      </Container>
    </Section>
  );
}

export default ThankYou;
