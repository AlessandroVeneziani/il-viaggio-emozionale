import Image from "next/image";

import { GenericFinalCta } from "@/components/sections/generic-final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { editorialToolsPage } from "@/content/site-content";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: editorialToolsPage.hero.title,
  description: editorialToolsPage.hero.subtitle,
  path: "/shop-editoriale",
});

export default function EditorialToolsPage() {
  return (
    <main>
      <PageHero {...editorialToolsPage.hero} accentNumber="4" />

      <section className="section-shell py-16 sm:py-22">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Una collezione da abitare
              </p>
              <div className="mt-6 space-y-6 max-w-[62ch] text-lg leading-[1.95] text-ivory/80">
                {editorialToolsPage.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <p className="mt-8 max-w-[40ch] font-display text-3xl leading-[1.15] text-ivory">
                {editorialToolsPage.promise}
              </p>
              <div className="mt-8">
                <ButtonLink href="/contatti" variant="secondary">
                  Richiedi disponibilità
                </ButtonLink>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="texture-paper rounded-[30px] border border-gold/8 bg-[linear-gradient(180deg,rgba(244,241,234,0.05),rgba(244,241,234,0.018))] p-6 shadow-[0_16px_34px_rgba(0,0,0,0.1)]">
                <Image
                  src="/images/brand/ritratto-dell-anima.png"
                  alt="Ritratto dell'Anima come oggetto editoriale"
                  width={1024}
                  height={1536}
                  sizes="(max-width: 1024px) 40vw, 18vw"
                  className="mx-auto h-auto w-full max-w-[180px] object-contain saturate-[0.9] brightness-[0.98] contrast-[0.94]"
                />
              </div>
              <div className="texture-paper rounded-[30px] border border-gold/8 bg-[linear-gradient(180deg,rgba(244,241,234,0.05),rgba(244,241,234,0.018))] p-6 shadow-[0_16px_34px_rgba(0,0,0,0.1)]">
                <Image
                  src="/images/brand/laboratorio-libro.webp"
                  alt="Laboratorio dell'Anima come strumento editoriale simbolico"
                  width={724}
                  height={1024}
                  sizes="(max-width: 1024px) 40vw, 18vw"
                  className="mx-auto h-auto w-full max-w-[180px] object-contain saturate-[0.9] brightness-[0.98] contrast-[0.94]"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell py-10 sm:py-14">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {editorialToolsPage.pillars.map((item) => (
              <div key={item} className="border-t border-gold/10 pt-5">
                <p className="max-w-[34ch] text-base leading-[1.9] text-ivory/76">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <GenericFinalCta
        title="Alcune trasformazioni hanno bisogno di restare tra le mani."
        body="Se vuoi capire quali materiali sono già disponibili o quali strumenti editoriali stanno entrando nella collezione, scrivimi."
        primary={{ label: "Vai ai contatti", href: "/contatti" }}
        secondary={{ label: "Scopri il Laboratorio dell'Anima", href: "/laboratorio-dell-anima" }}
      />
    </main>
  );
}
