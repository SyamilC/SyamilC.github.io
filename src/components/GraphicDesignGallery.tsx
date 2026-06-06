import { graphicDesignGallery } from "../data/assetManifest";
import { siteCopy } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function GraphicDesignGallery() {
  if (graphicDesignGallery.length === 0) {
    return null;
  }

  return (
    <section className="page-section design-section" id="design">
      <SectionHeading
        eyebrow={siteCopy.sections.design.eyebrow}
        title={siteCopy.sections.design.title}
        summary={siteCopy.sections.design.summary}
      />

      <div className="design-gallery-grid">
        {graphicDesignGallery.map((image) => (
          <figure className="design-card" key={image.src}>
            <img src={image.src} alt={image.alt} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  );
}
