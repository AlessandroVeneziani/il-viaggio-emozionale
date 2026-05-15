import Link from "next/link";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <main className="section-shell py-28 sm:py-36">
      <Container className="max-w-3xl">
        <div className="texture-paper rounded-[32px] border border-gold/30 bg-white/[0.04] px-8 py-16 text-center shadow-ritual">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-gold">
            Pagina non trovata
          </p>
          <h1 className="font-display text-5xl text-ivory sm:text-6xl">
            Hai imboccato una soglia diversa.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-ivory/80">
            Torniamo al punto giusto del viaggio e ripartiamo da lì.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink href="/">Torna alla Home</ButtonLink>
            <Link
              href="/contatti"
              className="inline-flex items-center justify-center rounded-full border border-gold/35 px-7 py-4 text-sm font-semibold text-ivory/85 transition hover:border-gold hover:text-gold"
            >
              Vai ai contatti
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
