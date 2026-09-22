import databricksDataEngineeringCurriculum from './databricksDataEngineeringCurriculum';
import databricksDataEngineeringFaqCategories from './databricksDataEngineeringFaqData';
import databricksDataEngineeringProjects from './databricksDataEngineeringProjects';
import { WHY_IBRIDGE } from './sharedDefaults';

/**
 * Databricks Data Engineering program page content.
 * Same ProgramPage layout as the other career programs — swap copy here, not layout.
 */
const databricksDataEngineeringProgram = {
  seo: {
    title: 'Databricks Data Engineering Course | Learn PySpark, Delta Lake & Lakehouse',
    description:
      'Learn Databricks Data Engineering with PySpark, SQL, Apache Spark, Delta Lake, Lakehouse Architecture, Unity Catalog, ETL pipelines and cloud integration.',
  },
  path: '/databricks-data-engineering-course',
  pageId: '508',

  hero: {
    title: 'Databricks Data Engineering & Lakehouse Program',
    description:
      'Build practical Data Engineering and Databricks skills through an intensive 2-month program covering Python, SQL, Apache Spark, PySpark, Databricks, Delta Lake, Lakehouse Architecture, ETL pipelines, Unity Catalog, workflows, and cloud integration. Gain hands-on experience building and optimizing modern data pipelines, working with large datasets, implementing Bronze → Silver → Gold architectures, and developing an industry-oriented capstone project using Databricks and modern Lakehouse technologies.',
    formSource: 'Databricks Data Engineering page — inline form',
    formCourse: 'Databricks Data Engineering',
    formIdPrefix: 'databricks-de',
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
    title: 'Databricks Data Engineering Course',
    titleAccent: 'Curriculum',
    description:
      'Learn Databricks Data Engineering and Lakehouse technologies through a structured 8-week curriculum covering Python, SQL, Apache Spark, PySpark, Databricks, Delta Lake, Lakehouse Architecture, ETL pipelines, Unity Catalog, cloud integration, and industry-oriented data engineering.',
    modules: databricksDataEngineeringCurriculum,
  },

  whyIbridge: WHY_IBRIDGE,

  certificate: {
    title: 'Earn Your Databricks Data Engineering',
    titleAccent: 'Certificate',
    description:
      'Receive an iBridge360 course completion certificate that validates your practical learning across Databricks, Apache Spark, PySpark, SQL, Delta Lake, Lakehouse Architecture, ETL pipelines, Unity Catalog, and cloud-based data engineering.',
    descriptionSecondary: '',
    image: '/wp-content/uploads/2026/07/data-engineering-certificate.png',
    imageAlt: 'Sample Databricks Data Engineering Certificate of Completion from iBridge360',
  },

  projects: {
    title: 'Build Real-World Data Engineering',
    titleAccent: 'Pipelines',
    description:
      'A visual look at the pipelines you will build — project, technologies, data flow, what you ship, and the outcome.',
    projects: databricksDataEngineeringProjects,
  },

  career: {
    title: 'Career Opportunities After a Databricks Data Engineering Course',
    description:
      'A strong foundation in Databricks, Apache Spark, PySpark, SQL, Python, Delta Lake, Lakehouse Architecture, ETL pipelines, Unity Catalog, and cloud integration can help learners prepare for opportunities across Data Engineering and Big Data.',
    roles: [
      'Data Engineer',
      'Junior Data Engineer',
      'Databricks Data Engineer',
      'Data Engineering Developer',
      'Big Data Engineer',
      'PySpark Developer',
      'Spark Developer',
      'ETL Developer',
      'Cloud Data Engineer',
      'Data Pipeline Engineer',
    ],
  },

  faq: {
    title: 'Frequently Asked Questions —',
    titleAccent: 'Databricks Data Engineering',
    description:
      'Everything you need to know about the Databricks Data Engineering course — curriculum, learning experience, placements, and enrollment.',
    categories: databricksDataEngineeringFaqCategories,
  },

  cta: {
    title: 'Build Your Databricks Data Engineering Career',
    description:
      'Build practical Databricks, PySpark, SQL, Delta Lake, and Lakehouse Architecture skills through hands-on training, real-world data engineering projects, instructor-led learning, and career support from iBridge360.',
    ctaLabel: 'Get Course Details',
    supportingText:
      'Speak with an iBridge360 course advisor to get details about the curriculum, upcoming batches, fees, payment options, and enrollment.',
    phoneLabel: 'Call/WhatsApp: +91 96112 60360',
    phoneHref: 'tel:+919611260360',
    whatsappHref: 'https://wa.me/919611260360',
  },

  modal: {
    programName: 'Databricks Data Engineering',
    title: 'Ready to Become a Databricks Data Engineer?',
    description:
      'Take the next step toward your data engineering career. Fill out the form below, and our learning advisors will help you choose the right batch, explain the curriculum, and answer all your questions.',
    panelImage: '/wp-content/uploads/2024/03/Data-Engineering.png',
    panelImageAlt: 'Databricks Data Engineering program',
  },
};

export default databricksDataEngineeringProgram;
