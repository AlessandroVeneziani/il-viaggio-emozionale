import { ExperiencesToolsSection } from "@/components/sections/experiences-tools";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { FounderPreviewSection } from "@/components/sections/founder-preview";
import { GoogleReviewsReadySection } from "@/components/sections/google-reviews-ready";
import { HomeHero } from "@/components/sections/home-hero";
import { MethodGrid } from "@/components/sections/method-grid";
import { PathGrid } from "@/components/sections/path-grid";
import { RitrattoSpotlightSection } from "@/components/sections/ritratto-spotlight";
import { SoulDesignSpotlightSection } from "@/components/sections/soul-design-spotlight";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Home",
  description:
    "Il Viaggio Emozionale è uno studio contemporaneo di orientamento simbolico che aiuta a rendere leggibile il presente attraverso Ritratto dell'Anima, Soul Design, Percorso Evolutivo e strumenti di integrazione.",
  path: "/",
});

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <MethodGrid />
      <RitrattoSpotlightSection />
      <SoulDesignSpotlightSection />
      <PathGrid />
      <ExperiencesToolsSection />
      <GoogleReviewsReadySection />
      <FounderPreviewSection />
      <FinalCtaSection />
    </main>
  );
}
