import masterDataEngineeringCurriculum from './masterDataEngineeringCurriculum';
import masterDataEngineeringFaqCategories from './masterDataEngineeringFaqData';
import masterDataEngineeringProjects from './masterDataEngineeringProjects';
import { WHY_IBRIDGE } from './sharedDefaults';

/**
 * Master Data Engineering Program page content.
 * URL: /courses/master-data-engineering-program-bangalore
 */
const masterDataEngineeringProgram = {
  seo: {
    title: 'Master Data Engineering Program in Bangalore | iBridge360',
    description:
      '6-month Master Data Engineering Program in Bangalore with weekend batches. Learn SQL, Python, PySpark, Databricks and cloud with real projects. Enquire now.',
  },
  path: '/courses/master-data-engineering-program-bangalore',
  pageId: '508',

  hero: {
    title: 'Master Data Engineering Program in Bangalore',
    description:
      'Build job-ready Data Engineering skills through a structured 6-month program covering SQL, Python, AWS Cloud, Apache Spark, Databricks, Snowflake, dbt, Airflow and applied AI. Gain hands-on experience through practical projects, 1:1 mentoring and an end-to-end capstone project designed to prepare you for Data Engineering roles.',
    formSource: 'Master Data Engineering Program page — inline form',
    formCourse: 'Master Data Engineering Program',
    formIdPrefix: 'master-de',
    duration: '6 Months',
    useGradientTitle: false,
    brochureUrl: '/downloads/master-data-engineering-brochure.pdf',
    brochureLabel: 'Download Brochure',
    statBoxes: [
      {
        title: 'Duration',
        description: '6 Months',
        icon: '/wp-content/uploads/2024/04/Group-165.png',
      },
      {
        title: 'Batches',
        description: 'Weekday & Weekend',
        icon: '/wp-content/uploads/2024/04/Group-164.png',
      },
      {
        title: 'Training',
        description: 'Online/Offline',
        icon: '/wp-content/uploads/2024/04/Group-166.png',
      },
    ],
  },

  trust: {
    title: 'Trusted by Learners and Hiring Partners Across the Industry',
    description:
      'Our growing community of learners and industry connections reflects our commitment to practical, career-focused training. With 15K+ learners and 115+ hiring partners, iBridge360 helps bridge the gap between technical learning and real-world career opportunities. The program is run in association with Startup India, NASSCOM and Skill India.',
    stats: [
      { value: '15K+', label: 'Learners' },
      { value: '115+', label: 'Hiring Partners' },
      { value: '6 Months', label: 'Program Length' },
    ],
  },

  curriculum: {
    title: 'Master Data Engineering Program',
    titleAccent: 'Curriculum',
    description:
      'A 6-month learning path in five phases, from data foundations to modern data platforms and applied AI.',
    syllabusUrl: '/downloads/master-data-engineering-brochure.pdf',
    syllabusLabel: 'Download Full Curriculum & Brochure',
    modules: masterDataEngineeringCurriculum,
  },

  whyIbridge: {
    title: 'Why Choose iBridge360?',
    titleAccent: 'We Build Your Career',
    description:
      'We go beyond learning, we build your career. Practical, hands-on learning with experienced technical mentors, project-based portfolio building, and complete LMS and placement assistance.',
    pillars: [
      {
        title: 'Industry-Aligned Curriculum',
        description:
          'A 6-month curriculum that moves from data foundations to modern data platforms and applied AI, built around the tools used on real data teams.',
      },
      {
        title: 'Practical, Hands-On Learning',
        description:
          'Learn by doing with SQL, Python, AWS, Spark, Databricks, Snowflake, dbt and Airflow, with a practical focus in every module.',
      },
      {
        title: 'Real-World Application Development',
        description:
          'Build production-style data pipelines and add AI use cases such as LLMs and RAG to real data problems.',
      },
      {
        title: 'Experienced Technical Mentors',
        description:
          'Get personalized guidance, regular feedback and progress tracking from mentors throughout the program.',
      },
      {
        title: 'Project-Based Learning',
        description:
          'Build a strong portfolio with an end-to-end capstone project that shows your skills and problem-solving ability.',
      },
      {
        title: 'LMS Access & Placement Assistance',
        description:
          'Access learning materials and session recordings on LMS. Dedicated Job Readiness Module covers ATS-friendly resume, mock interviews, and LinkedIn optimization.',
      },
    ],
  },

  certificate: {
    title: 'Earn Your Master Data Engineering',
    titleAccent: 'Certificate',
    description:
      'Receive an official iBridge360 Certificate of Completion for the 6-Month Master Data Engineering Program validating your expertise in modern data pipelines, cloud technologies, databases, Spark, Databricks, Snowflake, and AI.',
    descriptionSecondary: '',
    image: '/wp-content/uploads/2026/07/data-engineering-certificate.png',
    imageAlt: 'Master Data Engineering Certificate of Completion from iBridge360',
  },

  projects: {
    title: 'Hands-On Learning and',
    titleAccent: 'Capstone Project',
    description:
      'Apply your Data Engineering skills to practical business scenarios across data ingestion, transformation, warehousing, orchestration, analytics and AI.',
    projects: masterDataEngineeringProjects,
  },

  career: {
    title: 'Career Opportunities After the Master Data Engineering Program',
    description:
      'A strong foundation in SQL, Python, cloud, big data processing, modern data platforms and orchestration can prepare you for several data roles.',
    roles: [
      'Data Engineer',
      'Big Data Engineer',
      'ETL Developer',
      'Data Pipeline Developer',
      'Analytics Engineer',
      'Cloud Data Engineer (AWS)',
      'Data Warehouse Engineer',
      'Databricks Engineer',
      'Snowflake Engineer',
    ],
  },

  faq: {
    title: 'Frequently Asked',
    titleAccent: 'Questions',
    description:
      'Everything you need to know about the Master Data Engineering Program: curriculum, learning experience, placements and enrollment.',
    categories: masterDataEngineeringFaqCategories,
  },

  cta: {
    title: 'Start Your Data Engineering Career',
    description:
      'Build job-ready Data Engineering skills with practical training, a capstone project, personalized mentoring and career support from iBridge360.',
    ctaLabel: 'Get Course Details',
    brochureUrl: '/downloads/master-data-engineering-brochure.pdf',
    brochureLabel: 'Download Brochure',
    supportingText:
      'Speak with an iBridge360 course advisor to get details about the Master Data Engineering curriculum, upcoming batches, payment options and enrollment.',
    phoneLabel: 'Call/WhatsApp: +91 96112 60360',
    phoneHref: 'tel:+919611260360',
    whatsappHref: 'https://wa.me/919611260360',
  },

  modal: {
    programName: 'Master Data Engineering Program',
    title: 'Ready to Become a Master Data Engineer?',
    description:
      'Enroll in our comprehensive 6-month Master Data Engineering Program. Fill out your details below and our senior advisor will connect with you.',
  },
};

export default masterDataEngineeringProgram;
