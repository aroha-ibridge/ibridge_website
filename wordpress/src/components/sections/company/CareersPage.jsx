import { useMemo, useState } from 'react';

import { Button, Container, Section } from '../../ui';
import ProgramSectionHeader from '../shared/ProgramSectionHeader';
import { InterestForm } from './CareerInterestForm';
import '../../../styles/company-pages.css';
import '../../../styles/careers-page.css';

function CareersPage({ data }) {
  const { hero, whyJoin, hiring, roles, openApplication, equalOpportunity, contact, jobs } = data;
  const departments = useMemo(() => {
    const seen = [];
    jobs.forEach((job) => {
      if (!seen.includes(job.department)) seen.push(job.department);
    });
    return seen;
  }, [jobs]);

  const [department, setDepartment] = useState('All');
  const [query, setQuery] = useState('');

  const filteredJobs = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return jobs.filter((job) => {
      if (department !== 'All' && job.department !== department) return false;
      if (!needle) return true;
      const haystack = `${job.title} ${job.summary} ${job.department} ${job.location} ${job.workMode} ${(job.skills || []).join(' ')}`.toLowerCase();
      return haystack.includes(needle);
    });
  }, [jobs, department, query]);

  const departmentCounts = useMemo(() => {
    const counts = { All: jobs.length };
    jobs.forEach((job) => {
      counts[job.department] = (counts[job.department] || 0) + 1;
    });
    return counts;
  }, [jobs]);

  return (
    <div className="company-page company-about-page company-careers-page tw-scope">
      <Section spacing="compact" className="company-hero company-about-hero relative overflow-hidden">
        <div className="company-hero__glow" aria-hidden="true" />
        <div className="company-about-hero__orb company-about-hero__orb--a" aria-hidden="true" />
        <div className="company-about-hero__orb company-about-hero__orb--b" aria-hidden="true" />
        <Container className="relative company-about-hero__grid">
          <div className="company-about-hero__copy">
            <div className="company-eyebrow">{hero.eyebrow}</div>
            <h1 className="company-about-hero__title">
              {hero.title} <span className="text-brand">{hero.titleAccent}</span>
            </h1>
            <p className="company-about-hero__subtitle">{hero.subtitle}</p>
            <div className="company-about-hero__actions">
              <Button href="#open-roles" size="lg" className="!rounded-xl">
                View open roles
              </Button>
              <Button href="#how-we-hire" size="lg" variant="outline" className="!rounded-xl">
                How hiring works
              </Button>
            </div>
          </div>
          <div className="company-about-hero__media">
            <div className="company-about-hero__frame">
              <img
                src="/wp-content/uploads/2026/07/corporate-benefits-laptop-team.jpg"
                alt="A team of mentors and trainers working together on laptops"
                className="company-about-hero__image careers-hero-image"
                width="960"
                height="640"
                loading="eager"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="tight">
        <Container>
          <ProgramSectionHeader
            eyebrow={whyJoin.eyebrow}
            title={whyJoin.title}
            titleAccent={whyJoin.titleAccent}
            subtitle={whyJoin.subtitle}
            className="company-about-section-header"
          />
          <div className="company-feature-grid">
            {whyJoin.items.map((item, index) => (
              <article key={item.title} className="company-feature-card" style={{ '--about-delay': `${index * 60}ms` }}>
                <h3 className="company-feature-card__title">{item.title}</h3>
                <p className="company-feature-card__subtitle">{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="how-we-hire" tone="soft" spacing="tight">
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

      <Section id="open-roles" spacing="tight">
        <Container>
          <ProgramSectionHeader
            eyebrow={roles.eyebrow}
            title={roles.title}
            titleAccent={roles.titleAccent}
            subtitle={roles.subtitle}
            className="company-about-section-header"
          />
          <div className="careers-toolbar">
            <div className="careers-filters" role="group" aria-label="Filter by team">
              {['All', ...departments].map((item) => {
                const selected = department === item;
                return (
                  <button
                    key={item}
                    type="button"
                    aria-pressed={selected}
                    className={`careers-filter${selected ? ' is-active' : ''}`}
                    onClick={() => setDepartment(item)}
                  >
                    {item}
                    <span className="careers-filter__count">{departmentCounts[item] || 0}</span>
                  </button>
                );
              })}
            </div>
            <label className="careers-search">
              <span className="sr-only">Search roles</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by role or skill"
              />
            </label>
          </div>

          {filteredJobs.length === 0 ? (
            <p className="careers-empty">
              No open role matches that filter. Try another team, or send an open application below.
            </p>
          ) : (
            <ul className="careers-role-list">
              {filteredJobs.map((job) => (
                <li key={job.id}>
                  <article className="careers-role-card">
                    <div className="careers-role-card__main">
                      <p className="careers-role-card__dept">{job.department}</p>
                      <h3 className="careers-role-card__title">
                        <a className="careers-role-card__open" href={`/careers/apply/${job.id}`}>
                          {job.title}
                        </a>
                      </h3>
                      <p className="careers-role-card__summary">{job.summary}</p>
                      <ul className="careers-role-card__meta">
                        <li>{job.location}</li>
                        <li>{job.workMode}</li>
                        <li>{job.type}</li>
                        <li>{job.experience}</li>
                      </ul>
                    </div>
                    <Button href={`/careers/apply/${job.id}`} variant="outline" className="careers-role-card__cta !rounded-xl">
                      I&apos;m interested
                    </Button>
                  </article>
                </li>
              ))}
            </ul>
          )}
          <p className="careers-note">{equalOpportunity}</p>
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
              showDepartment
              departments={departments}
              eyebrow="General interest"
              title="Tell us what you do"
              subtitle="If a matching role opens, we will write to the email you share."
              submitLabel="Send open application"
              notePlaceholder="The work you do, the teams you have been on, and what you want to do next."
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
