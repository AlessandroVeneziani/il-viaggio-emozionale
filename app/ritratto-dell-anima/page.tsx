import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { NumberBackdrop } from "@/components/ui/number-backdrop";
import { SurfaceCard } from "@/components/ui/surface-card";
import { WelcomeBackHome } from "@/components/ui/welcome-back-home";
import { buildMetadata } from "@/lib/metadata";

const passagePoints = [
  {
    title: "Quando tutto sembra sospeso",
    text: "Ci sono momenti in cui senti che qualcosa sta cambiando, ma non riesci ancora a dargli un nome. Non è debolezza: è una soglia che chiede ascolto.",
  },
  {
    title: "Quando una domanda ritorna",
    text: "Forse riconosci schemi, ripetizioni o scelte che sembrano portarti sempre nello stesso punto. Il primo passo non è forzare una risposta, ma capire cosa sta cercando di emergere.",
  },
  {
    title: "Quando serve una mappa",
    text: "A volte non hai bisogno di aggiungere altro alla tua vita. Hai bisogno di leggere meglio il punto in cui sei, per scegliere con più presenza il passo successivo.",
  },
] as const;

const results = [
  {
    title: "Maggiore chiarezza",
    text: "Dare parole più precise a ciò che senti, senza ridurlo a una spiegazione fredda o generica.",
  },
  {
    title: "Comprensione del momento",
    text: "Riconoscere il passaggio che stai vivendo e il senso dei movimenti interiori che lo accompagnano.",
  },
  {
    title: "Risorse riconosciute",
    text: "Ritrovare talenti, qualità e parti di te che possono sostenerti nelle scelte quotidiane.",
  },
  {
    title: "Direzione",
    text: "Uscire dalla confusione con una traccia più leggibile, concreta e fedele alla tua natura.",
  },
] as const;

const previewPages = [
  {
    title: "Un libro personale",
    text: "Una copertina pensata per custodire la tua storia.",
    image: "/images/ritratto-dell-anima/01-ritratto-anima-hero.png",
    alt: "Copertina del Ritratto dell'Anima con fiocco dorato su marmo scuro.",
    objectPosition: "center center",
  },
  {
    title: "Pagine da attraversare",
    text: "Capitoli, simboli e domande costruiti per essere riletti nel tempo.",
    image: "/images/ritratto-dell-anima/03-ritratto-anima-lettura-a4.png",
    alt: "Libro del Ritratto dell'Anima aperto durante la lettura.",
    objectPosition: "center center",
  },
  {
    title: "Materia e dettagli",
    text: "Carta, luce e segni distintivi di un oggetto che resta.",
    image: "/images/ritratto-dell-anima/02-ritratto-anima-dettaglio-senza-rilegatura.png",
    alt: "Dettaglio della copertina del Ritratto dell'Anima con albero dorato.",
    objectPosition: "center center",
  },
] as const;

const portraitEditions = [
  {
    title: "Edizione Digitale",
    eyebrow: "Ritratto in PDF",
    experience:
      "Per iniziare con una lettura completa, raccolta in un formato digitale da ricevere e rileggere con calma.",
    features: ["Formato PDF", "Consegna digitale"],
    price: "250 €",
    purchaseHref: "https://buy.stripe.com/aFabJ0gTT8o12Q6eIQ4F200",
    featured: false,
  },
  {
    title: "Edizione Pregiata",
    eyebrow: "Ritratto stampato",
    experience:
      "Per chi desidera trasformare la propria lettura in un volume fisico, elegante e pensato per essere conservato nel tempo.",
    features: [
      "Versione stampata",
      "Rilegatura elegante",
      "Pensata per essere conservata nel tempo",
    ],
    price: "350 €",
    purchaseHref: "https://buy.stripe.com/dRm6oGcDD0Vzaiy3084F201",
    featured: false,
  },
  {
    title: "Edizione Collezione",
    eyebrow: "Ritratto come opera personale",
    experience:
      "Non è semplicemente una stampa. È il tuo Ritratto trasformato in un'opera personale, da custodire come un libro personale negli anni.",
    features: [
      "Copertina in seta",
      "Materiali editoriali più pregiati",
      "Numerazione progressiva dell'edizione",
      "Certificazione dell'opera",
    ],
    price: "450 €",
    purchaseHref: "https://buy.stripe.com/dRm00ieLL6fT62i0S04F202",
    featured: true,
  },
] as const;

