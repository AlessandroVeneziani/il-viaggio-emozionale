import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { experiencesToolsSection } from "@/content/site-content";

export function ExperiencesToolsSection() {
  const [soulDesign, meditations, editorialTools] = experiencesToolsSection.cards;

  return (
    <section className="section-shell py-24 sm:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold">
              {experiencesToolsSection.eyebrow}
            </p>
            <h2 className="mt-5 max-w-[12ch] font-display text-[2.75rem] leading-[1.08] text-ivory sm:text-[3.55rem]">
              {experiencesToolsSection.title}
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="border-t border-gold/10 pt-6">
              <p className="max-w-[62ch] text-base leading-[1.95] text-ivory/80 sm:text-[1.04rem]">
                {experiencesToolsSection.description}
              </p>
              <p className="mt-5 max-w-[52ch] text-base italic leading-[1.9] text-ivory/62 sm:text-[1.02rem]">
                {experiencesToolsSection.closing}
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.08fr_0.92fr_0.92fr] lg:items-stretch">
          <Reveal>
            <article className="texture-paper relative flex h-full flex-col overflow-hidden rounded-[30px] border border-gold/8 bg-[linear-gradient(180deg,rgba(244,241,234,0.05),rgba(244,241,234,0.018))] p-8 shadow-[0_20px_48px_rgba(0,0,0,0.12)] sm:p-10">
              <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage: 'url("/images/backgrounds/sfondo-numeri.png")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="relative z-10 flex h-full flex-col">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                  {soulDesign.kicker}
                </p>
                <h3 className="mt-5 font-display text-[2.35rem] leading-[1.06] text-ivory sm:text-[2.75rem]">
                  {soulDesign.title}
                </h3>
                <p className="mt-5 max-w-[26ch] text-lg leading-[1.85] text-ivory/86">
                  {soulDesign.subtitle}
                </p>
                <p className="mt-5 max-w-[34ch] text-base leading-[1.9] text-ivory/74">
                  {soulDesign.body}
                </p>
                <div className="mt-8">
                  <ButtonLink href={soulDesign.href} variant="secondary">
                    {soulDesign.ctaLabel}
                  </ButtonLink>
                </div>
                <div className="mt-10 flex flex-1 items-end justify-end">
                  <div className="relative w-full max-w-[290px]">
                    <Image
                      src={soulDesign.image}
                      alt={soulDesign.imageAlt}
                      width={913}
                      height={1466}
                      sizes="(max-width: 1024px) 75vw, 24vw"
                      className="h-auto w-full object-contain saturate-[0.82] brightness-[0.97] contrast-[0.94] drop-shadow-[0_24px_38px_rgba(0,0,0,0.2)]"
                    />
                  </div>
                </div>
              </div>
            </article>
          </Reveal>

          {[meditations, editorialTools].map((card, index) => {
            const isMeditation = card.title === "Meditazioni Guidate";

            return (
              <Reveal key={card.title} delay={0.08 + index * 0.06}>
                <article className="flex h-full flex-col border-t border-gold/10 pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">
                    {card.kicker}
                  </p>
                  <h3 className="mt-5 font-display text-[2.1rem] leading-[1.08] text-ivory">
                    {card.title}
                  </h3>
                  <p className="mt-5 max-w-[22ch] text-lg leading-[1.85] text-ivory/84">
                    {card.subtitle}
                  </p>
                  <p className="mt-5 max-w-[31ch] text-base leading-[1.9] text-ivory/72">
                    {card.body}
                  </p>
                  <div className="mt-8">
                    <ButtonLink href={card.href} variant="secondary">
                      {card.ctaLabel}
                    </ButtonLink>
                  </div>
                  <div
                    className={`mt-10 flex flex-1 items-end ${isMeditation ? "justify-start" : "justify-end"}`}
                  >
                    {isMeditation ? (
                      <div className="relative w-full overflow-hidden rounded-[28px] border border-gold/8">
                        <Image
                          src={card.image}
                          alt={card.imageAlt}
                          width={1920}
                          height={479}
                          sizes="(max-width: 1024px) 80vw, 22vw"
                          className="h-[180px] w-full object-cover saturate-[0.58] brightness-[0.58] contrast-[0.84]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/28 to-transparent" />
                      </div>
                    ) : (
                      <div className="relative w-full max-w-[240px]">
                        <Image
                          src={card.image}
                          alt={card.imageAlt}
                          width={724}
                          height={1024}
                          sizes="(max-width: 1024px) 70vw, 20vw"
                          className="h-auto w-full object-contain saturate-[0.88] brightness-[0.98] contrast-[0.94] drop-shadow-[0_20px_32px_rgba(0,0,0,0.18)]"
                        />
                      </div>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
