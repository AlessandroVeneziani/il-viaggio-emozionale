import Image from "next/image";

import { cn } from "@/lib/utils";

type MattoEssenzialeMarkProps = {
  className?: string;
};

export function MattoEssenzialeMark({ className }: MattoEssenzialeMarkProps) {
  return (
    <div className={cn("relative h-5 w-5", className)}>
      <Image
        src="/images/brand/matto-essential-symbol.png"
        alt=""
        fill
        sizes="20px"
        className="object-contain"
      />
    </div>
  );
}
