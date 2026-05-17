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
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage: 'url("/images/backgrounds/sfondo-numeri.png")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,24,20,0.12),rgba(28,24,20,0.04))]" />
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
              <div className="relative z-10 mt-6 max-w-[34ch] rounded-[18px] border border-gold/[0.08] bg-[rgba(35,30,25,0.5)] px-5 py-4 shadow-[0_14px_30px_rgba(0,0,0,0.1)] backdrop-blur-[4px]">
                <p className="text-[0.98rem] font-medium leading-8 text-[#efe6d6]/84">
                  La copertina resta parte viva dell&apos;identità del brand: un oggetto editoriale, non un box prodotto standard.
                </p>
              </div>
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
                className={`relative flex h-full flex-col overflow-hidden p-8 ${index === 2 ? "border-[#d2b674]/28 bg-[linear-gradient(180deg,rgba(92,76,63,0.3),rgba(35,29,24,0.46))] shadow-[0_26px_56px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,244,225,0.06)]" : ""}`}
              >
                {index === 2 ? (
                  <>
                    <div
                      className="absolute inset-0 opacity-[0.05]"
                      style={{
                        backgroundImage: 'url("/images/backgrounds/sfondo-numeri.png")',
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                    <div className="absolute inset-x-8 top-7 h-20 rounded-full bg-gold/[0.07] blur-3xl" />
                  </>
                ) : null}
                <p className={`text-xs font-semibold uppercase tracking-[0.3em] ${index === 2 ? "text-[#d8bf83]" : "text-gold"}`}>
                  {option.title}
                </p>
                <h3 className={`mt-5 font-display text-4xl ${index === 2 ? "text-[#f2e7d5]" : "text-ivory"}`}>
                  {option.price}
                </h3>
                <p className={`mt-4 flex-1 text-base leading-8 ${index === 2 ? "text-[#efe6d6]/78" : "text-ivory/76"}`}>
                  {option.text}
                </p>
                <div className="mt-8">
                  <ButtonLink
                    href="/contatti"
                    variant={index === 2 ? "primary" : "secondary"}
                    className={
                      index === 2
                        ? "border border-[#f0e6d4]/12 bg-[linear-gradient(180deg,rgba(205,174,102,0.94),rgba(172,136,64,0.95))] shadow-[0_14px_34px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,247,231,0.24)] hover:bg-[linear-gradient(180deg,rgba(216,186,114,0.96),rgba(183,146,72,0.97))]"
                        : undefined
                    }
                  >
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
        secondary={{ label: "Scopri la Lettura Evolutiva", href: "/lettura-evolutiva" }}
      />
    </main>
  );
}
