import { ArrowUpRight, Mail, MessageCircle, Clock3 } from "lucide-react";

import { Container } from "@/components/ui/container";
import { GenericFinalCta } from "@/components/sections/generic-final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { SurfaceCard } from "@/components/ui/surface-card";
import { contactPage, contactReasons } from "@/content/site-content";
import { buildMetadata } from "@/lib/metadata";

const icons = {
  Email: Mail,
  WhatsApp: MessageCircle,
  Disponibilità: Clock3,
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
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="border-t border-gold/10 pt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Studio privato
              </p>
              <h2 className="mt-5 max-w-[12ch] font-display text-[2.5rem] leading-[1.08] text-ivory sm:text-[3.2rem]">
                Un contatto diretto, semplice e riservato.
              </h2>
              <p className="mt-6 max-w-[36ch] text-lg leading-[1.9] text-ivory/80">
                {contactPage.intro}
              </p>
              <div className="mt-8 space-y-4">
                {contactReasons.map((reason) => (
                  <div key={reason} className="flex gap-3 text-base leading-8 text-ivory/76">
                    <span className="mt-3 h-2 w-2 rounded-full bg-gold" />
                    <span>{reason}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 max-w-[34ch] text-sm leading-7 text-ivory/60">
                Se non sai da quale percorso partire, puoi scrivermi liberamente.
                Il primo obiettivo non è venderti qualcosa, ma capire cosa stai
                vivendo e quale linguaggio può aiutarti di più.
              </p>
            </div>

            <SurfaceCard className="p-8 sm:p-10 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Contatti
              </p>
              <div className="mt-8 space-y-7">
              {contactPage.methods.map((method) => {
                const Icon = icons[method.label as keyof typeof icons];

                return (
                  <div key={method.label} className="border-t border-gold/10 pt-6">
                    <div className="inline-flex rounded-full border border-gold/20 bg-gold/10 p-3 text-gold">
                      <Icon size={18} />
                    </div>
                    <p className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                      {method.label}
                    </p>
                    <p className="mt-4 max-w-[30ch] text-lg leading-[1.8] text-ivory/80 break-words">
                      {method.value}
                    </p>
                    <a
                      href={method.href}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ivory transition hover:text-gold"
                      {...(method.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {method.label === "Disponibilità" ? "Richiedi disponibilità" : "Apri contatto"}
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                );
              })}
              </div>
            </SurfaceCard>
          </div>
        </Container>
      </section>

      <GenericFinalCta
        title="A volte il primo passo non è scegliere subito. È scrivere con sincerità."
        body="Se vuoi raccontarmi cosa stai attraversando, possiamo capire insieme da quale porta entrare."
        primary={{
          label: "Scrivi via email",
          href: "mailto:info@alessandroveneziani.it",
        }}
      />
    </main>
  );
}
