import ENQUIRE_POPUP_LINK from '../../../constants/enquirePopupLink';
import { Button, Container } from '../../ui';

function DataEngineeringStickyCtaSection({
  title = 'Data Engineering Program',
  subtitle = '3-month industry-ready certification',
} = {}) {
  return (
    <div
      data-de-sticky-bar
      className="tw-scope fixed bottom-0 left-0 right-0 z-[999] border-t border-brand/15 bg-white/95 backdrop-blur-md shadow-[0_-8px_30px_rgba(24,71,159,0.12)] transition-all duration-300 opacity-0 pointer-events-none translate-y-full"
    >
      <Container>
        <div className="flex items-center justify-between gap-4 py-3 md:py-3.5">
          <div className="min-w-0">
            <p className="text-sm font-bold text-ink truncate m-0">{title}</p>
            <p className="text-xs text-ink-muted truncate m-0 hidden sm:block">
              {subtitle}
            </p>
          </div>
          <Button href={ENQUIRE_POPUP_LINK} size="sm" className="shrink-0">
            Enquire Now
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default DataEngineeringStickyCtaSection;
