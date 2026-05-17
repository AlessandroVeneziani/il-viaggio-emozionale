import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ritrattoHomeSpotlight } from "@/content/site-content";

export function RitrattoSpotlightSection() {
  return (
    <section className="section-shell py-24 sm:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <Reveal delay={0.08}>
            <div className="texture-paper relative mx-auto flex min-h-[460px] w-full max-w-[520px] items-end justify-center overflow-hidden rounded-[34px] border border-gold/8 bg-[linear-gradient(180deg,rgba(244,241,234,0.04),rgba(244,241,234,0.015))] p-8">
              <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage: 'url("/images/backgrounds/sfondo-numeri.png")',
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
              <div className="absolute bottom-5 left-5 right-5 z-20 max-w-none rounded-[18px] border border-gold/[0.08] bg-[rgba(28,24,20,0.62)] px-4 py-3 backdrop-blur-[6px] sm:left-auto sm:right-5 sm:max-w-[230px] sm:border-gold/8 sm:backdrop-blur-[10px]">
                <p className="text-[0.72rem] leading-6 text-ivory/72 sm:text-xs">
                  La copertina viene trattata come un oggetto editoriale, non come un prodotto standard.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="border-t-0 pt-1 sm:border-t sm:border-gold/10 sm:pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold">
                {ritrattoHomeSpotlight.eyebrow}
              </p>
              <h2 className="mt-5 max-w-[12ch] font-display text-[2.7rem] leading-[1.08] text-ivory sm:text-[3.45rem]">
                {ritrattoHomeSpotlight.title}
              </h2>
              <p className="mt-6 max-w-[60ch] text-base leading-[1.95] text-ivory/80 sm:text-[1.04rem]">
                {ritrattoHomeSpotlight.description}
              </p>
              <div className="mt-8 space-y-4">
                {ritrattoHomeSpotlight.lines.map((line) => (
                  <p
                    key={line}
                    className="border-t-0 pt-1 text-sm leading-7 text-ivory/66 sm:border-t sm:border-gold/8 sm:pt-4 sm:text-base"
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
