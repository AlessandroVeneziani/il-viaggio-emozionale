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
    <section className="section-shell overflow-hidden pb-24 pt-8 sm:pb-28 sm:pt-12 lg:pb-36 lg:pt-16">
      <NumberBackdrop className="opacity-42" />
      <div className="grain-overlay" />
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.88fr] lg:gap-24">
          <Reveal className="relative z-10 max-w-3xl">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.34em] text-gold sm:text-sm">
              {homeHero.kicker}
            </p>
            <h1 className="whitespace-pre-line text-balance font-display text-[2.9rem] leading-[0.98] text-ivory sm:text-[3.6rem] lg:text-[4.9rem]">
              {homeHero.title}
            </h1>
            <div className="mt-7 max-w-xl rounded-[18px] border border-gold/7 bg-ivory/[0.02] px-5 py-4 backdrop-blur-[1px]">
              <p className="text-pretty text-[0.98rem] font-medium leading-7 text-ivory/88 sm:text-base">
                {homeHero.seoLine}
              </p>
            </div>
            <p className="mt-6 max-w-xl text-pretty text-base leading-[1.9] text-ivory/74 sm:text-[1.03rem]">
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
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
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
            <div className="texture-paper relative isolate min-h-[500px] overflow-hidden rounded-[34px] border border-gold/7 bg-gradient-to-br from-ivory/[0.03] via-ivory/[0.008] to-transparent shadow-[0_24px_52px_rgba(0,0,0,0.15)] sm:min-h-[580px]">
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: 'url("/images/backgrounds/sfondo-numeri.png")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink via-ink/52 to-transparent" />
              <Image
                src="/images/brand/logo-originale.webp"
                alt=""
                aria-hidden="true"
                width={1536}
                height={1024}
                className="pointer-events-none absolute right-[-14%] top-[-2%] w-[88%] max-w-[680px] opacity-[0.035] mix-blend-screen"
              />
              <Image
                src="/images/backgrounds/colline.webp"
                alt=""
                aria-hidden="true"
                width={1920}
                height={479}
                className="pointer-events-none absolute bottom-0 left-0 w-full opacity-[0.42] saturate-[0.72] brightness-[0.8]"
              />
              <div className="relative z-10 flex min-h-[520px] flex-col justify-end p-8 sm:min-h-[600px] sm:p-10">
                <div className="flex items-end justify-between gap-5">
                  <div className="max-w-[190px]">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                      Studio simbolico
                    </p>
                    <p className="mt-4 text-sm leading-7 text-ivory/76">
                      Un linguaggio contemporaneo per leggere il presente con
                      più struttura, orientamento e verità.
                    </p>
                    <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-gold/86">
                      <span>Esplora il metodo</span>
                      <ArrowRight size={16} />
                    </div>
                    <div className="mt-5 border-t border-gold/8 pt-4 space-y-2 text-sm text-ivory/62">
                      <p>Numero, immagine, corpo.</p>
                      <p>Welcome Back Home.</p>
                    </div>
                  </div>

                  <div className="relative mr-[-4%] w-[62%] max-w-[440px]">
                    <Image
                      src="/images/brand/bagatto.webp"
                      alt="Bagatto simbolico del brand Il Viaggio Emozionale"
                      width={1043}
                      height={1298}
                      priority
                      sizes="(max-width: 1024px) 70vw, 34vw"
                      className="h-auto w-full object-contain saturate-[0.78] brightness-[0.95] contrast-[0.92] drop-shadow-[0_22px_40px_rgba(0,0,0,0.24)]"
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
