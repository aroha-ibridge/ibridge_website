import { Container, Section } from '../../ui';
import ProgramSectionHeader from './ProgramSectionHeader';

const DEFAULT_STATS = [
  { value: '15K+', label: 'Learners' },
  { value: '115+', label: 'Hiring Partners' },
];

function TrustPartnersSection({
  title = 'Trusted by learners and hiring partners across the industry',
  description = 'Our growing community of learners and industry connections reflects our commitment to practical, career-focused training. With 15K+ learners and 115+ hiring partners, iBridge360 helps bridge the gap between technical learning and real-world career opportunities.',
  stats = DEFAULT_STATS,
} = {}) {
  return (
    <Section
      tone="transparent"
      spacing="flow"
      className="program-page-flow__section program-trust"
      id="trust"
    >
      <Container>
        <ProgramSectionHeader title={title} subtitle={description} />

        {stats?.length ? (
          <ul className="learner-testimonials__trust" style={{ marginTop: 0 }}>
            {stats.map((item) => (
              <li key={item.label} className="learner-testimonials__trust-item">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </Container>
    </Section>
  );
}

export default TrustPartnersSection;
