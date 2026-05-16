import Image from "next/image";
import Link from "next/link";

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
          <div className="grid gap-12 lg:grid-cols-[0.94fr_1.06fr] lg:items-end">
            <div className="max-w-[64ch] space-y-6 text-lg leading-[1.95] text-ivory/80">
              {soulDesignPage.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <div className="pt-2">
                <ButtonLink href="#cosa-include" variant="secondary">
                  Esplora il metodo
                </ButtonLink>
              </div>
            </div>

            <div className="border-t border-gold/10 pt-8 lg:pl-12">
              <div className="texture-paper relative mx-auto max-w-[320px] overflow-hidden rounded-[30px] bg-ivory/[0.03] p-6">
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage: 'url("/images/backgrounds/sfondo-numeri.png")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <Image
                  src="/images/brand/mondo.png"
                  alt="Il Mondo come simbolo di identità, passaggio e direzione personale"
                  width={913}
                  height={1466}
                  sizes="(max-width: 1024px) 70vw, 24vw"
                  className="relative z-10 mx-auto h-auto w-full max-w-[240px] object-contain saturate-[0.78] brightness-[0.95] contrast-[0.9] drop-shadow-[0_20px_30px_rgba(0,0,0,0.16)]"
                />
              </div>
              <p className="mt-6 max-w-[32ch] text-sm leading-7 text-ivory/62">
                Non si tratta di dirti chi sarai. Si tratta di leggere con più
                chiarezza la forma che oggi la tua identità sta cercando.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell py-12 sm:py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Cosa è Soul Design
              </p>
              <h2 className="mt-5 max-w-[12ch] font-display text-[2.5rem] leading-[1.1] text-ivory sm:text-[3.2rem]">
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

      <section id="cosa-include" className="section-shell py-16 sm:py-22">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Cosa include
              </p>
              <h2 className="mt-5 max-w-[12ch] font-display text-[2.5rem] leading-[1.1] text-ivory sm:text-[3.2rem]">
                Gli strumenti del metodo
              </h2>
              <p className="mt-5 max-w-[34ch] text-base leading-[1.9] text-ivory/72">
                Identità, simboli, relazioni, linguaggio personale e direzione
                non sono elementi separati. Sono modi diversi di leggere lo
                stesso passaggio e renderlo più coerente.
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
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                {soulDesignPage.fragments.title}
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {soulDesignPage.fragments.items.map((item) => (
                <p
                  key={item}
                  className="border-t border-gold/10 pt-5 font-display text-[1.35rem] leading-[1.5] text-ivory/84 sm:text-[1.55rem]"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell py-12 sm:py-18">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Quando si arriva qui
              </p>
              <h2 className="mt-5 max-w-[13ch] font-display text-[2.5rem] leading-[1.1] text-ivory sm:text-[3.2rem]">
                Quando qualcosa dentro di te chiede di essere letto
                diversamente.
              </h2>
            </div>
            <div className="grid gap-x-10 gap-y-2 sm:grid-cols-2">
              {soulDesignPage.arrivals.map((item) => (
                <div key={item} className="border-t border-gold/10 py-4">
                  <p className="text-base leading-8 text-ivory/76">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell py-16 sm:py-22">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.76fr_1.24fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                L&apos;approccio
              </p>
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
                  <p key={item} className="border-t border-gold/8 pt-4 text-sm leading-7 text-ivory/62">
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
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Ecosistema
              </p>
              <h2 className="mt-5 max-w-[12ch] font-display text-[2.5rem] leading-[1.1] text-ivory sm:text-[3.2rem]">
                {soulDesignPage.ecosystem.title}
              </h2>
              <p className="mt-5 max-w-[34ch] text-base leading-[1.9] text-ivory/72">
                {soulDesignPage.ecosystem.description}
              </p>
            </div>
            <div className="space-y-4">
              {soulDesignPage.ecosystem.items.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group block border-t border-gold/10 py-5 transition hover:border-gold/20"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <h3 className="font-display text-[1.7rem] leading-tight text-ivory">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-[36ch] text-base leading-[1.85] text-ivory/72">
                        {item.text}
                      </p>
                    </div>
                    <span className="mt-1 text-sm text-gold transition group-hover:translate-x-1">
                      Vai
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <GenericFinalCta
        title={soulDesignPage.finalCta.title}
        body={soulDesignPage.finalCta.body}
        primary={soulDesignPage.finalCta.primary}
        secondary={soulDesignPage.finalCta.secondary}
      />
    </main>
  );
}
