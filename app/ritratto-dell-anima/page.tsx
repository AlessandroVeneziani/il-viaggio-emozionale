import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { NumberBackdrop } from "@/components/ui/number-backdrop";
import { SurfaceCard } from "@/components/ui/surface-card";
import { WelcomeBackHome } from "@/components/ui/welcome-back-home";
import { buildMetadata } from "@/lib/metadata";

const portraitContents = [
  "Profilo astrologico",
  "Matrice numerologica completa",
  "Significato simbolico del nome",
  "Significato simbolico del cognome",
  "Percorso di Vita",
  "Numeri Maestri",
  "Archetipi principali",
  "Talenti e sfide evolutive",
  "Passato dell'Anima",
  "Cicli di vita",
  "Nodo karmico",
  "Chakra guida",
  "Dinamiche relazionali",
  "Carta Oracolare",
  "Animale Totem",
  "Domande per l'Anima",
  "Sintesi finale del percorso",
] as const;

const portraitBenefits = [
  {
    title: "La tua matrice simbolica",
    text: "Numeri, archetipi e immagini che raccontano il modo in cui la tua energia prende forma.",
  },
  {
    title: "I tuoi passaggi di vita",
    text: "Cicli, soglie e momenti evolutivi che aiutano a leggere il presente con più profondità.",
  },
  {
    title: "Talenti, sfide e direzione",
    text: "Le risorse che porti, i nodi che incontri e il movimento che può riportarti verso una forma più coerente.",
  },
  {
    title: "Domande per il tuo cammino",
    text: "Spunti e riflessioni da usare nel tempo, non solo durante la prima lettura.",
  },
] as const;

