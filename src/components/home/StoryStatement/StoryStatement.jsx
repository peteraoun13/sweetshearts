import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { images } from "../../../data/images.js";

const titleWords = ["Cakes", "with", "a", "story", "to", "share."];

const storyBeats = [
  {
    number: "01",
    title: "Mood",
    copy: "A palette and feeling shaped around the room, florals, and celebration.",
  },
  {
    number: "02",
    title: "Detail",
    copy: "Texture, sugar flowers, and silhouette composed with a quiet hand.",
  },
  {
    number: "03",
    title: "Memory",
    copy: "A finished cake that belongs to the table and the moment around it.",
  },
];

const wordVariants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: 0.08 + index * 0.065,
      duration: 0.78,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function StoryStatement() {
  const prefersReducedMotion = useReducedMotion();
  const revealMotion = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.28 },
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
      };

  return (
    <section className="reference-story-statement" aria-labelledby="story-statement-title">
      <div className="reference-story-statement__inner">
        <motion.div className="reference-story-statement__media" {...revealMotion}>
          <figure className="reference-story-statement__photo reference-story-statement__photo--main">
            <img src={images.heroCakeFullWidth} alt="" loading="lazy" />
            <figcaption>Composed around the feeling of the day.</figcaption>
          </figure>
          <figure className="reference-story-statement__photo reference-story-statement__photo--detail">
            <img src={images.minimalFloralCake} alt="" loading="lazy" />
          </figure>
          <figure className="reference-story-statement__photo reference-story-statement__photo--table">
            <img src={images.dessertTable} alt="" loading="lazy" />
          </figure>
          <span className="reference-story-statement__thread" aria-hidden="true" />
        </motion.div>

        <div className="reference-story-statement__copy">
          <motion.p className="reference-kicker" {...revealMotion}>
            From sketch to slice
          </motion.p>

          <h2 className="reference-story-statement__title" id="story-statement-title">
            {titleWords.map((word, index) => {
              const className = word === "story" || word === "share." ? "is-script" : undefined;

              if (prefersReducedMotion) {
                return (
                  <span className={className} key={word}>
                    {word}
                  </span>
                );
              }

              return (
                <motion.span
                  className={className}
                  custom={index}
                  initial="hidden"
                  key={word}
                  variants={wordVariants}
                  viewport={{ once: true, amount: 0.55 }}
                  whileInView="visible"
                >
                  {word}
                </motion.span>
              );
            })}
          </h2>

          <motion.p className="reference-story-statement__body" {...revealMotion}>
            Every design begins with the atmosphere of the celebration, then becomes a cake with proportion,
            texture, and handmade detail that feels personal without feeling overworked.
          </motion.p>

          <motion.ol className="reference-story-statement__beats" {...revealMotion}>
            {storyBeats.map((beat) => (
              <li key={beat.number}>
                <span>{beat.number}</span>
                <h3>{beat.title}</h3>
                <p>{beat.copy}</p>
              </li>
            ))}
          </motion.ol>

          <motion.div className="reference-story-statement__action" {...revealMotion}>
            <Link className="reference-text-link" to="/contact">
              Begin your story
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
