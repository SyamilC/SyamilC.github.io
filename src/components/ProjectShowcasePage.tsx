import { photographyGallery, projectImages } from "../data/assetManifest";
import { isDownloadLink, resolveLink } from "../data/linkResolver";
import { projects, siteCopy, type LinkItem } from "../data/portfolio";

type ProjectShowcasePageProps = {
  slug: string;
};

export function ProjectShowcasePage({ slug }: ProjectShowcasePageProps) {
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="project-page">
        <a className="back-link" href="#work">
          {siteCopy.projectPage.backLink}
        </a>
        <section className="project-hero project-hero-compact">
          <p className="eyebrow">{siteCopy.projectPage.notFoundEyebrow}</p>
          <h1>{siteCopy.projectPage.notFoundTitle}</h1>
          <p>{siteCopy.projectPage.notFoundBody}</p>
        </section>
      </main>
    );
  }

  const isPhotographyGallery = project.galleryKey === "photography";
  const images = isPhotographyGallery
    ? photographyGallery
    : (projectImages[project.imageGroup ?? project.slug] ?? []);
  const primaryHref = resolveLink(project.primaryLink);
  return (
    <main className="project-page">
      <a className="back-link" href="#work">
        {siteCopy.projectPage.backLink}
      </a>

      <section className="project-hero">
        <div>
          <p className="eyebrow">{project.category}</p>
          <h1>{project.title}</h1>
          {project.tags && project.tags.length > 0 ? (
            <ul className="project-page-tag-list" aria-label={`${project.title} tags`}>
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          ) : null}
          <p>{project.summary}</p>
          {primaryHref ? (
            <div className="project-hero-actions" aria-label={`${project.title} actions`}>
              <ProjectLink className="button button-primary" link={project.primaryLink} />
              <a className="button button-secondary" href="#work">
                {siteCopy.projectPage.backLink}
              </a>
            </div>
          ) : null}
        </div>

        <aside className="project-facts" aria-label={`${project.title} facts`}>
          <div>
            <span>{siteCopy.projectPage.role}</span>
            <strong>{project.role}</strong>
          </div>
          <div>
            <span>{siteCopy.projectPage.status}</span>
            <strong>{project.status}</strong>
          </div>
          <div>
            <span>{siteCopy.projectPage.year}</span>
            <strong>{project.year}</strong>
          </div>
        </aside>
      </section>

      {images.length > 0 ? (
        <section
          className={`showcase-gallery${isPhotographyGallery ? " showcase-gallery-photography" : ""}`}
          aria-labelledby="showcase-gallery-heading"
        >
          <div className="showcase-gallery-head">
            <p className="eyebrow">
              {isPhotographyGallery ? siteCopy.projectPage.galleryProof : siteCopy.projectPage.visualProof}
            </p>
            <h2 id="showcase-gallery-heading">
              {isPhotographyGallery ? `${project.title} gallery` : `${project.title} ${siteCopy.projectPage.screenshotsSuffix}`}
            </h2>
            {project.galleryNote ? <p className="gallery-note">{project.galleryNote}</p> : null}
          </div>
          <div className="showcase-image-grid">
            {images.map((image, index) => (
              <figure className={!isPhotographyGallery && index === 0 ? "showcase-image-main" : undefined} key={image.src}>
                <img src={image.src} alt={image.alt} decoding="async" loading={index < 6 ? "eager" : "lazy"} />
                {!isPhotographyGallery ? <figcaption>{image.title}</figcaption> : null}
              </figure>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}

function ProjectLink({ className, link }: { className?: string; link?: LinkItem }) {
  const href = resolveLink(link);

  if (!link || !href) {
    return null;
  }

  if (isDownloadLink(link)) {
    return (
      <a className={className} href={href} download>
        {link.label}
      </a>
    );
  }

  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {link.label}
    </a>
  );
}
