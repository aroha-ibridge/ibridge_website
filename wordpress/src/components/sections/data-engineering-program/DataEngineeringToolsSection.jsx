import { useState } from 'react';

import { Container, Section, cn } from '../../ui';
import ProgramSectionHeader from '../shared/ProgramSectionHeader';

const defaultTools = [
  { name: 'SQL Server', image: '/wp-content/uploads/2026/07/sql-server-logo.svg' },
  { name: 'Python', image: '/wp-content/uploads/2026/07/python-logo.svg' },
  { name: 'Power BI', image: '/wp-content/uploads/2024/03/power-bi-vector-logo-small.png' },
  { name: 'Linux', image: '/wp-content/uploads/2026/07/linux-logo.svg' },
  { name: 'AWS', image: '/wp-content/uploads/2024/03/awsss-1.png' },
];

function initials(name) {
  return name
    .split(/[\s/&-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

function ToolLogo({ name, image }) {
  const [failed, setFailed] = useState(false);
  const isLucide = Boolean(image?.includes('lucide-static'));

  if (!image || failed) {
    return (
      <span
        aria-hidden="true"
        className="mb-3 flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-xl bg-brand/10 text-sm md:text-base font-bold text-brand"
      >
        {initials(name)}
      </span>
    );
  }

  return (
    <img
      src={image}
      alt=""
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={cn(
        'h-14 md:h-16 w-auto max-w-full object-contain mb-3',
        isLucide &&
          'opacity-90 [filter:invert(26%)_sepia(78%)_saturate(1200%)_hue-rotate(201deg)_brightness(92%)_contrast(92%)]',
      )}
    />
  );
}

function DataEngineeringToolsSection({
  title = 'Programming Languages &',
  titleAccent = 'Tools Covered',
  subtitle = 'Master the industry-standard stack used by data teams worldwide — from querying and scripting to cloud and visualization.',
  tools = defaultTools,
} = {}) {
  return (
    <Section tone="transparent" spacing="flow" className="program-page-flow__section">
      <Container>
        <ProgramSectionHeader
          title={title}
          titleAccent={titleAccent}
          subtitle={subtitle}
          className="mb-8 md:mb-10"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5 max-w-5xl mx-auto">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className={cn(
                'flex flex-col items-center justify-center rounded-2xl border border-brand/10',
                'bg-white px-4 py-6 md:py-7 transition-all duration-200',
                'hover:border-brand/20 hover:shadow-card',
              )}
            >
              <ToolLogo name={tool.name} image={tool.image} />
              <span className="text-xs font-semibold text-ink-muted text-center leading-snug">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default DataEngineeringToolsSection;
