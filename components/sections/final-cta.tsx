import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SurfaceCard } from "@/components/ui/surface-card";
import { finalCta } from "@/content/site-content";
import { siteConfig } from "@/lib/site";

export function FinalCtaSection() {
  const secondary = (finalCta as { secondary?: { href: string; label: string } }).secondary;

  return (
    <section className="section-shell pb-28 pt-20 sm:pb-36 sm:pt-24">
      <Container>
        <Reveal>
          <SurfaceCard className="mx-auto max-w-4xl p-8 text-center sm:p-12 lg:p-14">
            <div className="gold-divider mb-10" />
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-gold">
              Welcome Back Home
            </p>
            <h2 className="editorial-title-depth mx-auto mt-5 max-w-3xl text-balance font-display text-[2.75rem] leading-[1.06] sm:text-[3.7rem]">
              {finalCta.title}
            </h2>
            <p className="mx-auto mt-7 max-w-[46ch] text-lg leading-[1.9] text-ivory/78">
              {finalCta.body}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ButtonLink href={finalCta.primary.href} size="lg">
                {finalCta.primary.label}
              </ButtonLink>
              {secondary ? (
                <ButtonLink href={secondary.href} variant="secondary" size="lg">
                  {secondary.label}
                </ButtonLink>
              ) : null}
            </div>
            <p className="mx-auto mt-6 max-w-[46ch] text-sm leading-7 text-ivory/62">
              Non sai da dove iniziare?{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="border-b border-gold/28 text-ivory/76 transition hover:border-gold/46 hover:text-gold"
              >
                Puoi scrivermi direttamente
              </a>{" "}
              e raccontarmi cosa stai vivendo.
            </p>
          </SurfaceCard>
        </Reveal>
      </Container>
    </section>
  );
}
