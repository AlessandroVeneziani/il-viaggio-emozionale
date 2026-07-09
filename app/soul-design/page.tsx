import { PageHero } from "@/components/sections/page-hero";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { soulDesignPage } from "@/content/site-content";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Soul Design | Sessioni di orientamento identitario e crescita personale",
  description:
    "Un metodo simbolico e pratico per leggere crisi, blocchi e passaggi di vita. Sessioni individuali con Alessandro Veneziani per ritrovare direzione.",
  path: "/soul-design",
  absoluteTitle: true,
});

export default function SoulDesignPage() {
  return (
    <main>
      <PageHero {...soulDesignPage.hero} accentNumber="2" />

      <section className="section-shell py-16 sm:py-22">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.94fr_1.06fr] lg:items-end">
            <div className="max-w-[64ch] space-y-6 text-lg leading-[1.95] text-ivory/80">
              {soulDesignPage.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <div className="pt-2">
                <ButtonLink href="/contatti" variant="secondary">
                  Prenota una sessione di Soul Design
                </ButtonLink>
              </div>
            </div>

            <div className="border-t border-gold/10 pt-8 lg:pl-12">
              <div className="texture-paper relative mx-auto max-w-[360px] overflow-hidden rounded-[30px] border border-gold/7 bg-[linear-gradient(180deg,rgba(244,241,234,0.038),rgba(244,241,234,0.016))] p-8">
                <div className="relative z-10 flex min-h-[330px] flex-col justify-between">
                  <div>
                    <p className="editorial-label text-gold/84">Processo</p>
                    <h2 className="mt-5 max-w-[9ch] font-display text-[2.35rem] leading-[1.08] text-ivory sm:text-[2.85rem]">
                      Dare forma a ciò che stai vivendo.
                    </h2>
                  </div>
                  <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3">
                    {[
                      "Osserva",
                      "Intuisce",
                      "Formula",
                      "Prova",
                      "Corregge",
                      "Dà forma",
                    ].map((item) => (
                      <p
                        key={item}
                        className="border-t border-gold/8 pt-3 text-sm uppercase tracking-[0.2em] text-ivory/60"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-6 max-w-[34ch] text-sm leading-7 text-ivory/62">
                Il design non è una decorazione. È il processo con cui una forma
                diventa più precisa, abitabile e vera.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell py-12 sm:py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="editorial-label">Sessioni individuali</p>
              <h2 className="mt-5 max-w-[13ch] font-display text-[2.5rem] leading-[1.1] text-ivory sm:text-[3.2rem]">
                {soulDesignPage.whatItIs.title}
              </h2>
            </div>
            <div className="space-y-6 border-t border-gold/10 pt-6 text-base leading-[1.95] text-ivory/78 sm:text-[1.04rem]">
              {soulDesignPage.whatItIs.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell py-14 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.76fr_1.24fr]">
            <div>
              <p className="editorial-label">Identità</p>
              <h2 className="mt-5 max-w-[12ch] font-display text-[2.5rem] leading-[1.1] text-ivory sm:text-[3.2rem]">
                {soulDesignPage.identity.title}
              </h2>
            </div>
            <div className="space-y-6 border-t border-gold/10 pt-6 text-base leading-[1.95] text-ivory/78 sm:text-[1.04rem]">
              {soulDesignPage.identity.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell py-16 sm:py-22">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.76fr_1.24fr]">
            <div>
              <p className="editorial-label">Forma</p>
              <h2 className="mt-5 max-w-[12ch] font-display text-[2.5rem] leading-[1.1] text-ivory sm:text-[3.2rem]">
                {soulDesignPage.prototype.title}
              </h2>
            </div>
            <div className="border-t border-gold/10 pt-6">
              <div className="space-y-6 text-base leading-[1.95] text-ivory/78 sm:text-[1.04rem]">
                {soulDesignPage.prototype.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {soulDesignPage.prototype.movements.map((item) => (
                  <p
                    key={item}
                    className="border-t border-gold/10 pt-4 font-display text-[1.35rem] leading-[1.45] text-ivory/84 sm:text-[1.5rem]"
                  >
                    {item}
                  </p>
                ))}
              </div>
              <div className="mt-10">
                <ButtonLink href="/contatti" variant="secondary">
                  Prenota una sessione di Soul Design
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell py-14 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.76fr_1.24fr]">
            <div>
              <p className="editorial-label">Simbolo</p>
              <h2 className="mt-5 max-w-[12ch] font-display text-[2.5rem] leading-[1.1] text-ivory sm:text-[3.2rem]">
                {soulDesignPage.symbol.title}
              </h2>
            </div>
            <div className="space-y-6 border-t border-gold/10 pt-6 text-base leading-[1.95] text-ivory/78 sm:text-[1.04rem]">
              {soulDesignPage.symbol.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="cosa-include" className="section-shell py-16 sm:py-22">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="editorial-label">Le parti</p>
              <h2 className="mt-5 max-w-[13ch] font-display text-[2.5rem] leading-[1.1] text-ivory sm:text-[3.2rem]">
                Le parti dell&apos;esperienza identitaria
              </h2>
              <p className="mt-5 max-w-[34ch] text-base leading-[1.9] text-ivory/72">
                Soul Design osserva la persona come un sistema vivo. Non siamo
                una voce sola: dentro convivono parti diverse, spesso non
                allineate tra loro.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {soulDesignPage.includes.map((item) => (
                <div key={item.title} className="border-t border-gold/10 pt-5">
                  <h3 className="font-display text-[1.7rem] leading-tight text-ivory">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-[32ch] text-base leading-[1.9] text-ivory/74">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell py-12 sm:py-18">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="editorial-label">Quando serve</p>
              <h2 className="mt-5 max-w-[13ch] font-display text-[2.5rem] leading-[1.1] text-ivory sm:text-[3.2rem]">
                Quando serve una sessione di Soul Design
              </h2>
            </div>
            <div>
              <p className="mb-6 max-w-[54ch] text-base leading-[1.9] text-ivory/76">
                Una sessione di Soul Design può essere utile quando senti che
                qualcosa dentro di te si sta muovendo, ma non riesci ancora a
                dargli una forma chiara.
              </p>
              <div className="grid gap-x-10 gap-y-2 sm:grid-cols-2">
                {soulDesignPage.arrivals.map((item) => (
                  <div key={item} className="border-t border-gold/10 py-4">
                    <p className="text-base leading-8 text-ivory/76">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell py-16 sm:py-22">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.76fr_1.24fr]">
            <div>
              <p className="editorial-label">La sessione</p>
              <h2 className="mt-5 max-w-[11ch] font-display text-[2.5rem] leading-[1.1] text-ivory sm:text-[3.2rem]">
                {soulDesignPage.approach.title}
              </h2>
            </div>
            <div className="border-t border-gold/10 pt-6">
              <div className="space-y-6 text-base leading-[1.95] text-ivory/78 sm:text-[1.04rem]">
                {soulDesignPage.approach.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {soulDesignPage.approach.principles.map((item) => (
                  <p
                    key={item}
                    className="border-t border-gold/8 pt-4 text-sm leading-7 text-ivory/62"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell py-14 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.76fr_1.24fr]">
            <div>
              <p className="editorial-label">Il risultato</p>
              <h2 className="mt-5 max-w-[12ch] font-display text-[2.5rem] leading-[1.1] text-ivory sm:text-[3.2rem]">
                {soulDesignPage.result.title}
              </h2>
            </div>
            <div className="border-t border-gold/10 pt-6">
              <div className="space-y-6 text-base leading-[1.95] text-ivory/78 sm:text-[1.04rem]">
                {soulDesignPage.result.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {soulDesignPage.result.items.map((item) => (
                  <p
                    key={item}
                    className="border-t border-gold/10 pt-4 font-display text-[1.25rem] leading-[1.5] text-ivory/84 sm:text-[1.45rem]"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell pb-28 pt-16 sm:pb-36 sm:pt-24">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <div className="gold-divider mb-10" />
            <div className="editorial-title-haze mx-auto max-w-3xl">
              <h2 className="editorial-title-depth mx-auto max-w-[18ch] whitespace-pre-line font-display text-[2.75rem] leading-[1.08] sm:text-[3.7rem]">
                {soulDesignPage.finalCta.title}
              </h2>
              <p className="mx-auto mt-8 max-w-[44ch] text-lg leading-[1.98] text-ivory/78">
                {soulDesignPage.finalCta.body}
              </p>
              <p className="mx-auto mt-5 max-w-[42ch] text-sm leading-7 text-ivory/58">
                {soulDesignPage.finalCta.note}
              </p>
            </div>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ButtonLink href={soulDesignPage.finalCta.primary.href} size="lg">
                {soulDesignPage.finalCta.primary.label}
              </ButtonLink>
              {soulDesignPage.finalCta.secondary ? (
                <ButtonLink
                  href={soulDesignPage.finalCta.secondary.href}
                  variant="secondary"
                  size="lg"
                >
                  {soulDesignPage.finalCta.secondary.label}
                </ButtonLink>
              ) : null}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
