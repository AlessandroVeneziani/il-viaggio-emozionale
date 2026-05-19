import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { featuredPaths } from "@/content/site-content";

export function PathGrid() {
  return (
    <section className="section-shell py-24 sm:py-32">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-[-4.8rem] top-[32%] hidden font-display text-[17rem] leading-none text-gold/[0.048] blur-[2px] lg:block xl:left-[-5.6rem] xl:text-[20rem]"
      >
        4
      </span>
      <Container>
        <SectionHeading
          eyebrow="Il Percorso"
          title="Non si entra nel metodo da una risposta. Si entra da una mappa."
          description="Ritratto dell'Anima, Soul Design e Percorso Evolutivo sono tre accessi diversi allo stesso lavoro di orientamento simbolico."
        />
        <div className="mt-16 relative">
          <div className="absolute left-[17px] top-0 hidden h-full w-px bg-gradient-to-b from-gold/0 via-gold/10 to-gold/0 xl:block" />
          <div className="grid gap-10">
            {featuredPaths.map((path, index) => (
              <Reveal key={path.title} delay={0.06 + index * 0.05}>
                <div className="grid gap-5 lg:grid-cols-[40px_0.72fr_1.28fr] lg:gap-8">
                  <div className="hidden lg:flex justify-center pt-1">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/18 bg-ivory/[0.02] text-sm font-semibold text-gold">
                      {index + 1}
                    </span>
                  </div>
                  <div className="pt-1 lg:pt-6 xl:border-t xl:border-gold/[0.08] xl:pt-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                      Step {index + 1}
                    </p>
                    <h3 className="mt-4 font-display text-[2rem] leading-[1.05] text-ivory sm:text-[2.25rem]">
                      {path.title}
                    </h3>
                    <p className="mt-4 text-sm uppercase tracking-[0.22em] text-ivory/50">
                      {path.kicker}
                    </p>
                  </div>
                  <div className="pt-1 lg:pt-6 xl:border-t xl:border-gold/[0.08] xl:pt-5">
                    <p className="max-w-[54ch] text-base leading-[1.9] text-ivory/78">
                      {path.summary}
                    </p>
                    <div className="mt-6 grid gap-5 sm:grid-cols-2">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                          Quando serve
                        </p>
                        <p className="mt-3 text-sm leading-7 text-ivory/72">
                          {path.problem}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                          Cosa trasforma
                        </p>
                        <p className="mt-3 text-sm leading-7 text-ivory/72">
                          {path.transformation}
                        </p>
                      </div>
                    </div>
                    <div className="mt-7 flex flex-col gap-5 pt-1 sm:flex-row sm:items-end sm:justify-between xl:border-t xl:border-gold/[0.07] xl:pt-5">
                      <div className="max-w-[34ch]">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                          {path.detailLabel}
                        </p>
                        <p className="mt-3 font-display text-[1.55rem] leading-[1.15] text-ivory">
                          {path.detailValue}
                        </p>
                        <p className="mt-3 text-sm leading-7 text-ivory/60">
                          {path.audience}
                        </p>
                      </div>
                      <div>
                        <ButtonLink href={path.href} variant="secondary">
                          {path.ctaLabel}
                        </ButtonLink>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <ButtonLink href="/percorsi" variant="ghost" size="sm">
            Vedi tutti i percorsi
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
