import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { NumberBackdrop } from "@/components/ui/number-backdrop";
import { SurfaceCard } from "@/components/ui/surface-card";
import { WelcomeBackHome } from "@/components/ui/welcome-back-home";
import { buildMetadata } from "@/lib/metadata";

const promisePoints = [
  {
    title: "Libro personale",
    text: "Non un documento da consultare. Un libro che racconta la tua storia simbolica, costruito pagina dopo pagina per essere riletto nel tempo.",
  },
  {
    title: "Scritto una persona alla volta",
    text: "Ogni Ritratto nasce da un lavoro di studio, interpretazione e scrittura dedicato esclusivamente a una persona. Nessun testo viene replicato.",
  },
  {
    title: "Da leggere e conservare",
    text: "Un libro pensato per accompagnarti negli anni. Da riaprire quando qualcosa cambia, quando una domanda ritorna o quando senti il bisogno di ritrovare direzione.",
  },
] as const;

const previewPages = [
  {
    title: "Copertina personale",
    text: "Spazio predisposto per mostrare il volto editoriale del tuo Ritratto.",
  },
  {
    title: "Capitoli interni",
    text: "Anteprima futura delle pagine, della composizione e del ritmo del manoscritto.",
  },
  {
    title: "Dettagli dell'edizione",
    text: "Texture, carta, titolo, nome e segni distintivi dell'oggetto finale.",
  },
] as const;

const creationSteps = [
  "Ricevo i dati",
  "Studio",
  "Scrivo",
  "Revisiono",
  "Impagino",
  "Consegno",
] as const;

const bookChapters = [
  "Prologo",
  "Il cielo",
  "La matrice",
  "Il nome",
  "Il passato dell'Anima",
  "Gli archetipi",
  "Talenti e sfide",
  "I chakra",
  "I cicli della vita",
  "Il nodo karmico",
  "Le relazioni",
  "La carta oracolare",
  "L'animale guida",
  "Il Patto con Te",
  "Epilogo",
] as const;

const tiktokPlaceholders = [
  {
    title: "Dentro un capitolo",
    text: "Video futuro dedicato al modo in cui un tema personale diventa pagina.",
  },
  {
    title: "Il processo di scrittura",
    text: "Video futuro sul passaggio dai dati al manoscritto finale.",
  },
  {
    title: "L'oggetto editoriale",
    text: "Video futuro su carta, copertina, dettagli e conservazione.",
  },
] as const;

const portraitEditions = [
  {
    title: "Ritratto Digitale",
    eyebrow: "Primo ingresso",
    experience:
      "Per chi desidera entrare nel proprio libro in modo essenziale: leggerlo con calma, tornare ai capitoli quando serve e iniziare da una mappa personale chiara.",
    features: [
      "manoscritto editoriale in PDF",
      "circa 100 pagine scritte su misura",
      "consegna digitale",
      "accesso immediato al primo passo del viaggio",
    ],
    price: "150 €",
    featured: false,
  },
  {
    title: "Ritratto Premium Stampato",
    eyebrow: "Oggetto da custodire",
    experience:
      "Per chi sente che il proprio Ritratto non debba restare solo su schermo, ma diventare un volume fisico da aprire, conservare e ritrovare nel tempo.",
    features: [
      "PDF editoriale incluso",
      "stampa su carta pergamena",
      "rilegatura artigianale",
      "copertina personalizzata con il tuo nome",
      "dedica iniziale firmata",
    ],
    price: "250 €",
    featured: false,
  },
  {
    title: "Libro dell'Anima — Edizione Completa",
    eyebrow: "Immersione completa",
    experience:
      "Per chi desidera vivere il Ritratto come esperienza più ampia: un libro personale arricchito da materiali, spazi di scrittura e tracce da attraversare dopo la consegna.",
    features: [
      "PDF editoriale incluso",
      "copertina in seta personalizzata",
      "contenuti ampliati",
      "Manifesto Personale",
      "Diario del Viaggio",
      "spazio per annotazioni e riflessioni",
    ],
    price: "350 €",
    featured: true,
  },
] as const;

