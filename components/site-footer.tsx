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
    <footer className="relative overflow-hidden bg-[#191510] lg:bg-[linear-gradient(180deg,rgba(15,13,11,0.02)_0%,rgba(20,17,15,0.16)_12%,rgba(21,18,16,0.46)_30%,rgba(18,15,13,0.82)_58%,rgba(15,13,11,0.965)_100%)]">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-4.5rem] right-[-1rem] hidden font-display text-[15rem] leading-none text-gold/[0.028] blur-[1.4px] lg:block xl:text-[18rem]"
      >
        0
      </span>
      <div className="pointer-events-none absolute inset-x-0 top-0 hidden h-56 lg:block lg:bg-[linear-gradient(180deg,rgba(98,86,70,0.1)_0%,rgba(56,47,39,0.08)_24%,rgba(24,20,17,0.035)_54%,transparent_100%)]" />
      <div className="pointer-events-none absolute inset-0 hidden lg:block lg:bg-[linear-gradient(180deg,rgba(17,15,13,0)_0%,rgba(17,15,13,0.035)_26%,rgba(17,15,13,0.11)_66%,rgba(15,13,11,0.18)_100%)]" />
      <div
        className="absolute inset-0 opacity-[0.05] lg:opacity-[0.072]"
        style={{
          backgroundImage: 'url("/images/backgrounds/sfondo-numeri-seamless.png")',
          backgroundSize: "1380px auto",
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
        className="pointer-events-none absolute inset-x-0 bottom-0 w-full opacity-[0.08] saturate-[0.34] brightness-[0.42] contrast-[0.54] blur-[0.8px] lg:opacity-[0.1] lg:saturate-[0.34] lg:brightness-[0.38] lg:contrast-[0.62]"
      />
      <Container className="relative py-16 sm:py-20 lg:py-24">
        <div className="gold-divider mb-10 opacity-55 lg:mb-12 lg:opacity-[0.16]" />
        <div className="grid gap-10 lg:grid-cols-[1.24fr_0.68fr_0.72fr] lg:items-start lg:gap-12">
          <div className="max-w-2xl">
            <BrandMark compact className="lg:scale-[1.04] lg:origin-left" />
            <h2 className="mt-6 max-w-2xl font-display text-3xl leading-tight text-ivory sm:text-4xl lg:mt-7 lg:text-[2.85rem]">
              Il viaggio continua anche fuori da qui.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-ivory/78 lg:mt-5 lg:text-[1.02rem] lg:leading-8">
              Uno spazio dedicato a simboli, numeri, archetipi e orientamento
              contemporaneo. Un modo per restare in relazione con il metodo
              anche fuori dalla lettura.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Maison
            </p>
            <div className="mt-5 space-y-3 lg:mt-6 lg:space-y-3.5">
              {footerLinks.map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="block text-sm font-medium text-ivory/72 transition hover:text-gold lg:text-[0.96rem]"
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
            <div className="mt-5 space-y-3.5 lg:mt-6 lg:space-y-4">
              {footerContactLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group inline-flex items-center gap-2 text-sm font-medium text-ivory/72 transition hover:text-gold lg:text-[0.96rem]"
                >
                  <Icon size={15} className="transition group-hover:translate-x-0.5" />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-5 border-t-0 pt-6 text-sm text-ivory/54 sm:flex-row sm:items-center sm:justify-between xl:mt-16 xl:border-t xl:border-gold/[0.06] xl:pt-8">
          <p>© 2026 Il Viaggio Emozionale · Alessandro Veneziani</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end sm:gap-x-4 sm:gap-y-2 lg:gap-x-7 lg:gap-y-3">
            <Link href="/blog" className="transition hover:text-gold">
              Blog
            </Link>
            <span className="hidden text-gold/28 sm:inline-block">•</span>
            <a href={`mailto:${siteConfig.email}`} className="transition hover:text-gold">
              {siteConfig.email}
            </a>
            <span className="hidden text-gold/28 sm:inline-block">•</span>
            <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="transition hover:text-gold">
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
