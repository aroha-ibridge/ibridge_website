import tableauCurriculum from './tableauCurriculum';
import tableauFaqCategories from './tableauFaqData';
import tableauProjects from './tableauProjects';
import { WHY_IBRIDGE } from './sharedDefaults';

/**
 * Tableau program page content.
 * Same ProgramPage layout as the other career programs — swap copy here, not layout.
 */
const tableauProgram = {
  seo: {
    title: 'Tableau Course | Learn Tableau, Data Visualization & Business Intelligence',
    description:
      'Learn Tableau with data visualization, Tableau Prep, calculated fields, LOD expressions, dashboards, data analytics, SQL and real-world BI projects.',
  },
  path: '/tableau-course',
  pageId: '508',

  hero: {
    title: 'Tableau Course',
    description:
      'Build job-ready Tableau and Data Analytics skills through a practical program covering Tableau Desktop, Tableau Prep, Excel, SQL, data cleaning, data visualization, calculated fields, parameters, LOD expressions, dashboards, storytelling, Tableau Cloud/Server, and real-world business intelligence projects. Learn how to connect and prepare data, create powerful visualizations, build interactive dashboards, identify business trends, and communicate actionable insights using Tableau.',
    formSource: 'Tableau page — inline form',
    formCourse: 'Tableau',
    formIdPrefix: 'tableau',
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
    title: 'Tableau Course',
    titleAccent: 'Curriculum',
    description:
      'Learn Tableau through a structured curriculum covering Data Analytics, Excel, SQL, Tableau Desktop, Tableau Prep, data cleaning, calculations, data modeling, interactive visualizations, dashboards, advanced Tableau analytics, Tableau Cloud/Server, and real-world projects.',
    modules: tableauCurriculum,
  },

  whyIbridge: WHY_IBRIDGE,

  certificate: {
    title: 'Earn Your Tableau Data Analytics',
    titleAccent: 'Certificate',
    description:
      'Receive an iBridge360 course completion certificate validating your practical learning across Tableau Desktop, Tableau Prep, SQL, Excel, data visualization, calculated fields, LOD expressions, dashboards, data storytelling, and Business Intelligence.',
    descriptionSecondary: '',
    image: '/wp-content/uploads/2026/07/data-engineering-certificate.png',
    imageAlt: 'Sample Tableau Data Analytics Certificate of Completion from iBridge360',
  },

  projects: {
    title: 'Build Real-World Tableau',
    titleAccent: 'Dashboards',
    description:
      'A visual look at the dashboards you will build — project, dataset, technologies, and the business insights you surface.',
    projects: tableauProjects,
  },

  career: {
    title: 'Career Opportunities After a Tableau Course',
    description:
      'Tableau skills combined with SQL, Excel, data analytics, data preparation, visualization, calculated fields, and business intelligence can help learners prepare for opportunities across analytics and BI.',
    roles: [
      'Tableau Developer',
      'Tableau Analyst',
      'Data Analyst',
      'Business Intelligence Analyst',
      'BI Developer',
      'Reporting Analyst',
      'Business Analyst',
      'Data Visualization Analyst',
      'MIS Analyst',
      'Junior Data Analyst',
      'Analytics Consultant',
    ],
  },

  faq: {
    title: 'Frequently Asked Questions —',
    titleAccent: 'Tableau',
    description:
      'Everything you need to know about the Tableau course — curriculum, learning experience, placements, and enrollment.',
    categories: tableauFaqCategories,
  },

  cta: {
    title: 'Turn Data Into Insights with Tableau',
    description:
      'Build practical Tableau, SQL, Excel, Tableau Prep, data visualization, calculated fields, LOD expressions, and Business Intelligence skills through hands-on training, real-world projects, instructor-led learning, and career support from iBridge360.',
    ctaLabel: 'Get Course Details',
    supportingText:
      'Speak with an iBridge360 course advisor to get details about the curriculum, upcoming batches, fees, payment options, and enrollment.',
    phoneLabel: 'Call/WhatsApp: +91 96112 60360',
    phoneHref: 'tel:+919611260360',
    whatsappHref: 'https://wa.me/919611260360',
  },

  modal: {
    programName: 'Tableau',
    title: 'Ready to Become a Tableau Analyst?',
    description:
      'Take the next step toward your analytics career. Fill out the form below, and our learning advisors will help you choose the right batch, explain the curriculum, and answer all your questions.',
    panelImage: '/wp-content/uploads/2024/03/Data-Science1-1.png',
    panelImageAlt: 'Tableau program',
  },
};

export default tableauProgram;
