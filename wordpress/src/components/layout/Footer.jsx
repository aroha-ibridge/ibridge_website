import { Link } from 'react-router-dom';

import {
  PLATFORM_LOGIN_PATH,
  PLATFORM_EXPLORE_PATH,
} from '../../constants/platformLinks';
import '../../styles/site-footer.css';

const QUICK_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Programs', to: '/programs' },
  { label: 'Products', to: '/products' },
  { label: 'Code Arena', to: '/code-arena' },
  { label: 'Training & Upskilling', to: '/training-upskilling' },
  { label: 'LearnSmart LMS', to: '/learnsmart-lms' },
  { label: 'Blogs', to: '/blogs' },
  { label: 'Book Career Counselling', to: '/book-career-counselling' },
  { label: 'Contact Us', to: '/contact-us' },
];

const AUDIENCE_LINKS = [
  { label: 'Corporate L&D', to: '/corporate' },
  { label: 'Individual Learner', to: '/individual-learner' },
  { label: 'Institution', to: '/institution' },
];

const PROGRAM_LINKS = [
  { label: 'Data Engineering', to: '/courses/data-engineering' },
  { label: 'Data Analytics', to: '/data-analytics-course' },
  { label: 'PySpark', to: '/pyspark-course' },
  { label: 'Databricks Data Engineering', to: '/databricks-data-engineering-course' },
  { label: 'Microsoft Fabric Data Engineering', to: '/microsoft-fabric-data-engineering-course' },
  { label: 'Tableau', to: '/tableau-course' },
  { label: 'Advanced Excel', to: '/advanced-excel-course' },
  { label: 'SQL Bootcamp', to: '/sql-bootcamp' },
  { label: 'Python Bootcamp', to: '/python-bootcamp' },
  { label: 'Data Science', to: '/courses/data-science' },
  { label: 'Java Full Stack', to: '/java-full-stack-development-course' },
  { label: 'Python Full Stack', to: '/python-full-stack-development-course' },
  { label: 'MERN Full Stack', to: '/mern-full-stack-development-course' },
  { label: 'Cloud Computing', to: '/training/cloud-computing' },
  { label: 'DevOps', to: '/training/devops' },
];

const SOCIAL_LINKS = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/iBridge360/',
    path: 'M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/ibridge360/',
    path: 'M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.34 18.34H6.16V9.75h2.18v8.59zM7.25 8.72a1.26 1.26 0 1 1 0-2.52 1.26 1.26 0 0 1 0 2.52zM18.34 18.34h-2.18v-4.18c0-1-.02-2.28-1.39-2.28-1.39 0-1.6 1.09-1.6 2.21v4.25h-2.18V9.75h2.09v1.17h.03c.29-.55 1-1.13 2.06-1.13 2.2 0 2.61 1.45 2.61 3.33v5.22z',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/ibridge360/',
    path: 'M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm.2 2A3.8 3.8 0 0 0 4.2 7.8v8.4A3.8 3.8 0 0 0 8 20h8a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16 4H8zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@ibridge360',
    path: 'M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.75 15.5v-7l6.5 3.5-6.5 3.5z',
  },
  {
    label: 'X',
    href: 'https://x.com/iBridge_360',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.227-8.451L1.99 2.25H8.08l4.252 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z',
  },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer footer-full-width dynamic-footer" role="contentinfo">
      <div className="site-footer__inner">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <Link to="/" className="site-footer__logo" aria-label="iBridge360 home">
              <img
                src="/wp-content/uploads/2024/02/final-illustrator-logo-1-1.png"
                alt="iBridge360"
                width="160"
                height="46"
              />
            </Link>
            <p className="site-footer__tagline">
              Bridging learning and careers through experiential programs, AI-powered assessments,
              and industry-ready mentorship.
            </p>
            <div className="site-footer__social" aria-label="Social media">
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-footer__social-link"
                  aria-label={item.label}
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                    <path fill="currentColor" d={item.path} />
                  </svg>
                </a>
              ))}
            </div>
            <div className="site-footer__apps">
              <a
                href="https://play.google.com/store/apps/details?id=com.ibridgemobile&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="site-footer__app-badge"
              >
                <img
                  src="/wp-content/uploads/2024/02/google-1.png"
                  alt="Get it on Google Play"
                  width="135"
                  height="40"
                />
              </a>
              <a
                href="https://apps.apple.com/in/app/ibridge360/id1671481980"
                target="_blank"
                rel="noopener noreferrer"
                className="site-footer__app-badge"
              >
                <img
                  src="/wp-content/uploads/2024/02/ios-1.png"
                  alt="Download on the App Store"
                  width="135"
                  height="40"
                />
              </a>
            </div>
          </div>

          <nav className="site-footer__col" aria-label="Quick links">
            <h3 className="site-footer__heading">Quick Links</h3>
            <ul className="site-footer__list">
              {QUICK_LINKS.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="site-footer__col" aria-label="iBridge for audiences">
            <h3 className="site-footer__heading">iBridge For</h3>
            <ul className="site-footer__list">
              {AUDIENCE_LINKS.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="site-footer__col" aria-label="Programs and platform">
            <h3 className="site-footer__heading">Programs & Platform</h3>
            <ul className="site-footer__list">
              {PROGRAM_LINKS.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
              <li>
                <a
                  href={PLATFORM_EXPLORE_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Find Your Job
                </a>
              </li>
              <li>
                <Link to={PLATFORM_LOGIN_PATH}>Explore Platform</Link>
              </li>
              {/* Login link temporarily hidden
              <li>
                <Link to={PLATFORM_LOGIN_PATH}>Login</Link>
              </li>
              */}
            </ul>
          </nav>

          <div className="site-footer__col site-footer__col--contact">
            <h3 className="site-footer__heading">Reach Us</h3>
            <p className="site-footer__company">iBridge360 Edtech Private Limited</p>
            <ul className="site-footer__contact">
              <li>
                <span className="site-footer__contact-label">Email</span>
                <a href="mailto:support@ibridge360.com">support@ibridge360.com</a>
              </li>
              <li>
                <span className="site-footer__contact-label">Phone</span>
                <a href="tel:+919611260360">+91 96112 60360</a>
              </li>
              <li>
                <span className="site-footer__contact-label">Address</span>
                <a
                  href="https://maps.google.com/?q=iBridge360+Edtech+Pvt+Ltd+Jayanagar+Bengaluru"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  No 14, 3rd Floor, 5th Main, 38th Cross Rd, 5th Block, Jayanagar, Bengaluru 560041
                </a>
              </li>
            </ul>
            <Link to="/contact-us" className="site-footer__cta">
              Talk to an advisor →
            </Link>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="site-footer__bottom-inner">
          <p className="site-footer__copy">
            Copyright © {year} All rights reserved by iBridge360.
          </p>
          <div className="site-footer__legal">
            <Link to="/terms-conditions">Terms & Conditions</Link>
            <span className="site-footer__legal-sep" aria-hidden="true" />
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
