export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['Python', 'SQL', 'R', 'C++'],
  },
  {
    category: 'ML / AI',
    items: [
      'XGBoost',
      'SARIMA',
      'Scikit-learn',
      'TensorFlow',
      'HDBSCAN',
      'UMAP',
      'K-Means',
      'OpenAI Embeddings',
      'SHAP',
    ],
  },
  {
    category: 'Data',
    items: [
      'PostgreSQL',
      'Qdrant',
      'Snowflake',
      'BigQuery',
      'Pandas',
      'NumPy',
      'Airflow',
      'Spark',
    ],
  },
  {
    category: 'Tools / Platforms',
    items: [
      'Docker',
      'FastAPI',
      'Streamlit',
      'Tableau',
      'Looker',
      'MLflow',
      'Git',
      'Next.js',
      'Tailwind CSS',
      'React Query',
    ],
  },
];
