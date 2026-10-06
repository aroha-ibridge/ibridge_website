import { getTrainingProgramBySlug } from '../content/training/trainingPrograms';
import { ENQUIRE_POPUP_ID } from '../constants/enquirePopupLink';
import { stripBase } from './siteBase';

/**
 * All programs users can enquire about. Shown in the enquiry form's
 * Course Name dropdown when the user isn't on a specific program page.
 *
 * Add a new entry when you build a new program page.
 */
export const PROGRAM_OPTIONS = [
  { name: 'Data Engineering', path: '/courses/data-engineering-course-bangalore' },
  { name: 'Data Analytics', path: '/courses/data-analytics-course-bangalore' },
  { name: 'PySpark', path: '/courses/pyspark-course-bangalore' },
  { name: 'Databricks Data Engineering', path: '/courses/databricks-data-engineering-course-bangalore' },
  { name: 'Microsoft Fabric Data Engineering', path: '/courses/microsoft-fabric-data-engineering-course-bangalore' },
  { name: 'Tableau', path: '/courses/tableau-course-bangalore' },
  { name: 'Advanced Excel', path: '/courses/advanced-excel-course-bangalore' },
  { name: 'SQL Bootcamp', path: '/courses/sql-bootcamp-bangalore' },
  { name: 'Python Bootcamp', path: '/courses/python-bootcamp-bangalore' },
  { name: 'MERN Full Stack Development', path: '/courses/mern-full-stack-course-bangalore' },
  { name: 'Java Full Stack Development', path: '/courses/java-full-stack-course-bangalore' },
  { name: 'Python Full Stack Development', path: '/courses/python-full-stack-course-bangalore' },
  { name: 'Data Science', path: '/courses/data-science-course-bangalore' },
];

const PROGRAM_NAMES_BY_PATH = PROGRAM_OPTIONS.reduce((acc, program) => {
  if (program.path) {
    acc[program.path] = program.name;
  }
  return acc;
}, {});

/** Page-specific enquiry defaults (e.g. LMS demo — hide course dropdown). */
const ENQUIRY_DEFAULTS_BY_PATH = {
  '/learnsmart-lms': {
    courseName: 'Request Demo for LMS',
    hideCourse: true,
  },
  '/lms': {
    courseName: 'Request Demo for LMS',
    hideCourse: true,
  },
  '/code-arena': {
    courseName: 'Request Demo for Code Arena',
    hideCourse: true,
  },
  '/online-assessment-platform': {
    courseName: 'Request Demo for Assessment Platform',
    hideCourse: true,
  },
};

function normalizePath(pathname = '') {
  if (typeof pathname !== 'string') return '/';
  return pathname.replace(/\/+$/, '') || '/';
}

function currentLogicalPath(pathname) {
  if (typeof pathname === 'string') return normalizePath(pathname);
  if (typeof window === 'undefined') return '/';
  return stripBase(window.location.pathname);
}

/** Returns enquiry defaults for the current page, if any. */
export function getEnquiryPageDefaults(pathname) {
  const path = currentLogicalPath(pathname);
  return ENQUIRY_DEFAULTS_BY_PATH[path] || null;
}

/** Returns the program name for the current page, or empty string. */
export function getCurrentProgramName() {
  if (typeof window === 'undefined') return '';
  const path = currentLogicalPath();
  if (ENQUIRY_DEFAULTS_BY_PATH[path]?.courseName) {
    return ENQUIRY_DEFAULTS_BY_PATH[path].courseName;
  }
  if (PROGRAM_NAMES_BY_PATH[path]) {
    return PROGRAM_NAMES_BY_PATH[path];
  }

  // Training & Upskilling detail pages: /training/:slug
  const trainingMatch = path.match(/^\/training\/([^/]+)$/);
  if (trainingMatch) {
    const config = getTrainingProgramBySlug(trainingMatch[1]);
    return config?.hero?.title || config?.modal?.programName || '';
  }

  return '';
}

/** True if the current page is a dedicated program page (has a fixed course name). */
export function isOnProgramPage() {
  return Boolean(getCurrentProgramName());
}

/**
 * Optional override when opening Enquire / Enroll popup (e.g. Trending Skills course).
 * Consumed once when the popup opens.
 */
let pendingEnquiry = {
  courseName: '',
  coursePrice: '',
  source: '',
};

/** @deprecated use setPendingEnquiryContext — kept for program CTA modal */
let pendingOverride = '';

export function setPendingEnquiryContext({
  courseName = '',
  coursePrice = '',
  source = '',
} = {}) {
  pendingEnquiry = {
    courseName: typeof courseName === 'string' ? courseName.trim() : '',
    coursePrice: typeof coursePrice === 'string' ? coursePrice.trim() : '',
    source: typeof source === 'string' ? source.trim() : '',
  };
  pendingOverride = pendingEnquiry.courseName;
}

export function consumePendingEnquiryContext() {
  const snapshot = { ...pendingEnquiry };
  pendingEnquiry = { courseName: '', coursePrice: '', source: '' };
  pendingOverride = '';
  return snapshot;
}

export function setPendingProgramName(name) {
  const trimmed = typeof name === 'string' ? name.trim() : '';
  pendingOverride = trimmed;
  pendingEnquiry.courseName = trimmed;
}

export function consumePendingProgramName() {
  const value = pendingEnquiry.courseName || pendingOverride;
  pendingOverride = '';
  pendingEnquiry.courseName = '';
  return value;
}

/** ?program= or ?course= from URL (e.g. Trending Skills Enroll links). */
export function getProgramNameFromQuery(search) {
  const raw =
    typeof search === 'string'
      ? search
      : typeof window !== 'undefined'
        ? window.location.search
        : '';
  if (!raw) return '';
  const params = new URLSearchParams(raw.startsWith('?') ? raw.slice(1) : raw);
  return (
    params.get('program')?.trim() ||
    params.get('course')?.trim() ||
    ''
  );
}

/** ?price= from URL (optional, with course enroll links). */
export function getProgramPriceFromQuery(search) {
  const raw =
    typeof search === 'string'
      ? search
      : typeof window !== 'undefined'
        ? window.location.search
        : '';
  if (!raw) return '';
  const params = new URLSearchParams(raw.startsWith('?') ? raw.slice(1) : raw);
  return params.get('price')?.trim() || '';
}

/** Open the global Enquire / Enroll popup with course + fee pre-filled. */
export function openEnquirePopupWithCourse(courseName, coursePrice = '', options = {}) {
  if (typeof document === 'undefined') return;
  const name = typeof courseName === 'string' ? courseName.trim() : '';
  const price =
    typeof coursePrice === 'string'
      ? coursePrice.trim()
      : coursePrice != null && coursePrice !== ''
        ? String(coursePrice).trim()
        : '';
  const source =
    typeof options === 'string'
      ? options.trim()
      : typeof options?.source === 'string'
        ? options.source.trim()
        : 'Trending Skills course — Enroll';

  setPendingEnquiryContext({
    courseName: name,
    coursePrice: price,
    source: name ? source : '',
  });

  window.setTimeout(() => {
    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.setAttribute('data-open-popup', ENQUIRE_POPUP_ID);
    trigger.style.display = 'none';
    document.body.appendChild(trigger);
    trigger.click();
    trigger.remove();
  }, 0);
}
