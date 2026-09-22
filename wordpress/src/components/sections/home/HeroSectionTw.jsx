import { useEffect, useState } from 'react';

import { Button, Container, Heading, Section } from '../../ui';
import { PLATFORM_CUSTOMIZE_PROGRAMS_PATH } from '../../../constants/platformLinks';

const ROTATING_HEADLINES = [
  ['Visual', 'Learning'],
  ['Instant', 'Coding, Debugging'],
  ['Measuring', 'Competence'],
  ['Individual', 'Learners'],
  ['Corporate', 'Learners'],
  ['Institution', 'Learners'],
];

const FEATURE_ITEMS = [
  { icon: '/wp-content/uploads/2024/02/Group-145-1-1.png', label: 'Online/Offline Sessions' },
  { icon: '/wp-content/uploads/2024/02/Group-141.png', label: 'Industry Projects' },
];

const ASSOCIATION_BANNER = '/wp-content/uploads/2025/04/In-association-with-2000-x-500-px-1024x256.png';
const HERO_IMAGE = '/wp-content/uploads/2024/05/update-key.gif';

/**
 * Tailwind rebuild of the Home page hero section.
 * Mirrors the original elementor-heavy HeroSection.jsx 1:1 in content.
 */
function HeroSectionTw() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % ROTATING_HEADLINES.length);
    }, 2500);
    return () => window.clearInterval(interval);
  }, []);

  const [top, bottom] = ROTATING_HEADLINES[index];

  return (
    <Section tone="default" spacing="hero">
      <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        {/* Left column: rotating headline + description + features + CTAs + banner */}
        <div className="flex flex-col gap-6">
          <div className="min-h-[7rem] md:min-h-[9rem]">
            <Heading level={1} size="hero" className="text-brand">
              <span key={`${index}-top`} className="block animate-fadeIn">
                {top}
              </span>
              <span key={`${index}-bottom`} className="block animate-fadeIn">
                {bottom}
              </span>
            </Heading>
          </div>

          <p className="text-base md:text-lg text-ink-muted leading-relaxed max-w-xl">
            Learn better and remember more with a mix of online and offline resources,
            guidance from mentors, and easy-to-follow programming videos.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FEATURE_ITEMS.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 p-3 rounded-xl bg-surface-soft border border-surface-border"
              >
                <img src={item.icon} alt="" className="w-14 h-14 object-contain shrink-0" />
                <div className="text-sm font-semibold text-ink leading-snug">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mt-2">
            <Button type="button" size="lg" variant="primary" data-open-popup="17162">
              Enquire Now
            </Button>
            <Button to={PLATFORM_CUSTOMIZE_PROGRAMS_PATH} size="lg" variant="outline">
              Customize Your Program
            </Button>
          </div>

          <div className="mt-6">
            <img
              src={ASSOCIATION_BANNER}
              alt="In association with"
              className="w-full max-w-md object-contain"
              width="800"
              height="200"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Right column: hero animation */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={HERO_IMAGE}
            alt="iBridge learning illustration"
            className="w-full max-w-lg object-contain"
            width="940"
            height="788"
            loading="lazy"
            decoding="async"
          />
        </div>
      </Container>
    </Section>
  );
}

export default HeroSectionTw;
