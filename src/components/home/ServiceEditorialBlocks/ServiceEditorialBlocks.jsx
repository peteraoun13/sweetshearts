import { Link } from "react-router-dom";
import { referenceServices } from "../../../data/referenceHome.js";
import { ReferenceReveal } from "../ReferenceReveal/ReferenceReveal.jsx";

export function ServiceEditorialBlocks() {
  return (
    <section className="reference-services" aria-label="Cake services">
      {referenceServices.map((service, index) => (
        <article className={`reference-service reference-service--${index + 1}`} key={service.id}>
          <ReferenceReveal as="figure" className="reference-service__image" preset="image" amount={0.22}>
            <img src={service.image} alt="" loading="lazy" />
          </ReferenceReveal>
          <ReferenceReveal className="reference-service__copy" delay={0.08} amount={0.28}>
            <h2 className="editorial-section-title">{service.title}</h2>
            <p>{service.copy}</p>
            <div className="reference-service__links">
              {service.links.map((link) => (
                <Link key={link} to="/cakes">{link}</Link>
              ))}
            </div>
          </ReferenceReveal>
        </article>
      ))}
    </section>
  );
}
