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
    text: "Un manoscritto costruito sulla tua storia simbolica, non un file generico da archiviare.",
  },
  {
    title: "Scritto una persona alla volta",
    text: "Ogni capitolo nasce per un solo protagonista: tu, il tuo percorso, le tue soglie.",
  },
  {
    title: "Da leggere e conservare",
    text: "Un oggetto editoriale da aprire nei passaggi importanti, quando hai bisogno di ritrovare filo e direzione.",
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
  "Nome, cognome e firma simbolica",
  "Matrice numerologica personale",
  "Cicli, soglie e passaggi di vita",
  "Archetipi principali",
  "Talenti, sfide e direzione",
  "Capitoli dedicati a corpo, relazioni e desiderio",
  "Domande per il cammino",
  "Sintesi finale del percorso",
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
    eyebrow: "Manoscritto personale in PDF",
    experience:
      "Per chi desidera ricevere il proprio libro in formato digitale, leggerlo con calma e tornarci quando serve.",
    features: [
      "circa 100 pagine personalizzate",
      "PDF editoriale",
      "consegna digitale",
      "consultabile ovunque",
    ],
    price: "150 €",
    featured: false,
  },
  {
    title: "Ritratto Premium Stampato",
    eyebrow: "Libro personale da custodire",
    experience:
      "Per chi desidera trasformare il proprio Ritratto in un oggetto fisico, intimo e personale.",
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
    title: "Libro dell'Anima",
    eyebrow: "Edizione completa",
    experience:
      "L'esperienza più ampia: un libro personale arricchito da capitoli, spazi e materiali pensati per accompagnarti nel tempo.",
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
      "Il Ritratto nasce come libro personale di circa 100 pagine. La lunghezza può variare leggermente in base alla storia, ai capitoli e all'edizione scelta.",
  },
  {
    question: "È scritto davvero su misura?",
    answer:
      "Sì. Ogni manoscritto viene costruito una persona alla volta: non esistono testi predefiniti, template impersonali o capitoli uguali per tutti.",
  },
  {
    question: "Da quali informazioni si parte?",
    answer:
      "Si parte dai dati personali necessari alla costruzione simbolica del libro e da alcune domande orientative che aiutano a dare contesto al percorso.",
  },
  {
    question: "Quanto tempo serve per riceverlo?",
    answer:
      "I tempi dipendono dall'edizione e dal calendario di scrittura. Dopo il primo contatto riceverai indicazioni chiare su disponibilità, tempi e consegna.",
  },
  {
    question: "Quale edizione dovrei scegliere?",
    answer:
      "Il digitale è ideale per iniziare. Il Premium Stampato è pensato per chi vuole custodire il proprio libro come oggetto personale. Il Libro dell'Anima è l'edizione più completa e ampia.",
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
            <SurfaceCard className="mx-auto max-w-5xl p-8 sm:p-10 lg:p-12">
              <p className="editorial-label">Opera editoriale</p>
              <h2 className="editorial-title-depth mt-6 max-w-[12ch] font-display text-[2.75rem] leading-[1.08] text-ivory sm:text-[4rem]">
                Non riceverai un report.
              </h2>
              <div className="mt-10 grid gap-5 md:grid-cols-3">
                {promisePoints.map((point) => (
                  <div key={point.title} className="border-t border-gold/[0.08] pt-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                      {point.title}
                    </p>
                    <p className="mt-5 text-base leading-8 text-ivory/76">
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
          <div className="mb-12 max-w-3xl">
            <p className="editorial-label">Capitoli del libro</p>
            <h2 className="editorial-title-depth mt-5 max-w-[13ch] font-display text-[2.85rem] leading-[1.08] text-ivory sm:text-[4rem]">
              Cosa contiene il tuo Ritratto
            </h2>
          </div>
          <SurfaceCard className="p-7 sm:p-10">
            <ul className="grid gap-x-8 gap-y-4 text-base leading-8 text-ivory/80 sm:grid-cols-2 lg:grid-cols-3">
              {bookChapters.map((item) => (
                <li key={item} className="flex gap-3 border-t border-gold/[0.08] pt-4">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/75" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </SurfaceCard>
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
                    Il Ritratto è pensato per essere attraversato più volte: una
                    prima volta come scoperta, poi come libro da riaprire nei
                    momenti in cui qualcosa cambia.
                  </p>
                  <p>
                    Le parole di chi lo riceve raccontano spesso questo: non un
                    contenuto consumato in fretta, ma un oggetto che accompagna.
                  </p>
                </div>
                <div className="space-y-5">
                  <p>
                    Per questo le recensioni vengono raccolte come tracce
                    narrative: piccoli segni di come un manoscritto personale
                    possa diventare presenza, memoria e orientamento.
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
              Tre modi di custodire il tuo libro
            </h2>
            <p className="mt-7 max-w-[58ch] text-base leading-[1.95] text-ivory/76 sm:text-[1.06rem]">
              La differenza non è solo nel formato, ma nell&apos;esperienza: dal
              manoscritto digitale all&apos;oggetto personale, fino all&apos;edizione più
              completa del viaggio.
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
                    className={`mt-8 font-display text-4xl ${
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
                Il libro comincia dal punto in cui sei.
              </h2>
              <p className="mx-auto mt-8 max-w-[42ch] font-display text-[1.65rem] leading-[1.36] text-ivory/88 sm:text-[2.15rem]">
                Se senti che la tua storia chiede una forma più chiara, possiamo
                iniziare da qui.
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
