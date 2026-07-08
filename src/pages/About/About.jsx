import { ArrowRight, HandHeart, Leaf, Sparkles } from "lucide-react";
import { images } from "../../data/images.js";
import { usePageTitle } from "../../hooks/usePageTitle.js";
import { Button } from "../../components/common/Button/Button.jsx";
import { Container } from "../../components/common/Container/Container.jsx";
import { ImageFrame } from "../../components/common/ImageFrame/ImageFrame.jsx";
import { PageHero } from "../../components/common/PageHero/PageHero.jsx";
import { Reveal } from "../../components/common/Reveal/Reveal.jsx";
import { SectionTitle } from "../../components/common/SectionTitle/SectionTitle.jsx";

export function About() {
  usePageTitle(
    "About",
    "Meet Sweetshearts, a premium custom cake studio focused on elegant design, craftsmanship, and personal celebration cakes.",
  );

  return (
    <>
      <PageHero
        eyebrow="About Sweetshearts"
        title="Handmade cakes with feeling."
        copy="A quiet studio approach shaped by patience, proportion, and delicate handmade detail."
        image={images.heroCake}
        imageAlt="Tall ivory wedding cake with delicate sugar florals"
        caption="Soft palettes. Patient detail. Personal celebrations."
        variant="portrait"
      />

      <section className="section about-story">
        <Container className="about-story__grid">
          <Reveal>
            <ImageFrame
              src={images.minimalFloralCake}
              alt="Ivory cake with a delicate blush sugar rose"
              aspect="square"
            />
          </Reveal>
          <Reveal delay={0.08} className="about-story__content">
            <SectionTitle
              eyebrow="Our story"
              title="Quietly luxurious, deeply personal."
              copy="Sweetshearts was created for celebrations that call for something more thoughtful than a standard cake."
            />
            <p>
              The studio blends soft editorial design with careful handwork. Cakes are built around the tone of the
              event, the room they will sit in, and the people gathering around them.
            </p>
            <p>
              The process stays warm and collaborative, with space for inspiration, family details, favorite flavors,
              and the small cues that make a cake feel like yours.
            </p>
            <Button to="/contact" variant="secondary" icon={<ArrowRight size={18} />}>
              Start a Conversation
            </Button>
          </Reveal>
        </Container>
      </section>

      <section className="section section--muted philosophy">
        <Container>
          <SectionTitle
            align="center"
            eyebrow="Philosophy"
            title="Made with intention from sketch to final petal."
          />
          <div className="philosophy__grid">
            <Reveal className="philosophy-card">
              <Sparkles size={24} aria-hidden="true" />
              <h3>Elegant restraint</h3>
              <p>Designs stay refined, balanced, and composed so the details have room to breathe.</p>
            </Reveal>
            <Reveal delay={0.05} className="philosophy-card">
              <HandHeart size={24} aria-hidden="true" />
              <h3>Personal approach</h3>
              <p>Every commission starts with the story, palette, guest experience, and emotional tone.</p>
            </Reveal>
            <Reveal delay={0.1} className="philosophy-card">
              <Leaf size={24} aria-hidden="true" />
              <h3>Craft in the finish</h3>
              <p>Texture, florals, proportion, and flavor are handled with patient attention.</p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section craftsmanship">
        <Container className="craftsmanship__grid">
          <Reveal className="craftsmanship__content">
            <SectionTitle
              eyebrow="Craftsmanship"
              title="Soft textures, careful edges, and details made by hand."
              copy="From sugar flowers to buttercream bas-relief, every visible decision supports the larger composition."
            />
            <ul className="feature-list">
              <li>Custom design direction for each event</li>
              <li>Refined buttercream finishes and delicate sugar florals</li>
              <li>Flavor pairings chosen for the season and guest experience</li>
              <li>Delivery and setup planning for high-value event moments</li>
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <ImageFrame
              src={images.bespokeBotanicalCake}
              alt="Botanical cake with a chocolate ribbon and ivory blossoms"
              aspect="portrait"
            />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
