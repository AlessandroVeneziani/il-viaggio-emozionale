import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { seoTopics } from "@/content/site-content";

export function ExplorationTopicsSection() {
  return (
    <section className="section-shell py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Cosa puoi esplorare"
              title="Cosa puoi esplorare con Il Viaggio Emozionale"
              description="Una sezione più esplicita per capire, in modo semplice, che cosa può emergere da una lettura o da un percorso."
            />
            <p className="mt-6 max-w-xl text-base leading-8 text-ivory/80">
              Crescita personale, numerologia evolutiva, relazioni karmiche,
              blocchi emotivi e direzione personale vengono letti con un metodo
              simbolico ma orientato alla vita concreta.
            </p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {seoTopics.map((topic, index) => (
              <Reveal key={topic.title} delay={index * 0.05}>
                <div className="h-full border-t border-gold/12 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                    Tema di lavoro
                  </p>
                  <h3 className="mt-4 font-display text-3xl leading-tight text-ivory">
                    {topic.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-ivory/76 sm:text-base">
                    {topic.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
