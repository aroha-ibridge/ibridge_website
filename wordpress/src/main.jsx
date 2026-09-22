import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { prefetchMarketingStyles } from './constants/ensureMarketingStyles';
import './styles/tailwind.css';
import './styles/tw-button-reset.css';
import './styles/enquiry-form.css';
import './styles/program-page-flow.css';
import './styles/wp-custom.css';
import './styles/pink-to-brand.css';
import './styles/site-footer.css';
import './styles/marketing-theme.css';
import './styles/marketing-boot.css';

prefetchMarketingStyles();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
);
