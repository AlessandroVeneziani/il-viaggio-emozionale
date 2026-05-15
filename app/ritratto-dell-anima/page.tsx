import Image from "next/image";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { GenericFinalCta } from "@/components/sections/generic-final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { SurfaceCard } from "@/components/ui/surface-card";
import { ritrattoPage } from "@/content/site-content";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: ritrattoPage.hero.title,
  description: ritrattoPage.hero.subtitle,
  path: "/ritratto-dell-anima",
});

export default function RitrattoPage() {
  return (
    <main>
      <PageHero {...ritrattoPage.hero} accentNumber="8" />

      <section className="section-shell py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <SurfaceCard className="p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Perché nasce
              </p>
              <div className="mt-6 space-y-5 text-lg leading-8 text-ivory/80">
                {ritrattoPage.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <p className="mt-7 font-display text-3xl leading-tight text-ivory">
                {ritrattoPage.promise}
              </p>
            </SurfaceCard>

            <SurfaceCard className="relative overflow-hidden p-8 sm:p-10">
              <div
                className="absolute inset-0 opacity-12"
                style={{
                  backgroundImage: 'url("/images/backgrounds/sfondo-numeri.png")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <p className="relative z-10 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Libro personale stampato
              </p>
              <div className="relative z-10 mt-6 flex items-center justify-center rounded-[28px] border border-gold/15 bg-white/[0.03] p-6">
                <Image
                  src="/images/brand/ritratto-dell-anima.png"
                  alt="Copertina del Ritratto dell'Anima"
                  width={1024}
                  height={1536}
                  sizes="(max-width: 1024px) 80vw, 30vw"
                  className="h-auto w-full max-w-[360px] object-contain drop-shadow-[0_20px_34px_rgba(0,0,0,0.28)]"
                />
              </div>
              <p className="relative z-10 mt-6 text-base leading-8 text-ivory/76">
                La copertina resta parte viva dell&apos;identità del brand e nel nuovo
                sito viene trattata come un oggetto editoriale, non come un box
                prodotto standard.
              </p>
            </SurfaceCard>
          </div>
        </Container>
      </section>

      <section className="section-shell py-2 sm:py-4">
        <Container>
          <SurfaceCard className="p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Cosa contiene
            </p>
            <ul className="mt-6 grid gap-4 text-lg leading-8 text-ivory/80 lg:grid-cols-2">
              {ritrattoPage.includes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-3 h-2 w-2 rounded-full bg-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </SurfaceCard>
        </Container>
      </section>

      <section className="section-shell py-16 sm:py-20">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Le forme del Ritratto
            </p>
            <h2 className="mt-5 font-display text-5xl text-ivory sm:text-6xl">
              Scegli il livello di profondità che risuona con il tuo momento
            </h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {ritrattoPage.options.map((option, index) => (
              <SurfaceCard
                key={option.title}
                className={`flex h-full flex-col p-8 ${index === 2 ? "border-gold/45 bg-gradient-to-b from-white/[0.06] to-white/[0.03]" : ""}`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  {option.title}
                </p>
                <h3 className="mt-5 font-display text-4xl text-ivory">{option.price}</h3>
                <p className="mt-4 flex-1 text-base leading-8 text-ivory/76">
                  {option.text}
                </p>
                <div className="mt-8">
                  <ButtonLink href="/contatti" variant={index === 2 ? "primary" : "secondary"}>
                    Richiedi informazioni
                  </ButtonLink>
                </div>
              </SurfaceCard>
            ))}
          </div>
        </Container>
      </section>

      <GenericFinalCta
        title="Quando la tua storia chiede una forma, il Ritratto la rende leggibile."
        body="Scrivimi per capire quale versione è più adatta al tuo momento e come iniziare."
        primary={{ label: "Vai ai contatti", href: "/contatti" }}
        secondary={{ label: "Scopri le letture Tarocchi", href: "/letture-tarocchi" }}
      />
    </main>
  );
}
