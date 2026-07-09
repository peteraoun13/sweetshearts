import { usePageTitle } from "../../hooks/usePageTitle.js";
import { CuratedCollection } from "../../components/home/CuratedCollection/CuratedCollection.jsx";
import { DesignFilterBar } from "../../components/home/DesignFilterBar/DesignFilterBar.jsx";
import { FAQAccordion } from "../../components/home/FAQAccordion/FAQAccordion.jsx";
import { IntroStatement } from "../../components/home/IntroStatement/IntroStatement.jsx";
import { QuoteFeature } from "../../components/home/QuoteFeature/QuoteFeature.jsx";
import { ReferenceHero } from "../../components/home/ReferenceHero/ReferenceHero.jsx";
import { ServiceEditorialBlocks } from "../../components/home/ServiceEditorialBlocks/ServiceEditorialBlocks.jsx";
import { SignatureDesignGrid } from "../../components/home/SignatureDesignGrid/SignatureDesignGrid.jsx";
import { StoryImageStack } from "../../components/home/StoryImageStack/StoryImageStack.jsx";
import { StoryStatement } from "../../components/home/StoryStatement/StoryStatement.jsx";
import { StudioStory } from "../../components/home/StudioStory/StudioStory.jsx";
import { WideImageFeature } from "../../components/home/WideImageFeature/WideImageFeature.jsx";

export function Home() {
  usePageTitle(
    "Premium Custom Cakes",
    "Premium custom cakes crafted with elegant detail for weddings, birthdays, engagements, and refined celebrations.",
  );

  return (
    <div className="reference-home">
      <ReferenceHero />
      <IntroStatement />
      <ServiceEditorialBlocks />
      <StudioStory />
      <WideImageFeature />

     
      <CuratedCollection />
       <SignatureDesignGrid />
      <QuoteFeature />
      <StoryStatement />
      
      <FAQAccordion />

    </div>
  );
}
