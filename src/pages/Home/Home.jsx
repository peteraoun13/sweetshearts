import { usePageTitle } from "../../hooks/usePageTitle.js";
import { AboutPreview } from "../../sections/AboutPreview/AboutPreview.jsx";
import { BrandStatement } from "../../sections/BrandStatement/BrandStatement.jsx";
import { ContactCTA } from "../../sections/ContactCTA/ContactCTA.jsx";
import { FeaturedCakes } from "../../sections/FeaturedCakes/FeaturedCakes.jsx";
import { GalleryPreview } from "../../sections/GalleryPreview/GalleryPreview.jsx";
import { HeroSection } from "../../sections/HeroSection/HeroSection.jsx";
import { ServicesPreview } from "../../sections/ServicesPreview/ServicesPreview.jsx";
import { TestimonialSection } from "../../sections/TestimonialSection/TestimonialSection.jsx";

export function Home() {
  usePageTitle(
    "Premium Custom Cakes",
    "Premium custom cakes crafted with elegant detail for weddings, birthdays, engagements, and refined celebrations.",
  );

  return (
    <>
      <HeroSection />
      <AboutPreview />
      <FeaturedCakes />
      <ServicesPreview />
      <BrandStatement />
      <GalleryPreview />
      <TestimonialSection />
      <ContactCTA />
    </>
  );
}
