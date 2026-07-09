import { Link } from "react-router-dom";
import { curatedCollection } from "../../../data/referenceHome.js";
import { ReferenceReveal } from "../ReferenceReveal/ReferenceReveal.jsx";

export function CuratedCollection() {
  const curatedLanes = [
    curatedCollection.filter((_, index) => index % 2 === 0),
    curatedCollection.filter((_, index) => index % 2 === 1),
  ];
  const renderCard = (item, index, delayOffset = 0) => (
    <ReferenceReveal
      as="article"
      className="reference-collection-card"
      key={item.id}
      delay={Math.min((index + delayOffset) * 0.04, 0.18)}
      amount={0.14}
    >
      <Link to="/gallery" className="reference-collection-card__image" aria-label={`View ${item.title}`}>
        <span>{item.label}</span>
        <img src={item.image} alt="" loading="lazy" />
        <span className="reference-product-card__action" aria-hidden="true">Select Design</span>
      </Link>
      <div>
        <h3>{item.title}</h3>
        <p>{item.copy}</p>
      </div>
    </ReferenceReveal>
  );

  return (
    <section className="reference-curated" aria-labelledby="reference-curated-title">
      <div className="reference-curated__layout">
        <aside className="reference-curated__sticky">
          <ReferenceReveal className="reference-curated__intro" amount={0.22}>
            <p className="reference-kicker">Curated Collection</p>
            <h2 className="editorial-display-title" id="reference-curated-title">
              Beautiful cakes made for beautiful memories.
            </h2>
            <p>
              A soft edit of celebration cakes, dessert tables, and floral details arranged in
              the quiet editorial rhythm of the reference.
            </p>
          </ReferenceReveal>
        </aside>

        <div className="reference-curated__feed" aria-label="Curated cake designs">
          {curatedLanes.map((lane, laneIndex) => (
            <div
              className={`reference-curated__lane ${
                laneIndex === 1 ? "reference-curated__lane--offset" : ""
              }`}
              key={`curated-lane-${laneIndex}`}
          >
              {lane.map((item, index) => renderCard(item, index, laneIndex))}
            </div>
          ))}
        </div>

        <div className="reference-curated__mobile-feed" aria-label="Curated cake designs">
          {curatedCollection.map((item, index) => renderCard(item, index))}
        </div>
      </div>
    </section>
  );
}
