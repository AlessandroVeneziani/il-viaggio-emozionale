import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SurfaceCard } from "@/components/ui/surface-card";
import { experiencesToolsSection } from "@/content/site-content";

export function ExperiencesToolsSection() {
  return (
    <section className="section-shell py-24 sm:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-end">
          <Reveal className="editorial-title-haze">
            <p className="editorial-label">
              {experiencesToolsSection.eyebrow}
            </p>
            <h2 className="editorial-title-depth mt-6 max-w-[12ch] whitespace-pre-line font-display text-[2.7rem] leading-[1.1] sm:text-[3.45rem]">
              {experiencesToolsSection.title}
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="texture-paper rounded-[26px] border border-gold/[0.045] bg-ivory/[0.03] p-6 sm:p-7">
              <p className="max-w-[58ch] text-base leading-[2] text-ivory/80 sm:text-[1.04rem]">
                {experiencesToolsSection.description}
              </p>
              <p className="mt-6 max-w-[50ch] text-base italic leading-[1.94] text-ivory/62 sm:text-[1.02rem]">
                {experiencesToolsSection.closing}
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {experiencesToolsSection.cards.map((card, index) => {
            return (
              <Reveal key={card.title} delay={index * 0.06}>
                <SurfaceCard className="flex h-full flex-col p-7 sm:p-8">
                  <p className="editorial-label">
                    {card.kicker}
                  </p>
                  <h3 className="mt-6 whitespace-pre-line font-display text-[2.05rem] leading-[1.1] text-ivory sm:text-[2.25rem]">
                    {card.title}
                  </h3>
                  <p className="mt-5 max-w-[24ch] text-lg leading-[1.85] text-ivory/84">
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
                  <div className="mt-10 flex flex-1 items-end justify-start">
                    {card.mode === "ambient" ? (
                      <div className="texture-paper relative w-full overflow-hidden rounded-[28px] border border-gold/[0.05] bg-[linear-gradient(180deg,rgba(244,241,234,0.05),rgba(244,241,234,0.02))] p-8">
                        <div className="absolute inset-x-10 top-8 h-28 rounded-full bg-gold/[0.08] blur-3xl lg:hidden" />
                        <div className="absolute inset-x-14 bottom-8 h-20 rounded-full bg-ivory/[0.05] blur-2xl lg:hidden" />
                        <div
                          className="absolute inset-0 opacity-[0.05] lg:hidden"
                          style={{
                            backgroundImage: 'url("/images/backgrounds/sfondo-numeri-seamless.png")',
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        />
                        <div className="relative z-10 flex min-h-[190px] items-end">
                          <p className="max-w-[22ch] font-display text-[1.5rem] leading-[1.45] text-ivory/84">
                            Un luogo di ascolto in cui corpo, emozione e direzione tornano a respirare insieme.
                          </p>
                        </div>
                      </div>
                    ) : card.mode === "text" ? (
                      <div className="w-full pt-1 xl:border-t xl:border-gold/[0.07] xl:pt-5">
                        <div className="grid gap-3 sm:grid-cols-2">
                          {card.items.map((item) => (
                            <p
                              key={item}
                              className="text-sm leading-7 text-ivory/66"
                            >
                              {item}
                            </p>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="relative w-full max-w-[240px]">
                        <div className="texture-paper relative overflow-hidden rounded-[28px] border border-gold/[0.05] bg-[linear-gradient(180deg,rgba(244,241,234,0.055),rgba(244,241,234,0.022))] p-5">
                          <div
                            className="absolute inset-0 opacity-[0.05] lg:hidden"
                            style={{
                              backgroundImage: 'url("/images/backgrounds/sfondo-numeri-seamless.png")',
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                            }}
                          />
                          <Image
                            src={card.image}
                            alt={card.imageAlt}
                            width={1024}
                            height={1536}
                            sizes="(max-width: 1024px) 70vw, 22vw"
                            className="relative z-10 h-auto w-full object-contain saturate-[0.9] brightness-[0.99] contrast-[0.95] drop-shadow-[0_18px_30px_rgba(0,0,0,0.18)]"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </SurfaceCard>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
