import { projectImages } from "../data/assetManifest";
import { profile, projects } from "../data/portfolio";

type ProjectShowcasePageProps = {
  slug: string;
};

export function ProjectShowcasePage({ slug }: ProjectShowcasePageProps) {
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="project-page">
        <a className="back-link" href="#work">
          Back to work
        </a>
        <section className="project-hero project-hero-compact">
          <p className="eyebrow">Project not found</p>
          <h1>This showcase does not exist yet.</h1>
          <p>Use the work section to open one of the prepared project pages.</p>
        </section>
      </main>
    );
  }

  const images = projectImages[project.slug] ?? [];
  const relatedProjects = projects
    .filter((item) => item.category === project.category && item.slug !== project.slug)
    .slice(0, 2);

  return (
    <main className="project-page">
      <a className="back-link" href="#work">
        Back to work
      </a>

      <section className="project-hero">
        <div>
          <p className="eyebrow">{project.category}</p>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
        </div>

        <aside className="project-facts" aria-label={`${project.title} facts`}>
          <div className="primary-project-link">
            <span>Main project link</span>
            <a href={project.primaryLink.href} target="_blank" rel="noreferrer">
              {project.primaryLink.label}
            </a>
          </div>
          <div>
            <span>Role</span>
            <strong>{project.role}</strong>
          </div>
          <div>
            <span>Status</span>
            <strong>{project.status}</strong>
          </div>
          <div>
            <span>Year</span>
            <strong>{project.year}</strong>
          </div>
        </aside>
      </section>

      {images.length > 0 ? (
        <section className="showcase-gallery" aria-labelledby="showcase-gallery-heading">
          <div className="showcase-gallery-head">
            <p className="eyebrow">Visual proof</p>
            <h2 id="showcase-gallery-heading">{project.title} screenshots</h2>
          </div>
          <div className="showcase-image-grid">
            {images.map((image, index) => (
              <figure className={index === 0 ? "showcase-image-main" : undefined} key={image.src}>
                <img src={image.src} alt={image.alt} />
                <figcaption>{image.title}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      <section className="showcase-note showcase-note-wide">
        <p className="card-kicker">Practical focus</p>
        <h2>{project.practicalFocus}</h2>
        <ul className="proof-list">
          {project.proofPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>

      <section className="project-detail-grid" aria-label={`${project.title} details`}>
        <DetailPanel title="What To Look At" items={project.features} />
        <DetailPanel title="How It Was Framed" items={project.process} />
        <DetailPanel title="Next Improvements" items={project.nextSteps} />
      </section>

      <section className="tool-panel" aria-label={`${project.title} stack`}>
        <p className="card-kicker">Tools and stack</p>
        <ul className="chip-list">
          {project.stack.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </section>

      <section className="project-actions" aria-label={`${project.title} links`}>
        <a className="button button-primary" href={project.primaryLink.href} target="_blank" rel="noreferrer">
          {project.primaryLink.label}
        </a>
        <a className="button button-secondary" href={`mailto:${profile.email}?subject=${project.title}`}>
          Ask me about this project
        </a>
      </section>

      {relatedProjects.length > 0 ? (
        <section className="related-projects" aria-labelledby="related-heading">
          <p className="eyebrow">Same category</p>
          <h2 id="related-heading">Related showcases</h2>
          <div className="related-grid">
            {relatedProjects.map((related) => (
              <a href={`#/projects/${related.slug}`} key={related.slug}>
                <span>{related.category}</span>
                <strong>{related.title}</strong>
              </a>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}

function DetailPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="detail-panel">
      <h2>{title}</h2>
      <ul className="proof-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
