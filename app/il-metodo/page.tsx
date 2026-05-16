import { GenericFinalCta } from "@/components/sections/generic-final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { methodPage } from "@/content/site-content";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Il Metodo",
  description: methodPage.hero.subtitle,
  path: "/il-metodo",
});

export default function MethodPage() {
  return (
    <main>
      <PageHero {...methodPage.hero} accentNumber="6" />

      <section className="section-shell py-8 sm:py-12">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Origine del progetto
              </p>
            </div>
            <div className="space-y-5 border-t border-gold/10 pt-6 text-lg leading-[1.95] text-ivory/80">
              {methodPage.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <div className="pt-2">
                <ButtonLink href="/percorsi" variant="secondary">
                  Esplora il percorso
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {methodPage.sections.map((section) => (
        <section key={section.title} className="section-shell py-12 sm:py-16">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
              <div>
                <h2 className="max-w-[12ch] font-display text-[2.4rem] leading-[1.12] text-ivory sm:text-[3.1rem]">
                  {section.title}
                </h2>
              </div>
              <div className="space-y-5 border-t border-gold/10 pt-6 text-base leading-[1.95] text-ivory/78 sm:text-[1.04rem]">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </Container>
        </section>
      ))}

      <section className="section-shell py-14 sm:py-20">
        <Container>
          <div className="mx-auto max-w-5xl border-t border-gold/10 pt-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold">
              Idea madre
            </p>
            <h2 className="mx-auto mt-6 max-w-[12ch] font-display text-[2.8rem] leading-[1.08] text-ivory sm:text-[4rem]">
              {methodPage.centralTitle}
            </h2>
            <div className="mx-auto mt-8 max-w-3xl space-y-4 text-base leading-[1.9] text-ivory/76 sm:text-[1.05rem]">
              {methodPage.centralBody.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell py-12 sm:py-18">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Centro distintivo
              </p>
              <h2 className="mt-5 font-display text-[2.4rem] leading-[1.1] text-ivory sm:text-[3.1rem]">
                {methodPage.soulDesign.title}
              </h2>
            </div>
            <div className="space-y-5 border-t border-gold/10 pt-6 text-base leading-[1.95] text-ivory/78 sm:text-[1.04rem]">
              {methodPage.soulDesign.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell py-12 sm:py-18">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="max-w-[10ch] font-display text-[2.4rem] leading-[1.1] text-ivory sm:text-[3.1rem]">
                {methodPage.audience.title}
              </h2>
            </div>
            <div className="grid gap-x-10 gap-y-2 sm:grid-cols-2">
              {methodPage.audience.items.map((item) => (
                <div key={item} className="border-t border-gold/10 py-4">
                  <p className="text-base leading-8 text-ivory/76">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell py-10 sm:py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Ecosistema sociale
              </p>
              <h2 className="mt-5 max-w-[12ch] font-display text-[2.4rem] leading-[1.1] text-ivory sm:text-[3rem]">
                {methodPage.social.title}
              </h2>
            </div>
            <div className="space-y-5 border-t border-gold/10 pt-6 text-base leading-[1.95] text-ivory/74 sm:text-[1.02rem]">
              {methodPage.social.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <GenericFinalCta
        title={methodPage.finalCta.title}
        body={methodPage.finalCta.body}
        primary={methodPage.finalCta.primary}
        secondary={methodPage.finalCta.secondary}
      />
    </main>
  );
}
