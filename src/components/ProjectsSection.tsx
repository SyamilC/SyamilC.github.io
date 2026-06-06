import { projectImages } from "../data/assetManifest";
import { projectCategories, projects } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

const categoryDescriptions = {
  "Software Engineering":
    "Repository-backed apps and applied software projects where the implementation is the main proof.",
  "Game Development":
    "Playable browser games and alpha builds published on itch.io.",
  "Simulation & Other":
    "Experiments, catalogues, and creative technical work that do not fit a normal app/game category.",
};

export function ProjectsSection() {
  return (
    <section className="page-section work-section" id="work">
      <SectionHeading
        eyebrow="Selected work"
        title="Projects grouped by category, linked to the real builds."
        summary="Each card connects to a showcase page. The showcase page makes the external GitHub or itch.io link the main action, then adds local screenshots when available."
      />

      <div className="category-stack">
        {projectCategories.map((category) => {
          const categoryProjects = projects.filter((project) => project.category === category);

          return (
            <section className="project-category" key={category} aria-labelledby={`${category}-heading`}>
              <div className="category-heading">
                <span className="hex-index" aria-hidden="true">
                  {String(categoryProjects.length).padStart(2, "0")}
                </span>
                <div>
                  <h3 id={`${category}-heading`}>{category}</h3>
                  <p>{categoryDescriptions[category]}</p>
                </div>
              </div>

              <div className="project-grid">
                {categoryProjects.map((project) => {
                  const [coverImage] = projectImages[project.slug] ?? [];

                  return (
                    <article className="project-card" key={project.slug}>
                      <div className="project-card-top">
                        <p className="card-kicker">{project.status}</p>
                        <span>{project.year}</span>
                      </div>

                      {coverImage ? (
                        <img className="project-card-image" src={coverImage.src} alt={coverImage.alt} />
                      ) : null}

                      <h4>{project.title}</h4>
                      <p>{project.practicalFocus}</p>

                      <ul className="proof-list" aria-label={`${project.title} proof points`}>
                        {project.proofPoints.slice(0, 2).map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>

                      <ul className="chip-list" aria-label={`${project.title} technologies`}>
                        {project.stack.slice(0, 4).map((tag) => (
                          <li key={tag}>{tag}</li>
                        ))}
                      </ul>

                      <div className="project-card-actions">
                        <a className="text-link" href={`#/projects/${project.slug}`}>
                          View showcase
                        </a>
                        <a className="text-link text-link-muted" href={project.primaryLink.href} target="_blank" rel="noreferrer">
                          {project.primaryLink.label}
                        </a>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}
