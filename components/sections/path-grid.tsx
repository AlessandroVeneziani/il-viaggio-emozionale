import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SurfaceCard } from "@/components/ui/surface-card";
import { featuredPaths } from "@/content/site-content";
import { cn } from "@/lib/utils";

export function PathGrid() {
  const isSinglePath = featuredPaths.length === 1;

  return (
    <section className="section-shell py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Percorsi"
          title="Altri modi per leggere il presente"
          description="Quando hai bisogno di un orientamento più immediato o di un punto d'ingresso diverso nel metodo, puoi partire da qui."
        />
        <div
          className={cn(
            "mt-16 grid gap-6",
            isSinglePath ? "mx-auto max-w-[440px]" : "lg:grid-cols-3",
          )}
        >
          {featuredPaths.map((path, index) => (
            <Reveal key={path.title} delay={index * 0.08}>
              <SurfaceCard className="group flex h-full flex-col overflow-hidden p-0 transition duration-300 hover:-translate-y-1 hover:border-gold/40">
                <div className="relative flex min-h-[280px] items-end justify-center overflow-hidden border-b border-gold/8 bg-gradient-to-b from-ivory/[0.05] via-transparent to-gold/[0.08] p-6">
                  <div
                    className="absolute inset-0 opacity-[0.1]"
                    style={{
                      backgroundImage: 'url("/images/backgrounds/sfondo-numeri.png")',
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <Image
                    src={path.image}
                    alt={path.imageAlt}
                    width={1024}
                    height={1536}
                    sizes="(max-width: 1024px) 70vw, 24vw"
                    className={cn(
                      "relative z-10 w-auto object-contain saturate-[0.88] brightness-[0.98] contrast-[0.95] drop-shadow-[0_18px_30px_rgba(0,0,0,0.22)] transition duration-300 group-hover:scale-[1.02]",
                      path.title === "Lettura Evolutiva" && "h-[250px] sm:h-[280px]",
                    )}
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                    {path.kicker}
                  </p>
                  <h3 className="mt-4 font-display text-4xl leading-tight text-ivory">
                    {path.title}
                  </h3>
                  <div className="mt-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                      Quando serve
                    </p>
                    <p className="mt-3 text-sm leading-7 text-ivory/74">
                      {path.problem}
                    </p>
                  </div>
                  <div className="mt-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                      Cosa trasforma
                    </p>
                    <p className="mt-3 text-base leading-8 text-ivory/84">
                      {path.transformation}
                    </p>
                  </div>
                  <div className="mt-6 border-t border-gold/12 pt-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                      Per chi è
                    </p>
                    <p className="mt-3 text-sm leading-7 text-ivory/74">
                      {path.audience}
                    </p>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-x-8 gap-y-5 border-t border-gold/12 pt-6">
                    <div className="min-w-[120px]">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                        Durata
                      </p>
                      <p className="mt-2 text-sm leading-6 text-ivory/76">{path.duration}</p>
                    </div>
                    <div className="min-w-[120px]">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                        Formato
                      </p>
                      <p className="mt-2 text-sm leading-6 text-ivory/76">{path.format}</p>
                    </div>
                    <div className="min-w-[120px]">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                        {path.investment.includes("€") ? "Investimento" : "Accesso"}
                      </p>
                      <p className="mt-2 font-display text-2xl leading-none text-ivory">
                        {path.investment}
                      </p>
                    </div>
                  </div>
                  <div className="mt-7">
                    <ButtonLink href={path.href} variant="secondary">
                      {path.ctaLabel}
                    </ButtonLink>
                  </div>
                </div>
              </SurfaceCard>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/percorsi" variant="ghost" size="sm">
            Vedi tutti i percorsi
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
