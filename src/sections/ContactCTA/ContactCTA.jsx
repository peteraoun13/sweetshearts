import { ArrowRight } from "lucide-react";
import { images } from "../../data/images.js";
import { Button } from "../../components/common/Button/Button.jsx";
import { Container } from "../../components/common/Container/Container.jsx";

export function ContactCTA() {
  return (
    <section className="contact-cta" style={{ "--cta-image": `url(${images.heroCake})` }}>
      <div className="contact-cta__media" aria-hidden="true" />
      <Container className="contact-cta__inner">
        <p className="eyebrow">Your celebration</p>
        <h2>Let us create something beautiful for your table.</h2>
        <p>
          Share the date, guest count, and mood. We will guide the rest with a calm and thoughtful process.
        </p>
        <div className="contact-cta__actions">
          <Button to="/contact" variant="light" icon={<ArrowRight size={18} />}>
            Start Your Order
          </Button>
          <Button to="/gallery" variant="glass" icon={<ArrowRight size={18} />}>
            Browse Gallery
          </Button>
        </div>
      </Container>
    </section>
  );
}
