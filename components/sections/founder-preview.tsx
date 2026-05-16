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
          <Reveal className="border-t border-gold/14 pt-8">
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
