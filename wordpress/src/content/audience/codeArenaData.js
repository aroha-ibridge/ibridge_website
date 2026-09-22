/**
 * Marketing content for Code Arena: hackathon-style coding assessment platform
 * (aligned with IbridgeCodeAssessment / code_lab product capabilities).
 */
const codeArenaData = {
  seo: {
    title: 'Code Arena | Hackathon Coding Assessment Platform | iBridge360',
    description:
      'Run live coding assessments and hackathons with Monaco editor, multi-language execution, automated test cases, AI scoring, leaderboards, and integrity controls, built for campuses and hiring teams.',
  },
  hero: {
    eyebrow: 'Code Arena',
    title: 'Hackathon-Ready Coding Assessment Platform for',
    titleAccent: 'Hiring, Campuses & Contests',
    subtitle:
      'Code Arena is iBridge360’s dedicated coding assessment product, purpose-built for programming challenges, timed hackathons, and technical hiring rounds. Candidates write code in a professional editor, run tests instantly, and get scored with automated cases plus optional AI evaluation.',
    image: '/wp-content/uploads/2026/07/corporate-benefits-laptop-team.jpg',
    imageAlt: 'Developers collaborating on coding challenges on laptops',
    imageClassName:
      'w-full max-w-2xl aspect-[1400/917] rounded-2xl border border-brand/10 shadow-card object-cover',
    primaryCtaLabel: 'Request Demo',
    secondaryCtaLabel: 'Contact Sales',
    secondaryCtaHref: '/contact-us',
  },
  trustedBy: {
    eyebrow: 'Trusted By',
    title: 'Organizations We',
    titleAccent: 'Work With',
  },
  whyMatters: {
    eyebrow: 'Product Overview',
    title: 'Coding Assessments Built for',
    titleAccent: 'Real Contests & Hiring',
    subtitle:
      'Unlike broad exam platforms, Code Arena focuses only on coding. Host multi-problem hackathons, language-aware challenges, and ranked evaluations with a candidate experience that feels like a modern developer IDE: Monaco editor, Run Code, submissions, and results in one flow.',
    points: [],
    flow: [],
  },
  keyCapabilities: {
    eyebrow: 'Capabilities',
    title: 'Key Code Arena',
    titleAccent: 'Capabilities',
    items: [
      { icon: '💻', title: 'Monaco Code Editor' },
      { icon: '⚡', title: 'Multi-Language Execution' },
      { icon: '🧪', title: 'Automated Test Cases' },
      { icon: '🏆', title: 'Hackathon & Leaderboard' },
      { icon: '🤖', title: 'AI-Assisted Scoring' },
      { icon: '🛡️', title: 'Integrity Guardrails' },
    ],
  },
  howItWorks: {
    eyebrow: 'How It Works',
    title: 'How Code Arena',
    titleAccent: 'Works',
    steps: [
      'Create coding problem set',
      'Invite candidates / open lobby',
      'Timed hackathon or assessment',
      'Run code & auto-evaluate',
      'Rank, review & shortlist',
    ],
  },
  whyChoose: {
    eyebrow: 'Why Code Arena',
    title: 'Why',
    titleAccent: 'Code Arena',
    items: [
      {
        title: 'Coding-Only Focus',
        text: 'Purpose-built for programming assessments, not diluted by MCQ, descriptive, or proctored paper exams.',
      },
      {
        title: 'Hackathon Experience',
        text: 'Lobby, timed sets, multi-problem challenges, and leaderboard-style outcomes that mirror real contests.',
      },
      {
        title: 'Instant Feedback Loop',
        text: 'Candidates run code against test cases and iterate, closer to how engineers work in interviews and jobs.',
      },
      {
        title: 'Faster Technical Shortlisting',
        text: 'Automated evaluation and rankings help campuses and hiring teams filter coding talent at scale.',
      },
      {
        title: 'Works Alongside Assessment Platform',
        text: 'Use Code Arena for coding rounds; use Online Assessment Platform when you need full multi-format exams and AI proctoring.',
      },
      {
        title: 'Built for iBridge360 Delivery',
        text: 'Aligned with iBridge360 training and campus programs for placement drives, bootcamps, and skill contests.',
      },
    ],
  },
  programsSection: {
    eyebrow: 'Highlights',
    title: 'Platform',
    titleAccent: 'Highlights',
    subtitle: 'What teams get out of the box for coding contests and technical assessments.',
    layout: 'icon-list',
  },
  programs: [
    { name: 'Monaco IDE Experience' },
    { name: 'JavaScript, Python, HTML & Java' },
    { name: 'In-Browser + Server Runners' },
    { name: 'Multi-Problem Hackathons' },
    { name: 'Automated Test Evaluation' },
    { name: 'AI Heuristic / Model Scoring' },
    { name: 'Live Leaderboards & Results' },
    { name: 'Lobby & Timed Sessions' },
    { name: 'Integrity Guardrails' },
    { name: 'Admin Review Dashboard' },
    { name: 'Candidate Submissions History' },
    { name: 'Campus & Hiring Workflows' },
  ],
  featureExplorer: {
    eyebrow: 'Platform Features',
    title: 'Explore Code Arena',
    titleAccent: 'Features',
    subtitle:
      'Everything you need to design coding challenges, run hackathons, evaluate submissions, and shortlist talent.',
    categories: [
      {
        id: 'create',
        title: 'Create & Configure',
        description: 'Design coding problem sets that match hiring rounds or campus contests.',
        items: [
          {
            id: 'problem-sets',
            title: 'Coding Problem Sets',
            text: 'Build multi-problem assessments with clear statements, constraints, samples, and expected outcomes, ideal for 5-10 question hackathons.',
            bullets: [
              'Multi-problem contest structure',
              'Clear problem statements and samples',
              'Flexible scoring per challenge',
            ],
          },
          {
            id: 'language-support',
            title: 'Multi-Language Support',
            text: 'Let candidates solve in the languages you care about, with runners tuned for browser-friendly languages and server execution for Java.',
            bullets: [
              'JavaScript, Python, and HTML in-browser runners',
              'Java via secure server execution (Piston)',
              'Consistent Run Code experience in Monaco',
            ],
          },
          {
            id: 'exam-config',
            title: 'Timed Contest Configuration',
            text: 'Define duration, lobby entry, and contest rules so every candidate gets a fair, synchronized hackathon window.',
            bullets: [
              'Timed assessment windows',
              'Lobby before start',
              'Clear participant rules',
            ],
          },
        ],
      },
      {
        id: 'experience',
        title: 'Candidate Experience',
        description: 'A developer-friendly workspace that reduces friction during high-stakes coding rounds.',
        items: [
          {
            id: 'monaco-editor',
            title: 'Monaco Code Editor',
            text: 'Candidates write and edit code in a professional IDE-style editor with syntax highlighting and a familiar keyboard experience.',
            bullets: [
              'IDE-like editing surface',
              'Syntax highlighting',
              'Side-by-side problem + editor layout',
            ],
          },
          {
            id: 'run-code',
            title: 'Run Code & Test Instantly',
            text: 'Execute solutions against sample and hidden cases so candidates can validate logic before final submission.',
            bullets: [
              'Instant Run Code feedback',
              'Automated test case checks',
              'Iterate before submit',
            ],
          },
          {
            id: 'hackathon-flow',
            title: 'Hackathon Flow',
            text: 'From lobby to problem list to submission and results: a contest path designed for placement drives and internal coding events.',
            bullets: [
              'Lobby and contest start',
              'Multi-question navigation',
              'Results after completion',
            ],
          },
        ],
      },
      {
        id: 'evaluate',
        title: 'Evaluate & Rank',
        description: 'Score submissions consistently and surface standings for mentors and recruiters.',
        items: [
          {
            id: 'auto-tests',
            title: 'Automated Test Evaluation',
            text: 'Score objective coding outcomes with automated test runners to reduce manual review for large candidate pools.',
            bullets: [
              'Test-case driven scoring',
              'Consistent evaluation at scale',
              'Less manual grading effort',
            ],
          },
          {
            id: 'ai-scoring',
            title: 'AI-Assisted Scoring',
            text: 'Optional AI / heuristic scoring layers help review quality when you need richer signals beyond pass/fail cases.',
            bullets: [
              'AI-assisted evaluation signals',
              'Heuristic fallback when models are unavailable',
              'Faster shortlisting support',
            ],
          },
          {
            id: 'leaderboard',
            title: 'Leaderboards & Results',
            text: 'Publish rankings and results so campuses and hiring managers can see who performed best in the contest window.',
            bullets: [
              'Contest leaderboards',
              'Submission and score review',
              'Admin overview dashboards',
            ],
          },
        ],
      },
      {
        id: 'secure',
        title: 'Integrity & Operations',
        description: 'Keep contests fair with guardrails and give admins clear operational control.',
        items: [
          {
            id: 'integrity',
            title: 'Integrity Guardrails',
            text: 'Participant rules and integrity guards help reduce common contest misuse during timed coding assessments.',
            bullets: [
              'Participant rule enforcement',
              'Integrity-oriented contest UX',
              'Fairer timed evaluations',
            ],
          },
          {
            id: 'admin-ops',
            title: 'Admin Review & Ops',
            text: 'Admins can monitor participants, review submissions, and manage contest outcomes from a dedicated operational view.',
            bullets: [
              'Participant overview',
              'Submission inspection',
              'Contest operations controls',
            ],
          },
          {
            id: 'scale-delivery',
            title: 'Campus & Hiring Delivery',
            text: 'Use Code Arena for placement contests, bootcamp finals, internal hackathons, and technical screening rounds.',
            bullets: [
              'Campus placement drives',
              'Bootcamp / training finals',
              'Technical hiring screens',
            ],
          },
        ],
      },
    ],
  },
  technologies: [],
  industries: [],
  assessmentTypes: [],
  securitySection: null,
  reportsHighlight: null,
  deliveryModesSection: {
    eyebrow: 'Solutions',
    title: 'Code Arena Solutions for',
    titleAccent: 'Every Coding Use Case',
  },
  deliveryModes: [
    {
      title: 'Campus Hackathons',
      text: 'Run timed multi-problem contests for placement shortlisting and student engagement.',
    },
    {
      title: 'Technical Hiring Rounds',
      text: 'Screen developers with language-aware coding challenges and ranked outcomes.',
    },
    {
      title: 'Bootcamp & Training Finals',
      text: 'Evaluate cohort readiness after Full Stack, Java, or Data programs with live coding sets.',
    },
    {
      title: 'Internal Skill Contests',
      text: 'Host company or college coding events with lobbies, leaderboards, and admin review.',
    },
    {
      title: 'Partner Training Assessments',
      text: 'Pair with iBridge360 Training & Upskilling for end-of-module coding evaluations.',
    },
  ],
  processSection: null,
  process: [],
  benefits: {
    image: '/wp-content/uploads/2026/07/corporate-benefits-laptop-team.jpg',
    imageAlt: 'Team reviewing coding assessment outcomes on laptops',
    eyebrow: 'Outcomes',
    title: 'Code Arena',
    titleAccent: 'Outcomes',
    intro: 'Teams using Code Arena can:',
    items: [
      'Run coding-only assessments without mixing MCQ exam workflows',
      'Deliver hackathon-style contests with timed lobbies and rankings',
      'Evaluate candidates with automated test cases at scale',
      'Give candidates an IDE-like Monaco editing experience',
      'Support multiple languages with browser and server runners',
      'Shortlist faster using scores, leaderboards, and admin review',
      'Add AI-assisted scoring signals when needed',
      'Complement Online Assessment Platform for non-coding exam formats',
    ],
  },
  partners: {
    type: 'corporate',
    ariaLabel: 'Company partner logos',
    showNames: false,
    education: {
      ariaLabel: 'Institution partner logos',
      showNames: false,
    },
  },
  consultation: {
    eyebrow: 'Get Started',
    title: 'Ready to Launch Your Next',
    titleAccent: 'Coding Contest?',
    subtitle:
      'Assess coding talent with Code Arena: hackathons, hiring rounds, and campus contests on one dedicated platform.',
  },
  leadForm: {
    variant: 'full',
    learnerType: 'Corporate',
    source: 'Code Arena: Request Demo',
    organizationLabel: 'Company / Institution Name',
    contactLabel: 'Contact Person',
    emailLabel: 'Work Email',
    requirementLabel: 'Coding Assessment Requirement',
    requirementPlaceholder:
      'e.g. Need a 3-hour campus hackathon with Java + Python problems for 300 students',
    submitLabel: 'Request Demo',
    showOrgSize: true,
    showMode: true,
    showTimeline: true,
    showTechnology: true,
    showRequirement: true,
    technologyOptions: [
      'Campus Hackathon',
      'Technical Hiring Round',
      'Bootcamp / Training Final',
      'Internal Coding Contest',
      'Partner Training Assessment',
      'Other',
    ],
  },
  footer: {
    title: 'Ready to request a demo of Code Arena?',
  },
  faqId: 'code-arena-faq',
  faq: {
    eyebrow: 'FAQ',
    title: 'Frequently Asked',
    titleAccent: 'Questions',
    description: 'Quick answers about iBridge360 Code Arena.',
    categories: [
      {
        id: 'platform',
        title: 'Platform Basics',
        items: [
          {
            id: 'what-is',
            question: 'What is Code Arena?',
            answer:
              'Code Arena is iBridge360’s dedicated coding assessment and hackathon platform. Candidates solve programming problems in a Monaco editor, run tests, submit solutions, and get ranked, purpose-built for coding-only evaluations.',
          },
          {
            id: 'vs-assessment',
            question: 'How is Code Arena different from the Online Assessment Platform?',
            answer:
              'The Online Assessment Platform covers multi-format exams (MCQ, descriptive, proctoring, certificates). Code Arena focuses only on coding assessments and contest-style hackathons with an IDE-like experience and automated code evaluation.',
          },
          {
            id: 'languages',
            question: 'Which programming languages are supported?',
            answer:
              'Code Arena supports common assessment languages such as JavaScript, Python, HTML (in-browser runners) and Java via secure server-side execution. Language availability can be configured per contest.',
          },
          {
            id: 'hackathon',
            question: 'Can we run full hackathons, not just single questions?',
            answer:
              'Yes. Code Arena is designed for multi-problem timed contests with lobby entry, problem navigation, submissions, and leaderboard-style results.',
          },
          {
            id: 'ai-scoring',
            question: 'Does it support AI scoring?',
            answer:
              'Yes. Optional AI-assisted scoring can enrich evaluation beyond automated test cases. When AI keys are unavailable, heuristic scoring keeps local and pilot workflows usable.',
          },
          {
            id: 'who-for',
            question: 'Who is Code Arena for?',
            answer:
              'Campuses running placement contests, corporates screening developers, training partners evaluating bootcamp outcomes, and institutions hosting internal coding events.',
          },
        ],
      },
    ],
  },
  footerSeo:
    'iBridge360 Code Arena is a hackathon-style coding assessment platform with Monaco editor, multi-language execution, automated test cases, AI-assisted scoring, leaderboards, and admin review, built for campuses, hiring teams, and training partners.',
};

export default codeArenaData;
