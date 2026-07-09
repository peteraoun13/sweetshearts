import { Link } from "react-router-dom";
import { images } from "../../../data/images.js";
import { ReferenceReveal } from "../ReferenceReveal/ReferenceReveal.jsx";

export function StudioStory() {
  return (
    <section className="reference-studio">
      <div className="reference-studio__media">
        <ReferenceReveal as="figure" className="reference-studio__portrait" preset="image" amount={0.2}>
          <img src={images.heroCake} alt="" loading="lazy" />
        </ReferenceReveal>
        <ReferenceReveal as="figure" className="reference-studio__detail" preset="image" delay={0.12} amount={0.2}>
          <img src={images.minimalFloralCake} alt="" loading="lazy" />
        </ReferenceReveal>
      </div>
      <ReferenceReveal className="reference-studio__copy" delay={0.08} amount={0.28}>
        <p className="reference-kicker">Our Story</p>
        <h2 className="editorial-section-title">Creating the cake that belongs to the day and the people gathering around it.</h2>
        <p>
          Every design begins with a mood, a palette, and a feeling. The process is calm,
          collaborative, and shaped around the celebration rather than a catalogue.
        </p>
        <Link className="reference-text-link" to="/about">Learn More</Link>
      </ReferenceReveal>
    </section>
  );
}
