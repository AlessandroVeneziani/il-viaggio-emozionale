import { cn } from "@/lib/utils";

type WelcomeBackHomeProps = {
  variant?: "compact" | "statement";
  align?: "left" | "center" | "right";
  className?: string;
};

const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export function WelcomeBackHome({
  variant = "compact",
  align = "left",
  className,
}: WelcomeBackHomeProps) {
  if (variant === "statement") {
    return (
      <p
        className={cn(
          "font-medium uppercase leading-relaxed tracking-[0.38em] text-[#C6A75E] [text-shadow:0_1px_12px_rgba(198,167,94,0.12)]",
          "text-[0.78rem] sm:text-[0.9rem]",
          alignClasses[align],
          className,
        )}
      >
        <span>WELCOME BACK </span>
        <span className="sm:block">HOME</span>
      </p>
    );
  }

  return (
    <p
      className={cn(
        "font-medium uppercase leading-relaxed tracking-[0.34em] text-[#C6A75E] [text-shadow:0_1px_10px_rgba(198,167,94,0.1)]",
        "text-[0.72rem] sm:text-[0.78rem]",
        alignClasses[align],
        className,
      )}
    >
      WELCOME BACK HOME
    </p>
  );
}
