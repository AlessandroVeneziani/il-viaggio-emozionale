import Image from "next/image";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { GenericFinalCta } from "@/components/sections/generic-final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { SurfaceCard } from "@/components/ui/surface-card";
import { tarocchiPage } from "@/content/site-content";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: tarocchiPage.hero.title,
  description: tarocchiPage.hero.subtitle,
  path: "/lettura-evolutiva",
});

export default function LetturaEvolutivaPage() {
  return (
    <main>
      <PageHero {...tarocchiPage.hero} accentNumber="3" />

      <section className="section-shell py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <SurfaceCard className="p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Cosa accade in lettura
              </p>
              <div className="mt-6 space-y-5 text-lg leading-8 text-ivory/80">
                {tarocchiPage.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <p className="mt-7 font-display text-3xl leading-tight text-ivory">
                {tarocchiPage.note}
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
                Cosa può portarti
              </p>
              <div className="relative z-10 mt-6 flex items-center justify-center rounded-[28px] border border-gold/15 bg-white/[0.03] p-6">
                <Image
                  src="/images/brand/matto.png"
                  alt="Il Matto come immagine simbolica della pagina Lettura Evolutiva"
                  width={958}
                  height={1425}
                  sizes="(max-width: 1024px) 72vw, 24vw"
                  className="h-auto w-full max-w-[260px] object-contain drop-shadow-[0_16px_28px_rgba(0,0,0,0.26)]"
                />
              </div>
              <ul className="mt-6 space-y-4 text-lg leading-8 text-ivory/80">
                {tarocchiPage.bullets.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-3 h-2 w-2 rounded-full bg-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <ButtonLink href="/contatti">Prenota una lettura</ButtonLink>
              </div>
            </SurfaceCard>
          </div>
        </Container>
      </section>

      <GenericFinalCta
        title="La lettura evolutiva non ti dice cosa credere. Ti aiuta a vedere meglio il punto in cui sei."
        body="Se stai attraversando un nodo, una scelta o un passaggio emotivo importante, possiamo leggerlo insieme con più lucidità."
        primary={{ label: "Scrivimi per prenotare", href: "/contatti" }}
        secondary={{ label: "Scopri il Ritratto dell'Anima", href: "/ritratto-dell-anima" }}
      />
    </main>
  );
}
