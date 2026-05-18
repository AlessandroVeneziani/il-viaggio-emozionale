import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { NumberBackdrop } from "@/components/ui/number-backdrop";
import { founderPreview } from "@/content/site-content";

export function FounderPreviewSection() {
  return (
    <section className="section-shell py-24 sm:py-32">
      <NumberBackdrop className="opacity-42" />
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <Reveal className="editorial-title-haze pt-1 xl:border-t xl:border-gold/[0.1] xl:pt-8">
            <div className="mb-7 overflow-hidden rounded-[28px] border border-gold/[0.055] bg-gradient-to-br from-ivory/[0.05] to-transparent p-4 lg:border-gold/[0.075] lg:bg-[linear-gradient(145deg,rgba(244,241,234,0.06),rgba(244,241,234,0.018))] lg:shadow-[0_18px_34px_rgba(41,32,25,0.1)]">
              <div className="relative overflow-hidden rounded-[22px]">
                <Image
                  src="/images/brand/alessandro-veneziani-portrait.jpg"
                  alt="Ritratto di Alessandro Veneziani"
                  width={1200}
                  height={1800}
                  sizes="(max-width: 1024px) 88vw, 28vw"
                  className="h-auto w-full object-cover brightness-[0.98] contrast-[0.98] saturate-[0.9] lg:brightness-[0.92] lg:contrast-[1.06] lg:saturate-[0.84]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(32,27,23,0.02),rgba(32,27,23,0.08)_44%,rgba(32,27,23,0.22)_100%)] lg:bg-[linear-gradient(180deg,rgba(27,22,18,0.08),rgba(38,31,25,0.14)_38%,rgba(40,32,26,0.28)_100%)]" />
                <div className="pointer-events-none absolute inset-0 hidden lg:block lg:bg-[radial-gradient(circle_at_50%_18%,rgba(204,176,120,0.045),transparent_34%),linear-gradient(135deg,rgba(255,248,238,0.035),transparent_46%)]" />
              </div>
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold">
              Chi sono
            </p>
            <h2 className="editorial-title-depth mt-5 font-display text-[3rem] leading-[1.06] sm:text-[3.7rem]">
              Alessandro
              <br />
              Veneziani
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-ivory/82">
              Fondatore de Il Viaggio Emozionale e creatore del metodo Soul Design.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="editorial-title-haze">
            <h2 className="editorial-title-depth font-display text-[2.5rem] leading-[1.06] sm:text-[3.2rem]">
              {founderPreview.title}
            </h2>
            <div className="mt-7 max-w-[64ch] space-y-7 text-base leading-[1.98] text-ivory/84 sm:text-[1.04rem]">
              {founderPreview.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8">
              <ButtonLink href={founderPreview.cta.href} variant="secondary">
                {founderPreview.cta.label}
              </ButtonLink>
            </div>
            <p className="mt-5 max-w-[46ch] text-sm leading-7 text-ivory/68">
              Non sai da dove iniziare? Puoi scrivermi direttamente e raccontarmi cosa
              stai vivendo. Ti aiuterò a capire quale percorso può esserti più utile.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
