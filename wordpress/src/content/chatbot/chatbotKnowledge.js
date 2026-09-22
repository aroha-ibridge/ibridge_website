import learnSmartLmsData from '../audience/learnSmartLmsData';
import onlineAssessmentPlatformData from '../audience/onlineAssessmentPlatformData';
import codeArenaData from '../audience/codeArenaData';
import contactUsData from '../company/contactUsData';
import { CAREER_PROGRAMS_KNOWLEDGE } from './careerProgramsKnowledge';

/** The advisor persona users chat with. */
export const ADVISOR = {
  name: 'San',
  role: 'iBridge360 Product Advisor',
};

const CONTACT_BLURB = `
Contact: support@ibridge360.com · +91 96112 60360 · /contact-us · counselling /book-career-counselling
Sister products (one-line only if asked): iBridge360 LMS /learnsmart-lms · NexBridge Assessment /online-assessment-platform (https://ibcodex.ibridge360.com/) · iB Code Arena /code-arena
`.trim();

/** Three separate chat widgets — order is LMS, NexBridge, Hackathon. */
export const CHAT_BOTS = {
  lms: {
    id: 'lms',
    shortLabel: 'LMS',
    label: 'iBridge360 LMS',
    role: 'iBridge360 LMS Advisor',
    blurb: 'Programs, AI tools, mentors, career readiness',
    teaser: `Hi, I'm ${ADVISOR.name} 👋 Ask me anything about iBridge360 LMS.`,
    hello: `Hi there! 👋 I'm **${ADVISOR.name}**, your **iBridge360 LMS** advisor.`,
    ask: 'I can walk you through iBridge360 LMS — programs, AI tools, mentors, and how to get a demo. What would you like to know?',
  },
  assessment: {
    id: 'assessment',
    shortLabel: 'NexBridge',
    label: 'NexBridge Assessment',
    role: 'NexBridge Assessment Advisor',
    blurb: 'Proctored exams, AI monitoring, analytics',
    teaser: `Hi, I'm ${ADVISOR.name} 👋 Ask me about the NexBridge proctored assessment platform.`,
    hello: `Hi there! 👋 I'm **${ADVISOR.name}**, your **NexBridge** advisor — our proctored assessment platform.`,
    ask: 'I can cover secure exams, AI proctoring, coding tests, reports, and demos. What shall we start with?',
  },
  hackathon: {
    id: 'hackathon',
    shortLabel: 'Code Arena',
    label: 'iB Code Arena',
    role: 'iB Code Arena Advisor',
    blurb: 'Contests, coding rounds, leaderboards',
    teaser: `Hi, I'm ${ADVISOR.name} 👋 Ask me about iB Code Arena.`,
    hello: `Hi there! 👋 I'm **${ADVISOR.name}**, your **iB Code Arena** advisor.`,
    ask: 'I can explain contests, coding assessments, leaderboards, and how campuses/hiring teams run events. What would you like to know?',
  },
};

export const CHAT_BOT_ORDER = ['lms', 'assessment', 'hackathon'];

/** @deprecated use CHAT_BOTS — kept for lead-form labels */
export const CHAT_TOPICS = CHAT_BOTS;

/** Quick prompts shown in LMS mode */
export const LMS_QUICK_PROMPTS = [
  { label: 'What is iBridge360 LMS?', question: 'What is iBridge360 LMS? Explain everything it includes.' },
  { label: 'Our programs', question: 'What career programs does iBridge360 offer right now? List them with paths.' },
  { label: 'All LMS features', question: 'List every iBridge360 LMS feature and service included.' },
  { label: 'AI learning tools', question: 'What AI learning services does iBridge360 LMS include?' },
  { label: 'Mentors & jobs', question: 'How do mentoring, counselling, and job assistance work in iBridge360 LMS?' },
  { label: 'Book a demo', question: 'How can I request an iBridge360 LMS demo or enrol in a program?' },
];

