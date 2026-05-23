import { ExperiencesToolsSection } from "@/components/sections/experiences-tools";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { FounderPreviewSection } from "@/components/sections/founder-preview";
import { GoogleReviewsReadySection } from "@/components/sections/google-reviews-ready";
import { HomeHero } from "@/components/sections/home-hero";
import { HomeManifestoSection } from "@/components/sections/home-manifesto";
import { MethodGrid } from "@/components/sections/method-grid";
import { PathGrid } from "@/components/sections/path-grid";
import { SoulDesignSpotlightSection } from "@/components/sections/soul-design-spotlight";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: siteConfig.defaultTitle,
  description: siteConfig.description,
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <main className="home-main-background">
      <HomeHero />
      <HomeManifestoSection />
      <MethodGrid />
      <SoulDesignSpotlightSection />
      <PathGrid />
      <ExperiencesToolsSection />
      <GoogleReviewsReadySection />
      <FounderPreviewSection />
      <FinalCtaSection />
    </main>
  );
}