const faqs = [
  {
    question: "Posso regalarlo?",
    answer:
      "Sì. Per realizzarlo sono sufficienti nome e cognome completi e data di nascita.",
  },
  {
    question: "Quando lo riceverò?",
    answer:
      "Circa sette giorni lavorativi per la realizzazione più il tempo della spedizione. Considera mediamente circa dieci giorni dall'acquisto.",
  },
  {
    question: "È una previsione del futuro?",
    answer:
      "No. Aiuta a leggere il presente con maggiore consapevolezza.",
  },
  {
    question: "Serve conoscere numerologia o simboli?",
    answer: "Assolutamente no.",
  },
] as const;

export const metadata = buildMetadata({
  title: "Ritratto dell'Anima",
  description:
    "Un libro personale scritto su misura: circa 100 pagine dedicate alla tua storia simbolica, ai tuoi capitoli interiori e al tuo viaggio evolutivo.",
  path: "/ritratto-dell-anima",
});

export default function RitrattoPage() {
  return (
    <main>
      <section className="section-shell relative isolate overflow-hidden pb-20 pt-8 sm:pb-24 sm:pt-10 lg:pb-28">
        <NumberBackdrop className="z-0 opacity-58" />
        <div className="pointer-events-none absolute right-[calc(-18%+32px)] top-[42rem] z-30 w-[70%] max-w-[22rem] opacity-[0.9] sm:right-[calc(-7%+32px)] sm:top-[10rem] sm:w-[46%] sm:max-w-[26.5rem] sm:opacity-[0.9] lg:right-[calc(4vw+32px)] lg:top-[8.5rem] lg:w-[46vw] lg:max-w-[624px] lg:opacity-[0.9] xl:right-[calc(7vw+32px)] xl:max-w-[672px]">
          <Image
            src="/images/brand/bagatto.webp"
            alt=""
            width={1043}
            height={1298}
            priority
            sizes="(max-width: 640px) 58vw, (max-width: 1024px) 38vw, 38vw"
            className="h-auto w-full object-contain saturate-[0.86] brightness-[1.04] contrast-[0.96]"
            style={{
              maskImage:
                "linear-gradient(to left, rgba(0,0,0,1) 52%, rgba(0,0,0,0.74) 76%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to left, rgba(0,0,0,1) 52%, rgba(0,0,0,0.74) 76%, transparent 100%)",
            }}
          />
        </div>
        <Container className="relative z-40">
          <Reveal className="editorial-title-haze max-w-5xl">
            <p className="editorial-label mb-6 lg:mb-7">
              Ritratto dell&apos;Anima
            </p>
            <h1 className="editorial-title-depth max-w-[14ch] whitespace-pre-line text-pretty font-display text-[2.9rem] leading-[1.06] sm:text-[4rem] lg:text-[5.15rem]">
              {"A volte non abbiamo bisogno di cambiare vita.\nAbbiamo bisogno di capire dove ci troviamo."}
            </h1>
            <div className="mt-8 max-w-[31ch] space-y-5 font-display text-[1.55rem] leading-[1.34] text-ivory/90 sm:max-w-[42ch] sm:text-[2.05rem]">
              <p>
                Quando attraversiamo un passaggio importante, spesso non ci
                manca la forza. Ci manca la chiarezza.
              </p>
              <p>
                Il Ritratto dell&apos;Anima nasce per aiutarti a leggere con
                maggiore consapevolezza il momento che stai vivendo e ritrovare
                una direzione più autentica.
              </p>
            </div>
            <div className="mt-10">
              <ButtonLink href="#edizioni" size="lg">
                Inizia dal Ritratto dell&apos;Anima
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="section-shell py-16 sm:py-24">
        <Container>
          <Reveal>
            <SurfaceCard className="mx-auto max-w-5xl p-7 sm:p-9 lg:p-10">
              <p className="editorial-label">Il passaggio che stai vivendo</p>
              <h2 className="editorial-title-depth mt-5 max-w-[12ch] font-display text-[2.75rem] leading-[1.08] text-ivory sm:text-[4rem]">
                Non è un problema. È un passaggio.
              </h2>
              <p className="mt-7 max-w-[58ch] text-base leading-[1.95] text-ivory/78 sm:text-[1.06rem]">
                Quando qualcosa dentro cambia, può sembrare di essere fermi.
                In realtà spesso stai attraversando una zona di transizione:
                vecchi riferimenti non bastano più, quelli nuovi non sono
                ancora chiari.
              </p>
              <div className="mt-8 grid gap-5 md:grid-cols-3">
                {passagePoints.map((point) => (
                  <div
                    key={point.title}
                    className="flex h-full flex-col border-t border-gold/[0.08] pt-5"
                  >
                    <p className="min-h-[2.8rem] text-xs font-semibold uppercase leading-[1.55] tracking-[0.28em] text-gold">
                      {point.title}
                    </p>
                    <p className="mt-4 text-base leading-8 text-ivory/76 md:min-h-[12rem]">
                      {point.text}
                    </p>
                  </div>
                ))}
              </div>
            </SurfaceCard>
          </Reveal>
        </Container>
      </section>

      <section className="section-shell py-16 sm:py-24">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="editorial-label">Cosa otterrai</p>
            <h2 className="editorial-title-depth mt-5 font-display text-[2.85rem] leading-[1.08] text-ivory sm:text-[4rem]">
              Prima di tutto, una lettura più chiara di te.
            </h2>
            <p className="mt-7 max-w-[58ch] text-base leading-[1.95] text-ivory/76 sm:text-[1.06rem]">
              Il Ritratto ti accompagna a mettere ordine dove senti confusione,
              a riconoscere ciò che ti sostiene e a trasformare intuizioni,
              domande e segnali interiori in una direzione più consapevole.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-4">
            {results.map((result) => (
              <SurfaceCard key={result.title} className="p-6 sm:p-7">
                <p className="font-display text-[1.85rem] leading-[1.12] text-ivory">
                  {result.title}
                </p>
                <p className="mt-4 text-base leading-8 text-ivory/70">
                  {result.text}
                </p>
              </SurfaceCard>
            ))}
          </div>
          <Reveal className="mt-10">
            <SurfaceCard className="mx-auto max-w-4xl p-7 sm:p-9 lg:p-10">
              <p className="editorial-label">Il metodo al servizio della lettura</p>
              <p className="mt-5 max-w-[68ch] text-base leading-[1.95] text-ivory/78 sm:text-[1.06rem]">
                Solo dopo aver messo al centro il tuo momento, il Ritratto
                integra numerologia simbolica, archetipi, cicli evolutivi,
                chakra, talenti e altri strumenti. Non per etichettarti, ma per
                offrire una mappa più ricca e comprensibile di ciò che stai
                attraversando.
              </p>
            </SurfaceCard>
          </Reveal>
        </Container>
      </section>

      <section className="section-shell py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.84fr_1.16fr]">
            <Reveal className="editorial-title-haze">
              <p className="editorial-label">Come nasce il Ritratto</p>
              <h2 className="editorial-title-depth mt-5 max-w-[11ch] font-display text-[2.85rem] leading-[1.08] text-ivory sm:text-[4rem]">
                Una mappa scritta per il tuo momento.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="space-y-5 text-base leading-[1.95] text-ivory/78 sm:text-[1.06rem]">
                <p>
                  Il Ritratto nasce da un lavoro di ascolto, studio e scrittura.
                  Le informazioni personali non vengono usate per produrre una
                  formula, ma per costruire una lettura capace di parlare al
                  passaggio che stai vivendo.
                </p>
                <p>
                  Il metodo sostiene la trasformazione: raccoglie simboli,
                  coordinate e intuizioni, poi li traduce in un linguaggio
                  leggibile, umano e concreto. Al centro resti tu, con la tua
                  storia e la direzione che sta cercando forma.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section-shell py-16 sm:py-24">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="editorial-label">Un oggetto da custodire</p>
            <h2 className="editorial-title-depth mt-5 font-display text-[2.85rem] leading-[1.08] text-ivory sm:text-[4rem]">
              Sfoglia il Ritratto
            </h2>
            <p className="mt-7 max-w-[58ch] text-base leading-[1.95] text-ivory/76 sm:text-[1.06rem]">
              Tre immagini per entrare nella materia del Ritratto: la copertina,
              le pagine che lo compongono e i dettagli dell&apos;edizione.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {previewPages.map((page) => (
              <SurfaceCard key={page.title} className="p-6 sm:p-7">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] border border-gold/14 bg-ivory/[0.025] shadow-[0_24px_60px_rgba(0,0,0,0.24)]">
                  <Image
                    src={page.image}
                    alt={page.alt}
                    fill
                    sizes="(min-width: 1024px) 31vw, (min-width: 640px) 60vw, 100vw"
                    className="object-cover"
                    style={{ objectPosition: page.objectPosition }}
                  />
                </div>
                <p className="mt-6 font-display text-[1.85rem] leading-[1.12] text-ivory">
                  {page.title}
                </p>
                <p className="mt-4 text-base leading-8 text-ivory/70">
                  {page.text}
                </p>
              </SurfaceCard>
            ))}
          </div>
        </Container>
      </section>

      <section id="edizioni" className="section-shell py-16 sm:py-24">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="editorial-label">Edizioni</p>
            <h2 className="editorial-title-depth mt-5 max-w-[13ch] font-display text-[2.85rem] leading-[1.08] text-ivory sm:text-[4rem]">
              Scegli l&apos;edizione più adatta a te
            </h2>
            <p className="mt-7 max-w-[58ch] text-base leading-[1.95] text-ivory/76 sm:text-[1.06rem]">
              Ogni edizione custodisce la stessa esperienza di chiarezza. Cambia
              il modo in cui desideri ricevere, conservare e abitare il tuo
              Ritratto nel tempo.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {portraitEditions.map((edition) => (
              <SurfaceCard
                key={edition.title}
                className={`relative flex h-full flex-col overflow-hidden p-8 ${
                  edition.featured
                    ? "border-[#d2b674]/22 bg-[linear-gradient(180deg,rgba(104,87,72,0.22),rgba(46,39,33,0.34))] shadow-[0_24px_48px_rgba(54,42,31,0.14),inset_0_1px_0_rgba(255,244,225,0.05)]"
                    : ""
                }`}
              >
                {edition.featured ? (
                  <>
                    <div
                      className="absolute inset-0 opacity-[0.05]"
                      style={{
                        backgroundImage:
                          'url("/images/backgrounds/sfondo-numeri-seamless.png")',
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                    <div className="absolute inset-x-8 top-7 h-20 rounded-full bg-gold/[0.07] blur-3xl" />
                  </>
                ) : null}
                <div className="relative z-10 flex h-full flex-col">
                  <p
                    className={`text-xs font-semibold uppercase tracking-[0.3em] ${
                      edition.featured ? "text-[#d8bf83]" : "text-gold"
                    }`}
                  >
                    {edition.eyebrow}
                  </p>
                  <h3 className="mt-5 font-display text-[2.1rem] leading-[1.08] text-ivory">
                    {edition.title}
                  </h3>
                  <p
                    className={`mt-5 text-base leading-8 ${
                      edition.featured ? "text-[#efe6d6]/82" : "text-ivory/76"
                    }`}
                  >
                    {edition.experience}
                  </p>
                  <ul className="mt-6 flex-1 space-y-3 text-sm leading-7 text-ivory/72 sm:text-base">
                    {edition.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/70" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p
                    className={`mt-8 text-xs font-semibold uppercase tracking-[0.28em] ${
                      edition.featured ? "text-[#d8bf83]/88" : "text-gold/72"
                    }`}
                  >
                    Investimento
                  </p>
                  <p
                    className={`mt-3 font-display text-[2.35rem] leading-none ${
                      edition.featured ? "text-[#f2e7d5]" : "text-ivory"
                    }`}
                  >
                    {edition.price}
                  </p>
                  <div className="mt-6">
                    <ButtonLink
                      href={edition.purchaseHref}
                      className="whitespace-nowrap px-7 sm:px-8"
                    >
                      Acquista
                    </ButtonLink>
                  </div>
                </div>
              </SurfaceCard>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell py-16 sm:py-24">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="editorial-label">Domande frequenti</p>
            <h2 className="editorial-title-depth mt-5 max-w-[13ch] font-display text-[2.85rem] leading-[1.08] text-ivory sm:text-[4rem]">
              Prima di iniziare
            </h2>
          </div>
          <div className="grid gap-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-[26px] border border-gold/[0.08] bg-ivory/[0.035] px-6 py-5 transition hover:border-gold/[0.18] sm:px-8 sm:py-6"
              >
                <summary className="cursor-pointer list-none font-display text-[1.45rem] leading-[1.24] text-ivory marker:hidden sm:text-[1.75rem]">
                  {faq.question}
                </summary>
                <p className="mt-5 max-w-[68ch] text-base leading-8 text-ivory/72">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell py-16 sm:py-24">
        <Container>
          <Reveal>
            <SurfaceCard className="mx-auto max-w-5xl p-8 sm:p-10 lg:p-12">
              <p className="editorial-label">E dopo?</p>
              <h2 className="editorial-title-depth mt-6 max-w-[13ch] font-display text-[2.75rem] leading-[1.08] text-ivory sm:text-[4rem]">
                Può bastare così, oppure aprire una nuova soglia.
              </h2>
              <div className="mt-8 grid gap-6 text-lg leading-[1.95] text-ivory/80 lg:grid-cols-2">
                <div className="space-y-5">
                  <p>
                    Per alcune persone il Ritratto dell&apos;Anima è
                    un&apos;esperienza completa: una mappa da leggere,
                    sedimentare e ritrovare quando la vita chiede maggiore
                    chiarezza.
                  </p>
                  <p>
                    Non devi trasformarlo in altro. Può restare un luogo
                    personale, un riferimento discreto da riaprire nel tempo.
                  </p>
                </div>
                <div className="space-y-5">
                  <p>
                    Per altre persone diventa una porta d&apos;ingresso: dopo la
                    lettura, può nascere il desiderio di approfondire un tema
                    specifico in una Sessione Evolutiva o di iniziare un
                    percorso più ampio di Soul Design.
                  </p>
                  <p>
                    Il passo successivo non viene spinto. Si riconosce, se e
                    quando diventa naturale.
                  </p>
                </div>
              </div>
            </SurfaceCard>
          </Reveal>
        </Container>
      </section>

      <section className="section-shell pb-28 pt-16 sm:pb-36 sm:pt-24">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <div className="gold-divider mb-10" />
              <WelcomeBackHome variant="statement" align="center" />
              <p className="editorial-title-depth mx-auto mt-7 max-w-[18ch] whitespace-pre-line font-display text-[2.35rem] leading-[1.12] sm:text-[3.35rem]">
                {"Ci sono libri che raccontano delle storie.\n\nE poi ci sono libri che, a un certo punto della vita, iniziano a raccontare la nostra."}
              </p>
              <p className="mx-auto mt-8 max-w-[58ch] text-base leading-[1.95] text-ivory/78 sm:text-[1.1rem]">
                Se senti che questo è il momento di fare maggiore chiarezza, il
                Ritratto dell&apos;Anima può essere il punto da cui iniziare.
              </p>
              <div className="mt-10">
                <ButtonLink href="#edizioni" size="lg">
                  Inizia il tuo viaggio
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
