import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cakeCategories } from "../../data/cakes.js";
import { images } from "../../data/images.js";
import { usePageTitle } from "../../hooks/usePageTitle.js";
import { Container } from "../../components/common/Container/Container.jsx";
import { PageHero } from "../../components/common/PageHero/PageHero.jsx";
import { Reveal } from "../../components/common/Reveal/Reveal.jsx";

export function Cakes() {
  const [activeFilter, setActiveFilter] = useState("All");
  usePageTitle(
    "Cakes",
    "Explore premium custom cake categories including wedding cakes, birthday cakes, engagement cakes, minimal cakes, and dessert tables.",
  );

  const filters = ["All", "Wedding", "Birthday", "Engagement", "Bespoke", "Dessert"];
  const filteredCategories = useMemo(() => {
    if (activeFilter === "All") {
      return cakeCategories;
    }

    return cakeCategories.filter((category) => category.name.includes(activeFilter));
  }, [activeFilter]);

  return (
    <>
      <PageHero
        eyebrow="Cake collections"
        title="Designed for the celebration."
        copy="Wedding cakes, birthdays, engagements, celebrations, and dessert tables composed with restraint."
        image={images.engagementFloralCake}
        imageAlt="Two-tier floral engagement cake in ivory and muted blush"
        caption="Portfolio-led, never catalogue-led."
        variant="wide"
      />

      <section className="section cake-categories">
        <Container>
          <div className="cake-categories__intro">
            <p className="eyebrow">Services</p>
            <h2>Quietly luxurious cakes, shaped by occasion.</h2>
            <p>Each category is a starting point. The final design is tailored through scale, texture, palette, and story.</p>
          </div>

          <div className="cake-categories__filters" aria-label="Cake collection filters">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={activeFilter === filter ? "is-active" : ""}
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="category-editorial-grid">
            <AnimatePresence mode="popLayout">
              {filteredCategories.map((category, index) => (
                <motion.article
                  key={category.id}
                  layout
                  className="category-editorial-card"
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Reveal delay={index * 0.04}>
                    <Link to="/contact" className="category-editorial-card__image" aria-label={category.cta}>
                      <img src={category.image} alt={category.alt} loading="lazy" />
                    </Link>
                    <div className="category-editorial-card__content">
                      <p>{String(index + 1).padStart(2, "0")} / {category.name.includes("Dessert") ? "Tables" : category.name.replace(" Cakes", "")}</p>
                      <h2>{category.name}</h2>
                      <span>{category.description}</span>
                      <Link to="/contact" className="text-link">
                        {category.cta}
                        <ArrowRight size={16} aria-hidden="true" />
                      </Link>
                    </div>
                  </Reveal>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </Container>
      </section>
    </>
  );
}
