import { absoluteSiteUrl, SITE_BASE } from '../../utils/siteBase.js';

/**
 * Plain SEO records — safe to import from Node/Vite build plugins.
 * Keep in sync with marketing routes. jsonLd is attached in pageSeoRegistry.js.
 */

export const PAGE_SEO = {
  '/': {
    title: 'iBridge360 | AI-Powered Learning, Corporate Training & Skill Development',
    description:
      'iBridge360 is an AI-powered learning platform offering Data Science, Data Engineering, AI & Machine Learning, Full Stack Development, Corporate Training, and workforce upskilling solutions for students, institutions, and businesses.',
    keywords:
      'iBridge360, AI powered learning, corporate training India, upskilling programs, LearnSmart LMS, online assessment platform, job ready training',
  },
  '/about-us': {
    title: 'About iBridge360 | AI Learning & Workforce Development Company',
    description:
      'Learn how iBridge360 bridges skill gaps with ML-AI learning solutions for enterprises, campuses, and career seekers — experiential training with measurable outcomes.',
    keywords:
      'about iBridge360, AI learning company, workforce development, experiential learning, corporate L&D partner',
  },
  '/programs': {
    title: 'Career Programs | Data Engineering, Data Science & MERN | iBridge360',
    description:
      'Explore iBridge360 flagship career programs in Data Engineering, Data Science, and Full Stack MERN — mentor-led, project-based learning for job-ready outcomes.',
    keywords:
      'data engineering program, data science course, full stack MERN program, career programs India, iBridge360 programs',
  },
  '/self-learning': {
    title: 'Self Learning | Trending Skills Courses | iBridge360',
    description:
      'Explore self-paced Trending Skills courses across technology and professional development — browse categories, compare courses, and enroll online.',
    keywords:
      'self learning courses, trending skills, online skill courses, self paced learning iBridge360',
  },
  '/products': {
    title: 'Products | Assessment, Code Arena, Training & LearnSmart LMS | iBridge360',
    description:
      'Discover iBridge360 products: Online Assessment Platform, Code Arena coding contests, Training & Upskilling, and LearnSmart LMS — built for skills measurement and learning outcomes.',
    keywords:
      'iBridge360 products, online assessment software, code arena hackathon, corporate LMS, training and upskilling platform',
  },
  '/online-assessment-platform': {
    title: 'Online Assessment Platform | AI Proctoring & Skill Tests | iBridge360',
    description:
      'Run secure online assessments for hiring, campus recruitment, and certification with AI proctoring, automated evaluation, analytics, and candidate management.',
    keywords:
      'online assessment platform, AI proctoring software, skill assessment tool, hiring tests, campus recruitment assessment',
  },
  '/code-arena': {
    title: 'Code Arena | Hackathon Coding Assessment Platform | iBridge360',
    description:
      'Host coding assessments and hackathons with Monaco editor, multi-language execution, automated tests, AI scoring, and leaderboards for campuses and hiring teams.',
    keywords:
      'coding assessment platform, hackathon platform, online coding test, Monaco code editor assessment, campus coding contest, technical hiring assessment',
  },
  '/learnsmart-lms': {
    title: 'LearnSmart LMS | AI Learning Management System | iBridge360',
    description:
      'LearnSmart LMS unifies courses, AI coaching, coding labs, interview simulation, assessments, mentors, and career support for colleges, corporates, and training teams.',
    keywords:
      'LearnSmart LMS, AI LMS India, learning management system, interview simulator, corporate LMS, college LMS',
  },
  '/training-upskilling': {
    title: 'Training & Upskilling Programs for Teams & Campuses | iBridge360',
    description:
      'Custom technology and soft-skills upskilling for individuals, enterprises, and institutions — from Cloud and DevOps to leadership, FDP, and campus readiness.',
    keywords:
      'corporate upskilling, workforce training programs, technology training, faculty development, campus employability training',
  },
  '/corporate': {
    title: 'Corporate Training Programs | Custom L&D Upskilling | iBridge360',
    description:
      'Upskill enterprise teams with customized corporate training in Java, Python, Data, AI, Cloud, DevOps, and leadership — designed for measurable business ROI.',
    keywords:
      'corporate training programs, enterprise L&D, custom corporate upskilling, AI training for employees, corporate DevOps training',
  },
  '/individual-learner': {
    title: 'Individual Learner Programs | Job-Ready Tech Careers | iBridge360',
    description:
      'Accelerate your career with mentor-led programs in Data Engineering, Data Science, Full Stack, Cloud, and AI — built to close skill gaps and improve employability.',
    keywords:
      'job ready courses, individual tech training, career switch programs, data engineering career, full stack course India',
  },
  '/institution': {
    title: 'Institution Partnerships | Campus Training & Employability | iBridge360',
    description:
      'Partner with iBridge360 for campus programs, faculty development, soft skills, and employability training aligned to industry and accreditation goals.',
    keywords:
      'academic partnership, campus training programs, student employability, faculty development program, NAAC oriented training',
  },
  '/blogs': {
    title: 'Blogs & Insights | Data, Careers & Learning | iBridge360',
    description:
      'Practical articles on data engineering, analytics, careers, communication, and capability building from the iBridge360 learning team.',
    keywords:
      'iBridge360 blog, data engineering articles, analytics insights, career skills blog, learning tips',
  },
  '/contact-us': {
    title: 'Contact iBridge360 | Training, LMS & Partnership Enquiries',
    description:
      'Contact iBridge360 for programs, corporate training, LMS demos, or institutional partnerships. Reach us by form, email, or phone — we respond within one business day.',
    keywords:
      'contact iBridge360, enquire training, LMS demo request, corporate training enquiry, Bengaluru training company',
  },
  '/book-career-counselling': {
    title: 'Book Career Counselling | 30-Min Session | iBridge360',
    description:
      'Schedule a 30-minute career counselling call with iBridge360. Choose a date and time — we confirm by email at support@ibridge360.com.',
    keywords:
      'book career counselling, career counselling appointment, iBridge360 counselling, schedule career call',
  },
  '/thank-you': {
    title: 'Thank You | Enquiry Received | iBridge360',
    description:
      'Thank you for contacting iBridge360. Your enquiry has been received and our team will get back to you shortly.',
    keywords: 'thank you, enquiry received, iBridge360',
    noIndex: true,
  },
  '/terms-conditions': {
    title: 'Terms & Conditions | iBridge360',
    description:
      'Read the terms and conditions that govern use of iBridge360 websites, learning platforms, and related services.',
    keywords: 'iBridge360 terms, terms and conditions',
    noIndex: true,
  },
  '/privacy-policy': {
    title: 'Privacy Policy | iBridge360',
    description:
      'How iBridge360 collects, uses, and protects personal information across our websites, training services, and learning platforms.',
    keywords: 'iBridge360 privacy policy, data protection',
    noIndex: true,
  },
  '/courses/data-engineering': {
    title: 'Data Engineering Course | Learn SQL, Python, AWS & ETL',
    description:
      'Learn Data Engineering with SQL, Python, ETL, Data Warehousing, AWS Cloud, Power BI, Linux, and practical data engineering skills.',
    keywords:
      'data engineering course, learn SQL Python AWS ETL, data warehousing, Power BI, Linux',
    canonical: '/courses/data-engineering',
  },
  '/data-engineering-course': {
    title: 'Data Engineering Course | Learn SQL, Python, AWS & ETL',
    description:
      'Learn Data Engineering with SQL, Python, ETL, Data Warehousing, AWS Cloud, Power BI, Linux, and practical data engineering skills.',
    keywords:
      'data engineering course, learn SQL Python AWS ETL, data warehousing, Power BI, Linux',
    canonical: '/courses/data-engineering',
  },
  '/data-analytics-course': {
    title: 'Data Analytics Course | Learn Excel, SQL, Python & Power BI',
    description:
      'Learn Data Analytics with Excel, SQL, Python, Pandas, Power BI, statistics, data visualization and real-world analytics projects with career support.',
    keywords:
      'data analytics course, Excel SQL Python Power BI, data analyst training India, business analytics',
    canonical: '/data-analytics-course',
  },
  '/pyspark-course': {
    title: 'PySpark Course | Learn Apache Spark, Spark SQL & Big Data Processing',
    description:
      'Learn PySpark with Apache Spark, Spark SQL, DataFrames, ETL, Big Data processing, AWS, data pipelines and real-world data engineering projects.',
    keywords:
      'pyspark course, Apache Spark SQL, Big Data processing, Spark DataFrames ETL, data engineering PySpark',
  },
  '/databricks-data-engineering-course': {
    title: 'Databricks Data Engineering Course | Learn PySpark, Delta Lake & Lakehouse',
    description:
      'Learn Databricks Data Engineering with PySpark, SQL, Apache Spark, Delta Lake, Lakehouse Architecture, Unity Catalog, ETL pipelines and cloud integration.',
    keywords:
      'databricks data engineering course, PySpark Delta Lake, Lakehouse Unity Catalog, Spark SQL ETL',
  },
  '/microsoft-fabric-data-engineering-course': {
    title: 'Microsoft Fabric Data Engineering Course | Learn OneLake, Lakehouse & PySpark',
    description:
      'Learn Microsoft Fabric Data Engineering with OneLake, Lakehouse, PySpark, SQL, Data Factory, Pipelines, Dataflow Gen2, Delta Lake and Power BI.',
    keywords:
      'microsoft fabric data engineering course, OneLake Lakehouse PySpark, Data Factory Dataflow Gen2, Fabric Power BI',
  },
  '/tableau-course': {
    title: 'Tableau Course | Learn Tableau, Data Visualization & Business Intelligence',
    description:
      'Learn Tableau with data visualization, Tableau Prep, calculated fields, LOD expressions, dashboards, data analytics, SQL and real-world BI projects.',
    keywords:
      'tableau course, tableau data visualization, tableau prep dashboards, LOD expressions, business intelligence',
  },
  '/advanced-excel-course': {
    title: 'Advanced Excel Course | Learn Excel, Data Analysis, Dashboards & Automation',
    description:
      'Learn Advanced Excel with formulas, Pivot Tables, Power Query, dashboards, data analysis, XLOOKUP, INDEX MATCH, Power Pivot, VBA basics and real-world business projects.',
    keywords:
      'advanced excel course, excel data analysis, pivot tables power query, xlookup dashboards, power pivot VBA',
  },
  '/sql-bootcamp': {
    title: 'SQL Bootcamp | Learn SQL, Database Management & Data Analytics',
    description:
      'Master SQL through hands-on training in queries, joins, subqueries, CTEs, window functions, database design, data analysis and real-world projects.',
    keywords:
      'SQL bootcamp, SQL course, joins CTEs window functions, database design, SQL data analytics',
  },
  '/python-bootcamp': {
    title: 'Python Bootcamp | Learn Python Programming, Automation & Data Analytics',
    description:
      'Master Python through hands-on training in programming, OOP, data structures, automation, APIs, SQL, data analytics and real-world projects.',
    keywords:
      'Python bootcamp, Python programming course, OOP APIs automation, Pandas NumPy SQL, Python data analytics',
  },
  '/courses/data-science': {
    title: 'Data Science Program | Python, ML & Analytics | iBridge360',
    description:
      'Build a Data Science career with Python, statistics, machine learning, visualization, and industry projects — structured mentorship and placement support.',
    keywords:
      'data science course, machine learning program, Python data science training, ML course India, data science career',
    canonical: '/courses/data-science',
  },
  '/data-science-program': {
    title: 'Data Science Program | Python, ML & Analytics | iBridge360',
    description:
      'Build a Data Science career with Python, statistics, machine learning, visualization, and industry projects — structured mentorship and placement support.',
    keywords:
      'data science course, machine learning program, Python data science training, ML course India, data science career',
    canonical: '/courses/data-science',
  },
  '/mern-full-stack-development-course': {
    title: 'MERN Full Stack Development Course | Learn MongoDB, Express, React & Node.js',
    description:
      'Learn MERN Full Stack Development with MongoDB, Express.js, React, Node.js, JavaScript, REST APIs, Git, deployment and real-world development skills.',
    keywords:
      'mern full stack course, MongoDB Express React Node.js training, MERN stack course India, full stack JavaScript',
    canonical: '/mern-full-stack-development-course',
  },
  '/courses/mern-fullstack': {
    title: 'MERN Full Stack Development Course | Learn MongoDB, Express, React & Node.js',
    description:
      'Learn MERN Full Stack Development with MongoDB, Express.js, React, Node.js, JavaScript, REST APIs, Git, deployment and real-world development skills.',
    keywords:
      'mern full stack course, MongoDB Express React Node.js training, MERN stack course India, full stack JavaScript',
    canonical: '/mern-full-stack-development-course',
  },
  '/java-full-stack-development-course': {
    title: 'Java Full Stack Development Course | Learn Java, Spring Boot & React',
    description:
      'Learn Java Full Stack Development with Java, Spring Boot, React, SQL, REST APIs, Git, deployment and real-world development skills.',
    keywords:
      'java full stack course, Spring Boot React training, Java developer program India, full stack Java',
    canonical: '/java-full-stack-development-course',
  },
  '/courses/java-fullstack': {
    title: 'Java Full Stack Development Course | Learn Java, Spring Boot & React',
    description:
      'Learn Java Full Stack Development with Java, Spring Boot, React, SQL, REST APIs, Git, deployment and real-world development skills.',
    keywords:
      'java full stack course, Spring Boot React training, Java developer program India, full stack Java',
    canonical: '/java-full-stack-development-course',
  },
  '/python-full-stack-development-course': {
    title: 'Python Full Stack Development Course | Learn Python, Django & React',
    description:
      'Learn Python Full Stack Development with Python, Django, React, SQL, REST APIs, Git, deployment and real-world development skills.',
    keywords:
      'python full stack course, Django React training, Python Django course India, python full stack developer',
    canonical: '/python-full-stack-development-course',
  },
  '/courses/python-fullstack': {
    title: 'Python Full Stack Development Course | Learn Python, Django & React',
    description:
      'Learn Python Full Stack Development with Python, Django, React, SQL, REST APIs, Git, deployment and real-world development skills.',
    keywords:
      'python full stack course, Django React training, Python Django course India, python full stack developer',
    canonical: '/python-full-stack-development-course',
  },
  '/mern-fullstack': {
    title: 'MERN Full Stack Development Course | Learn MongoDB, Express, React & Node.js',
    description:
      'Learn MERN Full Stack Development with MongoDB, Express.js, React, Node.js, JavaScript, REST APIs, Git, deployment and real-world development skills.',
    keywords:
      'mern full stack course, MongoDB Express React Node.js training, MERN stack course India, full stack JavaScript',
    canonical: '/mern-full-stack-development-course',
  },
  '/java-fullstack': {
    title: 'Java Full Stack Development Course | Learn Java, Spring Boot & React',
    description:
      'Learn Java Full Stack Development with Java, Spring Boot, React, SQL, REST APIs, Git, deployment and real-world development skills.',
    keywords:
      'java full stack course, Spring Boot React training, Java developer program India, full stack Java',
    canonical: '/java-full-stack-development-course',
  },
  '/python-fullstack': {
    title: 'Python Full Stack Development Course | Learn Python, Django & React',
    description:
      'Learn Python Full Stack Development with Python, Django, React, SQL, REST APIs, Git, deployment and real-world development skills.',
    keywords:
      'python full stack course, Django React training, Python Django course India, python full stack developer',
    canonical: '/python-full-stack-development-course',
  },
  '/corporate-elp': {
    title: 'Corporate Experiential Learning Platform (ELP) | iBridge360',
    description:
      'Deploy experiential learning for corporate teams with structured programs, skill practice, and outcome tracking through iBridge360 ELP.',
    keywords: 'corporate ELP, experiential learning platform, enterprise learning programs',
  },
  '/corporate-content-creation': {
    title: 'Corporate Content Creation Services | Learning Content | iBridge360',
    description:
      'Custom corporate learning content creation — courses, assessments, and materials designed for role-based upskilling and business outcomes.',
    keywords: 'corporate learning content, custom course development, L&D content creation',
  },
  '/institution-expert-talks': {
    title: 'Expert Talks for Colleges & Institutions | iBridge360',
    description:
      'Inspire students and strengthen campus outcomes with industry expert talks aligned to academic excellence and employability goals.',
    keywords: 'expert talks for colleges, guest lectures, institutional expert sessions, NAAC related talks',
  },
  '/institution-epbl': {
    title: 'Experiential Project-Based Learning (EPBL) for Campuses | iBridge360',
    description:
      'Bring project-based experiential learning to your campus — industry scenarios, mentorship, and employability-focused student outcomes.',
    keywords: 'project based learning colleges, EPBL program, experiential learning for students',
  },
  '/institution-faculty-development-program': {
    title: 'Faculty Development Program (FDP) | Campus Faculty Training | iBridge360',
    description:
      'Faculty Development Programs that upgrade teaching practice, industry relevance, and student outcomes for higher education institutions.',
    keywords: 'faculty development program, FDP training, train the trainer colleges, faculty upskilling',
  },
  '/institution-soft-skills-for-college-students': {
    title: 'Soft Skills Training for College Students | iBridge360',
    description:
      'Campus soft-skills programs covering communication, confidence, teamwork, and interview readiness to improve student placement outcomes.',
    keywords: 'soft skills for college students, campus communication training, placement soft skills',
  },
  '/institution-content-creation': {
    title: 'Institution Content Creation | Academic Learning Assets | iBridge360',
    description:
      'Custom learning content for institutions — curriculum support materials, assessments, and digital assets for teaching and training.',
    keywords: 'academic content creation, institutional learning materials, curriculum content development',
  },
  '/institution-online-offline-programs': {
    title: 'Online & Offline Campus Programs | Hybrid Training | iBridge360',
    description:
      'Flexible online, offline, and hybrid training programs for colleges — technology, soft skills, and employability tracks.',
    keywords: 'online offline campus programs, hybrid college training, institutional training delivery',
  },
  '/institution-it-and-non-it-programs-for-institutions': {
    title: 'IT & Non-IT Programs for Institutions | iBridge360',
    description:
      'Industry-aligned IT and non-IT programs for campuses — from technology foundations to management and domain readiness.',
    keywords: 'IT programs for colleges, non IT campus training, institutional skill programs',
  },
  '/institution-self-transformation-sessions-for-students-and-faculty': {
    title: 'Self-Transformation Sessions for Students & Faculty | iBridge360',
    description:
      'Transformational sessions that build mindset, habits, and professional readiness for students and faculty across campuses.',
    keywords: 'self transformation sessions, student mindset training, faculty transformation workshops',
  },
  '/institution-weekly-and-monthly-programs': {
    title: 'Weekly & Monthly Campus Programs | Continuous Learning | iBridge360',
    description:
      'Structured weekly and monthly campus learning programs that maintain momentum for skills, placement readiness, and faculty engagement.',
    keywords: 'weekly campus programs, monthly student training, continuous institutional learning',
  },
  '/institution-experiential-learning-platform': {
    title: 'Experiential Learning Platform for Institutions | iBridge360',
    description:
      'An experiential learning platform for campuses combining practice, projects, assessments, and employability pathways.',
    keywords: 'experiential learning platform colleges, institutional ELP, campus learning platform',
  },
};

