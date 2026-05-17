import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { NumberBackdrop } from "@/components/ui/number-backdrop";
import { homeHero } from "@/content/site-content";

export function HomeHero() {
  const [softLead = homeHero.softBridge, softAction = ""] = homeHero.softBridge.split("?");

  return (
    <section className="section-shell overflow-hidden pb-24 pt-12 sm:pb-28 sm:pt-16 lg:pb-36 lg:pt-20">
      <NumberBackdrop className="opacity-42" />
      <div className="grain-overlay" />
      <Container>
        <div className="grid items-center gap-[4.5rem] lg:grid-cols-[1fr_0.88fr] lg:gap-24">
          <Reveal className="relative z-10 max-w-3xl">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.34em] text-gold sm:text-sm">
              {homeHero.kicker}
            </p>
            <h1 className="whitespace-pre-line text-balance font-display text-[2.9rem] leading-[0.98] text-ivory sm:text-[3.6rem] lg:text-[4.9rem]">
              {homeHero.title}
            </h1>
            <div className="mt-8 max-w-xl rounded-[20px] border border-gold/[0.05] bg-ivory/[0.022] px-5 py-4.5 backdrop-blur-0 sm:border-gold/6 sm:backdrop-blur-[4px]">
              <p className="text-pretty text-[0.98rem] font-medium leading-7 text-ivory/88 sm:text-base">
                {homeHero.seoLine}
              </p>
            </div>
            <p className="mt-7 max-w-xl text-pretty text-base leading-[1.95] text-ivory/74 sm:text-[1.03rem]">
              {homeHero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium uppercase tracking-[0.22em] text-ivory/56">
              {homeHero.whatYouFind.map((item, index) => (
                <div key={item} className="inline-flex items-center gap-5">
                  <span>{item}</span>
                  {index < homeHero.whatYouFind.length - 1 ? (
                    <span className="h-1 w-1 rounded-full bg-gold/50" />
                  ) : null}
                </div>
              ))}
            </div>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href={homeHero.primaryCta.href} size="lg">
                {homeHero.primaryCta.label}
              </ButtonLink>
              <ButtonLink href={homeHero.secondaryCta.href} variant="secondary" size="lg">
                {homeHero.secondaryCta.label}
              </ButtonLink>
            </div>
            <p className="mt-8 max-w-xl text-sm leading-7 text-ivory/62">
              {softLead.trim()}?{" "}
              <a
                href="/contatti"
                className="text-ivory/84 underline decoration-gold/40 underline-offset-4 transition hover:text-gold"
              >
                {softAction.trim() || "Raccontami cosa stai vivendo."}
              </a>
            </p>
          </Reveal>

          <Reveal delay={0.15} className="relative">
            <div className="texture-paper relative isolate min-h-[500px] overflow-hidden rounded-[34px] border border-gold/[0.05] bg-gradient-to-br from-ivory/[0.032] via-ivory/[0.01] to-transparent shadow-[0_20px_42px_rgba(0,0,0,0.12)] sm:border-gold/6 sm:shadow-[0_24px_52px_rgba(0,0,0,0.14)] sm:min-h-[580px]">
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: 'url("/images/backgrounds/sfondo-numeri.png")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink/86 via-ink/34 to-transparent" />
              <div className="relative z-10 flex min-h-[520px] flex-col justify-end p-8 sm:min-h-[600px] sm:p-10">
                <div className="flex flex-col-reverse items-center gap-8 sm:flex-row sm:items-end sm:justify-between sm:gap-5">
                  <div className="max-w-[240px] text-left sm:max-w-[190px]">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                      Figura soglia
                    </p>
                    <p className="mt-4 text-sm leading-7 text-ivory/76">
                      Il Matto ritorna come figura di soglia: non promessa di
                      fuga, ma inizio di una lettura più chiara del presente.
                    </p>
                    <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-gold/86">
                      <span>Esplora il metodo</span>
                      <ArrowRight size={16} />
                    </div>
                    <div className="mt-5 space-y-2 border-t-0 pt-1 text-sm text-ivory/62 sm:border-t sm:border-gold/8 sm:pt-4">
                      <p>Numero, immagine, corpo.</p>
                      <p>Welcome Back Home.</p>
                    </div>
                  </div>

                  <div className="relative mx-auto w-[72%] max-w-[280px] sm:mr-[-1%] sm:ml-0 sm:w-[60%] sm:max-w-[410px]">
                    <Image
                      src="/images/brand/matto.png"
                      alt="Il Matto come figura simbolica ricorrente del metodo Il Viaggio Emozionale"
                      width={958}
                      height={1425}
                      priority
                      sizes="(max-width: 1024px) 70vw, 34vw"
                      className="h-auto w-full object-contain saturate-[0.72] brightness-[0.95] contrast-[0.9] opacity-[0.94] drop-shadow-[0_16px_24px_rgba(0,0,0,0.14)] sm:drop-shadow-[0_22px_38px_rgba(0,0,0,0.18)]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
