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
        "max-w-3xl",
        centered ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-gold sm:text-sm">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="editorial-title-depth font-display text-[2.4rem] leading-[1.08] sm:text-[2.9rem] lg:text-[3.4rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-7 max-w-[62ch] text-pretty text-base leading-[1.95] text-ivory/82 sm:text-[1.04rem]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
