import { serviceCategories, services } from "../../data/services.js";
import { images } from "../../data/images.js";
import { Container } from "../../components/common/Container/Container.jsx";
import { Reveal } from "../../components/common/Reveal/Reveal.jsx";

export function ServicesPreview() {
  return (
    <section className="section services-preview">
      <Container className="services-preview__layout">
        <Reveal className="services-preview__statement">
          <p className="eyebrow">Process</p>
          <h2>Made slowly. Finished by hand. Created for one story only.</h2>
        </Reveal>

        <Reveal delay={0.08} className="services-preview__image">
          <img src={images.engagementFloralCake} alt="Floral engagement cake detail with handmade sugar flowers" loading="lazy" />
        </Reveal>

        <div className="services-preview__steps">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.05} className="service-card">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </Reveal>
          ))}
        </div>

        <div className="services-preview__categories" aria-label="Cake categories">
          {serviceCategories.map((category) => (
            <span key={category}>{category}</span>
          ))}
        </div>
      </Container>
    </section>
  );
}
