import { storyImages } from "../../../data/referenceHome.js";
import { ReferenceReveal } from "../ReferenceReveal/ReferenceReveal.jsx";

export function StorySection() {
  const items = storyImages.slice(0, 3);

  return (
    <section
      className="reference-story-simple"
      aria-labelledby="reference-story-simple-title"
    >
      <div className="reference-story-simple__layout">
        <div className="reference-story-simple__copy">
          <ReferenceReveal
            as="div"
            preset="text"
            amount={0.3}
          >
            <p className="reference-kicker">
              Made for your moments
            </p>

            <h2 id="reference-story-simple-title">
              Cakes with a
              <em>story to share.</em>
            </h2>

            <p className="reference-story-simple__intro">
              From joyful birthdays to elegant weddings, each cake is
              created to feel personal to the moment behind it.
            </p>
          </ReferenceReveal>
        </div>

        <div className="reference-story-simple__gallery">
          {items.map((item, index) => (
            <ReferenceReveal
              as="figure"
              className={`reference-story-simple__item reference-story-simple__item--${
                index + 1
              }`}
              delay={index * 0.1}
              preset="image"
              amount={0.18}
              key={item.id}
            >
              <div className="reference-story-simple__image">
                <img
                  src={item.image}
                  alt={item.alt ?? item.caption ?? ""}
                  loading="lazy"
                />
              </div>

              {item.caption ? (
                <figcaption>{item.caption}</figcaption>
              ) : null}
            </ReferenceReveal>
          ))}
        </div>
      </div>
    </section>
  );
}