import { Link } from 'react-router-dom';

import { Button, Container, Section } from '../../ui';
import { CORPORATE_PARTNER_LOGOS, EDUCATION_PARTNER_LOGOS } from '../../../constants/partnershipLogos';
import ProgramSectionHeader from './ProgramSectionHeader';
import ProgramFaqSection from './ProgramFaqSection';
import LogoMarquee from './LogoMarquee';
import AudienceLeadForm from './AudienceLeadForm';
import TrainingProcessSection from './TrainingProcessSection';
import FeatureExplorerAccordion from './FeatureExplorerAccordion';
import { CUSTOMIZE_PROGRAM_URL } from '../../../content/audience/sharedAudienceContent';
import { resolveTopicPath } from '../../../content/training/trainingPrograms';
import '../../../styles/audience-landing.css';
import '../../../styles/partnerships-marquee.css';

const PARTNER_LOGOS = {
  corporate: CORPORATE_PARTNER_LOGOS,
  education: EDUCATION_PARTNER_LOGOS,
  combined: Array.from(
    new Map(
      [...CORPORATE_PARTNER_LOGOS, ...EDUCATION_PARTNER_LOGOS].map((logo) => [logo.src, logo]),
    ).values(),
  ),
};

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" className="w-5 h-5 shrink-0 text-brand" aria-hidden="true">
      <path
        fill="currentColor"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      />
    </svg>
  );
}

function resolveProgramLink({ name, slug, internal, to }) {
  if (to) return to.startsWith('/') ? to : `/${to}`;

  const mapped = resolveTopicPath(name);
  if (mapped) return mapped;

  if (slug && slug !== 'contact' && (internal || slug.startsWith('institution-'))) {
    return slug.startsWith('/') ? slug : `/${slug}`;
  }

  return `/contact-us?program=${encodeURIComponent(name || '')}`;
}

function ProgramCard({ name, slug, internal, ctaLabel = 'Explore Program →' }) {
  const to = resolveProgramLink({ name, slug, internal });

  return (
    <Link
      to={to}
      className="audience-landing-card group flex flex-col rounded-2xl border border-surface-border bg-white p-4 md:p-5 transition-all duration-200 hover:-translate-y-1 hover:border-brand/25 hover:shadow-card"
    >
      <h3 className="text-base font-semibold text-ink group-hover:text-brand transition-colors">{name}</h3>
      <span className="mt-2 text-sm font-medium text-brand">{ctaLabel}</span>
    </Link>
  );
}

