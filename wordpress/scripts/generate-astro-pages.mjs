/**
 * Generate Astro page wrappers for every marketing route.
 * Run: node scripts/generate-astro-pages.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const pagesDir = path.join(root, 'src', 'pages');

const STATIC_PAGES = [
  { route: '/', file: 'index.astro', hideChrome: false },
  { route: '/about-us', file: 'about-us.astro' },
  { route: '/programs', file: 'programs.astro' },
  { route: '/self-learning', file: 'self-learning.astro' },
  { route: '/products', file: 'products.astro' },
  { route: '/online-assessment-platform', file: 'online-assessment-platform.astro' },
  { route: '/code-arena', file: 'code-arena.astro' },
  { route: '/learnsmart-lms', file: 'learnsmart-lms.astro' },
  { route: '/training-upskilling', file: 'training-upskilling.astro' },
  { route: '/corporate', file: 'corporate.astro' },
  { route: '/individual-learner', file: 'individual-learner.astro' },
  { route: '/institution', file: 'institution.astro' },
  { route: '/blogs', file: 'blogs.astro' },
  { route: '/careers', file: 'careers.astro' },
  { route: '/contact-us', file: 'contact-us.astro' },
  { route: '/book-career-counselling', file: 'book-career-counselling.astro', hideChrome: true },
  { route: '/thank-you', file: 'thank-you.astro' },
  { route: '/terms-conditions', file: 'terms-conditions.astro' },
  { route: '/privacy-policy', file: 'privacy-policy.astro' },
  {
    route: '/courses/data-engineering-course-bangalore',
    file: 'courses/data-engineering-course-bangalore.astro',
  },
  {
    route: '/courses/data-analytics-course-bangalore',
    file: 'courses/data-analytics-course-bangalore.astro',
  },
  {
    route: '/courses/data-science-course-bangalore',
    file: 'courses/data-science-course-bangalore.astro',
  },
  { route: '/courses/pyspark-course-bangalore', file: 'courses/pyspark-course-bangalore.astro' },
  {
    route: '/courses/databricks-data-engineering-course-bangalore',
    file: 'courses/databricks-data-engineering-course-bangalore.astro',
  },
  {
    route: '/courses/microsoft-fabric-data-engineering-course-bangalore',
    file: 'courses/microsoft-fabric-data-engineering-course-bangalore.astro',
  },
  { route: '/courses/tableau-course-bangalore', file: 'courses/tableau-course-bangalore.astro' },
  {
    route: '/courses/advanced-excel-course-bangalore',
    file: 'courses/advanced-excel-course-bangalore.astro',
  },
  { route: '/courses/sql-bootcamp-bangalore', file: 'courses/sql-bootcamp-bangalore.astro' },
  {
    route: '/courses/python-bootcamp-bangalore',
    file: 'courses/python-bootcamp-bangalore.astro',
  },
  {
    route: '/courses/mern-full-stack-course-bangalore',
    file: 'courses/mern-full-stack-course-bangalore.astro',
  },
  {
    route: '/courses/java-full-stack-course-bangalore',
    file: 'courses/java-full-stack-course-bangalore.astro',
  },
  {
    route: '/courses/python-full-stack-course-bangalore',
    file: 'courses/python-full-stack-course-bangalore.astro',
  },
  { route: '/corporate-elp', file: 'corporate-elp.astro' },
  { route: '/corporate-content-creation', file: 'corporate-content-creation.astro' },
  { route: '/institution-expert-talks', file: 'institution-expert-talks.astro' },
  { route: '/institution-epbl', file: 'institution-epbl.astro' },
  {
    route: '/institution-faculty-development-program',
    file: 'institution-faculty-development-program.astro',
  },
  {
    route: '/institution-soft-skills-for-college-students',
    file: 'institution-soft-skills-for-college-students.astro',
  },
  { route: '/institution-content-creation', file: 'institution-content-creation.astro' },
  {
    route: '/institution-online-offline-programs',
    file: 'institution-online-offline-programs.astro',
  },
  {
    route: '/institution-it-and-non-it-programs-for-institutions',
    file: 'institution-it-and-non-it-programs-for-institutions.astro',
  },
  {
    route: '/institution-self-transformation-sessions-for-students-and-faculty',
    file: 'institution-self-transformation-sessions-for-students-and-faculty.astro',
  },
  {
    route: '/institution-weekly-and-monthly-programs',
    file: 'institution-weekly-and-monthly-programs.astro',
  },
  {
    route: '/institution-experiential-learning-platform',
    file: 'institution-experiential-learning-platform.astro',
  },
  {
    route: '/turning-pharma-reports-into-real-time-insights',
    file: 'turning-pharma-reports-into-real-time-insights.astro',
  },
  {
    route: '/the-power-of-communication-why-college-students-must-master-it',
    file: 'the-power-of-communication-why-college-students-must-master-it.astro',
  },
  {
    route: '/from-concept-to-clarity-breaking-down-llms-for-everyone-by-s-n-raghavan',
    file: 'from-concept-to-clarity-breaking-down-llms-for-everyone-by-s-n-raghavan.astro',
  },
  { route: '/sql-queries-on-pandas-dataframe', file: 'sql-queries-on-pandas-dataframe.astro' },
  {
    route: '/advantages-of-data-visualization-tools',
    file: 'advantages-of-data-visualization-tools.astro',
  },
  {
    route: '/when-you-offer-visualization-analysis',
    file: 'when-you-offer-visualization-analysis.astro',
  },
  { route: '/making-every-graduate-employable', file: 'making-every-graduate-employable.astro' },
  {
    route: '/why-is-data-engineering-a-promising-career-choice',
    file: 'why-is-data-engineering-a-promising-career-choice.astro',
  },
  {
    route: '/ways-of-calculating-roi-from-bidw-implementations',
    file: 'ways-of-calculating-roi-from-bidw-implementations.astro',
  },
  {
    route: '/implementation-of-analytics-in-stages',
    file: 'implementation-of-analytics-in-stages.astro',
  },
];

function depthOf(file) {
  return file.split('/').length - 1;
}

function importPrefix(file) {
  const d = depthOf(file);
  return '../'.repeat(d + 1);
}

function pageTemplate({ route, file, hideChrome = false }) {
  const prefix = importPrefix(file);
  const hide = hideChrome ? '\n  hideChrome={true}' : '';

  return `---
import BaseLayout from '${prefix}layouts/BaseLayout.astro';
import SiteShell from '${prefix}components/layout/SiteShell';
import { getPageSeo } from '${prefix}content/seo/pageSeoRegistry';

const pathname = '${route}';
const seo = getPageSeo(pathname);
---

<BaseLayout seo={seo}>
  <SiteShell client:load pathname={pathname}${hide} />
</BaseLayout>
`;
}

function writeFile(rel, contents) {
  const full = path.join(pagesDir, rel);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, contents, 'utf8');
  console.log('wrote', path.relative(root, full));
}

for (const page of STATIC_PAGES) {
  writeFile(page.file, pageTemplate(page));
}

writeFile(
  'training/[slug].astro',
  `---
import BaseLayout from '../../layouts/BaseLayout.astro';
import SiteShell from '../../components/layout/SiteShell';
import { getPageSeo } from '../../content/seo/pageSeoRegistry';
import { getAllTrainingSlugs } from '../../content/training/trainingPrograms';

export function getStaticPaths() {
  return getAllTrainingSlugs().map((slug) => ({ params: { slug } }));
}

const { slug } = Astro.params;
const pathname = \`/training/\${slug}\`;
const seo = getPageSeo(pathname);
---

<BaseLayout seo={seo}>
  <SiteShell client:load pathname={pathname} params={{ slug }} />
</BaseLayout>
`,
);

writeFile(
  'programs/course/[programId].astro',
  `---
import BaseLayout from '../../../layouts/BaseLayout.astro';
import SiteShell from '../../../components/layout/SiteShell';

export async function getStaticPaths() {
  try {
    const res = await fetch('https://learner.ibridge360.com/api/programs/getPrograms', {
      headers: { Accept: 'application/json' },
    });
    const json = await res.json().catch(() => null);
    const list = Array.isArray(json?.data) ? json.data : Array.isArray(json) ? json : [];
    const paths = list
      .map((program) => {
        const id = program?._id || program?.id || program?.programId;
        if (!id) return null;
        const name = String(
          program?.name || program?.title || program?.programName || program?.courseName || '',
        ).trim();
        const displayName = name || \`Course \${id}\`;
        const raw =
          program?.shortDescription ||
          program?.description ||
          program?.seoDescription ||
          program?.summary ||
          '';
        const cleaned = String(raw)
          .replace(/<[^>]+>/g, ' ')
          .replace(/\\s+/g, ' ')
          .trim();
        const courseDescription =
          cleaned.slice(0, 160) ||
          \`Explore \${displayName} on iBridge360 — syllabus, requirements, and enrollment for this self-paced course.\`;
        return {
          params: { programId: String(id) },
          props: {
            courseName: name,
            courseDescription,
          },
        };
      })
      .filter(Boolean);
    if (!paths.length) {
      return [
        {
          params: { programId: 'preview' },
          props: { courseName: '', courseDescription: '' },
        },
      ];
    }
    return paths;
  } catch {
    return [
      {
        params: { programId: 'preview' },
        props: { courseName: '', courseDescription: '' },
      },
    ];
  }
}

const { programId } = Astro.params;
const { courseName = '', courseDescription = '' } = Astro.props;
const pathname = \`/programs/course/\${programId}\`;
const displayName = String(courseName).trim() || \`Course \${programId}\`;
const seo = {
  title: \`\${displayName} | Self Learning | iBridge360\`,
  description:
    String(courseDescription).trim() ||
    \`Explore \${displayName} on iBridge360 — syllabus, requirements, and enrollment for this self-paced course.\`,
  path: pathname,
  canonical: pathname,
  noIndex: false,
};
---

<BaseLayout seo={seo}>
  <SiteShell client:load pathname={pathname} params={{ programId }} />
</BaseLayout>
`,
);

writeFile(
  '404.astro',
  `---
import BaseLayout from '../layouts/BaseLayout.astro';
import SiteShell from '../components/layout/SiteShell';

const seo = {
  title: 'Page not found | iBridge360',
  description: 'The page you requested could not be found.',
  path: '/404',
  noIndex: true,
};
---

<BaseLayout seo={seo}>
  <SiteShell client:load pathname="/404" />
</BaseLayout>
`,
);

console.log('Done. Generated', STATIC_PAGES.length + 3, 'Astro pages.');
