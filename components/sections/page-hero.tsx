import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { NumberBackdrop } from "@/components/ui/number-backdrop";

type PageHeroProps = {
  eyebrow?: string;
  kicker?: string;
  title: string;
  displayTitle?: string;
  subtitle: string;
  accentNumber?: string;
};

export function PageHero({
  eyebrow,
  kicker,
  title,
  displayTitle,
  subtitle,
}: PageHeroProps) {
  const label = eyebrow ?? kicker ?? "";
  const renderedTitle = displayTitle ?? title;

  return (
    <section className="section-shell overflow-hidden pb-20 pt-8 sm:pb-24 sm:pt-10 lg:pb-28">
      <NumberBackdrop className="opacity-58" />
      <Container>
        <Reveal className="editorial-title-haze max-w-4xl">
          {label ? (
            <p className="editorial-label mb-6 lg:mb-7">
              {label}
            </p>
          ) : null}
          <h1 className="editorial-title-depth max-w-[13ch] text-pretty whitespace-pre-line font-display text-[2.95rem] leading-[1.08] sm:text-[4.1rem] lg:text-[5.3rem]">
            {renderedTitle}
          </h1>
          <p className="mt-8 max-w-[58ch] text-pretty text-lg leading-[1.96] text-ivory/82 sm:text-[1.08rem] lg:mt-9 lg:text-[1.12rem] lg:leading-[2.02]">
            {subtitle}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
