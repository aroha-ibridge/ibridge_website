/**
 * Market-standard course copy (overview, lead, requirements, FAQs).
 * Used on /programs/course when admin description is thin or missing.
 * Match order mirrors marketSyllabusDefaults.js.
 */

import { isHtmlCssProgram } from './htmlCssCourseContent';
import { isJavaFullStackProgram } from './javaFullStackCourseContent';

function stripHtml(text) {
  return String(text || '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function isThinProgramDescription(program) {
  return stripHtml(program?.description).length < 100;
}

const GENERIC_REQUIREMENTS = [
  'Basic computer literacy and a willingness to learn consistently.',
  'A laptop or desktop with a stable internet connection.',
  'Time for hands-on practice alongside the structured modules.',
];

const GENERIC_FAQS = (courseName) => [
  {
    question: `What will I learn in ${courseName}?`,
    answer: `You will follow an industry-aligned curriculum with guided modules, practical exercises, and projects designed to build job-ready skills in ${courseName}.`,
  },
  {
    question: 'Is this course suitable for beginners?',
    answer:
      'Yes. Content progresses from foundations to applied topics, with clear explanations and practice so learners at different levels can follow along.',
  },
  {
    question: 'Will I get a certificate?',
    answer:
      'Yes. After you complete the course requirements, you receive a certificate you can add to your resume and professional profiles.',
  },
  {
    question: 'How is this course structured?',
    answer:
      'The syllabus is organized into progressive modules—from core concepts to real-world projects—similar to leading platforms such as Coursera, Udemy, and industry bootcamps.',
  },
];

/** Name/keyword-specific marketing copy (checked in same priority as syllabi). */
const COURSE_MARKET_META = [
  {
    match: [/\bcss\b/i, /cascading style/i],
    lead:
      'Learn to style modern websites with CSS—from selectors and the box model to Flexbox, Grid, and responsive, mobile-first layouts.',
    overview:
      'This CSS course follows a market-standard path used by top web development programs. You will master how stylesheets work, build layouts with Flexbox and CSS Grid, create responsive interfaces with media queries, and apply modern practices such as CSS variables, transitions, and accessibility-aware styling. Hands-on projects include landing pages and a capstone marketing site you can showcase in your portfolio.',
    requirements: [
      'Basic familiarity with HTML structure (HTML basics or equivalent).',
      'A code editor and modern browser for live practice.',
      'Motivation to build and refine visual layouts.',
    ],
    faqs: [
      {
        question: 'Do I need to know HTML before CSS?',
        answer:
          'Yes. CSS styles HTML structure. If you are new to the web, complete an HTML foundations module first or take a combined web basics track.',
      },
      {
        question: 'Does this cover Flexbox and Grid?',
        answer:
          'Yes. Layout modules cover Flexbox, CSS Grid, responsive design, and common UI patterns used in professional front-end work.',
      },
      {
        question: 'Will I learn Bootstrap or Tailwind?',
        answer:
          'The curriculum focuses on core CSS skills first, with awareness of utility frameworks so you can adopt Bootstrap or Tailwind confidently on the job.',
      },
      {
        question: 'Is CSS enough to get a front-end job?',
        answer:
          'CSS is essential for front-end roles. Pair this course with JavaScript and a framework such as React for a complete front-end skill set.',
      },
    ],
  },
  {
    match: [
      /^(?!.*\b(react|node|express|mern|mean)\b).*(javascript|ecmascript|\bes6\b)/i,
      /^(?!.*\b(react|node|express|mern|mean)\b).*?\bjs\b/i,
    ],
    lead:
      'Master JavaScript from fundamentals to modern ES6+ patterns—DOM, async programming, APIs, and portfolio projects employers expect.',
    overview:
      'This JavaScript course aligns with industry bootcamp and MOOC curricula. You will learn variables, control flow, functions, arrays, objects, and DOM manipulation, then progress to ES6+ features, asynchronous JavaScript (Promises and async/await), the Fetch API, and modular code organization. Capstone mini-projects (todo, quiz, and API-driven apps) reinforce skills for front-end and full stack paths.',
    requirements: [
      'Basic HTML knowledge helps but is not mandatory for the first modules.',
      'A modern browser and code editor.',
      'Willingness to practice coding exercises daily.',
    ],
    faqs: [
      {
        question: 'Is this course for complete beginners?',
        answer:
          'Yes. It starts with JavaScript fundamentals and builds toward intermediate topics used in React, Node, and full stack development.',
      },
      {
        question: 'Does it cover ES6 and async JavaScript?',
        answer:
          'Yes. Modules include arrow functions, destructuring, modules, Promises, async/await, and working with REST APIs via Fetch.',
      },
      {
        question: 'Will I build projects?',
        answer:
          'Yes. You will complete guided mini-projects and a capstone to demonstrate practical skills in interviews and portfolios.',
      },
    ],
  },
  {
    match: [/\bpython\b/i],
    lead:
      'Build a strong Python foundation—from syntax and OOP to files, APIs, and real-world automation and application projects.',
    overview:
      'This Python program follows market-standard progression: core language skills, object-oriented programming, working with data (JSON, CSV), and practical use cases such as scripting, API integration, and introductory data work. You will practice clean code habits, error handling, and Git-based workflows used in software and analytics roles.',
    requirements: [
      'No prior programming experience required for the foundations track.',
      'Python 3 installed locally or access to an online IDE.',
      'Stable internet for resources and assignments.',
    ],
    faqs: [
      {
        question: 'What can I do after learning Python?',
        answer:
          'Python opens paths in software development, automation, data analytics, data science, and backend engineering, depending on the modules you pursue next.',
      },
      {
        question: 'Does this include OOP?',
        answer:
          'Yes. Classes, inheritance, and common OOP patterns are covered in the intermediate modules.',
      },
      {
        question: 'Are projects included?',
        answer:
          'Yes. You will build utilities and a capstone application that reflects how Python is used in industry.',
      },
    ],
  },
  {
    match: [/\bjava\b(?!script)/i, /core java|advanced java/i],
    lead:
      'Learn Core Java and modern Java SE skills—OOP, collections, exceptions, multithreading, and Java 8+ features—for enterprise and backend careers.',
    overview:
      'This Java course mirrors curricula used by enterprise training providers and university CS tracks. You will master object-oriented programming, the collections framework, exception handling, file I/O, multithreading, and Java 8 streams and lambdas. Later modules introduce JDBC, REST-oriented Spring Boot awareness, and Maven so you can continue toward backend or full stack Java roles.',
    requirements: [
      'Basic logical thinking; no prior Java required.',
      'JDK and an IDE (IntelliJ IDEA, Eclipse, or VS Code with Java extensions).',
      '8 GB RAM recommended for comfortable development.',
    ],
    faqs: [
      {
        question: 'Is this Core Java or Full Stack Java?',
        answer:
          'This track focuses on Core Java and Java SE. For React, Spring Boot, and MySQL end-to-end, see our Java Full Stack program.',
      },
      {
        question: 'Does it cover Java 8 features?',
        answer:
          'Yes. Lambda expressions, the Stream API, functional interfaces, and Optional are included in the modern Java modules.',
      },
      {
        question: 'Will this help with interviews?',
        answer:
          'Yes. Modules include OOP, collections, and coding practice commonly tested in Java developer interviews.',
      },
    ],
  },
  {
    match: [/\breact\b/i, /react\.?js/i],
    lead:
      'Learn React.js the way product teams use it—components, hooks, routing, API integration, and deployable single-page applications.',
    overview:
      'This React course follows the structure used by leading front-end bootcamps: modern JavaScript recap, JSX, components, props, state, and hooks (useState, useEffect, useMemo, useCallback, custom hooks), React Router, Context API, data fetching, and production concerns such as performance and deployment. You will complete a capstone SPA suitable for your portfolio.',
    requirements: [
      'Solid JavaScript fundamentals (variables, functions, arrays, ES6 basics).',
      'Node.js installed for Create React App or Vite tooling.',
      'Familiarity with HTML and CSS.',
    ],
    faqs: [
      {
        question: 'Do I need to know JavaScript first?',
        answer:
          'Yes. React builds on JavaScript. Complete a JavaScript essentials module or equivalent before starting React.',
      },
      {
        question: 'Are hooks covered in depth?',
        answer:
          'Yes. The syllabus includes core hooks, custom hooks, and Context API patterns used in professional codebases.',
      },
      {
        question: 'Is Redux included?',
        answer:
          'The course emphasizes React Context and hooks-first patterns, with an overview of Redux for larger applications.',
      },
    ],
  },
  {
    match: [/node\.?js|express\.?js|\bnode\b/i],
    lead:
      'Build scalable backend services with Node.js and Express—REST APIs, databases, authentication, and deployment fundamentals.',
    overview:
      'This Node.js course covers the server-side stack common in MERN and modern JavaScript careers: the Node runtime, npm, Express routing and middleware, REST API design, database integration (SQL or MongoDB), JWT authentication, validation, and production practices including testing with Postman and deployment overview.',
    requirements: [
      'JavaScript fundamentals including async/await and promises.',
      'Node.js LTS installed on your machine.',
      'Basic understanding of HTTP and JSON.',
    ],
    faqs: [
      {
        question: 'Node.js vs Java backend—which should I learn?',
        answer:
          'Node pairs with JavaScript frontends (React). Java/Spring is common in enterprises. Choose based on your stack path; both are market-relevant.',
      },
      {
        question: 'Will I learn Express?',
        answer:
          'Yes. Express.js is the primary framework for building REST APIs in this curriculum.',
      },
      {
        question: 'Is MongoDB required?',
        answer:
          'Modules cover database integration with MongoDB/Mongoose or SQL depending on track; concepts transfer across databases.',
      },
    ],
  },
  {
    match: [
      /mern|mean\b/i,
      /full.?stack.*(?:mern|node|mongo|react)/i,
      /(?:mern|mean).*full.?stack/i,
    ],
    lead:
      'Become a MERN/MEAN full stack developer—React frontends, Node/Express APIs, MongoDB, and end-to-end deployed applications.',
    overview:
      'This full stack JavaScript program follows the MERN stack curriculum used by major coding bootcamps. You will build responsive React UIs, design REST APIs with Node and Express, model data in MongoDB, implement JWT authentication, and ship integrated projects from development to deployment—with Git workflows and interview preparation.',
    requirements: [
      'HTML, CSS, and JavaScript basics before the React/Node intensive modules.',
      'A laptop capable of running Node.js and MongoDB (local or Atlas).',
      'Commitment to full stack project work.',
    ],
    faqs: [
      {
        question: 'What is the MERN stack?',
        answer:
          'MERN stands for MongoDB, Express, React, and Node.js—a popular JavaScript full stack for building modern web applications.',
      },
      {
        question: 'Is this the same as Java Full Stack?',
        answer:
          'No. This track is JavaScript-based (MERN). Java Full Stack uses React with Spring Boot and MySQL—choose the stack that matches your career goal.',
      },
      {
        question: 'Will I deploy a full project?',
        answer:
          'Yes. Capstone work includes connecting frontend, backend, and database with deployment guidance.',
      },
    ],
  },
  {
    match: [/\bsql\b|mysql|postgres|oracle|pl.?sql|rdbms/i],
    lead:
      'Master SQL and relational databases—queries, joins, modeling, optimization, and reporting skills used by developers and analysts.',
    overview:
      'This SQL course follows market standards for developer and analytics roles: relational concepts, SELECT/DML, aggregations, joins, subqueries, CTEs, window functions, indexing, normalization, transactions, and schema design. You will practice on MySQL/Oracle-style environments and complete reporting and modeling projects.',
    requirements: [
      'No prior SQL required for foundations.',
      'Database client or online SQL sandbox access.',
      'Spreadsheet familiarity helps for reporting modules.',
    ],
    faqs: [
      {
        question: 'Which database does the course use?',
        answer:
          'Concepts apply to MySQL, PostgreSQL, and Oracle; exercises use standard SQL with environment-specific notes where needed.',
      },
      {
        question: 'Is this for developers or analysts?',
        answer:
          'Both. Modules cover querying for applications and business reporting, joins, and data modeling.',
      },
      {
        question: 'Are stored procedures covered?',
        answer:
          'Yes. Advanced modules introduce views, stored procedures, and transaction handling used in enterprise databases.',
      },
    ],
  },
  {
    match: [/power\s*bi|tableau|looker|business intelligence|\bbi\b/i],
    lead:
      'Turn data into decisions with Power BI, Tableau, and analytics workflows—dashboards, KPIs, and stakeholder-ready insights.',
    overview:
      'This business intelligence and analytics course aligns with corporate training standards: data preparation, data modeling, DAX/calculated fields, interactive dashboards, storytelling with data, and case studies across sales, marketing, and operations. You will build executive-style dashboards for your portfolio.',
    requirements: [
      'Basic Excel or spreadsheet skills recommended.',
      'Power BI Desktop or Tableau trial (as per track).',
      'Sample datasets provided for practice.',
    ],
    faqs: [
      {
        question: 'Power BI or Tableau?',
        answer:
          'Curriculum modules map to both tools; your track may emphasize one tool while concepts transfer to the other.',
      },
      {
        question: 'Do I need SQL?',
        answer:
          'SQL helps for data prep; introductory SQL for analysts is often paired with BI modules.',
      },
    ],
  },
  {
    match: [/data science|machine learning|\bml\b|deep learning|scikit|pandas/i],
    lead:
      'Learn data science and machine learning with Python—EDA, statistics, modeling, evaluation, and end-to-end ML projects.',
    overview:
      'This data science program follows the standard industry pipeline: Python, NumPy, Pandas, visualization, statistics, feature engineering, supervised and unsupervised learning, model evaluation, and capstone ML projects. Content aligns with popular MOOC and bootcamp paths for data scientist and ML engineer roles.',
    requirements: [
      'Basic Python or willingness to complete Python foundations first.',
      'Comfort with high-school level mathematics; statistics modules included.',
      'Jupyter or similar environment for notebooks.',
    ],
    faqs: [
      {
        question: 'Do I need a math degree?',
        answer:
          'No. Essential statistics and intuition for ML are taught in context with Python examples.',
      },
      {
        question: 'Which libraries are used?',
        answer:
          'NumPy, Pandas, scikit-learn, and common visualization libraries; deep learning may be introduced at overview level depending on track depth.',
      },
    ],
  },
  {
    match: [/data engineer|etl|spark|airflow|hadoop|data warehouse/i],
    lead:
      'Design and operate data pipelines—ETL/ELT, Spark, orchestration, warehousing, and cloud data platforms.',
    overview:
      'This data engineering course covers the modern DE stack: SQL and Python for pipelines, batch vs streaming, ETL/ELT patterns, Apache Spark fundamentals, workflow orchestration (Airflow overview), data modeling, warehouse design, and data quality—structured like enterprise DE onboarding programs.',
    requirements: [
      'Python and SQL fundamentals recommended.',
      'Linux and Git basics helpful.',
      'Cloud account optional for hands-on labs.',
    ],
    faqs: [
      {
        question: 'Data engineer vs data scientist?',
        answer:
          'Data engineers build reliable data pipelines and platforms; data scientists focus on modeling and insights. This course is engineering-focused.',
      },
    ],
  },
  {
    match: [/\baws\b|amazon web services|azure|gcp|google cloud|devops|docker|kubernetes/i],
    lead:
      'Gain cloud and DevOps skills—AWS/Azure/GCP fundamentals, Linux, Git, CI/CD, Docker, and Kubernetes awareness.',
    overview:
      'This cloud and DevOps track mirrors market certification prep and job-ready skill lists: cloud core services, IAM, networking basics, compute and storage, infrastructure as code overview, Docker containers, Kubernetes concepts, and CI/CD pipelines—so you can support modern deployment workflows.',
    requirements: [
      'Basic IT literacy and command-line comfort (Linux modules assist beginners).',
      'Free-tier cloud account for optional labs.',
    ],
    faqs: [
      {
        question: 'Which cloud provider?',
        answer:
          'Concepts are cloud-agnostic with practical examples on AWS and comparisons to Azure/GCP where relevant.',
      },
    ],
  },
  {
    match: [/cyber|ethical hacking|penetration|network security|infosec/i],
    lead:
      'Build cybersecurity fundamentals—threats, network security, ethical hacking basics, and defensive practices.',
    overview:
      'This cybersecurity course follows introductory infosec curricula: security principles, networking review, vulnerabilities, ethical hacking methodology overview, hardening, and incident response awareness—suitable for SOC, analyst, and further certification paths.',
    requirements: [
      'Basic networking and OS familiarity recommended.',
      'Lab environment only—always follow ethical and legal guidelines.',
    ],
    faqs: [
      {
        question: 'Is ethical hacking included?',
        answer:
          'Yes, at a foundational level in controlled lab contexts, alongside defensive security practices.',
      },
    ],
  },
  {
    match: [/selenium|manual testing|automation testing|software testing|\bqa\b|quality assurance/i],
    lead:
      'Learn software testing and QA—manual test design, Selenium automation, API testing, and quality processes used in agile teams.',
    overview:
      'This QA course aligns with industry tester onboarding: SDLC and agile testing, test cases and bug reporting, manual functional testing, Selenium WebDriver automation basics, API testing with Postman, and test documentation—preparing you for manual QA and automation starter roles.',
    requirements: [
      'Basic understanding of how web applications work.',
      'A computer for installing browsers and automation tools.',
    ],
    faqs: [
      {
        question: 'Manual or automation?',
        answer:
          'Both. Foundations in manual testing precede Selenium automation modules.',
      },
    ],
  },
  {
    match: [/ui\/?ux|figma|user experience|wireframe|prototype/i],
    lead:
      'Design user-centered products with UX research, wireframes, Figma, prototyping, and portfolio-ready case studies.',
    overview:
      'This UI/UX program follows design bootcamp structure: design thinking, user research, personas, information architecture, wireframes, visual UI, Figma components and prototypes, usability testing, accessibility, and developer handoff—culminating in a capstone case study for your portfolio.',
    requirements: [
      'No design background required.',
      'Figma account (free tier is sufficient).',
    ],
    faqs: [
      {
        question: 'Do I need to code?',
        answer:
          'Coding is not required; understanding developer constraints helps for handoff modules.',
      },
    ],
  },
  {
    match: [/flutter|react native|android|ios|kotlin|swift|mobile app/i],
    lead:
      'Build mobile applications—UI patterns, navigation, APIs, and store-ready project fundamentals.',
    overview:
      'This mobile development course covers platform overview, environment setup, layouts, navigation, state, REST integration, local storage, permissions, and publishing basics—structured for cross-platform (Flutter/React Native) or native tracks as indicated by the course title.',
    requirements: [
      'Programming basics (JavaScript, Dart, Kotlin, or Swift depending on track).',
      'Machine meeting emulator/simulator requirements.',
    ],
    faqs: [
      {
        question: 'Native or cross-platform?',
        answer:
          'Curriculum adapts to the course name—Flutter/React Native for cross-platform, Kotlin/Swift for native-focused programs.',
      },
    ],
  },
  {
    match: [/generative ai|genai|\bllm\b|prompt engineering|chatgpt|openai|langchain/i],
    lead:
      'Apply generative AI in practice—LLMs, prompt engineering, responsible use, and workflow integration.',
    overview:
      'This GenAI course reflects 2024–2026 market demand: how large language models work at a practical level, prompt design, RAG and tool-use overview, building AI-assisted workflows, ethics and safety, and hands-on projects with modern APIs and frameworks.',
    requirements: [
      'Basic Python or JavaScript helpful for integration examples.',
      'API access as guided in labs (provider terms apply).',
    ],
    faqs: [
      {
        question: 'Do I need a machine learning background?',
        answer:
          'Foundational ML awareness helps but is not mandatory; the focus is applied GenAI and prompt engineering.',
      },
    ],
  },
  {
    match: [/digital marketing|seo|google ads|social media marketing|content marketing/i],
    lead:
      'Grow brands online with SEO, content, social media, paid ads, and measurable digital marketing campaigns.',
    overview:
      'This digital marketing program follows standard certification-style modules: marketing funnel, SEO on-page and technical basics, content strategy, social media, Google Ads overview, analytics, and campaign optimization with real-world exercises.',
    requirements: [
      'No prior marketing experience required.',
      'Access to social and analytics tools as introduced in modules.',
    ],
    faqs: [
      {
        question: 'Is SEO covered?',
        answer:
          'Yes. SEO fundamentals are a core module alongside paid and social channels.',
      },
    ],
  },
  {
    match: [/agile|scrum|pmp|project management|jira/i],
    lead:
      'Lead projects with Agile, Scrum, planning, delivery, and tools such as Jira used across software and business teams.',
    overview:
      'This project management course aligns with PMI/Scrum awareness training: project lifecycle, Agile values, Scrum roles and ceremonies, backlog management, Jira workflows, risk and stakeholder communication, and capstone planning exercises.',
    requirements: [
      'Professional work experience helpful but not mandatory.',
      'Willingness to participate in collaborative exercises.',
    ],
    faqs: [
      {
        question: 'Does this prepare for PMP or Scrum Master exams?',
        answer:
          'Content builds foundational knowledge; formal certification requires separate exam prep aligned to PMI or Scrum Alliance guides.',
      },
    ],
  },
  {
    match: [/excel|ms office|microsoft office|powerpoint|google sheets/i],
    lead:
      'Master Excel for analysis—formulas, pivots, charts, dashboards, and workplace productivity.',
    overview:
      'This Excel and office productivity course covers spreadsheet fundamentals through advanced lookups, pivot tables, charts, conditional formatting, introductory Power Query, and business reporting workbooks—matching corporate Excel training standards.',
    requirements: [
      'Microsoft Excel or compatible spreadsheet software.',
      'No prior Excel experience required for beginner modules.',
    ],
    faqs: [
      {
        question: 'Mac or Windows Excel?',
        answer:
          'Core formulas and pivots apply to both; minor UI differences are noted in lessons.',
      },
    ],
  },
];

const CATEGORY_MARKET_META = {
  'web-development': {
    lead: 'Learn how the web works and build structured, styled, interactive sites from HTML, CSS, and JavaScript foundations.',
    overview:
      'This web development track follows the standard beginner-to-intermediate path: HTTP and browsers, semantic HTML, CSS layout and responsive design, JavaScript and the DOM, forms and accessibility, Git basics, and portfolio projects—aligned with entry-level front-end and full stack learning paths.',
  },
  frontend: {
    lead: 'Become a front-end developer with modern HTML, CSS, JavaScript, and component-based UI skills.',
    overview:
      'Industry-aligned front-end curriculum covering layout systems, ES6+ JavaScript, SPA concepts, API integration, performance basics, and a production-style capstone project.',
  },
  backend: {
    lead: 'Design and build RESTful backends with secure APIs, databases, and deployment awareness.',
    overview:
      'Backend modules cover HTTP/REST, server-side programming, CRUD APIs, authentication, ORM/data access, logging, testing with Postman, and cloud deploy introductions.',
  },
  'full-stack': {
    lead: 'Connect frontends, backends, and databases to ship complete web applications.',
    overview:
      'Full stack learning path: client and server fundamentals, authentication across layers, integrated CRUD features, Git collaboration, and deployment—structured like leading bootcamp programs.',
  },
  programming: {
    lead: 'Build programming fundamentals—logic, data structures awareness, OOP, and problem-solving for tech careers.',
    overview:
      'Structured programming curriculum from syntax and control flow through OOP, debugging, Git, mini projects, and interview-oriented practice.',
  },
  database: {
    lead: 'Work confidently with relational databases and SQL for applications and analytics.',
    overview:
      'Database track covering RDBMS concepts, SQL querying, modeling, transactions, performance basics, and practical schema projects.',
  },
  'data-science': {
    lead: 'Analyze data and build machine learning models with Python and standard DS workflows.',
    overview:
      'Data science modules: Python data stack, EDA, statistics, ML algorithms, evaluation, and portfolio projects.',
  },
  'data-analytics': {
    lead: 'Answer business questions with SQL, Excel, and BI dashboards.',
    overview:
      'Analytics curriculum: KPIs, data prep, SQL, visualization, Power BI/Tableau-style dashboards, and case-based reporting.',
  },
  'data-engineering': {
    lead: 'Build reliable data pipelines and warehouse solutions for modern analytics.',
    overview:
      'Data engineering modules: ETL/ELT, Spark, orchestration overview, modeling, and end-to-end pipeline capstone.',
  },
  'ml-ai': {
    lead: 'Understand AI and machine learning from foundations to applied modeling.',
    overview:
      'ML/AI track aligned with industry introductions: supervised/unsupervised learning, evaluation, ethics, and applied projects.',
  },
  'generative-ai': {
    lead: 'Use generative AI and LLMs responsibly in real products and workflows.',
    overview:
      'GenAI modules: LLM basics, prompting, integration patterns, governance, and hands-on applied projects.',
  },
  'cloud-devops': {
    lead: 'Support cloud-native applications with DevOps, containers, and CI/CD basics.',
    overview:
      'Cloud and DevOps curriculum covering core services, Linux/Git, Docker, Kubernetes overview, and pipeline fundamentals.',
  },
  cybersecurity: {
    lead: 'Learn defensive and ethical security practices for modern IT environments.',
    overview:
      'Cybersecurity foundations: threats, networks, hardening, and security operations awareness.',
  },
  'software-testing': {
    lead: 'Assure quality with manual and automated software testing practices.',
    overview:
      'QA curriculum: test design, agile QA, Selenium automation intro, API testing, and documentation.',
  },
  'ui-ux': {
    lead: 'Design usable, accessible digital experiences from research to high-fidelity UI.',
    overview:
      'UI/UX track: research, wireframes, Figma, prototyping, testing, and portfolio case studies.',
  },
  mobile: {
    lead: 'Create mobile apps with modern UI, APIs, and release fundamentals.',
    overview:
      'Mobile development modules for cross-platform or native stacks: UI, navigation, data, and publishing basics.',
  },
};

const GENERIC_MARKET_META = {
  lead: (name) =>
    `Build job-ready skills in ${name} with structured modules, hands-on practice, and industry-aligned projects.`,
  overview: (name) =>
    `This ${name} program is designed to match how leading online learning platforms structure career-focused training: clear learning outcomes, progressive modules from foundations to applied work, practical exercises, and certificate-ready completion. You will gain skills employers look for while building confidence through real-world style assignments and project work.`,
};

function findMetaEntry(programName, entries) {
  const isFrameworkHeavy = (entry) =>
    entry.match?.some((m) =>
      /mern|react|node|express|python|java(?!script)|css|sql|aws|figma|flutter|selenium|power|tableau|genai|llm/i.test(
        String(m),
      ),
    );

  const ordered = [
    ...entries.filter((e) => isFrameworkHeavy(e)),
    ...entries.filter((e) => !isFrameworkHeavy(e)),
  ];

  const seen = new Set();
  for (const entry of ordered) {
    if (seen.has(entry)) continue;
    seen.add(entry);
    if (entry.match.some((re) => re.test(programName))) {
      return entry;
    }
  }
  return null;
}

/**
 * @returns {{ lead?: string, overview?: string, requirements?: string[], faqs?: object[] } | null}
 */
export function resolveMarketCourseMeta(program, categoryId) {
  if (isHtmlCssProgram(program) || isJavaFullStackProgram(program)) {
    return null;
  }

  const name = String(program?.name || '').trim();
  const entry = findMetaEntry(name, COURSE_MARKET_META);
  if (entry) {
    return {
      lead: entry.lead,
      overview: entry.overview,
      requirements: entry.requirements,
      faqs: entry.faqs,
    };
  }

  if (categoryId && CATEGORY_MARKET_META[categoryId]) {
    return { ...CATEGORY_MARKET_META[categoryId] };
  }

  if (!name) return null;
  return {
    lead: GENERIC_MARKET_META.lead(name),
    overview: GENERIC_MARKET_META.overview(name),
    requirements: GENERIC_REQUIREMENTS,
    faqs: GENERIC_FAQS(name),
  };
}

export function getMarketRequirementsFallback(program) {
  return GENERIC_REQUIREMENTS;
}

export function getMarketFaqsFallback(program) {
  const name = program?.name || 'this course';
  return GENERIC_FAQS(name);
}
