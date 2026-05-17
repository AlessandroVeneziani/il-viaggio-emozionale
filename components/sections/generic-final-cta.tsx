import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

type GenericFinalCtaProps = {
  title: string;
  body: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export function GenericFinalCta({
  title,
  body,
  primary,
  secondary,
}: GenericFinalCtaProps) {
  return (
    <section className="section-shell pb-28 pt-16 sm:pb-36 sm:pt-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <div className="gold-divider mb-10" />
          <div className="mx-auto max-w-3xl">
            <h2 className="editorial-title-depth font-display text-[2.75rem] leading-[1.06] sm:text-[3.7rem]">
              {title}
            </h2>
            <p className="mt-7 text-lg leading-[1.9] text-ivory/78">{body}</p>
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink href={primary.href} size="lg">
              {primary.label}
            </ButtonLink>
            {secondary ? (
              <ButtonLink href={secondary.href} variant="secondary" size="lg">
                {secondary.label}
              </ButtonLink>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
