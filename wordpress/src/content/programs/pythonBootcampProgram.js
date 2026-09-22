import pythonBootcampCurriculum from './pythonBootcampCurriculum';
import pythonBootcampFaqCategories from './pythonBootcampFaqData';
import pythonBootcampProjects from './pythonBootcampProjects';
import { WHY_IBRIDGE } from './sharedDefaults';

/**
 * Python Bootcamp program page content.
 * Same ProgramPage layout as the other career programs — swap copy here, not layout.
 */
const pythonBootcampProgram = {
  seo: {
    title: 'Python Bootcamp | Learn Python Programming, Automation & Data Analytics',
    description:
      'Master Python through hands-on training in programming, OOP, data structures, automation, APIs, SQL, data analytics and real-world projects.',
  },
  path: '/python-bootcamp',
  pageId: '508',

  hero: {
    title: 'Python Bootcamp',
    description:
      'Build strong, job-ready Python programming skills through an intensive, hands-on bootcamp covering Python fundamentals, data structures, functions, object-oriented programming, file handling, exception handling, modules, APIs, SQL, automation and real-world projects. Learn how to write clean Python programs, solve programming problems, work with databases and APIs, automate repetitive tasks and build practical applications using Python.',
    formSource: 'Python Bootcamp page — inline form',
    formCourse: 'Python Bootcamp',
    formIdPrefix: 'pyboot',
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
    title: 'Python Bootcamp',
    titleAccent: 'Curriculum',
    description:
      'Learn Python through a structured curriculum progressing from programming fundamentals to advanced Python concepts, object-oriented programming, data handling, APIs, databases, automation and real-world projects.',
    modules: pythonBootcampCurriculum,
  },

  whyIbridge: WHY_IBRIDGE,

  certificate: {
    title: 'Earn Your Python Bootcamp',
    titleAccent: 'Certificate',
    description:
      'Receive an iBridge360 course completion certificate validating your practical learning across Python programming, data structures, functions, OOP, file handling, APIs, SQL integration, automation, data analytics and real-world Python projects.',
    descriptionSecondary: '',
    image: '/wp-content/uploads/2026/07/data-engineering-certificate.png',
    imageAlt: 'Sample Python Bootcamp Certificate of Completion from iBridge360',
  },

  projects: {
    title: 'Build Real-World Applications',
    titleAccent: 'Using Python',
    description:
      'A visual look at the projects you will build — project, dataset, technologies, solution, and business insights.',
    projects: pythonBootcampProjects,
  },

  career: {
    title: 'Career Opportunities After Python Bootcamp',
    description:
      'Python is widely used across software development, data analytics, automation, data engineering, AI/ML and backend development.',
    roles: [
      'Python Developer',
      'Junior Python Developer',
      'Data Analyst',
      'Automation Engineer',
      'Backend Developer',
      'Data Engineer',
      'Software Developer',
      'Business Intelligence Analyst',
      'Data Science Associate',
      'Python Automation Developer',
      'Junior Data Scientist',
    ],
  },

  faq: {
    title: 'Frequently Asked Questions —',
    titleAccent: 'Python Bootcamp',
    description:
      'Everything you need to know about the Python Bootcamp — curriculum, learning experience, placements, and enrollment.',
    categories: pythonBootcampFaqCategories,
  },

  cta: {
    title: 'Master Python. Build Real-World Skills.',
    description:
      'Build practical Python programming, data structures, OOP, SQL, APIs, automation and data analytics skills through intensive hands-on training, coding challenges, real-world projects, interview preparation and career support from iBridge360.',
    ctaLabel: 'Get Bootcamp Details',
    supportingText:
      'Speak with an iBridge360 course advisor to get details about the curriculum, upcoming batches, fees, payment options and enrollment.',
    phoneLabel: 'Call/WhatsApp: +91 96112 60360',
    phoneHref: 'tel:+919611260360',
    whatsappHref: 'https://wa.me/919611260360',
  },

  modal: {
    programName: 'Python Bootcamp',
    title: 'Ready to Master Python?',
    description:
      'Take the next step toward your programming career. Fill out the form below, and our learning advisors will help you choose the right batch, explain the curriculum, and answer all your questions.',
    panelImage: '/wp-content/uploads/2024/03/Data-Science1-1.png',
    panelImageAlt: 'Python Bootcamp program',
  },
};

export default pythonBootcampProgram;
