import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { galleryFilters, galleryItems } from "../../data/gallery.js";
import { images } from "../../data/images.js";
import { usePageTitle } from "../../hooks/usePageTitle.js";
import { Container } from "../../components/common/Container/Container.jsx";
import { PageHero } from "../../components/common/PageHero/PageHero.jsx";
import { Reveal } from "../../components/common/Reveal/Reveal.jsx";

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeItem, setActiveItem] = useState(null);
  usePageTitle(
    "Gallery",
    "Browse a premium custom cake gallery prepared for wedding, birthday, floral, minimal, and celebration cake photography.",
  );

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") {
      return galleryItems;
    }

    return galleryItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const activeIndex = activeItem ? filteredItems.findIndex((item) => item.id === activeItem.id) : -1;

  useEffect(() => {
    if (!activeItem) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveItem(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeItem]);

  const showPrevious = () => {
    if (activeIndex < 0) {
      return;
    }
    const nextIndex = activeIndex === 0 ? filteredItems.length - 1 : activeIndex - 1;
    setActiveItem(filteredItems[nextIndex]);
  };

  const showNext = () => {
    if (activeIndex < 0) {
      return;
    }
    const nextIndex = activeIndex === filteredItems.length - 1 ? 0 : activeIndex + 1;
    setActiveItem(filteredItems[nextIndex]);
  };

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A soft archive of cake design."
        copy="Refined cakes and dessert tables arranged by mood, occasion, palette, and handmade detail."
        image={images.dessertTable}
        imageAlt="Elegant dessert table with macarons, mini cakes, and chocolate desserts"
        caption="A growing visual archive."
        variant="gallery"
      />

      <section className="section gallery-page">
        <Container>
          <div className="gallery-page__filters" aria-label="Gallery filters">
            {galleryFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={filter === activeFilter ? "is-active" : ""}
                aria-pressed={filter === activeFilter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filteredItems.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.03} className={`gallery-item gallery-item--${item.span}`}>
                <button type="button" aria-label={`Open ${item.title}`} onClick={() => setActiveItem(item)}>
                  <img src={item.image} alt={item.alt} loading="lazy" />
                  <span>
                    <strong>{item.title}</strong>
                    <small>{item.category}</small>
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <AnimatePresence>
        {activeItem ? (
          <motion.div
            className="gallery-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={activeItem.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button className="gallery-lightbox__backdrop" type="button" aria-label="Close gallery image" onClick={() => setActiveItem(null)} />
            <motion.div
              className="gallery-lightbox__panel"
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 18, opacity: 0 }}
              transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
            >
              <button className="gallery-lightbox__close" type="button" aria-label="Close lightbox" onClick={() => setActiveItem(null)}>
                <X size={22} aria-hidden="true" />
              </button>
              <img src={activeItem.fullImage} alt={activeItem.alt} />
              <div className="gallery-lightbox__meta">
                <span>{String(activeIndex + 1).padStart(2, "0")} / {String(filteredItems.length).padStart(2, "0")}</span>
                <h2>{activeItem.title}</h2>
                <p>{activeItem.category}</p>
              </div>
              <div className="gallery-lightbox__controls">
                <button type="button" onClick={showPrevious} aria-label="Previous gallery image">
                  <ArrowLeft size={18} aria-hidden="true" />
                </button>
                <button type="button" onClick={showNext} aria-label="Next gallery image">
                  <ArrowRight size={18} aria-hidden="true" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
