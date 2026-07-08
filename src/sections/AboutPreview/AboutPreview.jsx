import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { images } from "../../data/images.js";
import { Container } from "../../components/common/Container/Container.jsx";
import { Reveal } from "../../components/common/Reveal/Reveal.jsx";

export function AboutPreview() {
  return (
    <section
      className="section about-preview"
      id="about-preview"
    >
      <Container className="about-preview__inner">
        <Reveal className="about-preview__media">
          <figure className="about-preview__main-image">
            <img
              src={images.bespokeBotanicalCake}
              alt="Modern botanical cake with ivory buttercream and chocolate ribbon"
              loading="lazy"
            />
          </figure>

          <figure className="about-preview__detail-image">
            <img
              src={images.minimalFloralCake}
              alt="Ivory cake with a blush sugar rose and delicate piped detail"
              loading="lazy"
            />
          </figure>
        </Reveal>

        <Reveal
          delay={0.08}
          className="about-preview__copy"
        >
          <p className="eyebrow">The studio</p>

          <h2>
            Thoughtfully made,
            <em>beautifully yours.</em>
          </h2>

          <p className="about-preview__lead">
            Bespoke cakes created around your celebration,
            your style, and the moments that matter.
          </p>

          <p className="about-preview__text">
            Every detail is considered with care, from flavor
            and texture to handmade finishes and delicate
            botanicals.
          </p>

          <Link
            to="/about"
            className="about-preview__link"
          >
            <span>Meet the studio</span>
            <ArrowRight
              size={16}
              strokeWidth={1.4}
              aria-hidden="true"
            />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}