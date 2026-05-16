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
          eyebrow="Il Percorso"
          title="Non si entra nel metodo da una risposta. Si entra da una mappa."
          description="Ritratto dell'Anima, Soul Design e Percorso Evolutivo sono tre accessi diversi allo stesso lavoro di orientamento simbolico."
        />
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {featuredPaths.map((path, index) => (
            <Reveal key={path.title} delay={0.06 + index * 0.05}>
              <SurfaceCard className="flex h-full flex-col p-7 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  {path.kicker}
                </p>
                <h3 className="mt-4 font-display text-[2rem] leading-[1.05] text-ivory sm:text-[2.2rem]">
                  {path.title}
                </h3>
                <p className="mt-5 text-base leading-[1.9] text-ivory/78">
                  {path.summary}
                </p>
                <div className="mt-6 border-t border-gold/10 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                    Quando serve
                  </p>
                  <p className="mt-3 text-sm leading-7 text-ivory/72">
                    {path.problem}
                  </p>
                </div>
                <div className="mt-5 border-t border-gold/10 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                    Cosa trasforma
                  </p>
                  <p className="mt-3 text-base leading-8 text-ivory/82">
                    {path.transformation}
                  </p>
                </div>
                <div className="mt-5 border-t border-gold/10 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                    Per chi è
                  </p>
                  <p className="mt-3 text-sm leading-7 text-ivory/72">
                    {path.audience}
                  </p>
                </div>
                <div className="mt-8 border-t border-gold/10 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                    {path.detailLabel}
                  </p>
                  <p className="mt-3 font-display text-[1.55rem] leading-[1.15] text-ivory">
                    {path.detailValue}
                  </p>
                </div>
                <div className="mt-7">
                  <ButtonLink href={path.href} variant="secondary">
                    {path.ctaLabel}
                  </ButtonLink>
                </div>
              </SurfaceCard>
            </Reveal>
          ))}
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
