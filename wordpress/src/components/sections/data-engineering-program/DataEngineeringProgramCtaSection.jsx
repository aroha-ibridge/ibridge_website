import ENQUIRE_POPUP_LINK from '../../../constants/enquirePopupLink';
import { Button, Container, Section } from '../../ui';

function DataEngineeringProgramCtaSection({
  title = 'Ready to Start Your Data Engineering Journey?',
  description = 'Join the next batch and build job-ready skills with hands-on projects, expert mentorship, and an industry-recognized certification.',
  ctaLabel = 'Enquire Now',
  supportingText,
  phoneLabel,
  phoneHref,
  whatsappHref,
} = {}) {
  return (
    <Section tone="brand" spacing="compact" className="relative overflow-hidden program-page-flow__cta">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(600px 300px at 20% 50%, rgba(255,255,255,0.15), transparent), radial-gradient(500px 250px at 80% 50%, rgba(45,116,217,0.2), transparent)',
        }}
      />

      <Container>
        <div className="relative text-center max-w-2xl mx-auto py-4 md:py-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight tracking-tight">
            {title}
          </h2>
          <p className="mt-3 text-white/85 text-[15px] md:text-base leading-relaxed">
            {description}
          </p>
          <div className="mt-7 flex justify-center">
            <Button
              href={ENQUIRE_POPUP_LINK}
              variant="secondary"
              size="lg"
              className="program-page-flow__cta-btn min-w-[180px]"
            >
              {ctaLabel}
            </Button>
          </div>
          {supportingText ? (
            <p className="mt-5 text-sm leading-relaxed text-white/80 md:text-[15px]">
              {supportingText}
            </p>
          ) : null}
          {phoneLabel && (phoneHref || whatsappHref) ? (
            <p className="mt-4 text-sm font-medium text-white/90 md:text-[15px]">
              {phoneHref ? (
                <a href={phoneHref} className="text-white underline-offset-2 hover:underline">
                  {phoneLabel}
                </a>
              ) : (
                phoneLabel
              )}
              {whatsappHref && phoneHref ? (
                <>
                  {' · '}
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline-offset-2 hover:underline"
                  >
                    WhatsApp
                  </a>
                </>
              ) : null}
            </p>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}

export default DataEngineeringProgramCtaSection;
