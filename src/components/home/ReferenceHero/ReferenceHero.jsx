import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { images } from "../../../data/images.js";

export function ReferenceHero() {
  const prefersReducedMotion = useReducedMotion();
  const imageMotion = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, scale: 1.015 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 1.15, ease: [0.22, 1, 0.36, 1] },
      };
  const copyMotion = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.9, delay: 0.28, ease: [0.22, 1, 0.36, 1] },
      };

  return (
    <section className="reference-hero" aria-labelledby="reference-hero-title">
      <motion.img
        className="reference-hero__image"
        src={images.heroCakeFullWidth}
        alt="Elegant tiered floral cake in a soft editorial studio setting"
        {...imageMotion}
      />
      <div className="reference-hero__shade" aria-hidden="true" />
      <motion.div className="reference-hero__content" {...copyMotion}>
        <p className="reference-hero__script" id="reference-hero-title">
          <span>Sweet</span>
          {" "}
          <span>Hearts</span>
        </p>
        <Link className="reference-button reference-hero__button" to="/contact">
          Inquire Now
        </Link>
      </motion.div>
    </section>
  );
}
