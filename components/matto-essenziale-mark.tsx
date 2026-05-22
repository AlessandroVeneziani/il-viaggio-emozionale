import { cn } from "@/lib/utils";

type MattoEssenzialeMarkProps = {
  className?: string;
};

export function MattoEssenzialeMark({ className }: MattoEssenzialeMarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className={cn("h-5 w-5", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 40.5L48.5 31.5" />
        <path d="M20.5 23.5C16.5 19.8 15.8 14 18.2 10C23 11.6 26.6 15 27.8 20" />
        <path d="M29.5 20.5C30.2 14.2 35.2 9.5 42.5 10C42.7 15.2 40.5 19.7 35.2 22.6" />
        <path d="M29.5 23C33.2 20.8 38 21.7 40.8 25.1C42.8 27.6 43.1 30.6 41.6 33.1C43 35.8 42 39.1 39.4 41.1C35.9 43.8 30.8 43.4 27.7 40C24.6 36.7 24.4 31.6 27 27.7" />
        <path d="M26.5 38.7C27.6 39.5 29 40 30.4 40.2" />
        <path d="M39.6 33.1C37.7 33.4 36 32.8 34.3 31.6" />
      </g>
      <circle cx="18.3" cy="39.6" r="3.1" fill="currentColor" />
      <circle cx="31.8" cy="14.3" r="2.6" fill="currentColor" />
    </svg>
  );
}