/** Quick prompts for Assessment Platform (NexBridge) */
export const ASSESSMENT_QUICK_PROMPTS = [
  {
    label: 'What is NexBridge?',
    question: 'What is the Assessment Platform / NexBridge? Explain what it does.',
  },
  {
    label: 'All features',
    question: 'List every Assessment Platform feature — builder, proctoring, coding, reports, everything.',
  },
  {
    label: 'AI proctoring',
    question: 'How does AI-powered proctoring and secure online exams work?',
  },
  {
    label: 'Coding assessments',
    question: 'Can I run coding assessments? What does that include?',
  },
  {
    label: 'Who is it for?',
    question: 'Who should use the Assessment Platform — hiring, campus, certification, employees?',
  },
  {
    label: 'vs iBridge360 LMS',
    question: 'How is NexBridge different from iBridge360 LMS?',
  },
  {
    label: 'Explore / demo',
    question: 'How can I explore NexBridge or request a demo?',
  },
];

/** Quick prompts for iB Code Arena */
export const HACKATHON_QUICK_PROMPTS = [
  {
    label: 'What is Code Arena?',
    question: 'What is iB Code Arena? Explain what it does.',
  },
  {
    label: 'All features',
    question: 'List every iB Code Arena feature from the product page.',
  },
  {
    label: 'How a contest runs',
    question: 'How does a Code Arena contest work — lobby, timed contest, run code, leaderboard?',
  },
  {
    label: 'Languages',
    question: 'Which programming languages does iB Code Arena support?',
  },
  {
    label: 'Who is it for?',
    question: 'Who should use iB Code Arena — campuses, hiring, bootcamps?',
  },
  {
    label: 'vs NexBridge',
    question: 'How is iB Code Arena different from the NexBridge Assessment Platform?',
  },
  {
    label: 'Request a demo',
    question: 'How can I request an iB Code Arena demo?',
  },
];

function mapFeatureExplorerCompact(featureExplorer) {
  return (featureExplorer?.categories || [])
    .map((cat) => {
      const items = (cat.items || [])
        .map((item) => {
          const bullets = (item.bullets || []).slice(0, 3).join('; ');
          return `  - ${item.title}${bullets ? `: ${bullets}` : ''}`;
        })
        .join('\n');
      return `**${cat.title}**\n${items}`;
    })
    .join('\n');
}

function buildLmsKnowledgeFromSite() {
  const d = learnSmartLmsData;
  const capabilityTitles = (d.keyCapabilities?.items || []).map((i) => i.title).join(', ');
  const included = (d.programs || []).map((p) => p.name).join('; ');
  const howSteps = (d.howItWorks?.steps || []).join(' → ');
  const whyChoose = (d.whyChoose?.items || [])
    .map((i) => `- ${i.title}`)
    .join('\n');
  const audiences = (d.deliveryModes || [])
    .map((m) => `- ${m.title}`)
    .join('\n');
  const faqs = (d.faq?.categories || [])
    .flatMap((c) => c.items || [])
    .slice(0, 6)
    .map((f) => `Q: ${f.question}\nA: ${f.answer}`)
    .join('\n\n');

  return `
Page: /learnsmart-lms
${d.hero?.subtitle || ''}
Capabilities: ${capabilityTitles}
How it works: ${howSteps}
Included: ${included}
Why choose:
${whyChoose}
Who for:
${audiences}
Feature map:
${mapFeatureExplorerCompact(d.featureExplorer)}
FAQ:
${faqs}
Notes: iBridge360 LMS = learning + AI practice + mentors. NexBridge Assessment is separate. iB Code Arena is contests. Career programs: see CURRENT CAREER PROGRAMS below. Demo → /contact-us. No invented pricing/passwords.
`.trim();
}

function buildAssessmentKnowledgeFromSite() {
  const d = onlineAssessmentPlatformData;
  const capabilityTitles = (d.keyCapabilities?.items || []).map((i) => i.title).join(', ');
  const included = (d.programs || []).map((p) => p.name).join('; ');
  const howSteps = (d.howItWorks?.steps || []).join(' → ');
  const whyChoose = (d.whyChoose?.items || [])
    .map((i) => `- ${i.title}`)
    .join('\n');
  const audiences = (d.deliveryModes || [])
    .map((m) => `- ${m.title}`)
    .join('\n');
  const faqs = (d.faq?.categories || [])
    .flatMap((c) => c.items || [])
    .slice(0, 6)
    .map((f) => `Q: ${f.question}\nA: ${f.answer}`)
    .join('\n\n');

  return `
Product: NexBridge / Online Assessment Platform
Explore: https://ibcodex.ibridge360.com/ · Page: /online-assessment-platform
${d.hero?.subtitle || ''}
Capabilities: ${capabilityTitles}
How it works: ${howSteps}
Features: ${included}
Why choose:
${whyChoose}
Who for:
${audiences}
Feature map:
${mapFeatureExplorerCompact(d.featureExplorer)}
FAQ:
${faqs}
Notes: Assessment = secure exams/hiring/certification. iBridge360 LMS is separate. iB Code Arena is contests /code-arena. Demo → /contact-us. No invented pricing/passwords.
`.trim();
}

