import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { SurfaceCard } from "@/components/ui/surface-card";
import { identificationSection } from "@/content/site-content";

export function HomeManifestoSection() {
  return (
    <section id="inizia-da-qui" className="section-shell py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.62fr_1.38fr] lg:items-start">
          <Reveal>
            <SurfaceCard className="editorial-title-haze p-8 sm:p-10">
              <p className="editorial-label">
                {identificationSection.eyebrow}
              </p>
              <h2 className="editorial-title-depth mt-6 max-w-[13ch] whitespace-pre-line font-display text-[2.55rem] leading-[1.08] sm:text-[3.15rem]">
                {identificationSection.title}
              </h2>
              <p className="mt-7 max-w-[34ch] text-base leading-[2] text-ivory/74 sm:text-[1.03rem]">
                {identificationSection.introduction}
              </p>
            </SurfaceCard>
          </Reveal>

          <Reveal delay={0.04}>
            <SurfaceCard className="p-8 sm:p-10 lg:p-12">
              <div className="grid gap-8 lg:grid-cols-3">
                {identificationSection.passages.map((passage, index) => (
                  <Reveal key={passage.title} delay={index * 0.06}>
                    <div className="pt-1 xl:border-t xl:border-gold/[0.08] xl:pt-6">
                      <p className="font-display text-[3rem] leading-none text-gold/18">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-5 font-display text-[1.75rem] leading-[1.15] text-ivory sm:text-[2rem]">
                        {passage.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-ivory/76 sm:text-base sm:leading-[1.9]">
                        {passage.text}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
              <p className="mt-10 max-w-[42ch] border-t border-gold/[0.08] pt-6 font-display text-[1.8rem] leading-[1.22] text-gold sm:text-[2.15rem]">
                {identificationSection.conclusion}
              </p>
            </SurfaceCard>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
