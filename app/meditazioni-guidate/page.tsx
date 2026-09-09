import Image from "next/image";

import { GenericFinalCta } from "@/components/sections/generic-final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { buildMetadata } from "@/lib/metadata";

const meditationsPage = {
  hero: {
    kicker: "Pratiche di ascolto",
    title: "Meditazioni Guidate",
    displayTitle: "Meditazioni\nGuidate",
    subtitle:
      "Audio e pratiche pensate per accompagnarti nei passaggi in cui serve rallentare, sentire e tornare al centro.",
  },
  intro: [
    "Le meditazioni guidate nascono per creare continuità tra una lettura e la vita quotidiana. Non sono contenuti da consumare in fretta, ma spazi da abitare con presenza.",
    "Ogni traccia è pensata per accompagnare un momento preciso: un blocco emotivo, una soglia interiore, un bisogno di ascolto o di orientamento più sottile.",
  ],
  pillars: [
    "Pratiche audio per ritrovare ascolto e centratura",
    "Tracce utili nei passaggi di cambiamento o confusione",
    "Un tono calmo, sobrio e privo di enfasi spirituale",
    "Uno spazio di integrazione tra intuizione e quotidiano",
  ],
  promise:
    "Quando rallenti davvero, ciò che stai vivendo smette di fare rumore e inizia a mostrarsi con più chiarezza.",
};

export const metadata = {
  ...buildMetadata({
    title: meditationsPage.hero.title,
    description: meditationsPage.hero.subtitle,
    path: "/meditazioni-guidate",
  }),
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function MeditationsPage() {
  return (
    <main>
      <PageHero {...meditationsPage.hero} accentNumber="5" />

      <section className="section-shell py-16 sm:py-22">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Uno spazio da abitare con presenza
              </p>
              <div className="mt-6 space-y-6 max-w-[62ch] text-lg leading-[1.95] text-ivory/80">
                {meditationsPage.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <p className="mt-8 max-w-[42ch] font-display text-3xl leading-[1.15] text-ivory">
                {meditationsPage.promise}
              </p>
              <div className="mt-8">
                <ButtonLink href="/contatti" variant="secondary">
                  Scrivimi per ricevere aggiornamenti
                </ButtonLink>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[30px] border border-gold/8">
              <Image
                src="/images/backgrounds/colline.webp"
                alt="Paesaggio contemplativo per la sezione meditazioni guidate"
                width={1920}
                height={479}
                sizes="(max-width: 1024px) 90vw, 36vw"
                className="h-[360px] w-full object-cover saturate-[0.58] brightness-[0.56] contrast-[0.86]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell py-10 sm:py-14">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {meditationsPage.pillars.map((item) => (
              <div key={item} className="border-t border-gold/10 pt-5">
                <p className="max-w-[34ch] text-base leading-[1.9] text-ivory/76">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <GenericFinalCta
        title="La continuità del percorso spesso inizia da pochi minuti di ascolto vero."
        body="Se vuoi capire quando e come integrare queste pratiche nel tuo percorso, scrivimi direttamente."
        primary={{ label: "Vai ai contatti", href: "/contatti" }}
      />
    </main>
  );
}
