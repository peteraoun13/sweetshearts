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
  const titleMotion = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: -64, clipPath: "inset(0 0 100% 0)" },
        animate: { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" },
        transition: { duration: 1.08, delay: 0.34, ease: [0.22, 1, 0.36, 1] },
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
      <h1 className="sr-only" id="reference-hero-title">
        Sweet Hearts
      </h1>
      <motion.div className="reference-hero__content" {...titleMotion} aria-hidden="true">
        <img className="reference-hero__logo" src={images.sweetheartsLogo} alt="" />
      </motion.div>
    </section>
  );
}
