import { absoluteSiteUrl } from '../../utils/siteBase.js';

const SITE_NAME = 'iBridge360';
const DEFAULT_ORIGIN = 'https://ibridge360.com';
const DEFAULT_OG_IMAGE = '/wp-content/uploads/2024/02/final-illustrator-logo-1-1.png';

function resolveOrigin() {
  if (typeof window !== 'undefined' && window.location?.origin) {
    return window.location.origin;
  }
  return DEFAULT_ORIGIN;
}

function absoluteUrl(origin, pathOrUrl = '') {
  return absoluteSiteUrl(origin, pathOrUrl);
}

export function buildOrganizationJsonLd() {
  const origin = resolveOrigin();
  const siteHome = absoluteSiteUrl(origin, '/');
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: siteHome,
    logo: absoluteUrl(origin, DEFAULT_OG_IMAGE),
    sameAs: [
      'https://www.facebook.com/iBridge360/',
      'https://www.linkedin.com/company/ibridge360/',
      'https://www.instagram.com/ibridge360/',
      'https://www.youtube.com/@ibridge360',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      availableLanguage: ['English', 'Hindi'],
    },
  };
}

export function buildProgramJsonLd({ title, description, path, faqCategories = [] }) {
  const origin = resolveOrigin();
  const url = absoluteUrl(origin, path);
  const siteHome = absoluteSiteUrl(origin, '/');

  const entities = [
    {
      '@type': 'Course',
      name: title,
      description,
      url,
      provider: {
        '@type': 'Organization',
        name: SITE_NAME,
        url: siteHome,
      },
    },
  ];

  const faqEntities = (faqCategories || []).flatMap((cat) =>
    (cat.items || []).map((item) => {
      const answerParts = [item.answer, ...(item.bullets || [])].filter(Boolean);
      return {
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: answerParts.join(' '),
        },
      };
    }),
  );

  if (faqEntities.length) {
    entities.push({
      '@type': 'FAQPage',
      mainEntity: faqEntities,
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': entities,
  };
}

export function buildWebPageJsonLd({ title, description, path }) {
  const origin = resolveOrigin();
  const siteHome = absoluteSiteUrl(origin, '/');
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: absoluteUrl(origin, path),
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: siteHome,
    },
  };
}

/**
 * Blog article schema for GSC rich results / indexing clarity.
 * @param {{ title: string, description: string, path: string, datePublished?: string, image?: string }} opts
 */
export function buildArticleJsonLd({
  title,
  description,
  path,
  datePublished,
  image,
}) {
  const origin = resolveOrigin();
  const url = absoluteUrl(origin, path);
  const siteHome = absoluteSiteUrl(origin, '/');
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: siteHome,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: siteHome,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl(origin, DEFAULT_OG_IMAGE),
      },
    },
  };

  if (datePublished) {
    article.datePublished = datePublished;
  }

  if (image) {
    article.image = absoluteUrl(origin, image);
  }

  return article;
}

export { SITE_NAME, DEFAULT_OG_IMAGE, resolveOrigin, absoluteUrl };
