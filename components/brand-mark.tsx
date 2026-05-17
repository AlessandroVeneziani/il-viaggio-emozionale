import Link from "next/link";

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
      <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-gold/35 bg-ivory/[0.05] text-gold">
        <span className="font-display text-lg font-semibold">IV</span>
        <span className="absolute -bottom-1 hidden h-px w-4 bg-gold/60 sm:block" />
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
