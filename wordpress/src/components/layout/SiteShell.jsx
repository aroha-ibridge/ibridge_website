import { useEffect, useMemo } from 'react';

import Header from './Header';
import Footer from './Footer';
import MarketingStyles from '../MarketingStyles';
import ExplorePopup from '../modals/ExplorePopup';
import CorporateVideoPopup from '../modals/CorporateVideoPopup';
import InstitutionVideoPopup from '../modals/InstitutionVideoPopup';
import PopupModalShell from '../modals/PopupModalShell';
import useElementorNavMenu from '../../hooks/useElementorNavMenu';
import useElementorPopups from '../../hooks/useElementorPopups';
import useElementskitNavMenu from '../../hooks/useElementskitNavMenu';
import useMarketingSiteBodyClass from '../../hooks/useMarketingSiteBodyClass';
import { ensureMarketingStyles } from '../../constants/ensureMarketingStyles';
import ChatbotDock from '../chatbot/ChatbotDock';
import { RouterProvider } from '../../shims/react-router-dom';
import { resolvePageComponent } from './pageRegistry';

/**
 * Site chrome + page body in one hydrated island.
 * Page is resolved from pathname (not passed as a component prop) so hydration works.
 */
function SiteShell({
  pathname = '/',
  params = {},
  hideChrome = false,
  pageProps = {},
}) {
  const normalizedPath = useMemo(
    () => (pathname || '/').replace(/\/+$/, '') || '/',
    [pathname],
  );
  const isBookingPage = normalizedPath === '/book-career-counselling';
  const showChrome = !hideChrome && !isBookingPage;
  const Page = useMemo(() => resolvePageComponent(normalizedPath), [normalizedPath]);

  useMarketingSiteBodyClass();
  useElementorPopups();
  useElementskitNavMenu();
  useElementorNavMenu();

  useEffect(() => {
    ensureMarketingStyles().catch(() => {});
  }, []);

  return (
    <RouterProvider pathname={normalizedPath} params={params}>
      <MarketingStyles />
      <div className="marketing-shell marketing-shell--ready">
        {showChrome && <Header />}
        <main id="content" className="site-main">
          <div className="marketing-page-enter">
            <Page {...pageProps} {...params} />
          </div>
        </main>
        {showChrome && <Footer />}
      </div>
      {showChrome && (
        <>
          <PopupModalShell popupId="17162">
            <ExplorePopup />
          </PopupModalShell>
          <PopupModalShell popupId="17267">
            <CorporateVideoPopup />
          </PopupModalShell>
          <PopupModalShell popupId="19428">
            <InstitutionVideoPopup />
          </PopupModalShell>
          <ChatbotDock />
        </>
      )}
    </RouterProvider>
  );
}

export default SiteShell;
