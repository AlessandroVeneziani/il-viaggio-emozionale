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
        "texture-paper rounded-[30px] border border-gold/[0.05] bg-[linear-gradient(180deg,rgba(244,241,234,0.058),rgba(244,241,234,0.028))] shadow-[0_20px_42px_rgba(0,0,0,0.11)] backdrop-blur-0 sm:border-gold/[0.065] sm:shadow-[0_26px_56px_rgba(0,0,0,0.13)] sm:backdrop-blur-[3px]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
