import Link from "next/link";

import { GenericFinalCta } from "@/components/sections/generic-final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { percorsiPage } from "@/content/site-content";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: percorsiPage.hero.title,
  description: percorsiPage.hero.subtitle,
  path: "/percorsi",
});

export default function PercorsiPage() {
  return (
    <main>
      <PageHero {...percorsiPage.hero} accentNumber="4" />

      <section className="section-shell py-10 sm:py-14">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.84fr_1.16fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Un ecosistema di orientamento
              </p>
            </div>
            <div className="space-y-5 border-t border-gold/10 pt-6 text-base leading-[1.95] text-ivory/78 sm:text-[1.04rem]">
              {percorsiPage.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell py-8 sm:py-14">
        <Container>
          <div className="space-y-4">
            {percorsiPage.items.map((item) => (
              <article key={item.title} className="border-t border-gold/10 py-8">
                <div className="grid gap-6 lg:grid-cols-[0.9fr_0.7fr_0.4fr] lg:items-start">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">
                      {item.kicker}
                    </p>
                    <h2 className="mt-4 font-display text-[2.1rem] leading-[1.08] text-ivory sm:text-[2.5rem]">
                      {item.title}
                    </h2>
                  </div>
                  <div>
                    <p className="text-base leading-[1.9] text-ivory/78 sm:text-[1.02rem]">
                      {item.text}
                    </p>
                    <p className="mt-5 text-sm font-medium leading-7 text-gold/78">
                      {item.details}
                    </p>
                  </div>
                  <div className="lg:flex lg:justify-end">
                    <ButtonLink href={item.href} variant="secondary">
                      {item.ctaLabel}
                    </ButtonLink>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 border-t border-gold/10 pt-10 sm:mt-16 sm:pt-12">
            <div className="grid gap-8 lg:grid-cols-[0.84fr_1.16fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  Continuità editoriale
                </p>
                <h2 className="mt-4 max-w-[15ch] font-display text-[2.2rem] leading-[1.08] text-ivory sm:text-[2.75rem]">
                  {percorsiPage.continuityTools.title}
                </h2>
              </div>
              <div>
                <p className="max-w-[62ch] text-base leading-[1.95] text-ivory/76 sm:text-[1.04rem]">
                  {percorsiPage.continuityTools.text}
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {percorsiPage.continuityTools.items.map((item) => (
                    <article
                      key={item.title}
                      className="border-t border-gold/10 pt-6"
                    >
                      <div className="flex flex-wrap items-center gap-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold/82">
                          {item.kicker}
                        </p>
                        <span className="rounded-full border border-gold/15 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-ivory/58">
                          {item.ctaLabel}
                        </span>
                      </div>
                      <h3 className="mt-4 font-display text-[1.85rem] leading-[1.1] text-ivory sm:text-[2.1rem]">
                        {item.title}
                      </h3>
                      <p className="mt-5 text-base leading-[1.85] text-ivory/72">
                        {item.text}
                      </p>
                      <p className="mt-4 text-sm leading-7 text-ivory/52">
                        {item.details}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-gold/10 pt-8">
            <p className="max-w-3xl text-lg leading-[1.9] text-ivory/72">
              {percorsiPage.finalNote}
            </p>
            <div className="mt-6">
              <Link
                href="/contatti"
                className="text-sm font-semibold text-gold underline decoration-gold/40 underline-offset-4 transition hover:text-ivory"
              >
                Non sai da dove iniziare? Scrivimi e raccontami cosa stai vivendo.
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <GenericFinalCta
        title="Non sai da dove iniziare?"
        body="Raccontami cosa stai vivendo. Ti aiuterò a capire se partire dal Ritratto dell'Anima, da una Sessione Evolutiva o da Soul Design."
        primary={{ label: "Inizia il tuo percorso", href: "/contatti" }}
        secondary={{ label: "Scopri il metodo", href: "/il-metodo" }}
      />
    </main>
  );
}