const faqs = [
  {
    question: "Quante pagine contiene il Ritratto?",
    answer:
      "Il Ritratto nasce come libro personale di circa 100 pagine. Non inseguo una misura rigida: ogni manoscritto trova la propria estensione in base alla storia che deve custodire.",
  },
  {
    question: "È scritto davvero su misura?",
    answer:
      "Sì. Ogni Ritratto viene scritto una persona alla volta, dopo uno studio dedicato. La struttura sostiene il lavoro, ma le parole, i passaggi e la narrazione nascono solo per chi lo riceve.",
  },
  {
    question: "Da quali informazioni si parte?",
    answer:
      "Si parte dai dati necessari alla costruzione simbolica e da alcune tracce personali che aiutano a comprendere il momento che stai attraversando. Non raccolgo informazioni per compilare un modulo: le uso per dare corpo a un libro.",
  },
  {
    question: "Quanto tempo serve per riceverlo?",
    answer:
      "Il tempo dipende dall'edizione e dal calendario di scrittura. Preferisco non accelerare un lavoro che nasce per restare: dopo il primo contatto ti indicherò tempi, disponibilità e modalità di consegna.",
  },
  {
    question: "Quale edizione dovrei scegliere?",
    answer:
      "Non esiste un'edizione migliore in assoluto. Il digitale apre la porta. Lo stampato trasforma il Ritratto in un oggetto da custodire. Il Libro dell'Anima — Edizione Completa amplia l'esperienza e la rende più abitabile nel tempo.",
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
      <section className="section-shell overflow-hidden pb-20 pt-8 sm:pb-24 sm:pt-10 lg:pb-28">
        <NumberBackdrop className="opacity-58" />
        <Container>
          <Reveal className="editorial-title-haze max-w-5xl">
            <p className="editorial-label mb-6 lg:mb-7">
              Ritratto dell&apos;Anima
            </p>
            <h1 className="editorial-title-depth max-w-[13ch] whitespace-pre-line text-pretty font-display text-[2.9rem] leading-[1.06] sm:text-[4rem] lg:text-[5.15rem]">
              {"Ogni libro che scrivo\nha un solo protagonista.\n\nTu."}
            </h1>
            <p className="mt-8 max-w-[35ch] font-display text-[1.75rem] leading-[1.28] text-ivory/90 sm:text-[2.28rem]">
              Un libro personale di circa 100 pagine, scritto esclusivamente
              per raccontare il tuo viaggio simbolico, i tuoi capitoli interiori
              e la direzione che sta prendendo forma.
            </p>
            <div className="mt-10">
              <ButtonLink href="#edizioni" size="lg">
                Scopri il tuo Ritratto
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="section-shell py-16 sm:py-24">
        <Container>
          <Reveal>
            <SurfaceCard className="mx-auto max-w-5xl p-7 sm:p-9 lg:p-10">
              <p className="editorial-label">Opera editoriale</p>
              <h2 className="editorial-title-depth mt-5 max-w-[12ch] font-display text-[2.75rem] leading-[1.08] text-ivory sm:text-[4rem]">
                Non riceverai un report.
              </h2>
              <div className="mt-8 grid gap-5 md:grid-cols-3">
                {promisePoints.map((point) => (
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
            <p className="editorial-label">Anteprima editoriale</p>
            <h2 className="editorial-title-depth mt-5 font-display text-[2.85rem] leading-[1.08] text-ivory sm:text-[4rem]">
              Sfoglia il Ritratto
            </h2>
            <p className="mt-7 max-w-[58ch] text-base leading-[1.95] text-ivory/76 sm:text-[1.06rem]">
              Questa sezione è predisposta per accogliere le immagini future del
              libro: copertina, pagine interne e dettagli dell&apos;edizione.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {previewPages.map((page) => (
              <SurfaceCard key={page.title} className="p-6 sm:p-7">
                <div className="flex aspect-[4/5] items-center justify-center rounded-[24px] border border-dashed border-gold/18 bg-ivory/[0.025] px-8 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold/72">
                    Immagine in arrivo
                  </p>
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

      <section className="section-shell py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.84fr_1.16fr]">
            <Reveal className="editorial-title-haze">
              <p className="editorial-label">Processo</p>
              <h2 className="editorial-title-depth mt-5 max-w-[11ch] font-display text-[2.85rem] leading-[1.08] text-ivory sm:text-[4rem]">
                Come nasce
              </h2>
              <p className="mt-8 max-w-[42ch] text-base leading-[1.95] text-ivory/76 sm:text-[1.06rem]">
                Il Ritratto non viene generato. Viene costruito come un
                manoscritto personale: un passaggio dopo l&apos;altro, fino alla
                consegna del libro.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="space-y-4">
                {creationSteps.map((step, index) => (
                  <div
                    key={step}
                    className="grid grid-cols-[3.5rem_1fr] gap-5 border-t border-gold/[0.08] pt-5"
                  >
                    <span className="font-display text-3xl leading-none text-gold/82">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="font-display text-[1.85rem] leading-[1.16] text-ivory sm:text-[2.2rem]">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section-shell py-16 sm:py-24">
        <Container>
          <Reveal>
            <SurfaceCard className="mx-auto max-w-6xl p-6 sm:p-8 lg:p-10">
              <div className="grid gap-10 lg:grid-cols-[0.45fr_0.55fr] lg:items-stretch">
                <div className="relative min-h-[420px] overflow-hidden rounded-[30px] border border-gold/[0.08] bg-[linear-gradient(180deg,rgba(244,241,234,0.055),rgba(244,241,234,0.016))] sm:min-h-[520px]">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-[0.12]"
                    style={{
                      backgroundImage:
                        'url("/images/backgrounds/numeric-texture.png")',
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-6 rounded-[24px] border border-dashed border-gold/18"
                  />
                  <div className="relative z-10 flex h-full min-h-[420px] items-center justify-center px-8 text-center sm:min-h-[520px]">
                    <div>
                      <p className="editorial-label text-gold/78">
                        Ritratto autore
                      </p>
                      <p className="mt-5 text-sm leading-7 text-ivory/58">
                        Placeholder fotografico verticale
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center py-2 lg:py-8">
                  <p className="editorial-label">L&apos;AUTORE</p>
                  <h2 className="editorial-title-depth mt-6 max-w-[12ch] font-display text-[2.75rem] leading-[1.08] text-ivory sm:text-[4rem]">
                    Chi scrive questi libri?
                  </h2>
                  <div className="mt-8 max-w-[62ch] space-y-5 text-base leading-[1.95] text-ivory/78 sm:text-[1.06rem]">
                    <p>
                      Non ho creato il Ritratto dell&apos;Anima per offrire una
                      risposta immediata o una lettura standardizzata.
                    </p>
                    <p>
                      L&apos;ho immaginato come un libro personale: un luogo in
                      cui simboli, numeri, archetipi e domande possano
                      diventare capitoli, passaggi e immagini interiori dentro
                      una narrazione autentica.
                    </p>
                    <p>
                      Ogni Ritratto nasce da un processo manuale di studio,
                      scrittura e revisione. Prima osservo le coordinate
                      simboliche, poi cerco il filo narrativo che può renderle
                      leggibili dentro una storia personale.
                    </p>
                    <p>
                      Questo tempo è parte del metodo: nessun libro viene
                      composto in serie, perché nessuna storia arriva nello stesso
                      modo.
                    </p>
                    <p>Per questo motivo nessun libro è uguale a un altro.</p>
                    <p>Ogni persona porta una storia diversa.</p>
                    <p>Ogni libro nasce per custodirla.</p>
                  </div>
                  <p className="editorial-title-depth mt-14 max-w-[14ch] whitespace-pre-line font-display text-[2rem] leading-[1.18] text-ivory sm:mt-16 sm:text-[2.55rem]">
                    {"Ogni persona ha una storia.\nIo la trasformo in un libro."}
                  </p>
                </div>
              </div>
            </SurfaceCard>
          </Reveal>
        </Container>
      </section>

      <section className="section-shell py-16 sm:py-24">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="editorial-label">Dentro il Ritratto</p>
            <h2 className="editorial-title-depth mt-5 max-w-[13ch] font-display text-[2.85rem] leading-[1.08] text-ivory sm:text-[4rem]">
              Tre frammenti video
            </h2>
            <p className="mt-7 max-w-[56ch] text-base leading-[1.95] text-ivory/76 sm:text-[1.06rem]">
              Uno spazio pronto per accogliere contenuti TikTok che mostrino il
              libro, il processo di scrittura e i dettagli editoriali senza
              trasformare il Ritratto in un prodotto freddo.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {tiktokPlaceholders.map((video) => (
              <SurfaceCard key={video.title} className="p-6 sm:p-7">
                <div className="flex aspect-[9/16] items-center justify-center rounded-[28px] border border-gold/12 bg-[linear-gradient(180deg,rgba(244,241,234,0.045),rgba(244,241,234,0.014))] px-7 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold/74">
                    TikTok placeholder
                  </p>
                </div>
                <p className="mt-6 font-display text-[1.8rem] leading-[1.12] text-ivory">
                  {video.title}
                </p>
                <p className="mt-4 text-base leading-8 text-ivory/70">
                  {video.text}
                </p>
              </SurfaceCard>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell py-16 sm:py-24">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-5xl border-y border-gold/[0.10] py-10 sm:py-12 lg:py-16">
              <div className="mx-auto max-w-3xl text-center">
                <p className="editorial-label">INDICE</p>
                <h2 className="editorial-title-depth mt-5 font-display text-[2.85rem] leading-[1.08] text-ivory sm:text-[4rem]">
                  Un libro. Quindici capitoli. Una sola storia.
                </h2>
                <p className="mx-auto mt-6 max-w-[58ch] text-base leading-[1.85] text-ivory/76 sm:text-[1.06rem]">
                  Ogni capitolo è scritto esclusivamente per te e dialoga con
                  gli altri, come le parti di una stessa narrazione personale.
                </p>
              </div>

              <ol className="mx-auto mt-10 grid max-w-4xl gap-x-16 gap-y-0 sm:mt-12 lg:grid-cols-2">
                {bookChapters.map((chapter, index) => (
                  <li
                    key={chapter}
                    className="grid grid-cols-[3.25rem_1fr] gap-5 border-t border-gold/[0.08] py-4 sm:grid-cols-[4rem_1fr] sm:py-5"
                  >
                    <span className="pt-1 text-xs font-semibold uppercase tracking-[0.28em] text-gold/72 sm:text-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-[1.75rem] leading-[1.16] text-ivory sm:text-[2.15rem]">
                      {chapter}
                    </span>
                  </li>
                ))}
              </ol>

              <p className="mx-auto mt-10 max-w-[54ch] text-center text-sm leading-7 text-ivory/60 sm:mt-12">
                Ogni capitolo viene scritto esclusivamente per la persona che lo
                riceve. Nessun Ritratto è uguale a un altro.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="section-shell py-16 sm:py-24">
        <Container>
          <Reveal>
            <SurfaceCard className="mx-auto max-w-5xl p-8 sm:p-10 lg:p-12">
              <p className="editorial-label">Esperienza di chi riceve il libro</p>
              <h2 className="editorial-title-depth mt-6 max-w-[13ch] font-display text-[2.75rem] leading-[1.08] text-ivory sm:text-[4rem]">
                Non resta sullo schermo.
              </h2>
              <div className="mt-8 grid gap-6 text-lg leading-[1.95] text-ivory/80 lg:grid-cols-2">
                <div className="space-y-5">
                  <p>
                    Chi riceve il Ritratto spesso lo attraversa una prima volta
                    come scoperta. Poi lo riapre più avanti, quando una scelta
                    cambia forma, una domanda ritorna o una pagina sembra
                    aspettare proprio quel momento.
                  </p>
                  <p>
                    Alla seconda lettura emergono dettagli rimasti silenziosi.
                    Dopo settimane o mesi, alcune frasi sembrano parlare con una
                    precisione nuova. Il testo è lo stesso, ma lo sguardo di chi
                    legge non lo è più.
                  </p>
                  <p>
                    Non cambia il libro. Cambia il lettore.
                  </p>
                </div>
                <div className="space-y-5">
                  <p>
                    Per questo non è pensato per essere consumato in fretta. È
                    un oggetto da tenere vicino, da lasciare sedimentare, da
                    ritrovare quando la vita chiede un modo diverso di leggere
                    ciò che sta accadendo.
                  </p>
                  <p>
                    Alcuni libri si leggono una volta. Altri crescono insieme a
                    chi li legge.
                  </p>
                  <ButtonLink href="/contatti" variant="secondary">
                    Raccontami il tuo momento
                  </ButtonLink>
                </div>
              </div>
            </SurfaceCard>
          </Reveal>
        </Container>
      </section>

      <section id="edizioni" className="section-shell py-16 sm:py-24">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="editorial-label">Edizioni</p>
            <h2 className="editorial-title-depth mt-5 max-w-[13ch] font-display text-[2.85rem] leading-[1.08] text-ivory sm:text-[4rem]">
              Tre modi di abitare lo stesso libro
            </h2>
            <p className="mt-7 max-w-[58ch] text-base leading-[1.95] text-ivory/76 sm:text-[1.06rem]">
              Non sono tre prodotti separati. Sono tre intensità dello stesso
              ingresso: dal manoscritto digitale all&apos;oggetto da custodire, fino
              all&apos;edizione più ampia del Viaggio Emozionale.
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
                    Investimento editoriale
                  </p>
                  <p
                    className={`mt-3 font-display text-[2.35rem] leading-none ${
                      edition.featured ? "text-[#f2e7d5]" : "text-ivory"
                    }`}
                  >
                    {edition.price}
                  </p>
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

      <section className="section-shell pb-28 pt-16 sm:pb-36 sm:pt-24">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <div className="gold-divider mb-10" />
              <WelcomeBackHome variant="statement" align="center" />
              <h2 className="editorial-title-depth mx-auto mt-7 max-w-[17ch] whitespace-pre-line font-display text-[2.75rem] leading-[1.08] sm:text-[3.7rem]">
                {"Forse non hai bisogno\ndi cambiare vita.\n\nForse hai bisogno\ndi leggerla."}
              </h2>
              <p className="mx-auto mt-8 max-w-[58ch] text-base leading-[1.95] text-ivory/78 sm:text-[1.1rem]">
                Il Ritratto dell&apos;Anima non nasce per dirti chi sei, ma per
                offrirti una narrazione più chiara della tua storia, attraverso
                simboli, numeri, archetipi e domande.
              </p>
              <div className="mt-10">
                <ButtonLink href="/contatti" size="lg">
                  Inizia il tuo Ritratto
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
