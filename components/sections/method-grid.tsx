import { Binary, Eye, HeartPulse } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SurfaceCard } from "@/components/ui/surface-card";
import { methodSteps } from "@/content/site-content";

const icons = [Binary, Eye, HeartPulse] as const;

export function MethodGrid() {
  return (
    <section id="metodo" className="section-shell py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Il metodo"
          title="Un linguaggio simbolico per leggere ciò che stai attraversando."
          description="Il Viaggio Emozionale non interpreta la persona dall'esterno. Accompagna dall'interno attraverso numeri, archetipi, sogni, immagini e corpo."
          centered
        />
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {methodSteps.map((step, index) => {
            const Icon = icons[index];

            return (
              <Reveal key={step.value} delay={index * 0.08}>
                <SurfaceCard className="h-full p-7 sm:p-8">
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
                </SurfaceCard>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={0.18} className="mt-10">
          <div className="pt-1 text-center xl:border-t xl:border-gold/[0.08] xl:pt-6">
            <p className="mx-auto max-w-[52ch] text-base leading-[1.95] text-ivory/68 sm:text-[1.03rem]">
              Numero, immagine e corpo non vengono usati per spiegarti
              dall&apos;esterno, ma per offrirti una mappa più leggibile del
              presente e della direzione che oggi chiede forma.
            </p>
            <div className="mt-8 flex justify-center">
              <ButtonLink href="/il-metodo" variant="secondary">
                Approfondisci il Metodo
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
