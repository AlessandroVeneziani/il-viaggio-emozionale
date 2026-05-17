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
                Ricerca simbolica contemporanea
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
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'url("/images/backgrounds/sfondo-numeri.png")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="relative z-10">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  Formazione e ricerca
                </p>
                <div className="mt-6 overflow-hidden rounded-[28px] border border-gold/10 bg-gradient-to-br from-ivory/[0.06] to-transparent p-6">
                  <div
                    className="relative min-h-[240px] overflow-hidden rounded-[22px] border border-gold/8"
                    style={{
                      backgroundImage:
                        'linear-gradient(180deg, rgba(244, 241, 234, 0.04), rgba(244, 241, 234, 0.015)), url("/images/backgrounds/sfondo-numeri.png")',
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute inset-x-8 top-10 h-px bg-gradient-to-r from-transparent via-gold/24 to-transparent" />
                    <div className="absolute inset-y-8 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold/18 to-transparent" />
                    <div className="absolute inset-x-10 bottom-10">
                      <p className="max-w-[16ch] font-display text-[1.45rem] leading-[1.5] text-ivory/84 sm:text-[1.7rem]">
                        Il simbolo non promette.
                        <span className="block text-gold/88">Orienta.</span>
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
