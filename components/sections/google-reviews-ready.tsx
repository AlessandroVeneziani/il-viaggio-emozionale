import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { googleReviewsSection } from "@/content/site-content";

export function GoogleReviewsReadySection() {
  return (
    <section className="section-shell py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.66fr_1.34fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow={googleReviewsSection.eyebrow}
              title={googleReviewsSection.title}
              description={googleReviewsSection.description}
            />
            <div className="mt-6">
              <ButtonLink href={googleReviewsSection.cta.href} variant="secondary">
                {googleReviewsSection.cta.label}
              </ButtonLink>
            </div>
          </Reveal>

          <div className="grid gap-8">
            <Reveal delay={0.04}>
              <div className="flex flex-wrap items-end gap-5 border-t border-gold/10 pt-6">
                <div>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-gold/78">
                    Google Reviews
                  </p>
                  <div className="mt-4 flex items-end gap-4">
                    <span className="font-display text-[3.15rem] leading-none text-ivory">
                      4.9
                    </span>
                    <div className="pb-1">
                      <p className="text-sm tracking-[0.3em] text-gold">★★★★★</p>
                      <p className="mt-2 text-sm text-ivory/64">
                        Recensioni verificabili e collegabili al profilo reale
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 text-[0.72rem] uppercase tracking-[0.22em] text-ivory/62">
                  <span className="border-b border-gold/14 pb-1">Profilo reale</span>
                  <span className="border-b border-gold/14 pb-1">Estratti sobri</span>
                  <span className="border-b border-gold/14 pb-1">Verifica diretta</span>
                </div>
              </div>
            </Reveal>

            {googleReviewsSection.snippets.map((item, index) => (
              <Reveal key={item.initials} delay={0.08 + index * 0.06}>
                <div className="border-t border-gold/10 pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/10 text-sm font-semibold text-gold/88">
                      {item.initials}
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-3">
                        <p className="text-sm font-semibold text-ivory/88">{item.label}</p>
                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold/78">
                          Verificata
                        </span>
                      </div>
                      <p className="mt-2 text-sm tracking-[0.24em] text-gold">★★★★★</p>
                      <p className="mt-4 max-w-[54ch] text-base leading-[1.9] text-ivory/76">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
