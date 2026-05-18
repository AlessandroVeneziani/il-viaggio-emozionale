import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "editorial-title-haze max-w-3xl",
        centered ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-gold sm:text-sm lg:mb-6">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="editorial-title-depth font-display text-[2.4rem] leading-[1.08] sm:text-[2.9rem] lg:text-[3.55rem] lg:leading-[1.04]">
        {title}
      </h2>
      {description ? (
        <p className="mt-7 max-w-[62ch] text-pretty text-base leading-[1.98] text-ivory/86 sm:text-[1.04rem] lg:mt-8 lg:text-[1.065rem] lg:leading-[2.02]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
