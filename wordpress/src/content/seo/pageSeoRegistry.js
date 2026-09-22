import { getTrainingProgramBySlug } from '../training/trainingPrograms';
import {
  buildOrganizationJsonLd,
  buildWebPageJsonLd,
  buildArticleJsonLd,
} from '../../components/seo/seoJsonLd';
import blogsData from '../blogs/blogsData';
import {
  PAGE_SEO,
  BLOG_SEO,
  SITE_ORIGIN,
  normalizeSeoPath,
  getIndexableSeoPages,
  getPrerenderSeoPages,
} from './pageSeoData';

function normalizePath(pathname = '') {
  return normalizeSeoPath(pathname);
}

function withJsonLd(path, seo) {
  if (path === '/' || path === '/about-us') {
    return { ...seo, jsonLd: buildOrganizationJsonLd() };
  }
  return seo;
}

function toIsoDate(dateStr) {
  if (!dateStr || typeof dateStr !== 'string') return undefined;
  const parsed = Date.parse(dateStr);
  if (Number.isNaN(parsed)) return undefined;
  const d = new Date(parsed);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function getBlogPostMeta(path) {
  const posts = blogsData?.posts || [];
  return posts.find((p) => p.to === path || `/${p.id}` === path) || null;
}

function withBlogJsonLd(path, seo) {
  const post = getBlogPostMeta(path);
  return {
    ...seo,
    type: seo.type || 'article',
    jsonLd: buildArticleJsonLd({
      title: seo.title,
      description: seo.description,
      path: seo.canonical || path,
      datePublished: toIsoDate(post?.date),
      image: post?.image,
    }),
  };
}

function buildTrainingPageSeo(slug) {
  const config = getTrainingProgramBySlug(slug);
  const name = config?.hero?.title || config?.modal?.programName || slug.replace(/-/g, ' ');
  const title = `${name} Training Course | Enquire & Enroll | iBridge360`;
  const description =
    config?.seo?.description ||
    `Enquire about ${name} training with iBridge360 — curriculum fit, delivery mode, batch options, and enrollment guidance for learners and organizations.`;
  const keywords = `${name} training, ${name} course, ${name} upskilling, corporate ${name} training, iBridge360 ${name}`;

  return {
    title,
    description,
    keywords,
    noIndex: true, // contact-led training shells — Option B
    jsonLd: buildWebPageJsonLd({
      title,
      description,
      path: `/training/${slug}`,
    }),
  };
}

const DEFAULT_SEO = {
  title: 'iBridge360 | AI-Powered Learning & Training Solutions',
  description:
    'iBridge360 offers AI-powered programs, corporate training, institutional partnerships, LearnSmart LMS, and online assessments for skills and career outcomes.',
  keywords: 'iBridge360, training, LMS, corporate upskilling, online assessment',
};

/**
 * Resolve unique SEO metadata for a marketing pathname.
 */
export function getPageSeo(pathname) {
  const path = normalizePath(pathname);

  if (PAGE_SEO[path]) {
    return { path, ...withJsonLd(path, PAGE_SEO[path]) };
  }

  if (BLOG_SEO[path]) {
    return { path, ...withBlogJsonLd(path, BLOG_SEO[path]) };
  }

  if (path.startsWith('/courses/')) {
    return {
      path,
      title: 'Page not found | iBridge360',
      description: 'The page you requested could not be found.',
      noIndex: true,
    };
  }

  const trainingMatch = path.match(/^\/training\/([^/]+)$/);
  if (trainingMatch) {
    return { path, ...buildTrainingPageSeo(trainingMatch[1]) };
  }

  return { path, ...DEFAULT_SEO };
}

export {
  PAGE_SEO,
  BLOG_SEO,
  SITE_ORIGIN,
  getIndexableSeoPages,
  getPrerenderSeoPages,
};
export default getPageSeo;
