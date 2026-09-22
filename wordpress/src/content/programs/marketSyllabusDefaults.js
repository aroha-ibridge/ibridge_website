/**
 * Market-standard syllabus templates (GUVI / Coursera / Udemy style).
 * Used on /programs/course detail when a program has no learningPath content.
 * Match order: course-name keywords → programsPageCategory → generic.
 */

function levels(beginner, intermediate, advanced, expert = null) {
  const groups = [
    { title: 'Beginner', ...beginner },
    { title: 'Intermediate', ...intermediate },
    { title: 'Advanced', ...advanced },
  ];
  if (expert) groups.push({ title: 'Expert', ...expert });
  return groups;
}

/** Name/keyword-specific syllabi (checked first). */
export const COURSE_NAME_SYLLABI = [
  {
    match: [/html\b/i, /^html$/i],
    // HTML keeps dedicated content in htmlCssCourseContent.js
    skip: true,
  },
  {
    match: [
      /java.*full\s*stack/i,
      /full\s*stack.*java/i,
      /^full\s*stack\s*development$/i,
    ],
    skip: true,
  },
  {
    match: [/\bcss\b/i, /cascading style/i],
    syllabus: levels(
      {
        meta: 'CSS Foundations',
        items: [
          'Introduction to CSS & How Stylesheets Work',
          'Selectors, Classes & IDs',
          'Colors, Units & Typography',
          'Box Model (margin, padding, border)',
          'Display, Position & Float',
          'Backgrounds, Borders & Shadows',
        ],
      },
      {
        meta: 'Layout & Responsive Design',
        items: [
          'Flexbox Layout Mastery',
          'CSS Grid Layout',
          'Media Queries & Mobile-First Design',
          'Responsive Images & Navigation',
          'Pseudo-classes & Pseudo-elements',
          'Transitions & Basic Animations',
        ],
      },
      {
        meta: 'Modern CSS & Projects',
        items: [
          'CSS Variables & Custom Properties',
          'Advanced Selectors & Specificity',
          'Accessibility & Prefer-reduced-motion',
          'Building Responsive Landing Pages',
          'Capstone: Multi-section Marketing Site',
        ],
      },
      {
        meta: 'Career Ready',
        items: [
          'CSS Architecture (BEM basics)',
          'Framework awareness (Bootstrap / Tailwind intro)',
          'Portfolio polish & Interview Q&A',
        ],
      },
    ),
  },
  {
    // Checked after React / Node / MERN entries below — keep those listed first in practice
    // via resolveMarketSyllabus priority, and avoid matching framework course names here.
    match: [
      /^(?!.*\b(react|node|express|mern|mean)\b).*(javascript|ecmascript|\bes6\b)/i,
      /^(?!.*\b(react|node|express|mern|mean)\b).*?\bjs\b/i,
    ],
    syllabus: levels(
      {
        meta: 'JS Fundamentals',
        items: [
          'Introduction to JavaScript & Browser Console',
          'Variables (let, const), Data Types & Operators',
          'Conditionals, Loops & Functions',
          'Arrays & Objects',
          'String & Number Methods',
          'DOM Selection & Manipulation',
        ],
      },
      {
        meta: 'Interactive Web Apps',
        items: [
          'Events, Forms & Validation',
          'ES6+: Arrow Functions, Destructuring, Spread',
          'Modules & Modern Tooling Basics',
          'Async JavaScript: Callbacks, Promises, async/await',
          'Fetch API & Working with JSON',
          'Local Storage & Session Storage',
        ],
      },
      {
        meta: 'Advanced JS Patterns',
        items: [
          'Closures, Scope & Hoisting',
          'Prototypes & Classes',
          'Error Handling & Debugging',
          'Array Methods (map, filter, reduce)',
          'Mini Projects: Todo App, Weather App, Quiz App',
        ],
      },
      {
        meta: 'Interview & Projects',
        items: [
          'Performance Basics & Best Practices',
          'Capstone Project',
          'JavaScript Interview Preparation',
        ],
      },
    ),
  },
  {
    match: [/\bpython\b/i],
    syllabus: levels(
      {
        meta: 'Python Foundations',
        items: [
          'Python Setup, IDEs & Virtual Environments',
          'Variables, Data Types & Operators',
          'Control Flow: if/else, loops',
          'Functions, Modules & Packages',
          'Lists, Tuples, Sets & Dictionaries',
          'File Handling & Exception Handling',
        ],
      },
      {
        meta: 'OOP & Intermediate Python',
        items: [
          'Object-Oriented Programming (Classes & Objects)',
          'Inheritance, Encapsulation & Polymorphism',
          'List/Dict Comprehensions',
          'Working with JSON, CSV & APIs',
          'Regular Expressions Basics',
          'Intro to NumPy & Pandas (if analytics track)',
        ],
      },
      {
        meta: 'Projects & Real Use Cases',
        items: [
          'Automation Scripts & File Utilities',
          'Web Scraping Basics (BeautifulSoup)',
          'REST API Consumption',
          'Database Connectivity (SQLite / MySQL)',
          'Capstone: End-to-End Python Application',
        ],
      },
      {
        meta: 'Career Ready',
        items: [
          'Code Quality, Logging & Testing Basics',
          'Git & GitHub for Python Projects',
          'Python Interview Questions & Coding Practice',
        ],
      },
    ),
  },
  {
    match: [/\bjava\b(?!script)/i, /core java|advanced java/i],
    syllabus: levels(
      {
        meta: 'Core Java',
        items: [
          'JDK, JVM & IDE Setup',
          'Data Types, Variables & Operators',
          'Control Statements & Methods',
          'Arrays & Strings',
          'OOP: Classes, Objects, Constructors',
          'Inheritance, Polymorphism & Abstraction',
        ],
      },
      {
        meta: 'Java SE Intermediate',
        items: [
          'Interfaces & Packages',
          'Exception Handling',
          'Collections Framework (List, Set, Map)',
          'Generics & Wrapper Classes',
          'File I/O & Serialization',
          'Multithreading Basics',
        ],
      },
      {
        meta: 'Modern Java & Apps',
        items: [
          'Java 8+ Streams & Lambda Expressions',
          'JDBC & Database Connectivity',
          'Intro to Spring Boot / REST APIs',
          'Maven / Gradle Basics',
          'Capstone: Console + API Mini Project',
        ],
      },
      {
        meta: 'Interview Ready',
        items: [
          'Design Patterns Overview',
          'Coding Practice & Complexity Basics',
          'Java Interview Preparation',
        ],
      },
    ),
  },
  {
    match: [/\breact\b/i, /react\.?js/i],
    syllabus: levels(
      {
        meta: 'React Foundations',
        items: [
          'Modern JavaScript Recap for React',
          'Create React App / Vite Setup',
          'JSX, Components & Props',
          'State & Events',
          'Conditional Rendering & Lists',
          'Forms & Controlled Components',
        ],
      },
      {
        meta: 'Hooks & Routing',
        items: [
          'useState, useEffect, useMemo & useCallback',
          'Custom Hooks & useContext',
          'React Router (SPA Navigation)',
          'Fetching Data from APIs',
          'Component Composition Patterns',
          'Styling Approaches (CSS Modules / Styled)',
        ],
      },
      {
        meta: 'Production React',
        items: [
          'State Management Overview (Redux / Context)',
          'Performance: memo, lazy, Suspense',
          'Authentication Flows & Protected Routes',
          'Error Boundaries & Best Practices',
          'Capstone: Full Featured React App',
        ],
      },
      {
        meta: 'Career Ready',
        items: [
          'Testing Basics (React Testing Library overview)',
          'Deploying React Apps (Netlify / Vercel)',
          'React Interview Preparation',
        ],
      },
    ),
  },
  {
    match: [/node\.?js|express\.?js|\bnode\b/i],
    syllabus: levels(
      {
        meta: 'Node.js Foundations',
        items: [
          'Node.js Runtime & npm Ecosystem',
          'Modules, Paths & File System',
          'Async Patterns in Node',
          'Building HTTP Servers',
          'Express.js Routing & Middleware',
          'REST API Design Basics',
        ],
      },
      {
        meta: 'APIs & Databases',
        items: [
          'CRUD APIs with Express',
          'MongoDB / Mongoose or SQL Integration',
          'Validation, Error Handling & Logging',
          'Authentication (JWT, sessions)',
          'Environment Config & Security Headers',
          'File Uploads & Multer',
        ],
      },
      {
        meta: 'Production Backend',
        items: [
          'API Documentation (Swagger/OpenAPI overview)',
          'Testing APIs (Postman / Jest basics)',
          'Caching, Rate Limiting & Performance',
          'Deploying Node Apps (Render / AWS / Docker intro)',
          'Capstone: Production-style REST API',
        ],
      },
    ),
  },
  {
    match: [
      /mern|mean\b/i,
      /full.?stack.*(?:mern|node|mongo|react)/i,
      /(?:mern|mean).*full.?stack/i,
    ],
    syllabus: levels(
      {
        meta: 'Frontend Foundations',
        items: [
          'HTML, CSS & JavaScript Essentials',
          'React Components, Props & State',
          'React Router & Forms',
          'API Integration from the Client',
          'Responsive UI Patterns',
        ],
      },
      {
        meta: 'Backend & Database',
        items: [
          'Node.js & Express REST APIs',
          'MongoDB Schema Design & Mongoose',
          'Authentication & Authorization (JWT)',
          'CRUD Features End-to-End',
          'Error Handling & Validation',
        ],
      },
      {
        meta: 'Full Stack Projects',
        items: [
          'Connecting React Frontend to Node Backend',
          'State Management & App Architecture',
          'File Uploads, Search & Pagination',
          'Deployment (Frontend + Backend + DB)',
          'Capstone: Full Stack Web Application',
        ],
      },
      {
        meta: 'Career Ready',
        items: [
          'Git Workflows & Code Reviews',
          'System Design Basics for Web Apps',
          'Interview Prep & Portfolio Polish',
        ],
      },
    ),
  },
  {
    match: [/\bsql\b|mysql|postgres|oracle|pl.?sql|rdbms/i],
    syllabus: levels(
      {
        meta: 'SQL Foundations',
        items: [
          'Relational Database Concepts',
          'SELECT, WHERE, ORDER BY, LIMIT',
          'INSERT, UPDATE, DELETE',
          'Aggregations: COUNT, SUM, AVG, MIN, MAX',
          'GROUP BY & HAVING',
          'Primary Keys, Foreign Keys & Constraints',
        ],
      },
      {
        meta: 'Joins & Querying',
        items: [
          'INNER, LEFT, RIGHT, FULL JOINs',
          'Subqueries & Nested Queries',
          'Common Table Expressions (CTEs)',
          'Window Functions (RANK, ROW_NUMBER, LAG/LEAD)',
          'Views & Stored Procedures Basics',
          'Indexing & Query Performance Intro',
        ],
      },
      {
        meta: 'Data Modeling & Projects',
        items: [
          'Normalization (1NF–3NF)',
          'ER Diagrams & Schema Design',
          'Transactions & ACID Basics',
          'Business Reporting Queries',
          'Capstone: Analytics Dataset + SQL Dashboard Queries',
        ],
      },
    ),
  },
  {
    match: [/power\s*bi|tableau|looker|business intelligence|\bbi\b/i],
    syllabus: levels(
      {
        meta: 'BI Foundations',
        items: [
          'Introduction to Business Intelligence',
          'Connecting to Data Sources',
          'Data Cleaning & Transformation (Power Query / Prep)',
          'Data Modeling Relationships',
          'Basic Visualizations & Charts',
          'Filters, Slicers & Drill-down',
        ],
      },
      {
        meta: 'Analytics & DAX / Calculations',
        items: [
          'Calculated Columns & Measures',
          'DAX / LOD / Calculated Fields Essentials',
          'Time Intelligence & KPIs',
          'Dashboard Design Best Practices',
          'Storytelling with Data',
          'Row-Level Security Basics',
        ],
      },
      {
        meta: 'Projects & Publishing',
        items: [
          'End-to-End Sales / HR / Finance Dashboard',
          'Publishing to Cloud / Workspace',
          'Sharing, Alerts & Refresh Schedules',
          'Capstone: Executive Dashboard Portfolio Project',
        ],
      },
    ),
  },
  {
    match: [/data science|machine learning|\bml\b|deep learning|scikit|pandas/i],
    syllabus: levels(
      {
        meta: 'Data Science Foundations',
        items: [
          'Python for Data Science',
          'NumPy & Pandas for Data Wrangling',
          'Data Cleaning & EDA',
          'Data Visualization (Matplotlib / Seaborn)',
          'SQL for Analytics',
          'Statistics & Probability Essentials',
        ],
      },
      {
        meta: 'Machine Learning Core',
        items: [
          'Supervised vs Unsupervised Learning',
          'Regression & Classification Models',
          'Train/Test Split, Cross-Validation & Metrics',
          'Feature Engineering & Selection',
          'Decision Trees, Random Forest & Boosting Intro',
          'Clustering (K-Means) & Dimensionality Reduction',
        ],
      },
      {
        meta: 'Applied ML & Deployment',
        items: [
          'NLP / Computer Vision Overview (track-dependent)',
          'Model Pipelines with scikit-learn',
          'Intro to Model Deployment',
          'Capstone: End-to-End ML Project',
          'Interview Case Studies & Portfolio',
        ],
      },
    ),
  },
  {
    match: [/data engineer|etl|spark|airflow|hadoop|data warehouse/i],
    syllabus: levels(
      {
        meta: 'Data Engineering Foundations',
        items: [
          'Data Engineering Landscape & Roles',
          'SQL for Data Engineers',
          'Python for Pipelines',
          'Linux & Shell Basics',
          'Git & Collaboration',
          'Batch vs Streaming Concepts',
        ],
      },
      {
        meta: 'ETL, Warehousing & Cloud',
        items: [
          'ETL / ELT Design Patterns',
          'Data Modeling (Star / Snowflake)',
          'Apache Spark Fundamentals',
          'Airflow / Orchestration Basics',
          'Cloud Data Services (AWS / GCP / Azure overview)',
          'Data Quality & Monitoring',
        ],
      },
      {
        meta: 'Projects & Production',
        items: [
          'Building Scalable Pipelines',
          'Warehouse + BI Handoff',
          'Capstone: End-to-End Data Pipeline',
          'Interview Prep for Data Engineer Roles',
        ],
      },
    ),
  },
  {
    match: [/\baws\b|amazon web services|azure|gcp|google cloud|devops|docker|kubernetes/i],
    syllabus: levels(
      {
        meta: 'Cloud & DevOps Foundations',
        items: [
          'Cloud Computing Concepts (IaaS, PaaS, SaaS)',
          'IAM, Regions, Availability & Pricing Basics',
          'Compute, Storage & Networking Essentials',
          'Linux Fundamentals for Cloud',
          'Git, CI Concepts & Collaboration',
          'Infrastructure as Code Overview',
        ],
      },
      {
        meta: 'Containers & Automation',
        items: [
          'Docker Images, Containers & Volumes',
          'Docker Compose',
          'CI/CD Pipelines (GitHub Actions / Jenkins intro)',
          'Kubernetes Core Objects (Pods, Deployments, Services)',
          'Monitoring & Logging Basics',
          'Security Best Practices',
        ],
      },
      {
        meta: 'Projects & Certification Path',
        items: [
          'Deploy a Multi-tier App on Cloud',
          'Auto-scaling & Load Balancing Lab',
          'Capstone: Cloud-native Deployment Project',
          'Certification & Interview Preparation',
        ],
      },
    ),
  },
  {
    match: [/cyber|ethical hacking|penetration|network security|infosec/i],
    syllabus: levels(
      {
        meta: 'Security Foundations',
        items: [
          'Cybersecurity Landscape & Threat Actors',
          'CIA Triad & Security Principles',
          'Networking Basics (TCP/IP, DNS, HTTP/S)',
          'Operating System Security Essentials',
          'Cryptography Basics',
          'Common Attack Vectors Overview',
        ],
      },
      {
        meta: 'Defensive & Offensive Basics',
        items: [
          'Vulnerability Assessment Concepts',
          'Web Application Security (OWASP Top 10)',
          'Firewalls, IDS/IPS & SIEM Intro',
          'Malware & Social Engineering Awareness',
          'Incident Response Basics',
          'Hands-on Labs Overview',
        ],
      },
      {
        meta: 'Projects & Career',
        items: [
          'Security Audit Checklist Project',
          'Hardening a Sample Environment',
          'Capstone: Security Assessment Report',
          'Career Paths & Interview Prep',
        ],
      },
    ),
  },
  {
    match: [/selenium|manual testing|automation testing|software testing|\bqa\b|quality assurance/i],
    syllabus: levels(
      {
        meta: 'Testing Foundations',
        items: [
          'SDLC / STLC Overview',
          'Types of Testing (Functional, Regression, UAT)',
          'Test Case Design Techniques',
          'Bug Life Cycle & Defect Tracking',
          'Test Plan & Test Strategy Basics',
          'Manual Testing Hands-on',
        ],
      },
      {
        meta: 'Automation Essentials',
        items: [
          'Introduction to Test Automation',
          'Selenium WebDriver Fundamentals',
          'Locators, Waits & Assertions',
          'TestNG / Framework Basics',
          'API Testing Intro (Postman)',
          'CI Integration Overview',
        ],
      },
      {
        meta: 'Projects & Career',
        items: [
          'Building a Reusable Automation Framework',
          'Reporting & Best Practices',
          'Capstone: End-to-End Test Suite',
          'QA Interview Preparation',
        ],
      },
    ),
  },
  {
    match: [/ui\/?ux|figma|user experience|wireframe|prototype/i],
    syllabus: levels(
      {
        meta: 'Design Foundations',
        items: [
          'UX vs UI: Roles & Process',
          'Design Thinking & User Research Basics',
          'Personas, Journey Maps & Empathy Maps',
          'Information Architecture',
          'Wireframing Fundamentals',
          'Visual Design Principles (Layout, Color, Type)',
        ],
      },
      {
        meta: 'Figma & Prototyping',
        items: [
          'Figma Interface & Components',
          'Auto Layout & Design Systems Basics',
          'Interactive Prototypes',
          'Usability Testing Basics',
          'Accessibility (WCAG) Awareness',
          'Handoff to Developers',
        ],
      },
      {
        meta: 'Portfolio Projects',
        items: [
          'Mobile App UI Case Study',
          'Web Dashboard Redesign',
          'Capstone: End-to-End Product Design',
          'Portfolio & Interview Prep',
        ],
      },
    ),
  },
  {
    match: [/flutter|react native|android|ios|kotlin|swift|mobile app/i],
    syllabus: levels(
      {
        meta: 'Mobile Foundations',
        items: [
          'Mobile App Ecosystem Overview',
          'Setup: SDK, Emulators & Tooling',
          'UI Widgets / Components Basics',
          'Layouts, Navigation & Theming',
          'State Management Intro',
          'Forms & User Input',
        ],
      },
      {
        meta: 'APIs & Device Features',
        items: [
          'REST API Integration',
          'Local Storage & Persistence',
          'Camera, Location & Permissions',
          'Push Notifications Overview',
          'Authentication Flows',
          'Debugging & Performance Basics',
        ],
      },
      {
        meta: 'Release Ready',
        items: [
          'App Architecture Patterns',
          'Testing & Crash Reporting Overview',
          'Play Store / App Store Publishing Basics',
          'Capstone: Publishable Mobile App',
        ],
      },
    ),
  },
  {
    match: [/generative ai|genai|\bllm\b|prompt engineering|chatgpt|openai|langchain/i],
    syllabus: levels(
      {
        meta: 'GenAI Foundations',
        items: [
          'What is Generative AI & LLMs',
          'Prompt Engineering Fundamentals',
          'Chat, Completion & Embedding Concepts',
          'Responsible AI & Hallucinations',
          'Hands-on with Popular LLM Tools',
          'Use Cases Across Industries',
        ],
      },
      {
        meta: 'Building with GenAI',
        items: [
          'Working with OpenAI / Gemini APIs',
          'RAG (Retrieval Augmented Generation) Basics',
          'Vector Databases Overview',
          'LangChain / Orchestration Intro',
          'Chatbots & Knowledge Assistants',
          'Evaluating LLM Outputs',
        ],
      },
      {
        meta: 'Projects & Deployment',
        items: [
          'Building a Domain Chatbot',
          'Document Q&A System',
          'Capstone: GenAI Application',
          'Productization & Cost Awareness',
        ],
      },
    ),
  },
  {
    match: [/digital marketing|seo|google ads|social media marketing|content marketing/i],
    syllabus: levels(
      {
        meta: 'Marketing Foundations',
        items: [
          'Digital Marketing Funnel & Channels',
          'Website & Landing Page Basics',
          'SEO Fundamentals (On-page & Technical)',
          'Keyword Research',
          'Google Analytics / GA4 Overview',
          'Content Marketing Basics',
        ],
      },
      {
        meta: 'Paid & Social',
        items: [
          'Google Ads Search Campaigns',
          'Meta / Social Media Advertising',
          'Email Marketing Essentials',
          'Conversion Tracking & UTM',
          'A/B Testing Basics',
          'Marketing Automation Intro',
        ],
      },
      {
        meta: 'Strategy & Projects',
        items: [
          'Campaign Planning & Budgeting',
          'Reporting Dashboards for Clients',
          'Capstone: Full-Funnel Marketing Plan',
          'Portfolio & Interview Prep',
        ],
      },
    ),
  },
  {
    match: [/agile|scrum|pmp|project management|jira/i],
    syllabus: levels(
      {
        meta: 'PM Foundations',
        items: [
          'Project Life Cycle & Constraints',
          'Roles: PM, Scrum Master, Product Owner',
          'Scope, Schedule & Stakeholder Management',
          'Agile vs Waterfall',
          'Scrum Events & Artifacts',
          'User Stories & Backlog Basics',
        ],
      },
      {
        meta: 'Delivery Tools',
        items: [
          'Jira / Board Workflows',
          'Estimation & Velocity',
          'Risk & Issue Management',
          'Communication & Status Reporting',
          'Quality & Change Control Basics',
          'Remote / Hybrid Team Practices',
        ],
      },
      {
        meta: 'Career Ready',
        items: [
          'Case Studies & Simulations',
          'Capstone: Project Charter + Sprint Plan',
          'Interview Preparation for PM Roles',
        ],
      },
    ),
  },
  {
    match: [/excel|ms office|microsoft office|powerpoint|google sheets/i],
    syllabus: levels(
      {
        meta: 'Office Foundations',
        items: [
          'Spreadsheet Basics & Formatting',
          'Formulas: SUM, IF, VLOOKUP / XLOOKUP',
          'Sorting, Filtering & Tables',
          'Charts & Conditional Formatting',
          'Pivot Tables Essentials',
          'Data Cleaning Techniques',
        ],
      },
      {
        meta: 'Analysis & Automation',
        items: [
          'Advanced Lookups & Logical Formulas',
          'What-if Analysis & Dashboards',
          'Power Query / Get & Transform Intro',
          'Macros / Automation Awareness',
          'Presentation Best Practices',
          'Collaboration & Sharing',
        ],
      },
      {
        meta: 'Projects',
        items: [
          'Sales / HR Tracker Dashboard',
          'Capstone: Business Reporting Workbook',
          'Workplace Productivity Tips',
        ],
      },
    ),
  },
];

