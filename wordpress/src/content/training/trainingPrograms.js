import { buildTrainingProgram } from './buildTrainingProgram';
import { LOGO, tool } from './trainingToolkits';

/** Compact definitions → full ProgramPage configs for Training & Upskilling. */
const DEFINITIONS = [
  {
    slug: 'ai-machine-learning',
    name: 'AI & Machine Learning',
    audience: 'Individual / Corporate',
    duration: '4–6 Months',
    seoDescription:
      'AI & Machine Learning training with Python, scikit-learn, TensorFlow, NLP, Generative AI / RAG, and MLOps — hands-on upskilling for job and team readiness.',
    heroDescription:
      'Master applied AI the way the market trains teams today: Python for ML, classical models, deep learning starters, NLP, Generative AI / prompt + RAG patterns, evaluation, and MLOps-aware deployment — with labs and mentor guidance, not theory-only slides.',
    curriculumTitle: 'Industry AI & ML',
    curriculumDescription:
      'Aligned to what enterprises and bootcamps sell in AI upskilling — foundations → modelling → GenAI → production habits — with stack choices you can customize for your cloud and ML platform.',
    highlightsSubtitle: 'Skills employers and L&D teams buy AI training for.',
    highlights: [
      {
        title: 'End-to-end ML skills',
        text: 'Data prep, feature work, modelling, evaluation, and storytelling for ML and analytics roles.',
      },
      {
        title: 'GenAI & RAG practice',
        text: 'Prompt patterns, retrieval-augmented workflows, and responsible AI habits used in 2025 corporate tracks.',
      },
      {
        title: 'Hands-on labs & projects',
        text: 'Build classifiers, NLP pipelines, and portfolio-ready AI proofs with mentor review.',
      },
      {
        title: 'MLOps awareness',
        text: 'Packaging, monitoring basics, and deployment mindset — not notebook-only learning.',
      },
      {
        title: 'Mentor-led cohorts',
        text: 'Live facilitation plus doubt-clearing for individuals and corporate batches.',
      },
    ],
    modules: [
      {
        title: 'Python & Data Foundations for AI',
        description: 'The same base every serious AI program starts with.',
        topics: [
          'Python for data & ML',
          'NumPy, Pandas, EDA',
          'Feature engineering basics',
          'Jupyter / notebook workflows',
          'SQL for ML datasets',
        ],
      },
      {
        title: 'Classical Machine Learning',
        description: 'Core models and evaluation used in industry hiring tests.',
        topics: [
          'Regression & classification',
          'Tree & ensemble methods',
          'Model selection & metrics',
          'Pipelines & cross-validation',
          'scikit-learn practice labs',
        ],
      },
      {
        title: 'Deep Learning & NLP Starters',
        description: 'Neural basics and language tasks teams apply on real text.',
        topics: [
          'Neural network fundamentals',
          'TensorFlow / Keras intro',
          'Text classification & embeddings',
          'Intro to transformers',
          'Computer vision overview',
        ],
      },
      {
        title: 'Generative AI for Practitioners',
        description: 'What corporates buy in GenAI upskilling right now.',
        topics: [
          'Prompt engineering patterns',
          'RAG architecture basics',
          'LLM app ideation',
          'Evaluation & guardrails',
          'Responsible / ethical AI',
        ],
      },
      {
        title: 'MLOps & Capstone',
        description: 'Ship learning as workplace evidence.',
        topics: [
          'Experiment tracking habits',
          'Model packaging intro',
          'Cloud ML platform awareness',
          'Capstone: end-to-end AI project',
          'Demo & interview storytelling',
        ],
      },
    ],
    projects: [
      { title: 'Customer Churn Classifier', description: 'Predict attrition with evaluated ML pipelines.', tags: ['Python', 'ML', 'scikit-learn'] },
      { title: 'NLP Sentiment / Ticket Classifier', description: 'Classify text for support or CX insights.', tags: ['NLP', 'Python'] },
      { title: 'Demand Forecasting Mini-Model', description: 'Lightweight forecasting for planning use-cases.', tags: ['Time series', 'ML'] },
      { title: 'RAG Knowledge Assistant', description: 'Prototype retrieval + LLM answers over docs.', tags: ['GenAI', 'RAG'] },
      { title: 'ML Capstone Portfolio', description: 'End-to-end problem → model → demo narrative.', tags: ['Capstone', 'MLOps'] },
    ],
    tools: [
      tool('Python', LOGO.python),
      tool('Pandas', LOGO.pandas),
      tool('Jupyter', LOGO.jupyter),
      tool('TensorFlow', LOGO.tensorflow),
      tool('SQL', LOGO.sql),
      tool('scikit-learn'),
      tool('PyTorch'),
      tool('OpenAI / LLMs'),
      tool('LangChain / RAG'),
      tool('MLflow'),
      tool('AWS SageMaker'),
      tool('Azure ML'),
    ],
    toolsSubtitle:
      'Market-standard AI stack: Python data science toolkit, classical + deep learning libraries, GenAI / RAG tooling, and cloud ML platforms used in corporate AI academies.',
    faqExtras: {
      whatIs:
        'A hands-on AI & Machine Learning pathway covering classical ML, deep learning/NLP starters, Generative AI & RAG, and MLOps awareness — matching what leading corporate AI trainers sell today.',
      whoForBullets: [
        'Aspiring ML / AI engineers and data scientists',
        'Developers moving into applied AI',
        'Corporate teams building GenAI and ML capability',
      ],
      stack:
        'Python, Pandas, SQL, scikit-learn, TensorFlow/Keras, GenAI/RAG tooling, experiment tracking, and cloud ML platform awareness (AWS / Azure). Stacks can be customized per cohort.',
    },
  },

  {
    slug: 'business-analytics',
    name: 'Business Analytics',
    audience: 'Individual / Corporate',
    duration: '3–4 Months',
    seoDescription:
      'Business Analytics training with SQL, Excel, Power BI, Tableau, Python for analysis, KPI design, and executive storytelling.',
    heroDescription:
      'Learn Business Analytics the way enterprises buy it: SQL + spreadsheets, Power BI / Tableau dashboards, Python for analysis, KPI frameworks, and stakeholder storytelling that turns data into decisions.',
    curriculumTitle: 'Business Analytics',
    curriculumDescription:
      'Role-ready analytics skills sold across corporate academies and campus programs — problem framing, querying, visualization, and insight delivery.',
    highlights: [
      { title: 'SQL + BI fluency', text: 'Query, model, and visualize operational data with tools recruiters expect.' },
      { title: 'KPI & decision design', text: 'Measure what matters — funnels, revenue, ops, and CX metrics.' },
      { title: 'Dashboard storytelling', text: 'Build Power BI / Tableau narratives leaders act on.' },
      { title: 'Python for analysts', text: 'Automate cleaning and analysis where spreadsheets stop.' },
      { title: 'Business case practice', text: 'Recommend actions with evidence, not just charts.' },
    ],
    modules: [
      {
        title: 'Analytics Foundations & KPIs',
        description: 'Frame problems like a business analyst.',
        topics: ['Business problem framing', 'KPI trees & OKRs', 'Data literacy', 'Requirements & stakeholder maps', 'Insight brief writing'],
      },
      {
        title: 'SQL for Business Analysts',
        description: 'Industry-standard querying depth.',
        topics: ['SELECT to window functions', 'Joins & CTEs', 'Aggregations & cohorts', 'Data quality checks', 'Warehouse / semantic layer awareness'],
      },
      {
        title: 'Excel & Analytical Modelling',
        description: 'Still the most-used analyst toolkit.',
        topics: ['Advanced Excel', 'Lookups & pivots', 'What-if scenarios', 'Financial / ops models', 'Clean datasets for BI'],
      },
      {
        title: 'Power BI & Tableau Storytelling',
        description: 'What corporates put on every BA job description.',
        topics: ['Data models & relationships', 'DAX / calculated fields intro', 'Dashboard UX', 'Executive packs', 'Publish & refresh habits'],
      },
      {
        title: 'Python & Capstone Insights',
        description: 'Automate analysis and ship a portfolio case.',
        topics: ['Python + Pandas for analysts', 'Exploratory workflows', 'Lightweight stats', 'Capstone dashboard + memo', 'Interview case drills'],
      },
    ],
    projects: [
      { title: 'Sales Performance Dashboard', description: 'Revenue, region, and product KPI views.', tags: ['Power BI', 'KPI'] },
      { title: 'Marketing Funnel Analysis', description: 'Diagnose conversion drop-offs in SQL.', tags: ['SQL', 'Analytics'] },
      { title: 'Ops Efficiency Report', description: 'Cost and process insight memo.', tags: ['Excel', 'SQL'] },
      { title: 'Cohort Retention Story', description: 'Visualize retention and LTV signals.', tags: ['Tableau', 'SQL'] },
      { title: 'Executive Insight Capstone', description: 'Recommend actions with evidence pack.', tags: ['Capstone', 'Storytelling'] },
    ],
    tools: [
      tool('SQL', LOGO.sql),
      tool('Power BI', LOGO.powerbi),
      tool('Python', LOGO.python),
      tool('Pandas', LOGO.pandas),
      tool('Excel'),
      tool('Tableau'),
      tool('Google BigQuery'),
      tool('Looker / Looker Studio'),
      tool('Statistics'),
      tool('Data Modelling'),
    ],
    toolsSubtitle:
      'Stacks used in market BA programs: SQL, Excel, Power BI, Tableau, Python/Pandas, and modern warehouse / BI platforms.',
  },

  {
    slug: 'cloud-computing',
    name: 'Cloud Computing',
    audience: 'Individual / Corporate',
    duration: '3–5 Months',
    seoDescription:
      'Cloud Computing training across AWS, Azure, GCP fundamentals, IAM, networking, containers, Terraform, and FinOps-aware architecture.',
    heroDescription:
      'Build multi-cloud fluency sold by every serious cloud academy: AWS / Azure / GCP core services, IAM, networking, compute & storage, containers, Infrastructure as Code, and cost-aware (FinOps) design — with sandboxes and labs.',
    curriculumTitle: 'Cloud Computing',
    curriculumDescription:
      'Vendor-aware but role-practical — architect and engineer skills markets train for: migrate, secure, deploy, and operate.',
    highlights: [
      { title: 'AWS · Azure · GCP literacy', text: 'Core services and mental models across the big three clouds.' },
      { title: 'Secure-by-default habits', text: 'IAM, network controls, and shared-responsibility fluency.' },
      { title: 'Containers & modern deploy', text: 'Docker/Kubernetes awareness tied to cloud platforms.' },
      { title: 'IaC foundations', text: 'Terraform / CloudFormation-style automation mindset.' },
      { title: 'FinOps awareness', text: 'Design with cost, rightsizing, and tagging in mind.' },
    ],
    modules: [
      {
        title: 'Cloud Fundamentals',
        description: 'Shared concepts every cloud hire must know.',
        topics: ['IaaS / PaaS / SaaS', 'Regions & availability', 'Shared responsibility', 'Identity & IAM', 'Pricing & billing basics'],
      },
      {
        title: 'Compute, Storage & Networking',
        description: 'Building blocks of production architectures.',
        topics: ['VMs & managed compute', 'Object / block / file storage', 'VPC, subnets, security groups', 'Load balancing & CDN', 'Hybrid connectivity overview'],
      },
      {
        title: 'AWS Path Deep Dive',
        description: 'Most-requested corporate cloud track.',
        topics: ['EC2, S3, RDS, IAM', 'VPC design patterns', 'Lambda overview', 'CloudWatch basics', 'SAA-aligned labs'],
      },
      {
        title: 'Azure & GCP Essentials',
        description: 'Multi-cloud readiness enterprises ask for.',
        topics: ['Azure VMs, Storage, Entra ID', 'Azure networking basics', 'GCP Compute / GCS / IAM', 'Compare service maps', 'Migration awareness'],
      },
      {
        title: 'Containers, IaC & Capstone',
        description: 'Deploy the modern way.',
        topics: ['Docker fundamentals', 'Kubernetes overview (EKS/AKS/GKE)', 'Terraform intro', 'CI/CD to cloud', 'Capstone multi-tier deploy'],
      },
    ],
    projects: [
      { title: 'Secure 3-Tier Web App', description: 'Deploy with IAM-aware access patterns.', tags: ['AWS', 'VPC'] },
      { title: 'Storage & Backup Design', description: 'Durable storage with lifecycle rules.', tags: ['S3', 'Ops'] },
      { title: 'IaC Starter Stack', description: 'Provision core resources with Terraform.', tags: ['Terraform'] },
      { title: 'Containerized Service', description: 'Package and run on cloud container service.', tags: ['Docker', 'K8s'] },
      { title: 'Cost & Tagging Audit', description: 'Apply FinOps hygiene to a sample account.', tags: ['FinOps'] },
    ],
    tools: [
      tool('AWS', LOGO.aws),
      tool('Linux', LOGO.linux),
      tool('Python', LOGO.python),
      tool('Microsoft Azure'),
      tool('Google Cloud'),
      tool('Docker'),
      tool('Kubernetes'),
      tool('Terraform'),
      tool('CloudFormation / Bicep'),
      tool('Ansible'),
      tool('IAM / Entra ID'),
      tool('FinOps'),
    ],
    toolsSubtitle:
      'Stacks corporates buy cloud training for: AWS, Azure, GCP, Docker, Kubernetes, Terraform, IAM, and FinOps practices.',
  },

  {
    slug: 'cybersecurity',
    name: 'Cybersecurity',
    audience: 'Individual / Corporate',
    duration: '3–5 Months',
    seoDescription:
      'Cybersecurity training covering threat modelling, network & cloud security, vulnerability management, SIEM basics, DevSecOps, and compliance awareness.',
    heroDescription:
      'Defensive security skills markets hire for: threat modelling, hardening, vulnerability management, cloud security posture, SIEM / detection basics, incident response, and DevSecOps / compliance awareness — with scenario labs.',
    curriculumTitle: 'Cybersecurity',
    highlights: [
      { title: 'Defend-first skills', text: 'Controls, hardening, and detection — not just tool names.' },
      { title: 'Cloud security posture', text: 'IAM risks, misconfigurations, and shared-responsibility practice.' },
      { title: 'DevSecOps intro', text: 'SAST/DAST awareness and secure SDLC habits for engineering teams.' },
      { title: 'Incident readiness', text: 'Playbooks, tabletop drills, and evidence handling basics.' },
      { title: 'Compliance literacy', text: 'Map controls to ISO 27001 / SOC 2 / privacy themes.' },
    ],
    modules: [
      {
        title: 'Security Foundations',
        description: 'Language of modern security programs.',
        topics: ['CIA triad & risk', 'Attack kill-chain overview', 'Asset & data classification', 'Policy & control types', 'Zero-trust concepts'],
      },
      {
        title: 'Network, Endpoint & Identity',
        description: 'Where most breaches start.',
        topics: ['Network segmentation basics', 'Firewalls & VPN overview', 'Endpoint hardening', 'IAM / MFA / least privilege', 'Password & secrets hygiene'],
      },
      {
        title: 'Vulnerability & App Security',
        description: 'Find and fix before attackers do.',
        topics: ['Vuln scanning intro', 'OWASP Top 10 awareness', 'Secure coding habits', 'SAST / DAST overview', 'Patch & prioritization'],
      },
      {
        title: 'Cloud Security & Detection',
        description: 'What enterprises upskill for in 2025.',
        topics: ['Cloud misconfig patterns', 'CSPM awareness', 'Logging & SIEM basics', 'Alert triage habits', 'Threat intel overview'],
      },
      {
        title: 'IR, Compliance & Capstone',
        description: 'Respond and prove control.',
        topics: ['Incident response lifecycle', 'Tabletop exercises', 'ISO / SOC themes', 'Evidence & audit trails', 'Security capstone scenario'],
      },
    ],
    projects: [
      { title: 'Threat Model Canvas', description: 'Map risks for a sample application.', tags: ['Threat model'] },
      { title: 'Hardening Baseline', description: 'Apply identity and host controls checklist.', tags: ['Hardening'] },
      { title: 'Vuln Triage Drill', description: 'Prioritize findings like a SOC / AppSec team.', tags: ['Vuln Mgmt'] },
      { title: 'Detection Playbook', description: 'Draft alerts → investigate → escalate steps.', tags: ['SIEM', 'IR'] },
      { title: 'Compliance Control Map', description: 'Link policies to measurable controls.', tags: ['Compliance'] },
    ],
    tools: [
      tool('Linux', LOGO.linux),
      tool('AWS', LOGO.aws),
      tool('Python', LOGO.python),
      tool('Wireshark'),
      tool('Nmap'),
      tool('OWASP ZAP'),
      tool('Nessus / Qualys'),
      tool('SIEM (Splunk / Sentinel)'),
      tool('Burp Suite'),
      tool('Crowdstrike / EDR'),
      tool('IAM / MFA'),
      tool('ISO 27001 / SOC 2'),
    ],
    toolsSubtitle:
      'Security stack themes sold in market programs: hardening tools, vulnerability scanners, SIEM, cloud posture, and compliance frameworks.',
  },

  {
    slug: 'devops',
    name: 'DevOps',
    audience: 'Individual / Corporate',
    duration: '3–5 Months',
    seoDescription:
      'DevOps training with Git, CI/CD (Jenkins, GitHub Actions), Docker, Kubernetes, Terraform, Ansible, and observability basics.',
    heroDescription:
      'Ship like modern platform teams: Git workflows, CI/CD pipelines, Docker & Kubernetes, Infrastructure as Code (Terraform / Ansible), release strategies, and observability — the stack every DevOps academy markets.',
    curriculumTitle: 'DevOps Engineering',
    highlights: [
      { title: 'CI/CD that ships', text: 'Automate build, test, and deploy with pipeline patterns teams run daily.' },
      { title: 'Containers & orchestration', text: 'Docker depth plus Kubernetes fundamentals (CKA-aware).' },
      { title: 'IaC automation', text: 'Terraform and config management for repeatable environments.' },
      { title: 'SRE-minded ops', text: 'Monitoring, alerting, and rollback habits.' },
      { title: 'Cloud-native delivery', text: 'Connect pipelines to AWS / Azure / GCP targets.' },
    ],
    modules: [
      {
        title: 'DevOps Culture & Git',
        description: 'Foundations of collaborative delivery.',
        topics: ['DevOps / SRE principles', 'Git branching strategies', 'Code review rituals', 'Environments (dev/stage/prod)', 'Artifact mindset'],
      },
      {
        title: 'CI/CD Pipelines',
        description: 'Most-requested corporate DevOps skill.',
        topics: ['Pipeline design', 'Jenkins pipelines', 'GitHub Actions / GitLab CI', 'Test automation gates', 'Release strategies & rollback'],
      },
      {
        title: 'Docker & Kubernetes',
        description: 'Container platforms markets train for.',
        topics: ['Dockerfile best practices', 'Compose for local stacks', 'Pods, services, deployments', 'Helm overview', 'EKS / AKS / GKE awareness'],
      },
      {
        title: 'IaC & Configuration',
        description: 'Automate infrastructure safely.',
        topics: ['Terraform core', 'State & modules intro', 'Ansible basics', 'Secrets management habits', 'Policy as code overview'],
      },
      {
        title: 'Observability & Capstone',
        description: 'Operate what you ship.',
        topics: ['Metrics, logs, traces', 'Prometheus / Grafana intro', 'Incident response habits', 'SLOs overview', 'Capstone end-to-end pipeline'],
      },
    ],
    projects: [
      { title: 'CI Pipeline for a Sample App', description: 'Build → test → artifact automation.', tags: ['Jenkins', 'Actions'] },
      { title: 'Containerize a Microservice', description: 'Dockerize and run with Compose.', tags: ['Docker'] },
      { title: 'K8s Deploy Walkthrough', description: 'Deploy/redeploy with manifests.', tags: ['Kubernetes'] },
      { title: 'Terraform Environment', description: 'Provision network + compute baseline.', tags: ['Terraform'] },
      { title: 'Observability Starter', description: 'Dashboards and alert rules for a service.', tags: ['Grafana'] },
    ],
    tools: [
      tool('Linux', LOGO.linux),
      tool('AWS', LOGO.aws),
      tool('Python', LOGO.python),
      tool('Docker'),
      tool('Kubernetes'),
      tool('Jenkins'),
      tool('GitHub Actions'),
      tool('GitLab CI'),
      tool('Terraform'),
      tool('Ansible'),
      tool('Prometheus'),
      tool('Grafana'),
      tool('Argo CD'),
      tool('Helm'),
    ],
    toolsSubtitle:
      'Stacks sold across DevOps bootcamps: Docker, Kubernetes, Jenkins/GitHub Actions, Terraform, Ansible, and Prometheus/Grafana.',
  },

  {
    slug: 'digital-transformation',
    name: 'Digital Transformation',
    audience: 'Corporate',
    duration: '2–4 Months',
    seoDescription:
      'Digital Transformation training for leaders and teams — value streams, process digitization, data platforms, change management, and adoption KPIs.',
    heroDescription:
      'Lead digital change with frameworks enterprises buy: operating-model redesign, process digitization, data & platform thinking, automation opportunities, change management, and measurable adoption — not buzzword workshops.',
    curriculumTitle: 'Digital Transformation',
    highlights: [
      { title: 'Outcome-led roadmaps', text: 'Tie initiatives to revenue, cost, risk, and customer KPIs.' },
      { title: 'Process + tech + people', text: 'Balance tools with operating model and capability building.' },
      { title: 'Data as an asset', text: 'Prioritize analytics, automation, and decisioning use-cases.' },
      { title: 'Change that sticks', text: 'Adoption plans, sponsorship, and resistance handling.' },
      { title: 'Governance & value tracking', text: 'Stage gates, portfolios, and benefit realization.' },
    ],
    modules: [
      {
        title: 'Transformation Strategy',
        topics: ['Vision & north-star metrics', 'Value stream mapping', 'Portfolio & stage gates', 'Quick wins vs foundations', 'Stakeholder power maps'],
      },
      {
        title: 'Process Digitization & Platforms',
        topics: ['Process redesign', 'Automation opportunity maps', 'Workflow / RPA awareness', 'Integration & API thinking', 'Customer journey digitization'],
      },
      {
        title: 'Data, AI & Decisioning',
        topics: ['Data platforms overview', 'Analytics use-case backlog', 'AI opportunity filters', 'Dashboards for leaders', 'Risk & ethics lenses'],
      },
      {
        title: 'Change, Skills & Governance',
        topics: ['Change management models', 'Skills academies', 'Comms cascades', 'Vendor & partner ecosystems', 'Benefit tracking'],
      },
      {
        title: 'Capstone Transformation Case',
        topics: ['Current vs target model', '90-day adoption plan', 'Investment case', 'Risk register', 'Executive narrative'],
      },
    ],
    projects: [
      { title: 'Transformation Canvas', description: 'Current vs target operating model.', tags: ['Strategy'] },
      { title: 'Automation Opportunity Map', description: 'Prioritize process digitization cases.', tags: ['Process'] },
      { title: 'Data / AI Use-Case Backlog', description: 'Rank decisioning opportunities.', tags: ['Data'] },
      { title: 'Change & Adoption Plan', description: 'Enablement, sponsors, and communication.', tags: ['Change'] },
      { title: 'Board-Ready Narrative', description: 'Tell the value story with KPIs.', tags: ['Exec'] },
    ],
    tools: [
      tool('Power BI', LOGO.powerbi),
      tool('Process Mapping'),
      tool('OKR / KPI Frameworks'),
      tool('Value Stream Mapping'),
      tool('RPA Awareness'),
      tool('CRM / ERP Lenses'),
      tool('Change Models (ADKAR etc.)'),
      tool('Portfolio Governance'),
      tool('Agile Delivery'),
      tool('Customer Journey Maps'),
    ],
    toolsTitle: 'Frameworks &',
    toolsAccent: 'Methods Used',
    toolsSubtitle: 'Methods and decision tools used in market digital transformation programs for leaders and transformation offices.',
  },

  {
    slug: 'project-management',
    name: 'Project Management',
    audience: 'Corporate',
    duration: '2–3 Months',
    seoDescription:
      'Project Management training covering PMI-aligned planning, Agile delivery, risk, stakeholders, and tools like Jira, MS Project, and Confluence.',
    heroDescription:
      'Deliver with clarity using skills PMO and training markets sell: planning & scheduling, risk & issue control, stakeholder communication, hybrid Agile-Waterfall delivery, and tooling (Jira / boards / RAID).',
    curriculumTitle: 'Project Management',
    highlights: [
      { title: 'Plan with discipline', text: 'Scope, WBS, schedule, and resource realism.' },
      { title: 'Hybrid delivery fluency', text: 'Waterfall rigor plus Agile ceremonies where they fit.' },
      { title: 'Risk & change control', text: 'RAID logs, escalation, and scope hygiene.' },
      { title: 'Stakeholder communication', text: 'Status packs executives actually read.' },
      { title: 'Tooling ready', text: 'Jira / boards / Confluence / reporting habits.' },
    ],
    modules: [
      {
        title: 'Initiating & Planning',
        topics: ['Charters & success criteria', 'WBS & estimation', 'Schedules & critical path', 'Resource & budget basics', 'Quality planning'],
      },
      {
        title: 'Execution & Monitoring',
        topics: ['Status rituals', 'Issue & action tracking', 'Change control boards', 'Vendor coordination', 'Quality gates'],
      },
      {
        title: 'Agile & Hybrid Delivery',
        topics: ['Scrum roles & events', 'Backlogs & sprint goals', 'Kanban flow', 'Hybrid program patterns', 'Definition of Done'],
      },
      {
        title: 'Risk, Stakeholders & Close',
        topics: ['Risk registers', 'Stakeholder mapping', 'Executive reporting', 'Benefits tracking', 'Lessons learned'],
      },
      {
        title: 'Tools Lab & Capstone',
        topics: ['Jira / Azure Boards', 'Confluence / docs', 'RAID & dashboards', 'Sample plan pack', 'Capstone delivery case'],
      },
    ],
    projects: [
      { title: 'Full Project Plan Pack', description: 'Charter, schedule, and RACI.', tags: ['Planning'] },
      { title: 'RAID & Risk Walkthrough', description: 'Proactive risk practice.', tags: ['Risk'] },
      { title: 'Agile Sprint Simulation', description: 'Plan → execute → review cycle.', tags: ['Agile'] },
      { title: 'Executive Status Kit', description: 'Traffic-light reporting pack.', tags: ['Comms'] },
      { title: 'Closeout & Lessons Learned', description: 'Handover and improvement loop.', tags: ['Close'] },
    ],
    tools: [
      tool('Jira / Azure Boards'),
      tool('Confluence / Notion'),
      tool('MS Project / Planner'),
      tool('Excel / Sheets'),
      tool('Power BI', LOGO.powerbi),
      tool('RAID Logs'),
      tool('RACI'),
      tool('Scrum / Kanban'),
      tool('Risk Matrices'),
      tool('Stakeholder Maps'),
    ],
    toolsTitle: 'PM Tools &',
    toolsAccent: 'Methods',
  },

  {
    slug: 'leadership-development',
    name: 'Leadership Development',
    audience: 'Corporate',
    duration: '2–3 Months',
    seoDescription:
      'Leadership Development for emerging and mid-level leaders — coaching, feedback, execution rituals, influence, and team performance.',
    heroDescription:
      'Grow leaders with capabilities corporates invest in: self-leadership, coaching conversations, performance feedback, priority & decision hygiene, cross-team influence, and execution rituals that raise team results.',
    curriculumTitle: 'Leadership Development',
    highlights: [
      { title: 'Lead self first', text: 'Priorities, energy, and decision quality under load.' },
      { title: 'Coach, don’t just manage', text: '1:1s, feedback, and growth conversations that stick.' },
      { title: 'Execution systems', text: 'Goals, cadences, and accountabilities that deliver.' },
      { title: 'Influence without drama', text: 'Stakeholder mapping and aligned communication.' },
      { title: 'Practice labs', text: 'Role-plays and leadership cases, not lectures only.' },
    ],
    modules: [
      {
        title: 'Lead Self',
        topics: ['Self-awareness & strengths', 'Priority management', 'Decision hygiene', 'Personal operating system', 'Resilience habits'],
      },
      {
        title: 'Lead Others',
        topics: ['Coaching frameworks', 'Feedback models', 'Delegation', 'Conflict skills', 'Psychological safety'],
      },
      {
        title: 'Lead Results',
        topics: ['Goal cascades / OKRs', 'Meeting & cadence design', 'Cross-functional delivery', 'Performance systems', 'Talent development'],
      },
      {
        title: 'Influence & Change',
        topics: ['Stakeholder influence', 'Narratives for change', 'Negotiation basics', 'Executive presence', 'Sponsorship'],
      },
      {
        title: 'Leadership Capstone',
        topics: ['90-day leadership plan', 'Team operating system', 'Difficult conversation lab', 'Peer coaching', 'Manager sponsorship briefing'],
      },
    ],
    projects: [
      { title: 'Personal Leadership Plan', description: '90-day growth roadmap.', tags: ['Self'] },
      { title: 'Team Cadence Design', description: 'Rituals that improve delivery.', tags: ['Team'] },
      { title: 'Feedback & Coaching Lab', description: 'Practice high-stakes dialogues.', tags: ['Coach'] },
      { title: 'Stakeholder Influence Map', description: 'Align on a contested initiative.', tags: ['Influence'] },
      { title: 'OKR Cascade Draft', description: 'Connect strategy to team goals.', tags: ['OKR'] },
    ],
    tools: [
      tool('OKR / KPI Frameworks'),
      tool('GROW Coaching'),
      tool('SBI Feedback'),
      tool('RACI'),
      tool('Meeting Cadences'),
      tool('360 Insights'),
      tool('Change Models'),
      tool('Stakeholder Maps'),
      tool('Performance Dialogues'),
      tool('Action Learning'),
    ],
    toolsTitle: 'Leadership',
    toolsAccent: 'Toolkits',
  },

  {
    slug: 'soft-skills',
    name: 'Soft Skills',
    audience: 'Corporate / Individual',
    duration: '4–8 Weeks',
    seoDescription:
      'Soft Skills training — business communication, presentations, collaboration, emotional intelligence, and interview-ready professional presence.',
    heroDescription:
      'Workplace soft skills the market sells for campus and corporate: business writing, presentation presence, meeting facilitation, collaboration & EQ, and interview storytelling — with practice labs.',
    curriculumTitle: 'Professional Soft Skills',
    highlights: [
      { title: 'Communication that lands', text: 'Clear writing, crisp speaking, and structured thinking.' },
      { title: 'Collaboration skills', text: 'EQ, teamwork, and conflict basics for hybrid workplaces.' },
      { title: 'Presentation presence', text: 'Slide craft and delivery under pressure.' },
      { title: 'Career confidence', text: 'Interview narratives and professional branding.' },
      { title: 'Practice over theory', text: 'Recorded drills and facilitator feedback.' },
    ],
    modules: [
      {
        title: 'Business Communication',
        topics: ['Email & memo craft', 'Meeting presence', 'Active listening', 'Assertive language', 'Cross-culture basics'],
      },
      {
        title: 'Presentation & Storytelling',
        topics: ['Story structures', 'Visual clarity', 'Demo / pitch delivery', 'Handling Q&A', 'Virtual presentation'],
      },
      {
        title: 'Collaboration & EQ',
        topics: ['Teamwork habits', 'Empathy at work', 'Conflict conversations', 'Give/receive feedback', 'Hybrid collaboration'],
      },
      {
        title: 'Career Presence',
        topics: ['Personal branding', 'Interview storytelling', 'Networking conversations', 'LinkedIn polish', 'Professional etiquette'],
      },
      {
        title: 'Practice Labs & Capstone',
        topics: ['Recorded speaking drills', 'Mock client call', 'Case presentation', 'Peer feedback', 'Personal action plan'],
      },
    ],
    projects: [
      { title: 'Elevator Pitch', description: '60-second professional introduction.', tags: ['Comms'] },
      { title: 'Business Email Makeover', description: 'Rewrite for clarity and tone.', tags: ['Writing'] },
      { title: 'Meeting Facilitation', description: 'Run a crisp 20-minute session.', tags: ['Facilitate'] },
      { title: 'Case Presentation', description: 'Present insights with structure.', tags: ['Present'] },
      { title: 'Interview Story Bank', description: 'STAR stories for common prompts.', tags: ['Interview'] },
    ],
    tools: [
      tool('STAR Method'),
      tool('Presentation Frameworks'),
      tool('Business Writing Models'),
      tool('EQ Frameworks'),
      tool('Feedback Models'),
      tool('Video Practice Labs'),
      tool('LinkedIn'),
      tool('Meeting Design'),
      tool('Storyboarding'),
      tool('Peer Review Rubrics'),
    ],
    toolsTitle: 'Skills &',
    toolsAccent: 'Practice Methods',
  },

  {
    slug: 'agile-scrum',
    name: 'Agile & Scrum',
    audience: 'Corporate',
    duration: '4–8 Weeks',
    seoDescription:
      'Agile & Scrum training — Scrum roles and events, backlog management, Kanban, metrics, and Jira-based delivery practice.',
    heroDescription:
      'Adopt Agile ways of working sold across corporate Agile academies: Scrum roles & events, backlog craft, sprint delivery, Kanban flow, team metrics, and tool practice in Jira / boards.',
    curriculumTitle: 'Agile & Scrum',
    highlights: [
      { title: 'Scrum done right', text: 'Roles, events, and artifacts without cargo-cult ceremony.' },
      { title: 'Backlog quality', text: 'Stories, acceptance criteria, and prioritization.' },
      { title: 'Flow metrics', text: 'Velocity, WIP, and cycle time for improvement.' },
      { title: 'Kanban options', text: 'When boards beat sprints for ops/support teams.' },
      { title: 'Tooling fluency', text: 'Jira / Azure Boards habits teams actually use.' },
    ],
    modules: [
      {
        title: 'Agile Mindset',
        topics: ['Agile values & principles', 'Lean thinking', 'Customer feedback loops', 'Team ownership', 'Anti-patterns'],
      },
      {
        title: 'Scrum in Depth',
        topics: ['Roles (PO/SM/Dev)', 'Events & timeboxes', 'Product backlog', 'Sprint goal & DoD', 'Increment quality'],
      },
      {
        title: 'Planning & Estimation',
        topics: ['User stories', 'Story points', 'Refinement', 'Release planning', 'Dependency management'],
      },
      {
        title: 'Kanban & Metrics',
        topics: ['Kanban principles', 'WIP limits', 'Cycle time', 'Burndown / CFD basics', 'Retrospective techniques'],
      },
      {
        title: 'Tooling Lab & Simulation',
        topics: ['Jira / Azure Boards', 'Dashboards', 'Impediment handling', 'Multi-team awareness', 'Sprint simulation capstone'],
      },
    ],
    projects: [
      { title: 'Backlog Crafting Lab', description: 'Write and prioritize user stories.', tags: ['Scrum'] },
      { title: 'Sprint Simulation', description: 'Full plan → review → retro cycle.', tags: ['Agile'] },
      { title: 'Kanban Board Design', description: 'Flow system for an ops team.', tags: ['Kanban'] },
      { title: 'Metrics Board', description: 'Track delivery health indicators.', tags: ['Metrics'] },
      { title: 'Agile Working Agreement', description: 'Team norms and DoD pack.', tags: ['Team'] },
    ],
    tools: [
      tool('Jira / Azure Boards'),
      tool('Confluence'),
      tool('Scrum'),
      tool('Kanban'),
      tool('Story Mapping'),
      tool('Planning Poker'),
      tool('Burndown / CFD'),
      tool('Miro / FigJam'),
      tool('DoR / DoD'),
      tool('SAFe Awareness'),
    ],
    toolsTitle: 'Agile Tools &',
    toolsAccent: 'Practices',
  },

  {
    slug: 'custom-learning-programs',
    name: 'Custom Learning Programs',
    audience: 'Enterprise',
    duration: 'Flexible',
    seoDescription:
      'Custom corporate learning design — competency maps, stack-specific curricula, blended delivery, assessments, and ROI reporting.',
    heroDescription:
      'Design bespoke academies the way enterprise L&D buyers expect: competency mapping, stack-specific curricula, blended delivery, assessments, mentoring models, and measurable capability lift — not off-the-shelf catalogs.',
    curriculumTitle: 'Custom Learning',
    curriculumAccent: 'Design',
    highlights: [
      { title: 'Built on your stack', text: 'Train on the tools, cloud, and processes your teams already run.' },
      { title: 'Role competency maps', text: 'Link learning to job families and KPIs.' },
      { title: 'Blended delivery', text: 'Live, lab, cohort, and microlearning mixes that fit work calendars.' },
      { title: 'Assessment & evidence', text: 'Prove skill with projects and scores, not attendance only.' },
      { title: 'Scale with quality', text: 'Trainer kits, pilots, and governance for multi-cohort rollouts.' },
    ],
    modules: [
      {
        title: 'Discovery & Skill Mapping',
        topics: ['Stakeholder interviews', 'Role competency maps', 'Gap analysis', 'Success metrics / OKRs', 'Constraint & timeline design'],
      },
      {
        title: 'Curriculum Architecture',
        topics: ['Modular pathway design', 'Stack-specific labs', 'Assessment blueprints', 'Mentor / coach model', 'Content & SME plan'],
      },
      {
        title: 'Delivery Systems',
        topics: ['ILT / vILT design', 'Lab environments', 'LMS packaging', 'Manager involvement', 'Support SLAs'],
      },
      {
        title: 'Pilot, Measure, Scale',
        topics: ['Pilot cohort', 'Feedback loops', 'Learning analytics', 'Trainer enablement', 'Enterprise rollout'],
      },
      {
        title: 'Commercial & Capstone',
        topics: ['Statement of work shape', 'Pricing & packaging', 'Governance forums', 'ROI dashboards', 'Capstone academy blueprint'],
      },
    ],
    projects: [
      { title: 'Competency Matrix', description: 'Map skills to critical roles.', tags: ['Design'] },
      { title: 'Pathway Blueprint', description: 'Modular curriculum for one job family.', tags: ['Curriculum'] },
      { title: 'Assessment Pack', description: 'Project + quiz evidence model.', tags: ['Assess'] },
      { title: 'Pilot Cohort Plan', description: '90-day enabling batch.', tags: ['Delivery'] },
      { title: 'Impact Dashboard Spec', description: 'Define L&D success metrics.', tags: ['ROI'] },
    ],
    tools: [
      tool('Competency Frameworks'),
      tool('LMS / LXP'),
      tool('Skill Taxonomies'),
      tool('Assessment Design'),
      tool('Learning Analytics'),
      tool('Blended Models'),
      tool('Trainer Kits'),
      tool('Manager Dashboards'),
      tool('ROI / Kirkpatrick Lenses'),
      tool('Stack Labs (custom)'),
    ],
    toolsTitle: 'L&D Stack &',
    toolsAccent: 'Design Methods',
  },

  {
    slug: 'workforce-upskilling',
    name: 'Workforce Upskilling',
    audience: 'Enterprise',
    duration: 'Flexible',
    seoDescription:
      'Workforce upskilling programs — multi-cohort academies, tech + business tracks, progress tracking, mentors, and capability outcomes.',
    heroDescription:
      'Upskill teams at scale with the model enterprises buy: prioritized capability plans, multi-track academies (tech + business), mentor-supported cohorts, assessments, and manager-visible progress — continuous skill building, not one-off workshops.',
    curriculumTitle: 'Workforce Upskilling',
    highlights: [
      { title: 'Business-tied skill plans', text: 'Prioritize capabilities that move KPIs.' },
      { title: 'Multi-track academies', text: 'Run cloud, data, AI, and leadership paths in parallel.' },
      { title: 'Cohort operations', text: 'Attendance, labs, mentorship, and completion hygiene.' },
      { title: 'Manager involvement', text: 'Dashboards and coaching prompts for line leaders.' },
      { title: 'Sustain & refresh', text: 'Re-skilling cycles as stacks evolve.' },
    ],
    modules: [
      {
        title: 'Capability Planning',
        topics: ['Business goal → skill translation', 'Skill taxonomy', 'Cohort design', 'Budget & timeline', 'Vendor / internal mix'],
      },
      {
        title: 'Academy Delivery',
        topics: ['Live + lab tracks', 'Mentor check-ins', 'Assessments', 'Project evidence', 'Office hours'],
      },
      {
        title: 'Tech Tracks Overview',
        topics: ['Cloud / DevOps tracks', 'Data / AI tracks', 'App / full-stack tracks', 'Security tracks', 'Stack customization'],
      },
      {
        title: 'Business & Leadership Tracks',
        topics: ['Analytics fluency', 'Agile ways of working', 'Manager coaching', 'Soft skills', 'Change enablement'],
      },
      {
        title: 'Measure & Sustain',
        topics: ['Progress insights', 'Skill evidence portfolios', 'Certification pathways', 'Quarterly refresh', 'Center of excellence'],
      },
    ],
    projects: [
      { title: '90-Day Upskill Roadmap', description: 'Plan for one critical job family.', tags: ['Planning'] },
      { title: 'Cohort Playbook', description: 'Rituals that drive completion.', tags: ['Ops'] },
      { title: 'Manager Enablement Pack', description: 'Dashboards and coaching cues.', tags: ['Managers'] },
      { title: 'Skill Evidence Portfolio', description: 'Capture applied learning proofs.', tags: ['Outcomes'] },
      { title: 'Refresh Calendar', description: 'Quarterly stack update plan.', tags: ['Sustain'] },
    ],
    tools: [
      tool('Python', LOGO.python),
      tool('AWS', LOGO.aws),
      tool('Power BI', LOGO.powerbi),
      tool('Cloud Tracks'),
      tool('DevOps Tracks'),
      tool('AI / GenAI Tracks'),
      tool('LMS Progress'),
      tool('Skill Assessments'),
      tool('Mentor Ops'),
      tool('Manager Dashboards'),
    ],
  },

  {
    slug: 'leadership-training',
    name: 'Leadership Training',
    audience: 'Enterprise',
    duration: '2–3 Months',
    seoDescription:
      'Enterprise leadership training for managers and high-potentials — people leadership, execution systems, and organizational influence.',
    heroDescription:
      'Enterprise leadership training for managers and HiPos: people leadership systems, performance dialogues, execution discipline, cross-functional influence, and change sponsorship — practical cohorts with labs.',
    curriculumTitle: 'Leadership Training',
    highlights: [
      { title: 'Manager essentials', text: '1:1s, performance, and team climate.' },
      { title: 'Execution leadership', text: 'Goals, forums, and escalation without burnout.' },
      { title: 'Org impact', text: 'Lead beyond the org chart.' },
      { title: 'HiPo acceleration', text: 'Stretch cases and peer coaching.' },
      { title: 'Measurable behavior shift', text: 'Action plans and sponsor check-ins.' },
    ],
    modules: [
      {
        title: 'Manager Essentials',
        topics: ['Effective 1:1s', 'Performance conversations', 'Prioritization under load', 'Team climate', 'Hiring & onboarding inputs'],
      },
      {
        title: 'Execution Leadership',
        topics: ['Goal cascades', 'Operating rhythms', 'Cross-team alignment', 'Escalation paths', 'Decision forums'],
      },
      {
        title: 'People Development',
        topics: ['Coaching toolkit', 'Feedback culture', 'Succession signals', 'DEI-aware leadership', 'Motivation levers'],
      },
      {
        title: 'Organizational Influence',
        topics: ['Influence without authority', 'Change sponsorship', 'Stakeholder narratives', 'Conflict at scale', 'Partner ecosystems'],
      },
      {
        title: 'Leadership Capstone',
        topics: ['Team OS design', 'Case leadership lab', 'Sponsor briefing', '90-day plan', 'Peer coaching circle'],
      },
    ],
    projects: [
      { title: 'Team Operating System', description: 'Cadences and ownership design.', tags: ['Ops'] },
      { title: 'Performance Dialogue Kit', description: 'Practice high-quality feedback.', tags: ['People'] },
      { title: 'Cross-Team Initiative Case', description: 'Align contested priorities.', tags: ['Influence'] },
      { title: 'Change Sponsorship Brief', description: 'Lead a transformation slice.', tags: ['Change'] },
      { title: 'Personal Leadership Portfolio', description: 'Evidence of behavior change.', tags: ['Capstone'] },
    ],
    tools: [
      tool('OKR Cascades'),
      tool('1:1 Frameworks'),
      tool('Performance Systems'),
      tool('Coaching Models'),
      tool('Decision Forums'),
      tool('RACI / DACI'),
      tool('Change Sponsorship'),
      tool('Stakeholder Maps'),
      tool('Action Learning'),
      tool('HiPo Assessment Inputs'),
    ],
    toolsTitle: 'Leadership',
    toolsAccent: 'Systems',
  },

  {
    slug: 'compliance-training',
    name: 'Compliance Training',
    audience: 'Enterprise',
    duration: 'Flexible',
    seoDescription:
      'Compliance training — policy literacy, role-based scenarios, assessments, completion reporting, and audit-ready evidence.',
    heroDescription:
      'Compliance enablement enterprises require: understandable policy literacy, role-based decision scenarios, knowledge checks, completion reporting, and audit evidence — practical, scenario-rich, and reportable.',
    curriculumTitle: 'Compliance Training',
    highlights: [
      { title: 'Policy people understand', text: 'Microlearning that sticks beyond click-through.' },
      { title: 'Role-based scenarios', text: 'Decisions staff actually face on the job.' },
      { title: 'Assessment & re-cert', text: 'Proof of learning with recurring cycles.' },
      { title: 'Audit evidence', text: 'Completion, scores, and remediation trails.' },
      { title: 'Manager accountability', text: 'Escalation and team completion ownership.' },
    ],
    modules: [
      {
        title: 'Policy Literacy',
        topics: ['Code of conduct', 'Data privacy / GDPR themes', 'Workplace & anti-harassment', 'InfoSec essentials', 'Conflict of interest'],
      },
      {
        title: 'Role-Based Scenarios',
        topics: ['Decision simulations', 'Escalation choices', 'Vendor & third-party risks', 'Manager responsibilities', 'Documentation habits'],
      },
      {
        title: 'Industry / Domain Add-ons',
        topics: ['Financial services themes', 'Healthcare / PHI awareness', 'IT / Dev secure habits', 'Sales & gifts policies', 'Custom policy modules'],
      },
      {
        title: 'Delivery & Integrity',
        topics: ['Microlearning design', 'Assessment fairness', 'Accessibility', 'Localization options', 'Fraud / completeness checks'],
      },
      {
        title: 'Assurance & Reporting',
        topics: ['Completion dashboards', 'Re-certification cycles', 'Audit packs', 'Remediation paths', 'Capstone compliance blueprint'],
      },
    ],
    projects: [
      { title: 'Policy Microlearning Path', description: 'Short modules with checks.', tags: ['Content'] },
      { title: 'Scenario Assessment Pack', description: 'Decision-based questions.', tags: ['Assess'] },
      { title: 'Manager Escalation Guide', description: 'What to do when policy breaks.', tags: ['Manager'] },
      { title: 'Compliance Dashboard Spec', description: 'HR/legal reporting view.', tags: ['Report'] },
      { title: 'Audit Evidence Folder', description: 'What auditors expect to see.', tags: ['Audit'] },
    ],
    tools: [
      tool('LMS Completions'),
      tool('Scenario Assessments'),
      tool('Policy Portals'),
      tool('Privacy Frameworks'),
      tool('InfoSec Awareness'),
      tool('Re-cert Cycles'),
      tool('Audit Trails'),
      tool('Manager Dashboards'),
      tool('Whistleblower Awareness'),
      tool('ISO / SOC Themes'),
    ],
    toolsTitle: 'Compliance',
    toolsAccent: 'Enablement Stack',
  },

  {
    slug: 'executive-development',
    name: 'Executive Development',
    audience: 'Enterprise',
    duration: 'Flexible',
    seoDescription:
      'Executive development — strategic leadership, portfolio trade-offs, organizational alignment, and high-stakes communication.',
    heroDescription:
      'Executive development for senior leaders: strategic narratives, portfolio trade-offs, enterprise alignment, talent & culture levers, and high-stakes communication — cohort and coaching formats.',
    curriculumTitle: 'Executive Development',
    highlights: [
      { title: 'Strategy under ambiguity', text: 'Set direction with incomplete information.' },
      { title: 'Portfolio discipline', text: 'Trade-offs, capital, and focus.' },
      { title: 'Enterprise alignment', text: 'Connect functions around outcomes.' },
      { title: 'Executive presence', text: 'Board-ready and crisis-ready communication.' },
      { title: 'Peer councils', text: 'Learn with other leaders on live cases.' },
    ],
    modules: [
      {
        title: 'Strategic Leadership',
        topics: ['Strategy conversations', 'Portfolio trade-offs', 'Risk appetite', 'Board-ready narratives', 'Scenario planning'],
      },
      {
        title: 'Enterprise Alignment',
        topics: ['Operating models', 'Transformation sponsorship', 'Talent & culture levers', 'Partner ecosystems', 'Decision rights'],
      },
      {
        title: 'Capital & Value',
        topics: ['Investment logic', 'Unit economics literacy', 'Benefits realization', 'M&A awareness', 'Cost transformation'],
      },
      {
        title: 'Executive Presence',
        topics: ['High-stakes communication', 'Decision quality under scrutiny', 'Crisis posture', 'Media / board Q&A', 'Personal brand'],
      },
      {
        title: 'Leadership Capstone',
        topics: ['Enterprise case', '90-day priority portfolio', 'Peer council review', 'Coach integration', 'Sponsor alignment'],
      },
    ],
    projects: [
      { title: 'Strategy Narrative', description: 'Change story with clear trade-offs.', tags: ['Strategy'] },
      { title: 'Portfolio Decision Case', description: 'Fund / kill / defer choices.', tags: ['Portfolio'] },
      { title: 'Operating Model Sketch', description: 'Align structure to strategy.', tags: ['Org'] },
      { title: 'Crisis Communication Drill', description: 'Speak under pressure.', tags: ['Presence'] },
      { title: '90-Day Priority Portfolio', description: 'Executive focus system.', tags: ['Plan'] },
    ],
    tools: [
      tool('Strategy Frameworks'),
      tool('Portfolio Governance'),
      tool('Scenario Planning'),
      tool('OKR / Scorecards'),
      tool('Operating Model Canvases'),
      tool('Risk Appetite Tools'),
      tool('Board Pack Structures'),
      tool('Executive Coaching'),
      tool('Peer Councils'),
      tool('Crisis Playbooks'),
    ],
    toolsTitle: 'Executive',
    toolsAccent: 'Toolkits',
  },

  {
    slug: 'technology-employability',
    name: 'Technology Employability Program',
    audience: 'Institution',
    duration: 'Semester / Cohort',
    seoDescription:
      'Campus Technology Employability — programming, SQL, projects, aptitude, and interview readiness for tech placements.',
    heroDescription:
      'Prepare students for technology careers with the stack placement markets expect: programming foundations, SQL & problem solving, applied projects, aptitude drills, and technical + HR interview practice.',
    curriculumTitle: 'Technology Employability',
    highlights: [
      { title: 'Job-ready tech skills', text: 'Coding, SQL, and tooling recruiters test.' },
      { title: 'Portfolio projects', text: 'Evidence students can demo on campus drives.' },
      { title: 'Interview circuits', text: 'Technical + HR mocks with feedback.' },
      { title: 'Aptitude & DSA basics', text: 'Screening-round confidence.' },
      { title: 'Career packaging', text: 'Resume, LinkedIn, and story bank.' },
    ],
    modules: [
      {
        title: 'Programming & Problem Solving',
        topics: ['Language foundations (Python/Java)', 'DSA essentials', 'Debugging habits', 'Git basics', 'Coding assessments'],
      },
      {
        title: 'SQL & Data Literacy',
        topics: ['SQL querying', 'Relational thinking', 'Basic analytics', 'Data stories', 'Assignment labs'],
      },
      {
        title: 'Applied Tech Projects',
        topics: ['Mini full-stack / automation projects', 'Team delivery', 'Documentation', 'Demo readiness', 'Code reviews'],
      },
      {
        title: 'Web / Cloud Awareness',
        topics: ['HTTP & APIs overview', 'Frontend / backend basics', 'Cloud literacy', 'Linux intro', 'Security hygiene'],
      },
      {
        title: 'Placement Readiness',
        topics: ['Resume & LinkedIn', 'Aptitude drills', 'Technical interviews', 'HR / behavioral', 'Company targeting'],
      },
    ],
    projects: [
      { title: 'Coding Assessment Sprint', description: 'Timed problem-solving sets.', tags: ['DSA'] },
      { title: 'SQL Case Lab', description: 'Business questions answered in SQL.', tags: ['SQL'] },
      { title: 'Campus Capstone', description: 'Mentor-reviewed tech project.', tags: ['Project'] },
      { title: 'Mock Interview Circuit', description: 'Scored tech + HR rounds.', tags: ['Interview'] },
      { title: 'Career Portfolio Pack', description: 'Resume, GitHub, LinkedIn ready.', tags: ['Career'] },
    ],
    tools: [
      tool('Python', LOGO.python),
      tool('SQL', LOGO.sql),
      tool('Linux', LOGO.linux),
      tool('React', LOGO.react),
      tool('Node.js', LOGO.node),
      tool('Git / GitHub'),
      tool('Java'),
      tool('Postman / APIs'),
      tool('AWS Fundamentals', LOGO.aws),
      tool('LeetCode-style Practice'),
    ],
  },

  {
    slug: 'management-employability',
    name: 'Management Employability Program',
    audience: 'Institution',
    duration: 'Semester / Cohort',
    seoDescription:
      'Management Employability for campus — business foundations, Excel analytics, case methods, GD, and interview readiness.',
    heroDescription:
      'Build management and business readiness for placement: business foundations, Excel / analytics, case methods, communication, group discussions, and assessment-center style practice.',
    curriculumTitle: 'Management Employability',
    highlights: [
      { title: 'Business fluency', text: 'How orgs create and measure value.' },
      { title: 'Case & analysis skills', text: 'Structure recommendations like consulting drills.' },
      { title: 'Excel story telling', text: 'Analyst-ready spreadsheet and chart craft.' },
      { title: 'Assessment center prep', text: 'GD, caselets, and HR rounds.' },
      { title: 'Professional presence', text: 'Communicate with hiring managers confidently.' },
    ],
    modules: [
      {
        title: 'Business Foundations',
        topics: ['Business functions', 'Customer & markets', 'Basic finance literacy', 'Ops & supply awareness', 'Ethics at work'],
      },
      {
        title: 'Analytical Problem Solving',
        topics: ['Issue trees', 'Excel analysis', 'KPI thinking', 'Recommendation writing', 'Slide structuring'],
      },
      {
        title: 'Case Method Studio',
        topics: ['Case reading', 'Hypothesis-driven approach', 'Quant interpretations', 'Presentation drills', 'Peer critique'],
      },
      {
        title: 'Communication & Collaboration',
        topics: ['Business writing', 'GD tactics', 'Meeting presence', 'Team projects', 'Stakeholder empathy'],
      },
      {
        title: 'Placement Prep',
        topics: ['Resume for management roles', 'HR interviews', 'Domain Q&A', 'Internship readiness', 'Mock assessment center'],
      },
    ],
    projects: [
      { title: 'Business Case Deck', description: 'Recommend a GTM or ops improvement.', tags: ['Case'] },
      { title: 'KPI Insight Story', description: 'Analyze and present metrics.', tags: ['Excel'] },
      { title: 'GD Simulation Series', description: 'Practice under facilitator scoring.', tags: ['GD'] },
      { title: 'Assessment Center Day', description: 'Multi-round placement simulation.', tags: ['Placement'] },
      { title: 'Career Narrative Pack', description: 'Stories for management interviews.', tags: ['Career'] },
    ],
    tools: [
      tool('Excel / Google Sheets'),
      tool('Power BI', LOGO.powerbi),
      tool('Case Frameworks'),
      tool('Issue Trees'),
      tool('Business Writing'),
      tool('Presentation Design'),
      tool('GD Rubrics'),
      tool('STAR Interviews'),
      tool('Market Research Basics'),
      tool('OKR Literacy'),
    ],
    toolsTitle: 'Management',
    toolsAccent: 'Skill Stack',
  },

  {
    slug: 'finance-employability',
    name: 'Finance Employability Program',
    audience: 'Institution',
    duration: 'Semester / Cohort',
    seoDescription:
      'Finance Employability — statements literacy, Excel modelling, Power BI, ratio analysis, and finance interview prep.',
    heroDescription:
      'Finance-track readiness: financial statement literacy, ratio analysis, Excel modelling, Power BI storytelling, and interview caselets — aligning campus skills to analyst / operations finance roles.',
    curriculumTitle: 'Finance Employability',
    highlights: [
      { title: 'Statement fluency', text: 'Read P&L, balance sheet, and cash flow with confidence.' },
      { title: 'Excel modelling', text: 'The #1 tool in entry finance roles.' },
      { title: 'Dashboard storytelling', text: 'Power BI views for FP&A-style narratives.' },
      { title: 'Interview caselets', text: 'Practice role-typical questions.' },
      { title: 'Business context', text: 'Connect numbers to decisions.' },
    ],
    modules: [
      {
        title: 'Finance Literacy',
        topics: ['Financial statements', 'Ratio analysis', 'Budgeting concepts', 'Working capital basics', 'Business context cases'],
      },
      {
        title: 'Excel for Finance',
        topics: ['Advanced Excel', 'Lookups & models', 'Sensitivity tables', 'Variance analysis', 'Clean data packs'],
      },
      {
        title: 'Analytics & Visualization',
        topics: ['Power BI for finance', 'KPI packs', 'Forecast visual basics', 'Insight memos', 'Audit-friendly sheets'],
      },
      {
        title: 'Domain Application',
        topics: ['FP&A awareness', 'Banking / fintech themes', 'Cost & profitability', 'Risk basics', 'Ethics & controls'],
      },
      {
        title: 'Placement Prep',
        topics: ['Resume for finance roles', 'Domain Q&A', 'Caselets', 'HR rounds', 'Mock interviews'],
      },
    ],
    projects: [
      { title: 'Company Health Snapshot', description: 'Analyze statements for a sample firm.', tags: ['Finance'] },
      { title: 'Budget Variance Model', description: 'Plan vs actuals in Excel.', tags: ['Excel'] },
      { title: 'FP&A Dashboard', description: 'Visualize finance KPIs in Power BI.', tags: ['Power BI'] },
      { title: 'Interview Caselet Pack', description: 'Role-typical practice set.', tags: ['Interview'] },
      { title: 'Investment Memo Lite', description: 'Recommend with evidence.', tags: ['Memo'] },
    ],
    tools: [
      tool('Excel'),
      tool('Power BI', LOGO.powerbi),
      tool('SQL', LOGO.sql),
      tool('Financial Statements'),
      tool('Ratio Frameworks'),
      tool('Budget Models'),
      tool('Variance Analysis'),
      tool('Accounting Basics'),
      tool('Finance Caselets'),
      tool('Presentation Packs'),
    ],
  },

  {
    slug: 'faculty-development',
    name: 'Faculty Development Programs (FDP)',
    audience: 'Institution',
    duration: 'Workshop / Multi-day',
    seoDescription:
      'Faculty Development Programs — OBE pedagogy, industry-aligned curriculum, digital teaching tools, and assessment redesign.',
    heroDescription:
      'Empower faculty with modern FDP themes campuses buy: outcome-based education, active learning, industry-aligned curriculum, digital / AI-assisted teaching tools, and authentic assessment design.',
    curriculumTitle: 'Faculty Development',
    highlights: [
      { title: 'OBE & active learning', text: 'Engage students with measurable outcomes.' },
      { title: 'Industry alignment', text: 'Bridge classrooms to workplace skills.' },
      { title: 'Digital teaching toolkit', text: 'LMS, content, and hybrid facilitation.' },
      { title: 'Assessment modernization', text: 'Rubrics, projects, and continuous evaluation.' },
      { title: 'Peer microteaching', text: 'Practice improved session design.' },
    ],
    modules: [
      {
        title: 'Modern Pedagogy',
        topics: ['Active learning methods', 'Outcome-based education', 'Bloom-aligned outcomes', 'Feedback loops', 'Inclusive classroom habits'],
      },
      {
        title: 'Industry-Aligned Teaching',
        topics: ['Curriculum refresh lenses', 'Case & project methods', 'Emerging tech awareness', 'Guest / mentor models', 'Employability mapping'],
      },
      {
        title: 'Digital Delivery',
        topics: ['LMS design', 'Content creation basics', 'Hybrid facilitation', 'Accessibility', 'Engagement analytics'],
      },
      {
        title: 'Assessment Redesign',
        topics: ['Authentic tasks', 'Rubrics', 'Project evaluation', 'Academic integrity', 'Continuous assessment'],
      },
      {
        title: 'FDP Capstone',
        topics: ['Module redesign', 'Microteaching', 'Peer review', 'Action research starter', 'Department share-out'],
      },
    ],
    projects: [
      { title: 'OBE Module Redesign', description: 'Refresh one course toward outcomes.', tags: ['Curriculum'] },
      { title: 'Project Rubric Pack', description: 'Competency-based assessment.', tags: ['Assess'] },
      { title: 'Digital Lesson Pack', description: 'LMS-ready session design.', tags: ['Digital'] },
      { title: 'Microteaching Demo', description: 'Deliver and receive structured feedback.', tags: ['Teach'] },
      { title: 'Department Action Plan', description: 'Share improvements across faculty.', tags: ['Scale'] },
    ],
    tools: [
      tool('OBE Frameworks'),
      tool('LMS / Moodle / Canvas'),
      tool('Rubric Design'),
      tool('Active Learning Kits'),
      tool('Content Creation'),
      tool('Hybrid Class Tooling'),
      tool('AI Teaching Assist'),
      tool('Peer Observation'),
      tool('Curriculum Maps'),
      tool('Integrity Guidelines'),
    ],
    toolsTitle: 'FDP Tools &',
    toolsAccent: 'Methods',
  },

  {
    slug: 'train-the-trainer',
    name: 'Train-the-Trainer Programs',
    audience: 'Institution',
    duration: 'Workshop / Multi-day',
    seoDescription:
      'Train-the-Trainer — facilitation mastery, activity design, observation checklists, and cascade quality for campus or corporate trainers.',
    heroDescription:
      'Equip internal trainers and faculty champions to deliver consistent, high-quality learning: facilitation mastery, activity design, observation checklists, trainer kits, and cascade models used in corporate TTT programs.',
    curriculumTitle: 'Train-the-Trainer',
    highlights: [
      { title: 'Facilitation mastery', text: 'Presence, pacing, and question handling.' },
      { title: 'Activity design', text: 'Labs and practice that make learning stick.' },
      { title: 'Quality cascades', text: 'Observe, certify, and scale trainers consistently.' },
      { title: 'Trainer kits', text: 'Reusable agendas, slides, and facilitator notes.' },
      { title: 'Feedback craft', text: 'Give developmental feedback that improves delivery.' },
    ],
    modules: [
      {
        title: 'Trainer Foundations',
        topics: ['Adult learning', 'Session architecture', 'Energy & pacing', 'Question handling', 'Psychological safety'],
      },
      {
        title: 'Content & Practice Design',
        topics: ['Learning objectives', 'Demo → practice → debrief', 'Activity cards', 'Assessment in session', 'Accessibility'],
      },
      {
        title: 'Delivery Labs',
        topics: ['Microteaching', 'Virtual facilitation', 'Difficult participants', 'Timeboxing', 'Peer feedback'],
      },
      {
        title: 'Cascade & Quality',
        topics: ['Trainer kits', 'Observation checklists', 'Certification criteria', 'Calibration sessions', 'Continuous improvement'],
      },
      {
        title: 'TTT Capstone',
        topics: ['Full session delivery', 'Observed scoring', 'Kit finalization', 'Cascade plan', 'Personal trainer roadmap'],
      },
    ],
    projects: [
      { title: 'Reusable Trainer Kit', description: 'Agenda, slides, and facilitator notes.', tags: ['Content'] },
      { title: 'Observed Delivery', description: 'Teach and receive scored feedback.', tags: ['Practice'] },
      { title: 'Observation Checklist', description: 'Quality bar for peer trainers.', tags: ['QA'] },
      { title: 'Cascade Plan', description: 'Roll out to department trainers.', tags: ['Scale'] },
      { title: 'Calibration Workshop', description: 'Align scoring across observers.', tags: ['Calibration'] },
    ],
    tools: [
      tool('Trainer Kits'),
      tool('Observation Rubrics'),
      tool('Adult Learning Models'),
      tool('Activity Design Cards'),
      tool('Virtual Facilitation'),
      tool('Feedback Frameworks'),
      tool('Certification Criteria'),
      tool('Session Timers'),
      tool('Peer Coaching'),
      tool('Cascade Playbooks'),
    ],
    toolsTitle: 'TTT',
    toolsAccent: 'Toolkit',
  },

  {
    slug: 'ai-for-educators',
    name: 'AI for Educators',
    audience: 'Institution',
    duration: 'Workshop / Cohort',
    seoDescription:
      'AI for Educators — responsible GenAI use for lesson prep, assessment ideation, student guidance, and academic integrity.',
    heroDescription:
      'Help educators use Generative AI responsibly: prompt literacy, lesson & assessment workflows, student guidance, academic integrity policies, and practical classroom redesign — the FDP theme campuses request now.',
    curriculumTitle: 'AI for Educators',
    highlights: [
      { title: 'AI literacy for faculty', text: 'Know capabilities, limits, bias, and plagiarism risks.' },
      { title: 'Teaching workflows', text: 'Speed lesson prep, quizzes, and rubric drafting.' },
      { title: 'Integrity-first design', text: 'Policies and assessments that work in the AI era.' },
      { title: 'Student guidance', text: 'Teach learners how to use AI ethically.' },
      { title: 'Ready-to-use packs', text: 'Leave with session plans and guidelines.' },
    ],
    modules: [
      {
        title: 'AI Literacy for Faculty',
        topics: ['GenAI basics', 'Prompt patterns', 'Hallucinations & bias', 'Privacy risks', 'Tool landscape'],
      },
      {
        title: 'Teaching Workflows with AI',
        topics: ['Lesson outlines', 'Quiz generation', 'Rubric drafting', 'Differentiation ideas', 'Content localization'],
      },
      {
        title: 'Assessment in the AI Era',
        topics: ['Authentic task design', 'Oral / process evidence', 'Detection vs trust', 'Revision cycles', 'Portfolio assessment'],
      },
      {
        title: 'Classroom Policy & Students',
        topics: ['Acceptable use policies', 'Syllabus language', 'Student tutoring patterns', 'Academic integrity talks', 'Parent/ leadership brief'],
      },
      {
        title: 'Capstone Pack',
        topics: ['AI lesson pack', 'Integrity guidelines', 'Department workshop plan', 'Pilot metrics', 'Share-out demo'],
      },
    ],
    projects: [
      { title: 'AI Lesson Pack', description: 'Ready-to-run session with prompts.', tags: ['Teach'] },
      { title: 'Integrity Guidelines', description: 'Classroom AI usage rules.', tags: ['Policy'] },
      { title: 'Assessment Redesign', description: 'AI-resilient authentic task.', tags: ['Assess'] },
      { title: 'Student Guidance Sheet', description: 'Ethical AI use handout.', tags: ['Students'] },
      { title: 'Faculty Workshop Outline', description: 'Cascade AI literacy to peers.', tags: ['Scale'] },
    ],
    tools: [
      tool('ChatGPT / Copilot'),
      tool('Prompt Libraries'),
      tool('LMS Integration'),
      tool('Rubric Generators'),
      tool('Quiz Assist'),
      tool('Integrity Policies'),
      tool('Detection Awareness'),
      tool('Slide Assist'),
      tool('Accessibility Checks'),
      tool('Department Playbooks'),
    ],
    toolsTitle: 'AI Teaching',
    toolsAccent: 'Stack',
  },

  {
    slug: 'curriculum-enhancement',
    name: 'Curriculum Enhancement',
    audience: 'Institution',
    duration: 'Project-based',
    seoDescription:
      'Curriculum enhancement — graduate attributes, industry-mapped modules, project integration, and modern assessment blueprints.',
    heroDescription:
      'Modernize academic curricula with industry inputs: graduate attribute mapping, modular redesign, project-integrated syllabi, lab design, and authentic assessment blueprints.',
    curriculumTitle: 'Curriculum Enhancement',
    highlights: [
      { title: 'Outcome-first redesign', text: 'Start from what graduates must do.' },
      { title: 'Industry-mapped modules', text: 'Close skill gaps campuses are scored on.' },
      { title: 'Project integration', text: 'Applied work inside credit structures.' },
      { title: 'Assessment upgrade', text: 'Measure competence, not only recall.' },
      { title: 'Pilot & iterate', text: 'Evidence-based curriculum change.' },
    ],
    modules: [
      {
        title: 'Outcomes Discovery',
        topics: ['Graduate attributes', 'Industry consults', 'Gap analysis', 'Priority modules', 'Regulatory alignment'],
      },
      {
        title: 'Curriculum Redesign',
        topics: ['Module sequencing', 'Credit math', 'Project integration', 'Lab design', 'Reading/resource updates'],
      },
      {
        title: 'Skill Stack Embedding',
        topics: ['Tech skill threads', 'Soft skill threads', 'Tools exposure map', 'Industry certificates awareness', 'Internship linkage'],
      },
      {
        title: 'Assessment Blueprint',
        topics: ['Rubrics', 'Portfolio assessment', 'Continuous evaluation', 'Capstone design', 'Integrity-safe tasks'],
      },
      {
        title: 'Pilot Governance',
        topics: ['Pilot course plan', 'Faculty enablement', 'Student feedback', 'BoS documentation', 'Scale roadmap'],
      },
    ],
    projects: [
      { title: 'Outcome Map', description: 'Align course outcomes to job skills.', tags: ['OBE'] },
      { title: 'Project-Integrated Syllabus', description: 'Embed applied work into a course.', tags: ['Design'] },
      { title: 'Tools Exposure Matrix', description: 'Where stacks appear across semesters.', tags: ['Stack'] },
      { title: 'Assessment Blueprint', description: 'Modern evaluation methods.', tags: ['Assess'] },
      { title: 'BoS Ready Pack', description: 'Documentation for curriculum approval.', tags: ['Governance'] },
    ],
    tools: [
      tool('Curriculum Maps'),
      tool('OBE Templates'),
      tool('Skill Taxonomies'),
      tool('Syllabus Builders'),
      tool('Rubric Libraries'),
      tool('Industry Advisory Inputs'),
      tool('Lab Design Guides'),
      tool('Credit Planning'),
      tool('Pilot Metrics'),
      tool('BoS Document Kits'),
    ],
    toolsTitle: 'Curriculum',
    toolsAccent: 'Design Stack',
  },

  {
    slug: 'research-innovation',
    name: 'Research & Innovation',
    audience: 'Institution',
    duration: 'Project-based',
    seoDescription:
      'Research & Innovation capability — proposals, methods, collaboration models, and campus innovation sprints.',
    heroDescription:
      'Strengthen research culture and innovation capability: problem framing, methods literacy, proposal writing, collaboration models, and campus innovation sprints that turn ideas into demos.',
    curriculumTitle: 'Research & Innovation',
    highlights: [
      { title: 'Stronger research questions', text: 'Frame problems worth studying.' },
      { title: 'Methods literacy', text: 'Choose approaches with rigor and ethics.' },
      { title: 'Proposal craft', text: 'Write fundable, clear research outlines.' },
      { title: 'Innovation pathways', text: 'Move from paper to prototype / demo day.' },
      { title: 'Collaboration models', text: 'Industry and interdisciplinary partnerships.' },
    ],
    modules: [
      {
        title: 'Research Foundations',
        topics: ['Problem framing', 'Literature habits', 'Method selection', 'Ethics & IRB awareness', 'Reproducibility'],
      },
      {
        title: 'Execution Practices',
        topics: ['Experiment / study design', 'Data & tools', 'Writing structure', 'Peer review', 'Publication readiness'],
      },
      {
        title: 'Innovation Studio',
        topics: ['Opportunity discovery', 'Prototype thinking', 'IP awareness', 'Pitch craft', 'Incubation paths'],
      },
      {
        title: 'Collaboration & Funding',
        topics: ['Industry MoUs', 'Grant landscapes', 'Cross-department teams', 'Student research labs', 'Open science basics'],
      },
      {
        title: 'Capstone Sprint',
        topics: ['Proposal draft', 'Methods worksheet', 'Innovation prototype', 'Demo day', 'Next-grant plan'],
      },
    ],
    projects: [
      { title: 'Research Proposal Draft', description: 'Viable study outline.', tags: ['Research'] },
      { title: 'Methods Worksheet', description: 'Approach for a sample question.', tags: ['Methods'] },
      { title: 'Innovation Sprint', description: 'Prototype a campus idea.', tags: ['Innovation'] },
      { title: 'Collaboration Brief', description: 'Industry or inter-dept partnership sketch.', tags: ['Collab'] },
      { title: 'Demo Day Pitch', description: 'Present research/innovation outcomes.', tags: ['Pitch'] },
    ],
    tools: [
      tool('Python', LOGO.python),
      tool('Jupyter', LOGO.jupyter),
      tool('Reference Managers'),
      tool('Survey / Stats Tools'),
      tool('Prototype Kits'),
      tool('Pitch Decks'),
      tool('Ethics Checklists'),
      tool('Grant Templates'),
      tool('Lab Notebooks'),
      tool('Demo Day Rubrics'),
    ],
  },

  {
    slug: 'placement-readiness',
    name: 'Placement Readiness',
    audience: 'Institution',
    duration: '4–12 Weeks',
    seoDescription:
      'Placement Readiness — resume, aptitude, technical/HR mocks, GD practice, and company targeting for campus drives.',
    heroDescription:
      'Accelerate placement outcomes with what training partners sell every season: resume clinics, aptitude drills, technical & HR interview mocks, GD practice, company targeting, and confidence simulations.',
    curriculumTitle: 'Placement Readiness',
    highlights: [
      { title: 'Profile packaging', text: 'Resume, LinkedIn, and GitHub that clear ATS and screens.' },
      { title: 'Aptitude + domain drills', text: 'Screening-round endurance.' },
      { title: 'Interview circuits', text: 'Scored tech and HR mocks with feedback.' },
      { title: 'GD & soft presence', text: 'Group and communication confidence.' },
      { title: 'Company strategy', text: 'Target roles with a plan, not spray applications.' },
    ],
    modules: [
      {
        title: 'Profile & Foundations',
        topics: ['Resume clinics', 'LinkedIn polish', 'GitHub hygiene', 'Aptitude foundations', 'Company research'],
      },
      {
        title: 'Technical Interview Prep',
        topics: ['DSA refresh', 'SQL drills', 'Project deep-dives', 'System design lite', 'Coding platform practice'],
      },
      {
        title: 'HR & Behavioral',
        topics: ['STAR stories', 'Strength/weakness craft', 'Salary & location talks', 'Internship narratives', 'Offer etiquette'],
      },
      {
        title: 'GD & Assessment Centers',
        topics: ['GD tactics', 'Caselets', 'Group tasks', 'Facilitator scoring', 'Peer feedback'],
      },
      {
        title: 'Drive Simulation',
        topics: ['Mock drive day', 'Funnel tracking', 'Personal improvement plan', 'Alumni panels', 'Final readiness score'],
      },
    ],
    projects: [
      { title: 'Resume + LinkedIn Pack', description: 'Interview-ready profiles.', tags: ['Career'] },
      { title: 'Aptitude Marathon', description: 'Timed practice sets.', tags: ['Aptitude'] },
      { title: 'Mock Interview Circuit', description: 'Scored tech + HR rounds.', tags: ['Interview'] },
      { title: 'GD Simulation Series', description: 'Facilitator-led practice.', tags: ['GD'] },
      { title: 'Company Targeting Plan', description: 'Role map and application strategy.', tags: ['Placement'] },
    ],
    tools: [
      tool('Python', LOGO.python),
      tool('SQL', LOGO.sql),
      tool('Resume ATS Checks'),
      tool('LinkedIn'),
      tool('LeetCode-style Platforms'),
      tool('Aptitude Banks'),
      tool('STAR Framework'),
      tool('GD Rubrics'),
      tool('Mock Interview Scorecards'),
      tool('Company Research Sheets'),
    ],
  },

  {
    slug: 'internship-programs',
    name: 'Internship Programs',
    audience: 'Institution',
    duration: 'Cohort-based',
    seoDescription:
      'Structured internship programs — project briefs, mentor checkpoints, workplace skills, evaluation, and showcase demos.',
    heroDescription:
      'Structured internship enablement like industry partners run: scoped project briefs, mentor checkpoints, workplace skills, mid/final evaluations, and showcase demos so students gain meaningful experience — not attendance-only internships.',
    curriculumTitle: 'Internship Programs',
    highlights: [
      { title: 'Scoped real work', text: 'Charters with success criteria and mentors.' },
      { title: 'Weekly cadence', text: 'Check-ins, reviews, and stakeholder updates.' },
      { title: 'Workplace skills', text: 'Etiquette, ownership, and communication.' },
      { title: 'Evaluated outcomes', text: 'Rubrics for mid and final reviews.' },
      { title: 'Showcase demos', text: 'Present results to faculty and industry.' },
    ],
    modules: [
      {
        title: 'Internship Setup',
        topics: ['Project scoping', 'Workplace etiquette', 'Tooling setup', 'Goal setting', 'NDA / professionalism'],
      },
      {
        title: 'On-the-Job Mentoring',
        topics: ['Weekly check-ins', 'Task reviews', 'Problem solving', 'Stakeholder updates', 'Code / work reviews'],
      },
      {
        title: 'Domain Skill Boosters',
        topics: ['Stack refreshers', 'SQL / Excel / Git as needed', 'Domain reading', 'Quality habits', 'Security hygiene'],
      },
      {
        title: 'Evaluation & Showcase',
        topics: ['Mid reviews', 'Final presentation', 'Mentor evaluation', 'Certificate path', 'Feedback to academics'],
      },
      {
        title: 'Bridge to Placement',
        topics: ['Convert internship to stories', 'Resume updates', 'Reference guidance', 'Full-time readiness', 'Alumni networking'],
      },
    ],
    projects: [
      { title: 'Internship Charter', description: 'Scope and success criteria.', tags: ['Setup'] },
      { title: 'Weekly Delivery Log', description: 'Track contributions and learning.', tags: ['Ops'] },
      { title: 'Mid-Review Pack', description: 'Progress evidence for mentors.', tags: ['Review'] },
      { title: 'Showcase Demo', description: 'Present outcomes to stakeholders.', tags: ['Demo'] },
      { title: 'Career Conversion Plan', description: 'Turn internship into offers.', tags: ['Career'] },
    ],
    tools: [
      tool('Git / GitHub'),
      tool('Python', LOGO.python),
      tool('SQL', LOGO.sql),
      tool('Jira / Boards'),
      tool('Slack / Teams'),
      tool('Charter Templates'),
      tool('Evaluation Rubrics'),
      tool('Weekly Log Formats'),
      tool('Demo Day Kits'),
      tool('Mentor Checklists'),
    ],
  },

  {
    slug: 'industry-bootcamps',
    name: 'Industry Bootcamps',
    audience: 'Institution',
    duration: '1–4 Weeks',
    seoDescription:
      'Industry bootcamps — intensive skill sprints in data, cloud, AI, full-stack, or analytics with labs and demo day.',
    heroDescription:
      'Intensive industry bootcamps campuses and corporates buy for speed: compressed skill sprints (data, cloud, AI, full-stack, analytics), daily labs, mentor hours, and demo-day outcomes.',
    curriculumTitle: 'Industry Bootcamps',
    highlights: [
      { title: 'High-intensity skill sprints', text: 'Compress high-demand skills into focused weeks.' },
      { title: 'Stack-specific tracks', text: 'Choose data, cloud, AI, DevOps, or app tracks.' },
      { title: 'Daily labs', text: 'Build muscle under mentor hours.' },
      { title: 'Demo day pressure', text: 'Ship under real constraints.' },
      { title: 'Bridge to roles', text: 'Map skills to internships and jobs.' },
    ],
    modules: [
      {
        title: 'Immersion',
        topics: ['Kickoff & goals', 'Core concepts', 'Tooling setup', 'Team formation', 'Challenge brief'],
      },
      {
        title: 'Build Sprint',
        topics: ['Daily labs', 'Mentor hours', 'Debug clinics', 'Mid reviews', 'Stack deep work'],
      },
      {
        title: 'Track Options (pick one)',
        topics: ['Data / analytics sprint', 'Cloud / DevOps sprint', 'AI / GenAI sprint', 'Full-stack sprint', 'Cyber basics sprint'],
      },
      {
        title: 'Integration & Polish',
        topics: ['End-to-end wiring', 'Testing habits', 'Docs & README', 'Presentation story', 'Peer critique'],
      },
      {
        title: 'Demo Day',
        topics: ['Final build', 'Live demo', 'Judge feedback', 'Career next steps', 'Certificate path'],
      },
    ],
    projects: [
      { title: 'Sprint Challenge', description: 'Timed industry-like brief.', tags: ['Lab'] },
      { title: 'Team Prototype', description: 'Working demo under deadline.', tags: ['Build'] },
      { title: 'Stack Lab Pack', description: 'Guided exercises for chosen track.', tags: ['Stack'] },
      { title: 'Demo Day Pitch', description: 'Present under judge scoring.', tags: ['Demo'] },
      { title: 'Career Next Steps', description: 'Map skills to roles/internships.', tags: ['Career'] },
    ],
    tools: [
      tool('Python', LOGO.python),
      tool('SQL', LOGO.sql),
      tool('React', LOGO.react),
      tool('Node.js', LOGO.node),
      tool('AWS', LOGO.aws),
      tool('Linux', LOGO.linux),
      tool('Docker'),
      tool('Power BI', LOGO.powerbi),
      tool('Git / GitHub'),
      tool('Jupyter', LOGO.jupyter),
    ],
    toolsSubtitle:
      'Bootcamp stacks mirror market intensives: Python, SQL, cloud, containers, web, BI, and AI tooling based on the chosen track.',
  },

  {
    slug: 'assessment-certification',
    name: 'Assessment & Certification',
    audience: 'Institution',
    duration: 'Flexible',
    seoDescription:
      'Assessment & Certification — competency blueprints, secure delivery, scoring, certificates, and remediation pathways.',
    heroDescription:
      'Validate skills with enterprise-grade assessment design: competency blueprints, question & performance tasks, secure / proctored delivery options, scoring models, certificates, analytics, and remediation — aligned to campus and hiring outcomes.',
    curriculumTitle: 'Assessment & Certification',
    highlights: [
      { title: 'Competency-aligned tests', text: 'Measure what roles actually need.' },
      { title: 'Secure delivery options', text: 'Scheduling, proctoring, and candidate experience.' },
      { title: 'Certification journeys', text: 'Earn → share → improve loops.' },
      { title: 'Analytics for faculty / L&D', text: 'See gaps and remediate fast.' },
      { title: 'Works with Assessment Platform', text: 'Pairs with iBridge360 proctoring & automation.' },
    ],
    modules: [
      {
        title: 'Assessment Design',
        topics: ['Competency blueprints', 'MCQ / coding / case items', 'Performance tasks', 'Difficulty balancing', 'Fairness & bias checks'],
      },
      {
        title: 'Delivery & Integrity',
        topics: ['Scheduling', 'Proctoring options', 'ID & security', 'Candidate support', 'Accommodations'],
      },
      {
        title: 'Scoring & Certification',
        topics: ['Scoring models', 'Cut scores', 'Certificates', 'Badge / credential share', 'Re-attempts'],
      },
      {
        title: 'Analytics & Remediation',
        topics: ['Item analysis', 'Cohort dashboards', 'Remediation pathways', 'Faculty reports', 'Hiring shortlists'],
      },
      {
        title: 'Program Capstone',
        topics: ['Blueprint for one role', 'Sample paper set', 'Delivery runbook', 'Cert journey map', 'Pilot metrics'],
      },
    ],
    projects: [
      { title: 'Skill Blueprint', description: 'Define assessable competencies.', tags: ['Design'] },
      { title: 'Sample Assessment Pack', description: 'Ready-to-run paper / task set.', tags: ['Assess'] },
      { title: 'Proctoring Runbook', description: 'Secure delivery checklist.', tags: ['Ops'] },
      { title: 'Certification Journey', description: 'Earn → share → improve loop.', tags: ['Cert'] },
      { title: 'Remediation Pathway', description: 'Close gaps after assessment.', tags: ['Learn'] },
    ],
    tools: [
      tool('Assessment Builder'),
      tool('Proctoring'),
      tool('Item Banks'),
      tool('Coding Assessments'),
      tool('Rubric Scoring'),
      tool('Certificate Engine'),
      tool('Analytics Dashboards'),
      tool('LMS Integration'),
      tool('Psychometrics Basics'),
      tool('Remediation Paths'),
    ],
    toolsTitle: 'Assessment',
    toolsAccent: 'Platform Stack',
  },

  {
    slug: 'campus-hiring-support',
    name: 'Campus Hiring Support',
    audience: 'Institution',
    duration: 'Placement season',
    seoDescription:
      'Campus hiring support — drive operations, assessment coordination, interview logistics, readiness scoring, and season analytics.',
    heroDescription:
      'Support placement cells and recruiters with campus hiring ops: season calendars, student readiness scoring, assessment coordination, interview logistics, communication cascades, and funnel analytics — end-to-end hiring season enablement.',
    curriculumTitle: 'Campus Hiring Support',
    highlights: [
      { title: 'Season operating system', text: 'Calendars, roles, and runbooks that reduce chaos.' },
      { title: 'Readiness scoring', text: 'Know which students are drive-ready.' },
      { title: 'Assessment coordination', text: 'Smooth online / on-campus test days.' },
      { title: 'Interview logistics', text: 'Panels, rooms, and candidate flow.' },
      { title: 'Funnel insights', text: 'Learn and improve conversion every season.' },
    ],
    modules: [
      {
        title: 'Season Planning',
        topics: ['Calendar design', 'Role mapping', 'Eligibility rules', 'Employer briefs', 'Student segmentation'],
      },
      {
        title: 'Readiness Operations',
        topics: ['Skill & profile scores', 'Prep surge plans', 'Communication cascades', 'Buddy systems', 'Escalation paths'],
      },
      {
        title: 'Drive Execution',
        topics: ['Assessment coordination', 'Interview logistics', 'On-day command center', 'Recruiter hospitality', 'Incident handling'],
      },
      {
        title: 'Funnel Analytics',
        topics: ['Shortlist analytics', 'Drop-off diagnosis', 'Offer conversion', 'Feedback to faculty', 'Season review deck'],
      },
      {
        title: 'Continuous Improvement',
        topics: ['Postmortems', 'Playbook updates', 'Alumni & recruiter NPS', 'Next-season roadmap', 'Capstone hiring OS'],
      },
    ],
    projects: [
      { title: 'Drive Runbook', description: 'Ops checklist for hiring day.', tags: ['Ops'] },
      { title: 'Student Readiness Score', description: 'Cohort readiness indicators.', tags: ['Ready'] },
      { title: 'Assessment Day Plan', description: 'Coordinate tests at scale.', tags: ['Assess'] },
      { title: 'Funnel Dashboard Spec', description: 'Track applications → offers.', tags: ['Analytics'] },
      { title: 'Season Review Deck', description: 'Outcomes for leadership.', tags: ['Report'] },
    ],
    tools: [
      tool('Placement CRM / Sheets'),
      tool('Assessment Platform'),
      tool('Scheduling Tools'),
      tool('Communication Cascades'),
      tool('Readiness Scorecards'),
      tool('Interview Panels'),
      tool('Funnel Analytics'),
      tool('Employer Brief Kits'),
      tool('Incident Logs'),
      tool('Season Playbooks'),
    ],
    toolsTitle: 'Hiring Ops',
    toolsAccent: 'Stack',
  },
];

