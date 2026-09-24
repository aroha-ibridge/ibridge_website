/**
 * Programs navbar mega-menu — QSpiders-style categories + course grid.
 * Sourced from live program routes.
 */

export const PROGRAMS_MEGA_CATEGORIES = [
  {
    id: 'popular',
    title: 'Popular Courses',
    icon: 'star',
  },
  {
    id: 'data-engineering',
    title: 'Data Engineering',
    icon: 'pipeline',
  },
  {
    id: 'data-analytics',
    title: 'Data Science & Analytics',
    icon: 'chart',
  },
  {
    id: 'software-dev',
    title: 'Software Development',
    icon: 'code',
  },
  {
    id: 'bootcamps',
    title: 'Bootcamps & Tools',
    icon: 'bolt',
  },
];

/** All program cards used across categories */
export const PROGRAMS_MEGA_COURSES = [
  {
    id: 'data-engineering',
    title: 'Data Engineering',
    desc: 'SQL, Python, ETL, AWS Cloud, Power BI — build production pipelines.',
    to: '/programs#data-engineering',
    duration: '3 Months',
    color: '#18479f',
    categories: ['popular', 'data-engineering'],
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    desc: 'Excel, SQL, Python, and Power BI for business insights.',
    to: '/programs#data-analytics',
    duration: '3 Months',
    color: '#0ea5e9',
    categories: ['popular', 'data-analytics'],
  },
  {
    id: 'pyspark',
    title: 'PySpark',
    desc: 'Apache Spark, Spark SQL, and large-scale ETL pipelines.',
    to: '/programs#pyspark',
    duration: '3 Months',
    color: '#e11d48',
    categories: ['data-engineering'],
  },
  {
    id: 'databricks',
    title: 'Databricks Data Engineering',
    desc: 'Lakehouse pipelines with PySpark, Delta Lake, and Unity Catalog.',
    to: '/programs#databricks-data-engineering',
    duration: '2 Months',
    color: '#ff3621',
    categories: ['data-engineering'],
  },
  {
    id: 'fabric',
    title: 'Microsoft Fabric Data Engineering',
    desc: 'OneLake, Lakehouse, PySpark, Data Factory, and Power BI.',
    to: '/programs#microsoft-fabric-data-engineering',
    duration: '2 Months',
    color: '#0078d4',
    categories: ['data-engineering'],
  },
  {
    id: 'data-science',
    title: 'Data Science',
    desc: 'ML, analytics, and visualization for data-driven careers.',
    to: '/programs#data-science',
    duration: '6 Months',
    color: '#7c3aed',
    categories: ['popular', 'data-analytics'],
  },
  {
    id: 'tableau',
    title: 'Tableau',
    desc: 'BI dashboards with Tableau Desktop, Prep, SQL, and Excel.',
    to: '/programs#tableau',
    duration: '2 Months',
    color: '#e97627',
    categories: ['data-analytics', 'bootcamps'],
  },
  {
    id: 'advanced-excel',
    title: 'Advanced Excel',
    desc: 'Formulas, Pivot Tables, Power Query, and Power Pivot dashboards.',
    to: '/programs#advanced-excel',
    duration: '2 Months',
    color: '#217346',
    categories: ['data-analytics', 'bootcamps'],
  },
  {
    id: 'sql-bootcamp',
    title: 'SQL Bootcamp',
    desc: 'Queries, joins, CTEs, and window functions for analytics.',
    to: '/programs#sql-bootcamp',
    duration: 'Bootcamp',
    color: '#336791',
    categories: ['bootcamps'],
  },
  {
    id: 'python-bootcamp',
    title: 'Python Bootcamp',
    desc: 'OOP, Pandas, APIs, SQL, automation, and analytics with Python.',
    to: '/programs#python-bootcamp',
    duration: 'Bootcamp',
    color: '#3776ab',
    categories: ['bootcamps'],
  },
  {
    to: '/programs#full-stack-mern',
    duration: '3 Months',
    color: '#ed8b00',
    categories: ['popular'],
  },
  {
    id: 'java-fullstack',
    title: 'Java Full Stack',
    desc: 'Core Java, Spring Boot, and React for end-to-end apps.',
    to: '/programs#java-fullstack',
    duration: '3 Months',
    color: '#ed8b00',
    categories: ['software-dev'],
  },
  {
    id: 'python-fullstack',
    title: 'Python Full Stack',
    desc: 'Python, Django / FastAPI, and React for full-stack builds.',
    to: '/programs#python-fullstack',
    duration: '3 Months',
    color: '#306998',
    categories: ['software-dev'],
  },
  {
    id: 'mern-fullstack',
    title: 'MERN Full Stack',
    desc: 'MongoDB, Express, React, and Node.js — ship full-stack apps.',
    to: '/programs#full-stack-mern',
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
