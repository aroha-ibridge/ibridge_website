import { PROOF_STATS } from '../shared/proofStats';

const corporateAudienceData = {
  seo: {
    title: 'Corporate - iBridge360',
    description:
      'Customized corporate training in Java, Python, Data Engineering, AI, Cloud, DevOps, MERN Stack and more. Upskill teams with hands-on programs designed for measurable business outcomes.',
  },
  hero: {
    eyebrow: 'Corporate Training',
    title: 'Transform Your Workforce with',
    titleAccent: 'Tailored Corporate Training Solutions',
    subtitle:
      'Empower your teams with customized corporate training programs in Java, Python, Data Engineering, AI, Cloud, DevOps, MERN Stack, and emerging technologies. Designed to bridge skill gaps, improve productivity, and accelerate business growth.',
    image: '/wp-content/uploads/2024/03/Individualgroup-discussions-3000-x-1080-px-1.gif',
    imageAlt: 'Corporate team in an instructor-led training workshop',
    secondaryCtaLabel: 'Customize Your Program',
  },
  trustedBy: {
    eyebrow: 'Trusted By',
    title: 'Organizations',
    titleAccent: 'We Work With',
    stats: [
      { value: PROOF_STATS.learnersLabel, label: 'Professionals Trained' },
      { value: PROOF_STATS.workshopsLabel, label: 'Corporate Workshops' },
      { value: PROOF_STATS.enterpriseClientsLabel, label: 'Enterprise Clients' },
      { value: PROOF_STATS.satisfactionLabel, label: 'Satisfaction Rate' },
    ],
  },
  whyMatters: {
    eyebrow: 'Why It Matters',
    title: 'Upskill Today.',
    titleAccent: 'Stay Competitive Tomorrow.',
    points: [
      {
        title: 'Digital Transformation',
        text: 'Equip teams with modern skills to adopt new tools, platforms, and workflows confidently.',
      },
      {
        title: 'AI Revolution',
        text: 'Prepare your workforce for AI-driven workflows with practical, role-relevant training.',
      },
      {
        title: 'Skill Gap',
        text: 'Close technical and leadership gaps before they slow delivery or innovation.',
      },
      {
        title: 'Employee Retention',
        text: 'Invest in growth paths that keep high performers engaged and motivated.',
      },
      {
        title: 'Productivity',
        text: 'Turn learning into faster execution with hands-on, project-based delivery.',
      },
      {
        title: 'Faster Delivery',
        text: 'Build teams that ship better outcomes with fewer delays and rework cycles.',
      },
    ],
    flow: ['Current Skills', 'Corporate Training', 'Better Performance', 'Business Growth'],
  },
  whyChoose: {
    eyebrow: 'Why iBridge360',
    title: 'Why Choose',
    titleAccent: 'iBridge360',
    items: [
      { title: 'Customized Learning Paths', text: 'Programs tailored to your roles, tech stack, and business goals.' },
      { title: 'Industry Expert Trainers', text: 'Learn from practitioners with real enterprise delivery experience.' },
      { title: 'Hands-on Projects', text: 'Apply concepts through labs, case studies, and capstone projects.' },
      { title: 'Flexible Scheduling', text: 'Weekend, weekday, and cohort-based options for busy teams.' },
      { title: 'Online & Classroom', text: 'Choose live virtual, on-site, or hybrid delivery models.' },
      { title: 'Certification', text: 'Recognize achievement with completion and skill validation.' },
    ],
  },
  programs: [
    { name: 'Java Full Stack', slug: 'java-full-stack-development-course', internal: true },
    { name: 'Python Full Stack', slug: 'python-full-stack-development-course', internal: true },
    { name: 'Data Engineering', slug: 'courses/data-engineering', internal: true },
    { name: 'Data Analytics', slug: 'data-analytics-course', internal: true },
    { name: 'PySpark', slug: 'pyspark-course', internal: true },
    { name: 'Databricks Data Engineering', slug: 'databricks-data-engineering-course', internal: true },
    { name: 'Microsoft Fabric Data Engineering', slug: 'microsoft-fabric-data-engineering-course', internal: true },
    { name: 'Tableau', slug: 'tableau-course', internal: true },
    { name: 'Advanced Excel', slug: 'advanced-excel-course', internal: true },
    { name: 'SQL Bootcamp', slug: 'sql-bootcamp', internal: true },
    { name: 'Python Bootcamp', slug: 'python-bootcamp', internal: true },
    { name: 'AI & Gen AI' },
    { name: 'Cloud Computing' },
    { name: 'AWS', slug: 'contact' },
    { name: 'Azure', slug: 'contact' },
    { name: 'DevOps' },
    { name: 'Docker', slug: 'contact' },
    { name: 'Kubernetes', slug: 'contact' },
    { name: 'React', slug: 'contact' },
    { name: 'Angular', slug: 'contact' },
    { name: 'MERN Full Stack', slug: 'mern-full-stack-development-course', internal: true },
    { name: 'Node.js', slug: 'contact' },
    { name: 'SQL', slug: 'contact' },
    { name: 'Power BI', slug: 'contact' },
    { name: 'Machine Learning', slug: 'courses/data-science', internal: true },
    { name: 'Cyber Security' },
    { name: 'Soft Skills' },
    { name: 'Leadership' },
  ],
  technologies: [
    { name: 'Java', logo: '/wp-content/uploads/2024/03/JAVA-1.png' },
    { name: 'Spring Boot', logo: '/wp-content/uploads/2024/03/Back-end-1.png' },
    { name: 'React', logo: '/wp-content/uploads/2026/07/react-logo.svg' },
    { name: 'Node.js', logo: '/wp-content/uploads/2026/07/nodejs-logo.svg' },
    { name: 'Python', logo: '/wp-content/uploads/2026/07/python-logo.svg' },
    { name: 'Docker', logo: '/wp-content/uploads/2024/03/DevOps-2.png' },
    { name: 'Kubernetes', logo: '/wp-content/uploads/2024/03/DevOps-2.png' },
    { name: 'AWS', logo: '/wp-content/uploads/2024/03/awsss-1-300x179.png' },
    { name: 'Azure', logo: '/wp-content/uploads/2024/03/Microsoft-Business-Intelligence_-1.png' },
    { name: 'Snowflake', logo: '/wp-content/uploads/2024/03/Data-Engineering.png' },
    { name: 'Airflow', logo: '/wp-content/uploads/2024/03/Data-Engineering.png' },
    { name: 'Power BI', logo: '/wp-content/uploads/2024/03/power-bi-vector-logo-small.png' },
    { name: 'Git', logo: '/wp-content/uploads/2024/03/Quality-Assurance-2.png' },
    { name: 'GitHub', logo: '/wp-content/uploads/2024/03/Quality-Assurance-2.png' },
    { name: 'MongoDB', logo: '/wp-content/uploads/2026/07/mongodb-logo.svg' },
    { name: 'PostgreSQL', logo: '/wp-content/uploads/2024/03/sql-server-150x150-1.png' },
    { name: 'Redis', logo: '/wp-content/uploads/2024/03/Back-end-1.png' },
    { name: 'Kafka', logo: '/wp-content/uploads/2024/03/Data-Engineering.png' },
    { name: 'OpenAI', logo: '/wp-content/uploads/2024/03/LLM-Generative-AI3-1.png' },
    { name: 'LangChain', logo: '/wp-content/uploads/2024/03/LLM-Generative-AI3-1.png' },
    { name: 'TensorFlow', logo: '/wp-content/uploads/2026/07/tensorflow-logo.svg' },
    { name: 'PyTorch', logo: '/wp-content/uploads/2024/03/Data-Science1-1.png' },
  ],
  industries: [
    { icon: '🏦', name: 'Banking' },
    { icon: '🏥', name: 'Healthcare' },
    { icon: '🏭', name: 'Manufacturing' },
    { icon: '🛒', name: 'Retail' },
    { icon: '📚', name: 'Education' },
    { icon: '💻', name: 'IT Services' },
    { icon: '🚚', name: 'Logistics' },
    { icon: '📱', name: 'Product Companies' },
    { icon: '🏢', name: 'Startups' },
  ],
  deliveryModes: [
    { title: 'Online Live', text: 'Instructor-led virtual sessions with interactive labs.' },
    { title: 'Offline Classroom', text: 'On-site training at your office or our facility.' },
    { title: 'Hybrid', text: 'Blend of live sessions and self-paced learning.' },
    { title: 'Weekend Batch', text: 'Minimal work disruption for working professionals.' },
    { title: 'Bootcamp', text: 'Intensive, outcome-focused skill acceleration.' },
    { title: 'Executive Workshop', text: 'Leadership and strategy sessions for senior teams.' },
  ],
  process: [
    'Requirement Gathering',
    'Skill Gap Analysis',
    'Curriculum Design',
    'Trainer Assignment',
    'Training Delivery',
    'Projects',
    'Assessment',
    'Certification',
    'Post Training Support',
  ],
  benefits: {
    image: '/wp-content/uploads/2026/07/corporate-benefits-laptop-team.jpg',
    imageAlt: 'Team collaborating on laptops in a modern office',
    items: [
      'Increase Productivity',
      'Reduce Hiring Costs',
      'Improve Employee Retention',
      'Enhance Technical Skills',
      'Future-ready Workforce',
      'Improve Collaboration',
      'Higher ROI',
      'Digital Transformation',
    ],
  },
  programsSection: {
    eyebrow: 'Programs',
    title: 'Corporate Training',
    titleAccent: 'Programs',
    subtitle: 'Explore technology and leadership programs tailored for enterprise teams.',
  },
  partners: {
    type: 'corporate',
    ariaLabel: 'Corporate client logos',
    showNames: false,
  },
  consultation: {
    eyebrow: 'Get Started',
    title: 'Request a Free',
    titleAccent: 'Consultation',
    subtitle:
      'Share your requirements and our team will prepare a customized corporate training plan for your organization.',
  },
  leadForm: {
    variant: 'full',
    learnerType: 'Corporate',
    source: 'Corporate — Consultation Form',
    organizationLabel: 'Company Name',
    requirementPlaceholder: 'e.g. Upskill 50 developers in Java & Spring Boot',
    technologyOptions: [
      'Java Full Stack',
      'Python',
      'Data Engineering',
      'AI & Gen AI',
      'Cloud (AWS/Azure)',
      'DevOps',
      'MERN Stack',
      'Machine Learning',
      'Leadership / Soft Skills',
      'Other',
    ],
  },
  footer: {
    title: 'Need help selecting the right training program?',
  },
  faqId: 'corporate-faq',
  faq: {
    eyebrow: 'FAQ',
    title: 'Corporate Training',
    titleAccent: 'Questions',
    description: 'Answers to common questions about our corporate learning solutions.',
    categories: [
      {
        id: 'basics',
        title: 'Getting Started',
        items: [
          {
            id: 'what-is',
            question: 'What is corporate training?',
            answer:
              'Corporate training is structured learning designed to upskill employees in technical, functional, and leadership capabilities aligned with business goals.',
          },
          {
            id: 'why-upskill',
            question: 'Why is employee upskilling important?',
            answer:
              'Upskilling helps organizations stay competitive, improve retention, reduce hiring costs, and accelerate digital transformation.',
          },
          {
            id: 'customized',
            question: 'Do you provide customized training?',
            answer:
              'Yes. Every program is tailored to your industry, team roles, skill levels, and delivery preferences.',
          },
        ],
      },
      {
        id: 'delivery',
        title: 'Delivery & Logistics',
        items: [
          {
            id: 'onsite',
            question: 'Do you conduct onsite sessions?',
            answer:
              'Yes. We deliver on-site classroom training, online live sessions, and hybrid models based on your needs.',
          },
          {
            id: 'online',
            question: 'Can training be delivered online?',
            answer:
              'Absolutely. Our live virtual programs include mentor sessions, labs, and assessments with the same rigor as classroom delivery.',
          },
          {
            id: 'duration',
            question: 'How long is a typical program?',
            answer:
              'Program duration varies from 4–12 weeks depending on technology depth, team size, and learning objectives.',
          },
        ],
      },
      {
        id: 'outcomes',
        title: 'Outcomes & Support',
        items: [
          {
            id: 'technologies',
            question: 'What technologies do you teach?',
            answer:
              'We cover Java, Python, Data Engineering, AI, Cloud, DevOps, MERN, SQL, Power BI, Machine Learning, Cyber Security, and leadership skills.',
          },
          {
            id: 'certificates',
            question: 'Do employees receive certificates?',
            answer:
              'Yes. Participants receive completion certificates and skill assessment reports upon successful program completion.',
          },
          {
            id: 'assessments',
            question: 'Do you provide assessments?',
            answer:
              'Yes. We include quizzes, assignments, project evaluations, and capstone assessments to measure skill growth.',
          },
          {
            id: 'post-support',
            question: 'Do you offer post-training support?',
            answer:
              'Yes. We provide post-training mentoring, Q&A sessions, and optional follow-up modules to reinforce learning.',
          },
        ],
      },
    ],
  },
  footerSeo:
    'iBridge360 delivers enterprise corporate training and corporate learning solutions for organizations seeking employee upskilling, technical training, leadership development, and IT corporate training. Our programs combine instructor-led delivery, hands-on projects, and assessments to build a future-ready workforce. From Java and Python to Data Engineering, AI, Cloud, DevOps, and MERN Stack, we design professional development paths that improve productivity, retention, and ROI. Whether you need onsite workshops, online cohorts, or hybrid enterprise learning, iBridge360 helps you close skill gaps and accelerate business growth.',
};

export default corporateAudienceData;
