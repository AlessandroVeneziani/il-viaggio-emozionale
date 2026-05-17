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
          <Reveal className="border-t-0 pt-1 sm:border-t sm:border-gold/14 sm:pt-8">
            <div className="mb-7 overflow-hidden rounded-[28px] border border-gold/[0.08] bg-gradient-to-br from-ivory/[0.04] to-transparent p-4">
              <div className="relative overflow-hidden rounded-[22px]">
                <Image
                  src="/images/brand/alessandro-veneziani-portrait.jpg"
                  alt="Ritratto di Alessandro Veneziani"
                  width={1200}
                  height={1800}
                  sizes="(max-width: 1024px) 88vw, 28vw"
                  className="h-auto w-full object-cover brightness-[0.98] contrast-[0.98] saturate-[0.9]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(32,27,23,0.02),rgba(32,27,23,0.08)_44%,rgba(32,27,23,0.22)_100%)]" />
              </div>
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold">
              Chi sono
            </p>
            <h2 className="mt-5 font-display text-[3rem] leading-[1.06] text-ivory sm:text-[3.7rem]">
              Alessandro
              <br />
              Veneziani
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-ivory/76">
              Ricercatore simbolico contemporaneo, autore del metodo e fondatore
              de Il Viaggio Emozionale.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-[2.5rem] leading-[1.06] text-ivory sm:text-[3.2rem]">
              {founderPreview.title}
            </h2>
            <div className="mt-7 max-w-[64ch] space-y-7 text-base leading-[1.95] text-ivory/80 sm:text-[1.04rem]">
              {founderPreview.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8">
              <ButtonLink href={founderPreview.cta.href} variant="secondary">
                {founderPreview.cta.label}
              </ButtonLink>
            </div>
            <p className="mt-5 max-w-[46ch] text-sm leading-7 text-ivory/62">
              Non sai da dove iniziare? Puoi scrivermi direttamente e raccontarmi cosa
              stai vivendo. Ti aiuterò a capire quale percorso può esserti più utile.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
