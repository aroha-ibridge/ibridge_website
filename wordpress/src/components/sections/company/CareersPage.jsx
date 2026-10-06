import { useMemo, useState } from 'react';

import { Button, Container, Section } from '../../ui';
import ProgramSectionHeader from '../shared/ProgramSectionHeader';
import { InterestForm } from './CareerInterestForm';
import '../../../styles/company-pages.css';
import '../../../styles/careers-page.css';

// "Full-time / Part-time / Contract" → "Full-time"; "Internship · 3–6 months" → "Internship".
function simplifyType(type = '') {
  return type.split(/[/·]/)[0].trim();
}

// "Bengaluru / Hyderabad / Flexible" → "Bengaluru".
function simplifyLocation(location = '') {
  return location.split('/')[0].trim();
}

function PinIcon() {
  return (
    <svg viewBox="0 0 20 20" width="14" height="14" fill="none" aria-hidden="true">
      <path
        d="M10 18s6-5.1 6-9.8A6 6 0 0 0 4 8.2C4 12.9 10 18 10 18Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="8.2" r="2.1" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 20 20" width="18" height="18" fill="none" aria-hidden="true">
      <circle cx="8.8" cy="8.8" r="5.8" stroke="currentColor" strokeWidth="1.6" />
      <path d="m17 17-3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function CareersPage({ data }) {
  const { hiring, roles, openApplication, equalOpportunity, contact, jobs } = data;
  const [query, setQuery] = useState('');

  const filteredJobs = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return jobs;
    return jobs.filter((job) => {
      const haystack = `${job.title} ${job.summary} ${job.department} ${job.location} ${job.workMode} ${(job.skills || []).join(' ')}`.toLowerCase();
      return haystack.includes(needle);
    });
  }, [jobs, query]);

  return (
    <div className="company-page company-about-page company-careers-page tw-scope">
      <Section
        id="open-roles"
        spacing="hero"
        className="careers-roles-hero relative overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(9, 14, 28, 0.76), rgba(9, 14, 28, 0.72)), url('/wp-content/uploads/2026/07/corporate-benefits-laptop-team.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container className="relative">
          <h1 className="careers-roles-heading">
            {roles.title} <span className="text-brand">{roles.titleAccent}</span>
          </h1>

          <label className="careers-search-bar">
            <SearchIcon />
            <span className="sr-only">Search roles</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by role or skill"
            />
          </label>
        </Container>
      </Section>

      <Section tone="soft" spacing="tight" className="careers-grid-band">
        <Container>
          {filteredJobs.length === 0 ? (
            <p className="careers-empty">
              No open role matches that search. Try a different word, or send an open application below.
            </p>
          ) : (
            <div className="careers-grid">
              {filteredJobs.map((job) => (
                <a key={job.id} href={`/careers/apply/${job.id}`} className="careers-card">
                  <h3 className="careers-card__title">{job.title}</h3>
                  <div className="careers-card__meta">
                    <span className="careers-card__location">
                      <PinIcon />
                      {simplifyLocation(job.location)}
                    </span>
                    <span className="careers-card__badge">Apply Now</span>
                  </div>
                </a>
              ))}
            </div>
          )}
          <p className="careers-note">{equalOpportunity}</p>
        </Container>
      </Section>

      <Section id="how-we-hire" spacing="tight">
        <Container>
          <ProgramSectionHeader
            eyebrow={hiring.eyebrow}
            title={hiring.title}
            titleAccent={hiring.titleAccent}
            className="company-about-section-header"
          />
          <ol className="careers-steps">
            {hiring.steps.map((item) => (
              <li key={item.step} className="careers-step">
                <span className="careers-step__index">{item.step}</span>
                <h3 className="careers-step__title">{item.title}</h3>
                <p className="careers-step__text">{item.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section id="open-application" tone="soft" spacing="tight">
        <Container>
          <div className="careers-open-layout">
            <ProgramSectionHeader
              align="left"
              eyebrow={openApplication.eyebrow}
              title={openApplication.title}
              titleAccent={openApplication.titleAccent}
              subtitle={openApplication.subtitle}
              className="!mb-0"
            />
            <InterestForm
              roleTitle="Open application"
              source="Careers page"
              eyebrow="General interest"
              title="Tell us what you do"
              subtitle="If a matching role opens, we will write to the email you share."
              submitLabel="Send open application"
              noteLabel="Tell us about yourself"
              notePlaceholder="The work you do, the teams you have been on, and what you want to do next."
              compact
            />
          </div>
        </Container>
      </Section>

      <Section spacing="tight" className="company-cta">
        <Container>
          <div className="company-cta__panel">
            <div className="company-cta__copy">
              <h2 className="company-cta__title">Questions before you apply?</h2>
              <p className="company-cta__text">
                Write to {contact.email} or call {contact.phone}. Office: {contact.address}.
              </p>
            </div>
            <div className="company-cta__actions">
              <Button
                href={contact.emailHref}
                size="lg"
                variant="secondary"
                className="!bg-white !text-brand hover:!bg-brand-50 !rounded-xl"
              >
                Email hiring
              </Button>
              <Button
                href={contact.phoneHref}
                size="lg"
                variant="outline"
                className="!border-white/40 !text-white hover:!bg-white/10 !rounded-xl"
              >
                Call us
              </Button>
            </div>
          </div>
        </Container>
      </Section>

    </div>
  );
}

export default CareersPage;
