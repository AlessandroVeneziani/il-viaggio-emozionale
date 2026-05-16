import { ExperiencesToolsSection } from "@/components/sections/experiences-tools";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { FounderPreviewSection } from "@/components/sections/founder-preview";
import { GoogleReviewsReadySection } from "@/components/sections/google-reviews-ready";
import { HomeHero } from "@/components/sections/home-hero";
import { MethodGrid } from "@/components/sections/method-grid";
import { PathGrid } from "@/components/sections/path-grid";
import { SoulDesignSpotlightSection } from "@/components/sections/soul-design-spotlight";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Home",
  description:
    "Il Viaggio Emozionale aiuta a trasformare ciò che senti confuso in una mappa più chiara attraverso numerologia evolutiva, tarocchi archetipici, Soul Design e percorsi simbolici di orientamento personale.",
  path: "/",
});

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <MethodGrid />
      <PathGrid />
      <GoogleReviewsReadySection />
      <SoulDesignSpotlightSection />
      <ExperiencesToolsSection />
      <FounderPreviewSection />
      <FinalCtaSection />
    </main>
  );
}
