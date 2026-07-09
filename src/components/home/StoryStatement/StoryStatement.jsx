import { ReferenceReveal } from "../ReferenceReveal/ReferenceReveal.jsx";

export function StoryStatement() {
  return (
    <section className="reference-story-statement">
      <ReferenceReveal as="h2" className="editorial-display-title" amount={0.34}>
        Cakes with a <em>story to share.</em>
      </ReferenceReveal>
    </section>
  );
}
