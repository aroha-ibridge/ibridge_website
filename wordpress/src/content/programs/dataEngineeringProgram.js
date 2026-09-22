import dataEngineeringCurriculum from '../../components/sections/data-engineering-program/dataEngineeringCurriculum';
import dataEngineeringFaqCategories from '../../components/sections/data-engineering-program/dataEngineeringFaqData';
import dataEngineeringProjects from '../../components/sections/data-engineering-program/dataEngineeringProjects';
import { WHY_IBRIDGE } from './sharedDefaults';

/**
 * Data Engineering program page content.
 * Edit this file to change titles, copy, curriculum, projects, tools, or FAQ.
 */
const dataEngineeringProgram = {
  seo: {
    title: 'Data Engineering Course | Learn SQL, Python, AWS & ETL',
    description:
      'Learn Data Engineering with SQL, Python, ETL, Data Warehousing, AWS Cloud, Power BI, Linux, and practical data engineering skills.',
  },
  path: '/courses/data-engineering',
  pageId: '508',

  hero: {
    title: 'Data Engineering Course',
    description:
      'Build job-ready Data Engineering skills through a structured 3-month program covering SQL, Python, Data Warehousing, ETL, AWS Cloud, Power BI, and Linux. Gain hands-on experience through real-world projects, mentor support, and a capstone project designed to prepare you for Data Engineering roles.',
    formSource: 'Data Engineering page — inline form',
    formCourse: 'Data Engineering',
    formIdPrefix: 'de',
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
    title: 'Data Engineering Course',
    titleAccent: 'Curriculum',
    modules: dataEngineeringCurriculum,
  },

  whyIbridge: WHY_IBRIDGE,

  certificate: {
    title: 'Earn Your Data Engineering',
    titleAccent: 'Certificate',
    description:
      'Receive an iBridge360 course completion certificate that validates your learning and practical skills in Data Engineering, including data processing, SQL, Python, ETL, data warehousing, cloud technologies, and related industry skills.',
    descriptionSecondary: '',
    image: '/wp-content/uploads/2026/07/data-engineering-certificate.png',
    imageAlt: 'Sample Data Engineering Program Certificate of Completion from iBridge360',
  },

  projects: {
    title: 'Hands-On Data Engineering',
    titleAccent: 'Projects',
    description:
      'Apply your Data Engineering skills to practical business scenarios involving data ingestion, transformation, warehousing, analytics, and cloud-based workflows.',
    projects: dataEngineeringProjects,
  },

  career: {
    title: 'Career Opportunities After a Data Engineering Course',
    description:
      'A strong foundation in SQL, Python, data warehousing, ETL, cloud technologies, and data processing can prepare learners for several entry-level and junior data roles.',
    roles: [
      'Junior Data Engineer',
      'Data Engineer',
      'ETL Developer',
      'Data Integration Developer',
      'Junior Analytics Engineer',
      'Data Operations Analyst',
    ],
  },

  faq: {
    description:
      'Everything you need to know about the Data Engineering course — curriculum, learning experience, placements, and enrollment.',
    categories: dataEngineeringFaqCategories,
  },

  cta: {
    title: 'Start Your Data Engineering Career',
    description:
      'Build job-ready Data Engineering skills with practical training, industry-focused projects, expert guidance, and career support from iBridge360.',
    ctaLabel: 'Get Course Details',
    supportingText:
      'Speak with an iBridge360 course advisor to get details about the Data Engineering curriculum, upcoming batches, fees, payment options, and enrollment.',
    phoneLabel: 'Call/WhatsApp: +91 96112 60360',
    phoneHref: 'tel:+919611260360',
    whatsappHref: 'https://wa.me/919611260360',
  },

  modal: {
    programName: 'Data Engineering',
    title: 'Ready to Become a Data Engineer?',
    description:
      'Kickstart your journey into building scalable data pipelines. Fill out the form below, and our learning advisors will help you choose the right batch, walk you through the curriculum, and answer all your questions.',
    panelImage: '/wp-content/uploads/2024/03/Data-Engineering.png',
    panelImageAlt: 'Data Engineering program',
  },
};

export default dataEngineeringProgram;
