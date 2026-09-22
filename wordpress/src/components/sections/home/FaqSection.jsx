import { Link } from 'react-router-dom';

import { Container, Section } from '../../ui';
import ProgramFaqSection from '../shared/ProgramFaqSection';
import homeFaqCategories from './homeFaqData';

function FaqSection() {
  return (
    <>
      <ProgramFaqSection
        eyebrow="FAQ"
        title="Frequently Asked"
        titleAccent="Questions"
        description="Find quick answers about our programs, learning format, pricing, and support — organized by topic so you can get what you need faster."
        categories={homeFaqCategories}
        id="faq"
        tone="soft"
        spacing="compact"
      />

      <Section tone="soft" spacing="tight" className="pt-0 -mt-4 md:-mt-5">
        <Container>
          <p className="text-center text-base md:text-lg text-ink m-0">
            <Link
              to="/contact-us"
              className="inline-flex flex-wrap items-center justify-center gap-1 font-medium hover:text-brand transition-colors"
            >
              My question isn&apos;t listed here.
              <span className="text-brand font-semibold">Contact us →</span>
            </Link>
          </p>
        </Container>
      </Section>
    </>
  );
}

export default FaqSection;