export const BLOG_SEO = {
  '/turning-pharma-reports-into-real-time-insights': {
    title: 'Turning Pharma Reports into Real-Time Insights | iBridge360 Blog',
    description:
      'How batch process reports locked in Word documents became analysable, real-time production insights for pharma operations.',
    keywords: 'pharma analytics, real-time insights, document to data, manufacturing reports analytics',
    type: 'article',
  },
  '/the-power-of-communication-why-college-students-must-master-it': {
    title: 'Why College Students Must Master Communication | iBridge360 Blog',
    description:
      'Why communication is a career survival skill for college students — and how it improves academics, interviews, and workplace success.',
    keywords: 'communication skills students, soft skills college, career communication',
    type: 'article',
  },
  '/from-concept-to-clarity-breaking-down-llms-for-everyone-by-s-n-raghavan': {
    title: "Breaking Down LLMs for Everyone by S N Raghavan | iBridge360 Blog",
    description:
      'A plain-language introduction to large language models — what they are, how they learn, and why they matter at work.',
    keywords: 'what is LLM, large language models explained, generative AI basics',
    type: 'article',
  },
  '/sql-queries-on-pandas-dataframe': {
    title: 'Run SQL Queries on Pandas DataFrames with pandasql | iBridge360 Blog',
    description:
      'Use pandasql to write familiar SQL against Pandas DataFrames when SQL is faster for filtering and analysis than pandas code.',
    keywords: 'pandasql, SQL on pandas dataframe, pandas SQL tutorial',
    type: 'article',
  },
  '/advantages-of-data-visualization-tools': {
    title: 'Advantages of Data Visualization Tools | iBridge360 Blog',
    description:
      'How visualization and business discovery tools speed insights with interactive analysis, lower cost, and faster decision cycles.',
    keywords: 'data visualization tools, business discovery, dashboard analytics benefits',
    type: 'article',
  },
  '/when-you-offer-visualization-analysis': {
    title: 'When Visualization Analysis Creates the Most ROI | iBridge360 Blog',
    description:
      'Where visualization consulting wins — serving teams without dashboards and unlocking clearer, interactive business insight.',
    keywords: 'visualization ROI, dashboard consulting, BI value selling',
    type: 'article',
  },
  '/making-every-graduate-employable': {
    title: 'Making Every Graduate Employable | iBridge360 Blog',
    description:
      'How experiential mentoring helps graduates become confident, job-ready contributors for employers and their own career goals.',
    keywords: 'graduate employability, job ready graduates, skill based mentoring',
    type: 'article',
  },
  '/why-is-data-engineering-a-promising-career-choice': {
    title: 'Why Data Engineering Is a Promising Career Choice | iBridge360 Blog',
    description:
      'Rising demand, strong salaries, and the skills path into data engineering — why the role is a high-growth career option.',
    keywords: 'data engineering career, become a data engineer, data engineer salary demand',
    type: 'article',
  },
  '/ways-of-calculating-roi-from-bidw-implementations': {
    title: 'Calculating ROI from BIDW Implementations | iBridge360 Blog',
    description:
      'Practical ways to prove return on investment for business intelligence and data warehouse projects beyond vendor claims.',
    keywords: 'BIDW ROI, data warehouse ROI, BI project value measurement',
    type: 'article',
  },
  '/implementation-of-analytics-in-stages': {
    title: 'Implement Analytics in Stages for Better Outcomes | iBridge360 Blog',
    description:
      'Why staged analytics rollouts beat big-bang IT — start from basic MIS readiness and grow maturity step by step.',
    keywords: 'analytics implementation roadmap, staged BI adoption, MIS to analytics maturity',
    type: 'article',
  },
};

