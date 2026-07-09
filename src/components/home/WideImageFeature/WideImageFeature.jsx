import { images } from "../../../data/images.js";
import { ReferenceReveal } from "../ReferenceReveal/ReferenceReveal.jsx";

export function WideImageFeature() {
  return (
    <section className="reference-wide-image" aria-label="Featured cake table">
      <ReferenceReveal preset="image" amount={0.18}>
        <img src={images.dessertTable} alt="Editorial dessert table with cake and floral details" loading="lazy" />
      </ReferenceReveal>
    </section>
  );
}
