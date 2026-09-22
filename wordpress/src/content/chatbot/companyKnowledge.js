/**
 * Site-wide iBridge360 knowledge for the chatbot.
 *
 * Compiled from the real marketing page content in wordpress/src/content so the
 * assistant can only ever answer with what the website already says. Kept
 * deliberately compact — it is prepended to every chat request, so summaries and
 * page pointers belong here while the deep per-product detail stays in the
 * product knowledge blocks.
 */
import aboutUsData from '../company/aboutUsData';
import contactUsData from '../company/contactUsData';
import corporateAudienceData from '../audience/corporateAudienceData';
import individualLearnerAudienceData from '../audience/individualLearnerAudienceData';
import institutionAudienceData from '../audience/institutionAudienceData';
import trainingUpskillingData from '../audience/trainingUpskillingData';
import codeArenaData from '../audience/codeArenaData';
import blogsData from '../blogs/blogsData';
import { TRAINING_TITLE_TO_PATH } from '../training/trainingPrograms';
import {
  CAREER_PROGRAMS_KNOWLEDGE,
  CAREER_PROGRAM_SITE_PAGES,
} from './careerProgramsKnowledge';

/** Every page a visitor can be pointed to, with what it actually covers. */
export const SITE_PAGES = [
  ['/', 'Home — company overview, products, programs, testimonials'],
  ['/about-us', 'About Us — story, leadership team, AI platform, partnerships'],
  ['/products', 'Products — iBridge360 LMS, NexBridge Assessment, iB Code Arena'],
  ['/learnsmart-lms', 'iBridge360 LMS — AI-powered learning management platform'],
  ['/online-assessment-platform', 'NexBridge Assessment — secure online exams'],
  ['/code-arena', 'iB Code Arena — coding contests and hackathon arena'],
  ['/programs', 'Programs — all career programs and courses'],
  ...CAREER_PROGRAM_SITE_PAGES,
  ['/training-upskilling', 'Training & Upskilling — corporate/institution training tracks'],
  ['/corporate', 'Corporate — L&D, corporate training, workforce upskilling'],
  ['/institution', 'Institutions — campus programs, faculty development, placements'],
  ['/individual-learner', 'Individual Learners — career programs and job readiness'],
  ['/blogs', 'Blogs — articles on data, careers and learning'],
  ['/book-career-counselling', 'Book a free career counselling session'],
  ['/contact-us', 'Contact Us — email, phone, office address and enquiry form'],
  ['/privacy-policy', 'Privacy Policy'],
  ['/terms-conditions', 'Terms & Conditions'],
];

const line = (label, value) => (value ? `${label}: ${value}` : '');
const clean = (parts) => parts.filter(Boolean).join('\n');

function heroLine(data) {
  const h = data?.hero || {};
  const title = [h.title, h.titleAccent].filter(Boolean).join(' ').trim();
  return [title, h.subtitle].filter(Boolean).join(' — ');
}

function bulletList(items = [], format) {
  return items.map((item) => `- ${format(item)}`).join('\n');
}

function audienceBlock(label, path, data, { maxPrograms = 8 } = {}) {
  const why = (data?.whyChoose?.items || [])
    .slice(0, 4)
    .map((i) => i.title)
    .join(', ');
  const programs = (data?.programs || [])
    .slice(0, maxPrograms)
    .map((p) => p.name)
    .join('; ');

  return clean([
    `### ${label} (${path})`,
    heroLine(data),
    line('Why choose', why),
    line('Offerings', programs),
  ]);
}

/** FAQ entries from every audience page, deduplicated by question. */
function collectFaqs(sources, limit = 8) {
  const seen = new Set();
  const out = [];

  sources.forEach(([label, data]) => {
    (data?.faq?.categories || []).forEach((category) => {
      (category.items || []).forEach((item) => {
        const key = item.question?.trim().toLowerCase();
        if (!key || seen.has(key) || out.length >= limit) return;
        seen.add(key);
        out.push(`Q (${label}): ${item.question}\nA: ${item.answer}`);
      });
    });
  });

  return out.join('\n\n');
}

function buildCompanyKnowledge() {
  const contacts = (contactUsData.contacts || [])
    .map((c) => `${c.label}: ${c.value}${c.hint ? ` (${c.hint})` : ''}`)
    .join('\n- ');
  const social = (contactUsData.social || [])
    .map((s) => `${s.label}: ${s.href}`)
    .join(' | ');
  const stats = (aboutUsData.stats || [])
    .map((s) => `${s.value} ${s.label}`)
    .join(' · ');
  const leaders = [
    ...(aboutUsData.leadership?.profiles || []),
    aboutUsData.advisor?.profile,
  ]
    .filter(Boolean)
    .map((p) => `${p.name} — ${p.role || p.roleFull}`)
    .join('; ');
  const aiPlatform = (aboutUsData.aiPlatform?.features || [])
    .map((f) => (typeof f === 'string' ? f : f.title || f.text))
    .filter(Boolean)
    .join(', ');
  const trainingTracks = Object.keys(TRAINING_TITLE_TO_PATH).slice(0, 14).join(', ');
  const articles = (blogsData.posts || [])
    .slice(0, 5)
    .map((p) => `${p.title} (${p.to})`)
    .join('; ');

  return `
# iBridge360 — company knowledge (source: the iBridge360 website)

## Identity
iBridge360 Edtech Pvt Ltd — ${heroLine(aboutUsData)}
${line('Track record', stats)}
${line('Leadership', leaders)}
${line('AI platform capabilities', aiPlatform)}
${line('Partnerships', aboutUsData.partnerships?.subtitle)}

## How to reach us
- ${contacts}
- Response time: ${contactUsData.hero?.trust?.[0]?.label || 'Reply within 24 hrs'}
- Office hours: ${contactUsData.map?.hours || 'Mon–Sat, 10am–6pm IST'}
- Social: ${social}
- Enquiry form: /contact-us · Free career counselling: /book-career-counselling

## Site map (point visitors to the right page)
${bulletList(SITE_PAGES, ([path, desc]) => `${path} — ${desc}`)}

## Who we serve
${audienceBlock('Corporate', '/corporate', corporateAudienceData)}

${audienceBlock('Institutions', '/institution', institutionAudienceData)}

${audienceBlock('Individual learners', '/individual-learner', individualLearnerAudienceData)}

## Products
- iBridge360 LMS (/learnsmart-lms) — AI-powered LMS: programs, course player, assignments, batches, AI practice, mentors, career support.
- NexBridge Assessment (/online-assessment-platform, live: https://ibcodex.ibridge360.com/) — secure online assessments, AI proctoring, coding tests, analytics.
- iB Code Arena (/code-arena) — ${heroLine(codeArenaData) || 'coding practice and contest arena'}

${CAREER_PROGRAMS_KNOWLEDGE}

## Training & upskilling (/training-upskilling)
${heroLine(trainingUpskillingData)}
Tracks: ${trainingTracks}

## Recent articles (/blogs)
${articles}

## FAQ (from the website)
${collectFaqs([
  ['Corporate', corporateAudienceData],
  ['Institutions', institutionAudienceData],
  ['Learners', individualLearnerAudienceData],
  ['Training', trainingUpskillingData],
])}
`.trim();
}

export const COMPANY_KNOWLEDGE = buildCompanyKnowledge();

export default COMPANY_KNOWLEDGE;
