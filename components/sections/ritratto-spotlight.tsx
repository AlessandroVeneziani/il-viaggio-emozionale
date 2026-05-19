import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ritrattoHomeSpotlight } from "@/content/site-content";

export function RitrattoSpotlightSection() {
  return (
    <section className="section-shell py-24 sm:py-32">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-3.5rem] right-[-2.4rem] hidden font-display text-[19rem] leading-none text-gold/[0.082] blur-[1.9px] lg:block xl:bottom-[-4.6rem] xl:right-[-3rem] xl:text-[23rem]"
      >
        8
      </span>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <Reveal delay={0.08}>
            <div className="texture-paper relative mx-auto flex min-h-[460px] w-full max-w-[520px] items-end justify-center overflow-hidden rounded-[34px] border border-gold/[0.05] bg-[linear-gradient(180deg,rgba(244,241,234,0.05),rgba(244,241,234,0.02))] p-8">
              <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage: 'url("/images/backgrounds/sfondo-numeri-seamless.png")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <Image
                src={ritrattoHomeSpotlight.image}
                alt={ritrattoHomeSpotlight.imageAlt}
                width={1024}
                height={1536}
                sizes="(max-width: 1024px) 80vw, 34vw"
                className="relative z-10 h-auto w-full max-w-[280px] object-contain saturate-[0.8] brightness-[0.97] contrast-[0.94] drop-shadow-[0_22px_34px_rgba(0,0,0,0.18)]"
              />
              <div className="absolute bottom-5 left-5 right-5 z-20 max-w-none rounded-[18px] border border-gold/[0.05] bg-[rgba(66,56,47,0.22)] px-4 py-3 shadow-[0_10px_22px_rgba(54,42,31,0.06)] backdrop-blur-[2px] sm:left-auto sm:right-5 sm:max-w-[220px] sm:border-gold/[0.06] sm:bg-[rgba(66,56,47,0.2)] sm:shadow-[0_12px_24px_rgba(54,42,31,0.08)] sm:backdrop-blur-[5px]">
                <p className="text-[0.7rem] font-medium leading-[1.7] text-[#f1e6d5]/84 sm:text-[0.72rem] sm:leading-[1.72]">
                  Ogni Ritratto nasce come una mappa personale: da leggere, custodire e ritrovare nel tempo.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="editorial-title-haze">
            <div className="pt-1 xl:border-t xl:border-gold/[0.08] xl:pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold">
                {ritrattoHomeSpotlight.eyebrow}
              </p>
              <h2 className="editorial-title-depth mt-5 max-w-[12ch] font-display text-[2.7rem] leading-[1.08] sm:text-[3.45rem]">
                {ritrattoHomeSpotlight.title}
              </h2>
              <p className="mt-6 max-w-[60ch] text-base leading-[1.95] text-ivory/80 sm:text-[1.04rem]">
                {ritrattoHomeSpotlight.description}
              </p>
              <div className="mt-8 space-y-4">
                {ritrattoHomeSpotlight.lines.map((line) => (
                  <p
                    key={line}
                    className="pt-1 text-sm leading-7 text-ivory/66 sm:text-base xl:border-t xl:border-gold/[0.08] xl:pt-4"
                  >
                    {line}
                  </p>
                ))}
              </div>
              <div className="mt-8">
                <ButtonLink href={ritrattoHomeSpotlight.cta.href} variant="secondary">
                  {ritrattoHomeSpotlight.cta.label}
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
