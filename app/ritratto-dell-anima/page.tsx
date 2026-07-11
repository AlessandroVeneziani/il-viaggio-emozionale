import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { NumberBackdrop } from "@/components/ui/number-backdrop";
import { SurfaceCard } from "@/components/ui/surface-card";
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

const portraitFormats = [
  {
    title: "Ritratto Digitale",
    subtitle: "Per chi desidera iniziare subito.",
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
    title: "Ritratto Premium",
    subtitle:
      "Per chi desidera conservare il proprio Ritratto come un oggetto personale.",
    intro: "",
    features: [
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
    subtitle: "L'esperienza più completa.",
    intro: "Comprende inoltre",
    features: [
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
    premium: "Non incluso",
    book: "Non incluso",
  },
  {
    label: "Consegna digitale",
    digital: "Inclusa",
    premium: "Non inclusa",
    book: "Non inclusa",
  },
  {
    label: "Consultabile ovunque",
    digital: "Incluso",
    premium: "Oggetto fisico",
    book: "Oggetto fisico",
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
              Il libro del tuo viaggio interiore.
            </p>
            <div className="mt-8 max-w-[62ch] space-y-5 text-lg leading-[1.96] text-ivory/82 sm:text-[1.08rem] lg:mt-9 lg:text-[1.12rem] lg:leading-[2.02]">
              <p>Non un semplice documento.</p>
              <p>
                Una mappa personale che raccoglie la tua storia simbolica, le
                tue energie, i tuoi archetipi e le principali chiavi di lettura
                del tuo percorso evolutivo.
              </p>
              <p>
                Ogni Ritratto è realizzato su misura e nasce per accompagnarti
                nel tempo, ogni volta che sentirai il bisogno di ritrovare la
                tua direzione.
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
                    Il Ritratto dell&apos;Anima rappresenta l&apos;approfondimento
                    completo del Metodo Il Viaggio Emozionale.
                  </p>
                  <p>
                    Attraverso numerologia simbolica, archetipi, Tarocchi, Soul
                    Design e lettura narrativa, raccoglie in un unico volume le
                    principali coordinate della tua identità.
                  </p>
                </div>
                <div className="space-y-5">
                  <p>Non nasce per dirti chi sei.</p>
                  <p>
                    Nasce per aiutarti a riconoscerti con maggiore chiarezza.
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
                      Premium
                    </th>
                    <th className="px-5 py-5 text-xs font-semibold uppercase tracking-[0.22em] text-gold/90">
                      Libro dell&apos;Anima
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
                  Non esistono testi predefiniti o interpretazioni standard.
                </p>
                <p>
                  Ogni documento nasce da un lavoro di studio, analisi e
                  scrittura dedicato alla singola persona affinché possa
                  diventare una mappa autentica del suo percorso.
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
              <p className="text-[0.76rem] font-medium uppercase leading-relaxed tracking-[0.36em] text-gold/90">
                WELCOME BACK HOME
              </p>
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
