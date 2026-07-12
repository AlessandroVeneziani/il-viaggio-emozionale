import type { ReactNode } from "react";

import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { NumberBackdrop } from "@/components/ui/number-backdrop";
import { SurfaceCard } from "@/components/ui/surface-card";
import { buildMetadata } from "@/lib/metadata";

const roots = [
  {
    title: "Pitagora",
    text: "Il numero non misura soltanto: rivela una struttura.",
  },
  {
    title: "Oriente",
    text: "Il numero orienta il movimento energetico e il processo ciclico del cambiamento.",
  },
  {
    title: "Archetipi",
    text: "Le immagini interiori aiutano la persona a riconoscere quale forma sta incarnando.",
  },
  {
    title: "Immaginazione simbolica",
    text: "L'immaginazione non è evasione, ma una forma di conoscenza.",
  },
  {
    title: "Viaggio dell'Eroe",
    text: "Ogni trasformazione attraversa chiamata, soglia, prove, crisi, rivelazione e ritorno.",
  },
  {
    title: "Arcani",
    text: "Gli Arcani rendono visibile la scena interiore, senza funzione predittiva.",
  },
] as const;

const vibrations = [
  ["1", "La chiamata"],
  ["2", "La soglia"],
  ["3", "L'espansione creativa"],
  ["4", "Il limite e la struttura"],
  ["5", "La crisi e il cambiamento"],
  ["6", "La scelta relazionale"],
  ["7", "L'attraversamento dell'ombra"],
  ["8", "Il riallineamento del potere personale"],
  ["9", "La rivelazione"],
  ["11 / 22 / 33", "Le porte iniziatiche"],
] as const;

const gates = [
  {
    title: "Terra",
    keywords: "corpo, materia, limite, struttura, stabilità",
    text: "È la porta delle abitudini, della realtà concreta, delle radici e dei confini.",
  },
  {
    title: "Fuoco",
    keywords: "desiderio, volontà, decisione, forza vitale",
    text: "È la porta dell'azione, del coraggio, dell'impulso creativo e della scelta.",
  },
  {
    title: "Acqua",
    keywords: "emozione, vulnerabilità, relazione, memoria e ombra",
    text: "È la porta dell'ascolto profondo, delle ferite, dei legami e della capacità di sentire.",
  },
  {
    title: "Aria",
    keywords: "visione, linguaggio, senso, immaginazione e mito personale",
    text: "È la porta della comprensione, della narrazione e della direzione simbolica.",
  },
] as const;

const methodManifesto = [
  "Il numero indica dove si trova la persona.",
  "L'archetipo mostra quale immagine sta incarnando.",
  "L'Arcano rende visibile la scena interiore.",
  "La Porta indica come si muove l'energia.",
  "Il Viaggio dell'Eroe offre la trama.",
  "Il corpo segnala la verità del processo.",
] as const;

const notMethod = [
  "Non è terapia e non sostituisce un percorso clinico, psicologico o medico.",
  "Non è cartomanzia.",
  "Non è predizione.",
  "Non è intrattenimento spirituale.",
  "Non è una lettura fatalistica dell'identità.",
  "Non è motivazione generica.",
  "Non è un sistema che dice alla persona cosa deve fare.",
] as const;

const audience = [
  "A chi sente che una fase della vita si è chiusa, ma non sa ancora quale forma dare alla successiva.",
  "A chi vive una crisi relazionale, professionale o identitaria e non vuole ridurla solo a un problema, ma comprenderne il significato.",
  "A chi sente di avere dentro molto più di ciò che sta vivendo.",
  "A chi desidera uno spazio serio, simbolico e concreto per ritrovare orientamento.",
  "A chi non cerca una risposta preconfezionata, ma una mappa per attraversare meglio il proprio passaggio.",
] as const;

export const metadata = {
  ...buildMetadata({
    title: "Il Metodo | Il Viaggio Emozionale, Soul Design e Ritratto dell'Anima",
    description:
      "Scopri il metodo de Il Viaggio Emozionale: un percorso simbolico e identitario che integra numerologia evolutiva, archetipi, Soul Design e Ritratto dell'Anima per comprendere i passaggi della vita e ritrovare orientamento.",
    path: "/il-metodo",
    absoluteTitle: true,
  }),
  keywords: [
    "metodo Il Viaggio Emozionale",
    "Ritratto dell'Anima",
    "Soul Design",
    "percorso simbolico",
    "orientamento personale",
    "archetipi e numerologia",
    "numerologia evolutiva",
    "viaggio dell'eroe",
    "trasformazione personale",
    "metodo simbolico",
    "mappa interiore",
    "crescita personale simbolica",
  ],
};

