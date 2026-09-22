/**
 * Career programs catalog for chatbots — sourced from the live programs cards
 * so San always matches /programs.
 */
import homeProgramCards from '../../components/sections/home/homeProgramCardsData';

/** Compact list: Title — duration — summary — path */
export function buildCareerProgramsKnowledge() {
  const lines = homeProgramCards.map(
    (p) =>
      `- **${p.title}** (${p.duration}${p.benefit ? `, ${p.benefit}` : ''}): ${p.summary} → ${p.href}`,
  );

  return `
## Current career programs (from /programs)
Full Stack Development: learners choose Java, Python, or MERN tracks —
/java-full-stack-development-course · /python-full-stack-development-course · /mern-full-stack-development-course
Browse all: /programs · Enrol / details: /contact-us · Counselling: /book-career-counselling

${lines.join('\n')}
`.trim();
}

export const CAREER_PROGRAMS_KNOWLEDGE = buildCareerProgramsKnowledge();

/** Site-map entries for each program card + related full-stack tracks */
export const CAREER_PROGRAM_SITE_PAGES = [
  ...homeProgramCards.map((p) => [p.href, `${p.title} — ${p.summary}`]),
  ['/java-full-stack-development-course', 'Java Full Stack Development program'],
  ['/python-full-stack-development-course', 'Python Full Stack Development program'],
];

export default homeProgramCards;
