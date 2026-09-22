import microsoftFabricDataEngineeringCurriculum from './microsoftFabricDataEngineeringCurriculum';
import microsoftFabricDataEngineeringFaqCategories from './microsoftFabricDataEngineeringFaqData';
import microsoftFabricDataEngineeringProjects from './microsoftFabricDataEngineeringProjects';
import { WHY_IBRIDGE } from './sharedDefaults';

/**
 * Microsoft Fabric Data Engineering program page content.
 * Same ProgramPage layout as the other career programs — swap copy here, not layout.
 */
const microsoftFabricDataEngineeringProgram = {
  seo: {
    title: 'Microsoft Fabric Data Engineering Course | Learn OneLake, Lakehouse & PySpark',
    description:
      'Learn Microsoft Fabric Data Engineering with OneLake, Lakehouse, PySpark, SQL, Data Factory, Pipelines, Dataflow Gen2, Delta Lake and Power BI.',
  },
  path: '/microsoft-fabric-data-engineering-course',
  pageId: '508',

  hero: {
    title: 'Microsoft Fabric Data Engineering Course',
    description:
      'Build job-ready Microsoft Fabric Data Engineering skills through a structured 2-month program covering Python, SQL, PySpark, Apache Spark, Microsoft Fabric, OneLake, Lakehouse, Data Factory, Pipelines, Dataflow Gen2, Delta Lake, Warehouse, data governance, and Power BI integration. Gain hands-on experience building modern data pipelines, ingesting and transforming data, implementing Lakehouse and Medallion architectures, orchestrating workflows, and developing an industry-oriented capstone project using Microsoft Fabric.',
    formSource: 'Microsoft Fabric Data Engineering page — inline form',
    formCourse: 'Microsoft Fabric Data Engineering',
    formIdPrefix: 'fabric-de',
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
    title: 'Microsoft Fabric Data Engineering Course',
    titleAccent: 'Curriculum',
    description:
      'Learn Microsoft Fabric Data Engineering through a structured curriculum covering Python, SQL, Apache Spark, PySpark, OneLake, Lakehouse, Data Factory, Dataflow Gen2, Pipelines, Delta Lake, Warehouse, data governance, orchestration, and real-world data engineering.',
    modules: microsoftFabricDataEngineeringCurriculum,
  },

  whyIbridge: WHY_IBRIDGE,

  certificate: {
    title: 'Earn Your Microsoft Fabric Data Engineering',
    titleAccent: 'Certificate',
    description:
      'Receive an iBridge360 course completion certificate that validates your practical learning across Microsoft Fabric, OneLake, Lakehouse, PySpark, SQL, Data Factory, Dataflow Gen2, Delta Lake, data pipelines, and data engineering.',
    descriptionSecondary: '',
    image: '/wp-content/uploads/2026/07/data-engineering-certificate.png',
    imageAlt: 'Sample Microsoft Fabric Data Engineering Certificate of Completion from iBridge360',
  },

  projects: {
    title: 'Build Real-World Microsoft Fabric',
    titleAccent: 'Data Engineering Projects',
    description:
      'A visual look at the pipelines you will build — project, technologies, data flow, what you ship, and the outcome.',
    projects: microsoftFabricDataEngineeringProjects,
  },

  career: {
    title: 'Career Opportunities After a Microsoft Fabric Data Engineering Course',
    description:
      'A strong foundation in Microsoft Fabric, OneLake, Lakehouse, PySpark, SQL, Data Factory, Dataflow Gen2, Delta Lake, data pipelines, and Power BI integration can help learners prepare for opportunities across Data Engineering and modern analytics.',
    roles: [
      'Microsoft Fabric Data Engineer',
      'Data Engineer',
      'Junior Data Engineer',
      'Fabric Data Engineering Developer',
      'Cloud Data Engineer',
      'Data Pipeline Engineer',
      'ETL Developer',
      'Big Data Engineer',
      'PySpark Developer',
      'Analytics Engineer',
    ],
  },

  faq: {
    title: 'Frequently Asked Questions —',
    titleAccent: 'Microsoft Fabric Data Engineering',
    description:
      'Everything you need to know about the Microsoft Fabric Data Engineering course — curriculum, learning experience, placements, and enrollment.',
    categories: microsoftFabricDataEngineeringFaqCategories,
  },

  cta: {
    title: 'Build Your Microsoft Fabric Data Engineering Career',
    description:
      'Build practical Microsoft Fabric, OneLake, Lakehouse, PySpark, SQL, Data Factory, Delta Lake, and data pipeline skills through hands-on training, real-world projects, instructor-led learning, and career support from iBridge360.',
    ctaLabel: 'Get Course Details',
    supportingText:
      'Speak with an iBridge360 course advisor to get details about the curriculum, upcoming batches, fees, payment options, and enrollment.',
    phoneLabel: 'Call/WhatsApp: +91 96112 60360',
    phoneHref: 'tel:+919611260360',
    whatsappHref: 'https://wa.me/919611260360',
  },

  modal: {
    programName: 'Microsoft Fabric Data Engineering',
    title: 'Ready to Become a Microsoft Fabric Data Engineer?',
    description:
      'Take the next step toward your data engineering career. Fill out the form below, and our learning advisors will help you choose the right batch, explain the curriculum, and answer all your questions.',
    panelImage: '/wp-content/uploads/2024/03/Data-Engineering.png',
    panelImageAlt: 'Microsoft Fabric Data Engineering program',
  },
};

export default microsoftFabricDataEngineeringProgram;
