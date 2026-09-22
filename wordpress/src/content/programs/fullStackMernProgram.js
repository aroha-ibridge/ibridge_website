import fullStackMernCurriculum from './fullStackMernCurriculum';
import fullStackMernFaqCategories from './fullStackMernFaqData';
import fullStackMernProjects from './fullStackMernProjects';
import { WHY_IBRIDGE } from './sharedDefaults';

/**
 * MERN Full Stack program page content.
 * Same ProgramPage layout as Python / Java Full Stack — swap copy here, not layout.
 */
const fullStackMernProgram = {
  seo: {
    title: 'MERN Full Stack Development Course | Learn MongoDB, Express, React & Node.js',
    description:
      'Learn MERN Full Stack Development with MongoDB, Express.js, React, Node.js, JavaScript, REST APIs, Git, deployment and real-world development skills.',
  },
  path: '/mern-full-stack-development-course',
  pageId: '508',

  hero: {
    title: 'MERN Full Stack Development Course',
    description:
      'Build job-ready MERN Full Stack Development skills through a structured 3-month program covering HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, REST APIs, Git, and deployment. Gain hands-on experience through real-world applications, mentor support, and a capstone project designed to prepare you for MERN Full Stack Development roles.',
    formSource: 'MERN Full Stack page — inline form',
    formCourse: 'MERN Full Stack Development',
    formIdPrefix: 'mern',
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
    title: 'MERN Full Stack Development Course',
    titleAccent: 'Curriculum',
    description:
      'Learn MERN Full Stack Development through a structured curriculum covering frontend development, JavaScript programming, React, Node.js, Express.js, MongoDB, APIs, authentication, deployment, and real-world application development.',
    modules: fullStackMernCurriculum,
  },

  whyIbridge: WHY_IBRIDGE,

  certificate: {
    title: 'Earn Your MERN Full Stack Development',
    titleAccent: 'Certificate',
    description:
      'Receive an iBridge360 course completion certificate that validates your learning and practical skills in MERN Full Stack Development.',
    descriptionSecondary: '',
    image: '/wp-content/uploads/2026/07/data-engineering-certificate.png',
    imageAlt: 'Sample MERN Full Stack Development Certificate of Completion from iBridge360',
  },

  projects: {
    title: 'Build Real-World MERN Full Stack',
    titleAccent: 'Projects',
    description:
      'A visual look at the applications you will build — project, technologies, and what you ship.',
    projects: fullStackMernProjects,
  },

  career: {
    title: 'Career Opportunities After a MERN Full Stack Development Course',
    description:
      'A strong foundation in HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, REST APIs, and deployment can help learners prepare for entry-level and junior opportunities across software and web development.',
    roles: [
      'MERN Stack Developer',
      'MERN Full Stack Developer',
      'Full Stack Developer',
      'Frontend Developer',
      'React.js Developer',
      'Node.js Developer',
      'Backend Developer',
      'JavaScript Developer',
      'Web Developer',
      'Software Developer',
    ],
  },

  faq: {
    title: 'Frequently Asked Questions —',
    titleAccent: 'MERN Full Stack Development',
    description:
      'Everything you need to know about the MERN Full Stack Development course — curriculum, learning experience, placements, and enrollment.',
    categories: fullStackMernFaqCategories,
  },

  cta: {
    title: 'Start Your MERN Full Stack Development Journey',
    description:
      'Build job-ready MERN Full Stack Development skills with practical training, real-world projects, expert guidance, and career support from iBridge360.',
    ctaLabel: 'Get Course Details',
    supportingText:
      'Speak with an iBridge360 course advisor to get details about the curriculum, upcoming batches, fees, payment options, and enrollment.',
    phoneLabel: 'Call/WhatsApp: +91 96112 60360',
    phoneHref: 'tel:+919611260360',
    whatsappHref: 'https://wa.me/919611260360',
  },

  modal: {
    programName: 'MERN Full Stack Development',
    title: 'Ready to Become a MERN Full Stack Developer?',
    description:
      'Take the next step toward your software development career. Fill out the form below, and our learning advisors will help you choose the right batch, explain the curriculum, and answer all your questions.',
    panelImage: '/wp-content/uploads/2024/03/Full-Stack-Development-1.png',
    panelImageAlt: 'MERN Full Stack Development program',
  },
};

export default fullStackMernProgram;
