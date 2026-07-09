import { Link } from "react-router-dom";
import { signatureDesigns } from "../../../data/referenceHome.js";
import { ReferenceReveal } from "../ReferenceReveal/ReferenceReveal.jsx";

export function SignatureDesignGrid() {
  return (
    <section className="reference-signature">
      <ReferenceReveal as="p" className="reference-signature__step" preset="fade" amount={0.35}>
        Step 1: Choose
      </ReferenceReveal>
      <ReferenceReveal as="h2" className="editorial-display-title editorial-display-title--compact" delay={0.04} amount={0.35}>
        Signature Designs
      </ReferenceReveal>
      <ReferenceReveal as="p" className="reference-signature__intro" delay={0.08} amount={0.35}>
        Explore a collection of cake designs blending classic textures, soft contrasts, and refined shapes.
      </ReferenceReveal>
      <div className="reference-signature__grid">
        {signatureDesigns.map((item, index) => (
          <ReferenceReveal
            as="article"
            className="reference-product-card"
            key={item.id}
            delay={Math.min(index * 0.025, 0.16)}
            amount={0.16}
          >
            <Link to="/gallery" className="reference-product-card__image" aria-label={`View ${item.title}`}>
              <span>{item.label}</span>
              <img src={item.image} alt="" loading="lazy" />
              <span className="reference-product-card__action" aria-hidden="true">Select Design</span>
            </Link>
            <h3>{item.title}</h3>
          </ReferenceReveal>
        ))}
      </div>
    </section>
  );
}
