/**
 * Master Data Engineering Program in Bangalore — Curriculum (14 Modules in 5 Phases).
 * Sourced directly from program specification.
 */

const masterDataEngineeringCurriculum = [
  {
    title: 'Module 1: Relational Databases, SQL and Data Warehousing',
    topicsLabel: 'Topics Covered',
    description:
      'Query relational databases, combine data from multiple tables, design structured data models and understand how data is organized for analytics.',
    topics: [
      'RDBMS concepts and architecture',
      'SQL fundamentals (DDL, DML, DQL)',
      'Joins, subqueries and window functions',
      'Normalization and data modelling',
      'Data warehousing and ETL concepts',
    ],
  },
  {
    title: 'Module 2: Python Programming for Data Engineering',
    topicsLabel: 'Topics Covered',
    description:
      'Write reusable Python scripts to read files, process structured data, interact with APIs and connect to databases.',
    topics: [
      'Python fundamentals and syntax',
      'Data structures and functions',
      'File handling and exception management',
      'Working with CSV, JSON and APIs',
      'Database connectivity',
      'Modular scripting for data processing',
    ],
  },
  {
    title: 'Module 3: Data Manipulation with Pandas',
    topicsLabel: 'Topics Covered',
    description:
      'Clean, transform, combine and prepare datasets for reporting and downstream data pipelines.',
    topics: [
      'DataFrames and data inspection',
      'Data cleaning and missing-value handling',
      'Filtering, grouping and aggregation',
      'Merging, joining and concatenation',
      'Date and time processing',
      'Data quality checks and transformations',
    ],
  },
  {
    title: 'Module 4: Advanced Excel for Data Analysis',
    topicsLabel: 'Topics Covered',
    description:
      'Analyze business datasets, summarize large amounts of information and create reports that support decision-making.',
    topics: [
      'Advanced formulas and lookup functions',
      'Data cleaning and validation',
      'PivotTables and PivotCharts',
      'Interactive reporting and dashboards',
      'Business data analysis exercises',
    ],
  },
  {
    title: 'Module 5: AWS Fundamentals for Data Engineering',
    topicsLabel: 'Topics Covered',
    description:
      'Set up cloud infrastructure, work with storage and ETL services, and build scalable data pipelines.',
    topics: [
      'Cloud concepts and AWS architecture',
      'Amazon S3 (storage and data lake)',
      'AWS IAM (access and security)',
      'AWS Glue (data catalog and ETL)',
    ],
  },
  {
    title: 'Module 6: Business Intelligence with Power BI',
    topicsLabel: 'Topics Covered',
    description:
      'Transform datasets into interactive reports and dashboards to gain business insights.',
    topics: [
      'Data import and Power Query',
      'Data modelling and relationships',
      'Interactive dashboards and visualizations',
      'Publishing and sharing reports',
    ],
  },
  {
    title: 'Module 7: Git, GitHub and Linux Essentials',
    topicsLabel: 'Topics Covered',
    description:
      'Use command-line tools, manage code with Git and GitHub, and follow best practices for development workflows.',
    topics: [
      'Linux commands and file system navigation',
      'Git concepts, repositories and branches',
      'GitHub collaboration and pull requests',
      'Development workflow and troubleshooting',
    ],
  },
  {
    title: 'Module 8: Big Data Processing with Apache Spark and PySpark',
    topicsLabel: 'Topics Covered',
    description:
      'Work with large datasets using Spark, perform transformations and build scalable data pipelines.',
    topics: [
      'Distributed data processing concepts',
      'Spark SQL and DataFrames',
      'Transformations, joins and aggregations',
      'Partitioning and caching',
      'Reading and writing data (CSV, JSON, Parquet)',
      'Building scalable batch pipelines',
    ],
  },
  {
    title: 'Module 9: Databricks and Delta Lake',
    topicsLabel: 'Topics Covered',
    description:
      'Build and manage data pipelines using Databricks and Delta Lake for real-world analytics.',
    topics: [
      'Lakehouse architecture',
      'Delta tables and transactions',
      'Schema enforcement and evolution',
      'Incremental processing',
      'Bronze, Silver and Gold layers',
      'Job monitoring and governance',
    ],
  },
  {
    title: 'Module 10: Snowflake Cloud Data Warehousing',
    topicsLabel: 'Topics Covered',
    description:
      'Work with Snowflake to load, transform and analyze data in a cloud data warehouse.',
    topics: [
      'Snowflake architecture',
      'Data loading (stages, COPY INTO)',
      'SQL-based transformations',
      'Role-based access and security',
      'Cost and performance optimization',
      'Data sharing and collaboration',
    ],
  },
  {
    title: 'Module 11: dbt (Data Transformation and Analytics Engineering)',
    topicsLabel: 'Topics Covered',
    description:
      'Build and deploy transformation pipelines using dbt, create reusable models and implement data quality tests for analytics-ready data.',
    topics: [
      'dbt fundamentals',
      'Data modelling with dbt',
      'Transformations, tests and documentation',
      'Modular and reusable data models',
      'Data quality and testing',
    ],
  },
  {
    title: 'Module 12: Apache Airflow Orchestration',
    topicsLabel: 'Topics Covered',
    description:
      'Orchestrate and automate data pipelines using Apache Airflow, with monitoring, error handling and production-ready workflows.',
    topics: [
      'DAGs, tasks and operators',
      'Scheduling and dependencies',
      'Integrating ingestion and transformation tasks',
      'Monitoring, retries and failure handling',
      'Best practices for production deployment',
    ],
  },
  {
    title: 'Module 13: LLMs, RAG and Introductory Agentic AI',
    topicsLabel: 'Topics Covered',
    description:
      'Learn how large language models fit into data workflows, from embeddings and vector search to RAG and agentic workflows.',
    topics: [
      'AI, ML and Generative AI fundamentals',
      'Prompt engineering',
      'Integrating LLMs with Python',
      'Embeddings and vector search',
      'Retrieval-Augmented Generation (RAG)',
      'Document ingestion and grounded responses',
      'Tool calling and agentic workflows',
      'Practical applications for data professionals',
      'Responsible AI and hallucination mitigation',
    ],
  },
  {
    title: 'Module 14: End-to-End Data Engineering Capstone',
    topicsLabel: 'Topics Covered',
    description:
      'Apply all the concepts you have learned in a real-world, end-to-end project, from data ingestion to analytics and reporting.',
    topics: [
      'Business problem definition',
      'Data ingestion, modelling and transformation',
      'Building a complete data pipeline',
      'Workflow orchestration with Airflow',
      'Analytical output and reporting',
      'AI-powered use case integration',
      'GitHub documentation',
      'Final project presentation and review',
    ],
  },
];

export default masterDataEngineeringCurriculum;
