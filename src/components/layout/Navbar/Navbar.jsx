import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ArrowRight, Menu } from "lucide-react";
import { navigationItems } from "../../../data/navigation.js";
import { Button } from "../../common/Button/Button.jsx";
import { Logo } from "../../common/Logo/Logo.jsx";
import { MobileMenu } from "../MobileMenu/MobileMenu.jsx";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isTransparent = isHome && !isMenuOpen;
  const tone = "dark";

  useEffect(() => {
    const onScroll = () => {
      const heroHeight = document.querySelector(".reference-hero")?.clientHeight || 0;
      const threshold = isHome && heroHeight ? heroHeight - 120 : 24;
      setIsScrolled(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={[
        "navbar",
        isTransparent ? "navbar--transparent" : "navbar--solid",
        isScrolled ? "navbar--scrolled" : "",
        isMenuOpen ? "navbar--menu-open" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="navbar__inner">
        <Logo tone={tone} />

        <nav className="navbar__links" aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <NavLink key={item.to} className="navbar__link" to={item.to}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar__actions">
          <Button to="/contact" variant={tone === "light" ? "glass" : "nav"} icon={<ArrowRight size={17} />}>
            Order a Cake
          </Button>
          <button
            className="navbar__menu-button"
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={24} aria-hidden="true" />
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
