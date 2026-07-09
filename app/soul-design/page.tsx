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

const cardClass =
  "texture-paper rounded-[30px] border border-gold/[0.07] bg-ivory/[0.035] p-6 shadow-[0_18px_36px_rgba(0,0,0,0.08)] sm:p-7";

function EditorialCard({
  title,
  text,
  index,
}: {
  title: string;
  text: string;
  index?: number;
}) {
  return (
    <article className={cardClass}>
      {typeof index === "number" ? (
        <p className="editorial-label text-gold/80">0{index + 1}</p>
      ) : null}
      <h3 className="mt-4 font-display text-[1.75rem] leading-tight text-ivory sm:text-[2rem]">
        {title}
      </h3>
      <p className="mt-4 text-base leading-[1.82] text-ivory/74">{text}</p>
    </article>
  );
}

export default function SoulDesignPage() {
  return (
    <main>
      <PageHero {...soulDesignPage.hero} accentNumber="2" />

      <section className="section-shell pb-18 pt-12 sm:pb-24 sm:pt-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div className="max-w-[58ch]">
              <div className="space-y-6 text-lg leading-[1.95] text-ivory/82">
                {soulDesignPage.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <ButtonLink href="/contatti">
                  Prenota una sessione
                </ButtonLink>
                <ButtonLink href="/contatti" variant="secondary">
                  Scrivimi per capire se fa per te
                </ButtonLink>
              </div>
            </div>

            <div className="lg:pl-12">
              <div className="texture-paper relative mx-auto max-w-[380px] overflow-hidden rounded-[32px] border border-gold/[0.08] bg-ivory/[0.038] p-8 shadow-[0_18px_42px_rgba(0,0,0,0.09)]">
                <div className="relative z-10">
                  <p className="editorial-label text-gold/84">Processo</p>
                  <h2 className="mt-5 max-w-[11ch] font-display text-[2.35rem] leading-[1.08] text-ivory sm:text-[2.85rem]">
                    Dare forma a ciò che stai vivendo
                  </h2>
                  <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3">
                    {[
                      "Osserva",
                      "Riconosci",
                      "Attraversa",
                      "Scegli",
                      "Prova",
                      "Integra",
                    ].map((item) => (
                      <p
                        key={item}
                        className="border-t border-gold/10 pt-3 text-sm uppercase tracking-[0.2em] text-ivory/62"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                  <p className="mt-8 text-sm leading-7 text-ivory/68">
                    Il design non è decorazione. È il processo con cui una forma
                    diventa più precisa, abitabile e vera.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="editorial-label">Manifesto</p>
            <h2 className="editorial-title-depth mx-auto mt-6 max-w-[16ch] font-display text-[2.85rem] leading-[1.06] sm:text-[4rem]">
              {soulDesignPage.manifesto.title}
            </h2>
            <div className="mx-auto mt-8 max-w-[58ch] space-y-5 text-lg leading-[1.9] text-ivory/78">
              {soulDesignPage.manifesto.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell py-14 sm:py-22">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div>
              <p className="editorial-label">Sessioni individuali</p>
              <h2 className="mt-5 max-w-[13ch] font-display text-[2.5rem] leading-[1.1] text-ivory sm:text-[3.2rem]">
                {soulDesignPage.whatItIs.title}
              </h2>
            </div>
            <div className="grid gap-5">
              {soulDesignPage.whatItIs.paragraphs.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={`rounded-[24px] border border-gold/[0.055] bg-ivory/[0.026] p-5 text-base leading-[1.9] text-ivory/78 ${
                    index === 2 ? "border-gold/[0.09] text-ivory/72" : ""
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell py-16 sm:py-24">
        <Container>
          <div className="mb-10 max-w-3xl">
            <p className="editorial-label">Metodo</p>
            <h2 className="mt-5 font-display text-[2.55rem] leading-[1.08] text-ivory sm:text-[3.45rem]">
              {soulDesignPage.movements.title}
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {soulDesignPage.movements.items.map((item, index) => (
              <EditorialCard
                key={item.title}
                title={item.title}
                text={item.text}
                index={index}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell py-16 sm:py-24">
        <Container>
          <div className="grid gap-9 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="editorial-label">Forma</p>
              <h2 className="mt-5 max-w-[12ch] font-display text-[2.5rem] leading-[1.1] text-ivory sm:text-[3.2rem]">
                {soulDesignPage.prototype.title}
              </h2>
            </div>
            <div>
              <div className="space-y-5 text-base leading-[1.92] text-ivory/78 sm:text-[1.04rem]">
                {soulDesignPage.prototype.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                {soulDesignPage.prototype.movements.map((item) => (
                  <p
                    key={item}
                    className="rounded-[22px] border border-gold/[0.065] bg-ivory/[0.028] p-5 font-display text-[1.25rem] leading-[1.45] text-ivory/86 sm:text-[1.42rem]"
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

      <section className="section-shell py-14 sm:py-22">
        <Container>
          <div className="texture-paper rounded-[34px] border border-gold/[0.065] bg-ivory/[0.03] p-7 sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="editorial-label">Simbolo</p>
                <h2 className="mt-5 max-w-[13ch] font-display text-[2.5rem] leading-[1.1] text-ivory sm:text-[3.2rem]">
                  {soulDesignPage.symbol.title}
                </h2>
              </div>
              <div className="space-y-6 text-base leading-[1.92] text-ivory/78 sm:text-[1.04rem]">
                {soulDesignPage.symbol.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="cosa-include" className="section-shell py-16 sm:py-24">
        <Container>
          <div className="mb-10 max-w-3xl">
            <p className="editorial-label">Le parti</p>
            <h2 className="mt-5 font-display text-[2.55rem] leading-[1.08] text-ivory sm:text-[3.45rem]">
              Le parti dell&apos;esperienza identitaria
            </h2>
            <p className="mt-5 max-w-[56ch] text-base leading-[1.9] text-ivory/74">
              Soul Design osserva la persona come un sistema vivo. Non siamo
              una voce sola: dentro di noi convivono forze diverse, spesso non
              allineate.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {soulDesignPage.includes.map((item) => (
              <EditorialCard key={item.title} title={item.title} text={item.text} />
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-[42ch] text-center font-display text-[1.55rem] leading-[1.45] text-ivory/88 sm:text-[2rem]">
            {soulDesignPage.partsClose}
          </p>
        </Container>
      </section>

      <section className="section-shell py-14 sm:py-22">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="editorial-label">Quando serve</p>
              <h2 className="mt-5 max-w-[12ch] font-display text-[2.5rem] leading-[1.1] text-ivory sm:text-[3.2rem]">
                Quando può aiutarti
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {soulDesignPage.arrivals.map((item) => (
                <p
                  key={item}
                  className="rounded-[22px] border border-gold/[0.06] bg-ivory/[0.026] p-5 text-base leading-8 text-ivory/76"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell py-16 sm:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.76fr_1.24fr]">
            <div>
              <p className="editorial-label">La sessione</p>
              <h2 className="mt-5 max-w-[11ch] font-display text-[2.5rem] leading-[1.1] text-ivory sm:text-[3.2rem]">
                {soulDesignPage.approach.title}
              </h2>
            </div>
            <div>
              <div className="space-y-5 text-base leading-[1.92] text-ivory/78 sm:text-[1.04rem]">
                {soulDesignPage.approach.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {soulDesignPage.approach.principles.map((item) => (
                  <p
                    key={item}
                    className="rounded-[22px] border border-gold/[0.06] bg-ivory/[0.026] p-5 text-sm leading-7 text-ivory/68"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="editorial-label">Il risultato</p>
            <h2 className="mt-5 font-display text-[2.75rem] leading-[1.06] text-ivory sm:text-[3.7rem]">
              {soulDesignPage.result.title}
            </h2>
            <div className="mx-auto mt-8 max-w-[54ch] space-y-5 text-base leading-[1.9] text-ivory/78 sm:text-[1.04rem]">
              {soulDesignPage.result.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {soulDesignPage.result.items.map((item) => (
              <p
                key={item}
                className="rounded-[22px] border border-gold/[0.065] bg-ivory/[0.03] p-5 text-center font-display text-[1.35rem] leading-[1.35] text-ivory/88"
              >
                {item}
              </p>
            ))}
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
              <p className="mx-auto mt-8 max-w-[48ch] text-lg leading-[1.92] text-ivory/78">
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
