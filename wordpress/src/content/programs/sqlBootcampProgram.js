import sqlBootcampCurriculum from './sqlBootcampCurriculum';
import sqlBootcampFaqCategories from './sqlBootcampFaqData';
import sqlBootcampProjects from './sqlBootcampProjects';
import { WHY_IBRIDGE } from './sharedDefaults';

/**
 * SQL Bootcamp program page content.
 * Same ProgramPage layout as the other career programs — swap copy here, not layout.
 */
const sqlBootcampProgram = {
  seo: {
    title: 'SQL Bootcamp | Learn SQL, Database Management & Data Analytics',
    description:
      'Master SQL through hands-on training in queries, joins, subqueries, CTEs, window functions, database design, data analysis and real-world projects.',
  },
  path: '/sql-bootcamp',
  pageId: '508',

  hero: {
    title: 'SQL Bootcamp',
    description:
      'Build strong, job-ready SQL and Database skills through an intensive, hands-on bootcamp covering SQL fundamentals, database concepts, queries, joins, subqueries, functions, CTEs, window functions, data manipulation, database design, optimization and real-world data analytics projects. Learn how to work with relational databases, write complex SQL queries, analyze large datasets and solve real-world business problems using SQL.',
    formSource: 'SQL Bootcamp page — inline form',
    formCourse: 'SQL Bootcamp',
    formIdPrefix: 'sql',
    duration: 'Intensive Bootcamp',
    useGradientTitle: false,
  },

  trust: {
    title: 'Trusted by learners and hiring partners across the industry',
    description:
      'Our growing community of learners and industry connections reflects our commitment to practical, career-focused training. With 15K+ learners and 115+ hiring partners, iBridge360 helps bridge the gap between technical learning and real-world career opportunities.',
    stats: [
      { value: '15K+', label: 'Learners' },
      { value: '115+', label: 'Hiring Partners' },
    ],
  },

  curriculum: {
    title: 'SQL Bootcamp',
    titleAccent: 'Curriculum',
    description:
      'Learn SQL through a structured curriculum that progresses from database fundamentals and basic queries to advanced SQL, analytical functions, optimization and real-world business use cases.',
    modules: sqlBootcampCurriculum,
  },

  whyIbridge: WHY_IBRIDGE,

  certificate: {
    title: 'Earn Your SQL Bootcamp',
    titleAccent: 'Certificate',
    description:
      'Receive an iBridge360 course completion certificate validating your practical learning across SQL, relational databases, database design, joins, subqueries, CTEs, window functions, data analysis, query optimization and real-world SQL projects.',
    descriptionSecondary: '',
    image: '/wp-content/uploads/2026/07/data-engineering-certificate.png',
    imageAlt: 'Sample SQL Bootcamp Certificate of Completion from iBridge360',
  },

  projects: {
    title: 'Solve Real-World Business Problems',
    titleAccent: 'Using SQL',
    description:
      'A visual look at the projects you will build — project, dataset, SQL concepts used, analysis, and business insights.',
    projects: sqlBootcampProjects,
  },

  career: {
    title: 'Career Opportunities After SQL Bootcamp',
    description:
      'SQL is a core skill used across Data Analytics, Business Intelligence, Software Development, Database Management and Data Engineering.',
    roles: [
      'SQL Developer',
      'Data Analyst',
      'Business Analyst',
      'Business Intelligence Analyst',
      'Database Developer',
      'Reporting Analyst',
      'MIS Analyst',
      'Data Engineer',
      'BI Developer',
      'Junior Data Analyst',
      'Database Administrator — Entry Level',
    ],
  },

  faq: {
    title: 'Frequently Asked Questions —',
    titleAccent: 'SQL Bootcamp',
    description:
      'Everything you need to know about the SQL Bootcamp — curriculum, learning experience, placements, and enrollment.',
    categories: sqlBootcampFaqCategories,
  },

  cta: {
    title: 'Master SQL. Build Real Data Skills.',
    description:
      'Build practical SQL, database, data analysis and advanced querying skills through intensive hands-on training, real-world projects, SQL challenges, interview preparation and career support from iBridge360.',
    ctaLabel: 'Get Bootcamp Details',
    supportingText:
      'Speak with an iBridge360 course advisor to get details about the curriculum, upcoming batches, fees, payment options and enrollment.',
    phoneLabel: 'Call/WhatsApp: +91 96112 60360',
    phoneHref: 'tel:+919611260360',
    whatsappHref: 'https://wa.me/919611260360',
  },

  modal: {
    programName: 'SQL Bootcamp',
    title: 'Ready to Master SQL?',
    description:
      'Take the next step toward your data career. Fill out the form below, and our learning advisors will help you choose the right batch, explain the curriculum, and answer all your questions.',
    panelImage: '/wp-content/uploads/2024/03/Data-Engineering.png',
    panelImageAlt: 'SQL Bootcamp program',
  },
};

export default sqlBootcampProgram;
