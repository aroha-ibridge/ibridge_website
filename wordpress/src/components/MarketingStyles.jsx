import { useEffect } from 'react';

import { ensureMarketingStyles } from '../constants/ensureMarketingStyles';
import mobileCss from '../styles/mobile.css?inline';
import '../styles/marketing-boot.css';
import '../styles/pink-to-brand.css';

const MOBILE_NAV_STYLE_ID = 'marketing-mobile-nav-override';

function injectMobileNavOverrides() {
  if (typeof document === 'undefined') return;
  if (document.getElementById(MOBILE_NAV_STYLE_ID)) return;

  const style = document.createElement('style');
  style.id = MOBILE_NAV_STYLE_ID;
  style.setAttribute('data-marketing-mobile-nav', 'true');
  style.textContent = mobileCss;
  document.head.appendChild(style);
}

/**
 * Ensures Elementor / WordPress CSS for marketing pages is loaded.
 * Mobile nav overrides are injected after Elementor CSS so they win the cascade.
 */
function MarketingStyles() {
  useEffect(() => {
    ensureMarketingStyles().then(() => {
      injectMobileNavOverrides();
    });
  }, []);

  return null;
}

export default MarketingStyles;
