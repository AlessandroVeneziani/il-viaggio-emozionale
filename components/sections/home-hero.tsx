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
            <h1 className="editorial-title-depth whitespace-pre-line text-balance font-display text-[2.9rem] leading-[0.98] sm:text-[3.6rem] lg:text-[4.9rem]">
              {homeHero.title}
            </h1>
            <div className="mt-8 max-w-xl rounded-[20px] border border-gold/[0.045] bg-ivory/[0.032] px-5 py-4.5 backdrop-blur-0 sm:border-gold/[0.055] sm:bg-ivory/[0.038] sm:backdrop-blur-[4px]">
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
            <div className="texture-paper relative isolate min-h-[500px] overflow-hidden rounded-[34px] border border-gold/[0.045] bg-gradient-to-br from-ivory/[0.048] via-ivory/[0.02] to-transparent shadow-[0_18px_34px_rgba(54,42,31,0.08)] sm:border-gold/[0.055] sm:shadow-[0_24px_48px_rgba(54,42,31,0.1)] sm:min-h-[580px]">
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: 'url("/images/backgrounds/sfondo-numeri.png")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[rgba(74,63,52,0.44)] via-[rgba(74,63,52,0.12)] to-transparent sm:from-[rgba(54,46,38,0.56)] sm:via-[rgba(54,46,38,0.16)]" />
              <div className="relative z-10 flex min-h-[520px] flex-col justify-end p-8 sm:min-h-[600px] sm:p-10">
                <div className="flex flex-col-reverse items-center gap-10 sm:flex-row sm:items-end sm:justify-between sm:gap-5">
                  <div className="max-w-[260px] text-center sm:max-w-[190px] sm:text-left">
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
                    <div className="mt-5 space-y-2 pt-1 text-sm text-ivory/62 xl:border-t xl:border-gold/[0.08] xl:pt-4">
                      <p>Numero, immagine, corpo.</p>
                      <p>Welcome Back Home.</p>
                    </div>
                  </div>

                  <div className="relative mx-auto w-[66%] max-w-[248px] sm:mr-[-1%] sm:ml-0 sm:w-[60%] sm:max-w-[410px]">
                    <Image
                      src="/images/brand/matto.png"
                      alt="Il Matto come figura simbolica ricorrente del metodo Il Viaggio Emozionale"
                      width={958}
                      height={1425}
                      priority
                      sizes="(max-width: 1024px) 70vw, 34vw"
                      className="h-auto w-full object-contain saturate-[0.74] brightness-[0.96] contrast-[0.91] opacity-[0.95] drop-shadow-[0_16px_26px_rgba(64,50,37,0.14)] sm:drop-shadow-[0_22px_38px_rgba(54,42,31,0.18)]"
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