/** Category-level market syllabi (fallback after name match). */
export const CATEGORY_SYLLABI = {
  'web-development': levels(
    {
      meta: 'Web Foundations',
      items: [
        'How the Web Works (HTTP, Browsers, Servers)',
        'HTML Structure & Semantic Markup',
        'CSS Styling & Box Model',
        'Responsive Design Basics',
        'JavaScript Fundamentals',
        'DOM Manipulation & Events',
      ],
    },
    {
      meta: 'Interactive Sites',
      items: [
        'Forms, Validation & Accessibility',
        'Flexbox & CSS Grid Layouts',
        'Fetch API & Working with JSON',
        'Git & GitHub Workflow',
        'Hosting & Deployment Basics',
        'Mini Projects: Landing Page & Portfolio',
      ],
    },
    {
      meta: 'Industry Practices',
      items: [
        'Frontend Performance Basics',
        'SEO-friendly Markup',
        'Intro to Modern Frameworks',
        'Capstone: Multi-page Website',
        'Interview Preparation',
      ],
    },
  ),
  frontend: levels(
    {
      meta: 'Frontend Foundations',
      items: [
        'HTML5 & Semantic Structure',
        'Modern CSS (Flexbox, Grid, Responsive)',
        'JavaScript ES6+ Essentials',
        'DOM, Events & Browser APIs',
        'Accessibility & UX Basics',
        'Tooling: npm, Vite / Webpack overview',
      ],
    },
    {
      meta: 'UI Frameworks',
      items: [
        'Component-based UI Thinking',
        'React / Angular / Vue Fundamentals (track-based)',
        'State Management Basics',
        'Routing & SPA Architecture',
        'API Integration & Auth Flows',
        'Design Systems & Reusable Components',
      ],
    },
    {
      meta: 'Production Frontend',
      items: [
        'Performance Optimization',
        'Testing Overview',
        'Deployment & CI Basics',
        'Capstone: Production-ready Frontend App',
        'Frontend Interview Prep',
      ],
    },
  ),
  backend: levels(
    {
      meta: 'Backend Foundations',
      items: [
        'Client–Server Architecture',
        'HTTP Methods, Status Codes & REST',
        'Language Fundamentals (Node / Java / Python track)',
        'Routing & Middleware Concepts',
        'Working with Databases',
        'Environment Variables & Config',
      ],
    },
    {
      meta: 'APIs & Data',
      items: [
        'Designing RESTful APIs',
        'CRUD, Validation & Error Handling',
        'Authentication & Authorization (JWT/OAuth overview)',
        'ORM / ODM Basics',
        'Caching & Logging Intro',
        'API Testing with Postman',
      ],
    },
    {
      meta: 'Scale & Deploy',
      items: [
        'Security Best Practices',
        'Docker / Cloud Deploy Intro',
        'Capstone: Production API Service',
        'Backend Interview Preparation',
      ],
    },
  ),
  'full-stack': levels(
    {
      meta: 'Full Stack Foundations',
      items: [
        'HTML, CSS & JavaScript Essentials',
        'Frontend Framework Basics',
        'Backend API Fundamentals',
        'Database Essentials (SQL / NoSQL)',
        'Git Collaboration Workflow',
      ],
    },
    {
      meta: 'End-to-End Features',
      items: [
        'Authentication Across Stack',
        'CRUD Features Client ↔ Server',
        'File Uploads, Search & Pagination',
        'State Management & App Structure',
        'Testing & Debugging Across Layers',
      ],
    },
    {
      meta: 'Ship to Production',
      items: [
        'Deployment (Frontend + Backend + DB)',
        'Monitoring & Basic DevOps Awareness',
        'Capstone: Full Stack Product',
        'Career & Interview Preparation',
      ],
    },
  ),
  'ui-ux': levels(
    {
      meta: 'UX Research & Foundations',
      items: [
        'Design Thinking Process',
        'User Research Methods',
        'Personas & Journey Mapping',
        'Information Architecture',
        'Wireframing',
        'Visual Design Principles',
      ],
    },
    {
      meta: 'UI & Prototyping',
      items: [
        'Figma Components & Auto Layout',
        'Design Systems Basics',
        'Interactive Prototypes',
        'Usability Testing',
        'Accessibility Guidelines',
        'Developer Handoff',
      ],
    },
    {
      meta: 'Portfolio',
      items: [
        'Case Study Documentation',
        'Capstone: End-to-End Product Design',
        'Portfolio & Interview Prep',
      ],
    },
  ),
  mobile: levels(
    {
      meta: 'Mobile App Foundations',
      items: [
        'Mobile Platforms Overview',
        'Dev Environment Setup',
        'UI Components & Layouts',
        'Navigation Patterns',
        'State & Forms',
        'Responsive / Adaptive UI',
      ],
    },
    {
      meta: 'Data & Device APIs',
      items: [
        'REST API Integration',
        'Local Storage',
        'Permissions & Device Features',
        'Auth Flows',
        'Push Notifications Overview',
        'Debugging & Profiling Basics',
      ],
    },
    {
      meta: 'Release',
      items: [
        'App Architecture Patterns',
        'Store Publishing Basics',
        'Capstone: Publishable Mobile App',
      ],
    },
  ),
  programming: levels(
    {
      meta: 'Programming Foundations',
      items: [
        'Programming Logic & Problem Solving',
        'Variables, Data Types & Operators',
        'Control Flow & Functions',
        'Arrays / Collections Basics',
        'Debugging Mindset',
        'Version Control with Git',
      ],
    },
    {
      meta: 'Structured Programming',
      items: [
        'Object-Oriented Concepts',
        'Error Handling',
        'File I/O & Modules',
        'Data Structures Intro (Stack, Queue, Hash)',
        'Algorithm Complexity Basics',
        'Mini Projects',
      ],
    },
    {
      meta: 'Applied Skills',
      items: [
        'Working with APIs / Libraries',
        'Capstone Project',
        'Coding Interview Practice',
      ],
    },
  ),
  'data-science': levels(
    {
      meta: 'Data Science Foundations',
      items: [
        'Python for Data Science',
        'NumPy & Pandas',
        'EDA & Data Visualization',
        'SQL for Analysts',
        'Statistics Essentials',
        'Data Cleaning Workflows',
      ],
    },
    {
      meta: 'Machine Learning',
      items: [
        'ML Workflow & Feature Engineering',
        'Regression & Classification',
        'Model Evaluation Metrics',
        'Ensemble Methods Intro',
        'Clustering & Dimensionality Reduction',
        'Intro to NLP / CV (overview)',
      ],
    },
    {
      meta: 'Projects',
      items: [
        'End-to-End ML Pipeline',
        'Capstone Portfolio Project',
        'Interview Case Studies',
      ],
    },
  ),
  'data-engineering': levels(
    {
      meta: 'DE Foundations',
      items: [
        'Data Engineering Landscape',
        'SQL & Python for Pipelines',
        'Linux & Git Essentials',
        'Batch vs Streaming',
        'Data Modeling Basics',
      ],
    },
    {
      meta: 'Pipelines & Platforms',
      items: [
        'ETL / ELT Patterns',
        'Spark Fundamentals',
        'Orchestration (Airflow overview)',
        'Cloud Data Services Overview',
        'Data Quality & Monitoring',
      ],
    },
    {
      meta: 'Production Projects',
      items: [
        'Warehouse Design',
        'Capstone: End-to-End Pipeline',
        'Interview Preparation',
      ],
    },
  ),
  'data-analytics': levels(
    {
      meta: 'Analytics Foundations',
      items: [
        'Analytics Mindset & KPIs',
        'Excel / Sheets for Analysis',
        'SQL for Business Questions',
        'Data Cleaning & Preparation',
        'Descriptive Statistics',
        'Visualization Principles',
      ],
    },
    {
      meta: 'BI Tools',
      items: [
        'Power BI / Tableau Fundamentals',
        'Data Modeling Relationships',
        'DAX / Calculated Fields',
        'Dashboard Design',
        'Storytelling with Data',
        'Stakeholder Reporting',
      ],
    },
    {
      meta: 'Business Projects',
      items: [
        'Sales / Marketing / Ops Case Studies',
        'Capstone: Executive Dashboard',
        'Analytics Interview Prep',
      ],
    },
  ),
  database: levels(
    {
      meta: 'Database Foundations',
      items: [
        'RDBMS Concepts',
        'SQL SELECT & Filtering',
        'DML: Insert, Update, Delete',
        'Joins & Aggregations',
        'Constraints & Keys',
        'Normalization Basics',
      ],
    },
    {
      meta: 'Advanced SQL',
      items: [
        'Subqueries & CTEs',
        'Window Functions',
        'Indexes & Performance',
        'Views & Stored Procedures',
        'Transactions & ACID',
        'NoSQL Overview (MongoDB)',
      ],
    },
    {
      meta: 'Projects',
      items: [
        'Schema Design Project',
        'Reporting Query Suite',
        'Interview SQL Practice',
      ],
    },
  ),
  'ml-ai': levels(
    {
      meta: 'AI / ML Foundations',
      items: [
        'AI vs ML vs Deep Learning',
        'Python Math & Data Prep Essentials',
        'Supervised Learning Algorithms',
        'Unsupervised Learning Overview',
        'Model Evaluation',
        'Ethics & Bias Awareness',
      ],
    },
    {
      meta: 'Applied ML',
      items: [
        'Feature Engineering',
        'Ensemble Methods',
        'Neural Networks Intro',
        'NLP / Computer Vision Overview',
        'ML Pipelines',
        'Experiment Tracking Basics',
      ],
    },
    {
      meta: 'Projects',
      items: [
        'End-to-End ML Application',
        'Capstone Portfolio Project',
        'ML Interview Preparation',
      ],
    },
  ),
  'generative-ai': levels(
    {
      meta: 'GenAI Foundations',
      items: [
        'LLM Landscape & Use Cases',
        'Prompt Engineering',
        'Embeddings & Similarity Search',
        'Responsible AI Practices',
        'Hands-on with Leading LLM APIs',
      ],
    },
    {
      meta: 'Build GenAI Apps',
      items: [
        'RAG Architecture',
        'Vector Databases Overview',
        'Orchestration Frameworks Intro',
        'Chatbots & Agents Overview',
        'Evaluation & Guardrails',
      ],
    },
    {
      meta: 'Projects',
      items: [
        'Domain Knowledge Assistant',
        'Capstone GenAI Product',
        'Cost, Latency & Production Tips',
      ],
    },
  ),
  'cloud-devops': levels(
    {
      meta: 'Cloud Foundations',
      items: [
        'Cloud Service Models',
        'IAM & Security Basics',
        'Compute, Storage & Networking',
        'Linux for Engineers',
        'Git & Collaboration',
      ],
    },
    {
      meta: 'DevOps Toolchain',
      items: [
        'Docker Containers',
        'CI/CD Pipelines',
        'Kubernetes Basics',
        'Infrastructure as Code Overview',
        'Monitoring & Logging',
      ],
    },
    {
      meta: 'Projects',
      items: [
        'Cloud Deployment Capstone',
        'Interview & Certification Path',
      ],
    },
  ),
  cybersecurity: levels(
    {
      meta: 'Security Foundations',
      items: [
        'Threat Landscape & CIA Triad',
        'Networking Essentials',
        'OS Security Basics',
        'Cryptography Overview',
        'Common Vulnerabilities',
      ],
    },
    {
      meta: 'Defense & Assessment',
      items: [
        'OWASP Top 10',
        'Vulnerability Assessment Concepts',
        'Firewalls / SIEM Overview',
        'Incident Response Basics',
        'Secure Coding Awareness',
      ],
    },
    {
      meta: 'Projects',
      items: [
        'Security Assessment Report',
        'Hardening Lab Project',
        'Career Pathways',
      ],
    },
  ),
  'software-testing': levels(
    {
      meta: 'QA Foundations',
      items: [
        'SDLC / STLC',
        'Test Case Design',
        'Bug Tracking & Reporting',
        'Types of Testing',
        'Manual Testing Practice',
      ],
    },
    {
      meta: 'Automation',
      items: [
        'Selenium / Automation Basics',
        'Framework Design Intro',
        'API Testing with Postman',
        'CI Integration Overview',
        'Reporting & Best Practices',
      ],
    },
    {
      meta: 'Projects',
      items: [
        'End-to-End Test Suite Capstone',
        'QA Interview Preparation',
      ],
    },
  ),
  'automation-rpa': levels(
    {
      meta: 'RPA Foundations',
      items: [
        'RPA Landscape & Use Cases',
        'Process Discovery & Mapping',
        'Bot Design Principles',
        'Selectors & UI Automation Basics',
        'Exception Handling Patterns',
      ],
    },
    {
      meta: 'Build & Orchestrate',
      items: [
        'Reusable Components / Libraries',
        'Orchestrator / Control Room Overview',
        'Queues, Schedules & Credentials',
        'Integration with Excel / Email / Web',
        'Governance & Best Practices',
      ],
    },
    {
      meta: 'Projects',
      items: [
        'End-to-End Business Process Bot',
        'Capstone Automation Project',
        'Interview Preparation',
      ],
    },
  ),
  blockchain: levels(
    {
      meta: 'Blockchain Foundations',
      items: [
        'Distributed Ledgers & Consensus',
        'Cryptography Basics for Blockchain',
        'Bitcoin vs Ethereum Overview',
        'Wallets, Keys & Transactions',
        'Smart Contracts Concepts',
      ],
    },
    {
      meta: 'Development',
      items: [
        'Solidity / Smart Contract Basics',
        'Development Tooling Overview',
        'Tokens & Standards (ERC overview)',
        'DApp Architecture Intro',
        'Security Pitfalls Awareness',
      ],
    },
    {
      meta: 'Projects',
      items: [
        'Simple Smart Contract Project',
        'Capstone DApp Concept',
        'Career Pathways in Web3',
      ],
    },
  ),
  iot: levels(
    {
      meta: 'IoT Foundations',
      items: [
        'IoT Architecture & Use Cases',
        'Sensors, Actuators & Microcontrollers',
        'Embedded Programming Basics',
        'Connectivity (Wi-Fi, BLE, MQTT overview)',
        'Data Collection Pipelines',
      ],
    },
    {
      meta: 'Systems & Cloud',
      items: [
        'Edge vs Cloud Processing',
        'Device Security Basics',
        'Dashboards & Visualization',
        'Prototyping with Popular Boards',
        'Integration with Cloud IoT Services',
      ],
    },
    {
      meta: 'Projects',
      items: [
        'End-to-End IoT Prototype',
        'Capstone Connected Device Project',
      ],
    },
  ),
  'digital-marketing': levels(
    {
      meta: 'Digital Foundations',
      items: [
        'Marketing Funnel & Customer Journey',
        'SEO Fundamentals',
        'Content Strategy Basics',
        'Analytics (GA4) Overview',
        'Social Media Channels',
      ],
    },
    {
      meta: 'Growth Channels',
      items: [
        'Google Ads Essentials',
        'Meta / Social Ads',
        'Email Marketing',
        'Conversion Tracking',
        'Campaign Optimization',
      ],
    },
    {
      meta: 'Projects',
      items: [
        'Full-Funnel Campaign Plan',
        'Capstone Client-style Report',
      ],
    },
  ),
  'project-management': levels(
    {
      meta: 'PM Foundations',
      items: [
        'Project Life Cycle',
        'Scope, Time & Cost Basics',
        'Agile & Scrum Essentials',
        'Stakeholder Management',
        'Risk Management Intro',
      ],
    },
    {
      meta: 'Delivery Practice',
      items: [
        'Backlogs, Sprints & Ceremonies',
        'Jira / Collaboration Tools',
        'Reporting & Governance',
        'Quality & Change Control',
        'Remote Team Practices',
      ],
    },
    {
      meta: 'Projects',
      items: [
        'Project Simulation Capstone',
        'Interview Preparation',
      ],
    },
  ),
  business: levels(
    {
      meta: 'Professional Foundations',
      items: [
        'Business Communication Essentials',
        'Presentation & Storytelling',
        'Team Collaboration Skills',
        'Time & Priority Management',
        'Professional Etiquette',
      ],
    },
    {
      meta: 'Workplace Impact',
      items: [
        'Problem Solving Frameworks',
        'Stakeholder Management',
        'Conflict Resolution Basics',
        'Leadership Habits',
        'Meeting Effectiveness',
      ],
    },
    {
      meta: 'Applied Practice',
      items: [
        'Case Simulations',
        'Capstone: Personal Development Plan',
      ],
    },
  ),
  finance: levels(
    {
      meta: 'Finance Foundations',
      items: [
        'Financial Statements Overview',
        'Accounting Basics',
        'Budgeting & Forecasting Intro',
        'Time Value of Money Concepts',
        'Excel for Finance',
      ],
    },
    {
      meta: 'Analysis & Markets',
      items: [
        'Ratio Analysis',
        'Investment Basics',
        'Risk & Return Concepts',
        'Working Capital Awareness',
        'Business Case Evaluation',
      ],
    },
    {
      meta: 'Projects',
      items: [
        'Financial Model Mini Project',
        'Capstone Case Study',
      ],
    },
  ),
  hr: levels(
    {
      meta: 'HR Foundations',
      items: [
        'HR Life Cycle Overview',
        'Recruitment & Sourcing Basics',
        'Interviewing Fundamentals',
        'Onboarding Essentials',
        'HR Compliance Awareness',
      ],
    },
    {
      meta: 'People Practices',
      items: [
        'Performance Management Basics',
        'Employee Engagement',
        'Learning & Development Intro',
        'HR Analytics Awareness',
        'Employer Branding Basics',
      ],
    },
    {
      meta: 'Projects',
      items: [
        'Hiring Process Design Capstone',
        'Interview Preparation for HR Roles',
      ],
    },
  ),
  healthcare: levels(
    {
      meta: 'Healthcare Domain Foundations',
      items: [
        'Healthcare Ecosystem Overview',
        'Clinical vs Administrative Workflows',
        'Health Data Privacy Awareness (HIPAA-style concepts)',
        'Electronic Health Records Overview',
        'Quality & Patient Safety Basics',
      ],
    },
    {
      meta: 'Operations & Tech',
      items: [
        'Healthcare Operations Processes',
        'Digital Health & Telemedicine Intro',
        'Analytics Use Cases in Healthcare',
        'Stakeholder Communication',
        'Compliance Documentation Basics',
      ],
    },
    {
      meta: 'Projects',
      items: [
        'Process Improvement Case Study',
        'Capstone: Healthcare Ops / Digital Initiative Plan',
      ],
    },
  ),
  'office-productivity': levels(
    {
      meta: 'Productivity Foundations',
      items: [
        'Microsoft / Google Workspace Essentials',
        'Spreadsheet Formulas & Charts',
        'Document Formatting Best Practices',
        'Presentation Design Basics',
        'Email & Calendar Productivity',
      ],
    },
    {
      meta: 'Advanced Office Skills',
      items: [
        'Pivot Tables & Dashboards',
        'Data Cleaning Techniques',
        'Templates & Automation Awareness',
        'Collaboration & Sharing Controls',
        'Reporting for Managers',
      ],
    },
    {
      meta: 'Projects',
      items: [
        'Business Tracker Capstone',
        'Workplace Efficiency Playbook',
      ],
    },
  ),
  career: levels(
    {
      meta: 'Career Foundations',
      items: [
        'Career Goal Setting',
        'Resume & LinkedIn Optimization',
        'Personal Branding Basics',
        'Job Search Strategy',
        'Networking Essentials',
      ],
    },
    {
      meta: 'Interview Ready',
      items: [
        'Behavioral Interview Frameworks (STAR)',
        'Technical / Role Interview Practice',
        'Mock Interviews & Feedback',
        'Offer Negotiation Basics',
        'Workplace Readiness Skills',
      ],
    },
    {
      meta: 'Launch',
      items: [
        '90-Day Career Plan',
        'Portfolio / Project Showcase',
        'Campus / Placement Simulation',
      ],
    },
  ),
};

