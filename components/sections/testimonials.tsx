import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials, testimonialsNote } from "@/content/site-content";

export function TestimonialsSection() {
  return (
    <section className="section-shell py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Testimonianze"
          title="Uno spazio per recensioni sobrie, reali e riconoscibili"
          description="Le letture non promettono miracoli. Offrono chiarezza, struttura e un linguaggio nuovo per orientare ciò che stai vivendo."
        />
        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.author} delay={index * 0.08}>
              <article className="h-full border-t border-gold/10 pt-7">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-gold/78">
                  Estratto
                </p>
                <p className="mt-6 max-w-[26ch] text-[1.08rem] leading-[2] text-ivory/86">
                  “{item.quote}”
                </p>
                <div className="mt-10 pt-1">
                  <p className="font-semibold text-ivory/92">{item.author}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-gold">
                    {item.context}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-sm leading-7 text-ivory/58">
          {testimonialsNote}
        </p>
      </Container>
    </section>
  );
}
