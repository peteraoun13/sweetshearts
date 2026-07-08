import { Container } from "../Container/Container.jsx";

export function PageHero({
  eyebrow,
  title,
  copy,
  image,
  variant = "split",
}) {
  return (
    <section
      className={`page-hero page-hero--${variant}`}
    >
      {image ? (
        <div className="page-hero__backdrop" aria-hidden="true">
          <img src={image} alt="" />
        </div>
      ) : null}

      <Container className="page-hero__inner">
        <div className="page-hero__copy">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1>{title}</h1>
          {copy ? <p>{copy}</p> : null}
        </div>
      </Container>
    </section>
  );
}
