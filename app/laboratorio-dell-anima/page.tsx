import Image from "next/image";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { GenericFinalCta } from "@/components/sections/generic-final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { SurfaceCard } from "@/components/ui/surface-card";
import { laboratorioPage } from "@/content/site-content";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: laboratorioPage.hero.title,
  description: laboratorioPage.hero.subtitle,
  path: "/laboratorio-dell-anima",
});

export default function LaboratorioPage() {
  return (
    <main>
      <PageHero {...laboratorioPage.hero} accentNumber="4" />

      <section className="section-shell py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 lg:grid-cols-[1fr_0.92fr]">
            <SurfaceCard className="p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Un libro da attraversare
              </p>
              <div className="mt-6 space-y-5 text-lg leading-8 text-ivory/80">
                {laboratorioPage.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <p className="mt-7 font-display text-3xl leading-tight text-ivory">
                {laboratorioPage.note}
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
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Dentro il percorso
              </p>
              <div className="relative z-10 mt-6 flex items-center justify-center rounded-[28px] border border-gold/15 bg-white/[0.03] p-6">
                <Image
                  src="/images/brand/laboratorio-libro.webp"
                  alt="Copertina del Laboratorio dell'Anima"
                  width={1024}
                  height={1536}
                  sizes="(max-width: 1024px) 76vw, 26vw"
                  className="h-auto w-full max-w-[320px] object-contain drop-shadow-[0_18px_32px_rgba(0,0,0,0.28)]"
                />
              </div>
              <ul className="mt-6 space-y-4 text-lg leading-8 text-ivory/80">
                {laboratorioPage.bullets.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-3 h-2 w-2 rounded-full bg-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <ButtonLink href="/contatti" variant="secondary">
                  Ricevi informazioni
                </ButtonLink>
              </div>
            </SurfaceCard>
          </div>
        </Container>
      </section>

      <GenericFinalCta
        title="Se il cambiamento ti chiama, il Laboratorio ti offre una struttura per attraversarlo."
        body="Uno spazio pratico, simbolico e narrativo per chi non vuole restare sulla soglia."
        primary={{ label: "Vai ai contatti", href: "/contatti" }}
      />
    </main>
  );
}
