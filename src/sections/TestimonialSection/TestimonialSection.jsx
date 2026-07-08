import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "../../data/testimonials.js";
import { Container } from "../../components/common/Container/Container.jsx";

export function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  const showNext = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };

  return (
    <section className="section testimonials">
      <Container className="testimonials__layout">
        <div className="testimonials__quote">
          <p className="eyebrow">Client note</p>
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={active.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              <p>"{active.quote}"</p>
              <footer>
                <strong>{active.name}</strong>
                <span>{active.event}</span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="testimonials__controls" aria-label="Testimonial controls">
            <button type="button" onClick={showPrevious} aria-label="Previous testimonial">
              <ArrowLeft size={18} aria-hidden="true" />
            </button>
            <span>{String(activeIndex + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}</span>
            <button type="button" onClick={showNext} aria-label="Next testimonial">
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
