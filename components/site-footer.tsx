import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { BrandMark } from "@/components/brand-mark";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

const footerLinks = [
  {
    label: "Manifesto",
    href: "/#manifesto",
  },
  {
    label: "Metodo",
    href: "/il-metodo",
  },
  {
    label: "Ritratto",
    href: "/ritratto-dell-anima",
  },
  {
    label: "Soul Design",
    href: "/soul-design",
  },
  {
    label: "Meditazioni",
    href: "/meditazioni-guidate",
  },
] as const;

const footerContactLinks = [
  {
    label: "Telegram del metodo",
    href: siteConfig.telegram,
    icon: ArrowUpRight,
  },
  {
    label: "Contatti",
    href: "/contatti",
    icon: ArrowUpRight,
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#14110e]">
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'url("/images/backgrounds/sfondo-numeri.png")',
          backgroundSize: "1250px auto",
          backgroundPosition: "center top",
        }}
      />
      <div className="grain-overlay" />
      <Image
        src="/images/backgrounds/colline.webp"
        alt=""
        aria-hidden="true"
        width={1920}
        height={479}
        className="pointer-events-none absolute inset-x-0 bottom-0 w-full opacity-[0.08] saturate-[0.34] brightness-[0.42] contrast-[0.54] blur-[0.8px]"
      />
      <Container className="relative py-16 sm:py-20">
        <div className="gold-divider mb-10" />
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.7fr_0.7fr] lg:items-start">
          <div className="max-w-2xl">
            <BrandMark compact />
            <h2 className="mt-6 max-w-2xl font-display text-3xl leading-tight text-ivory sm:text-4xl">
              Il viaggio continua anche fuori da qui.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-ivory/78">
              Uno spazio dedicato a simboli, numeri, archetipi e orientamento
              contemporaneo. Un modo per restare in relazione con il metodo
              anche fuori dalla lettura.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Maison
            </p>
            <div className="mt-5 space-y-3">
              {footerLinks.map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="block text-sm font-medium text-ivory/72 transition hover:text-gold"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Presenza
            </p>
            <div className="mt-5 space-y-3.5">
              {footerContactLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group inline-flex items-center gap-2 text-sm font-medium text-ivory/72 transition hover:text-gold"
                >
                  <Icon size={15} className="transition group-hover:translate-x-0.5" />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-5 border-t border-gold/[0.06] pt-6 text-sm text-ivory/48 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Il Viaggio Emozionale · Alessandro Veneziani</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-end sm:gap-x-6 sm:gap-y-2">
            <Link href="/blog" className="transition hover:text-gold">
              Blog
            </Link>
            <a href={`mailto:${siteConfig.email}`} className="transition hover:text-gold">
              {siteConfig.email}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