const portraitFormats = [
  {
    title: "Ritratto Digitale",
    subtitle:
      "Per chi desidera ricevere la propria mappa in formato PDF, consultabile ovunque.",
    intro: "",
    features: [
      "PDF personalizzato",
      "consegna digitale",
      "consultabile ovunque",
    ],
    price: "150 €",
    featured: false,
  },
  {
    title: "Ritratto Premium Stampato",
    subtitle:
      "Per chi desidera trasformare il proprio Ritratto in un oggetto personale da conservare.",
    intro: "",
    features: [
      "PDF personalizzato",
      "consegna digitale",
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
    subtitle: "L'esperienza più ampia e completa.",
    intro: "Comprende inoltre",
    features: [
      "PDF personalizzato",
      "consegna digitale",
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

const comparisonRows = [
  {
    label: "PDF personalizzato",
    digital: "Incluso",
    premium: "Incluso",
    book: "Incluso",
  },
  {
    label: "Consegna digitale",
    digital: "Inclusa",
    premium: "Inclusa",
    book: "Inclusa",
  },
  {
    label: "Consultabile ovunque",
    digital: "Incluso",
    premium: "Incluso con copia digitale",
    book: "Incluso con copia digitale",
  },
  {
    label: "Stampa su carta pergamena",
    digital: "Non inclusa",
    premium: "Inclusa",
    book: "Inclusa",
  },
  {
    label: "Rilegatura artigianale",
    digital: "Non inclusa",
    premium: "Inclusa",
    book: "Inclusa",
  },
  {
    label: "Copertina personalizzata",
    digital: "Non inclusa",
    premium: "Con il tuo nome",
    book: "In seta personalizzata",
  },
  {
    label: "Dedica iniziale firmata",
    digital: "Non inclusa",
    premium: "Inclusa",
    book: "Inclusa",
  },
  {
    label: "Contenuti ampliati",
    digital: "Non inclusi",
    premium: "Non inclusi",
    book: "Inclusi",
  },
  {
    label: "Manifesto Personale",
    digital: "Non incluso",
    premium: "Non incluso",
    book: "Incluso",
  },
  {
    label: "Diario del Viaggio",
    digital: "Non incluso",
    premium: "Non incluso",
    book: "Incluso",
  },
  {
    label: "Spazio per annotazioni",
    digital: "Non incluso",
    premium: "Non incluso",
    book: "Incluso",
  },
] as const;

export const metadata = buildMetadata({
  title: "Ritratto dell'Anima",
  description:
    "Il libro del tuo viaggio interiore: una mappa personale costruita su misura attraverso numeri, archetipi, Tarocchi, Soul Design e lettura narrativa.",
  path: "/ritratto-dell-anima",
});

export default function RitrattoPage() {
  return (
    <main>
      <section className="section-shell overflow-hidden pb-20 pt-8 sm:pb-24 sm:pt-10 lg:pb-28">
        <NumberBackdrop className="opacity-58" />
        <Container>
          <Reveal className="editorial-title-haze max-w-4xl">
            <p className="editorial-label mb-6 lg:mb-7">
              Ritratto dell&apos;Anima
            </p>
            <h1 className="editorial-title-depth max-w-[13ch] text-pretty font-display text-[2.95rem] leading-[1.08] sm:text-[4.1rem] lg:text-[5.3rem]">
              Ritratto dell&apos;Anima
            </h1>
            <p className="mt-7 font-display text-[1.85rem] leading-[1.25] text-ivory/90 sm:text-[2.35rem]">
              La porta d&apos;ingresso nel tuo Viaggio Emozionale.
            </p>
            <div className="mt-8 max-w-[62ch] space-y-5 text-lg leading-[1.96] text-ivory/82 sm:text-[1.08rem] lg:mt-9 lg:text-[1.12rem] lg:leading-[2.02]">
              <p>
                Una mappa personale, scritta su misura, per leggere numeri,
                simboli, archetipi, cicli di vita e direzione interiore.
              </p>
              <p>Non nasce per dirti chi sei una volta per tutte.</p>
              <p>
                Nasce per aiutarti a riconoscerti meglio, dare ordine a ciò che
                vivi e tornare a consultare una mappa nei passaggi importanti.
              </p>
            </div>
            <div className="mt-10">
              <ButtonLink href="/contatti" size="lg">
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
              <p className="editorial-label">Approfondimento del metodo</p>
              <h2 className="editorial-title-depth mt-6 max-w-[13ch] font-display text-[2.75rem] leading-[1.08] text-ivory sm:text-[4rem]">
                Più di una lettura.
              </h2>
              <div className="mt-8 grid gap-6 text-lg leading-[1.95] text-ivory/80 lg:grid-cols-2">
                <div className="space-y-5">
                  <p>
                    Il Ritratto dell&apos;Anima è la prima soglia del Metodo Il
                    Viaggio Emozionale.
                  </p>
                  <p>
                    Non è una lettura veloce, né un documento generico. È un
                    lavoro scritto e personalizzato che raccoglie le principali
                    coordinate della tua esperienza identitaria: numeri, simboli,
                    archetipi, cicli, memorie, talenti, sfide e direzione.
                  </p>
                </div>
                <div className="space-y-5">
                  <p>Il suo valore non è dirti cosa accadrà.</p>
                  <p>
                    È aiutarti a leggere con più chiarezza ciò che sei, ciò che
                    stai attraversando e ciò che dentro di te sta cercando
                    forma.
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
            <p className="editorial-label">Orientamento personale</p>
            <h2 className="editorial-title-depth mt-5 max-w-[14ch] font-display text-[2.85rem] leading-[1.08] text-ivory sm:text-[4rem]">
              Cosa ti aiuta a vedere
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {portraitBenefits.map((benefit) => (
              <SurfaceCard key={benefit.title} className="p-7 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                  {benefit.title}
                </p>
                <p className="mt-5 text-base leading-8 text-ivory/76">
                  {benefit.text}
                </p>
              </SurfaceCard>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell py-16 sm:py-24">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="editorial-label">Dentro il Ritratto</p>
            <h2 className="editorial-title-depth mt-5 font-display text-[2.85rem] leading-[1.08] text-ivory sm:text-[4rem]">
              Cosa troverai
            </h2>
          </div>
          <SurfaceCard className="p-7 sm:p-10">
            <ul className="grid gap-x-8 gap-y-4 text-base leading-8 text-ivory/80 sm:grid-cols-2 lg:grid-cols-3">
              {portraitContents.map((item) => (
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
          <div className="mb-12 max-w-3xl">
            <p className="editorial-label">Forme del Ritratto</p>
            <h2 className="editorial-title-depth mt-5 max-w-[15ch] font-display text-[2.85rem] leading-[1.08] text-ivory sm:text-[4rem]">
              Scegli come vivere il tuo Ritratto
            </h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {portraitFormats.map((format) => (
              <SurfaceCard
                key={format.title}
                className={`relative flex h-full flex-col overflow-hidden p-8 ${
                  format.featured
                    ? "border-[#d2b674]/22 bg-[linear-gradient(180deg,rgba(104,87,72,0.22),rgba(46,39,33,0.34))] shadow-[0_24px_48px_rgba(54,42,31,0.14),inset_0_1px_0_rgba(255,244,225,0.05)]"
                    : ""
                }`}
              >
                {format.featured ? (
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
                      format.featured ? "text-[#d8bf83]" : "text-gold"
                    }`}
                  >
                    {format.title}
                  </p>
                  <p
                    className={`mt-5 text-base leading-8 ${
                      format.featured ? "text-[#efe6d6]/82" : "text-ivory/76"
                    }`}
                  >
                    {format.subtitle}
                  </p>
                  {format.intro ? (
                    <p className="mt-6 text-sm font-medium uppercase tracking-[0.22em] text-gold/78">
                      {format.intro}
                    </p>
                  ) : null}
                  <ul className="mt-6 flex-1 space-y-3 text-sm leading-7 text-ivory/72 sm:text-base">
                    {format.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/70" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p
                    className={`mt-8 font-display text-4xl ${
                      format.featured ? "text-[#f2e7d5]" : "text-ivory"
                    }`}
                  >
                    {format.price}
                  </p>
                </div>
              </SurfaceCard>
            ))}
          </div>
          <SurfaceCard className="mt-8 overflow-hidden p-0 sm:mt-10">
            <div className="border-b border-gold/[0.08] px-6 py-6 sm:px-8">
              <p className="editorial-label">Confronta le edizioni</p>
              <p className="mt-4 max-w-[54ch] text-sm leading-7 text-ivory/70 sm:text-base">
                Una lettura chiara delle differenze tra le tre versioni, per
                scegliere il formato più adatto al modo in cui desideri vivere
                il tuo Ritratto.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-[760px] w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-gold/[0.08]">
                    <th className="w-[34%] px-6 py-5 text-xs font-semibold uppercase tracking-[0.26em] text-gold/82 sm:px-8">
                      Include
                    </th>
                    <th className="px-5 py-5 text-xs font-semibold uppercase tracking-[0.22em] text-ivory/74">
                      Digitale
                    </th>
                    <th className="px-5 py-5 text-xs font-semibold uppercase tracking-[0.22em] text-ivory/74">
                      Premium Stampato
                    </th>
                    <th className="px-5 py-5 text-xs font-semibold uppercase tracking-[0.22em] text-gold/90">
                      Edizione Completa
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.label} className="border-b border-gold/[0.055] last:border-b-0">
                      <th className="px-6 py-4 text-sm font-medium leading-6 text-ivory/86 sm:px-8">
                        {row.label}
                      </th>
                      <td className="px-5 py-4 text-sm leading-6 text-ivory/68">
                        {row.digital}
                      </td>
                      <td className="px-5 py-4 text-sm leading-6 text-ivory/68">
                        {row.premium}
                      </td>
                      <td className="px-5 py-4 text-sm font-medium leading-6 text-ivory/82">
                        {row.book}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SurfaceCard>
        </Container>
      </section>

      <section className="section-shell py-16 sm:py-24">
        <Container>
          <Reveal>
            <SurfaceCard className="mx-auto max-w-4xl p-8 text-center sm:p-12">
              <p className="editorial-label">Opera personale</p>
              <h2 className="editorial-title-depth mx-auto mt-6 max-w-[13ch] font-display text-[2.75rem] leading-[1.08] text-ivory sm:text-[4rem]">
                Ogni Ritratto è unico
              </h2>
              <div className="mx-auto mt-8 max-w-[58ch] space-y-5 text-lg leading-[1.95] text-ivory/80">
                <p>
                  Ogni Ritratto dell&apos;Anima è scritto interamente su misura.
                </p>
                <p>
                  Non esistono testi predefiniti, formule automatiche o
                  interpretazioni standard.
                </p>
                <p>
                  Ogni documento nasce da un lavoro di studio, analisi e
                  scrittura dedicato alla singola persona, affinché possa
                  diventare una mappa autentica da consultare nel tempo.
                </p>
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
              <h2 className="editorial-title-depth mx-auto mt-7 max-w-[17ch] whitespace-pre-line font-display text-[2.75rem] leading-[1.08] sm:text-[3.7rem]">
                Il viaggio più importante non è diventare qualcuno di diverso.
              </h2>
              <p className="mx-auto mt-8 max-w-[34ch] font-display text-[1.75rem] leading-[1.34] text-ivory/88 sm:text-[2.25rem]">
                È avere il coraggio di tornare a casa.
              </p>
              <div className="mt-10">
                <ButtonLink href="/contatti" size="lg">
                  Inizia il tuo Viaggio
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
