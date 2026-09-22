import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';

import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import MarketingBootSplash from '../components/MarketingBootSplash';
import MarketingStyles from '../components/MarketingStyles';
import ExplorePopup from '../components/modals/ExplorePopup';
import CorporateVideoPopup from '../components/modals/CorporateVideoPopup';
import InstitutionVideoPopup from '../components/modals/InstitutionVideoPopup';
import PopupModalShell from '../components/modals/PopupModalShell';
import PageMeta from '../components/seo/PageMeta';
import { getPageSeo } from '../content/seo/pageSeoRegistry';
import useElementorNavMenu from '../hooks/useElementorNavMenu';
import useElementorPopups from '../hooks/useElementorPopups';
import useElementskitNavMenu from '../hooks/useElementskitNavMenu';
import useMarketingSiteBodyClass from '../hooks/useMarketingSiteBodyClass';
import { ensureMarketingStyles, areMarketingStylesReady } from '../constants/ensureMarketingStyles';
import ChatbotDock from '../components/chatbot/ChatbotDock';

function MainLayout() {
  const location = useLocation();
  const pageSeo = useMemo(() => getPageSeo(location.pathname), [location.pathname]);
  const [stylesReady, setStylesReady] = useState(() => areMarketingStylesReady());
  const isBookingPage =
    location.pathname.replace(/\/+$/, '') === '/book-career-counselling';
  useMarketingSiteBodyClass();
  useElementorPopups();
  useElementskitNavMenu();
  useElementorNavMenu();

  useEffect(() => {
    let cancelled = false;
    ensureMarketingStyles().then(() => {
      if (!cancelled) setStylesReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <PageMeta
        title={pageSeo.title}
        description={pageSeo.description}
        keywords={pageSeo.keywords}
        path={pageSeo.path || location.pathname}
        canonical={pageSeo.canonical}
        noIndex={pageSeo.noIndex}
        type={pageSeo.type || 'website'}
        image={pageSeo.image}
        imageAlt={pageSeo.imageAlt}
        jsonLd={pageSeo.jsonLd}
      />
      <MarketingStyles />
      <MarketingBootSplash ready={stylesReady} />
      <div
        className={
          stylesReady
            ? 'marketing-shell marketing-shell--ready'
            : 'marketing-shell marketing-shell--pending'
        }
      >
        {!isBookingPage && <Header />}
        <main id="content" className="site-main">
          <div key={location.pathname} className="marketing-page-enter">
            <Outlet />
          </div>
        </main>
        {!isBookingPage && <Footer />}
      </div>
      {!isBookingPage && (
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
    </>
  );
}

export default MainLayout;
