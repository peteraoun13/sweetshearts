import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { images } from "../../../data/images.js";
import { testimonials } from "../../../data/testimonials.js";

const testimonialSlides = [
  {
    ...testimonials[0],
    image: images.minimalFloralCake,
    quote: "The cake felt like it belonged to the room.",
    emphasis: "Every detail was quiet, romantic, and completely personal.",
    body:
      "From the first palette conversation to the final table, every detail felt considered. The cake was soft, elegant, and completely in tune with the evening.",
  },
  {
    ...testimonials[1],
    image: images.engagementFloralCake,
    quote: "It was more beautiful than the mood board.",
    emphasis: "And it tasted even better than it looked.",
    body:
      "The design had the exact feeling we wanted: romantic, polished, and never heavy. Guests kept returning to look at it before we even served dessert.",
  },
  {
    ...testimonials[2],
    image: images.dessertTable,
    quote: "Sweet Hearts understood the tone immediately.",
    emphasis: "Elegant, soft, and never overdone.",
    body:
      "The dessert table felt composed rather than decorated. Everything worked together quietly, and the cake became the detail everyone remembered.",
  },
];

const slideVariants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 22 : -22,
  }),
  center: {
    opacity: 1,
    x: 0,
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -22 : 22,
  }),
};

export function QuoteFeature() {
  const [[activeIndex, direction], setActive] = useState([0, 0]);
  const prefersReducedMotion = useReducedMotion();
  const activeTestimonial = testimonialSlides[activeIndex];

  const showSlide = (step) => {
    setActive(([current]) => [
      (current + step + testimonialSlides.length) % testimonialSlides.length,
      step,
    ]);
  };

  const transition = prefersReducedMotion
    ? { duration: 0.12, ease: "linear" }
    : { duration: 0.5, ease: [0.22, 1, 0.36, 1] };

  return (
    <section className="reference-quote-feature" aria-label="Client testimonials">
      <button
        className="reference-quote-feature__control reference-quote-feature__control--previous"
        type="button"
        aria-label="Show previous testimonial"
        onClick={() => showSlide(-1)}
      >
        See Previous
      </button>

      <div className="reference-quote-feature__viewport">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.article
            className="reference-quote-feature__content"
            key={activeTestimonial.id}
            custom={direction}
            variants={slideVariants}
            initial={prefersReducedMotion ? { opacity: 0 } : "enter"}
            animate={prefersReducedMotion ? { opacity: 1 } : "center"}
            exit={prefersReducedMotion ? { opacity: 0 } : "exit"}
            transition={transition}
          >
            <figure className="reference-quote-feature__media">
              <img src={activeTestimonial.image} alt="" loading="lazy" />
            </figure>

            <div className="reference-quote-feature__copy">
              <p className="reference-quote-mark" aria-hidden="true">"</p>
              <blockquote>
                <span>{activeTestimonial.quote}</span>
                <em>{activeTestimonial.emphasis}</em>
              </blockquote>
              <p className="reference-quote-feature__body">{activeTestimonial.body}</p>
              <p className="reference-quote-feature__author">
                {activeTestimonial.name}
                <span>{activeTestimonial.event}</span>
              </p>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>

      <button
        className="reference-quote-feature__control reference-quote-feature__control--next"
        type="button"
        aria-label="Show next testimonial"
        onClick={() => showSlide(1)}
      >
        See Next
      </button>
    </section>
  );
}
