import { cn } from "@/lib/utils";

const symbols = [
  { value: "7", className: "left-[6%] top-10 text-[18vw] sm:text-[12vw]" },
  { value: "3", className: "right-[8%] top-[14%] text-[14vw] sm:text-[10vw]" },
  { value: "9", className: "left-[18%] top-[42%] text-[11vw] sm:text-[8vw]" },
  { value: "0", className: "right-[16%] bottom-[12%] text-[16vw] sm:text-[11vw]" },
  { value: "4", className: "left-[52%] bottom-[6%] text-[10vw] sm:text-[7vw]" },
] as const;

type NumberBackdropProps = {
  className?: string;
  tint?: "gold" | "ivory";
};

export function NumberBackdrop({
  className,
  tint = "gold",
}: NumberBackdropProps) {
  const tintClass =
    tint === "gold" ? "text-gold/[0.05]" : "text-ivory/[0.045]";

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {symbols.map((symbol) => (
        <span
          key={`${symbol.value}-${symbol.className}`}
          className={cn(
            "absolute select-none font-display leading-none blur-[0.2px]",
            tintClass,
            symbol.className,
          )}
        >
          {symbol.value}
        </span>
      ))}
    </div>
  );
}
