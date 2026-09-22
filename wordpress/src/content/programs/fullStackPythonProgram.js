import fullStackPythonCurriculum from './fullStackPythonCurriculum';
import fullStackPythonFaqCategories from './fullStackPythonFaqData';
import fullStackPythonProjects from './fullStackPythonProjects';
import { WHY_IBRIDGE } from './sharedDefaults';

/**
 * Python Full Stack program page content.
 * Same ProgramPage layout as Data Engineering — swap copy here, not layout.
 */
const fullStackPythonProgram = {
  seo: {
    title: 'Python Full Stack Development Course | Learn Python, Django & React',
    description:
      'Learn Python Full Stack Development with Python, Django, React, SQL, REST APIs, Git, deployment and real-world development skills.',
  },
  path: '/python-full-stack-development-course',
  pageId: '508',

  hero: {
    title: 'Python Full Stack Development Course',
    description:
      'Build job-ready Full Stack Development skills through a structured 3-month program covering HTML, CSS, JavaScript, React, Python, Django, SQL, APIs, Git, and deployment. Gain hands-on experience through real-world applications, mentor support, and a capstone project designed to prepare you for Full Stack Development roles.',
    formSource: 'Python Full Stack page — inline form',
    formCourse: 'Python Full Stack Development',
    formIdPrefix: 'python-fs',
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
    title: 'Python Full Stack Development Course',
    titleAccent: 'Curriculum',
    description:
      'Learn Python Full Stack Development through a structured curriculum covering frontend development, Python programming, databases, backend development, APIs, deployment, and real-world application development.',
    modules: fullStackPythonCurriculum,
  },

  whyIbridge: WHY_IBRIDGE,

  certificate: {
    title: 'Earn Your Python Full Stack Development',
    titleAccent: 'Certificate',
    description:
      'Receive an iBridge360 course completion certificate that validates your learning and practical skills in Python Full Stack Development.',
    descriptionSecondary: '',
    image: '/wp-content/uploads/2026/07/data-engineering-certificate.png',
    imageAlt: 'Sample Python Full Stack Development Certificate of Completion from iBridge360',
  },

  projects: {
    title: 'Build Real-World Full Stack',
    titleAccent: 'Projects',
    description:
      'A visual look at the applications you will build — project, technologies, and what you ship.',
    projects: fullStackPythonProjects,
  },

  career: {
    title: 'Career Opportunities After a Python Full Stack Development Course',
    description:
      'A strong foundation in frontend development, JavaScript, React, backend development, databases, APIs, and deployment can help learners prepare for entry-level and junior opportunities across software and web development.',
    roles: [
      'Junior Full Stack Developer',
      'Full Stack Developer',
      'Frontend Developer',
      'React.js Developer',
      'Backend Developer',
      'Node.js Developer',
      'Web Developer',
      'Software Developer',
    ],
  },

  faq: {
    title: 'Frequently Asked Questions —',
    titleAccent: 'Python Full Stack Development',
    description:
      'Everything you need to know about the Python Full Stack Development course — curriculum, learning experience, placements, and enrollment.',
    categories: fullStackPythonFaqCategories,
  },

  cta: {
    title: 'Start Your Python Full Stack Development Journey',
    description:
      'Build job-ready full stack development skills with practical training, real-world projects, expert guidance, and career support from iBridge360.',
    ctaLabel: 'Get Course Details',
    supportingText:
      'Speak with an iBridge360 course advisor to get details about the curriculum, upcoming batches, fees, payment options, and enrollment.',
    phoneLabel: 'Call/WhatsApp: +91 96112 60360',
    phoneHref: 'tel:+919611260360',
    whatsappHref: 'https://wa.me/919611260360',
  },

  modal: {
    programName: 'Python Full Stack Development',
    title: 'Ready to Become a Python Full Stack Developer?',
    description:
      'Take the next step toward your software development career. Fill out the form below, and our learning advisors will help you choose the right batch, explain the curriculum, and answer all your questions.',
    panelImage: '/wp-content/uploads/2024/03/Full-Stack-Development-1.png',
    panelImageAlt: 'Python Full Stack Development program',
  },
};

export default fullStackPythonProgram;
