import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { GenericFinalCta } from "@/components/sections/generic-final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { contactPage, contactReasons } from "@/content/site-content";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: contactPage.hero.title,
  description: contactPage.hero.subtitle,
  path: "/contatti",
});

export default function ContactPage() {
  return (
    <main>
      <PageHero {...contactPage.hero} accentNumber="6" />

      <section className="section-shell py-18 sm:py-22">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="border-t border-gold/8 pt-8">
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
                Il primo obiettivo non è proporti qualcosa in fretta, ma capire
                cosa stai vivendo e quale accesso può essere più giusto per te.
              </p>
            </div>

            <div className="texture-paper rounded-[30px] border border-gold/6 bg-[linear-gradient(180deg,rgba(244,241,234,0.05),rgba(244,241,234,0.016))] p-8 sm:p-10 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Contatto riservato
              </p>
              <p className="mt-5 max-w-[30ch] font-display text-[2rem] leading-[1.12] text-ivory sm:text-[2.5rem]">
                Se senti che è il momento di dare un nome a ciò che stai vivendo, puoi scrivermi.
              </p>
              <div className="mt-10 grid gap-8 sm:grid-cols-2 sm:gap-x-10">
              {contactPage.methods.map((method) => {
                const valueClassName =
                  method.label === "Email"
                    ? "mt-4 max-w-[34ch] break-words text-base leading-[1.9] text-ivory/80 sm:text-lg"
                    : method.label === "WhatsApp"
                      ? "mt-4 text-base leading-[1.9] text-ivory/80 sm:text-lg sm:whitespace-nowrap"
                      : "mt-4 max-w-[34ch] text-base leading-[1.9] text-ivory/80 sm:text-lg";

                return (
                  <div key={method.label} className="border-t border-gold/10 pt-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                      {method.label}
                    </p>
                    <p className={valueClassName}>
                      {method.value}
                    </p>
                    <a
                      href={method.href}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ivory transition hover:text-gold"
                      {...(method.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {method.label === "Disponibilità"
                        ? "Richiedi disponibilità"
                        : method.label === "Telegram"
                          ? "Apri Telegram"
                          : "Apri contatto"}
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                );
              })}
              </div>
            </div>
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
