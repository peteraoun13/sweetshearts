import { images } from "../../data/images.js";
import { Container } from "../../components/common/Container/Container.jsx";

export function BrandStatement() {
  return (
    <section
      className="brand-statement"
      style={{ "--statement-image": `url(${images.dessertTable})` }}
    >
      <div className="brand-statement__media" aria-hidden="true" />
      <Container className="brand-statement__inner">
        <p className="eyebrow">Made by hand</p>
        <h2>Designed with heart. Finished with restraint.</h2>
        <p>
          Premium does not need to be loud. It can be found in the calm of a perfect edge,
          the softness of a handmade petal, and the way a cake belongs to the celebration.
        </p>
      </Container>
    </section>
  );
}
