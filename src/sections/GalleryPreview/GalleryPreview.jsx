import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { galleryItems } from "../../data/gallery.js";
import { Container } from "../../components/common/Container/Container.jsx";
import { Reveal } from "../../components/common/Reveal/Reveal.jsx";

const previewItems = galleryItems.slice(0, 5);

export function GalleryPreview() {
  return (
    <section className="section gallery-preview">
      <Container className="gallery-preview__layout">
        <Reveal className="gallery-preview__copy">
          <p className="eyebrow">Gallery</p>
          <h2>Every detail is part of the atmosphere.</h2>
          <p>
            A soft archive of florals, textures, dessert tables, and celebration cakes styled for their moment.
          </p>
          <Link to="/gallery" className="text-link">
            Enter the gallery
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </Reveal>

        <div className="gallery-preview__strip">
          {previewItems.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.04} className={`gallery-preview__item gallery-preview__item--${index + 1}`}>
              <img src={item.image} alt={item.alt} loading="lazy" />
              <span>{item.title}</span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
