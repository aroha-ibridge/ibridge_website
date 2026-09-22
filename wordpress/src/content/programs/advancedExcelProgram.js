import advancedExcelCurriculum from './advancedExcelCurriculum';
import advancedExcelFaqCategories from './advancedExcelFaqData';
import advancedExcelProjects from './advancedExcelProjects';
import { WHY_IBRIDGE } from './sharedDefaults';

/**
 * Advanced Excel program page content.
 * Same ProgramPage layout as the other career programs — swap copy here, not layout.
 */
const advancedExcelProgram = {
  seo: {
    title: 'Advanced Excel Course | Learn Excel, Data Analysis, Dashboards & Automation',
    description:
      'Learn Advanced Excel with formulas, Pivot Tables, Power Query, dashboards, data analysis, XLOOKUP, INDEX MATCH, Power Pivot, VBA basics and real-world business projects.',
  },
  path: '/advanced-excel-course',
  pageId: '508',

  hero: {
    title: 'Advanced Excel Course',
    description:
      'Build job-ready Advanced Excel and Data Analytics skills through a practical program covering advanced formulas, lookup functions, Pivot Tables, Power Query, data cleaning, data analysis, dashboards, Power Pivot, DAX fundamentals, automation and real-world business projects. Learn how to transform raw data into meaningful insights, automate repetitive tasks, create professional dashboards, analyze business performance and present data effectively for real-world decision-making.',
    formSource: 'Advanced Excel page — inline form',
    formCourse: 'Advanced Excel',
    formIdPrefix: 'excel',
    duration: '2 Months',
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
    title: 'Advanced Excel Course',
    titleAccent: 'Curriculum',
    description:
      'Learn Advanced Excel through a structured curriculum covering Excel fundamentals, advanced formulas, data cleaning, lookup functions, Pivot Tables, Power Query, Power Pivot, data modeling, dashboards, automation and business analytics.',
    modules: advancedExcelCurriculum,
  },

  whyIbridge: WHY_IBRIDGE,

  certificate: {
    title: 'Earn Your Advanced Excel Data Analytics',
    titleAccent: 'Certificate',
    description:
      'Receive an iBridge360 course completion certificate validating your practical learning across Advanced Excel, formulas, lookup functions, Pivot Tables, Power Query, data analysis, dashboards, Power Pivot, data modeling and Excel automation.',
    descriptionSecondary: '',
    image: '/wp-content/uploads/2026/07/data-engineering-certificate.png',
    imageAlt: 'Sample Advanced Excel Data Analytics Certificate of Completion from iBridge360',
  },

  projects: {
    title: 'Build Real-World Excel',
    titleAccent: 'Dashboards',
    description:
      'A visual look at the dashboards you will build — project, dataset, tools used, and the business insights you surface.',
    projects: advancedExcelProjects,
  },

  career: {
    title: 'Career Opportunities After an Advanced Excel Course',
    description:
      'Advanced Excel skills combined with data analysis, Power Query, dashboards, Power Pivot and business intelligence can help learners prepare for opportunities across analytics, finance, operations and reporting.',
    roles: [
      'Data Analyst',
      'Junior Data Analyst',
      'MIS Analyst',
      'Reporting Analyst',
      'Business Analyst',
      'Operations Analyst',
      'Finance Analyst',
      'Sales Analyst',
      'Business Intelligence Analyst',
      'Excel / MIS Executive',
      'Data Reporting Executive',
    ],
  },

  faq: {
    title: 'Frequently Asked Questions —',
    titleAccent: 'Advanced Excel',
    description:
      'Everything you need to know about the Advanced Excel course — curriculum, learning experience, placements, and enrollment.',
    categories: advancedExcelFaqCategories,
  },

  cta: {
    title: 'Master Advanced Excel for Data-Driven Careers',
    description:
      'Build practical Advanced Excel, Power Query, Pivot Tables, Power Pivot, data analysis, dashboard and automation skills through hands-on training, real-world projects, instructor-led learning and career support from iBridge360.',
    ctaLabel: 'Get Course Details',
    supportingText:
      'Speak with an iBridge360 course advisor to get details about the curriculum, upcoming batches, fees, payment options and enrollment.',
    phoneLabel: 'Call/WhatsApp: +91 96112 60360',
    phoneHref: 'tel:+919611260360',
    whatsappHref: 'https://wa.me/919611260360',
  },

  modal: {
    programName: 'Advanced Excel',
    title: 'Ready to Master Advanced Excel?',
    description:
      'Take the next step toward your analytics career. Fill out the form below, and our learning advisors will help you choose the right batch, explain the curriculum, and answer all your questions.',
    panelImage: '/wp-content/uploads/2024/03/Data-Science1-1.png',
    panelImageAlt: 'Advanced Excel program',
  },
};

export default advancedExcelProgram;
