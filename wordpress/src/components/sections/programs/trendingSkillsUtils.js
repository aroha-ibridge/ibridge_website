import {
  PROGRAMS_PAGE_CATEGORIES,
  PROGRAMS_PAGE_CATEGORY_IDS,
} from '@/utils/programVisibility';
import {
  getHtmlCssCourseContent,
  isHtmlCssProgram,
} from '../../../content/programs/htmlCssCourseContent';
import {
  getJavaFullStackCourseContent,
  isJavaFullStackProgram,
} from '../../../content/programs/javaFullStackCourseContent';
import { resolveMarketSyllabus } from '../../../content/programs/marketSyllabusDefaults';
import {
  isThinProgramDescription,
  resolveMarketCourseMeta,
  getMarketRequirementsFallback,
  getMarketFaqsFallback,
} from '../../../content/programs/marketCourseMeta';

function stripProgramDescription(program) {
  return String(program?.description || '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function getMarketMeta(program) {
  return resolveMarketCourseMeta(program, getProgramCategoryId(program));
}

function getDedicatedCourseContent(program) {
  if (isHtmlCssProgram(program)) return getHtmlCssCourseContent();
  if (isJavaFullStackProgram(program)) return getJavaFullStackCourseContent();
  return null;
}

const CATEGORY_KEYWORDS = {
  'web-development': [
    'html',
    'css',
    'javascript',
    'typescript',
    'web development',
    'web design',
  ],
  frontend: ['frontend', 'front-end', 'front end', 'react', 'angular', 'vue', 'next'],
  backend: [
    'backend',
    'back-end',
    'back end',
    'node',
    'express',
    'django',
    'spring',
    'api development',
  ],
  'full-stack': ['full stack', 'fullstack', 'mern', 'mean', 'full-stack'],
  'ui-ux': ['ui/ux', 'uiux', 'figma', 'ux', 'ui design', 'user experience', 'prototype'],
  mobile: ['mobile', 'android', 'ios', 'flutter', 'react native', 'kotlin', 'swift'],
  programming: [
    'programming',
    'java ',
    'c++',
    'c programming',
    'python basics',
    'core java',
    'oop',
  ],
  'data-science': ['data science', 'pandas', 'numpy', 'scikit', 'statistics'],
  'data-engineering': [
    'data engineering',
    'data engineer',
    'etl',
    'data warehouse',
    'spark',
    'hadoop',
    'airflow',
  ],
  'data-analytics': [
    'data analytics',
    'analytics',
    'tableau',
    'power bi',
    'powerbi',
    'business intelligence',
    'excel',
  ],
  database: ['database', 'sql', 'oracle', 'rdbms', 'pl/sql', 'plsql', 'mongodb', 'mysql', 'postgres'],
  'ml-ai': [
    'machine learning',
    'artificial intelligence',
    'deep learning',
    'neural',
    'computer vision',
  ],
  'generative-ai': ['generative ai', 'genai', 'llm', 'prompt', 'chatgpt', 'openai'],
  'cloud-devops': ['aws', 'azure', 'gcp', 'devops', 'linux', 'git', 'docker', 'kubernetes', 'cloud'],
  cybersecurity: [
    'cyber',
    'security',
    'ethical hacking',
    'hacking',
    'network security',
    'penetration',
  ],
  'software-testing': [
    'testing',
    'qa',
    'quality assurance',
    'selenium',
    'automation testing',
    'manual testing',
  ],
  'automation-rpa': ['rpa', 'automation', 'uipath', 'blue prism', 'automation anywhere'],
  blockchain: ['blockchain', 'crypto', 'ethereum', 'web3', 'solidity'],
  iot: ['iot', 'embedded', 'arduino', 'raspberry', 'sensors'],
  'digital-marketing': [
    'digital marketing',
    'seo',
    'social media',
    'content marketing',
    'google ads',
  ],
  'project-management': ['project management', 'pmp', 'agile', 'scrum', 'jira'],
  business: ['business', 'communication', 'soft skill', 'leadership', 'mba'],
  finance: ['finance', 'accounting', 'wealth', 'banking', 'investment'],
  hr: ['human resource', 'hr ', 'recruitment', 'talent'],
  healthcare: ['healthcare', 'health', 'medical', 'pharma'],
  'office-productivity': ['ms office', 'microsoft office', 'excel', 'powerpoint', 'word'],
  career: ['campus', 'career', 'placement', 'interview', 'resume'],
};

export const TRENDING_CATEGORIES = PROGRAMS_PAGE_CATEGORIES.map((category) => ({
  id: category.id,
  label: category.label,
  keywords: CATEGORY_KEYWORDS[category.id] || [],
}));

function textBlob(program) {
  const parts = [
    program?.name,
    ...(program?.programPath || []),
    ...(program?.learningPath || []),
  ];
  return parts.filter(Boolean).join(' ').toLowerCase();
}

function getKeywordCategoryId(program) {
  const blob = textBlob(program);
  for (const category of TRENDING_CATEGORIES) {
    if (category.keywords.some((keyword) => blob.includes(keyword))) {
      return category.id;
    }
  }
  return null;
}

/** Prefer admin-assigned programsPageCategory; fall back to keyword match. */
export function getProgramCategoryId(program) {
  const assigned = program?.programsPageCategory;
  if (assigned && PROGRAMS_PAGE_CATEGORY_IDS.has(assigned)) {
    return assigned;
  }
  return getKeywordCategoryId(program) || 'other';
}

export function groupProgramsByCategory(programs = []) {
  const groups = Object.fromEntries(
    [...TRENDING_CATEGORIES.map((c) => c.id), 'other'].map((id) => [id, []]),
  );

  programs.forEach((program) => {
    const categoryId = getProgramCategoryId(program);
    groups[categoryId].push(program);
  });

  return groups;
}

export function getProgramRating(program) {
  const seed = String(program?._id || program?.name || '0');
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash + seed.charCodeAt(i) * (i + 1)) % 60;
  }
  // Stable per-program rating between 4.5 and 5.0
  return (4.5 + (hash % 6) * 0.1).toFixed(1);
}

