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
      <NumberBackdrop className="opacity-60" />
      <div className="grain-overlay" />
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.96fr] lg:gap-20">
          <Reveal className="relative z-10 max-w-3xl">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.34em] text-gold sm:text-sm">
              {homeHero.kicker}
            </p>
            <h1 className="text-balance font-display text-[3rem] leading-[1.01] text-ivory sm:text-[3.75rem] lg:text-[5.15rem]">
              {homeHero.title}
            </h1>
            <div className="mt-7 max-w-2xl rounded-[22px] border border-gold/8 bg-ivory/[0.03] px-6 py-4.5 backdrop-blur-[1px]">
              <p className="text-pretty text-base font-medium leading-7 text-ivory/92 sm:text-[1.02rem]">
                {homeHero.seoLine}
              </p>
            </div>
            <p className="mt-7 max-w-2xl text-pretty text-[1.02rem] leading-[1.95] text-ivory/80 sm:text-[1.06rem]">
              {homeHero.subtitle}
            </p>
            <div className="mt-9 rounded-[22px] border border-gold/8 bg-ivory/[0.025] p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                Cosa troverai qui
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {homeHero.whatYouFind.map((item) => (
                  <div
                    key={item}
                    className="rounded-[18px] border border-gold/6 bg-ivory/[0.015] px-4 py-4 text-sm font-semibold text-ivory/84"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href={homeHero.primaryCta.href} size="lg">
                {homeHero.primaryCta.label}
              </ButtonLink>
              <ButtonLink href={homeHero.secondaryCta.href} variant="secondary" size="lg">
                {homeHero.secondaryCta.label}
              </ButtonLink>
            </div>
            <div className="mt-4">
              <ButtonLink href="/il-metodo" variant="ghost" size="sm">
                Scopri il metodo
              </ButtonLink>
            </div>
            <p className="mt-9 max-w-xl text-sm leading-7 text-ivory/62">
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
            <div className="texture-paper relative isolate min-h-[500px] overflow-hidden rounded-[34px] border border-gold/8 bg-gradient-to-br from-ivory/[0.05] via-ivory/[0.012] to-transparent shadow-[0_28px_58px_rgba(0,0,0,0.18)] sm:min-h-[600px]">
              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage: 'url("/images/backgrounds/sfondo-numeri.png")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-ink via-ink/56 to-transparent" />
              <Image
                src="/images/brand/logo-originale.webp"
                alt=""
                aria-hidden="true"
                width={1536}
                height={1024}
                className="pointer-events-none absolute right-[-14%] top-[-2%] w-[88%] max-w-[680px] opacity-[0.05] mix-blend-screen"
              />
              <Image
                src="/images/backgrounds/colline.webp"
                alt=""
                aria-hidden="true"
                width={1920}
                height={479}
                className="pointer-events-none absolute bottom-0 left-0 w-full opacity-[0.5] saturate-[0.8] brightness-[0.86]"
              />
              <div className="relative z-10 flex min-h-[520px] flex-col justify-end p-8 sm:min-h-[620px] sm:p-10">
                <div className="flex items-end justify-between gap-5">
                  <div className="max-w-[235px]">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                      Studio evolutivo
                    </p>
                    <p className="mt-4 text-sm leading-7 text-ivory/78">
                      Numerologia evolutiva, tarocchi archetipici e Soul Design
                      diventano un metodo per leggere il presente e ritrovare
                      una direzione più chiara.
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-gold">
                      <span>Metodo proprietario</span>
                      <ArrowRight size={16} />
                    </div>
                    <div className="mt-5 border-t border-gold/8 pt-4 space-y-2 text-sm text-ivory/68">
                      <p>Numeri per leggere la struttura.</p>
                      <p>Tarocchi per dare forma al presente.</p>
                      <p>Simbolo per riconoscere il significato.</p>
                      <p>Decisione per trasformare la chiarezza in scelta.</p>
                    </div>
                  </div>

                  <div className="relative mr-[-6%] w-[64%] max-w-[480px]">
                    <Image
                      src="/images/brand/bagatto.webp"
                      alt="Bagatto simbolico del brand Il Viaggio Emozionale"
                      width={1043}
                      height={1298}
                      priority
                      sizes="(max-width: 1024px) 70vw, 34vw"
                      className="h-auto w-full object-contain saturate-[0.86] brightness-[0.98] contrast-[0.94] drop-shadow-[0_24px_42px_rgba(0,0,0,0.28)]"
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
