import dataAnalyticsCurriculum from './dataAnalyticsCurriculum';
import dataAnalyticsFaqCategories from './dataAnalyticsFaqData';
import dataAnalyticsProjects from './dataAnalyticsProjects';
import { WHY_IBRIDGE } from './sharedDefaults';

/**
 * Data Analytics program page content.
 * Same ProgramPage layout as the other career programs — swap copy here, not layout.
 */
const dataAnalyticsProgram = {
  seo: {
    title: 'Data Analytics Course | Learn Excel, SQL, Python & Power BI',
    description:
      'Learn Data Analytics with Excel, SQL, Python, Pandas, Power BI, statistics, data visualization and real-world analytics projects with career support.',
  },
  path: '/data-analytics-course',
  pageId: '508',

  hero: {
    title: 'Data Analytics Course',
    description:
      'Build job-ready Data Analytics skills through a structured 3-month program covering Excel, SQL, Python, Pandas, statistics, data visualization, Power BI, data cleaning, and business analytics. Gain hands-on experience through real-world datasets, practical case studies, dashboards, and a capstone project designed to prepare you for Data Analyst and Business Analytics roles.',
    formSource: 'Data Analytics page — inline form',
    formCourse: 'Data Analytics',
    formIdPrefix: 'da',
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
    title: 'Data Analytics Course',
    titleAccent: 'Curriculum',
    description:
      'Learn Data Analytics through a structured curriculum covering Excel, SQL, Python, statistics, data cleaning, data visualization, Power BI, business analytics, and real-world data projects.',
    modules: dataAnalyticsCurriculum,
  },

  whyIbridge: WHY_IBRIDGE,

  certificate: {
    title: 'Earn Your Data Analytics',
    titleAccent: 'Certificate',
    description:
      'Receive an iBridge360 course completion certificate that validates your learning and practical skills in Data Analytics, SQL, Python, Excel, Power BI, data visualization, and business analytics.',
    descriptionSecondary: '',
    image: '/wp-content/uploads/2026/07/data-engineering-certificate.png',
    imageAlt: 'Sample Data Analytics Certificate of Completion from iBridge360',
  },

  projects: {
    title: 'Analyze Real-World Data &',
    titleAccent: 'Build Professional Dashboards',
    description:
      'A visual look at the analyses you will complete — project, tools, what you analyze, and the business insights you surface.',
    projects: dataAnalyticsProjects,
  },

  career: {
    title: 'Career Opportunities After a Data Analytics Course',
    description:
      'A strong foundation in Excel, SQL, Python, Pandas, statistics, Power BI, data visualization, and business analytics can help learners prepare for entry-level and junior opportunities across analytics and business functions.',
    roles: [
      'Data Analyst',
      'Junior Data Analyst',
      'Business Analyst',
      'Business Intelligence Analyst',
      'Reporting Analyst',
      'MIS Analyst',
      'Data Visualization Analyst',
      'Marketing Data Analyst',
      'Operations Analyst',
      'Business Intelligence Developer',
    ],
  },

  faq: {
    title: 'Frequently Asked Questions —',
    titleAccent: 'Data Analytics',
    description:
      'Everything you need to know about the Data Analytics course — curriculum, learning experience, placements, and enrollment.',
    categories: dataAnalyticsFaqCategories,
  },

  cta: {
    title: 'Start Your Data Analytics Journey',
    description:
      'Build job-ready Data Analytics skills with practical training, real-world datasets, industry projects, expert guidance, and career support from iBridge360.',
    ctaLabel: 'Get Course Details',
    supportingText:
      'Speak with an iBridge360 course advisor to get details about the curriculum, upcoming batches, fees, payment options, and enrollment.',
    phoneLabel: 'Call/WhatsApp: +91 96112 60360',
    phoneHref: 'tel:+919611260360',
    whatsappHref: 'https://wa.me/919611260360',
  },

  modal: {
    programName: 'Data Analytics',
    title: 'Ready to Become a Data Analyst?',
    description:
      'Take the next step toward your analytics career. Fill out the form below, and our learning advisors will help you choose the right batch, explain the curriculum, and answer all your questions.',
    panelImage: '/wp-content/uploads/2024/03/Data-Science1-1.png',
    panelImageAlt: 'Data Analytics program',
  },
};

export default dataAnalyticsProgram;
