import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { NumberBackdrop } from "@/components/ui/number-backdrop";
import { SectionHeading } from "@/components/ui/section-heading";
import { audiencePoints } from "@/content/site-content";

export function AudienceGrid() {
  return (
    <section className="section-shell py-28 sm:py-36">
      <NumberBackdrop tint="ivory" className="opacity-42" />
      <Container>
        <SectionHeading
          eyebrow="Per chi è"
          title="Per chi sente che qualcosa sta chiedendo un nome"
          description="Il metodo non è per chi cerca rassicurazione veloce. È per chi vuole vedere più chiaramente cosa sta vivendo e scegliere con più verità."
          centered
        />
        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {audiencePoints.map((point, index) => (
            <Reveal key={point.title} delay={index * 0.08}>
              <div className="h-full border-t border-gold/14 pt-7">
                <h3 className="font-display text-3xl leading-[1.04] text-ivory">{point.title}</h3>
                <p className="mt-5 max-w-[34ch] text-base leading-8 text-ivory/76">
                  {point.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
