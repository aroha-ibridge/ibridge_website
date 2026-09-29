import { Button, Container, Section } from '../../ui';
import { InterestForm } from './CareerInterestForm';
import '../../../styles/company-pages.css';
import '../../../styles/careers-page.css';

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

function CareerApplyPage({ job }) {
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

  return (
    <div className="company-page company-careers-page tw-scope">
      <Section spacing="compact">
        <Container>
          <a className="careers-apply__back" href="/careers#open-roles">
            ← All open roles
          </a>
          <div className="careers-apply__grid">
            <div className="careers-apply__role">
              <p className="careers-role-card__dept">{job.department}</p>
              <h1 className="careers-apply__title">{job.title}</h1>
              <ul className="careers-role-card__meta">
                <li>{job.location}</li>
                <li>{job.workMode}</li>
                <li>{job.type}</li>
                <li>Experience: {job.experience}</li>
              </ul>
              <p className="careers-apply__summary">{job.about || job.summary}</p>
              <DetailList heading="Key responsibilities" items={job.responsibilities} />
              <Chips heading={job.department === 'Business Operations' ? 'Required skills' : 'Required technical skills'} items={job.skills} />
              <Chips heading="Good to have" items={job.goodToHave} soft />
              <DetailList heading="Candidate requirements" items={job.requirements} />
              <DetailList heading="What you will gain" items={job.gains} />
            </div>
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
          </div>
        </Container>
      </Section>
    </div>
  );
}

export default CareerApplyPage;