export function getProgramPriceAmount(price) {
  if (price === null || price === undefined || price === '') return null;
  const num = Number(price);
  if (!Number.isFinite(num) || num <= 0) return null;
  return num.toLocaleString('en-IN');
}

export function formatProgramPrice(price) {
  const amount = getProgramPriceAmount(price);
  if (!amount) return null;
  return `Rs. ${amount}`;
}

export function formatProgramHours(totalHours) {
  const hours = Number(totalHours);
  if (!Number.isFinite(hours) || hours <= 0) return '— Hrs';
  return `${hours} Hrs`;
}

/** Udemy-style chip: "12 total hours" */
export function getProgramTotalHoursLabel(program) {
  const hours = Number(program?.totalHours ?? program?.hoursNeeded);
  if (!Number.isFinite(hours) || hours <= 0) return null;
  return `${hours} total hour${hours === 1 ? '' : 's'}`;
}

/** Level chip — always "All Levels" on marketing cards. */
export function getProgramLevelLabel() {
  return 'All Levels';
}

/** Resource chip — documents / study materials provided with every course. */
export function getProgramResourcesLabel() {
  return 'Documents';
}

export function getProgramShortDescription(program, maxLength = 90) {
  const raw = String(program?.description || '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (!raw) return '';
  if (raw.length <= maxLength) return raw;
  return `${raw.slice(0, maxLength).trim()}…`;
}

/** Match course name / description against a search query (all words must match). */
export function programMatchesSearch(program, query) {
  const q = String(query || '').trim().toLowerCase();
  if (!q) return true;

  const haystack = [
    program?.name,
    program?.description,
    getProgramShortDescription(program, 500),
    getProgramDetailDisplayName(program),
  ]
    .map((part) =>
      String(part || '')
        .replace(/<[^>]*>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .toLowerCase(),
    )
    .filter(Boolean)
    .join(' ');

  if (!haystack) return false;

  const terms = q.split(/\s+/).filter(Boolean);
  return terms.every((term) => haystack.includes(term));
}

export function getProgramFullDescription(program) {
  const dedicated = getDedicatedCourseContent(program);
  if (dedicated?.overview) return dedicated.overview;
  const fromDb = stripProgramDescription(program);
  if (fromDb && !isThinProgramDescription(program)) return fromDb;
  const meta = getMarketMeta(program);
  if (meta?.overview) return meta.overview;
  return fromDb;
}

export function getProgramDetailLead(program) {
  const dedicated = getDedicatedCourseContent(program);
  if (dedicated?.lead) return dedicated.lead;
  const meta = getMarketMeta(program);
  if (meta?.lead) return meta.lead;
  const fromDb = stripProgramDescription(program);
  if (fromDb && !isThinProgramDescription(program)) {
    return fromDb.length <= 320 ? fromDb : `${fromDb.slice(0, 317).trim()}…`;
  }
  if (meta?.overview) return meta.overview;
  return fromDb || getProgramFullDescription(program);
}

export function getProgramDetailPath(program) {
  const id = program?._id;
  if (!id) return '/programs';
  return `/programs/course/${id}`;
}

export function getProgramDetailLevelName(program) {
  const dedicated = getDedicatedCourseContent(program);
  if (dedicated?.levelName) return dedicated.levelName;
  return getProgramLevelLabel();
}

export function getProgramDetailLevelTag(program) {
  const dedicated = getDedicatedCourseContent(program);
  if (dedicated?.levelTag) return dedicated.levelTag;
  return 'Difficulty';
}

export function getProgramDetailHoursLabel(program) {
  if (isHtmlCssProgram(program)) {
    return getHtmlCssCourseContent().hoursLabel;
  }
  const hours = Number(program?.totalHours ?? program?.hoursNeeded);
  if (!Number.isFinite(hours) || hours <= 0) return null;
  return `${hours} Hours`;
}

/** Build syllabus groups from learningPath for the detail page. */
export function getProgramSyllabusGroups(program) {
  const dedicated = getDedicatedCourseContent(program);
  if (dedicated?.syllabus) return dedicated.syllabus;

  // learningPath only — programPath is often tags, not a real syllabus.
  const items = (Array.isArray(program?.learningPath) ? program.learningPath : [])
    .map((item) => String(item).trim())
    .filter((item) => item && !item.startsWith('__'));

  // Market-standard syllabus when admin has not provided a rich learning path.
  if (items.length < 6) {
    return resolveMarketSyllabus(program, getProgramCategoryId(program));
  }

  const labels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];
  const chunkSize = Math.max(1, Math.ceil(items.length / labels.length));
  return labels
    .map((title, index) => ({
      title,
      items: items.slice(index * chunkSize, (index + 1) * chunkSize),
    }))
    .filter((group) => group.items.length > 0);
}

export function getProgramRequirements(program) {
  const dedicated = getDedicatedCourseContent(program);
  if (dedicated?.requirements) return dedicated.requirements;
  const meta = getMarketMeta(program);
  if (meta?.requirements?.length) return meta.requirements;
  return getMarketRequirementsFallback(program);
}

export function getProgramFaqs(program) {
  const dedicated = getDedicatedCourseContent(program);
  if (dedicated?.faqs) return dedicated.faqs;
  const meta = getMarketMeta(program);
  if (meta?.faqs?.length) return meta.faqs;
  return getMarketFaqsFallback(program);
}

export function getProgramDetailDisplayName(program) {
  const dedicated = getDedicatedCourseContent(program);
  if (dedicated?.displayName) return dedicated.displayName;
  return program?.name || 'Course';
}
