import { storyImages } from "../../../data/referenceHome.js";
import { ReferenceReveal } from "../ReferenceReveal/ReferenceReveal.jsx";

export function StoryImageStack() {
  return (
    <section className="reference-story-images" aria-label="Celebration stories">
      {storyImages.map((item, index) => (
        <ReferenceReveal
          as="figure"
          className={`reference-story-image reference-story-image--${index + 1}`}
          delay={index * 0.08}
          key={item.id}
          preset="image"
          amount={0.2}
        >
          <img src={item.image} alt="" loading="lazy" />
          <figcaption>{item.caption}</figcaption>
        </ReferenceReveal>
      ))}
    </section>
  );
}
