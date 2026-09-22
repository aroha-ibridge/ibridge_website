/**
 * Databricks Data Engineering — course structure (modules + topics).
 */

const databricksDataEngineeringCurriculum = [
  {
    title: 'Data Engineering Fundamentals',
    topicsLabel: 'Topics Covered',
    description:
      'Build a foundation in modern data engineering — ETL/ELT, pipelines, ingestion, transformation, and architecture.',
    topics: [
      'Data Engineering Fundamentals',
      'Modern Data Engineering Concepts',
      'ETL & ELT',
      'Data Pipelines',
      'Structured Data',
      'Unstructured Data',
      'Data Ingestion',
      'Data Transformation',
      'Data Processing Concepts',
      'Modern Data Engineering Architecture',
    ],
  },
  {
    title: 'Python & SQL for Data Engineering',
    topicsLabel: 'Topics Covered',
    description:
      'Use Python and SQL as the working languages of data engineering — processing, queries, joins, and transformations.',
    groups: [
      {
        label: 'Python',
        items: [
          'Python Fundamentals',
          'Data Structures',
          'Functions',
          'File Handling',
          'Exception Handling',
          'Python for Data Processing',
          'Pandas Fundamentals',
        ],
      },
      {
        label: 'SQL',
        items: [
          'SQL Fundamentals',
          'SELECT Queries',
          'Filtering & Sorting',
          'Joins',
          'Aggregate Functions',
          'GROUP BY & HAVING',
          'Subqueries',
          'Window Functions',
          'Data Transformation with SQL',
        ],
      },
    ],
  },
  {
    title: 'Apache Spark',
    topicsLabel: 'Topics Covered',
    description:
      'Process data at scale with Spark — architecture, DataFrames, transformations, Spark SQL, and distributed execution.',
    topics: [
      'Apache Spark Fundamentals',
      'Spark Architecture',
      'Driver & Executors',
      'Spark Jobs, Stages & Tasks',
      'Spark DataFrames',
      'DataFrame Operations',
      'Transformations',
      'Actions',
      'Lazy Evaluation',
      'Spark SQL',
      'Spark Performance Basics',
      'Distributed Data Processing',
    ],
  },
  {
    title: 'Databricks Fundamentals',
    topicsLabel: 'Topics Covered',
    description:
      'Work in the Databricks platform — workspace, notebooks, clusters, compute, DBFS, libraries, and jobs.',
    topics: [
      'Databricks Overview',
      'Databricks Workspace',
      'Databricks Notebooks',
      'Clusters',
      'Compute',
      'DBFS',
      'Libraries',
      'Databricks Jobs',
      'Workspace Management',
      'Running Data Engineering Workloads',
    ],
  },
  {
    title: 'Delta Lake',
    topicsLabel: 'Topics Covered',
    description:
      'Store reliable lake data with Delta Lake — ACID tables, schema control, time travel, and optimization.',
    topics: [
      'Delta Lake Fundamentals',
      'Delta Tables',
      'ACID Transactions',
      'Schema Enforcement',
      'Schema Evolution',
      'Data Reliability',
      'Time Travel',
      'Data Versioning',
      'Delta Table Optimization',
      'Managing Data Lake Tables',
    ],
  },
  {
    title: 'Lakehouse Architecture',
    topicsLabel: 'Topics Covered',
    description:
      'Design Lakehouse pipelines with Medallion Architecture — Bronze, Silver, and Gold layers plus governance basics.',
    topics: [
      'Lakehouse Architecture Fundamentals',
      'Medallion Architecture',
      'Bronze Layer',
      'Silver Layer',
      'Gold Layer',
      'Data Modeling',
      'Data Transformation Architecture',
      'Data Governance Fundamentals',
      'Building Lakehouse Pipelines',
      'Modern Data Platform Architecture',
    ],
  },
  {
    title: 'Databricks Data Engineering',
    topicsLabel: 'Topics Covered',
    description:
      'Build and schedule ETL on Databricks — workflows, batch and incremental processing, ingestion, and orchestration.',
    topics: [
      'ETL Pipeline Development',
      'Databricks Workflows',
      'Databricks Jobs',
      'Batch Processing',
      'Incremental Processing',
      'Data Ingestion',
      'Data Transformation',
      'Pipeline Orchestration',
      'Scheduling Data Pipelines',
      'External Data Sources',
      'End-to-End Data Engineering Workflows',
    ],
  },
  {
    title: 'Advanced Databricks',
    topicsLabel: 'Topics Covered',
    description:
      'Apply production practices — Unity Catalog, governance, security, Spark optimization, and monitoring.',
    topics: [
      'Unity Catalog',
      'Data Governance',
      'Data Security',
      'Access Control',
      'Data Permissions',
      'Workspace Governance',
      'Performance Optimization',
      'Spark Optimization',
      'Databricks Workload Optimization',
      'Monitoring',
      'Production Data Engineering Practices',
    ],
  },
  {
    title: 'Cloud & Real-World Integration',
    topicsLabel: 'Topics Covered',
    description:
      'Connect Databricks to cloud storage and sources — AWS and Azure basics, data lakes, and real-world workflows.',
    topics: [
      'Cloud Data Engineering Fundamentals',
      'Cloud Storage Concepts',
      'AWS Integration Basics',
      'Azure Integration Basics',
      'Data Ingestion from Cloud Sources',
      'External Data Sources',
      'Cloud-Based Data Pipelines',
      'Data Lake Integration',
      'Real-World Data Engineering Workflows',
      'Cloud Data Processing',
    ],
  },
  {
    title: 'Industry Capstone Project',
    topicsLabel: 'Topics Covered',
    description:
      'Build an end-to-end data engineering pipeline using Databricks, Apache Spark, SQL, PySpark, and Delta Lake.',
    topics: [
      'Data Ingestion',
      'Data Transformation',
      'PySpark Processing',
      'SQL Analysis',
      'Delta Lake Implementation',
      'Bronze → Silver → Gold Pipeline',
      'Databricks Workflows',
      'Data Quality',
      'Pipeline Optimization',
      'Cloud Integration',
      'Production-Oriented Data Engineering',
      'End-to-End Pipeline Development',
    ],
  },
];

export default databricksDataEngineeringCurriculum;
