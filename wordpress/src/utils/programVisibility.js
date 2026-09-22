/** Hidden programPath tag — works on current API without schema changes. */
export const SHOW_ON_PROGRAMS_PAGE_TAG = "__show_on_programs_page__";

/**
 * Trending Skills tab options (id stored in programsPageCategory).
 * Keep in sync with backend ProgramDetails.programsPageCategory enum.
 */
export const PROGRAMS_PAGE_CATEGORIES = [
  { id: "web-development", label: "Web Development" },
  { id: "frontend", label: "Frontend Development" },
  { id: "backend", label: "Backend Development" },
  { id: "full-stack", label: "Full Stack Development" },
  { id: "ui-ux", label: "UI/UX Design" },
  { id: "mobile", label: "Mobile Development" },
  { id: "programming", label: "Programming Languages" },
  { id: "data-science", label: "Data Science" },
  { id: "data-engineering", label: "Data Engineering" },
  { id: "data-analytics", label: "Data Analytics & BI" },
  { id: "database", label: "Database" },
  { id: "ml-ai", label: "Machine Learning & AI" },
  { id: "generative-ai", label: "Generative AI" },
  { id: "cloud-devops", label: "Cloud & DevOps" },
  { id: "cybersecurity", label: "Cybersecurity" },
  { id: "software-testing", label: "Software Testing & QA" },
  { id: "automation-rpa", label: "Automation & RPA" },
  { id: "blockchain", label: "Blockchain" },
  { id: "iot", label: "IoT & Embedded" },
  { id: "digital-marketing", label: "Digital Marketing" },
  { id: "project-management", label: "Project Management" },
  { id: "business", label: "Business & Soft Skills" },
  { id: "finance", label: "Finance & Accounting" },
  { id: "hr", label: "HR & Recruitment" },
  { id: "healthcare", label: "Healthcare" },
  { id: "office-productivity", label: "Office & Productivity" },
  { id: "career", label: "Career & Campus" },
];

export const PROGRAMS_PAGE_CATEGORY_IDS = new Set(
  PROGRAMS_PAGE_CATEGORIES.map((c) => c.id),
);

/** Options shaped for SelectSingleValues ({ name, _id }). */
export const PROGRAMS_PAGE_CATEGORY_OPTIONS = PROGRAMS_PAGE_CATEGORIES.map(
  (c) => ({ name: c.label, _id: c.id }),
);

export function getProgramsPageCategoryLabel(categoryId) {
  if (!categoryId) return null;
  return (
    PROGRAMS_PAGE_CATEGORIES.find((c) => c.id === categoryId)?.label || null
  );
}

export function toProgramsPageCategoryOption(categoryId) {
  if (!categoryId || !PROGRAMS_PAGE_CATEGORY_IDS.has(categoryId)) return null;
  const match = PROGRAMS_PAGE_CATEGORIES.find((c) => c.id === categoryId);
  return match ? { name: match.label, _id: match.id } : null;
}

export function resolveProgramsPageCategoryId(value) {
  if (!value) return null;
  if (typeof value === "string") {
    return PROGRAMS_PAGE_CATEGORY_IDS.has(value) ? value : null;
  }
  const id = value._id || value.id || value.value;
  return PROGRAMS_PAGE_CATEGORY_IDS.has(id) ? id : null;
}

export function isShownOnProgramsPage(program) {
  if (!program) return false;
  if (program.showOnProgramsPage === true) return true;
  return Array.isArray(program.programPath)
    ? program.programPath.includes(SHOW_ON_PROGRAMS_PAGE_TAG)
    : false;
}

export function stripProgramsPageTag(programPath = []) {
  return (Array.isArray(programPath) ? programPath : []).filter(
    (item) => item !== SHOW_ON_PROGRAMS_PAGE_TAG,
  );
}

export function withProgramsPageVisibility(programPath = [], visible) {
  const cleaned = stripProgramsPageTag(programPath);
  if (visible) cleaned.push(SHOW_ON_PROGRAMS_PAGE_TAG);
  return cleaned;
}
