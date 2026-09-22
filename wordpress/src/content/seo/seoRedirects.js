/**
 * Old / alias paths that must 301 to the canonical URL.
 * Keep in sync with MarketingRouter <Navigate> routes and nginx.
 */
export const SEO_REDIRECTS = [
  ['/lms', '/learnsmart-lms'],
  ['/testimonials', '/'],
  ['/data-engineering-course', '/courses/data-engineering'],
  ['/data-engineering-program', '/courses/data-engineering'],
  ['/data-science-program', '/courses/data-science'],
  ['/courses/mern-fullstack', '/mern-full-stack-development-course'],
  ['/courses/java-fullstack', '/java-full-stack-development-course'],
  ['/courses/python-fullstack', '/python-full-stack-development-course'],
  ['/mern-fullstack', '/mern-full-stack-development-course'],
  ['/java-fullstack', '/java-full-stack-development-course'],
  ['/python-fullstack', '/python-full-stack-development-course'],
  ['/full-stack-development-mern-program-2', '/mern-full-stack-development-course'],
  ['/full-stack-mern-program', '/mern-full-stack-development-course'],
  ['/corporate-corporate-training-programs', '/corporate'],
  ['/corporate-training', '/corporate'],
];
