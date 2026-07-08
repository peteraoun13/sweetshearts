import { Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import { brand } from "../../data/brand.js";
import { images } from "../../data/images.js";
import { usePageTitle } from "../../hooks/usePageTitle.js";
import { Container } from "../../components/common/Container/Container.jsx";
import { PageHero } from "../../components/common/PageHero/PageHero.jsx";
import { ContactForm } from "./ContactForm.jsx";

export function Contact() {
  usePageTitle(
    "Contact",
    "Start a premium custom cake inquiry for weddings, birthdays, engagements, dessert tables, and refined celebrations.",
  );

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start your cake inquiry."
        copy="Share the date, the mood, and the guest count. We will guide the next step with care."
        image={images.bespokeBotanicalCake}
        imageAlt="Minimal botanical cake with chocolate ribbon and ivory sugar flowers"
        caption="Personal, calm, and carefully guided."
        variant="contact"
      />

      <section className="section contact-page">
        <Container className="contact-page__grid">
          <div className="contact-page__intro">
            <p className="eyebrow">Cake inquiry</p>
            <h2>Start with the celebration. We will guide the cake.</h2>
            <p>
              Use the form for weddings, birthdays, engagement gatherings, dessert tables, or fully bespoke commissions.
              Include any early ideas you have and we will shape the next steps with care.
            </p>

            <div className="contact-methods">
              <a href={`mailto:${brand.email}`}>
                <Mail size={18} aria-hidden="true" />
                {brand.email}
              </a>
              <a href={brand.whatsapp}>
                <MessageCircle size={18} aria-hidden="true" />
                WhatsApp
              </a>
              <a href={brand.instagram}>
                <Instagram size={18} aria-hidden="true" />
                Instagram
              </a>
              <span>
                <MapPin size={18} aria-hidden="true" />
                {brand.location}
              </span>
            </div>
          </div>

          <figure className="contact-page__image">
            <img src={images.dessertTable} alt="Dessert table with pastries and a centerpiece cake" loading="lazy" />
          </figure>

          <ContactForm />
        </Container>
      </section>
    </>
  );
}
