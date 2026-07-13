import { useState } from 'react';
import {
  PROJECT_FILTERS,
  categoryLabel,
  type ProjectCardData,
  type ProjectFilter,
} from '../../data/project-filters';

interface Props {
  projects: ProjectCardData[];
}

function ExternalLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      aria-hidden="true"
    >
      <path d="M7 17L17 7M17 7H9M17 7V15" />
    </svg>
  );
}

function RetroWindowThumbnail() {
  return (
    <div className="projects-thumb__window" aria-hidden="true">
      <div className="projects-thumb__window-bar">
        <span />
        <span />
        <span />
      </div>
      <div className="projects-thumb__window-body" />
    </div>
  );
}

function ProjectThumbnail({ project }: { project: ProjectCardData }) {
  const toneClass = {
    'dark-globe': 'projects-thumb--dark',
    'blue-cube': 'projects-thumb--lavender',
    'light-browser': 'projects-thumb--browser',
    'light-wave': 'projects-thumb--default',
  }[project.cardVariant];

  return (
    <div className={`projects-card__thumb ${toneClass}`}>
      {project.image ? (
        <img
          src={project.image}
          alt=""
          className="projects-card__thumb-img"
          loading="lazy"
          decoding="async"
        />
      ) : project.slug === 'placeholder-project' ? (
        <RetroWindowThumbnail />
      ) : null}
    </div>
  );
}

function ProjectCard({ project }: { project: ProjectCardData }) {
  const caseStudyHref = `/projects/${project.slug}`;
  const primaryCategory = project.categories[0];
  const showExternal = Boolean(project.externalHref) && !project.comingSoon;

  return (
    <article className="projects-card border border-border-ink bg-surface">
      <a
        href={caseStudyHref}
        className="projects-card__media interactive-surface block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
      >
        <ProjectThumbnail project={project} />
      </a>

      <div className="projects-card__body">
        <div className="projects-card__title-row">
          <h2 className="projects-card__title">
            <a
              href={caseStudyHref}
              className="interactive-surface hover:text-accent-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
            >
              {project.title}
            </a>
          </h2>
          {showExternal ? (
            <a
              href={project.externalHref}
              className="projects-card__external interactive-surface text-ink-muted hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open live link for ${project.title}`}
            >
              <ExternalLinkIcon />
            </a>
          ) : null}
        </div>

        <p className="projects-card__summary">{project.summary}</p>

        {project.stack.length > 0 ? (
          <ul className="projects-card__tags" aria-label="Tech stack">
            {project.stack.map((tag) => (
              <li key={tag}>
                <span className="projects-card__tag">{tag}</span>
              </li>
            ))}
          </ul>
        ) : null}

        <p className="projects-card__category">
          <span className="projects-card__category-dot" aria-hidden="true" />
          <span>{categoryLabel(primaryCategory)}</span>
          {project.comingSoon ? (
            <span className="projects-card__status"> · Coming soon</span>
          ) : null}
        </p>
      </div>
    </article>
  );
}

export default function ProjectsFilter({ projects }: Props) {
  const [active, setActive] = useState<ProjectFilter>('All');

  const filtered =
    active === 'All' ? projects : projects.filter((project) => project.categories.includes(active));

  return (
    <div className="projects-filter">
      <div className="projects-filter__pills" role="toolbar" aria-label="Filter projects">
        {PROJECT_FILTERS.map((filter) => {
          const isActive = filter === active;
          return (
            <button
              key={filter}
              type="button"
              className={
                isActive
                  ? 'projects-filter__pill projects-filter__pill--active'
                  : 'projects-filter__pill'
              }
              aria-pressed={isActive}
              onClick={() => setActive(filter)}
            >
              <span className="projects-filter__pill-label">{filter}</span>
              {isActive ? <span className="projects-filter__pill-dot" aria-hidden="true" /> : null}
            </button>
          );
        })}
      </div>

      <hr className="projects-filter__divider" />

      <div className="projects-filter__grid" role="list">
        {filtered.map((project) => (
          <div key={project.id} role="listitem">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="projects-filter__empty text-small text-ink-muted">
          No projects in this category yet.
        </p>
      ) : null}
    </div>
  );
}
