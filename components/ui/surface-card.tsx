import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type SurfaceCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function SurfaceCard({
  className,
  children,
  ...props
}: SurfaceCardProps) {
  return (
    <div
      className={cn(
        "texture-paper rounded-[30px] border border-gold/[0.055] bg-[linear-gradient(180deg,rgba(244,241,234,0.082),rgba(244,241,234,0.038))] shadow-[0_18px_36px_rgba(54,42,31,0.1)] backdrop-blur-0 sm:border-gold/[0.065] sm:shadow-[0_24px_52px_rgba(54,42,31,0.12)] sm:backdrop-blur-[4px]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