export const TRAINING_PROGRAMS = Object.fromEntries(
  DEFINITIONS.map((def) => [def.slug, buildTrainingProgram(def)]),
);

export const TRAINING_TITLE_TO_PATH = {
  'AI & Machine Learning': '/training/ai-machine-learning',
  'Business Analytics': '/training/business-analytics',
  'Cloud Computing': '/training/cloud-computing',
  Cybersecurity: '/training/cybersecurity',
  DevOps: '/training/devops',
  'Digital Transformation': '/training/digital-transformation',
  'Project Management': '/training/project-management',
  'Leadership Development': '/training/leadership-development',
  'Soft Skills': '/training/soft-skills',
  'Agile & Scrum': '/training/agile-scrum',
  'Custom Learning Programs': '/training/custom-learning-programs',
  'Workforce Upskilling': '/training/workforce-upskilling',
  'Leadership Training': '/training/leadership-training',
  'Compliance Training': '/training/compliance-training',
  'Executive Development': '/training/executive-development',
  'Technology Employability Program': '/training/technology-employability',
  'Management Employability Program': '/training/management-employability',
  'Finance Employability Program': '/training/finance-employability',
  'Faculty Development Programs (FDP)': '/training/faculty-development',
  'Train-the-Trainer Programs': '/training/train-the-trainer',
  'AI for Educators': '/training/ai-for-educators',
  'Curriculum Enhancement': '/training/curriculum-enhancement',
  'Research & Innovation': '/training/research-innovation',
  'Placement Readiness': '/training/placement-readiness',
  'Internship Programs': '/training/internship-programs',
  'Industry Bootcamps': '/training/industry-bootcamps',
  'Assessment & Certification': '/training/assessment-certification',
  'Campus Hiring Support': '/training/campus-hiring-support',
  'Data Engineering': '/courses/data-engineering',
  'Data Science': '/courses/data-science',
  'Full Stack Development': '/mern-full-stack-development-course',
};

