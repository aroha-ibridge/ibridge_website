import { useEffect, useState } from 'react';
import { Button, Container, Section } from '../../components/ui';
import thankYouData from '../../content/company/thankYouData';
import {
  getPendingBrochureDownload,
  consumePendingBrochureDownload,
  triggerBrochureDownload,
} from '../../utils/programContext';
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
  const [brochure, setBrochure] = useState(null);

  useEffect(() => {
    const pending = getPendingBrochureDownload();
    if (pending && pending.url) {
      setBrochure(pending);
      // Ensure download triggers
      triggerBrochureDownload(pending.url, pending.filename);
      consumePendingBrochureDownload();
    }
  }, []);

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

          {brochure && (
            <div
              className="thank-you-page__brochure-banner"
              style={{
                margin: '20px 0 24px',
                padding: '20px 24px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, rgba(24, 71, 159, 0.08), rgba(45, 116, 217, 0.12))',
                border: '1.5px solid rgba(24, 71, 159, 0.25)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '12px',
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: '#18479F',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </div>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#18479F', margin: 0 }}>
                  Your Brochure is Ready!
                </h3>
                <p style={{ fontSize: '14px', color: '#334155', margin: '4px 0 0 0', maxWidth: '480px' }}>
                  {brochure.courseName ? `Detailed curriculum and brochure for ${brochure.courseName}.` : 'Your brochure download has initiated.'} If your download did not start automatically, please tap the button below.
                </p>
              </div>
              <button
                type="button"
                onClick={() => triggerBrochureDownload(brochure.url, brochure.filename)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 22px',
                  borderRadius: '10px',
                  backgroundColor: '#18479F',
                  color: '#ffffff',
                  fontSize: '14px',
                  fontWeight: '600',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(24, 71, 159, 0.25)',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Brochure Again
              </button>
            </div>
          )}

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
