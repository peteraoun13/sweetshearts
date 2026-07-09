import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "../../../data/referenceHome.js";
import { ReferenceReveal } from "../ReferenceReveal/ReferenceReveal.jsx";

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);
  const baseId = useId();
  const prefersReducedMotion = useReducedMotion();
  const transition = prefersReducedMotion
    ? { duration: 0.01 }
    : { duration: 0.28, ease: [0.22, 1, 0.36, 1] };

  return (
    <section className="reference-faq">
      <ReferenceReveal className="reference-faq__heading" amount={0.28}>
        <h2>Answers to your questions.</h2>
      </ReferenceReveal>
      <ReferenceReveal className="reference-faq__items" delay={0.06} amount={0.2}>
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;
          const buttonId = `${baseId}-faq-button-${index}`;
          const panelId = `${baseId}-faq-panel-${index}`;

          return (
            <div className={`reference-faq__item ${isOpen ? "is-open" : ""}`} key={item.question}>
              <button
                className="reference-faq__trigger"
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{item.question}</span>
                <ChevronDown size={16} aria-hidden="true" />
              </button>
              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    className="reference-faq__answer"
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={transition}
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </ReferenceReveal>
    </section>
  );
}
