import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";

import { Container } from "@/components/ui/container";
import { GenericFinalCta } from "@/components/sections/generic-final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { SurfaceCard } from "@/components/ui/surface-card";
import { contactPage, contactReasons } from "@/content/site-content";
import { buildMetadata } from "@/lib/metadata";

const icons = {
  Email: Mail,
  WhatsApp: MessageCircle,
  Telefono: Phone,
} as const;

export const metadata = buildMetadata({
  title: contactPage.hero.title,
  description: contactPage.hero.subtitle,
  path: "/contatti",
});

export default function ContactPage() {
  return (
    <main>
      <PageHero {...contactPage.hero} accentNumber="6" />

      <section className="section-shell py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <SurfaceCard className="p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Quando scrivermi
              </p>
              <p className="mt-6 text-lg leading-8 text-ivory/80">{contactPage.intro}</p>
              <div className="mt-8 space-y-4">
                {contactReasons.map((reason) => (
                  <div key={reason} className="flex gap-3 text-base leading-8 text-ivory/76">
                    <span className="mt-3 h-2 w-2 rounded-full bg-gold" />
                    <span>{reason}</span>
                  </div>
                ))}
              </div>
            </SurfaceCard>

            <div className="grid gap-5 sm:grid-cols-3">
              {contactPage.methods.map((method) => {
                const Icon = icons[method.label as keyof typeof icons];

                return (
                  <SurfaceCard key={method.label} className="flex h-full flex-col p-8">
                    <div className="inline-flex rounded-full border border-gold/20 bg-gold/10 p-3 text-gold">
                      <Icon size={18} />
                    </div>
                    <p className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                      {method.label}
                    </p>
                    <p className="mt-4 flex-1 text-lg leading-8 text-ivory/80">
                      {method.value}
                    </p>
                    <a
                      href={method.href}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ivory transition hover:text-gold"
                      {...(method.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      Contatta
                      <ArrowUpRight size={16} />
                    </a>
                  </SurfaceCard>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <GenericFinalCta
        title="Ogni percorso inizia con una domanda onesta."
        body="Se vuoi raccontarmi cosa stai attraversando, possiamo capire insieme da quale porta entrare."
        primary={{
          label: "Scrivi via email",
          href: "mailto:info@alessandroveneziani.it",
        }}
      />
    </main>
  );
}
