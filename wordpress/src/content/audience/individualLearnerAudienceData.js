import { SHARED_TECHNOLOGIES } from './sharedAudienceContent';
import { PROOF_STATS } from '../shared/proofStats';

const individualLearnerAudienceData = {
  seo: {
    title: 'Individual learner - iBridge360',
    description:
      'At iBridge360, we help graduates and career changers gain in-demand skills so they are job-ready and productive from day one.',
  },
  hero: {
    eyebrow: 'Individual Learner',
    title: 'Accelerate Your',
    titleAccent: 'Career Growth',
    subtitle:
      'Our experiential learning platform identifies and bridges your skills gaps, equipping you with the tools to thrive in the competitive job market.',
    image: '/wp-content/uploads/2026/07/corporate-benefits-laptop-team.jpg',
    imageAlt: 'Learners collaborating on laptops during hands-on training',
    imageClassName:
      'w-full max-w-xl aspect-[4/3] rounded-2xl border border-brand/10 shadow-card object-cover',
    secondaryCtaLabel: 'Customize Your Program',
  },
  trustedBy: {
    eyebrow: 'Trusted By',
    title: 'Learners',
    titleAccent: 'Who Succeed',
    stats: [
      { value: PROOF_STATS.learnersLabel, label: 'Learners Trained' },
      { value: PROOF_STATS.placementPartnersLabel, label: 'Placement Partners' },
      { value: PROOF_STATS.satisfactionLabel, label: 'Satisfaction Rate' },
      { value: PROOF_STATS.blendedModelLabel, label: 'Blended Learning Model' },
    ],
  },
  whyMatters: {
    eyebrow: 'Why It Matters',
    title: 'Build Skills.',
    titleAccent: 'Launch Your Career.',
    points: [
      {
        title: 'Skill Gaps',
        text: 'Close the gap between academic knowledge and what employers expect on day one.',
      },
      {
        title: 'Job Market',
        text: 'Stand out with hands-on projects and technologies companies hire for today.',
      },
      {
        title: 'Career Switch',
        text: 'Transition into tech with structured mentorship and guided learning paths.',
      },
      {
        title: 'Experiential Learning',
        text: 'Learn by solving real-world problems—not just watching lectures.',
      },
      {
        title: 'Mentor Support',
        text: 'Get personalized coaching through self-assessments and live mentor sessions.',
      },
      {
        title: 'Future-Ready',
        text: 'Stay ahead with programs shaped by live market insights and industry trends.',
      },
    ],
    flow: ['Assess Skills', 'Learn & Practice', 'Build Projects', 'Get Job-Ready'],
  },
  whyChoose: {
    eyebrow: 'Why iBridge360',
    title: 'Why Choose',
    titleAccent: 'iBridge360',
    items: [
      {
        title: 'Experiential Learning',
        text: 'Hundreds of hours of real-world problem-solving to build confidence and agility.',
      },
      {
        title: 'Future-Ready Courses',
        text: 'Programs powered by live market insights so you learn what employers need now.',
      },
      {
        title: 'Personalized Learning',
        text: 'Self-assessments and direct coaching to close your unique skill gaps.',
      },
      {
        title: 'Blended Delivery',
        text: '70% self-paced platform learning and 30% live mentor sessions.',
      },
      {
        title: 'Placement Support',
        text: 'Interview prep, resume guidance, and connections to hiring partners.',
      },
      {
        title: 'Industry Mentors',
        text: 'Learn from practitioners who have delivered in real enterprise environments.',
      },
    ],
  },
  programs: [
    { name: 'Data Engineering', slug: 'courses/data-engineering', internal: true },
    { name: 'Data Analytics', slug: 'data-analytics-course', internal: true },
    { name: 'PySpark', slug: 'pyspark-course', internal: true },
    { name: 'Databricks Data Engineering', slug: 'databricks-data-engineering-course', internal: true },
    { name: 'Microsoft Fabric Data Engineering', slug: 'microsoft-fabric-data-engineering-course', internal: true },
    { name: 'Tableau', slug: 'tableau-course', internal: true },
    { name: 'Advanced Excel', slug: 'advanced-excel-course', internal: true },
    { name: 'SQL Bootcamp', slug: 'sql-bootcamp', internal: true },
    { name: 'Python Bootcamp', slug: 'python-bootcamp', internal: true },
    { name: 'Java Full Stack', slug: 'java-full-stack-development-course', internal: true },
    { name: 'Python Full Stack', slug: 'python-full-stack-development-course', internal: true },
    { name: 'MERN Full Stack', slug: 'mern-full-stack-development-course', internal: true },
    { name: 'Data Science', slug: 'courses/data-science', internal: true },
    { name: 'Python', slug: 'contact' },
    { name: 'AI & Gen AI' },
    { name: 'Cloud Computing' },
    { name: 'DevOps' },
    { name: 'Power BI', slug: 'contact' },
    { name: 'Cyber Security' },
  ],
  technologies: SHARED_TECHNOLOGIES,
  industries: [
    { icon: '💻', name: 'IT & Software' },
    { icon: '🏦', name: 'Banking & Finance' },
    { icon: '🏥', name: 'Healthcare' },
    { icon: '🛒', name: 'E-commerce' },
    { icon: '📱', name: 'Product Companies' },
    { icon: '🏢', name: 'Startups' },
  ],
  deliveryModes: [
    { title: 'Online Live', text: 'Interactive mentor-led sessions with hands-on labs.' },
    { title: 'Self-Paced Platform', text: 'Flexible learning with structured modules and assessments.' },
    { title: 'Hybrid', text: 'Blend of platform activities and live mentor check-ins.' },
    { title: 'Weekend Batch', text: 'Designed for working professionals and students.' },
    { title: 'Bootcamp', text: 'Intensive, outcome-focused skill acceleration.' },
    { title: 'Career Coaching', text: 'Resume, interview, and placement guidance included.' },
  ],
  process: [
    'Skill Assessment',
    'Personalized Path',
    'Hands-on Learning',
    'Live Mentorship',
    'Capstone Projects',
    'Interview Prep',
    'Placement Support',
  ],
  programsSection: {
    eyebrow: 'Programs',
    title: 'Job-Ready',
    titleAccent: 'Programs',
    subtitle: 'Explore programs designed to help you land and excel in your next role.',
  },
  partners: {
    type: 'corporate',
    ariaLabel: 'Companies that hire our learners',
    showNames: false,
  },
  consultation: {
    eyebrow: 'Get Started',
    title: 'Request a Free',
    titleAccent: 'Career Consultation',
    subtitle:
      'Tell us about your goals and we will recommend the right learning path for your career.',
  },
  leadForm: {
    variant: 'simple',
    learnerType: 'Individual',
    source: 'Individual Learner — Consultation Form',
    emailLabel: 'Email',
    submitLabel: 'Get My Learning Plan',
    organizationLabel: null,
    showOrgSize: false,
    showMode: false,
    showTimeline: false,
    showTechnology: false,
    showRequirement: false,
    programOptions: [
      'Data Engineering',
      'MERN Stack',
      'Data Science',
      'Java Full Stack',
      'Python',
      'AI & Gen AI',
      'Cloud Computing',
      'DevOps',
      'Not sure yet',
    ],
  },
  footer: {
    title: 'Need help choosing the right program for your career?',
  },
  faqId: 'individual-learner-faq',
  faq: {
    eyebrow: 'FAQ',
    title: 'Individual Learner',
    titleAccent: 'Questions',
    description: 'Answers to common questions about learning with iBridge360.',
    categories: [
      {
        id: 'basics',
        title: 'Getting Started',
        items: [
          {
            id: 'who',
            question: 'Who are these programs for?',
            answer:
              'Graduates, early-career professionals, and career changers who want job-ready skills in technology.',
          },
          {
            id: 'experience',
            question: 'Do I need prior experience?',
            answer:
              'Some programs welcome beginners; others expect basic programming knowledge. We help you pick the right fit during consultation.',
          },
          {
            id: 'duration',
            question: 'How long are the programs?',
            answer:
              'Most job-ready programs run 12–24 weeks depending on technology depth and your starting skill level.',
          },
        ],
      },
      {
        id: 'learning',
        title: 'Learning Experience',
        items: [
          {
            id: 'blended',
            question: 'What is blended learning?',
            answer:
              'Our model combines 70% self-paced platform activities with 30% live mentor sessions for a well-rounded experience.',
          },
          {
            id: 'projects',
            question: 'Will I work on real projects?',
            answer:
              'Yes. Hands-on labs, assignments, and capstone projects mirror real workplace scenarios.',
          },
          {
            id: 'mentors',
            question: 'Who are the mentors?',
            answer:
              'Industry practitioners with real delivery experience who guide you through concepts, projects, and career readiness.',
          },
        ],
      },
      {
        id: 'outcomes',
        title: 'Outcomes & Support',
        items: [
          {
            id: 'placement',
            question: 'Do you offer placement support?',
            answer:
              'Yes. We provide resume guidance, interview preparation, and connections to our hiring partner network.',
          },
          {
            id: 'certificate',
            question: 'Will I receive a certificate?',
            answer:
              'Yes. You receive a completion certificate upon successfully finishing the program requirements.',
          },
        ],
      },
    ],
  },
  footerSeo:
    'iBridge360 helps individual learners and career changers build job-ready skills through experiential, blended learning programs in Data Engineering, MERN Stack, Data Science, Java, Python, AI, Cloud, and DevOps. With mentor-led sessions, hands-on projects, and placement support, we bridge the gap between education and employment so you can thrive in the competitive job market.',
};

export default individualLearnerAudienceData;
