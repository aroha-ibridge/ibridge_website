/**
 * Marketing detail content for Java Full Stack programs.
 * Syllabus follows industry progression (Beginner → Expert), not a tech-stack checklist.
 */

export const JAVA_FULL_STACK_COURSE_CONTENT = {
  displayName: 'Java Full Stack Development',
  lead:
    'Become a job-ready Java Full Stack developer with a structured path from web fundamentals and Core Java to Spring Boot, databases, React UIs, and deployed capstone projects.',
  overview:
    'This Java Full Stack program mirrors how leading bootcamps and enterprise training providers structure full stack Java tracks: foundations first, then server-side Java, persistence and SQL, the Spring ecosystem, secure REST services, and modern front-end integration. You will work through guided labs and projects at each stage—building confidence for developer and full stack Java roles— and finish with portfolio-ready work and certificate completion.',
  levelTag: 'Difficulty',
  levelName: 'All Levels',
  syllabus: [
    {
      title: 'Beginner',
      meta: 'Web & programming foundations',
      items: [
        'How the web works: browsers, HTTP, and client–server basics',
        'HTML structure, semantic markup, and accessible page layout',
        'CSS styling, Flexbox/Grid, and responsive, mobile-first design',
        'JavaScript essentials: variables, functions, DOM, events, and ES6+ syntax',
        'Introduction to React: components, props, state, and JSX',
        'Git basics: commits, branches, and collaborating on GitHub',
        'Problem-solving mindset and setting up your development environment',
      ],
    },
    {
      title: 'Intermediate',
      meta: 'Core Java & relational data',
      items: [
        'Object-oriented programming: classes, inheritance, polymorphism, abstraction',
        'Collections, exception handling, and file I/O in Java',
        'Multithreading fundamentals and Java 8 streams & lambdas',
        'Relational databases: schema design, keys, and normalization',
        'Writing SQL queries: filters, joins, aggregates, and transactions',
        'JDBC connectivity and executing queries from Java applications',
        'Maven project structure and dependency management',
        'Mini project: Java console or data-driven application',
      ],
    },
    {
      title: 'Advanced',
      meta: 'Spring Boot, APIs & persistence',
      items: [
        'Spring Core: dependency injection, IoC, and bean lifecycle',
        'Building REST APIs with Spring Boot (layered architecture)',
        'CRUD services, validation, exception handling, and logging',
        'Spring Data JPA and Hibernate ORM entity mapping',
        'Entity relationships, fetch strategies, and repository queries',
        'Designing and documenting RESTful endpoints (HTTP methods & status codes)',
        'API testing and debugging with Postman',
        'React hooks, routing, and consuming backend APIs from the UI',
      ],
    },
    {
      title: 'Expert',
      meta: 'Security, full stack delivery & career',
      items: [
        'Spring Security: authentication, authorization, JWT, and role-based access',
        'End-to-end feature: login, protected routes, and secured REST resources',
        'Pagination, sorting, and production-style error responses',
        'Integrating React front end with Spring Boot and MySQL',
        'Code quality, profiles, and configuration for different environments',
        'Capstone: industry-style Java Full Stack application',
        'Interview preparation: Java, Spring, SQL, REST, and system basics',
        'Portfolio review and certificate completion checklist',
      ],
    },
  ],
  requirements: [
    'Basic computer literacy and willingness to code daily.',
    'A laptop (8 GB RAM minimum recommended) with stable internet.',
    'No prior Java or React experience required — we start from foundations.',
  ],
  faqs: [
    {
      question: 'What is Java Full Stack development?',
      answer:
        'Java Full Stack development is building complete web applications—user interfaces, secure server-side logic, and persistent data—using skills and patterns common in enterprise Java teams, from foundations through deployment-ready projects.',
    },
    {
      question: 'Does this course cover frontend, backend, and database?',
      answer:
        'Yes. The curriculum progresses from web and Java foundations through SQL and persistence, Spring Boot APIs, React integration, and a full stack capstone—covering every layer employers expect.',
    },
    {
      question: 'How is the syllabus structured?',
      answer:
        'Like industry bootcamps and MOOC full stack tracks: Beginner (web & programming basics), Intermediate (Core Java & databases), Advanced (Spring Boot, REST, JPA, React integration), and Expert (security, end-to-end delivery, capstone, and interview prep).',
    },
    {
      question: 'Is this suitable for beginners?',
      answer:
        'Yes. The program is designed for All Levels: we begin with web and programming foundations, then progress through Java, Spring, databases, and full stack integration with guided practice.',
    },
    {
      question: 'Will I get a certificate?',
      answer:
        'Yes. After successful completion, you receive a certificate you can share on your profile and with employers, along with hands-on project experience across the full stack.',
    },
  ],
};

/** Programs marketed as Java / generic full stack development (not MERN/Node). */
export function isJavaFullStackProgram(program) {
  const name = String(program?.name || '')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim();
  if (!name) return false;

  if (/java.*full\s*stack|full\s*stack.*java|java\s*fullstack/.test(name)) {
    return true;
  }

  if (/mern|mean|node\.?js|mongodb\s*express|react\s*node/.test(name)) {
    return false;
  }

  if (/full\s*stack/.test(name)) {
    if (/java|spring|hibernate|j2ee|jee\b/.test(name)) return true;
    if (name === 'full stack development' || name === 'fullstack development') {
      return true;
    }
    if (/full\s*stack\s*develop/.test(name) && !/mern|mean|python|php/.test(name)) {
      return true;
    }
  }

  return false;
}

export function getJavaFullStackCourseContent() {
  return JAVA_FULL_STACK_COURSE_CONTENT;
}
