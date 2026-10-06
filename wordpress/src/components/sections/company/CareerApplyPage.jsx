import { Button, Container, Section } from '../../ui';
import { InterestForm } from './CareerInterestForm';
import { SITE_ORIGIN } from '../../../content/seo/pageSeoData';
import '../../../styles/company-pages.css';
import '../../../styles/careers-page.css';

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

function DetailList({ heading, items }) {
  if (!items?.length) return null;
  return (
    <>
      <h3 className="careers-apply__heading">{heading}</h3>
      <ul className="careers-apply__list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

function Chips({ heading, items, soft = false }) {
  if (!items?.length) return null;
  return (
    <>
      <h3 className="careers-apply__subheading">{heading}</h3>
      <ul className={`careers-apply__chips${soft ? ' careers-apply__chips--soft' : ''}`}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

function OtherRoles({ jobs }) {
  if (!jobs?.length) return null;
  return (
    <aside className="careers-apply__sidebar" aria-label="Other open roles">
      <h3 className="careers-apply__sidebar-title">Other roles that might interest you</h3>
      <ul className="careers-apply__sidebar-list">
        {jobs.slice(0, 3).map((job) => (
          <li key={job.id}>
            <a className="careers-apply__sidebar-card" href={`/careers/apply/${job.id}`}>
              <p className="careers-apply__sidebar-card-title">{job.title}</p>
              <span className="careers-apply__sidebar-card-meta">
                <PinIcon />
                {job.location}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function CareerApplyPage({ job, otherJobs = [] }) {
  if (!job) {
    return (
      <div className="company-page company-careers-page tw-scope">
        <Section spacing="compact">
          <Container>
            <div className="careers-apply__notfound">
              <h1 className="careers-apply__title">This role is no longer open</h1>
              <p className="careers-apply__summary">Browse the roles that are open right now.</p>
              <Button href="/careers#open-roles" size="lg" className="!rounded-xl">
                View open roles
              </Button>
            </div>
          </Container>
        </Section>
      </div>
    );
  }

  const pageUrl = `${SITE_ORIGIN}/careers/apply/${job.id}`;
  const shareText = encodeURIComponent(`${job.title} — open role at iBridge360`);
  const shareUrl = encodeURIComponent(pageUrl);

  // Sort so roles from the same team surface first in the sidebar.
  const relatedJobs = [...otherJobs].sort((a, b) =>
    a.department === job.department && b.department !== job.department ? -1 : 0,
  );

  return (
    <div className="company-page company-careers-page tw-scope">
      <Section spacing="compact" tone="soft" className="careers-apply__header">
        <Container className="careers-apply__container">
          <a className="careers-apply__back" href="/careers#open-roles">
            ← All open roles
          </a>
          <div className="careers-apply__header-row">
            <div className="careers-apply__header-copy">
              <h1 className="careers-apply__title">{job.title}</h1>
              <p className="careers-apply__dept">{job.department}</p>
              <p className="careers-apply__location">
                <PinIcon />
                {job.location}
              </p>
            </div>
            <div className="careers-apply__actions">
              <Button href="#apply" size="lg" className="!rounded-xl">
                Apply
              </Button>
              <div className="careers-apply__share">
                <span>Share on</span>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Share on Facebook"
                >
                  <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
                    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
                  </svg>
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Share on LinkedIn"
                >
                  <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
                    <path d="M6.94 5a2 2 0 1 1-4-.02 2 2 0 0 1 4 .02ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-1.72.33-3.39 2.46-3.39 2.1 0 2.13 1.96 2.13 3.5V21H22v-7.13c0-3.5-.76-6.19-4.84-6.19-1.96 0-3.28 1.08-3.82 2.1h-.02V8.48Z" />
                  </svg>
                </a>
                <a
                  href={`https://wa.me/?text=${shareText}%20${shareUrl}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Share on WhatsApp"
                >
                  <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
                    <path d="M12.02 2C6.5 2 2.03 6.48 2.03 12c0 1.87.5 3.62 1.4 5.13L2 22l5.02-1.4a9.9 9.9 0 0 0 5 1.35h.01c5.52 0 9.98-4.48 9.98-10S17.53 2 12.02 2Zm0 18.06a8.1 8.1 0 0 1-4.15-1.14l-.3-.17-2.98.83.8-2.9-.19-.3a8.15 8.15 0 1 1 6.82 3.68Zm4.5-6.06c-.25-.12-1.47-.72-1.7-.8-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.96-.14.16-.29.18-.53.06-.25-.12-1.05-.39-2-1.23a7.5 7.5 0 0 1-1.39-1.73c-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.56-1.36-.77-1.86-.2-.49-.41-.42-.56-.43h-.48c-.16 0-.42.06-.65.31-.22.25-.85.83-.85 2.03 0 1.2.87 2.35 1 2.51.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.28Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="compact">
        <Container className="careers-apply__container">
          <div className="careers-apply__badges">
            {job.experience ? (
              <span className="careers-apply__badge">Experience: {job.experience}</span>
            ) : null}
            {job.type ? <span className="careers-apply__badge">{job.type}</span> : null}
            {job.workMode ? <span className="careers-apply__badge">{job.workMode}</span> : null}
          </div>

          <div className="careers-apply__grid">
            <div className="careers-apply__role">
              <p className="careers-apply__summary">{job.about || job.summary}</p>
              <Chips heading={job.department === 'Business Operations' ? 'Required skills' : 'Required technical skills'} items={job.skills} />
              <Chips heading="Good to have" items={job.goodToHave} soft />
              <DetailList heading="Key responsibilities" items={job.responsibilities} />
              <DetailList heading="Candidate requirements" items={job.requirements} />
              <DetailList heading="What you will gain" items={job.gains} />
            </div>
            <div className="careers-apply__side">
              <div className="careers-apply__form" id="apply">
                <InterestForm
                  key={job.id}
                  roleTitle={job.title}
                  department={job.department}
                  workMode={`${job.location} · ${job.workMode}`}
                  techOptions={job.skillOptions}
                  source="Careers page"
                  eyebrow="Your interest"
                  title={`Apply for ${job.title}`}
                  subtitle="Share how to reach you. Our team reads every application sent from this page."
                  submitLabel="Submit application"
                  notePlaceholder="A few lines on your experience and why this role fits."
                />
              </div>
              <OtherRoles jobs={relatedJobs} />
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

export default CareerApplyPage;
