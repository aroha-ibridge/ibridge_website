/**
 * Old / alias paths that must 301 to the canonical URL.
 * Keep in sync with MarketingRouter <Navigate> routes and nginx.
 */
export const SEO_REDIRECTS = [
  ['/lms', '/learnsmart-lms'],
  ['/testimonials', '/'],
  // Program pages — old URLs 301 to the Bangalore course pages
  ['/courses/data-engineering', '/courses/data-engineering-course-bangalore'],
  ['/data-engineering-course', '/courses/data-engineering-course-bangalore'],
  ['/data-engineering-program', '/courses/data-engineering-course-bangalore'],
  ['/courses/data-science', '/courses/data-science-course-bangalore'],
  ['/data-science-program', '/courses/data-science-course-bangalore'],
  ['/data-analytics-course', '/courses/data-analytics-course-bangalore'],
  ['/pyspark-course', '/courses/pyspark-course-bangalore'],
  [
    '/databricks-data-engineering-course',
    '/courses/databricks-data-engineering-course-bangalore',
  ],
  [
    '/microsoft-fabric-data-engineering-course',
    '/courses/microsoft-fabric-data-engineering-course-bangalore',
  ],
  ['/tableau-course', '/courses/tableau-course-bangalore'],
  ['/advanced-excel-course', '/courses/advanced-excel-course-bangalore'],
  ['/sql-bootcamp', '/courses/sql-bootcamp-bangalore'],
  ['/python-bootcamp', '/courses/python-bootcamp-bangalore'],
  [
    '/mern-full-stack-development-course',
    '/courses/mern-full-stack-course-bangalore',
  ],
  ['/mern-fullstack', '/courses/mern-full-stack-course-bangalore'],
  ['/courses/mern-fullstack', '/courses/mern-full-stack-course-bangalore'],
  ['/full-stack-mern-program', '/courses/mern-full-stack-course-bangalore'],
  [
    '/full-stack-development-mern-program-2',
    '/courses/mern-full-stack-course-bangalore',
  ],
  [
    '/java-full-stack-development-course',
    '/courses/java-full-stack-course-bangalore',
  ],
  ['/java-fullstack', '/courses/java-full-stack-course-bangalore'],
  ['/courses/java-fullstack', '/courses/java-full-stack-course-bangalore'],
  [
    '/python-full-stack-development-course',
    '/courses/python-full-stack-course-bangalore',
  ],
  ['/python-fullstack', '/courses/python-full-stack-course-bangalore'],
  ['/courses/python-fullstack', '/courses/python-full-stack-course-bangalore'],
  ['/corporate-corporate-training-programs', '/corporate'],
  ['/corporate-training', '/corporate'],
];
