import { SHARED_HIGHLIGHTS } from '../programs/sharedDefaults';
import { resolveToolLogo } from './trainingToolkits';

const DEFAULT_PROJECT_IMAGES = [
  '/wp-content/uploads/2024/04/leave.gif',
  '/wp-content/uploads/2024/04/book.gif',
  '/wp-content/uploads/2024/04/contact.gif',
  '/wp-content/uploads/2024/04/hospital.gif',
  '/wp-content/uploads/2024/04/inventory.gif',
];

/**
 * Builds a full ProgramPage config from a compact training definition.
 * Same reusable sections as Programs — Training pages omit certificate.
 */
export function buildTrainingProgram(def) {
  const {
    slug,
    name,
    audience = 'Individual',
    duration = '3–6 Months',
    heroDescription,
    curriculumTitle,
    curriculumAccent = 'Curriculum',
    curriculumDescription,
    modules,
    projects = [],
    tools = [],
    toolsTitle = 'Skills, Tools &',
    toolsAccent = 'Tech Stack',
    toolsSubtitle,
    highlights,
    highlightsSubtitle,
    formPrefix,
    seoDescription,
    faqExtras = {},
  } = def;

  const prefix = formPrefix || slug.replace(/-/g, '').slice(0, 8);

  return {
    seo: {
      title: `${name} | Training & Upskilling | iBridge360`,
      description:
        seoDescription ||
        `${name} training from iBridge360 — industry skills, modern tech stacks, hands-on projects, and mentor-led upskilling.`,
    },
    pageId: '508',

    hero: {
      title: name,
      description:
        heroDescription ||
        `Build job-ready skills in ${name} with market-aligned tech stacks, hands-on labs, mentor support, and outcome-focused practice.`,
      formSource: `Training — ${name}`,
      formCourse: name,
      formIdPrefix: prefix,
      duration,
    },

    curriculum: {
      eyebrow: 'Course Overview',
      title: curriculumTitle || name,
      titleAccent: curriculumAccent,
      description:
        curriculumDescription ||
        `A practical ${name} pathway with the skills and stacks enterprises hire and train for — applied labs, scenarios, and mentor-guided progress.`,
      modules,
    },

    keyHighlights: {
      subtitle:
        highlightsSubtitle ||
        `Built around skills employers and L&D teams invest in — practical depth, not slide-only theory.`,
      items: highlights || SHARED_HIGHLIGHTS,
    },

    certificate: null,

    projects: {
      description: `Build portfolio-ready and workplace-ready ${name.toLowerCase()} work samples using the same tools teams use in production.`,
      projects: projects.map((project, index) => ({
        title: project.title,
        description: project.description,
        tags: project.tags || [],
        image: project.image || DEFAULT_PROJECT_IMAGES[index % DEFAULT_PROJECT_IMAGES.length],
      })),
    },

    tools: {
      title: toolsTitle,
      titleAccent: toolsAccent,
      subtitle:
        toolsSubtitle ||
        `Industry-standard skills and technologies covered across the ${name} pathway — aligned to what training markets and employers expect.`,
      tools: (tools || []).map((item) => ({
        name: item.name,
        image: item.image || resolveToolLogo(item.name),
      })),
    },

    faq: {
      description: `Everything you need to know about ${name} under Training & Upskilling.`,
      categories: [
        {
          id: 'general',
          title: 'General Questions',
          items: [
            {
              id: 'what-is',
              question: `What is the ${name} pathway?`,
              answer:
                faqExtras.whatIs ||
                `An industry-oriented Training & Upskilling track covering in-demand skills, modern tech stacks / frameworks, hands-on practice, and career or workforce application for ${name}.`,
            },
            {
              id: 'who-for',
              question: 'Who is this for?',
              answer: faqExtras.whoFor || 'Ideal for:',
              bullets: faqExtras.whoForBullets || [
                `${audience} learners and upskilling cohorts`,
                'Professionals targeting role-ready skill outcomes',
                'Organizations closing stack and capability gaps',
              ],
            },
            {
              id: 'stack',
              question: 'Which skills and tech stacks are covered?',
              answer:
                faqExtras.stack ||
                'Each pathway teaches market-aligned skills and tools used by leading training providers and employers — from core foundations to applied labs. See the Skills / Tech Stack section on this page for the full list.',
            },
            {
              id: 'shown-where',
              question: 'Is this listed under Programs?',
              answer:
                'No. This is part of Training & Upskilling (Products menu). Flagship Programs (Data Engineering, Data Science, Full Stack) remain on the Programs page.',
            },
            ...(faqExtras.extraItems || []),
          ],
        },
        {
          id: 'delivery',
          title: 'Delivery & Outcomes',
          items: [
            {
              id: 'duration',
              question: 'What is the duration?',
              answer: `Typical delivery runs about ${duration}, with weekday / weekend and cohort options based on batch design.`,
            },
            {
              id: 'format',
              question: 'How is training delivered?',
              answer:
                faqExtras.format ||
                'Instructor-led live sessions, hands-on labs, mentor checkpoints, assessments, and project work — virtual, on-site, or blended based on your needs.',
            },
            {
              id: 'support',
              question: 'Do learners get mentor support?',
              answer:
                'Yes. Mentors guide labs, review submissions, clarify doubts, and help learners apply skills to workplace or interview scenarios.',
            },
            {
              id: 'custom',
              question: 'Can you customize the stack for our team?',
              answer:
                faqExtras.custom ||
                'Yes. Corporate and institution cohorts can prioritize the exact tools, cloud vendors, or frameworks your environment uses.',
            },
          ],
        },
      ],
    },

    cta: {
      title: `Ready to Start ${name}?`,
      description:
        'Talk to our team about curriculum fit, stack customization, batch options, and outcomes mapped to your career or workforce goals.',
    },

    sticky: {
      title: name,
      subtitle: `${duration} · Training & Upskilling`,
    },

    modal: {
      programName: name,
      title: `Enquire about ${name}`,
      description:
        'Share your goals and stack preferences — our advisors will map curriculum, format, and next steps.',
      panelImage: '/wp-content/uploads/2024/03/Data-Science1-1.png',
      panelImageAlt: `${name} training`,
    },
  };
}
