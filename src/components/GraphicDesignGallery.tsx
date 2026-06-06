import { graphicDesignGallery } from "../data/assetManifest";
import { SectionHeading } from "./SectionHeading";

export function GraphicDesignGallery() {
  if (graphicDesignGallery.length === 0) {
    return null;
  }

  return (
    <section className="page-section design-section" id="design">
      <SectionHeading
        eyebrow="Graphic design"
        title="A gallery of visual work."
        summary="This gallery is generated from the images in src/assets/GD. Add more designs to that folder and they will appear here automatically."
      />

      <div className="design-gallery-grid">
        {graphicDesignGallery.map((image) => (
          <figure className="design-card" key={image.src}>
            <img src={image.src} alt={image.alt} loading="lazy" />
            <figcaption>{image.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
