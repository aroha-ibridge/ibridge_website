/**
 * Marketing detail content for HTML programs only (no CSS).
 */

export const HTML_COURSE_CONTENT = {
  displayName: 'HTML',
  lead:
    "Master HTML—the standard language for structuring web pages, forms, semantics, and accessible content—through a curriculum aligned with industry web development programs.",
  overview:
    'This HTML course takes you from first tags to production-ready page structure. You will learn how browsers interpret markup, use semantic HTML5 elements, build tables, lists, links, media, and forms, and apply layout and accessibility best practices. Modules follow the progression used by leading platforms (foundations → structure & semantics → projects), including a capstone you can add to your portfolio. Self-paced learning with a certificate on completion.',
  hoursLabel: '1 Hr',
  language: 'English',
  levelTag: 'All Levels',
  levelName: 'Levels',
  syllabus: [
    {
      title: 'Beginner',
      meta: 'Foundations of HTML',
      items: [
        'Basic Introduction',
        'HTML Editors',
        'HTML Basic Tags',
        'HTML Attributes, Paragraphs & Favicon',
        'Headings & Comments',
        'HTML Formatting',
        'HTML Style Attribute',
        'HTML Quotations',
        'HTML Links',
        'Images & File Paths',
        'HTML Tables',
        'HTML Lists',
        'HTML Block & Inline',
      ],
    },
    {
      title: 'Intermediate',
      meta: 'Structure & Semantics',
      items: [
        'HTML Classes',
        'HTML ID',
        'HTML iframes',
        'HTML Layout',
        'div vs Section vs Article',
        'HTML Semantics',
        'HTML Forms & Form Input Attributes',
        'HTML Form submit',
        'DOM & How it is related to HTML',
        'Intro to HTML5 & New Features',
        'Best Practices for Creating Responsive Pages',
      ],
    },
    {
      title: 'Advanced',
      meta: 'Projects & Best Practices',
      items: [
        'Building multi-page HTML websites',
        'Accessible HTML best practices',
        'HTML5 media elements (audio & video)',
        'Meta tags & SEO basics for HTML pages',
        'Capstone Project',
      ],
    },
  ],
  requirements: [
    'Basic understanding of how websites work.',
    'The urge to build structured web pages with HTML.',
  ],
  faqs: [
    {
      question: 'What is an HTML course?',
      answer:
        'An HTML course teaches you how to create the structure of web pages using HTML tags, elements, forms, tables, semantic layout, and HTML5 features so you can build clean, well-structured websites.',
    },
    {
      question: 'Why learn HTML?',
      answer:
        'HTML is the foundation of every website. Learning it helps you structure web content correctly and prepares you for styling, JavaScript, and modern frontend development.',
    },
    {
      question: 'Why choose iBridge360 for learning HTML online courses?',
      answer:
        'iBridge360 offers structured, industry-aligned learning with practical projects, mentor support, and a certificate on completion — so you can build real skills and showcase them to employers.',
    },
    {
      question: 'What are the benefits of learning an HTML certification course?',
      answer:
        'You gain job-ready web fundamentals, a portfolio project, stronger interview confidence, and a certificate that helps enhance your professional profile.',
    },
    {
      question: 'Is HTML difficult to learn?',
      answer:
        'HTML is beginner-friendly. With guided modules and hands-on practice from basics to advanced HTML5 topics and projects, learners of all levels can progress confidently.',
    },
  ],
};

/** Match programs like "HTML" only (not CSS-only or JS courses). */
export function isHtmlCssProgram(program) {
  const name = String(program?.name || '')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim();
  if (!name) return false;
  // Dedicated HTML course (e.g. "HTML", "HTML Basics")
  if (name === 'html') return true;
  if (/^html\b/.test(name) && !name.includes('css') && !name.includes('javascript') && !name.includes('react')) {
    return true;
  }
  // Still allow "HTML & CSS" / "HTML and CSS" names but content stays HTML-only
  if (name.includes('html') && name.includes('css')) return true;
  return false;
}

export function getHtmlCssCourseContent() {
  return HTML_COURSE_CONTENT;
}

// Keep older export name for any existing imports
export const HTML_CSS_COURSE_CONTENT = HTML_COURSE_CONTENT;