export function normalizeSeoPath(pathname = '') {
  if (typeof pathname !== 'string') return '/';
  return pathname.replace(/\/+$/, '') || '/';
}

const SITE_ORIGIN = 'https://ibridge360.com';

function isAliasPage(path, seo) {
  const canonicalPath = normalizeSeoPath(seo.canonical || path);
  return canonicalPath !== path;
}

function toPage(path, seo) {
  return {
    path,
    title: seo.title,
    description: seo.description,
    noIndex: Boolean(seo.noIndex),
    canonicalPath: normalizeSeoPath(seo.canonical || path),
    canonicalUrl: absoluteSiteUrl(SITE_ORIGIN, seo.canonical || path),
  };
}

export function getIndexableSeoPages() {
  const all = { ...PAGE_SEO, ...BLOG_SEO };
  return Object.entries(all)
    .filter(([path, seo]) => !seo.noIndex && !isAliasPage(path, seo))
    .map(([path, seo]) => toPage(path, seo))
    .sort((a, b) => a.path.localeCompare(b.path));
}

export function getPrerenderSeoPages() {
  const all = { ...PAGE_SEO, ...BLOG_SEO };
  return Object.entries(all)
    .filter(([path, seo]) => !isAliasPage(path, seo))
    .map(([path, seo]) => toPage(path, seo))
    .sort((a, b) => a.path.localeCompare(b.path));
}

export { SITE_ORIGIN, SITE_BASE };
