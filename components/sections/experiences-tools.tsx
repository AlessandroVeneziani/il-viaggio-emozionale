import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { experiencesToolsSection } from "@/content/site-content";

export function ExperiencesToolsSection() {
  return (
    <section className="section-shell py-24 sm:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-end">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold">
              {experiencesToolsSection.eyebrow}
            </p>
            <h2 className="mt-5 max-w-[12ch] font-display text-[2.7rem] leading-[1.08] text-ivory sm:text-[3.45rem]">
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

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {experiencesToolsSection.cards.map((card, index) => {
            const isMeditation = card.title === "Meditazioni Guidate";
            const isEditorial = card.title === "Strumenti Editoriali";

            return (
              <Reveal key={card.title} delay={index * 0.06}>
                <article className="flex h-full flex-col border-t border-gold/10 pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">
                    {card.kicker}
                  </p>
                  <h3 className="mt-5 font-display text-[2.05rem] leading-[1.08] text-ivory sm:text-[2.25rem]">
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
                    {isMeditation ? (
                      <div className="relative w-full overflow-hidden rounded-[28px] border border-gold/8">
                        <Image
                          src={card.image}
                          alt={card.imageAlt}
                          width={1920}
                          height={479}
                          sizes="(max-width: 1024px) 80vw, 24vw"
                          className="h-[190px] w-full object-cover saturate-[0.58] brightness-[0.56] contrast-[0.84]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/28 to-transparent" />
                      </div>
                    ) : (
                      <div className={`relative w-full ${isEditorial ? "max-w-[220px]" : "max-w-[260px]"}`}>
                        <Image
                          src={card.image}
                          alt={card.imageAlt}
                          width={1024}
                          height={1536}
                          sizes="(max-width: 1024px) 70vw, 22vw"
                          className="h-auto w-full object-contain saturate-[0.86] brightness-[0.98] contrast-[0.94] drop-shadow-[0_20px_32px_rgba(0,0,0,0.18)]"
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
