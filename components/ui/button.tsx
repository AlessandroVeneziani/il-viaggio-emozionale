import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "default" | "lg" | "sm";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gold text-ink shadow-[0_12px_28px_rgba(198,167,94,0.18)] hover:bg-[#d0b168] hover:shadow-[0_16px_30px_rgba(198,167,94,0.2)] focus-visible:outline-gold lg:shadow-[0_16px_32px_rgba(198,167,94,0.2)] lg:hover:bg-[#d3b46a] lg:hover:shadow-[0_20px_38px_rgba(198,167,94,0.24)]",
  secondary:
    "border border-gold/24 bg-ivory/[0.035] text-ivory/90 hover:border-gold/36 hover:bg-gold/[0.08] focus-visible:outline-gold lg:border-[rgba(244,234,218,0.48)] lg:bg-[linear-gradient(180deg,rgba(244,241,234,0.06),rgba(244,241,234,0.024))] lg:text-[rgba(247,241,232,0.92)] lg:shadow-[0_12px_26px_rgba(43,35,28,0.08),inset_0_1px_0_rgba(255,248,238,0.04)] lg:hover:border-gold/34 lg:hover:bg-[linear-gradient(180deg,rgba(198,167,94,0.12),rgba(244,241,234,0.038))] lg:hover:text-[rgba(249,244,237,0.98)] lg:hover:shadow-[0_16px_30px_rgba(43,35,28,0.1),inset_0_1px_0_rgba(255,248,238,0.06)]",
  ghost:
    "bg-transparent text-ivory/76 hover:bg-white/[0.035] hover:text-ivory focus-visible:outline-gold lg:text-ivory/82 lg:hover:bg-[rgba(244,241,234,0.045)] lg:hover:text-[rgba(248,242,233,0.95)]",
};

const sizeClasses: Record<Size, string> = {
  default: "px-5.5 py-3 text-sm",
  lg: "px-6 py-3.5 text-sm sm:px-7 sm:text-[0.98rem]",
  sm: "px-4 py-2 text-xs sm:text-sm",
};

type SharedProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

export function buttonClasses({
  variant = "primary",
  size = "default",
  className,
}: Omit<SharedProps, "children">) {
  return cn(
    "inline-flex items-center justify-center rounded-full font-semibold tracking-[0.015em] transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 lg:tracking-[0.02em]",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );
}

type ButtonLinkProps = SharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> & {
    href: string;
  };

export function ButtonLink({
  href,
  variant,
  size,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  const external = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

  const classes = buttonClasses({ variant, size, className });

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}

type ButtonProps = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export function Button({
  variant,
  size,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={buttonClasses({ variant, size, className })} {...props}>
      {children}
    </button>
  );
}
