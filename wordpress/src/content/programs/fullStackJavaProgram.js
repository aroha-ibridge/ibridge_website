import fullStackJavaCurriculum from './fullStackJavaCurriculum';
import fullStackJavaFaqCategories from './fullStackJavaFaqData';
import fullStackJavaProjects from './fullStackJavaProjects';
import { WHY_IBRIDGE } from './sharedDefaults';

/**
 * Java Full Stack program page content.
 * Same ProgramPage layout as Python Full Stack — swap copy here, not layout.
 */
const fullStackJavaProgram = {
  seo: {
    title: 'Java Full Stack Development Course | Learn Java, Spring Boot & React',
    description:
      'Learn Java Full Stack Development with Java, Spring Boot, React, SQL, REST APIs, Git, deployment and real-world development skills.',
  },
  path: '/java-full-stack-development-course',
  pageId: '508',

  hero: {
    title: 'Java Full Stack Development Course',
    description:
      'Build job-ready Java Full Stack Development skills through a structured 3-month program covering HTML, CSS, JavaScript, React, Core Java, Spring Boot, SQL, REST APIs, Git, and deployment. Gain hands-on experience through real-world applications, mentor support, and a capstone project designed to prepare you for Java Full Stack Development roles.',
    formSource: 'Java Full Stack page — inline form',
    formCourse: 'Java Full Stack Development',
    formIdPrefix: 'java-fs',
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
    title: 'Java Full Stack Development Course',
    titleAccent: 'Curriculum',
    description:
      'Learn Java Full Stack Development through a structured curriculum covering frontend development, Java programming, databases, backend development, APIs, Spring Boot, deployment, and real-world application development.',
    modules: fullStackJavaCurriculum,
  },

  whyIbridge: WHY_IBRIDGE,

  certificate: {
    title: 'Earn Your Java Full Stack Development',
    titleAccent: 'Certificate',
    description:
      'Receive an iBridge360 course completion certificate that validates your learning and practical skills in Java Full Stack Development.',
    descriptionSecondary: '',
    image: '/wp-content/uploads/2026/07/data-engineering-certificate.png',
    imageAlt: 'Sample Java Full Stack Development Certificate of Completion from iBridge360',
  },

  projects: {
    title: 'Build Real-World Full Stack',
    titleAccent: 'Projects',
    description:
      'A visual look at the applications you will build — project, technologies, and what you ship.',
    projects: fullStackJavaProjects,
  },

  career: {
    title: 'Career Opportunities After a Java Full Stack Development Course',
    description:
      'A strong foundation in frontend development, Java, React, Spring Boot, backend development, databases, APIs, and deployment can help learners prepare for entry-level and junior opportunities across software and web development.',
    roles: [
      'Java Full Stack Developer',
      'Full Stack Developer',
      'Java Developer',
      'Spring Boot Developer',
      'Backend Developer',
      'Frontend Developer',
      'React.js Developer',
      'Web Developer',
      'Software Developer',
      'Junior Java Developer',
    ],
  },

  faq: {
    title: 'Frequently Asked Questions —',
    titleAccent: 'Java Full Stack Development',
    description:
      'Everything you need to know about the Java Full Stack Development course — curriculum, learning experience, placements, and enrollment.',
    categories: fullStackJavaFaqCategories,
  },

  cta: {
    title: 'Start Your Java Full Stack Development Journey',
    description:
      'Build job-ready Java Full Stack Development skills with practical training, real-world projects, expert guidance, and career support from iBridge360.',
    ctaLabel: 'Get Course Details',
    supportingText:
      'Speak with an iBridge360 course advisor to get details about the curriculum, upcoming batches, fees, payment options, and enrollment.',
    phoneLabel: 'Call/WhatsApp: +91 96112 60360',
    phoneHref: 'tel:+919611260360',
    whatsappHref: 'https://wa.me/919611260360',
  },

  modal: {
    programName: 'Java Full Stack Development',
    title: 'Ready to Become a Java Full Stack Developer?',
    description:
      'Take the next step toward your software development career. Fill out the form below, and our learning advisors will help you choose the right batch, explain the curriculum, and answer all your questions.',
    panelImage: '/wp-content/uploads/2024/03/Full-Stack-Development-1.png',
    panelImageAlt: 'Java Full Stack Development program',
  },
};

export default fullStackJavaProgram;
