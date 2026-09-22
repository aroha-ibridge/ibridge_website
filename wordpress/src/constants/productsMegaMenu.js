/** Shared deep links for training taxonomy mega-menu. */
import { TRAINING_TITLE_TO_PATH } from '../content/training/trainingPrograms';

const trainingLink = (name) => ({
  title: name,
  to: TRAINING_TITLE_TO_PATH[name] || `/training-upskilling`,
});

/** Audience taxonomy used when Training & Upskilling is active in Products mega-menu. */
export const TRAINING_TAXONOMY = [
  {
    id: 'individual',
    title: 'Individual Learning',
    items: [
      trainingLink('Data Engineering'),
      trainingLink('Data Science'),
      trainingLink('Full Stack Development'),
      trainingLink('AI & Machine Learning'),
      trainingLink('Business Analytics'),
      trainingLink('Cloud Computing'),
      trainingLink('Cybersecurity'),
      trainingLink('DevOps'),
    ],
  },
  {
    id: 'corporate',
    title: 'Corporate Training',
    groups: [
      {
        title: 'Technology Programs',
        items: [
          trainingLink('Data Engineering'),
          trainingLink('Data Science'),
          trainingLink('AI & Machine Learning'),
          trainingLink('Cloud Computing'),
          trainingLink('Cybersecurity'),
          trainingLink('DevOps'),
          trainingLink('Full Stack Development'),
        ],
      },
      {
        title: 'Business Programs',
        items: [
          trainingLink('Business Analytics'),
          trainingLink('Digital Transformation'),
          trainingLink('Project Management'),
          trainingLink('Leadership Development'),
          trainingLink('Soft Skills'),
          trainingLink('Agile & Scrum'),
        ],
      },
      {
        title: 'Enterprise Solutions',
        items: [
          trainingLink('Custom Learning Programs'),
          trainingLink('Workforce Upskilling'),
          trainingLink('Leadership Training'),
          trainingLink('Compliance Training'),
          trainingLink('Executive Development'),
        ],
      },
    ],
  },
  {
    id: 'institution',
    title: 'Institution Training',
    groups: [
      {
        title: 'Employability Programs',
        items: [
          trainingLink('Technology Employability Program'),
          trainingLink('Management Employability Program'),
          trainingLink('Finance Employability Program'),
        ],
      },
      {
        title: 'Faculty Development',
        items: [
          trainingLink('Faculty Development Programs (FDP)'),
          trainingLink('Train-the-Trainer Programs'),
          trainingLink('AI for Educators'),
          trainingLink('Curriculum Enhancement'),
          trainingLink('Research & Innovation'),
        ],
      },
      {
        title: 'Campus Solutions',
        items: [
          trainingLink('Placement Readiness'),
          trainingLink('Internship Programs'),
          trainingLink('Industry Bootcamps'),
          trainingLink('Assessment & Certification'),
          trainingLink('Campus Hiring Support'),
        ],
      },
    ],
  },
];