function AudienceLandingPage({ config }) {
  const {
    hero,
    trustedBy,
    whyMatters,
    keyCapabilities,
    howItWorks,
    whyChoose,
    programs,
    programsSection,
    featureExplorer,
    technologies,
    industries,
    assessmentTypes,
    assessmentTypesSection,
    securitySection,
    reportsHighlight,
    deliveryModes,
    deliveryModesSection,
    process = [],
    processSection,
    benefits,
    faq,
    faqId,
    consultation,
    leadForm,
    footer,
    footerSeo,
    partners = { type: 'corporate', ariaLabel: 'Partner logos', showNames: false },
  } = config;

  const partnerLogos = PARTNER_LOGOS[partners.type] || CORPORATE_PARTNER_LOGOS;
  const educationPartners = partners.education;
  const programCtaLabel = programsSection?.cardCtaLabel || 'Explore Program →';
  const deliverySection = deliveryModesSection || {
    eyebrow: 'Delivery',
    title: 'Flexible',
    titleAccent: 'Delivery Modes',
  };
  const assessmentTypeSection = assessmentTypesSection || {
    eyebrow: 'Assessment Types',
    title: 'Types of Assessments',
    titleAccent: 'You Can Conduct',
  };
  const processSteps = process || [];
  const processHasDetails = processSteps.some((step) => typeof step === 'object' && step?.text);
  const simpleProcessSteps = processHasDetails
    ? []
    : processSteps.map((step) => (typeof step === 'string' ? step : step.title)).filter(Boolean);

  return (
    <div className="audience-landing-page tw-scope">
      <Section spacing="hero" className="relative overflow-hidden audience-landing-hero">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-0"
          style={{
            background:
              'radial-gradient(1200px 500px at 20% 0%, rgba(24, 71, 159, 0.08), transparent 60%), radial-gradient(900px 400px at 100% 100%, rgba(45, 116, 217, 0.06), transparent 60%)',
          }}
        />
        <Container className="relative grid gap-8 lg:grid-cols-2 lg:gap-10 items-center">
          <div>
            {hero.eyebrow && (
              <div className="inline-flex items-center gap-3 text-ink-muted text-[11px] font-semibold uppercase tracking-[0.18em] mb-5">
                <span className="h-px w-8 bg-brand/40" aria-hidden="true" />
                {hero.eyebrow}
              </div>
            )}
            <h1 className="text-3xl md:text-5xl font-bold leading-[1.12] tracking-tight text-ink">
              {hero.title}{' '}
              <span className="text-brand">{hero.titleAccent}</span>
            </h1>
            <p className="mt-4 text-base md:text-lg text-ink-muted leading-relaxed max-w-2xl">
              {hero.subtitle}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button type="button" size="lg" data-open-popup="17162">
                {hero.primaryCtaLabel || 'Enquire Now'}
              </Button>
              {hero.secondaryCtaLabel && (
                <Button
                  to={hero.secondaryCtaHref || CUSTOMIZE_PROGRAM_URL}
                  size="lg"
                  variant="outline"
                >
                  {hero.secondaryCtaLabel}
                </Button>
              )}
            </div>
          </div>
          <div className="flex justify-center lg:justify-end min-w-0">
            <img
              src={hero.image}
              alt={hero.imageAlt}
              className={
                hero.imageClassName ||
                'w-full max-w-2xl rounded-2xl border border-brand/10 shadow-card object-cover'
              }
              loading="eager"
              decoding="async"
            />
          </div>
        </Container>
      </Section>

      <Section tone="soft" spacing="flow" className="audience-landing-trusted">
        <Container>
          <ProgramSectionHeader
            className="audience-landing-header"
            eyebrow={trustedBy.eyebrow}
            title={trustedBy.title}
            titleAccent={trustedBy.titleAccent}
          />
          {trustedBy.stats?.length > 0 && (
            <div className="audience-landing-stats grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {trustedBy.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="audience-landing-stat rounded-2xl border border-brand/10 bg-white p-4 text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-brand">{stat.value}</div>
                  <div className="mt-1 text-sm text-ink-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
          <LogoMarquee
            logos={partnerLogos}
            ariaLabel={partners.ariaLabel}
            className="partnership-logo-marquee"
            tileClassName="partnership-logo-tile"
            duration={45}
            showName={partners.showNames}
          />
          {educationPartners && (
            <div className="mt-8 md:mt-10">
              <LogoMarquee
                logos={EDUCATION_PARTNER_LOGOS}
                ariaLabel={educationPartners.ariaLabel || 'Education partner institutions'}
                className="partnership-logo-marquee"
                tileClassName="partnership-logo-tile"
                duration={40}
                minLogos={8}
                showName={educationPartners.showNames !== false}
              />
            </div>
          )}
        </Container>
      </Section>

      {whyMatters && (
        <Section spacing="flow">
          <Container>
            <ProgramSectionHeader
              className="audience-landing-header"
              eyebrow={whyMatters.eyebrow}
              title={whyMatters.title}
              titleAccent={whyMatters.titleAccent}
              subtitle={whyMatters.subtitle}
              subtitle2={whyMatters.subtitle2}
            />
            {whyMatters.points?.length > 0 && (
              <div className="audience-landing-why-grid grid gap-3 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
                {whyMatters.points.map((point) => (
                  <div key={point.title} className="rounded-2xl border border-surface-border bg-white p-5">
                    <h3 className="text-base font-semibold text-ink">{point.title}</h3>
                    <p className="mt-2 text-sm text-ink-muted leading-relaxed">{point.text}</p>
                  </div>
                ))}
              </div>
            )}
            {whyMatters.flow?.length > 0 && (
              <div
                className={`audience-landing-flow flex flex-col md:flex-row items-stretch justify-center gap-3 md:gap-0 max-w-4xl mx-auto ${
                  whyMatters.points?.length > 0 ? 'mt-8 md:mt-10' : ''
                }`}
              >
                {whyMatters.flow.map((step, index) => (
                  <div key={step} className="flex flex-col md:flex-row items-center flex-1">
                    <div className="audience-landing-flow__step w-full text-center rounded-xl border border-brand/15 bg-brand/[0.04] px-4 py-3 text-sm font-semibold text-brand">
                      {step}
                    </div>
                    {index < whyMatters.flow.length - 1 && (
                      <span className="audience-landing-flow__arrow text-brand text-xl py-1 md:px-2" aria-hidden="true">
                        ↓
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </Container>
        </Section>
      )}

      {keyCapabilities?.items?.length > 0 && (
        <Section tone="soft" spacing="flow" id="key-capabilities">
          <Container>
            <ProgramSectionHeader
              className="audience-landing-header"
              eyebrow={keyCapabilities.eyebrow}
              title={keyCapabilities.title}
              titleAccent={keyCapabilities.titleAccent}
            />
            <div className="mx-auto max-w-4xl grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
              {keyCapabilities.items.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col items-center gap-2.5 rounded-2xl border border-surface-border bg-white px-4 py-5 text-center shadow-sm hover:shadow-card hover:border-brand/20 transition-all duration-200"
                >
                  {item.image ? (
                    <img
                      src={item.image}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="h-14 w-14 md:h-16 md:w-16 object-contain"
                      aria-hidden="true"
                    />
                  ) : (
                    <span className="text-2xl md:text-3xl" aria-hidden="true">
                      {item.icon}
                    </span>
                  )}
                  <span className="text-sm md:text-[15px] font-semibold text-ink leading-snug">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {howItWorks?.steps?.length > 0 && (
        <Section spacing="flow" id="how-it-works">
          <Container>
            <ProgramSectionHeader
              className="audience-landing-header"
              eyebrow={howItWorks.eyebrow}
              title={howItWorks.title}
              titleAccent={howItWorks.titleAccent}
            />
            <div className="audience-landing-flow flex flex-col md:flex-row items-stretch justify-center gap-3 md:gap-0 max-w-5xl mx-auto">
              {howItWorks.steps.map((step, index) => (
                <div key={step} className="flex flex-col md:flex-row items-center flex-1">
                  <div className="audience-landing-flow__step w-full text-center rounded-xl border border-brand/15 bg-brand/[0.04] px-3 py-3 text-sm font-semibold text-brand">
                    {step}
                  </div>
                  {index < howItWorks.steps.length - 1 && (
                    <span className="audience-landing-flow__arrow text-brand text-xl py-1 md:px-1.5" aria-hidden="true">
                      ↓
                    </span>
                  )}
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {processHasDetails && (
        <Section tone="soft" spacing="flow" id="how-it-works-detail">
          <Container>
            <ProgramSectionHeader
              className="audience-landing-header"
              eyebrow={processSection?.eyebrow || 'How It Works'}
              title={processSection?.title || 'How It'}
              titleAccent={processSection?.titleAccent || 'Works'}
            />
            <ol className="mx-auto max-w-3xl space-y-4">
              {processSteps.map((step, index) => (
                <li key={step.title || index}>
                  <div className="rounded-2xl border border-surface-border bg-white p-5 md:p-6">
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-sm font-bold text-brand">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className="text-base md:text-lg font-semibold text-ink">{step.title}</h3>
                        <p className="mt-1.5 text-sm text-ink-muted leading-relaxed">{step.text}</p>
                      </div>
                    </div>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="flex justify-center py-2 text-brand text-xl" aria-hidden="true">
                      ↓
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </Container>
        </Section>
      )}

      {whyChoose && (
        <Section spacing="flow">
          <Container>
            <ProgramSectionHeader
              className="audience-landing-header"
              eyebrow={whyChoose.eyebrow}
              title={whyChoose.title}
              titleAccent={whyChoose.titleAccent}
            />
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
              {whyChoose.items.map((item) => (
                <div key={item.title} className="flex gap-3 rounded-2xl border border-surface-border bg-white p-5">
                  <CheckIcon />
                  <div>
                    <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                    <p className="mt-1.5 text-sm text-ink-muted leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {programs?.length > 0 && programsSection && (
        <Section id="programs" spacing="flow">
          <Container>
            <ProgramSectionHeader
              className="audience-landing-header"
              eyebrow={programsSection.eyebrow}
              title={programsSection.title}
              titleAccent={programsSection.titleAccent}
              subtitle={programsSection.subtitle}
            />
            {programsSection.layout === 'table' || programsSection.layout === 'icon-list' ? (
              <div
                className={
                  programsSection.layout === 'icon-list'
                    ? 'audience-landing-feature-icons mx-auto max-w-4xl'
                    : 'audience-landing-features-table mx-auto max-w-4xl overflow-hidden rounded-2xl border border-surface-border bg-white'
                }
              >
                <ul
                  className={
                    programsSection.layout === 'icon-list'
                      ? 'grid grid-cols-1 sm:grid-cols-2 gap-3'
                      : 'grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0'
                  }
                >
                  {programs.map((program, index) => {
                    const to = resolveProgramLink(program);
                    const isContact = to.startsWith('/contact-us');
                    const rowClass =
                      programsSection.layout === 'icon-list'
                        ? 'flex items-center gap-3 rounded-xl border border-surface-border bg-white px-4 py-3.5 text-sm md:text-[15px] font-medium text-ink transition hover:border-brand/25'
                        : `flex items-start gap-3 px-5 py-3.5 text-sm md:text-[15px] font-medium text-ink border-surface-border ${
                            index % 2 === 0 ? 'sm:border-r' : ''
                          } ${index >= 2 ? 'sm:border-t' : ''}`;

                    const inner = (
                      <>
                        <span className="audience-landing-feature-icons__icon shrink-0" aria-hidden="true">
                          <CheckIcon />
                        </span>
                        <span>{program.name}</span>
                      </>
                    );

                    return (
                      <li key={program.name}>
                        {isContact ? (
                          <div className={rowClass}>{inner}</div>
                        ) : (
                          <Link to={to} className={`${rowClass} hover:text-brand`}>
                            {inner}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : (
              <div className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-4">
                {programs.map((program) => (
                  <ProgramCard key={program.name} {...program} ctaLabel={programCtaLabel} />
                ))}
              </div>
            )}
          </Container>
        </Section>
      )}

      {(featureExplorer?.categories?.length > 0 || featureExplorer?.items?.length > 0) && (
        <Section tone="soft" spacing="flow" id="explore-features">
          <Container>
            <ProgramSectionHeader
              className="audience-landing-header"
              eyebrow={featureExplorer.eyebrow}
              title={featureExplorer.title}
              titleAccent={featureExplorer.titleAccent}
              subtitle={featureExplorer.subtitle}
            />
            <FeatureExplorerAccordion
              categories={featureExplorer.categories}
              items={featureExplorer.items}
            />
          </Container>
        </Section>
      )}

      {technologies?.length > 0 && (
      <Section tone="soft" spacing="flow">
        <Container>
          <ProgramSectionHeader
            className="audience-landing-header"
            eyebrow="Tech Stack"
            title="Technologies"
            titleAccent="We Cover"
          />
          <div className="flex flex-wrap justify-center gap-2.5 md:gap-3">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 rounded-full border border-surface-border bg-white px-4 py-2.5 text-sm font-medium text-ink shadow-sm"
              >
                <img src={tech.logo} alt="" className="w-6 h-6 object-contain" loading="lazy" />
                {tech.name}
              </div>
            ))}
          </div>
        </Container>
      </Section>
      )}

      {industries?.length > 0 && (
      <Section spacing="flow">
        <Container>
          <ProgramSectionHeader
            className="audience-landing-header"
            eyebrow="Industries"
            title="Industries"
            titleAccent="We Serve"
          />
          <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 sm:gap-4">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="flex items-center gap-3 rounded-2xl border border-surface-border bg-white p-4"
              >
                <span className="text-2xl" aria-hidden="true">
                  {industry.icon}
                </span>
                <span className="font-semibold text-ink">{industry.name}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      )}

      {deliveryModes?.length > 0 && (
      <Section tone="soft" spacing="flow" id="solutions">
        <Container>
          <ProgramSectionHeader
            className="audience-landing-header"
            eyebrow={deliverySection.eyebrow}
            title={deliverySection.title}
            titleAccent={deliverySection.titleAccent}
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
            {deliveryModes.map((mode) => (
              <div key={mode.title} className="rounded-2xl border border-brand/10 bg-white p-5">
                <h3 className="text-base font-semibold text-brand">{mode.title}</h3>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">{mode.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      )}

      {reportsHighlight && (
        <Section spacing="flow" id="reports-analytics">
          <Container>
            <div className="mx-auto max-w-4xl rounded-3xl border border-brand/15 bg-gradient-to-br from-brand/[0.06] via-white to-brand/[0.03] p-6 md:p-10 text-center">
              <ProgramSectionHeader
                className="audience-landing-header !mb-4"
                eyebrow={reportsHighlight.eyebrow}
                title={reportsHighlight.title}
                titleAccent={reportsHighlight.titleAccent}
                subtitle={reportsHighlight.subtitle}
              />
              <Button type="button" size="lg" data-open-popup="17162">
                Request Demo
              </Button>
            </div>
          </Container>
        </Section>
      )}

      {assessmentTypes?.length > 0 && (
        <Section spacing="flow">
          <Container>
            <ProgramSectionHeader
              className="audience-landing-header"
              eyebrow={assessmentTypeSection.eyebrow}
              title={assessmentTypeSection.title}
              titleAccent={assessmentTypeSection.titleAccent}
            />
            <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
              {assessmentTypes.map((type) => (
                <div
                  key={type}
                  className="flex items-center gap-2 rounded-xl border border-surface-border bg-white px-4 py-3 text-sm font-medium text-ink"
                >
                  <CheckIcon />
                  {type}
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {securitySection?.items?.length > 0 && (
        <Section tone="soft" spacing="flow">
          <Container>
            <ProgramSectionHeader
              className="audience-landing-header"
              eyebrow={securitySection.eyebrow}
              title={securitySection.title}
              titleAccent={securitySection.titleAccent}
              subtitle={securitySection.subtitle}
            />
            <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
              {securitySection.items.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-xl border border-surface-border bg-white px-4 py-3 text-sm font-medium text-ink"
                >
                  <CheckIcon />
                  {item}
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {simpleProcessSteps.length > 0 && (
        <TrainingProcessSection
          steps={simpleProcessSteps}
          eyebrow={processSection?.eyebrow}
          title={processSection?.title}
          titleAccent={processSection?.titleAccent}
        />
      )}

      {benefits && (
      <Section spacing="flow">
        <Container>
          <ProgramSectionHeader
            className="audience-landing-header"
            eyebrow={benefits.eyebrow || 'Benefits'}
            title={benefits.title || 'Business'}
            titleAccent={benefits.titleAccent || 'Outcomes'}
            subtitle={benefits.intro}
          />
          <div className="audience-landing-benefits grid gap-6 lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="audience-landing-benefits__media">
              <img
                src={benefits.image}
                alt={benefits.imageAlt || ''}
                className="audience-landing-benefits__image"
                loading="lazy"
              />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {benefits.items.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-2 rounded-xl border border-surface-border bg-white px-4 py-3 text-sm font-medium text-ink"
                >
                  <CheckIcon />
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
      )}

      <ProgramFaqSection
        eyebrow={faq.eyebrow}
        title={faq.title}
        titleAccent={faq.titleAccent}
        description={faq.description}
        categories={faq.categories}
        id={faqId}
        tone="default"
        spacing="flow"
        className="audience-landing-faq"
      />

      <Section id="consultation" tone="soft" spacing="flow" className="audience-landing-consultation">
        <Container className="max-w-4xl">
          <ProgramSectionHeader
            className="audience-landing-header"
            eyebrow={consultation.eyebrow}
            title={consultation.title}
            titleAccent={consultation.titleAccent}
            subtitle={consultation.subtitle}
          />
          <AudienceLeadForm formConfig={leadForm} />
        </Container>
      </Section>

      <Section tone="default" spacing="flow" className="audience-landing-footer border-t border-surface-border">
        <Container className="max-w-4xl text-center">
          <h2 className="text-xl font-bold text-ink">{footer.title}</h2>
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm font-medium">
            <a href="tel:+919611260360" className="text-brand hover:underline">
              📞 Call Us
            </a>
            <a href="mailto:support@ibridge360.com" className="text-brand hover:underline">
              ✉ Email Us
            </a>
            <a
              href="https://wa.me/919611260360"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline"
            >
              💬 WhatsApp Us
            </a>
          </div>
          <p className="audience-landing-footer-seo mt-6 text-sm text-ink-muted leading-relaxed text-left md:text-center">
            {footerSeo}
          </p>
        </Container>
      </Section>
    </div>
  );
}

export default AudienceLandingPage;
