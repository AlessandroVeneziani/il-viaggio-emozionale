import Link from "next/link";

import { MattoEssenzialeMark } from "@/components/matto-essenziale-mark";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  compact?: boolean;
};

export function BrandMark({ className, compact = false }: BrandMarkProps) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-3 text-left", className)}
      aria-label="Vai alla home di Il Viaggio Emozionale"
    >
      <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-gold/35 bg-ivory/[0.035] text-gold">
        <MattoEssenzialeMark className="h-[2rem] w-[2rem] transition-transform duration-300 group-hover:scale-[1.03]" />
      </div>
      <div className={cn("leading-none", compact ? "hidden sm:block" : "block")}>
        <div className="font-display text-lg text-ivory transition group-hover:text-gold sm:text-xl">
          Il Viaggio
        </div>
        <div className="mt-1 text-[0.64rem] uppercase tracking-[0.24em] text-ivory/50">
          Emozionale
        </div>
      </div>
    </Link>
  );
}