/** Nav mega-menu for Products — each product drives its own feature panel. */
export const PRODUCTS_MEGA = {
  products: [
    {
      id: 'assessment',
      title: 'Assessment Platform',
      desc: 'AI-powered online assessments with secure proctoring, automation, and analytics.',
      to: '/online-assessment-platform',
      highlights: [
        'Custom Assessment Builder',
        'AI-Powered Proctoring',
        'Automated Evaluation',
        'Reports & Analytics',
        'Certificates on request',
      ],
      featuresHeading: 'Platform features',
      solutionColumns: [
        [
          {
            category: 'Create & Customize',
            items: [
              { title: 'Custom Assessment Builder', to: '/online-assessment-platform#feature-assessment-builder' },
              { title: 'Coding Assessments', to: '/online-assessment-platform#feature-coding-assessments' },
              { title: 'Custom Branding', to: '/online-assessment-platform#feature-custom-branding' },
            ],
          },
          {
            category: 'Deliver & Secure',
            items: [
              { title: 'AI-Powered Proctoring', to: '/online-assessment-platform#feature-ai-proctoring' },
              { title: 'Secure Online Examination', to: '/online-assessment-platform#feature-secure-exam' },
              { title: 'Assessment Scheduling', to: '/online-assessment-platform#feature-scheduling' },
            ],
          },
        ],
        [
          {
            category: 'Evaluate & Certify',
            items: [
              { title: 'Candidate Management', to: '/online-assessment-platform#feature-candidate-management' },
              { title: 'Automated Evaluation', to: '/online-assessment-platform#feature-auto-evaluation' },
              { title: 'Certificate Generation', to: '/online-assessment-platform#feature-certificates' },
            ],
          },
          {
            category: 'Solutions',
            items: [
              { title: 'Campus Recruitment', to: '/online-assessment-platform#solutions' },
              { title: 'Hiring Assessments', to: '/online-assessment-platform#solutions' },
              { title: 'Employee Skill Assessments', to: '/online-assessment-platform#solutions' },
              { title: 'Online Certification', to: '/online-assessment-platform#solutions' },
              { title: 'Educational Institutions', to: '/online-assessment-platform#solutions' },
            ],
          },
        ],
      ],
    },
    {
      id: 'code-arena',
      title: 'Code Arena',
      desc: 'Hackathon-style coding assessments with Monaco editor, auto tests, AI scoring, and leaderboards.',
      to: '/code-arena',
      highlights: [
        'Monaco Code Editor',
        'Multi-Language Execution',
        'Automated Test Cases',
        'Hackathon Leaderboards',
        'AI-Assisted Scoring',
      ],
      featuresHeading: 'Platform features',
      solutionColumns: [
        [
          {
            category: 'Create & Configure',
            items: [
              { title: 'Coding Problem Sets', to: '/code-arena#feature-problem-sets' },
              { title: 'Multi-Language Support', to: '/code-arena#feature-language-support' },
              { title: 'Timed Contest Configuration', to: '/code-arena#feature-exam-config' },
            ],
          },
          {
            category: 'Candidate Experience',
            items: [
              { title: 'Monaco Code Editor', to: '/code-arena#feature-monaco-editor' },
              { title: 'Run Code & Test Instantly', to: '/code-arena#feature-run-code' },
              { title: 'Hackathon Flow', to: '/code-arena#feature-hackathon-flow' },
            ],
          },
        ],
        [
          {
            category: 'Evaluate & Rank',
            items: [
              { title: 'Automated Test Evaluation', to: '/code-arena#feature-auto-tests' },
              { title: 'AI-Assisted Scoring', to: '/code-arena#feature-ai-scoring' },
              { title: 'Leaderboards & Results', to: '/code-arena#feature-leaderboard' },
            ],
          },
          {
            category: 'Solutions',
            items: [
              { title: 'Campus Hackathons', to: '/code-arena#solutions' },
              { title: 'Technical Hiring Rounds', to: '/code-arena#solutions' },
              { title: 'Bootcamp & Training Finals', to: '/code-arena#solutions' },
              { title: 'Internal Skill Contests', to: '/code-arena#solutions' },
              { title: 'Partner Training Assessments', to: '/code-arena#solutions' },
            ],
          },
        ],
      ],
    },
    {
      id: 'training',
      title: 'Training & Upskilling',
      desc: 'Industry-ready training programs for students, colleges, and corporate teams.',
      to: '/training-upskilling',
      highlights: [
        'Individual Learning Paths',
        'Corporate Technology & Business Programs',
        'Institution Employability & FDP',
        'Campus Placement Solutions',
        'Custom Enterprise Upskilling',
      ],
      featuresHeading: 'Training programs',
      panelLayout: 'training-taxonomy',
      taxonomy: TRAINING_TAXONOMY,
      solutionColumns: [],
    },
    {
      id: 'lms',
      title: 'Learning Management System (LMS)',
      desc: 'AI-powered LearnSmart: programs, practice labs, interview prep, mentors, and career tools.',
      to: '/learnsmart-lms',
      highlights: [
        'Programs, Batches & Course Player',
        'AI Communication & Career Guidance',
        'AI Code Lab & SQL Assistant',
        'AI Interview Simulator',
        'Mentor Ops & Job Assistance',
      ],
      featuresHeading: 'LMS & AI services',
      solutionColumns: [
        [
          {
            category: 'Core LMS',
            items: [
              { title: 'Programs & Custom Pathways', to: '/learnsmart-lms#feature-programs' },
              { title: 'Course Access & Progress Tracking', to: '/learnsmart-lms#feature-course-player' },
              { title: 'Mentor-Assigned Tasks & Schedules', to: '/learnsmart-lms#feature-practice-ops' },
              { title: 'Code Lab & SQL Assistant', to: '/learnsmart-lms#feature-ai-code' },
            ],
          },
          {
            category: 'AI Learning Tools',
            items: [
              { title: 'AI Communication Improviser', to: '/learnsmart-lms#feature-ai-communication' },
            ],
          },
        ],
        [
          {
            category: 'Readiness & Support',
            items: [
              { title: 'Capability Assessments', to: '/learnsmart-lms#feature-capability' },
              { title: 'Career Guidance', to: '/learnsmart-lms#feature-ai-career' },
              { title: 'AI Interview Simulator', to: '/learnsmart-lms#feature-interview-ai' },
              { title: 'Mentor Ops & Job Assistance', to: '/learnsmart-lms#feature-mentors' },
            ],
          },
          {
            category: 'Solutions',
            items: [
              { title: 'Campus & University Programs', to: '/learnsmart-lms#solutions' },
              { title: 'Training & Partners', to: '/learnsmart-lms#solutions' },
              { title: 'Graduate Employability Programs', to: '/learnsmart-lms#solutions' },
            ],
          },
        ],
      ],
    },
  ],
};

export function getProductMegaById(id) {
  const products = PRODUCTS_MEGA.products.filter(Boolean);
  return products.find((product) => product?.id === id) || products[0];
}
