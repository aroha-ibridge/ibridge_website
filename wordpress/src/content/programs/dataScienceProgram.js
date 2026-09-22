import { SHARED_CERTIFICATE, SHARED_HIGHLIGHTS } from './sharedDefaults';
import dataScienceCurriculum from './dataScienceCurriculum';

/**
 * Data Science program page content.
 * Same ProgramPage design as Data Engineering / MERN.
 * Update copy, modules, projects, and FAQ here as needed.
 * Certificate image is program-specific (see certificate.image).
 */
const dataScienceProgram = {
  seo: {
    title: 'Data Science Program - iBridge360',
    description:
      "Become a job-ready Data Scientist with iBridge360's 6-month hands-on program covering Python, statistics, ML, visualization, and real-world projects.",
  },
  path: '/courses/data-science',
  pageId: '508',

  hero: {
    title: 'Data Science Program',
    description:
      'Master Data Science with a 6-month industry-focused certification program covering Python, SQL, statistics, machine learning, NLP, data visualization, Power BI, and MLOps. Gain practical experience through hands-on labs, real-world analytics projects, expert-led training, and an industry capstone to prepare for high-demand Data Scientist and ML Analyst roles.',
    formSource: 'Data Science page — inline form',
    formCourse: 'Data Science',
    formIdPrefix: 'ds',
    duration: '6 Months',
  },

  curriculum: {
    eyebrow: 'Course Overview',
    title: 'Industry-Aligned Data Science',
    titleAccent: 'Curriculum',
    description:
      'Master the complete Data Science workflow — from Python and SQL to statistics, machine learning, visualization, and deployment. Our curriculum mirrors what leading bootcamps and employers expect: hands-on projects at every stage, Power BI dashboards, scikit-learn models, NLP, and a portfolio-ready capstone.',
    modules: dataScienceCurriculum,
  },

  keyHighlights: {
    subtitle:
      'From mentorship to real-world projects — every pillar of this program is designed to turn you into a confident, job-ready Data Scientist.',
    items: SHARED_HIGHLIGHTS,
  },

  certificate: {
    title: 'Data Science',
    titleAccent: 'Certification',
    description:
      'Earn an official Certificate of Completion for a comprehensive Data Science Program covering analytics, machine learning, visualization, and applied projects.',
    descriptionSecondary: SHARED_CERTIFICATE.descriptionSecondary,
    image: '/wp-content/uploads/2026/07/data-science-certificate.png',
    imageAlt: 'Data Science Program Certificate of Completion from iBridge360',
  },

  projects: {
    description:
      'Build portfolio-ready analytics and ML projects that mirror real business problems — from exploration to modeling and storytelling.',
    projects: [
      {
        title: 'Customer Churn Prediction',
        description: 'Predict attrition risk and recommend retention actions.',
        image: '/wp-content/uploads/2024/04/leave.gif',
        tags: ['Python', 'ML', 'Pandas'],
      },
      {
        title: 'Sales Forecasting',
        description: 'Forecast demand and visualize trends for planning teams.',
        image: '/wp-content/uploads/2024/04/book.gif',
        tags: ['Statistics', 'Forecasting', 'Viz'],
      },
      {
        title: 'Sentiment Analyzer',
        description: 'Classify text feedback and surface insight themes.',
        image: '/wp-content/uploads/2024/04/contact.gif',
        tags: ['NLP', 'Python', 'ML'],
      },
      {
        title: 'Healthcare Insights',
        description: 'Explore clinical KPIs and build decision-ready dashboards.',
        image: '/wp-content/uploads/2024/04/hospital.gif',
        tags: ['EDA', 'Visualization', 'SQL'],
      },
      {
        title: 'Recommendation Engine',
        description: 'Build a simple recommender for products or content.',
        image: '/wp-content/uploads/2024/04/inventory.gif',
        tags: ['ML', 'Python', 'Capstone'],
      },
    ],
  },

  tools: {
    title: 'Programming Languages &',
    titleAccent: 'Tools Covered',
    subtitle:
      'Master the Data Science toolkit — Python, SQL, scikit-learn, Power BI, statistics, and MLOps workflows used by analytics and ML teams.',
    tools: [
      { name: 'Python', image: '/wp-content/uploads/2026/07/python-logo.svg' },
      { name: 'SQL Server', image: '/wp-content/uploads/2026/07/sql-server-logo.svg' },
      { name: 'Scikit-learn', image: '/wp-content/uploads/2026/07/tensorflow-logo.svg' },
      { name: 'Power BI', image: '/wp-content/uploads/2024/03/power-bi-vector-logo-small.png' },
      { name: 'Pandas', image: '/wp-content/uploads/2026/07/pandas-logo.svg' },
    ],
  },

  faq: {
    description:
      'Everything you need to know about the Data Science program — curriculum, mentorship, placements, and enrollment.',
    categories: [
      {
        id: 'general',
        title: 'General Questions',
        items: [
          {
            id: 'what-is-program',
            question: 'What is the Data Science Program?',
            answer:
              'A practical program that teaches you to analyze data, build machine learning models, and communicate insights using industry tools and real projects.',
          },
          {
            id: 'who-is-for',
            question: 'Who is this program for?',
            answer: 'This program is ideal for:',
            bullets: [
              'Freshers and graduates',
              'Analysts moving into Data Science',
              'Professionals transitioning into ML / analytics roles',
            ],
          },
          {
            id: 'prior-coding',
            question: 'Do I need prior coding experience?',
            answer:
              'Basic programming knowledge is helpful but not mandatory. We begin with foundations before advanced modeling topics.',
          },
        ],
      },
      {
        id: 'curriculum',
        title: 'Program & Curriculum',
        items: [
          {
            id: 'duration',
            question: 'What is the program duration?',
            answer: 'The program is designed as a 6-month, industry-ready certification path.',
          },
          {
            id: 'projects',
            question: 'Will I work on real projects?',
            answer:
              'Yes. You will complete multiple hands-on projects culminating in a Capstone you can showcase to employers.',
          },
        ],
      },
      {
        id: 'outcomes',
        title: 'Placements & Outcomes',
        items: [
          {
            id: 'job-support',
            question: 'Do you provide job assistance?',
            answer:
              'Yes. Learners receive career guidance including resume reviews, interview preparation, and placement support.',
          },
        ],
      },
    ],
  },

  cta: {
    title: 'Ready to Start Your Data Science Journey?',
    description:
      'Join the next batch and build job-ready skills with hands-on projects, expert mentorship, and an industry-recognized certification.',
  },

  sticky: {
    title: 'Data Science Program',
    subtitle: '6-month industry-ready certification',
  },

  modal: {
    programName: 'Data Science',
    title: 'Ready to Become a Data Scientist?',
    description:
      'Take the next step toward your analytics career. Fill out the form below, and our learning advisors will help you choose the right batch, walk you through the curriculum, and answer all your questions.',
    panelImage: '/wp-content/uploads/2024/03/Data-Science1-1.png',
    panelImageAlt: 'Data Science program',
  },
};

export default dataScienceProgram;
