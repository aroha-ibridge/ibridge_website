import { useEffect } from 'react';

const GOOGLE_ADS_ID = 'AW-18282855496';

/**
 * Ensures Google Ads gtag is present on program landing pages.
 * Base snippet also lives in BaseLayout for Ads verification crawlers.
 */
function GoogleAdsTag() {
  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    window.dataLayer = window.dataLayer || [];
    if (typeof window.gtag !== 'function') {
      window.gtag = function gtag() {
        window.dataLayer.push(arguments);
      };
    }

    window.gtag('js', new Date());
    window.gtag('config', GOOGLE_ADS_ID);

    return undefined;
  }, []);

  return null;
}

export default GoogleAdsTag;
export { GOOGLE_ADS_ID };
