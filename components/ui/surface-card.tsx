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
        "texture-paper rounded-[30px] border border-gold/8 bg-[linear-gradient(180deg,rgba(244,241,234,0.05),rgba(244,241,234,0.018))] shadow-[0_28px_60px_rgba(0,0,0,0.16)] backdrop-blur-[1px]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
