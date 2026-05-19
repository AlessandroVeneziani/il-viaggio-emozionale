import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { NumberBackdrop } from "@/components/ui/number-backdrop";

type PageHeroProps = {
  eyebrow?: string;
  kicker?: string;
  title: string;
  subtitle: string;
  accentNumber?: string;
};

export function PageHero({
  eyebrow,
  kicker,
  title,
  subtitle,
}: PageHeroProps) {
  const label = eyebrow ?? kicker ?? "";

  return (
    <section className="section-shell overflow-hidden pb-20 pt-8 sm:pb-24 sm:pt-10 lg:pb-28">
      <NumberBackdrop className="opacity-58" />
      <Container>
        <Reveal className="editorial-title-haze max-w-4xl">
          {label ? (
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.34em] text-gold sm:text-sm">
              {label}
            </p>
          ) : null}
          <h1 className="editorial-title-depth text-balance font-display text-[2.95rem] leading-[1.06] sm:text-[4.1rem] lg:text-[5.3rem]">
            {title}
          </h1>
          <p className="mt-7 max-w-3xl text-pretty text-lg leading-[1.9] text-ivory/80 sm:text-[1.12rem]">
            {subtitle}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
