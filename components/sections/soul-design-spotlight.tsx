import type { CSSProperties } from "react";

import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { soulDesignHomeSpotlight } from "@/content/site-content";

export function SoulDesignSpotlightSection() {
  return (
    <section className="section-shell py-24 sm:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <div className="editorial-title-haze texture-paper rounded-[30px] border border-gold/[0.05] bg-[linear-gradient(180deg,rgba(244,241,234,0.058),rgba(244,241,234,0.024))] p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold">
                {soulDesignHomeSpotlight.eyebrow}
              </p>
              <h2 className="editorial-title-depth mt-5 max-w-[14ch] font-display text-[2.7rem] leading-[1.08] sm:text-[3.45rem]">
                {soulDesignHomeSpotlight.title}
              </h2>
              <p className="mt-6 max-w-[60ch] text-base leading-[1.95] text-ivory/80 sm:text-[1.04rem]">
                {soulDesignHomeSpotlight.description}
              </p>
              <div className="mt-8 space-y-4">
                {soulDesignHomeSpotlight.lines.map((line) => (
                  <p
                    key={line}
                    className="pt-1 text-sm leading-7 text-ivory/66 sm:text-base xl:border-t xl:border-gold/[0.08] xl:pt-4"
                  >
                    {line}
                  </p>
                ))}
              </div>
              <p className="mt-8 text-sm uppercase tracking-[0.32em] text-gold/82">
                Welcome Back Home
              </p>
              <div className="mt-8">
                <ButtonLink href={soulDesignHomeSpotlight.cta.href} variant="secondary">
                  {soulDesignHomeSpotlight.cta.label}
                </ButtonLink>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="texture-paper relative mx-auto overflow-hidden rounded-[34px] border border-gold/[0.05] bg-[linear-gradient(180deg,rgba(244,241,234,0.05),rgba(244,241,234,0.02))] p-8 sm:p-10">
              <div
                aria-hidden="true"
                className="symbolic-fragment bottom-[-3.6rem] right-[3%] hidden h-[12.5rem] w-[13rem] lg:block xl:bottom-[-4.2rem] xl:right-[4%] xl:h-[14rem] xl:w-[14.5rem]"
                style={
                  {
                    "--symbol-opacity": 0.044,
                    "--symbol-blur": "2.8px",
                  } as CSSProperties
                }
              >
                <span className="translate-x-[10%] translate-y-[10%] text-[22rem] xl:text-[26rem]">2</span>
              </div>
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage: 'url("/images/backgrounds/sfondo-numeri-seamless.png")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute left-1/2 top-1/2 hidden h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/10 bg-gold/[0.03] blur-[1px] sm:block" />
              <div className="relative grid gap-4 sm:grid-cols-2">
                {[
                  ["TESTA", "visione, linguaggio, direzione"],
                  ["CUORE", "emozione, relazione, vulnerabilità"],
                  ["DESIDERIO", "fuoco, movimento, scelta"],
                  ["CORPO", "radicamento, presenza, realtà"],
                  ["ENERGIA", "forza che muove il sistema"],
                  ["ANIMA", "direzione profonda"],
                ].map(([label, text]) => (
                  <div key={label} className="pt-1 xl:border-t xl:border-gold/[0.08] xl:pt-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                      {label}
                    </p>
                    <p className="mt-3 max-w-[22ch] text-sm leading-7 text-ivory/70">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
              <p className="relative mt-8 max-w-[24ch] font-display text-[1.45rem] leading-[1.45] text-ivory/84 sm:text-[1.7rem]">
                L&apos;essere umano non deve essere aggiustato. Deve essere riallineato.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