function EditorialBlock({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="section-shell py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <Reveal className="editorial-title-haze">
            {eyebrow ? <p className="editorial-label">{eyebrow}</p> : null}
            <h2 className="editorial-title-depth mt-5 max-w-[13ch] font-display text-[2.65rem] leading-[1.08] text-ivory sm:text-[3.65rem]">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="space-y-5 border-t border-gold/10 pt-7 text-base leading-[1.95] text-ivory/80 sm:text-[1.06rem]">
              {children}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export default function MethodPage() {
  return (
    <main>
      <section className="section-shell overflow-hidden pb-20 pt-8 sm:pb-24 sm:pt-10 lg:pb-28">
        <NumberBackdrop className="opacity-58" />
        <Container>
          <Reveal className="editorial-title-haze max-w-5xl">
            <p className="editorial-label mb-6 lg:mb-7">
              Metodo simbolico contemporaneo
            </p>
            <h1 className="editorial-title-depth max-w-[14ch] text-pretty font-display text-[2.95rem] leading-[1.06] sm:text-[4.1rem] lg:text-[5.35rem]">
              Il Metodo del Viaggio Emozionale
            </h1>
            <p className="mt-7 max-w-[32ch] font-display text-[1.8rem] leading-[1.28] text-ivory/90 sm:text-[2.35rem]">
              Un linguaggio simbolico, antropologico e identitario per
              comprendere chi stai diventando.
            </p>
            <div className="mt-9 max-w-[68ch] space-y-5 text-lg leading-[1.95] text-ivory/82 sm:text-[1.08rem] lg:text-[1.12rem] lg:leading-[2.02]">
              <p>
                Il Viaggio Emozionale nasce da una domanda semplice e radicale:
                che cosa guida davvero la trasformazione di un essere umano?
              </p>
              <p>
                Non sempre ciò che viviamo può essere compreso soltanto come un
                problema da risolvere, un sintomo da correggere o un
                comportamento da modificare.
              </p>
              <p>
                Ci sono momenti della vita in cui qualcosa cambia più in
                profondità. Una relazione finisce. Una direzione non ci
                appartiene più. Un desiderio torna a farsi sentire. Una parte
                di noi, rimasta a lungo silenziosa, chiede spazio.
              </p>
              <p>
                In quei momenti non basta capire &quot;cosa è successo&quot;.
                Serve comprendere quale passaggio stiamo attraversando.
              </p>
              <p>
                Il Viaggio Emozionale è un metodo simbolico, antropologico e
                identitario che aiuta a leggere i passaggi della vita attraverso
                numerologia evolutiva, archetipi, immagini interiori, cicli,
                corpo, emozioni e direzione concreta.
              </p>
              <p>Non nasce per prevedere il futuro. Nasce per restituire orientamento.</p>
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/ritratto-dell-anima" size="lg">
                Scopri il Ritratto dell&apos;Anima
              </ButtonLink>
              <ButtonLink href="/contatti" variant="secondary" size="lg">
                Richiedi una sessione introduttiva
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>

      <EditorialBlock title="Che cos'è Il Viaggio Emozionale">
        <p>
          Il Viaggio Emozionale è un metodo di orientamento personale che
          integra strumenti simbolici e narrativi per aiutare la persona a
          comprendere il proprio momento di trasformazione.
        </p>
        <p>
          Non lavora sulla persona come se fosse un problema da aggiustare.
          Lavora sul passaggio che sta vivendo.
        </p>
        <p>
          Ogni crisi, ogni scelta, ogni blocco e ogni fase di cambiamento
          possono essere letti come una soglia: un punto di transizione tra una
          forma di sé che non basta più e una nuova immagine interiore che cerca
          di emergere.
        </p>
        <p>
          Per questo il metodo utilizza numeri, archetipi, Arcani, immagini,
          corpo e racconto personale come strumenti di lettura.
        </p>
        <p>Non per definire la persona. Ma per aiutarla a orientarsi.</p>
      </EditorialBlock>

      <EditorialBlock title="La trasformazione non è solo guarigione">
        <p>
          La psicologia contemporanea ha offerto strumenti fondamentali per
          comprendere l&apos;individuo, la storia personale, le ferite, le dinamiche
          relazionali e la struttura dell&apos;Io.
        </p>
        <p>
          Il Viaggio Emozionale non si pone in opposizione a questo lavoro. Si
          colloca in un altro spazio.
        </p>
        <p>
          Parte dall&apos;idea che la trasformazione umana non sia soltanto un
          processo di guarigione, ma anche un processo di significazione.
        </p>
        <p>
          A volte una persona non ha bisogno solo di essere &quot;aggiustata&quot;.
          Ha bisogno di ritrovare una mappa. Di comprendere il senso di ciò che
          sta vivendo. Di dare un nome alla soglia che sta attraversando. Di
          riconoscere quale parte di sé sta cercando di nascere.
        </p>
        <p>
          Per questo il metodo utilizza un linguaggio simbolico: perché il
          simbolo non riduce l&apos;esperienza, la apre.
        </p>
      </EditorialBlock>

      <section className="section-shell py-16 sm:py-24">
        <Container>
          <div className="mb-12 max-w-4xl">
            <p className="editorial-label">Struttura del metodo</p>
            <h2 className="editorial-title-depth mt-5 max-w-[13ch] font-display text-[2.65rem] leading-[1.08] text-ivory sm:text-[3.65rem]">
              Le radici del metodo
            </h2>
            <div className="mt-8 max-w-[68ch] space-y-5 text-base leading-[1.95] text-ivory/80 sm:text-[1.06rem]">
              <p>
                Il Metodo del Viaggio Emozionale integra prospettive diverse in
                un&apos;unica struttura di lettura.
              </p>
              <p>
                Non è un insieme casuale di strumenti. È un modello costruito
                intorno a una domanda centrale: come si orienta una persona
                dentro un passaggio di trasformazione?
              </p>
              <p>
                Le sue radici principali sono la numerologia tradizionale, il
                pensiero pitagorico, le tradizioni orientali, la psicologia
                analitica, l&apos;immaginazione simbolica, la mitologia comparata e
                il Viaggio dell&apos;Eroe.
              </p>
              <p>
                Questi linguaggi vengono integrati in una forma contemporanea,
                accessibile e concreta.
              </p>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {roots.map((root) => (
              <SurfaceCard key={root.title} className="p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                  {root.title}
                </p>
                <p className="mt-5 text-base leading-8 text-ivory/78">
                  {root.text}
                </p>
              </SurfaceCard>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal className="editorial-title-haze">
              <p className="editorial-label">Numerologia evolutiva</p>
              <h2 className="editorial-title-depth mt-5 max-w-[13ch] font-display text-[2.65rem] leading-[1.08] text-ivory sm:text-[3.65rem]">
                Il numero come orientamento
              </h2>
              <div className="mt-8 space-y-5 text-base leading-[1.95] text-ivory/80 sm:text-[1.04rem]">
                <p>
                  Nel pensiero pitagorico il numero non è soltanto una
                  quantità. Non serve solo a misurare.
                </p>
                <p>Il numero rivela una struttura.</p>
                <p>
                  Questa intuizione è alla base del metodo: ogni numero può
                  essere letto come una qualità dell&apos;esperienza umana, una forma
                  del movimento interiore, una postura esistenziale.
                </p>
                <p>
                  Nelle tradizioni numerologiche orientali, in particolare in
                  quelle indiane, il numero non descrive soltanto una struttura:
                  indica anche una direzione.
                </p>
                <p>Se in Grecia il numero rivela, in India il numero orienta.</p>
                <p>
                  Nel Viaggio Emozionale la numerologia evolutiva non definisce
                  la persona in modo rigido. Non dice &quot;chi sei&quot; una
                  volta per tutte.
                </p>
                <p>
                  Suggerisce piuttosto una matrice da osservare: un modo
                  possibile in cui energia, desiderio, relazione, scelta o
                  conflitto prendono forma nella vita.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <SurfaceCard className="p-8 sm:p-10">
                <p className="editorial-label">Atlante delle Vibrazioni</p>
                <div className="mt-7 grid gap-3">
                  {vibrations.map(([number, meaning]) => (
                    <div
                      key={number}
                      className="grid grid-cols-[5rem_1fr] items-baseline gap-4 border-t border-gold/[0.08] pt-4"
                    >
                      <span className="font-display text-3xl leading-none text-gold/82">
                        {number}
                      </span>
                      <span className="text-base leading-7 text-ivory/78">
                        {meaning}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-8 border-t border-gold/[0.08] pt-6 text-base leading-8 text-ivory/76">
                  Questa mappa non è una gabbia. È un atlante simbolico. Serve a
                  comprendere dove una persona si trova nel proprio movimento
                  trasformativo.
                </p>
              </SurfaceCard>
            </Reveal>
          </div>
        </Container>
      </section>

      <EditorialBlock title="Archetipi, immagini interiori e Viaggio dell'Eroe">
        <p>
          Il numero offre una struttura. Ma la trasformazione non avviene solo
          attraverso la struttura.
        </p>
        <p>Avviene quando una persona riesce a vedersi in una nuova immagine.</p>
        <p>
          Nel Viaggio Emozionale, gli archetipi sono immagini profonde che
          aiutano la persona a riconoscere quale forma interiore sta incarnando:
          il cercatore, il custode, l&apos;amante, il guerriero, il viandante, il
          sovrano, il guaritore, il folle, l&apos;iniziato.
        </p>
        <p>L&apos;archetipo non viene usato come etichetta. Viene usato come specchio.</p>
        <p>
          A questo si unisce il modello del Viaggio dell&apos;Eroe, inteso come
          grammatica simbolica del cambiamento: chiamata, soglia, prove, crisi,
          rivelazione, ritorno.
        </p>
        <p>Ogni trasformazione profonda segue un movimento.</p>
        <p>
          C&apos;è una chiamata. C&apos;è una soglia da attraversare. Ci sono prove che
          costringono a cambiare sguardo. C&apos;è una crisi che rompe una forma
          precedente. C&apos;è una rivelazione. E poi c&apos;è il ritorno: il momento in
          cui ciò che è stato compreso deve diventare vita concreta.
        </p>
      </EditorialBlock>

      <EditorialBlock title="Gli Arcani come teatro simbolico della psiche">
        <p>
          Nel metodo, gli Arcani vengono utilizzati come immagini operative, non
          come strumenti di predizione.
        </p>
        <p>
          Non servono a &quot;sapere cosa accadrà&quot;. Servono a rendere
          visibile una scena interiore.
        </p>
        <p>
          Il Matto può raccontare una chiamata. La Papessa può indicare una
          soglia di ascolto. Gli Amanti possono mostrare una scelta. La Forza
          può parlare dell&apos;integrazione dell&apos;ombra. La Torre può rappresentare
          il crollo di una forma non più autentica. Il Giudizio può aprire una
          rinascita. Il Mondo può indicare una reintegrazione.
        </p>
        <p>
          Gli Arcani diventano così un teatro simbolico della psiche: immagini
          attraverso cui una persona può riconoscere il momento che sta vivendo.
        </p>
        <p>Non decidono per noi. Ci aiutano a vedere.</p>
      </EditorialBlock>

      <section className="section-shell py-16 sm:py-24">
        <Container>
          <div className="mb-12 max-w-4xl">
            <p className="editorial-label">Geografia interiore</p>
            <h2 className="editorial-title-depth mt-5 max-w-[13ch] font-display text-[2.65rem] leading-[1.08] text-ivory sm:text-[3.65rem]">
              Le Quattro Porte del Viaggio
            </h2>
            <p className="mt-8 max-w-[64ch] text-base leading-[1.95] text-ivory/80 sm:text-[1.06rem]">
              Ogni trasformazione attraversa quattro grandi dimensioni
              dell&apos;esperienza umana. Nel Viaggio Emozionale queste dimensioni
              sono chiamate Le Quattro Porte.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {gates.map((gate) => (
              <SurfaceCard key={gate.title} className="p-8">
                <p className="font-display text-4xl text-ivory">{gate.title}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-gold/82">
                  {gate.keywords}
                </p>
                <p className="mt-6 text-base leading-8 text-ivory/76">
                  {gate.text}
                </p>
              </SurfaceCard>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-[62ch] text-center font-display text-[1.55rem] leading-[1.42] text-ivory/86 sm:text-[2rem]">
            Queste quattro porte non vengono attraversate una volta per tutte.
            Si ripresentano ciclicamente, ogni volta che la vita chiede un
            nuovo livello di verità.
          </p>
        </Container>
      </section>

      <section className="section-shell py-16 sm:py-24">
        <Container>
          <Reveal>
            <SurfaceCard className="mx-auto max-w-5xl p-8 text-center sm:p-12 lg:p-14">
              <p className="editorial-label">Manifesto operativo</p>
              <h2 className="editorial-title-depth mx-auto mt-6 max-w-[13ch] font-display text-[2.7rem] leading-[1.08] text-ivory sm:text-[3.85rem]">
                Come funziona il metodo
              </h2>
              <div className="mx-auto mt-10 grid max-w-3xl gap-4 text-left">
                {methodManifesto.map((line) => (
                  <p
                    key={line}
                    className="border-t border-gold/[0.08] pt-4 font-display text-[1.45rem] leading-[1.38] text-ivory/90 sm:text-[1.9rem]"
                  >
                    {line}
                  </p>
                ))}
              </div>
              <div className="mx-auto mt-10 max-w-[68ch] space-y-5 text-left text-base leading-[1.95] text-ivory/78 sm:text-[1.05rem]">
                <p>
                  Tutto questo viene tradotto in una mappa chiara, leggibile e
                  utilizzabile.
                </p>
                <p>
                  Perché il punto non è accumulare simboli. Il punto è
                  comprendere cosa quei simboli stanno dicendo della vita reale
                  di una persona: le sue scelte, i suoi blocchi, i suoi
                  desideri, le sue relazioni, il suo lavoro, il suo modo di
                  abitare il mondo.
                </p>
                <p>Il Viaggio Emozionale non sostituisce la scelta personale. La prepara.</p>
                <p>
                  Aiuta a vedere meglio. A nominare ciò che prima era confuso.
                  A distinguere ciò che appartiene davvero da ciò che è stato
                  solo ereditato, imitato o subito.
                </p>
              </div>
            </SurfaceCard>
          </Reveal>
        </Container>
      </section>

      <EditorialBlock title="Soul Design: dare forma alla propria direzione">
        <p>Il cuore applicativo del metodo è il Soul Design.</p>
        <p>
          Soul Design significa progettare una forma più coerente della propria
          esperienza interiore ed esteriore.
        </p>
        <p>
          Non si tratta di &quot;trovare se stessi&quot; in modo astratto. Si
          tratta di comprendere quale forma la propria identità profonda, il
          proprio desiderio e la propria direzione stanno cercando di prendere
          nella vita concreta.
        </p>
        <p>
          Il Soul Design lavora sull&apos;integrazione delle parti: la mente che
          interpreta, il cuore che sente, il corpo che desidera, i piedi che
          scelgono una direzione.
        </p>
        <p>
          Molte persone non sono ferme perché non hanno risposte. Sono ferme
          perché le loro parti interiori non stanno andando nella stessa
          direzione.
        </p>
        <p>
          Una parte vuole sicurezza. Una parte vuole libertà. Una parte desidera
          amare. Una parte ha paura di esporsi. Una parte immagina una vita
          diversa. Una parte continua a restare dove conosce già il dolore.
        </p>
        <p>
          Il Soul Design aiuta a osservare queste parti, riconoscerle e
          rimetterle in dialogo.
        </p>
        <p>
          La direzione nasce quando l&apos;interiorità smette di essere una guerra
          interna e comincia a diventare una regia.
        </p>
        <div className="pt-3">
          <ButtonLink href="/soul-design" variant="secondary">
            Approfondisci il Soul Design
          </ButtonLink>
        </div>
      </EditorialBlock>

      <EditorialBlock title="Il Ritratto dell'Anima come prima mappa del percorso">
        <p>
          Il Ritratto dell&apos;Anima è una delle prime applicazioni concrete del
          metodo.
        </p>
        <p>
          È una mappa narrativa e simbolica che aiuta la persona a riconoscere
          la propria matrice numerologica, l&apos;archetipo dominante, la fase del
          viaggio che sta attraversando, la porta energetica più attiva, i
          talenti, le sfide, i cicli, le immagini trasformative e le domande
          evolutive del proprio percorso.
        </p>
        <p>Non è una lettura predittiva. Non dice cosa accadrà.</p>
        <p>È uno specchio strutturato.</p>
        <p>
          Aiuta la persona a vedersi da un altro punto di vista, a dare forma a
          ciò che sente in modo confuso, a riconoscere la propria fase di
          trasformazione e a comprendere quale direzione può iniziare a
          prendere.
        </p>
        <p>
          La trasformazione spesso comincia quando una persona riesce finalmente
          a dirsi:
        </p>
        <p className="font-display text-[1.6rem] leading-[1.4] text-ivory/90 sm:text-[2rem]">
          &quot;Ecco. Questo parla di me. Questo dà un nome a ciò che sto
          vivendo.&quot;
        </p>
        <div className="pt-3">
          <ButtonLink href="/ritratto-dell-anima" variant="secondary">
            Scopri il Ritratto dell&apos;Anima
          </ButtonLink>
        </div>
      </EditorialBlock>

      <section className="section-shell py-16 sm:py-24">
        <Container>
          <div className="mb-12 max-w-4xl">
            <p className="editorial-label">Confini del metodo</p>
            <h2 className="editorial-title-depth mt-5 max-w-[13ch] font-display text-[2.65rem] leading-[1.08] text-ivory sm:text-[3.65rem]">
              Cosa non è Il Viaggio Emozionale
            </h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <SurfaceCard className="p-8 sm:p-10">
              <div className="grid gap-3">
                {notMethod.map((item) => (
                  <p
                    key={item}
                    className="border-t border-gold/[0.08] pt-4 text-base leading-8 text-ivory/78"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </SurfaceCard>
            <SurfaceCard className="p-8 sm:p-10">
              <p className="font-display text-[2.1rem] leading-[1.18] text-ivory sm:text-[2.65rem]">
                È un metodo di orientamento simbolico.
              </p>
              <p className="mt-7 text-base leading-[1.95] text-ivory/78 sm:text-[1.04rem]">
                Accompagna la persona a leggere meglio il proprio momento, a
                riconoscere le immagini che la abitano, a comprendere quali
                parti interiori chiedono ascolto e a trasformare questa
                comprensione in una direzione più chiara.
              </p>
            </SurfaceCard>
          </div>
        </Container>
      </section>

      <section className="section-shell py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
            <Reveal className="editorial-title-haze">
              <p className="editorial-label">Per chi attraversa una soglia</p>
              <h2 className="editorial-title-depth mt-5 max-w-[14ch] font-display text-[2.65rem] leading-[1.08] text-ivory sm:text-[3.65rem]">
                A chi è rivolto il Metodo del Viaggio Emozionale
              </h2>
              <p className="mt-8 max-w-[44ch] text-base leading-[1.95] text-ivory/78 sm:text-[1.05rem]">
                Il metodo è rivolto a chi sta attraversando una soglia.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="grid gap-4">
                {audience.map((item) => (
                  <SurfaceCard key={item} className="p-6">
                    <p className="text-base leading-8 text-ivory/78">{item}</p>
                  </SurfaceCard>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section-shell pb-28 pt-16 sm:pb-36 sm:pt-24">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <div className="gold-divider mb-10" />
              <p className="editorial-label">Welcome Back Home</p>
              <h2 className="editorial-title-depth mx-auto mt-6 max-w-[15ch] font-display text-[2.75rem] leading-[1.08] text-ivory sm:text-[3.85rem]">
                Inizia il tuo Viaggio Emozionale
              </h2>
              <div className="mx-auto mt-8 max-w-[62ch] space-y-5 text-base leading-[1.95] text-ivory/78 sm:text-[1.05rem]">
                <p>
                  Il Viaggio Emozionale nasce per restituire alla trasformazione
                  umana un linguaggio più ampio.
                </p>
                <p>
                  Un linguaggio capace di unire struttura e immaginazione.
                  Numero e immagine. Mito e corpo. Individuo e cultura.
                  Interiorità e scelta concreta.
                </p>
                <p>Non dice chi sei in modo definitivo.</p>
                <p>Ti aiuta a comprendere chi stai diventando.</p>
                <p>
                  Perché a volte il primo passo non è cambiare subito vita. È
                  riconoscere la soglia su cui ti trovi.
                </p>
                <p>E attraversarla con più senso, dignità e orientamento.</p>
                <p>
                  Il primo passo può essere il Ritratto dell&apos;Anima: una mappa
                  simbolica e narrativa per comprendere il momento che stai
                  attraversando e riconoscere la direzione che sta cercando di
                  emergere.
                </p>
              </div>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <ButtonLink href="/ritratto-dell-anima" size="lg">
                  Scopri il Ritratto dell&apos;Anima
                </ButtonLink>
                <ButtonLink href="/contatti" variant="secondary" size="lg">
                  Scrivimi per orientarti
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
