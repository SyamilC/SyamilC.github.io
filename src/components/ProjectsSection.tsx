import { projectImages } from "../data/assetManifest";
import { projectCategories, projects, siteCopy } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function ProjectsSection() {
  return (
    <section className="page-section work-section" id="work">
      <SectionHeading
        eyebrow={siteCopy.sections.work.eyebrow}
        title={siteCopy.sections.work.title}
        summary={siteCopy.sections.work.summary}
      />

      <div className="category-stack">
        {projectCategories.map((category) => {
          const categoryProjects = projects.filter((project) => project.category === category.title);

          return (
            <section className="project-category" key={category.title} aria-labelledby={`${category.title}-heading`}>
              <div className="category-heading">
                <span className="hex-index" aria-hidden="true">
                  {String(categoryProjects.length).padStart(2, "0")}
                </span>
                <div>
                  <h3 id={`${category.title}-heading`}>{category.title}</h3>
                  <p>{category.description}</p>
                </div>
              </div>

              <div className="project-grid">
                {categoryProjects.map((project) => {
                  const [coverImage] = projectImages[project.slug] ?? [];

                  return (
                    <a
                      className="project-card"
                      href={`#/projects/${project.slug}`}
                      key={project.slug}
                      aria-label={`Open ${project.title} showcase`}
                    >
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

                      <span className="project-card-cta">{siteCopy.projectCard.openShowcase}</span>
                    </a>
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
