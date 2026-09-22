import { Container, Section } from '../../ui';
import ProgramSectionHeader from './ProgramSectionHeader';

const DEFAULT_ROLES = [
  'Junior Data Engineer',
  'Data Engineer',
  'ETL Developer',
  'Data Integration Developer',
  'Junior Analytics Engineer',
  'Data Operations Analyst',
];

function CareerOpportunitiesSection({
  title = 'Career Opportunities After a Data Engineering Course',
  description = 'A strong foundation in SQL, Python, data warehousing, ETL, cloud technologies, and data processing can prepare learners for several entry-level and junior data roles.',
  roles = DEFAULT_ROLES,
} = {}) {
  return (
    <Section
      tone="transparent"
      spacing="flow"
      className="program-page-flow__section"
      id="career"
    >
      <Container>
        <ProgramSectionHeader title={title} subtitle={description} />

        {roles?.length ? (
          <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2.5 md:gap-3">
            {roles.map((role) => (
              <span
                key={role}
                className="inline-flex items-center rounded-full border border-brand/10 bg-brand/[0.04] px-4 py-2 text-[13px] font-semibold text-brand"
              >
                {role}
              </span>
            ))}
          </div>
        ) : null}
      </Container>
    </Section>
  );
}

export default CareerOpportunitiesSection;
