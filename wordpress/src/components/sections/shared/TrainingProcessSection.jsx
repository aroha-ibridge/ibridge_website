import { useEffect, useRef, useState } from 'react';

import { Container, Section } from '../../ui';
import ProgramSectionHeader from './ProgramSectionHeader';
import '../../../styles/training-process.css';

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
      { threshold: 0.18, rootMargin: '0px 0px -6% 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

const BADGE_VARIANTS = ['a', 'b', 'c', 'd'];

function ConnectorIcon() {
  return (
    <svg className="training-process__connector-icon" viewBox="0 0 48 24" fill="none" aria-hidden="true">
      <path
        d="M2 12h38m0 0-6-6m6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TrainingProcessSection({
  steps = [],
  eyebrow = 'Process',
  title = 'Our Training',
  titleAccent = 'Process',
}) {
  const [sectionRef, visible] = useRevealOnScroll();

  if (!steps.length) return null;

  return (
    <Section spacing="flow" className="training-process-section">
      <Container>
        <ProgramSectionHeader
          className="audience-landing-header"
          eyebrow={eyebrow}
          title={title}
          titleAccent={titleAccent}
        />

        <div
          ref={sectionRef}
          className={`training-process ${visible ? 'training-process--visible' : ''}`}
        >
          <div className="training-process__backdrop" aria-hidden="true">
            <span className="training-process__orb training-process__orb--left" />
            <span className="training-process__orb training-process__orb--right" />
          </div>

          <div className="training-process__shell">
            <div className="training-process__rail" aria-hidden="true">
              <span className="training-process__rail-glow" />
              <span className="training-process__rail-line" />
            </div>

            <ol className="training-process__track">
              {steps.map((step, index) => (
                <li
                  key={step}
                  className="training-process__item"
                  style={{ '--step-delay': `${index * 0.1}s` }}
                >
                  <article className="training-process__card">
                    <div
                      className={`training-process__badge training-process__badge--${BADGE_VARIANTS[index % BADGE_VARIANTS.length]}`}
                    >
                      <span className="training-process__ring" aria-hidden="true" />
                      <span className="training-process__ring training-process__ring--delayed" aria-hidden="true" />
                      <span className="training-process__number">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="training-process__label">{step}</h3>
                    <span className="training-process__shine" aria-hidden="true" />
                  </article>

                  {index < steps.length - 1 && (
                    <div className="training-process__connector" aria-hidden="true">
                      <ConnectorIcon />
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default TrainingProcessSection;
