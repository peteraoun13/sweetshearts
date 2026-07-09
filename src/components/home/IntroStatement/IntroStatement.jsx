import { Link } from "react-router-dom";
import { ReferenceReveal } from "../ReferenceReveal/ReferenceReveal.jsx";

export function IntroStatement() {
  return (
    <section className="reference-intro">
      <ReferenceReveal as="p" amount={0.3}>
        Your cake tells your story, and we are here to bring it to life. Inspired by your
        favorite color, memories, or experiences, we craft a one of a kind design just for you.
      </ReferenceReveal>
      <ReferenceReveal delay={0.08} preset="fade" amount={0.4}>
        <Link className="reference-button" to="/contact">Order a Cake</Link>
      </ReferenceReveal>
    </section>
  );
}
