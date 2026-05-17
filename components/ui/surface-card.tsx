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
        "texture-paper rounded-[30px] border border-gold/[0.045] bg-[linear-gradient(180deg,rgba(244,241,234,0.046),rgba(244,241,234,0.018))] shadow-[0_22px_48px_rgba(0,0,0,0.12)] backdrop-blur-0 sm:border-gold/6 sm:shadow-[0_26px_56px_rgba(0,0,0,0.15)] sm:backdrop-blur-[2px]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
