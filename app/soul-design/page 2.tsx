import Image from "next/image";

import { GenericFinalCta } from "@/components/sections/generic-final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { soulDesignPage } from "@/content/site-content";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: soulDesignPage.hero.title,
  description: soulDesignPage.hero.subtitle,
  path: "/soul-design",
});

export default function SoulDesignPage() {
  return (
    <main>
      <PageHero {...soulDesignPage.hero} accentNumber="2" />

      <section className="section-shell py-16 sm:py-22">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Quando lo spazio cambia senso
              </p>
              <div className="mt-6 space-y-6 max-w-[62ch] text-lg leading-[1.95] text-ivory/80">
                {soulDesignPage.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <p className="mt-8 max-w-[40ch] font-display text-3xl leading-[1.15] text-ivory">
                {soulDesignPage.promise}
              </p>
              <div className="mt-8">
                <ButtonLink href="/contatti" variant="secondary">
                  Scrivimi per capire se è il percorso giusto
                </ButtonLink>
              </div>
            </div>

            <div className="texture-paper relative overflow-hidden rounded-[30px] border border-gold/8 bg-[linear-gradient(180deg,rgba(244,241,234,0.05),rgba(244,241,234,0.018))] p-8 shadow-[0_18px_40px_rgba(0,0,0,0.12)] sm:p-10">
              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage: 'url("/images/backgrounds/sfondo-numeri.png")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="relative z-10">
                <Image
                  src="/images/brand/mondo.png"
                  alt="Il Mondo come simbolo di armonia e trasformazione dello spazio"
                  width={913}
                  height={1466}
                  sizes="(max-width: 1024px) 70vw, 28vw"
                  className="mx-auto h-auto w-full max-w-[260px] object-contain saturate-[0.84] brightness-[0.98] contrast-[0.94] drop-shadow-[0_24px_36px_rgba(0,0,0,0.18)]"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell py-10 sm:py-14">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {soulDesignPage.pillars.map((item) => (
              <div key={item} className="border-t border-gold/10 pt-5">
                <p className="max-w-[34ch] text-base leading-[1.9] text-ivory/76">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <GenericFinalCta
        title="Il cambiamento ha bisogno anche di uno spazio che lo sostenga."
        body="Se senti che il tuo ambiente non ti rappresenta più, possiamo partire da ciò che stai vivendo e capire come tradurlo in forma."
        primary={{ label: "Vai ai contatti", href: "/contatti" }}
        secondary={{ label: "Scopri il Ritratto dell'Anima", href: "/ritratto-dell-anima" }}
      />
    </main>
  );
}
