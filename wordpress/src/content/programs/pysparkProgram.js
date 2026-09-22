import pysparkCurriculum from './pysparkCurriculum';
import pysparkFaqCategories from './pysparkFaqData';
import pysparkProjects from './pysparkProjects';
import { WHY_IBRIDGE } from './sharedDefaults';

/**
 * PySpark program page content.
 * Same ProgramPage layout as the other career programs — swap copy here, not layout.
 */
const pysparkProgram = {
  seo: {
    title: 'PySpark Course | Learn Apache Spark, Spark SQL & Big Data Processing',
    description:
      'Learn PySpark with Apache Spark, Spark SQL, DataFrames, ETL, Big Data processing, AWS, data pipelines and real-world data engineering projects.',
  },
  path: '/pyspark-course',
  pageId: '508',

  hero: {
    title: 'PySpark Course',
    description:
      'Build job-ready PySpark and Big Data skills through a structured program covering Python, Apache Spark, Spark SQL, DataFrames, RDDs, data processing, ETL pipelines, performance optimization, cloud platforms, and real-world data engineering projects. Gain hands-on experience working with large datasets, distributed processing, data pipelines, and industry-focused use cases designed to prepare you for PySpark and Data Engineering roles.',
    formSource: 'PySpark page — inline form',
    formCourse: 'PySpark',
    formIdPrefix: 'pyspark',
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
    title: 'PySpark Course',
    titleAccent: 'Curriculum',
    description:
      'Learn PySpark through a structured curriculum covering Python, Apache Spark, RDDs, DataFrames, Spark SQL, ETL, data transformation, distributed processing, performance optimization, cloud technologies, and real-world data engineering projects.',
    modules: pysparkCurriculum,
  },

  whyIbridge: WHY_IBRIDGE,

  certificate: {
    title: 'Earn Your PySpark Course',
    titleAccent: 'Certificate',
    description:
      'Receive an iBridge360 course completion certificate that validates your learning and practical skills in PySpark, Apache Spark, Spark SQL, DataFrames, ETL, Big Data processing, and data engineering.',
    descriptionSecondary: '',
    image: '/wp-content/uploads/2026/07/data-engineering-certificate.png',
    imageAlt: 'Sample PySpark Course Certificate of Completion from iBridge360',
  },

  projects: {
    title: 'Build Real-World Big Data &',
    titleAccent: 'Data Engineering Projects',
    description:
      'A visual look at the pipelines you will build — project, technologies, data source, processing, and outcome.',
    projects: pysparkProjects,
  },

  career: {
    title: 'Career Opportunities After a PySpark Course',
    description:
      'A strong foundation in Python, Apache Spark, PySpark, Spark SQL, DataFrames, ETL, Big Data processing, cloud platforms, and data pipelines can help learners prepare for entry-level and junior opportunities across data engineering and Big Data roles.',
    roles: [
      'PySpark Developer',
      'Data Engineer',
      'Junior Data Engineer',
      'Big Data Engineer',
      'Big Data Developer',
      'Spark Developer',
      'ETL Developer',
      'Data Pipeline Developer',
      'Cloud Data Engineer',
      'Data Processing Engineer',
    ],
  },

  faq: {
    title: 'Frequently Asked Questions —',
    titleAccent: 'PySpark',
    description:
      'Everything you need to know about the PySpark course — curriculum, learning experience, placements, and enrollment.',
    categories: pysparkFaqCategories,
  },

  cta: {
    title: 'Start Your PySpark & Big Data Journey',
    description:
      'Build job-ready PySpark and Data Engineering skills with practical training, real-world data pipelines, large-scale data processing projects, expert guidance, and career support from iBridge360.',
    ctaLabel: 'Get Course Details',
    supportingText:
      'Speak with an iBridge360 course advisor to get details about the curriculum, upcoming batches, fees, payment options, and enrollment.',
    phoneLabel: 'Call/WhatsApp: +91 96112 60360',
    phoneHref: 'tel:+919611260360',
    whatsappHref: 'https://wa.me/919611260360',
  },

  modal: {
    programName: 'PySpark',
    title: 'Ready to Become a PySpark Developer?',
    description:
      'Take the next step toward your data engineering career. Fill out the form below, and our learning advisors will help you choose the right batch, explain the curriculum, and answer all your questions.',
    panelImage: '/wp-content/uploads/2024/03/Data-Engineering.png',
    panelImageAlt: 'PySpark program',
  },
};

export default pysparkProgram;
