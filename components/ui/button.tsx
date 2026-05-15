import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "default" | "lg" | "sm";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gold text-ink shadow-[0_12px_28px_rgba(198,167,94,0.18)] hover:bg-[#d0b168] hover:shadow-[0_16px_30px_rgba(198,167,94,0.2)] focus-visible:outline-gold",
  secondary:
    "border border-gold/24 bg-ivory/[0.035] text-ivory/90 hover:border-gold/36 hover:bg-gold/[0.08] focus-visible:outline-gold",
  ghost:
    "bg-transparent text-ivory/76 hover:bg-white/[0.035] hover:text-ivory focus-visible:outline-gold",
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
    "inline-flex items-center justify-center rounded-full font-semibold tracking-[0.015em] transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
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
