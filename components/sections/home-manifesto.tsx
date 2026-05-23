import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { SurfaceCard } from "@/components/ui/surface-card";
import { manifestoSection } from "@/content/site-content";

export function HomeManifestoSection() {
  return (
    <section id="manifesto" className="section-shell py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.62fr_1.38fr] lg:items-start">
          <Reveal>
            <SurfaceCard className="editorial-title-haze p-8 sm:p-10">
              <p className="editorial-label">
                {manifestoSection.eyebrow}
              </p>
              <h2 className="editorial-title-depth mt-6 max-w-[11ch] whitespace-pre-line font-display text-[2.7rem] leading-[1.08] sm:text-[3.4rem]">
                {manifestoSection.title}
              </h2>
              <p className="mt-7 max-w-[34ch] text-base leading-[2] text-ivory/74 sm:text-[1.03rem]">
                {manifestoSection.introduction}
              </p>
            </SurfaceCard>
          </Reveal>

          <Reveal delay={0.04}>
            <SurfaceCard className="p-8 sm:p-10 lg:p-12">
              <div className="grid gap-8 sm:grid-cols-2">
                {manifestoSection.statements.map(([lineOne, lineTwo], index) => (
                  <Reveal key={lineOne} delay={index * 0.06}>
                    <div className="pt-1 xl:border-t xl:border-gold/[0.08] xl:pt-6">
                      <p className="editorial-title-depth font-display text-[1.85rem] leading-[1.2] sm:text-[2.3rem]">
                        {lineOne}
                      </p>
                      <p className="mt-3 font-display text-[1.5rem] leading-[1.28] text-gold sm:text-[1.8rem]">
                        {lineTwo}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </SurfaceCard>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
