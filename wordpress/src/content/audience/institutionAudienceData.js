import { SHARED_TECHNOLOGIES } from './sharedAudienceContent';

const institutionAudienceData = {
  seo: {
    title: 'Institution - iBridge360',
    description:
      'iBridge360 supports institutions with NAAC-aligned training, faculty development, and industry-ready learning to drive academic excellence and innovation.',
  },
  hero: {
    eyebrow: 'Institutions',
    title: 'Your Journey with us for',
    titleAccent: 'Institutions',
    subtitle:
      'Partner with iBridge360 for NAAC success. We help institutions bridge the gap between education and industry through tailored faculty development and experiential learning for students.',
    image: '/wp-content/uploads/2026/07/institution-hero-building.jpg',
    imageAlt: 'Modern college campus building',
    imageClassName:
      'w-full max-w-2xl aspect-[1400/917] rounded-2xl border border-brand/10 shadow-card object-cover',
    secondaryCtaLabel: 'Customize Your Program',
  },
  trustedBy: {
    eyebrow: 'Trusted By',
    title: 'Education',
    titleAccent: 'Partners',
    stats: [
      { value: '50+', label: 'Institution Programs' },
      { value: '100+', label: 'Faculty Workshops' },
      { value: '10+', label: 'Partner Institutions' },
      { value: 'NAAC', label: 'Aligned Solutions' },
    ],
  },
  whyMatters: {
    eyebrow: 'Why It Matters',
    title: 'Elevate Academics.',
    titleAccent: 'Meet Industry Standards.',
    points: [
      {
        title: 'NAAC Alignment',
        text: 'Programs designed to support accreditation benchmarks and quality enhancement.',
      },
      {
        title: 'Industry Gap',
        text: 'Bridge the divide between classroom learning and workplace expectations.',
      },
      {
        title: 'Faculty Development',
        text: 'Upskill educators with contemporary tools, methods, and industry practices.',
      },
      {
        title: 'Student Employability',
        text: 'Equip students with practical skills employers value from day one.',
      },
      {
        title: 'Research Culture',
        text: 'Foster innovation through experiential learning and expert collaborations.',
      },
      {
        title: 'Institutional Growth',
        text: 'Strengthen your brand with industry partnerships and outcome-driven programs.',
      },
    ],
    flow: ['Assess Needs', 'Design Programs', 'Deliver Training', 'Measure Outcomes'],
  },
  whyChoose: {
    eyebrow: 'Why iBridge360',
    title: 'Why Choose',
    titleAccent: 'iBridge360',
    items: [
      {
        title: 'NAAC-Aligned Programs',
        text: 'Solutions mapped to quality benchmarks and institutional goals.',
      },
      {
        title: 'Expert Talks',
        text: 'Industry leaders share insights that inspire students and faculty.',
      },
      {
        title: 'Faculty Development',
        text: 'Structured FDPs to modernize teaching and technical depth.',
      },
      {
        title: 'Experiential Learning',
        text: 'Hands-on platforms and projects that build real-world competence.',
      },
      {
        title: 'Flexible Formats',
        text: 'Weekly, monthly, online, and on-campus delivery options.',
      },
      {
        title: 'End-to-End Support',
        text: 'From program design to delivery, assessment, and reporting.',
      },
    ],
  },
  programs: [
    { name: 'IT & Non-IT Programs', slug: 'institution-it-and-non-it-programs-for-institutions' },
    { name: 'Expert Talks', slug: 'institution-expert-talks' },
    { name: 'EPBL Programs', slug: 'institution-epbl' },
    { name: 'Faculty Development', slug: 'institution-faculty-development-program' },
    { name: 'Soft Skills', slug: 'institution-soft-skills-for-college-students' },
    { name: 'Content Creation', slug: 'institution-content-creation' },
    { name: 'Online & Offline Programs', slug: 'institution-online-offline-programs' },
    { name: 'Weekly & Monthly Programs', slug: 'institution-weekly-and-monthly-programs' },
    { name: 'Self Transformation', slug: 'institution-self-transformation-sessions-for-students-and-faculty' },
    { name: 'Experiential Learning Platform', slug: 'institution-experiential-learning-platform' },
  ],
  technologies: SHARED_TECHNOLOGIES,
  industries: [
    { icon: '🎓', name: 'Universities' },
    { icon: '🏫', name: 'Colleges' },
    { icon: '📚', name: 'Autonomous Institutions' },
    { icon: '🔬', name: 'Research Institutes' },
    { icon: '💼', name: 'Management Colleges' },
    { icon: '🏥', name: 'Allied Health Sciences' },
  ],
  deliveryModes: [
    { title: 'On-Campus', text: 'Instructor-led sessions delivered at your institution.' },
    { title: 'Online Live', text: 'Virtual programs with interactive labs and assessments.' },
    { title: 'Hybrid', text: 'Combine campus workshops with platform-based learning.' },
    { title: 'Weekly Programs', text: 'Short-format sessions that fit academic calendars.' },
    { title: 'Monthly Programs', text: 'Deeper skill-building over extended cohorts.' },
    { title: 'Expert Talks', text: 'Industry sessions for students, faculty, and leadership.' },
  ],
  process: [
    'Needs Assessment',
    'Program Design',
    'Faculty Alignment',
    'Student Onboarding',
    'Training Delivery',
    'Projects & Assessments',
    'Outcome Reporting',
    'Continuous Support',
  ],
  benefits: {
    image: '/wp-content/uploads/2024/03/Individualgroup-discussions-3000-x-1080-px-1.gif',
    imageAlt: 'Students and faculty in a collaborative learning session',
    items: [
      'NAAC Benchmark Support',
      'Industry-Ready Graduates',
      'Faculty Upskilling',
      'Stronger Placements',
      'Research & Innovation',
      'Institutional Branding',
      'Flexible Scheduling',
      'Measurable Outcomes',
    ],
  },
  programsSection: {
    eyebrow: 'Programs',
    title: 'Institution',
    titleAccent: 'Programs',
    subtitle: 'Explore programs tailored for colleges, universities, and autonomous institutions.',
  },
  partners: {
    type: 'education',
    ariaLabel: 'Education partner institutions',
    showNames: true,
  },
  consultation: {
    eyebrow: 'Get Started',
    title: 'Request a',
    titleAccent: 'Partnership Consultation',
    subtitle:
      'Share your institution’s goals and we will design a program aligned with your academic calendar and NAAC objectives.',
  },
  leadForm: {
    variant: 'full',
    learnerType: 'Institution',
    source: 'Institution — Consultation Form',
    organizationLabel: 'Institution Name',
    contactLabel: 'Contact Person',
    emailLabel: 'Work Email',
    requirementLabel: 'Program Requirement',
    requirementPlaceholder: 'e.g. Faculty development in Data Engineering for 30 faculty',
    submitLabel: 'Request Partnership Plan',
    technologyOptions: [
      'IT & Non-IT Programs',
      'Expert Talks',
      'Faculty Development',
      'Soft Skills',
      'EPBL',
      'Experiential Learning Platform',
      'Other',
    ],
  },
  footer: {
    title: 'Need help designing the right program for your institution?',
  },
  faqId: 'institution-faq',
  faq: {
    eyebrow: 'FAQ',
    title: 'Institution',
    titleAccent: 'Questions',
    description: 'Answers to common questions about partnering with iBridge360.',
    categories: [
      {
        id: 'basics',
        title: 'Getting Started',
        items: [
          {
            id: 'who',
            question: 'Which institutions can partner with iBridge360?',
            answer:
              'Colleges, universities, autonomous institutions, and management schools seeking industry-aligned learning solutions.',
          },
          {
            id: 'naac',
            question: 'How do programs support NAAC goals?',
            answer:
              'Our offerings align with quality enhancement, industry collaboration, faculty development, and student employability benchmarks.',
          },
          {
            id: 'custom',
            question: 'Can programs be customized?',
            answer:
              'Yes. Every engagement is tailored to your curriculum, calendar, faculty needs, and student outcomes.',
          },
        ],
      },
      {
        id: 'delivery',
        title: 'Delivery & Logistics',
        items: [
          {
            id: 'formats',
            question: 'What delivery formats are available?',
            answer:
              'On-campus, online live, hybrid, weekly, and monthly programs—plus expert talks and self-transformation sessions.',
          },
          {
            id: 'fdp',
            question: 'Do you offer faculty development programs?',
            answer:
              'Yes. We deliver structured FDPs covering emerging technologies, pedagogy, and industry practices.',
          },
        ],
      },
      {
        id: 'outcomes',
        title: 'Outcomes & Support',
        items: [
          {
            id: 'students',
            question: 'How do students benefit?',
            answer:
              'Students gain hands-on skills, industry exposure, and project experience that improve employability.',
          },
          {
            id: 'reporting',
            question: 'Do you provide outcome reporting?',
            answer:
              'Yes. We share attendance, assessment, and program completion reports to support your internal reviews.',
          },
        ],
      },
    ],
  },
  footerSeo:
    'iBridge360 partners with institutions to deliver NAAC-aligned training, faculty development programs, expert talks, experiential learning platforms, and industry-ready student upskilling. From IT and non-IT programs to soft skills, EPBL, and flexible weekly or monthly formats, we help colleges and universities bridge the education-industry gap and drive academic excellence.',
};

export default institutionAudienceData;