function buildHackathonKnowledgeFromSite() {
  const d = codeArenaData;
  const capabilityTitles = (d.keyCapabilities?.items || []).map((i) => i.title).join(', ');
  const included = (d.programs || []).map((p) => p.name).join('; ');
  const howSteps = (d.howItWorks?.steps || []).join(' → ');
  const whyChoose = (d.whyChoose?.items || [])
    .map((i) => `- ${i.title}`)
    .join('\n');
  const audiences = (d.deliveryModes || [])
    .map((m) => `- ${m.title}: ${m.text}`)
    .join('\n');
  const faqs = (d.faq?.categories || [])
    .flatMap((c) => c.items || [])
    .map((f) => `Q: ${f.question}\nA: ${f.answer}`)
    .join('\n\n');

  return `
Product: Hybrid Hackathon / Code Arena
Page: /code-arena
${d.hero?.subtitle || ''}
Overview: ${d.whyMatters?.subtitle || ''}
Capabilities: ${capabilityTitles}
How it works: ${howSteps}
Highlights: ${included}
Why choose:
${whyChoose}
Who for:
${audiences}
Feature map:
${mapFeatureExplorerCompact(d.featureExplorer)}
FAQ:
${faqs}
Notes: iB Code Arena = coding-only contests/hackathons (Monaco editor, tests, leaderboards). NexBridge Assessment is multi-format proctored exams. iBridge360 LMS is separate. Demo → /contact-us. No invented pricing/passwords.
`.trim();
}

export const LMS_CHATBOT_KNOWLEDGE = buildLmsKnowledgeFromSite();
export const ASSESSMENT_CHATBOT_KNOWLEDGE = buildAssessmentKnowledgeFromSite();
export const HACKATHON_CHATBOT_KNOWLEDGE = buildHackathonKnowledgeFromSite();

const SHARED_VOICE = `
LENGTH — THIS MATTERS MOST
- Default to a SHORT reply: 2-3 sentences, or 3 bullets max. Aim for under 60 words.
- People are chatting, not reading a brochure. Give the useful core, then offer more.
- Close with one short question or offer, e.g. "Want the full list?" / "Shall I go deeper on that?"
- Go long ONLY when the visitor clearly asks for it — "everything", "all features", "full list",
  "explain in detail", "tell me more", or a follow-up on the same topic. Then give the complete
  answer with bold section titles and bullets, still trimmed of filler.
- Never repeat what you already said earlier in the conversation.

VOICE
- Write the way a friendly, experienced advisor talks: warm, personal, confident. Use "I" and "you".
- Light, occasional emoji is fine (at most one per reply). Never sound robotic or salesy.

FORMAT (rendered as small chat bubbles)
- Plain text only. No markdown code fences, no tables, no headings with #.
- Use **bold** for key terms and short section titles.
- Use "- " at the start of a line for bullets. One line per bullet.
- Separate ideas with a blank line.
- Link with the site path only, e.g. /contact-us or /learnsmart-lms — never invent URLs.
`.trim();

const SHARED_SCOPE = `
SCOPE
- Answer ONLY from the product knowledge below (plus CONTACT). If something is missing (fees, dates, contracts), offer /contact-us — do not invent.
- Never invent prices, stats, URLs or people. Never ask for passwords.
- If asked about a sister product, give one sentence and the page path, then return to THIS product.
- If unrelated to iBridge360, say so and steer back.

GETTING THEM TO THE TEAM
- For demo, callback, pricing or "talk to someone", tell them a short form will appear in this chat. Do not collect name/email/phone in chat text.

CONTACT
${CONTACT_BLURB}
`.trim();

