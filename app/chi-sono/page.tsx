import Image from "next/image";

import { GenericFinalCta } from "@/components/sections/generic-final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SurfaceCard } from "@/components/ui/surface-card";
import { aboutPage } from "@/content/site-content";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: aboutPage.hero.title,
  description: aboutPage.hero.subtitle,
  path: "/chi-sono",
});

export default function AboutPage() {
  return (
    <main>
      <PageHero {...aboutPage.hero} accentNumber="1" />

      <section className="section-shell py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <SurfaceCard className="p-8 sm:p-10 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Fondatore del metodo
              </p>
              <div className="mt-6 space-y-6 text-lg leading-9 text-ivory/82">
                {aboutPage.introduction.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {aboutPage.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="rounded-[20px] border border-gold/14 bg-ivory/[0.04] px-5 py-4 text-sm font-semibold text-ivory/84"
                  >
                    {highlight}
                  </div>
                ))}
              </div>
            </SurfaceCard>

            <SurfaceCard className="relative overflow-hidden p-8 sm:p-10">
              <div
                className="absolute inset-0 opacity-[0.08] lg:opacity-[0.12]"
                style={{
                  backgroundImage: 'url("/images/backgrounds/sfondo-numeri-seamless.png")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="relative z-10">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  Formazione e ricerca
                </p>
                <div className="mt-6 overflow-hidden rounded-[28px] border border-gold/[0.055] bg-gradient-to-br from-ivory/[0.055] to-transparent p-4 sm:p-5">
                  <div className="relative overflow-hidden rounded-[24px]">
                    <Image
                      src="/images/brand/alessandro-veneziani-portrait.jpg"
                      alt="Ritratto editoriale di Alessandro Veneziani"
                      width={1200}
                      height={1800}
                      sizes="(max-width: 1024px) 90vw, 32vw"
                      className="h-auto w-full object-cover brightness-[0.98] contrast-[0.98] saturate-[0.9] lg:[filter:brightness(0.83)_contrast(1.2)_saturate(0.76)_sepia(0.12)]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(32,27,23,0.06),rgba(32,27,23,0.02)_40%,rgba(32,27,23,0.18)_100%)] lg:bg-[radial-gradient(circle_at_50%_34%,transparent_34%,rgba(16,13,11,0.08)_70%,rgba(16,13,11,0.18)_100%),linear-gradient(180deg,rgba(21,17,14,0.1),rgba(29,24,20,0.16)_34%,rgba(28,23,19,0.28)_72%,rgba(24,20,17,0.4)_100%)]" />
                    <div className="pointer-events-none absolute inset-0 hidden lg:block lg:bg-[radial-gradient(circle_at_50%_16%,rgba(193,162,109,0.026),transparent_30%),linear-gradient(135deg,rgba(255,248,238,0.012),transparent_42%)]" />
                    <div className="absolute inset-x-5 bottom-5 rounded-[18px] border border-gold/[0.06] bg-[rgba(66,56,47,0.22)] px-4 py-3 backdrop-blur-[4px] lg:border-gold/[0.08] lg:bg-[rgba(53,45,38,0.28)]">
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold/88">
                        Alessandro Veneziani
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[#efe6d6]/84">
                        Fondatore de Il Viaggio Emozionale e creatore del metodo Soul Design.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 space-y-5 text-base leading-8 text-ivory/76 sm:text-lg">
                  {aboutPage.formation.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className="mt-8">
                  <ButtonLink href="/contatti" variant="secondary">
                    Contattami
                  </ButtonLink>
                </div>
              </div>
            </SurfaceCard>
          </div>
        </Container>
      </section>

      <section className="section-shell py-4 sm:py-8">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {aboutPage.sections.map((section) => (
              <SurfaceCard key={section.title} className="h-full p-8 sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">
                  {section.title}
                </p>
                <div className="mt-5 space-y-5 text-base leading-8 text-ivory/80 sm:text-lg">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </SurfaceCard>
            ))}
          </div>
        </Container>
      </section>

      <GenericFinalCta
        title="Il Viaggio Emozionale esiste per dare forma a ciò che senti, senza renderlo vago."
        body="Se vuoi capire come lavorare insieme o quale percorso può aiutarti oggi, scrivimi. Possiamo partire da lì."
        primary={{ label: "Vai ai contatti", href: "/contatti" }}
        secondary={{ label: "Scopri il metodo", href: "/il-metodo" }}
      />
    </main>
  );
}