export const GENERIC_MARKET_SYLLABUS = levels(
  {
    meta: 'Foundations',
    items: [
      'Course orientation & learning roadmap',
      'Core concepts and terminology',
      'Hands-on setup of tools & environment',
      'Guided practice exercises',
      'Mini project: apply fundamentals',
    ],
  },
  {
    meta: 'Skill Building',
    items: [
      'Intermediate techniques used in industry',
      'Best practices and common patterns',
      'Working with real-world datasets / scenarios',
      'Debugging, QA mindset & iteration',
      'Collaborative workflows (Git / reviews)',
    ],
  },
  {
    meta: 'Applied Projects',
    items: [
      'Industry-style case studies',
      'Performance, quality & documentation',
      'Capstone project for your portfolio',
      'Peer / mentor review simulation',
    ],
  },
  {
    meta: 'Career Ready',
    items: [
      'Interview question bank for this skill',
      'Portfolio polish & presentation',
      'Certification readiness checklist',
    ],
  },
);

/**
 * Resolve market syllabus for a program.
 * Match order: course-name keywords (frameworks before generic languages) → category → generic.
 */
export function resolveMarketSyllabus(program, categoryId) {
  const name = String(program?.name || '').trim();

  const isFrameworkHeavy = (entry) =>
    entry.match?.some((m) =>
      /mern|react|node|express|python|java(?!script)|css|sql|aws|figma|flutter|selenium|power|tableau|genai|llm/i.test(
        String(m),
      ),
    );

  const ordered = [
    ...COURSE_NAME_SYLLABI.filter((e) => !e.skip && isFrameworkHeavy(e)),
    ...COURSE_NAME_SYLLABI.filter((e) => !e.skip && !isFrameworkHeavy(e)),
  ];

  const seen = new Set();
  for (const entry of ordered) {
    if (seen.has(entry)) continue;
    seen.add(entry);
    if (entry.match.some((re) => re.test(name))) {
      return entry.syllabus;
    }
  }

  if (categoryId && CATEGORY_SYLLABI[categoryId]) {
    return CATEGORY_SYLLABI[categoryId];
  }

  return GENERIC_MARKET_SYLLABUS;
}