/** Alternate display names → canonical paths (same destinations as TRAINING_TITLE_TO_PATH). */
export const TOPIC_PATH_ALIASES = {
  'MERN Stack': TRAINING_TITLE_TO_PATH['Full Stack Development'],
  'Machine Learning': TRAINING_TITLE_TO_PATH['Data Science'],
  'Cyber Security': TRAINING_TITLE_TO_PATH.Cybersecurity,
  'AI & Gen AI': TRAINING_TITLE_TO_PATH['AI & Machine Learning'],
  'Data Science & AI': TRAINING_TITLE_TO_PATH['Data Science'],
  Leadership: TRAINING_TITLE_TO_PATH['Leadership Development'],
  'Cloud & DevOps': TRAINING_TITLE_TO_PATH['Cloud Computing'],
  'Leadership Essentials': TRAINING_TITLE_TO_PATH['Leadership Development'],
  'Communication Skills': TRAINING_TITLE_TO_PATH['Soft Skills'],
  'Domain Bootcamps': TRAINING_TITLE_TO_PATH['Industry Bootcamps'],
  'Manager Coaching Tracks': TRAINING_TITLE_TO_PATH['Leadership Training'],
  'Custom Tech Stacks': TRAINING_TITLE_TO_PATH['Custom Learning Programs'],
  'Fresh Hire Academy': TRAINING_TITLE_TO_PATH['Workforce Upskilling'],
};

/**
 * Resolve a topic/program display name to a site path, or null if unknown.
 */
export function resolveTopicPath(name) {
  if (!name || typeof name !== 'string') return null;
  return TRAINING_TITLE_TO_PATH[name] || TOPIC_PATH_ALIASES[name] || null;
}

export function getTrainingProgramBySlug(slug) {
  return TRAINING_PROGRAMS[slug] || null;
}

export function getAllTrainingSlugs() {
  return Object.keys(TRAINING_PROGRAMS);
}
