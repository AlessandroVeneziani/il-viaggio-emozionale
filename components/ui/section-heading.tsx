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
        <p className="editorial-label mb-6 lg:mb-7">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "editorial-title-depth text-pretty whitespace-pre-line font-display text-[2.4rem] leading-[1.1] sm:text-[2.9rem] lg:text-[3.55rem] lg:leading-[1.06]",
          centered ? "mx-auto max-w-[18ch]" : "max-w-[19ch]",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-8 text-pretty text-base leading-[2] text-ivory/86 sm:text-[1.04rem] lg:mt-9 lg:text-[1.065rem] lg:leading-[2.06]",
            centered ? "mx-auto max-w-[56ch]" : "max-w-[58ch]",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
