import { useEffect, useRef, useState } from 'react';

import '../../../styles/key-highlights.css';
import { Container, Section } from '../../ui';
import ProgramSectionHeader from '../shared/ProgramSectionHeader';

const highlights = [
  {
    title: 'Holistic Skill Development',
    text: 'Structured curriculum, hands-on projects, mentor validation, and career preparation support.',
  },
  {
    title: 'Personalized Mentorship',
    text: 'Dedicated support and tailored guidance to ensure you are job-market ready.',
  },
  {
    title: 'Flexible Scheduling',
    text: 'Learn at your convenience with weekday and weekend session options.',
  },
  {
    title: 'Hands-On Training',
    text: 'Gain practical experience and industry-recognized certifications that build confidence.',
  },
  {
    title: 'Career-Focused',
    text: 'Expertise and support to help you excel and unlock your full potential.',
  },
];

function useRevealOnScroll() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

function KeyHighlightsShowcase({ visible }) {
  return (
    <div
      className={`kh-showcase kh-reveal ${visible ? 'kh-reveal--visible' : ''}`}
      style={{ animationDelay: '0.15s' }}
    >
      <div className="kh-showcase__glow" aria-hidden="true" />

      <div className="kh-showcase__frame">
        <img
          src="/wp-content/uploads/2024/05/update-key.gif"
          alt="Program advantages at a glance — 8 key highlights"
          loading="lazy"
          decoding="async"
          className="kh-showcase__media"
        />
      </div>
    </div>
  );
}

function DataEngineeringKeyHighlightsSection({
  subtitle = 'From mentorship to real-world projects — every pillar of this program is designed to turn you into a confident, job-ready Data Engineer.',
  items = highlights,
} = {}) {
  const [sectionRef, sectionVisible] = useRevealOnScroll();

  return (
    <Section
      tone="transparent"
      spacing="flow"
      className="relative overflow-hidden elementor-element elementor-element-6ef8997 program-page-flow__section"
      id="key"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0"
        style={{
          background:
            'radial-gradient(900px 400px at 0% 50%, rgba(24, 71, 159, 0.06), transparent 60%), radial-gradient(700px 320px at 100% 20%, rgba(45, 116, 217, 0.04), transparent 55%)',
        }}
      />

      <Container>
        <div ref={sectionRef} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <ProgramSectionHeader
              align="left"
              eyebrow="The iBridge360 Advantage"
              title="Your Complete"
              titleAccent="Career Launchpad"
              subtitle={subtitle}
              className={`kh-reveal mb-8 md:mb-10 ${sectionVisible ? 'kh-reveal--visible' : ''}`}
            />

            <ul className="space-y-5 list-none m-0 p-0">
              {items.map((item, index) => (
                <li
                  key={item.title}
                  className={`kh-highlight-item kh-reveal flex gap-3 rounded-xl p-1 -ml-1 ${sectionVisible ? 'kh-reveal--visible' : ''}`}
                  style={{ animationDelay: `${0.08 + index * 0.07}s` }}
                >
                  <span
                    className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-brand"
                    aria-hidden="true"
                  />
                  <div>
                    <strong className="block text-ink font-semibold text-[15px] mb-1">
                      {item.title}
                    </strong>
                    <p className="text-ink-muted text-[15px] leading-relaxed m-0">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex w-full justify-center lg:justify-end">
            <KeyHighlightsShowcase visible={sectionVisible} />
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default DataEngineeringKeyHighlightsSection;