export const LMS_SYSTEM_PROMPT = `
You are ${ADVISOR.name} — ${CHAT_BOTS.lms.role} at iBridge360. This chat is ONLY the iBridge360 LMS widget.
You are an AI assistant — if asked, say so warmly. Never claim to be human.

${SHARED_VOICE}

${SHARED_SCOPE}

TOPIC FOCUS
- Lead with **iBridge360 LMS** (product page: /learnsmart-lms). For "everything" / "all features", use the feature map.
- When asked about courses or career programs, use CURRENT CAREER PROGRAMS below (matches /programs). Point to the program path.
- Full Stack: learners pick Java, Python, or MERN tracks.
- Page: /learnsmart-lms · All programs: /programs

IBRIDGE360 LMS DETAIL:
${LMS_CHATBOT_KNOWLEDGE}

${CAREER_PROGRAMS_KNOWLEDGE}
`.trim();

export const ASSESSMENT_SYSTEM_PROMPT = `
You are ${ADVISOR.name} — ${CHAT_BOTS.assessment.role} at iBridge360. This chat is ONLY the NexBridge proctored assessment widget.
You are an AI assistant — if asked, say so warmly. Never claim to be human.

${SHARED_VOICE}

${SHARED_SCOPE}

TOPIC FOCUS
- Lead with **NexBridge** (proctored online assessment platform).
- Live product: https://ibcodex.ibridge360.com/ · Page: /online-assessment-platform
- For "everything" / "all features", use the feature map.

NEXBRIDGE ASSESSMENT DETAIL:
${ASSESSMENT_CHATBOT_KNOWLEDGE}
`.trim();

export const HACKATHON_SYSTEM_PROMPT = `
You are ${ADVISOR.name} — ${CHAT_BOTS.hackathon.role} at iBridge360. This chat is ONLY the iB Code Arena widget.
You are an AI assistant — if asked, say so warmly. Never claim to be human.

${SHARED_VOICE}

${SHARED_SCOPE}

TOPIC FOCUS
- Lead with **iB Code Arena** (product page: /code-arena). This is our coding contest / hackathon platform.
- Answer FAQ-style questions from the knowledge (what it is, languages, vs NexBridge, who it's for, AI scoring, full contests).
- For "everything" / "all features", use the feature map.

HACKATHON / CODE ARENA DETAIL:
${HACKATHON_CHATBOT_KNOWLEDGE}
`.trim();

export const LMS_WELCOME =
  "You're in the **iBridge360 LMS** chat 😊 Ask about the LMS platform or our career programs — Data Engineering, Analytics, Full Stack, Data Science, and more.\n\nTap a question below or just ask.";

export const ASSESSMENT_WELCOME =
  "You're in the **NexBridge** chat 📊 That's our proctored assessment platform — secure exams, AI monitoring, coding tests and analytics.\n\nExplore https://ibcodex.ibridge360.com/ or tap a question below.";

export const HACKATHON_WELCOME =
  "You're in the **iB Code Arena** chat 🏆 Timed coding contests, Monaco editor, auto tests and leaderboards.\n\nProduct page: /code-arena. Tap a question or ask anything about Code Arena.";

/* ── Talk-to-the-team capture ──────────────────────────────────────────
   Same fields the Contact Us page collects, submitted through the same
   /api/marketing-enquiries endpoint. */

export const LEAD_FORM = {
  learnerOptions: contactUsData.form?.learnerOptions || [
    'Corporate Learner',
    'Individual Learner',
    'Institution Learner',
  ],
  source: 'Chatbot',
  title: 'Talk to our team',
  subtitle: 'Share a few details and our advisors will get back to you within 24 hours.',
  consent: 'By sending this, you agree to be contacted by iBridge360 about your enquiry.',
};

export const LEAD_INTRO =
  "Happy to get you to the right person 🙌 Just drop your details below and our team will reach out — usually within a day.";

export const LEAD_SUCCESS =
  "Got it — thank you! ✅ Our team will get in touch shortly.\n\nMeanwhile you can reach us at support@ibridge360.com or +91 96112 60360. Anything else you'd like to know?";

/** Phrases that mean "put me in touch" — opens the details card in chat. */
export const LEAD_INTENT_PATTERN =
  /\b(contact|call me|callback|call back|reach me|get in touch|talk to (a |an |the )?(human|person|someone|team|advisor|sales)|speak to|connect me|demo|price|pricing|cost|fees?|quote|proposal|enrol|enroll|admission|apply|sign ?up|join|register|counsell?ing|brochure)\b/i;
