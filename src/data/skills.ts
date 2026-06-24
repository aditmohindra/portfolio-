export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['Python', 'SQL', 'R', 'Bash'],
  },
  {
    category: 'ML / Data',
    items: ['Pandas', 'NumPy', 'Scikit-learn', 'PyTorch', 'TensorFlow', 'FAISS', 'UMAP', 'HDBSCAN'],
  },
  {
    category: 'Infra / Eng',
    items: ['Airflow', 'Docker', 'FastAPI', 'PostgreSQL', 'BigQuery', 'Spark'],
  },
  {
    category: 'Viz / Product',
    items: ['Streamlit', 'Tableau', 'Looker', 'Deck.gl', 'GIS'],
  },
];
