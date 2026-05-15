import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MessageCircle, Phone, Play } from "lucide-react";

import { BrandMark } from "@/components/brand-mark";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

const footerLinks = [
  {
    label: "TikTok",
    href: siteConfig.socials.tiktok,
    icon: Play,
  },
  {
    label: "YouTube",
    href: siteConfig.socials.youtube,
    icon: ArrowUpRight,
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    label: "WhatsApp",
    href: siteConfig.whatsapp,
    icon: MessageCircle,
  },
  {
    label: "Telefono",
    href: `tel:${siteConfig.phone.replace(/\s+/g, "")}`,
    icon: Phone,
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-gold/15 bg-[#0B0B0B]">
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
        className="pointer-events-none absolute inset-x-0 bottom-0 w-full opacity-[0.11] saturate-[0.5] brightness-[0.55] contrast-[0.66] blur-[0.4px]"
      />
      <Container className="relative py-16 sm:py-20">
        <div className="gold-divider mb-10" />
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-2xl">
            <BrandMark compact />
            <h2 className="mt-6 max-w-2xl font-display text-3xl leading-tight text-ivory sm:text-4xl">
              Il viaggio continua anche fuori da qui.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-ivory/78">
              Uno spazio dedicato a simboli, numeri, archetipi e trasformazione
              interiore. Contatti rapidi per continuare il percorso con più
              chiarezza.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:max-w-[440px] lg:justify-end">
            {footerLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group inline-flex items-center gap-2 rounded-full border border-gold/12 bg-ivory/[0.025] px-4 py-3 text-sm font-semibold text-ivory/76 transition hover:border-gold/22 hover:bg-ivory/[0.045] hover:text-gold"
              >
                <Icon size={15} className="transition group-hover:translate-x-0.5" />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-3 border-t border-gold/15 pt-5 text-sm text-ivory/48 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Il Viaggio Emozionale · Alessandro Veneziani</p>
          <div className="flex flex-wrap gap-4 sm:justify-end">
            <Link href="/blog" className="transition hover:text-gold">
              Blog
            </Link>
            <a href={`mailto:${siteConfig.email}`} className="transition hover:text-gold">
              {siteConfig.email}
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
              className="transition hover:text-gold"
            >
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
