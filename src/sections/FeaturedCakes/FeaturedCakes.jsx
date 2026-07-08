import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { featuredCakes } from "../../data/cakes.js";
import { Button } from "../../components/common/Button/Button.jsx";
import { Container } from "../../components/common/Container/Container.jsx";
import { Reveal } from "../../components/common/Reveal/Reveal.jsx";
import { SectionTitle } from "../../components/common/SectionTitle/SectionTitle.jsx";

export function FeaturedCakes() {
  return (
    <section className="section featured-cakes" id="featured-work">
      <Container>
        <div className="section-heading-row">
          <SectionTitle
            eyebrow="Featured work"
            title="Beautiful cakes for sweet moments."
            copy="A simple look at a few favorite designs for weddings, birthdays, engagements, and intimate celebrations."
          />
          <Button to="/gallery" variant="secondary" icon={<ArrowRight size={18} />}>
            View Gallery
          </Button>
        </div>

        <div className="cake-card-grid">
          {featuredCakes.map((cake, index) => (
            <Reveal key={cake.id} delay={index * 0.05} className="cake-card">
              <Link to="/gallery" className="cake-card__image" aria-label={`View ${cake.name} in gallery`}>
                <img src={cake.image} alt={cake.alt} loading="lazy" />
              </Link>
              <div className="cake-card__content">
                <p className="cake-card__category">{cake.category}</p>
                <h3>{cake.name}</h3>
                <p className="cake-card__description">{cake.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
