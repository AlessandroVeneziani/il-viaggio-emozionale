import Image from "next/image";

import { TrackedButtonLink } from "@/components/analytics/tracked-link";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SurfaceCard } from "@/components/ui/surface-card";
import { featuredPaths } from "@/content/site-content";
export function PathGrid() {
  return (
    <section className="section-shell py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Porte di ingresso"
          title={"Tre modi per entrare\nnello stesso ecosistema."}
          description="Ogni porta apre un livello di profondità diverso. Puoi iniziare da una mappa autonoma, da un incontro individuale o da un percorso continuativo: ciò che conta è il passaggio che stai vivendo adesso."
        />
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {featuredPaths.map((path, index) => (
            <Reveal key={path.title} delay={0.06 + index * 0.05}>
              <SurfaceCard className="flex h-full flex-col overflow-hidden p-0">
                <div className="relative flex min-h-[220px] items-end overflow-hidden border-b border-gold/[0.06] bg-ink/[0.16] p-7 sm:min-h-[240px] sm:p-8">
                  <div
                    className="absolute inset-0 opacity-[0.05] lg:hidden"
                    style={{
                      backgroundImage: 'url("/images/backgrounds/sfondo-numeri-seamless.png")',
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <Image
                    src={path.image}
                    alt={path.imageAlt}
                    width={958}
                    height={1425}
                    sizes="(max-width: 1024px) 82vw, 28vw"
                    className="absolute right-4 top-4 h-[92%] w-[46%] object-contain object-top opacity-80 saturate-[0.78] brightness-[0.95] contrast-[0.92]"
                  />
                  <div className="relative z-10 max-w-[13rem]">
                    <p className="editorial-label">
                      {path.kicker}
                    </p>
                    <h3 className="mt-4 font-display text-[2.05rem] leading-[1.05] text-ivory sm:text-[2.35rem]">
                      {path.title}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <p className="text-base leading-[1.9] text-ivory/82">
                    {path.summary}
                  </p>
                  <div className="mt-7 grid gap-5">
                    <div className="pt-1 xl:border-t xl:border-gold/[0.08] xl:pt-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                        Quando può aiutarti
                      </p>
                      <p className="mt-3 text-sm leading-7 text-ivory/72">
                        {path.problem}
                      </p>
                    </div>
                    <div className="pt-1 xl:border-t xl:border-gold/[0.08] xl:pt-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                        Cosa apre
                      </p>
                      <p className="mt-3 text-sm leading-7 text-ivory/72">
                        {path.transformation}
                      </p>
                    </div>
                  </div>

                  <div className="mt-auto pt-8">
                    <div className="border-t border-gold/[0.07] pt-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                        {path.detailLabel}
                      </p>
                      <p className="mt-3 font-display text-[1.45rem] leading-[1.15] text-ivory">
                        {path.detailValue}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-ivory/62">
                        {path.audience}
                      </p>
                      <div className="mt-6">
                        {path.title === "Sessione Evolutiva" ? (
                          <TrackedButtonLink
                            href={path.href}
                            variant="secondary"
                            target="_self"
                            tracking={{
                              name: "book_session_click",
                              params: {
                                service_name: "Sessione Evolutiva",
                                currency: "EUR",
                                value: 100,
                              },
                            }}
                          >
                            {path.ctaLabel}
                          </TrackedButtonLink>
                        ) : (
                          <ButtonLink href={path.href} variant="secondary">
                            {path.ctaLabel}
                          </ButtonLink>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </SurfaceCard>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.18} className="mt-12">
          <div className="mx-auto max-w-3xl text-center xl:border-t xl:border-gold/[0.08] xl:pt-7">
            <p className="text-base leading-[1.95] text-ivory/78 sm:text-[1.03rem]">
              Qualunque porta tu scelga, il lavoro resta lo stesso: fare
              chiarezza sul passaggio che stai vivendo e trasformarlo in una
              direzione più consapevole.
            </p>
            <div className="mt-8 flex justify-center">
              <ButtonLink href="#come-nasce-un-cambiamento" variant="ghost" size="sm">
                Come nasce un cambiamento
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
