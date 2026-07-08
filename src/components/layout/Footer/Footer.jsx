import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { brand } from "../../../data/brand.js";
import { navigationItems } from "../../../data/navigation.js";
import { Button } from "../../common/Button/Button.jsx";
import { Container } from "../../common/Container/Container.jsx";
import { Logo } from "../../common/Logo/Logo.jsx";

export function Footer() {
  return (
    <footer className="footer">
      <Container className="footer__statement">
        <p>Sweet Hearts</p>
        <h2>Have a moment in mind? Let us turn it into cake.</h2>
        <Button to="/contact" variant="primary" icon={<ArrowRight size={18} />}>
          Order a Cake
        </Button>
      </Container>

      <Container className="footer__inner">
        <div className="footer__brand">
          <Logo tone="dark" />
          <p>
            Custom cakes and dessert tables composed with softness, restraint, and handmade detail by Rimonda Nassar.
          </p>
        </div>

        <div className="footer__links">
          <p className="footer__column-title">Explore</p>
          <nav className="footer__nav" aria-label="Footer navigation">
            {navigationItems.map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="footer__contact">
          <p className="footer__column-title">Inquiries</p>
          <a href={`mailto:${brand.email}`}>{brand.email}</a>
          <a href={brand.whatsapp}>WhatsApp</a>
          <a href={brand.instagram}>Instagram</a>
        </div>
      </Container>

      <Container className="footer__bottom">
        <p>Copyright {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
      </Container>
    </footer>
  );
}
