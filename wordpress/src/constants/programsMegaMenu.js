/**
 * Programs navbar mega-menu — QSpiders-style categories + course grid.
 * Sourced from live program routes.
 */

export const PROGRAMS_MEGA_CATEGORIES = [
  {
    id: 'popular',
    title: 'Popular Courses',
    desc: 'Our most enrolled programs across data, technology, and business domains.',
    icon: 'star',
  },
  {
    id: 'data-engineering',
    title: 'Data Engineering',
    desc: 'SQL, Python, ETL, cloud pipelines, and real-time data infrastructure.',
    icon: 'pipeline',
  },
  {
    id: 'data-analytics',
    title: 'Data Science & Analytics',
    desc: 'Machine learning, business intelligence, and AI-powered analytics.',
    icon: 'chart',
  },
  {
    id: 'software-dev',
    title: 'Software Development',
    desc: 'Full-stack web development, coding interviews, and software engineering.',
    icon: 'code',
  },
  {
    id: 'bootcamps',
    title: 'Bootcamps & Tools',
    desc: 'Intensive short-format programs for rapid skill-building and job readiness.',
    icon: 'bolt',
  },
];

/** All program cards used across categories */
export const PROGRAMS_MEGA_COURSES = [
  {
    id: 'data-engineering',
    title: 'Data Engineering',
    desc: 'SQL, Python, ETL, AWS Cloud, Power BI — build production pipelines.',
    to: '/courses/data-engineering-course-bangalore',
    duration: '3 Months',
    color: '#18479f',
    categories: ['popular', 'data-engineering'],
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    desc: 'Excel, SQL, Python, and Power BI for business insights.',
    to: '/courses/data-analytics-course-bangalore',
    duration: '3 Months',
    color: '#0ea5e9',
    categories: ['popular', 'data-analytics'],
  },
  {
    id: 'pyspark',
    title: 'PySpark',
    desc: 'Apache Spark, Spark SQL, and large-scale ETL pipelines.',
    to: '/courses/pyspark-course-bangalore',
    duration: '3 Months',
    color: '#e11d48',
    categories: ['data-engineering'],
  },
  {
    id: 'databricks',
    title: 'Databricks Data Engineering',
    desc: 'Lakehouse pipelines with PySpark, Delta Lake, and Unity Catalog.',
    to: '/courses/databricks-data-engineering-course-bangalore',
    duration: '2 Months',
    color: '#ff3621',
    categories: ['data-engineering'],
  },
  {
    id: 'fabric',
    title: 'Microsoft Fabric Data Engineering',
    desc: 'OneLake, Lakehouse, PySpark, Data Factory, and Power BI.',
    to: '/courses/microsoft-fabric-data-engineering-course-bangalore',
    duration: '2 Months',
    color: '#0078d4',
    categories: ['data-engineering'],
  },
  {
    id: 'data-science',
    title: 'Data Science',
    desc: 'ML, analytics, and visualization for data-driven careers.',
    to: '/courses/data-science-course-bangalore',
    duration: '6 Months',
    color: '#7c3aed',
    categories: ['popular', 'data-analytics'],
  },
  {
    id: 'tableau',
    title: 'Tableau',
    desc: 'BI dashboards with Tableau Desktop, Prep, SQL, and Excel.',
    to: '/courses/tableau-course-bangalore',
    duration: '2 Months',
    color: '#e97627',
    categories: ['data-analytics', 'bootcamps'],
  },
  {
    id: 'advanced-excel',
    title: 'Advanced Excel',
    desc: 'Formulas, Pivot Tables, Power Query, and Power Pivot dashboards.',
    to: '/courses/advanced-excel-course-bangalore',
    duration: '2 Months',
    color: '#217346',
    categories: ['data-analytics', 'bootcamps'],
  },
  {
    id: 'sql-bootcamp',
    title: 'SQL Bootcamp',
    desc: 'Queries, joins, CTEs, and window functions for analytics.',
    to: '/courses/sql-bootcamp-bangalore',
    duration: 'Bootcamp',
    color: '#336791',
    categories: ['bootcamps'],
  },
  {
    id: 'python-bootcamp',
    title: 'Python Bootcamp',
    desc: 'OOP, Pandas, APIs, SQL, automation, and analytics with Python.',
    to: '/courses/python-bootcamp-bangalore',
    duration: 'Bootcamp',
    color: '#3776ab',
    categories: ['bootcamps'],
  },
  {
    id: 'full-stack',
    title: 'Full Stack',
    desc: 'Java, Python, or MERN — build end-to-end web applications.',
    to: '/courses/java-full-stack-course-bangalore',
    duration: '3 Months',
    color: '#ed8b00',
    categories: ['popular'],
  },
  {
    id: 'java-fullstack',
    title: 'Java Full Stack',
    desc: 'Core Java, Spring Boot, and React for end-to-end apps.',
    to: '/courses/java-full-stack-course-bangalore',
    duration: '3 Months',
    color: '#ed8b00',
    categories: ['software-dev'],
  },
  {
    id: 'python-fullstack',
    title: 'Python Full Stack',
    desc: 'Python, Django / FastAPI, and React for full-stack builds.',
    to: '/courses/python-full-stack-course-bangalore',
    duration: '3 Months',
    color: '#306998',
    categories: ['software-dev'],
  },
  {
    id: 'mern-fullstack',
    title: 'MERN Full Stack',
    desc: 'MongoDB, Express, React, and Node.js — ship full-stack apps.',
    to: '/courses/mern-full-stack-course-bangalore',
    duration: '3 Months',
    color: '#10b981',
    categories: ['software-dev'],
  },
];

/** Fixed order for Popular Courses */
const POPULAR_COURSE_IDS = [
  'data-engineering',
  'data-analytics',
  'full-stack',
  'data-science',
];

export function getProgramsByCategory(categoryId) {
  if (categoryId === 'popular') {
    return POPULAR_COURSE_IDS.map((id) =>
      PROGRAMS_MEGA_COURSES.find((c) => c.id === id),
    ).filter(Boolean);
  }
  return PROGRAMS_MEGA_COURSES.filter((c) => c.categories.includes(categoryId));
}
