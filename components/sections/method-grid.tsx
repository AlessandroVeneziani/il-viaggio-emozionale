import { Binary, Compass, Eye, Shapes } from "lucide-react";

import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SurfaceCard } from "@/components/ui/surface-card";
import { methodSteps, numerologySpotlight } from "@/content/site-content";

const icons = [Binary, Eye, Shapes, Compass] as const;

export function MethodGrid() {
  return (
    <section id="metodo" className="section-shell py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Il metodo"
          title="Un metodo per tradurre il caos interiore in qualcosa di leggibile"
          description="Numeri per leggere la struttura, tarocchi per dare forma al presente, simbolo per riconoscere il significato e decisione per trasformare la chiarezza in scelta."
          centered
        />
        <div className="mt-16 grid gap-8 lg:grid-cols-4">
          {methodSteps.map((step, index) => {
            const Icon = icons[index];

            return (
              <Reveal key={step.value} delay={index * 0.08}>
                <div className="h-full border-t border-gold/12 pt-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="text-gold/86">
                      <Icon size={18} />
                    </div>
                    <span className="font-display text-[2.9rem] leading-none text-gold/18">
                      {step.value}
                    </span>
                  </div>
                  <h3 className="mt-7 font-display text-[2rem] leading-tight text-ivory">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-[26ch] text-base leading-[1.95] text-ivory/76">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={0.18} className="mt-8">
          <SurfaceCard className="overflow-hidden p-0">
            <div className="grid items-center gap-0 lg:grid-cols-[0.62fr_0.38fr]">
              <div className="p-8 sm:p-10 lg:p-12">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  {numerologySpotlight.eyebrow}
                </p>
                <h3 className="mt-5 max-w-3xl font-display text-4xl leading-tight text-ivory sm:text-5xl">
                  {numerologySpotlight.title}
                </h3>
                <p className="mt-6 max-w-2xl text-base leading-8 text-ivory/80 sm:text-lg">
                  {numerologySpotlight.description}
                </p>
              </div>
              <div className="relative flex min-h-[320px] items-end justify-center bg-gradient-to-br from-gold/[0.06] via-transparent to-transparent p-8">
                <div
                  className="absolute inset-0 opacity-[0.1]"
                  style={{
                    backgroundImage: 'url("/images/backgrounds/sfondo-numeri.png")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <Image
                  src={numerologySpotlight.image}
                  alt={numerologySpotlight.imageAlt}
                  width={757}
                  height={622}
                  sizes="(max-width: 1024px) 60vw, 26vw"
                  className="relative z-10 h-auto w-full max-w-[320px] object-contain saturate-[0.88] brightness-[0.98] contrast-[0.94] drop-shadow-[0_20px_30px_rgba(0,0,0,0.2)]"
                />
              </div>
            </div>
          </SurfaceCard>
        </Reveal>
      </Container>
    </section>
  );
}
