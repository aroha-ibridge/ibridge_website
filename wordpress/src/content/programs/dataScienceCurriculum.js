/**
 * Data Science — course structure (modules + topics).
 * Industry-aligned curriculum covering the full analytics-to-ML workflow
 * expected by top bootcamps and hiring teams in 2025–2026.
 */

const dataScienceCurriculum = [
  {
    title: 'Python for Data Science',
    description: 'Programming foundations for analytics, automation, and ML workflows.',
    groups: [
      {
        label: 'Python Fundamentals',
        items: [
          'Variables, Data Types & Control Flow',
          'Functions, Modules & Packages',
          'Object-Oriented Programming Basics',
          'File Handling & Exception Handling',
          'Virtual Environments & pip',
        ],
      },
      {
        label: 'NumPy & Jupyter',
        items: [
          'Jupyter Notebook Workflows',
          'NumPy Arrays & Vectorized Operations',
          'Broadcasting & Linear Algebra Basics',
          'Random Sampling & Reproducibility',
        ],
      },
      {
        label: 'Git & Collaboration',
        items: [
          'Git Fundamentals & GitHub Workflow',
          'Branching, Commits & Pull Requests',
          'Reproducible Project Structure',
        ],
      },
      {
        label: 'Mini Project',
        items: ['Data Cleaning & Analysis Script using Python & Pandas'],
      },
    ],
  },
  {
    title: 'SQL & Databases',
    description: 'Extract, transform, and analyze data from relational databases.',
    groups: [
      {
        label: 'SQL Fundamentals',
        items: [
          'SELECT, WHERE, ORDER BY & Aggregations',
          'JOINs (INNER, LEFT, RIGHT, FULL)',
          'Subqueries & Common Table Expressions (CTEs)',
          'Window Functions (ROW_NUMBER, RANK, LAG/LEAD)',
          'GROUP BY & HAVING',
        ],
      },
      {
        label: 'Database Concepts',
        items: [
          'Relational Database Design',
          'Primary & Foreign Keys',
          'Normalization Basics',
          'Indexing & Query Performance',
        ],
      },
      {
        label: 'Project',
        items: ['Business Analytics Dashboard using SQL Queries on a Real Dataset'],
      },
    ],
  },
  {
    title: 'Statistics & Probability',
    description: 'Statistical thinking for data-driven decisions and model validation.',
    topics: [
      'Descriptive Statistics (Mean, Median, Variance, Std Dev)',
      'Probability Distributions (Normal, Binomial, Poisson)',
      'Sampling Methods & Central Limit Theorem',
      'Confidence Intervals & Margin of Error',
      'Hypothesis Testing (t-test, chi-square, ANOVA)',
      'Correlation vs Causation',
      'Linear & Logistic Regression (Statistical View)',
      'A/B Testing & Experiment Design',
      'P-values, Significance & Statistical Power',
    ],
  },
  {
    title: 'Data Wrangling & EDA',
    description: 'Pandas-powered cleaning, exploration, and insight discovery.',
    groups: [
      {
        label: 'Pandas & Data Manipulation',
        items: [
          'Series & DataFrames',
          'Reading CSV, Excel & JSON Data',
          'Handling Missing Values & Outliers',
          'Data Type Conversion & Feature Creation',
          'Merging, Joining & Reshaping Data',
          'GroupBy, Pivot Tables & Aggregations',
        ],
      },
      {
        label: 'Exploratory Data Analysis',
        items: [
          'Univariate & Bivariate Analysis',
          'Distribution Analysis & Box Plots',
          'Correlation Analysis & Heatmaps',
          'Feature Profiling & Data Quality Checks',
          'Business Question Framing',
        ],
      },
      {
        label: 'Project',
        items: ['End-to-End EDA Report on a Real-World Business Dataset'],
      },
    ],
  },
  {
    title: 'Data Visualization & BI',
    description: 'Communicate insights with charts, dashboards, and storytelling.',
    groups: [
      {
        label: 'Python Visualization',
        items: [
          'Matplotlib & Seaborn',
          'Plotly Interactive Charts',
          'Chart Selection & Design Principles',
          'Storytelling with Data',
        ],
      },
      {
        label: 'Power BI',
        items: [
          'Data Import & Transformation (Power Query)',
          'DAX Basics & Calculated Measures',
          'Interactive Dashboards & Slicers',
          'KPI Design & Executive Reporting',
        ],
      },
      {
        label: 'Project',
        items: ['Executive Dashboard for Sales / Marketing / Operations KPIs'],
      },
    ],
  },
  {
    title: 'Machine Learning',
    description: 'Build, evaluate, and tune predictive models with scikit-learn.',
    groups: [
      {
        label: 'Supervised Learning',
        items: [
          'Linear & Logistic Regression',
          'Decision Trees & Random Forests',
          'Gradient Boosting (XGBoost / LightGBM)',
          'K-Nearest Neighbors (KNN)',
          'Support Vector Machines (SVM)',
        ],
      },
      {
        label: 'Unsupervised Learning',
        items: [
          'K-Means & Hierarchical Clustering',
          'PCA & Dimensionality Reduction',
          'Anomaly Detection Basics',
        ],
      },
      {
        label: 'Model Development',
        items: [
          'Train / Test Split & Cross-Validation',
          'Feature Engineering & Encoding',
          'Hyperparameter Tuning (GridSearch / RandomSearch)',
          'Evaluation Metrics (Accuracy, Precision, Recall, F1, ROC-AUC, RMSE, R²)',
          'Bias-Variance Tradeoff & Overfitting',
          'Imbalanced Data Handling',
        ],
      },
      {
        label: 'Project',
        items: ['Predictive Model for Customer Churn / Sales / Loan Default'],
      },
    ],
  },
  {
    title: 'Advanced ML & AI',
    description: 'NLP, time series, deep learning foundations, and modern AI applications.',
    groups: [
      {
        label: 'Natural Language Processing',
        items: [
          'Text Preprocessing & Tokenization',
          'Bag of Words & TF-IDF',
          'Sentiment Analysis',
          'Text Classification with ML',
        ],
      },
      {
        label: 'Time Series Forecasting',
        items: [
          'Trend, Seasonality & Decomposition',
          'ARIMA & Moving Averages',
          'Forecast Evaluation Metrics',
        ],
      },
      {
        label: 'Deep Learning & Gen AI Intro',
        items: [
          'Neural Network Fundamentals',
          'Introduction to TensorFlow / Keras',
          'Generative AI & LLM Basics',
          'Prompt Engineering for Data Tasks',
          'Ethical AI & Responsible ML',
        ],
      },
      {
        label: 'Project',
        items: ['NLP Sentiment Analyzer or Time Series Demand Forecasting Model'],
      },
    ],
  },
  {
    title: 'MLOps & Deployment',
    description: 'Take models from notebook to production-ready applications.',
    topics: [
      'Model Serialization (pickle, joblib, ONNX)',
      'Building ML APIs with Flask / FastAPI',
      'Batch vs Real-Time Inference',
      'Model Monitoring & Drift Detection',
      'Cloud Deployment Basics (AWS / Azure)',
      'Docker Fundamentals for ML Apps',
      'CI/CD Basics for Data Projects',
      'Version Control for Models & Datasets',
    ],
  },
  {
    title: 'Capstone Project',
    description: 'Industry Capstone Project',
    groups: [
      {
        label: 'Choose one of the following domains',
        items: [
          'Healthcare Analytics & Patient Outcome Prediction',
          'E-Commerce Recommendation & Customer Segmentation',
          'Finance — Credit Risk / Fraud Detection',
          'Marketing — Campaign ROI & Churn Prediction',
          'HR Analytics — Attrition & Performance Modeling',
        ],
      },
      {
        label: 'Final Industry-Level Capstone',
        items: [
          'Build and present an end-to-end Data Science solution — from SQL data extraction and EDA through ML modeling, Power BI dashboard, and deployed API — with a portfolio-ready case study.',
        ],
      },
    ],
  },
];

export default dataScienceCurriculum;
