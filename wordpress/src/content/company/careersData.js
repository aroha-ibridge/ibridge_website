/**
 * Careers page content. Edit `jobs` to add, close, or rewrite openings.
 * Interest forms post through the same marketing enquiry API as Contact Us.
 */

const careersData = {
  hero: {
    eyebrow: 'Careers',
    title: 'Build the bridge',
    titleAccent: 'between learning and work',
    subtitle:
      'iBridge360 is a Bengaluru learning company. We design programs, an AI learning platform, assessments, and campus partnerships so more people can become job-ready. If that is the work you want to do, start here.',
  },
  whyJoin: {
    eyebrow: 'Why iBridge360',
    title: 'Work that',
    titleAccent: 'learners can feel',
    subtitle:
      'Engineers, trainers, designers, and partnership teams sit on the same problem: closing the gap between what people study and what employers need.',
    items: [
      {
        title: 'Programs with an outcome',
        text: 'Data, full stack, analytics, and corporate upskilling built so a learner can show work, not only a certificate.',
      },
      {
        title: 'Products in daily use',
        text: 'LearnSmart LMS, online assessments, and Code Arena are the tools campuses, companies, and learners actually open.',
      },
      {
        title: 'A Jayanagar home base',
        text: 'The team works from our Bengaluru office. Hybrid roles split time between the office and focused remote days.',
      },
      {
        title: 'Practitioners on the team',
        text: 'You will work with trainers, counsellors, and engineers who talk to learners and clients every week.',
      },
    ],
  },
  hiring: {
    eyebrow: 'How hiring works',
    title: 'From interest',
    titleAccent: 'to a conversation',
    steps: [
      {
        step: '01',
        title: 'Share your interest',
        text: 'Tell us the role, how to reach you, and a short note on why it fits. No account needed.',
      },
      {
        step: '02',
        title: 'The team reads it',
        text: 'Your note lands in the same enquiry desk as Contact Us, tagged as a careers application.',
      },
      {
        step: '03',
        title: 'A conversation',
        text: 'If the role is a match, we write to the email you shared and set up a call.',
      },
      {
        step: '04',
        title: 'A clear reply',
        text: 'We follow up on the application. If we cannot move ahead, you still hear back.',
      },
    ],
  },
  roles: {
    eyebrow: 'Open roles',
    title: 'Roles open',
    titleAccent: 'right now',
    subtitle:
      'All roles are full-time with iBridge360 Edtech Pvt. Ltd. in Bengaluru. Filter by team or search by skill.',
  },
  openApplication: {
    eyebrow: 'Open application',
    title: 'Do not see',
    titleAccent: 'your role?',
    subtitle:
      'Send a general note. Tell us the kind of work you do and we will write back if a matching opening comes up.',
  },
  equalOpportunity:
    'iBridge360 reviews applications on skills and relevant experience. People from different academic paths, cities, and career stages are welcome to apply.',
  contact: {
    email: 'support@ibridge360.com',
    emailHref: 'mailto:support@ibridge360.com',
    phone: '+91 96112 60360',
    phoneHref: 'tel:+919611260360',
    address: '5th Block, Jayanagar, Bengaluru 560041',
  },
  jobs: [
    {
      id: 'full-stack-developer',
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Bengaluru',
      workMode: 'Hybrid',
      type: 'Full-time',
      experience: '2–5 years',
      summary:
        'Build learner and admin features across LearnSmart LMS — courses, batches, assignments, and mentor workflows.',
      responsibilities: [
        'Ship React and Node.js features for the learning platform used by learners, mentors, and campus admins.',
        'Connect course, batch, and assessment flows so a learner can move from lesson to practice without a broken handoff.',
        'Work with design and product on screens that stay clear on mobile and desktop.',
        'Fix production issues with the same care you give new features.',
      ],
      requirements: [
        'Hands-on experience with React and a Node.js API.',
        'Comfort with REST, forms, and authenticated user flows.',
        'You can explain a technical choice to a non-engineer on the team.',
        'A portfolio, GitHub, or product you can walk through on a call.',
      ],
    },
    {
      id: 'frontend-engineer',
      title: 'Frontend Engineer',
      department: 'Engineering',
      location: 'Bengaluru',
      workMode: 'Hybrid',
      type: 'Full-time',
      experience: '2–4 years',
      summary:
        'Own the interface of course players, program pages, and learner dashboards in React.',
      responsibilities: [
        'Turn learning flows into fast, accessible React screens.',
        'Keep the marketing site and product UI visually consistent with the iBridge360 brand.',
        'Partner with designers on states people actually hit: empty, loading, error, and success.',
        'Care about performance on modest phones and campus networks.',
      ],
      requirements: [
        'Strong React, CSS, and responsive layout skills.',
        'Experience shipping a product used by people outside your team.',
        'You notice spacing, type, and broken empty states.',
        'Samples of UI work you can share.',
      ],
    },
    {
      id: 'backend-engineer',
      title: 'Backend Engineer',
      department: 'Engineering',
      location: 'Bengaluru',
      workMode: 'Hybrid',
      type: 'Full-time',
      experience: '3–6 years',
      summary:
        'Design the APIs behind enrollments, batches, assessments, and mentor operations.',
      responsibilities: [
        'Build and maintain services that programs, assessments, and the LMS depend on.',
        'Model learner, batch, and enquiry data so reporting stays trustworthy.',
        'Protect accounts, roles, and assessment attempts.',
        'Write APIs that frontend and internal tools can rely on.',
      ],
      requirements: [
        'Experience building production APIs in Node.js or a similar stack.',
        'Working knowledge of databases, auth, and background jobs.',
        'You think about failure cases, not only the happy path.',
        'Clear written updates when something in production needs attention.',
      ],
    },
    {
      id: 'qa-engineer',
      title: 'QA Engineer',
      department: 'Engineering',
      location: 'Bengaluru',
      workMode: 'Hybrid',
      type: 'Full-time',
      experience: '2–4 years',
      summary:
        'Protect the quality of LMS, assessment, and Code Arena flows before learners see them.',
      responsibilities: [
        'Test enrollment, course playback, assessments, and coding contests end to end.',
        'Write cases for the paths learners and admins actually use.',
        'Catch regressions before a batch or hiring drive depends on them.',
        'Work with engineers on reproducible bug reports.',
      ],
      requirements: [
        'Experience testing a web product, including APIs and UI.',
        'Comfort writing structured test cases and clear bug reports.',
        'You are careful with edge cases: timeouts, retries, and permissions.',
        'Interest in learning platforms or assessments is a plus.',
      ],
    },
    {
      id: 'devops-engineer',
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Bengaluru',
      workMode: 'Hybrid',
      type: 'Full-time',
      experience: '3–6 years',
      summary:
        'Keep learning platforms deployable, observable, and steady for batches and assessments.',
      responsibilities: [
        'Own build, release, and environment setup for web apps and APIs.',
        'Watch uptime during live classes, exams, and contests.',
        'Tighten access, secrets, and backup habits.',
        'Help engineers ship without guessing how production is configured.',
      ],
      requirements: [
        'Experience with Linux, CI/CD, and cloud hosting.',
        'You have run a production web service, not only a demo.',
        'Practical knowledge of logs, alerts, and rollbacks.',
        'Clear communication when an incident is underway.',
      ],
    },
    {
      id: 'data-engineer',
      title: 'Data Engineer',
      department: 'Data & AI',
      location: 'Bengaluru',
      workMode: 'Hybrid',
      type: 'Full-time',
      experience: '2–5 years',
      summary:
        'Build the pipelines behind learner analytics, and keep our data programs honest to real practice.',
      responsibilities: [
        'Model and move data from the LMS, assessments, and enquiries into reporting the team can trust.',
        'Design SQL and Python workflows that program and partnership teams can use.',
        'Advise curriculum leads when a data engineering lesson drifts from how the work is actually done.',
        'Document datasets so the next person is not starting from scratch.',
      ],
      requirements: [
        'Strong SQL and Python, with experience building pipelines.',
        'You have worked with warehouses, ETL, or cloud data tools.',
        'You can teach a concept as clearly as you can query it.',
        'Care about data quality, not only dashboards.',
      ],
    },
    {
      id: 'machine-learning-engineer',
      title: 'Machine Learning Engineer',
      department: 'Data & AI',
      location: 'Bengaluru',
      workMode: 'Hybrid',
      type: 'Full-time',
      experience: '2–5 years',
      summary:
        'Improve practice feedback, recommendations, and AI coaching inside the learning platform.',
      responsibilities: [
        'Turn learner activity into useful feedback, not a novelty feature.',
        'Evaluate models against real program outcomes before they reach a cohort.',
        'Work with product and curriculum so AI help stays accurate for the course.',
        'Write enough documentation that another engineer can maintain what you ship.',
      ],
      requirements: [
        'Practical ML experience in Python, including evaluation, not only training.',
        'You have put a model behind an API or a product feature.',
        'You are careful about wrong answers in a learning context.',
        'Comfort explaining tradeoffs to non-ML teammates.',
      ],
    },
    {
      id: 'data-analyst',
      title: 'Data Analyst',
      department: 'Data & AI',
      location: 'Bengaluru',
      workMode: 'Hybrid',
      type: 'Full-time',
      experience: '1–3 years',
      summary:
        'Turn batch, learner, and partnership numbers into decisions program teams can act on.',
      responsibilities: [
        'Track enrollment, completion, assessment, and counselling signals.',
        'Build clear reports for program, sales, and campus teams.',
        'Question numbers that do not match what mentors see in a batch.',
        'Share findings in plain language.',
      ],
      requirements: [
        'Solid SQL and spreadsheet skills, plus one visualization tool such as Power BI or Tableau.',
        'You have analyzed an operational dataset, even from a project or internship.',
        'You write short conclusions, not only charts.',
        'Interest in education or workforce programs is a plus.',
      ],
    },
    {
      id: 'instructional-designer',
      title: 'Instructional Designer',
      department: 'Learning',
      location: 'Bengaluru',
      workMode: 'Hybrid',
      type: 'Full-time',
      experience: '3–6 years',
      summary:
        'Design outcome-based modules for career programs and corporate upskilling.',
      responsibilities: [
        'Shape lessons, practice, and checks so a module has a visible skill at the end.',
        'Work with subject experts on Data, Full Stack, analytics, and soft-skill tracks.',
        'Adapt the same learning goal for a campus batch and a corporate cohort.',
        'Review content when learners get stuck in the same place.',
      ],
      requirements: [
        'A portfolio of courses, modules, or workshops you designed.',
        'You can write for adult learners without talking down to them.',
        'Experience with projects, labs, or scenario-based practice.',
        'Comfort collaborating with trainers who deliver what you design.',
      ],
    },
    {
      id: 'curriculum-developer-data',
      title: 'Curriculum Developer — Data',
      department: 'Learning',
      location: 'Bengaluru',
      workMode: 'Hybrid',
      type: 'Full-time',
      experience: '4–8 years',
      summary:
        'Own the Data Engineering, Analytics, SQL, and related curricula learners and employers can recognize.',
      responsibilities: [
        'Keep syllabi, projects, and assessments aligned with current data practice.',
        'Build projects a learner can explain in an interview.',
        'Brief trainers before a batch so delivery matches the design.',
        'Update lessons when tools or hiring expectations shift.',
      ],
      requirements: [
        'Professional experience in data engineering, analytics, or a close discipline.',
        'You have taught, mentored, or written technical training before.',
        'Strong SQL, and working Python or a BI tool.',
        'You can tell a foundational topic from a distraction.',
      ],
    },
    {
      id: 'corporate-trainer',
      title: 'Corporate Trainer',
      department: 'Learning',
      location: 'Bengaluru',
      workMode: 'Hybrid · client sessions',
      type: 'Full-time',
      experience: '4–8 years',
      summary:
        'Deliver mentor-led sessions for enterprise and campus cohorts in data, analytics, or software.',
      responsibilities: [
        'Run live sessions that stay practical, paced, and respectful of adult learners.',
        'Adapt examples to the client’s domain without dropping the learning goal.',
        'Give mentors and program managers an honest read on how a batch is progressing.',
        'Travel for on-site batches when the engagement needs it.',
      ],
      requirements: [
        'You have trained working professionals or college cohorts, not only presented slides.',
        'Depth in at least one area we teach: data, analytics, Python, Java, or full stack.',
        'Clear spoken English and comfort in a classroom or virtual room.',
        'Willingness to travel within India for scheduled batches.',
      ],
    },
    {
      id: 'content-writer',
      title: 'Content Writer',
      department: 'Learning',
      location: 'Bengaluru',
      workMode: 'Hybrid',
      type: 'Full-time',
      experience: '1–4 years',
      summary:
        'Write program pages, learner guides, and articles in a clear iBridge360 voice.',
      responsibilities: [
        'Explain programs, products, and career paths without hype or vague claims.',
        'Turn trainer and product notes into pages a prospective learner can trust.',
        'Edit blogs and help content so facts match what the site already says.',
        'Work with design on headings, examples, and calls to action.',
      ],
      requirements: [
        'Published writing samples, preferably explanatory rather than promotional.',
        'You can learn a technical topic well enough to explain it.',
        'Careful with names, numbers, and claims you cannot source.',
        'Comfortable taking an edit.',
      ],
    },
    {
      id: 'career-counsellor',
      title: 'Career Counsellor',
      department: 'Learner Success',
      location: 'Bengaluru',
      workMode: 'On-site',
      type: 'Full-time',
      experience: '2–5 years',
      summary:
        'Guide prospective learners through program fit on calls, and help them choose a next step.',
      responsibilities: [
        'Hold counselling conversations about background, goals, and program fit.',
        'Explain Data, Full Stack, analytics, and related paths without overselling.',
        'Log each conversation so the next teammate has the context.',
        'Hand serious enquiries to the right program or partnership owner.',
      ],
      requirements: [
        'Experience in education counselling, admissions, or a similar advisory role.',
        'You listen before you recommend.',
        'Clear spoken English and comfortable phone or video calls.',
        'Based in Bengaluru and able to work from the Jayanagar office.',
      ],
    },
    {
      id: 'business-development-manager',
      title: 'Business Development Manager — Corporate L&D',
      department: 'Learner Success',
      location: 'Bengaluru',
      workMode: 'Hybrid',
      type: 'Full-time',
      experience: '4–8 years',
      summary:
        'Build relationships with companies that need custom upskilling for their teams.',
      responsibilities: [
        'Find and develop corporate learning engagements in technology and professional skills.',
        'Scope a program with delivery leads so the promise matches what we can teach.',
        'Keep proposals specific: audience, outcome, format, and timeline.',
        'Stay with the account through kickoff, not only the signature.',
      ],
      requirements: [
        'B2B experience selling training, HR tech, or a related service.',
        'You can talk to L&D and business leaders without a script.',
        'A record of owning a pipeline, not only inbound leads.',
        'Willingness to travel for client meetings.',
      ],
    },
    {
      id: 'institution-partnership-manager',
      title: 'Institution Partnership Manager',
      department: 'Learner Success',
      location: 'Bengaluru',
      workMode: 'Hybrid · campus travel',
      type: 'Full-time',
      experience: '3–7 years',
      summary:
        'Partner with colleges on employability, faculty development, and experiential programs.',
      responsibilities: [
        'Build and look after campus partnerships from first meeting to a running program.',
        'Match institution goals — placements, FDP, NAAC-oriented activity — to programs we actually deliver.',
        'Coordinate trainers, counsellors, and the campus point of contact.',
        'Travel to partner colleges when the relationship needs it.',
      ],
      requirements: [
        'Experience with colleges, universities, or education partnerships.',
        'You can hold a conversation with faculty and with placement teams.',
        'Organized follow-up. Campuses notice when it slips.',
        'Based in Bengaluru, with travel across India.',
      ],
    },
    {
      id: 'customer-success-manager',
      title: 'Customer Success Manager',
      department: 'Learner Success',
      location: 'Bengaluru',
      workMode: 'Hybrid',
      type: 'Full-time',
      experience: '3–6 years',
      summary:
        'Help corporate and campus clients get a working outcome from training and the LMS.',
      responsibilities: [
        'Onboard a client onto the program or platform and stay through the first cohort.',
        'Spot adoption problems early: unused licenses, quiet batches, unclear owners.',
        'Bring product, training, and the client into the same conversation.',
        'Report progress in language a sponsor can use internally.',
      ],
      requirements: [
        'Experience in customer success, account management, or program coordination.',
        'You are calm when a batch is not going to plan.',
        'Comfortable with learning products or B2B education.',
        'Clear writing for status notes and check-in agendas.',
      ],
    },
    {
      id: 'product-manager-lms',
      title: 'Product Manager — Learning Platform',
      department: 'Product & Design',
      location: 'Bengaluru',
      workMode: 'Hybrid',
      type: 'Full-time',
      experience: '4–8 years',
      summary:
        'Own the LearnSmart LMS roadmap, from the course experience to mentor and admin tools.',
      responsibilities: [
        'Decide what to build next from learner, mentor, and campus feedback.',
        'Write problems and acceptance notes engineers can build from.',
        'Balance program delivery needs with a product that stays coherent.',
        'Say no to features that do not help a learner finish or a mentor teach.',
      ],
      requirements: [
        'You have owned a product used by real customers.',
        'Experience with education, SaaS, or an internal platform.',
        'You can sit with engineers and with trainers.',
        'Evidence over opinions when a roadmap gets crowded.',
      ],
    },
    {
      id: 'ui-ux-designer',
      title: 'UI/UX Designer',
      department: 'Product & Design',
      location: 'Bengaluru',
      workMode: 'Hybrid',
      type: 'Full-time',
      experience: '2–5 years',
      summary:
        'Design learning, assessment, and marketing interfaces people can finish without a guide.',
      responsibilities: [
        'Design flows for learners, mentors, and admins on web.',
        'Keep program pages and product screens in one visual system.',
        'Prototype the states that usually get skipped: errors, empty cohorts, long course titles.',
        'Work with engineers so the shipped UI matches the intent.',
      ],
      requirements: [
        'A portfolio of product or web UI, not only campaign visuals.',
        'Figma fluency and a habit of testing a flow with someone else.',
        'You can design for dense learning content without making it loud.',
        'Interest in education products is a plus.',
      ],
    },
    {
      id: 'talent-acquisition-specialist',
      title: 'Talent Acquisition Specialist',
      department: 'People',
      location: 'Bengaluru',
      workMode: 'On-site',
      type: 'Full-time',
      experience: '2–5 years',
      summary:
        'Hire engineers, trainers, counsellors, and partnership talent for a growing team.',
      responsibilities: [
        'Run search for the roles on this page and the ones that follow.',
        'Write role briefs with the hiring manager before the first outreach.',
        'Keep candidates informed. Silence is not a process.',
        'Build a repeatable loop from interest form to offer conversation.',
      ],
      requirements: [
        'Full-cycle hiring experience, ideally in technology or education.',
        'You can assess a trainer profile and an engineer profile with the right hiring manager.',
        'Organized tracking of every open role.',
        'Based in Bengaluru and able to work from the Jayanagar office.',
      ],
    },
    {
      id: 'digital-marketing-specialist',
      title: 'Digital Marketing Specialist',
      department: 'Growth',
      location: 'Bengaluru',
      workMode: 'Hybrid',
      type: 'Full-time',
      experience: '2–5 years',
      summary:
        'Bring the right learners, campuses, and companies to programs and products — with claims we can stand behind.',
      responsibilities: [
        'Plan campaigns for career programs, corporate training, and platform demos.',
        'Work with writers so ads, pages, and emails say the same true thing.',
        'Read performance with the team and stop what is not working.',
        'Support webinars, counselling drives, and partnership launches.',
      ],
      requirements: [
        'Hands-on experience with paid or organic campaigns, plus landing pages.',
        'You can explain a result without hiding the weak number.',
        'Comfort in education or B2B services marketing.',
        'Careful with offers, outcomes, and timelines you cannot verify.',
      ],
    },
  ],
};

export default careersData;
