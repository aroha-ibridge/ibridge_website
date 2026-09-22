import { Fragment } from 'react';
import { Button, Container, Section } from '../../ui';
import { CORPORATE_PARTNER_LOGOS, EDUCATION_PARTNER_LOGOS } from '../../../constants/partnershipLogos';
import ProgramSectionHeader from '../shared/ProgramSectionHeader';
import MentorsShowcase from '../shared/MentorsShowcase';
import LogoMarquee from '../shared/LogoMarquee';
import LearnerTestimonialsSection from '../shared/LearnerTestimonialsSection';
import ContactUsForm from './ContactUsForm';
import '../../../styles/company-pages.css';
import '../../../styles/partnerships-marquee.css';

function ContactIcon({ type }) {
  if (type === 'mail') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M4 6h16v12H4z" />
        <path d="M4 7l8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === 'phone') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M6.5 4h3l1.5 5-2 1.5a11 11 0 005 5L17.5 13l5 1.5v3a2 2 0 01-2.1 2 17 17 0 01-15.4-10.9A2 2 0 014 6.5z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M12 21s7-5.2 7-11a7 7 0 10-14 0c0 5.8 7 11 7 11z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function AboutUsPage({ data }) {
  const { hero, stats, platformFeatures, leadership, advisor, aiPlatform, partnerships, cta } = data;

  return (
    <div className="company-page company-about-page tw-scope">
      <Section spacing="compact" className="company-hero company-about-hero relative overflow-hidden">
        <div className="company-hero__glow" aria-hidden="true" />
        <div className="company-about-hero__orb company-about-hero__orb--a" aria-hidden="true" />
        <div className="company-about-hero__orb company-about-hero__orb--b" aria-hidden="true" />
        <Container className="relative company-about-hero__grid">
          <div className="company-about-hero__copy">
            <div className="company-eyebrow">{hero.eyebrow}</div>
            <h1 className="company-about-hero__title">
              {hero.title}{' '}
              <span className="text-brand">{hero.titleAccent}</span>
            </h1>
            <p className="company-about-hero__subtitle">
              {hero.subtitle}
            </p>
            <div className="company-about-hero__actions">
              <Button type="button" size="lg" data-open-popup="17162" className="!rounded-xl">
                Enquire Now
              </Button>
              <Button to="/contact-us" size="lg" variant="outline" className="!rounded-xl">
                Contact Us
              </Button>
            </div>
          </div>
          <div className="company-about-hero__media">
            <div className="company-about-hero__frame">
              <img
                src={hero.image}
                alt={hero.imageAlt}
                className="company-about-hero__image"
                loading="eager"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="soft" spacing="tight" className="company-stats-band">
        <Container>
          <div className="company-stats">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="company-stat"
                style={{ '--about-delay': `${index * 70}ms` }}
              >
                <div className="company-stat__value">{stat.value}</div>
                <div className="company-stat__label">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="tight" className="company-about-features">
        <Container>
          <ProgramSectionHeader
            eyebrow="Platform"
            title="Our Platform"
            titleAccent="Features"
            subtitle="A complete ecosystem designed to measure capability, mentor learners, and accelerate productivity."
            className="company-about-section-header"
          />
          <div className="company-feature-grid">
            {platformFeatures.map((feature, index) => (
              <article
                key={feature.title}
                className="company-feature-card"
                style={{ '--about-delay': `${index * 60}ms` }}
              >
                <img src={feature.image} alt="" className="company-feature-card__icon" loading="lazy" />
                <h3 className="company-feature-card__title">{feature.title}</h3>
                <p className="company-feature-card__subtitle">{feature.subtitle}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="tight" className="company-about-ai">
        <Container>
          <ProgramSectionHeader
            eyebrow={aiPlatform.eyebrow}
            title={aiPlatform.title}
            titleAccent={aiPlatform.titleAccent}
            className="company-about-section-header"
          />
          <div className="company-about-ai__grid">
            <div className="company-about-ai__list">
              {aiPlatform.features.map((feature, index) => (
                <article
                  key={feature.title}
                  className="company-ai-card"
                  style={{ '--about-delay': `${index * 70}ms` }}
                >
                  <img src={feature.image} alt="" className="company-ai-card__icon" loading="lazy" />
                  <div>
                    <h3 className="company-ai-card__title">{feature.title}</h3>
                    <p className="company-ai-card__text">{feature.text}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="company-about-ai__media">
              <img
                src={aiPlatform.image}
                alt={aiPlatform.imageAlt}
                className="company-about-ai__image"
                loading="lazy"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="soft" spacing="tight" className="company-about-leadership">
        <Container>
          <ProgramSectionHeader
            eyebrow={leadership.eyebrow}
            title={leadership.title}
            titleAccent={leadership.titleAccent}
            subtitle={leadership.subtitle}
            className="company-about-section-header"
          />
          <div className="company-about-leadership__panel">
            {leadership.profiles.map((profile, index) => (
              <Fragment key={profile.role}>
                {index > 0 ? (
                  <div className="company-about-leadership__divider" aria-hidden="true">
                    <span className="company-about-leadership__divider-line" />
                  </div>
                ) : null}
                <article
                  className="company-about-leader"
                  style={{ '--about-delay': `${index * 90}ms` }}
                >
                  <div className="company-about-leader__photo">
                    <img
                      src={profile.image}
                      alt={profile.imageAlt}
                      className="company-about-leader__image"
                      loading="lazy"
                      style={
                        profile.photoPosition
                          ? { objectPosition: profile.photoPosition }
                          : undefined
                      }
                    />
                  </div>
                  <div className="company-about-leader__copy">
                    <p className="company-about-leader__role">{profile.roleFull}</p>
                    <div className="company-about-leader__heading">
                      <h3 className="company-about-leader__name">{profile.name}</h3>
                      {typeof profile.linkedin === 'string' && profile.linkedin.startsWith('http') ? (
                        <a
                          className="company-about-leader__linkedin"
                          href={profile.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${profile.name} on LinkedIn`}
                        >
                          <LinkedInIcon />
                        </a>
                      ) : null}
                    </div>
                    <div className="company-about-leader__message">
                      {profile.message.split(/\n+/).filter(Boolean).map((paragraph) => (
                        <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </article>
              </Fragment>
            ))}
          </div>
        </Container>
      </Section>

      {advisor?.profile ? (
        <Section spacing="tight" className="company-about-advisor">
          <Container>
            <ProgramSectionHeader
              eyebrow={advisor.eyebrow}
              title={advisor.title}
              titleAccent={advisor.titleAccent}
              className="company-about-section-header"
            />
            <article className="company-about-advisor__card">
              <div className="company-about-advisor__photo-wrap">
                <div className="company-about-advisor__photo">
                  <img
                    src={advisor.profile.image}
                    alt={advisor.profile.imageAlt}
                    className="company-about-advisor__image"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="company-about-advisor__copy">
                <p className="company-about-advisor__role">{advisor.profile.roleFull}</p>
                <div className="company-about-advisor__heading">
                  <h3 className="company-about-advisor__name">{advisor.profile.name}</h3>
                  <a
                    className="company-about-advisor__linkedin"
                    href="https://www.linkedin.com/in/anand-mutalik-ba1b771/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Anand Mutalik on LinkedIn"
                  >
                    <LinkedInIcon />
                  </a>
                </div>
                <div className="company-about-advisor__about">
                  {(advisor.profile.about || []).map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </article>
          </Container>
        </Section>
      ) : null}

      <MentorsShowcase />

      <Section tone="soft" spacing="tight" className="company-partners">
        <Container>
          <ProgramSectionHeader
            eyebrow={partnerships.eyebrow}
            title={partnerships.title}
            titleAccent={partnerships.titleAccent}
            subtitle={partnerships.subtitle}
            className="company-about-section-header"
          />
          <h3 className="company-partners__label">Corporates</h3>
          <LogoMarquee
            logos={CORPORATE_PARTNER_LOGOS}
            ariaLabel="Corporate partners"
            className="partnership-logo-marquee"
            tileClassName="partnership-logo-tile"
            duration={45}
          />
          <h3 className="company-partners__label company-partners__label--spaced">Educational Institutions</h3>
          <LogoMarquee
            logos={EDUCATION_PARTNER_LOGOS}
            ariaLabel="Education partners"
            className="partnership-logo-marquee"
            tileClassName="partnership-logo-tile"
            duration={40}
            minLogos={10}
            showName
          />

          <div className="company-about-testimonials mt-10 md:mt-12">
            <LearnerTestimonialsSection excludeIds={['giku']} />
          </div>
        </Container>
      </Section>

      <Section spacing="tight" className="company-cta">
        <Container>
          <div className="company-cta__panel">
            <div className="company-cta__copy">
              <h2 className="company-cta__title">{cta.title}</h2>
              <p className="company-cta__text">{cta.text}</p>
            </div>
            <div className="company-cta__actions">
              <Button to={cta.primaryHref} size="lg" variant="secondary" className="!bg-white !text-brand hover:!bg-brand-50 !rounded-xl">
                {cta.primaryLabel}
              </Button>
              <Button to={cta.secondaryHref} size="lg" variant="outline" className="!border-white/40 !text-white hover:!bg-white/10 !rounded-xl">
                {cta.secondaryLabel}
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

function ContactUsPage({ data }) {
  const { contacts, social, map, app, form } = data;

  return (
    <div className="company-page company-contact-page tw-scope">
      <Section tone="soft" spacing="tight" className="company-contact-main company-contact-main--top">
        <Container>
          <div className="company-contact-layout">
            <aside className="company-contact-aside">
              <ProgramSectionHeader
                align="left"
                className="!mb-3"
                eyebrow="Reach Us"
                title="Talk to"
                titleAccent="Our Team"
                subtitle="Pick the channel that works best for you — we read every message."
              />
              <div className="company-contact-cards">
                {contacts.map((contact) => (
                  <a
                    key={contact.id}
                    href={contact.href}
                    className="company-contact-card"
                    target={contact.id === 'address' ? '_blank' : undefined}
                    rel={contact.id === 'address' ? 'noopener noreferrer' : undefined}
                  >
                    <span className="company-contact-card__icon">
                      <ContactIcon type={contact.icon} />
                    </span>
                    <span className="company-contact-card__copy">
                      <span className="company-contact-card__label">{contact.label}</span>
                      <span className="company-contact-card__value">{contact.value}</span>
                      {contact.hint && (
                        <span className="company-contact-card__hint">{contact.hint}</span>
                      )}
                    </span>
                    <span className="company-contact-card__arrow" aria-hidden="true">
                      →
                    </span>
                  </a>
                ))}
              </div>
              <div className="company-social">
                <span className="company-social__title">Follow us</span>
                <div className="company-social__list">
                  {social.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="company-social__link"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </aside>

            <ContactUsForm
              learnerOptions={form.learnerOptions}
              source={form.source}
              eyebrow={form.eyebrow}
              title={form.title}
              subtitle={form.subtitle}
            />
          </div>
        </Container>
      </Section>

      <Section tone="soft" spacing="tight" className="company-contact-map-section">
        <Container>
          <div className="company-contact-map-grid">
            <article className="company-map-panel">
              <div className="company-map-panel__header">
                <ProgramSectionHeader
                  align="left"
                  className="!mb-0 company-contact-map-heading"
                  eyebrow="Location"
                  title={map.title}
                  titleAccent={map.titleAccent}
                  subtitle={map.subtitle}
                />
              </div>
              <div className="company-map__frame">
                <iframe
                  title={map.label}
                  src={map.embedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <div className="company-map-panel__footer">
                <div className="company-map-panel__meta">
                  <span className="company-map-panel__pin" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M12 21s7-5.2 7-11a7 7 0 10-14 0c0 5.8 7 11 7 11z" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                  </span>
                  <div>
                    <p className="company-map-panel__address">{map.addressShort}</p>
                    <p className="company-map-panel__hours">{map.hours}</p>
                  </div>
                </div>
                <Button
                  href={map.directionsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="md"
                  variant="outline"
                  className="company-map-panel__cta !rounded-xl shrink-0"
                >
                  Get Directions
                </Button>
              </div>
            </article>

            <article className="company-app-panel">
              <ProgramSectionHeader
                align="left"
                className="!mb-3 company-contact-map-heading"
                eyebrow="Mobile app"
                title={app.title}
                titleAccent={app.titleAccent}
                subtitle={app.subtitle}
              />
              <div className="company-app-panel__badges">
                <a
                  href={app.playStoreHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="company-app-panel__badge"
                >
                  <img src={app.playStoreBadge} alt="Get it on Google Play" width="135" height="40" />
                </a>
                <a
                  href={app.appStoreHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="company-app-panel__badge"
                >
                  <img src={app.appStoreBadge} alt="Download on the App Store" width="135" height="40" />
                </a>
              </div>
            </article>
          </div>
        </Container>
      </Section>
    </div>
  );
}

export { AboutUsPage, ContactUsPage };
