import { Link } from "react-router-dom";
import { brand } from "../../../data/brand.js";
import { navigationItems } from "../../../data/navigation.js";
import { Container } from "../../common/Container/Container.jsx";
import { Logo } from "../../common/Logo/Logo.jsx";

export function Footer() {
  return (
    <footer className="footer">
    

      <Container className="footer__inner">
        <div className="footer__brand">
          <Logo tone="dark" />
          <p>
            Custom cakes and dessert tables composed with softness, restraint, and handmade detail by Rimonda Nassar.
          </p>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          {navigationItems.map((item) => (
            <Link key={item.to} to={item.to}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="footer__contact">
          <p className="footer__column-title">Inquiries</p>
          <a href={`mailto:${brand.email}`}>{brand.email}</a>
          <a href={brand.whatsapp}>WhatsApp</a>
          <a href={brand.instagram}>Instagram</a>
        </div>
      </Container>

      <Container className="footer__bottom">
        <p className="footer__signature" aria-hidden="true">Sweet Hearts</p>
        <p>Copyright {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
        <div className="footer__meta" aria-label="Footer quick links">
          <span>{brand.location}</span>
          <a href={brand.instagram}>Instagram</a>
          <a href={brand.whatsapp}>WhatsApp</a>
        </div>
      </Container>
    </footer>
  );
}
