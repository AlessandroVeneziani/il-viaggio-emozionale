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
        "texture-paper rounded-[30px] border border-gold/[0.05] bg-[linear-gradient(180deg,rgba(241,233,220,0.078),rgba(214,199,178,0.038))] shadow-[0_18px_36px_rgba(43,35,28,0.11)] backdrop-blur-0 sm:border-gold/[0.06] sm:shadow-[0_24px_52px_rgba(43,35,28,0.13)] sm:backdrop-blur-[5px]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
