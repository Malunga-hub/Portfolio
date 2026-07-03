import React from "react";
import { projects } from "../../data/portfolioData";
import "./Projects.css";

const FolderIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v8.25m19.5 0A2.25 2.25 0 0119.5 16.5h-15a2.25 2.25 0 01-2.25-2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 18.409a2.25 2.25 0 01-1.07-1.916V14.25" />
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects__header">
          <p className="section-label">Things I've built</p>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            A selection of personal and professional work. Each project is a
            story of a problem solved.
          </p>
        </div>

        {/* Featured project cards — edit in portfolioData.js → projects (featured: true) */}
        <div className="projects__featured">
          {featured.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-card__top">
                <div className="project-card__folder">
                  <FolderIcon />
                </div>
                <div className="project-card__links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-mini__link"
                      aria-label="GitHub"
                    >
                      <GithubIcon />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-mini__link"
                      aria-label="Live site"
                    >
                      <ExternalIcon />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>

              {project.sourceInfo && (
                <div className="project-card__source">
                  <p>{project.sourceInfo}</p>
                </div>
              )}

              <div className="project-card__tech">
                {project.tech.map((t) => (
                  <span key={t} className="project-card__tech-tag">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Other projects — edit in portfolioData.js → projects (featured: false) */}
        {others.length > 0 && (
          <>
            <p className="projects__other-title">Other noteworthy projects</p>
            <div className="projects__other">
              {others.map((project) => (
                <div className="project-mini" key={project.title}>
                  <div className="project-mini__info">
                    <p className="project-mini__title">{project.title}</p>
                    <p className="project-mini__desc">{project.description}</p>
                  </div>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-mini__link"
                      aria-label="GitHub"
                    >
                      <GithubIcon />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
