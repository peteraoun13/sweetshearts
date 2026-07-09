import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Instagram, Mail, MessageCircle, X } from "lucide-react";
import { brand } from "../../../data/brand.js";
import { navigationItems } from "../../../data/navigation.js";
import { useLockBodyScroll } from "../../../hooks/useLockBodyScroll.js";
import { Button } from "../../common/Button/Button.jsx";
import { Logo } from "../../common/Logo/Logo.jsx";

export function MobileMenu({ isOpen, onClose }) {
  const panelRef = useRef(null);
  const closeButtonRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  useLockBodyScroll(isOpen);

  const overlayMotion = prefersReducedMotion
    ? {
        initial: { opacity: 1 },
        animate: { opacity: 1 },
        exit: { opacity: 1 },
        transition: { duration: 0.01 },
      }
    : {
        initial: { opacity: 0, clipPath: "inset(0 0 100% 0)" },
        animate: { opacity: 1, clipPath: "inset(0 0 0% 0)" },
        exit: { opacity: 0, clipPath: "inset(0 0 100% 0)" },
        transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1] },
      };

  const itemMotion = prefersReducedMotion
    ? {
        initial: { opacity: 1 },
        animate: { opacity: 1 },
        transition: { duration: 0.01 },
      }
    : {
        initial: { opacity: 0, y: 18 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
      };

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    closeButtonRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = panelRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      const focusable = [...(focusableElements || [])];

      if (focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="mobile-menu"
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          {...overlayMotion}
        >
          <motion.div
            className="mobile-menu__panel"
            ref={panelRef}
          >
            <div className="mobile-menu__top">
              <Logo tone="dark" onClick={onClose} />
              <button
                className="mobile-menu__close"
                type="button"
                aria-label="Close navigation menu"
                onClick={onClose}
                ref={closeButtonRef}
              >
                <X size={24} aria-hidden="true" />
              </button>
            </div>

            <nav className="mobile-menu__nav" aria-label="Mobile primary navigation">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.to}
                  {...itemMotion}
                  transition={{
                    ...itemMotion.transition,
                    delay: prefersReducedMotion ? 0 : 0.16 + index * 0.06,
                  }}
                >
                  <NavLink to={item.to} className="mobile-menu__link" onClick={onClose}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <motion.div
              className="mobile-menu__footer"
              {...itemMotion}
              transition={{
                ...itemMotion.transition,
                delay: prefersReducedMotion ? 0 : 0.42,
              }}
            >
              <div>
                <p>Sweet Hearts by Rimonda Nassar</p>
                <Button to="/contact" variant="primary" icon={<ArrowRight size={18} />} onClick={onClose}>
                  Order a Cake
                </Button>
              </div>
              <div className="mobile-menu__socials" aria-label="Social links">
                <a href={brand.instagram} aria-label="Instagram">
                  <Instagram size={19} aria-hidden="true" />
                </a>
                <a href={brand.whatsapp} aria-label="WhatsApp">
                  <MessageCircle size={19} aria-hidden="true" />
                </a>
                <a href={`mailto:${brand.email}`} aria-label="Email">
                  <Mail size={19} aria-hidden="true" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
