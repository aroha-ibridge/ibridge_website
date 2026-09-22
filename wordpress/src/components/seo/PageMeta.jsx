import { Helmet } from 'react-helmet-async';

import { DEFAULT_OG_IMAGE, SITE_NAME, absoluteUrl, resolveOrigin } from './seoJsonLd';
import { stripBase } from '../../utils/siteBase';

/**
 * Full-page SEO head tags — titles, description, keywords, canonical,
 * Open Graph, Twitter Card, robots, and optional JSON-LD.
 */
function PageMeta({
  title,
  description,
  keywords = '',
  path = '',
  canonical,
  noIndex = false,
  type = 'website',
  image = DEFAULT_OG_IMAGE,
  imageAlt = SITE_NAME,
  jsonLd = null,
  siteName = SITE_NAME,
}) {
  const origin = resolveOrigin();
  const pagePath =
    path ||
    (typeof window !== 'undefined' ? stripBase(window.location.pathname) : '');
  const canonicalUrl = absoluteUrl(origin, canonical || pagePath);
  const imageUrl = absoluteUrl(origin, image);
  const robots = noIndex ? 'noindex, follow' : 'index, follow, max-image-preview:large';

  return (
    <Helmet>
      {title ? <title>{title}</title> : null}
      {description ? <meta name="description" content={description} /> : null}
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <meta name="robots" content={robots} />
      <meta name="googlebot" content={robots} />
      <meta name="author" content={SITE_NAME} />
      {canonicalUrl ? <link rel="canonical" href={canonicalUrl} /> : null}

      {title ? <meta property="og:title" content={title} /> : null}
      {description ? <meta property="og:description" content={description} /> : null}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      {canonicalUrl ? <meta property="og:url" content={canonicalUrl} /> : null}
      {imageUrl ? <meta property="og:image" content={imageUrl} /> : null}
      {imageAlt ? <meta property="og:image:alt" content={imageAlt} /> : null}
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      {title ? <meta name="twitter:title" content={title} /> : null}
      {description ? <meta name="twitter:description" content={description} /> : null}
      {imageUrl ? <meta name="twitter:image" content={imageUrl} /> : null}

      {jsonLd ? (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      ) : null}
    </Helmet>
  );
}

export {
  buildOrganizationJsonLd,
  buildProgramJsonLd,
  buildWebPageJsonLd,
} from './seoJsonLd';

export default PageMeta;
