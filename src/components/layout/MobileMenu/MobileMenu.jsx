import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Instagram, Mail, MessageCircle, X } from "lucide-react";
import { brand } from "../../../data/brand.js";
import { navigationItems } from "../../../data/navigation.js";
import { useLockBodyScroll } from "../../../hooks/useLockBodyScroll.js";
import { Button } from "../../common/Button/Button.jsx";
import { Logo } from "../../common/Logo/Logo.jsx";

export function MobileMenu({ isOpen, onClose }) {
  const closeButtonRef = useRef(null);
  useLockBodyScroll(isOpen);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    closeButtonRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="mobile-menu__panel"
            initial={{ y: -18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -18, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
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
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.38, delay: 0.08 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                >
                  <NavLink to={item.to} className="mobile-menu__link" onClick={onClose}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <div className="mobile-menu__footer">
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
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
