# Live Deployment Report

Intervento eseguito sul sito live `https://ilviaggioemozionale.it` il `2026-04-21`.

## Modifiche applicate

- Home page Elementor aggiornata tramite REST API su pagina `17`
- CSS consolidato e pulito applicato al widget hero/menu
- CSS malformato dei widget sezione rimosso dai blocchi critici
- Copy conversionale aggiornato su:
  - Chi sono
  - Numerologia Indiana
  - Tarocchi Archetipici
  - Soul Design
  - Laboratorio dell'Anima
- CTA rese piu visibili e replicate in alto e in basso nelle sezioni principali
- Link esterni `target="_blank"` corretti con `rel="noopener noreferrer"`
- Markup HTML ripulito:
  - fix struttura Soul Design
  - rimozione `<br>` usati come spaziatura nel Laboratorio
- JSON-LD `Organization` + `Service` inserito nella home
- Alt descrittivi aggiornati nei widget immagine footer/social
- SiteSEO aggiornato per:
  - home
  - shop
  - carrello
  - checkout
  - mio account
  - pagina protetta mini percorso
- SpeedyCache purgato e cache Elementor svuotata

## Follow-up layout e hero

Secondo intervento applicato dopo revisione visuale del layout:

- menu pergamena spostato in una rail sticky desktop dell'intera home
- contenuti principali recentrati su una larghezza coerente con il logo
- rimozione del vecchio offset che spingeva testi e box troppo a sinistra
- sezione Numerologia riequilibrata con box prodotto centrati e piu ampi
- sezione Tarocchi riallineata al centro con CTA uniformate
- sezione Soul Design riallineata al centro
- sezione Laboratorio dell'Anima riallineata al centro
- `Benvenut*` aggiornato a `Benvenutə`
- payoff hero aggiornato a `Sei prontə per iniziare il tuo viaggio?`

Nota tecnica:

- il payoff con schwa nella hero e stato gestito come overlay testuale sopra il logo esistente, per preservare l'asset grafico del brand senza ricostruirlo da zero

## Intervento tipografico pronto per deploy

- Plugin locale preparato:
  - `IVE Brand Typography`
- Asset pronti in `wordpress-implementation/ive-brand-typography/`
- Font scelto per i titoli:
  - `Playfair Display` peso `700`
- Ottimizzazioni incluse nel plugin:
  - file `WOFF2` locale per subset `latin` e `latin-ext`
  - `font-display: swap`
  - preload del font principale nel `head`
  - applicazione solo a `h1`, `h2`, `h3`, `h4`
  - font del corpo invariato
- Stato deploy:
  - pacchetto zip generato ma non pubblicato sul sito per blocco temporaneo di raggiungibilita dalla postazione di lavoro durante l'ultimo tentativo di upload/verifica

## Estensione Ritratto dell'Anima

Intervento live pubblicato il `2026-04-27`.

- menu hero aggiornato con nuova ancora `Ritratto dell'Anima`
- card teaser del Ritratto inserita nella sezione Numerologia
- nuova sezione dedicata `#ritratto` aggiunta in home con:
  - introduzione orientata al bisogno
  - tre livelli `Digitale`, `Stampato`, `Premium su seta`
  - CTA specifiche per acquisto o richiesta
  - raccolta indirizzo di spedizione precompilata via email per i livelli fisici
  - testimonianze selezionate dal widget Google gia presente sul sito
  - CTA finale unica per la richiesta del percorso
- schema `ProductGroup` + tre `Product` aggiunti al JSON-LD della home
- cache Elementor e SpeedyCache svuotate dopo il deploy

## Riorganizzazione Home e Numerologia

Secondo aggiornamento live pubblicato il `2026-04-27`.

- teaser del Ritratto rimosso dalla sezione Numerologia
- pulsanti home `Scarica estratto` e `Acquista PDF` della numerologia rimossi
- sezione Numerologia semplificata con testo introduttivo compatto e CTA unica `Approfondisci`
- link `Approfondisci` puntato allo Shop del sito come destinazione separata per risorse e prodotti
- card del Ritratto ridisegnate con:
  - icone dedicate per `Digitale`, `Stampato`, `Premium`
  - sfondi differenziati
  - badge `Consigliato` sul livello premium
  - CTA aggiornate a `Acquista PDF`, `Richiedi stampato`, `Richiedi premium`
- testimonianze arricchite con badge grafico coerente
- menu sticky aggiornato con evidenziazione della voce attiva durante lo scroll
- microdati numerologia allineati al nuovo layout della home, senza offerta prodotto diretta nella sezione

## Aggiornamento Soul Design

Terzo aggiornamento live pubblicato il `2026-04-27`.

- box prezzi Soul Design completamente riscritto con nuova struttura:
  - `Prima sessione Soul Design · 150 EUR`
  - `Durata: 90 minuti`
  - `Sessioni successive · 100 EUR`
  - `Durata: 60 minuti`
  - nota finale che chiarisce che il `Ritratto dell'Anima` e un libro separato e non incluso automaticamente
- rimossa dalla home ogni occorrenza di:
  - `con in omaggio Ritratto dell'Anima`
  - `Sessioni successive: 80 EUR`
- lista `Cosa ottieni` aggiornata con focus su continuita, missione dell'anima e accompagnamento concreto
- CTA Soul Design riallineate a:
  - `Richiedi accesso al percorso`
  - `Prenota la prima sessione`
- mantenuto il layout visivo esistente del box con stile chiaro e gerarchia coerente con la sezione

## Hero, Numerologia e CTA informative

Quarto aggiornamento live pubblicato il `2026-04-27`.

- hero `#chi` resa piu editoriale con:
  - box testuale rifinito con bordo gold leggero e filigrana soft via CSS
  - immagine del Bagatto ingrandita e spostata verso destra con leggero overflow su desktop
  - frase finale separata dal box e riposizionata sotto il contenuto come `hero-quote`
  - fallback responsive ordinato su tablet e mobile: testo, immagine, frase
- sezione Numerologia ridisegnata con:
  - leone sopra la pergamena come elemento dominante
  - card `card-pergamena` piu ampia e meno incorniciata
  - lista interna allargata per una lettura piu aperta
  - comportamento mobile sicuro con immagine riportata in flusso
- tutte le CTA informative della home ora puntano a `info@alessandroveneziani.it`
- oggetti email personalizzati per servizio:
  - `Richiesta informazioni`
  - `Richiesta Ritratto dell'Anima`
  - `Richiesta sessione Tarocchi Archetipici`
  - `Accesso percorso Soul Design`
- aggiunti body precompilati alle principali richieste via email
- nessun pulsante di acquisto o PayPal modificato
- schema `Organization` riallineato con email `info@alessandroveneziani.it`

## Tarocchi Archetipici

Quinto aggiornamento live pubblicato il `2026-04-27`.

- rimossa la doppia CTA dalla card descrittiva dei Tarocchi
- mantenuta una sola area di conversione nella parte alta della sezione con:
  - `Richiedi disponibilita`
  - `Prenota una sessione`
- prezzo della sessione aggiornato a `Sessione individuale · 100 EUR`
- link PayPal della CTA principale aggiornato a `100 EUR`
- CTA informativa confermata su:
  - `mailto:info@alessandroveneziani.it?subject=Richiesta sessione Tarocchi Archetipici`
- immagine del Matto resa piu dominante con classe dedicata `tarocchi-image`
- schema `Service` dei Tarocchi riallineato con prezzo `100.00`

## Rifinitura Numerologia

Sesto aggiornamento live pubblicato il `2026-04-27`.

- leone della Numerologia ridimensionato in modo piu controllato
- posizione rialzata a `top: -90px` per evitare interferenze con il testo centrale
- pergamena con `padding-top: 90px` su desktop per creare una zona di rispetto piu leggibile
- ombra del leone alleggerita per un effetto piu elegante
- micro-rotazione lieve applicata per dare presenza senza rigidita
- comportamento mobile confermato con:
  - leone riportato in flusso
  - nessun overflow laterale
  - `padding-top: 40px` sulla card

## Laboratorio dell'Anima

Settimo aggiornamento live pubblicato il `2026-04-27`.

- rimosse le CTA duplicate dal fondo del box testo
- mantenute solo le CTA principali nella parte alta della sezione
- copertina del libro resa piu dominante con classe dedicata `book-image`
- gap tra testo e immagine aumentato a `60px`
- copertina spostata leggermente verso destra e valorizzata con ombra piu presente
- fallback mobile confermato senza overflow laterale, con `margin-top: 20px`

## Linea prima dei Tarocchi

Ottavo aggiornamento live pubblicato il `2026-04-27`.

- rimossa la struttura a fasce e lasciata una sola linea gold di divisione
- markup ridotto a un unico elemento `section-divider-line`
- linea costruita con:
  - `height: 2px`
  - colore gold `#c6a75e`
  - margine `70px 0 80px` desktop
  - margine `40px 0 50px` mobile
- bordo superiore dei Tarocchi azzerato quando la sezione segue la linea, per evitare una doppia divisione visiva

## Rimozione divisore prima dei Tarocchi

Decimo aggiornamento live pubblicato il `2026-04-28`.

- rimosso completamente il divisore inserito prima della sezione `Tarocchi Archetipici`
- eliminati sia il markup `section-divider-line` sia le regole CSS collegate
- ripristinato il flusso originale della home, con i Tarocchi che iniziano direttamente dopo la sezione precedente

## Soul Design

Nono aggiornamento live pubblicato il `2026-04-28`.

- rimosse le CTA duplicate dal fondo della sezione
- nuova struttura in due livelli:
  - `soul-content-row` con card descrittiva a sinistra e figura del Mondo a destra
  - `soul-pricing-card` largo e centrato sotto la prima riga
- contenuto descrittivo separato dal blocco prezzi
- immagine `Il Mondo` resa piu presente con classe dedicata `soul-world-image`
- layout mobile aggiornato in verticale con ordine:
  - descrizione
  - immagine
  - prezzi

## Verifiche riuscite

- Home pubblica con nuovo copy e nuove CTA visibili
- Home con title e meta description personalizzati
- Open Graph home aggiornato:
  - title `Ritrova la tua mappa interiore`
  - description aggiornata
  - immagine `colline-scaled.webp`
- Shop con OG title, description e immagine aggiornati
- Header `X-Robots-Tag: noindex, follow` presente su:
  - carrello
  - mio account
  - pagina protetta mini percorso
- Plugin di supporto installato e attivato:
  - `IVE SEO Guardrails`

## Scelte prudenziali

- Il prezzo Soul Design risultava incoerente tra testo pubblico (`150 EUR`) e link PayPal (`120 EUR`)
- Per evitare un acquisto con importo non allineato, il bottone di acquisto diretto della prima sessione e stato sostituito con CTA di prenotazione via email
- Il prezzo esposto non e stato alterato in assenza di conferma esplicita

## Residui da valutare

- Il menu destro e stato reso persistente su desktop ampio tramite CSS e torna statico su tablet/mobile per non coprire i contenuti
- La pagina shop WooCommerce ora mostra title corretto e OG corretti, ma la `meta description` standard non viene ancora emessa nel markup pubblico dal template archive
- Le pagine tecniche non mostrano ancora un `<meta name="robots">` nel markup HTML, ma espongono il direttivo via header `X-Robots-Tag`, che resta valido per i crawler
- Non sono state aggiunte testimonianze reali o case study per evitare di pubblicare contenuti non verificati

## Laboratorio dell'Anima - allineamento pergamena e libro

Undicesimo aggiornamento live pubblicato il `2026-04-28`.

- uniformata la presenza visiva di pergamena testuale e copertina del libro nella sezione `Laboratorio dell'Anima`
- impostato il container desktop con colonne equilibrate e allineamento stretch
- adattata la copertina `book-image` all'altezza del blocco testo senza alterare il comportamento responsive
- mantenuto il reset automatico di altezza su tablet e mobile per evitare overflow o deformazioni

## Home premium - ritratto unico, pergamene uniformate e menu alleggerito

Dodicesimo aggiornamento live pubblicato il `2026-04-28`.

- rimossa dalla home la tabella a tre livelli del `Ritratto dell'Anima` e sostituita con una sola card premium dedicata al libro personale stampato da `350 EUR`
- eliminata la CTA finale duplicata del `Ritratto` e mantenuta una sola CTA informativa via mailto nella card principale
- aggiornato il JSON-LD della home per rimuovere le vecchie varianti `Digitale`, `Stampato` e `Premium su seta`, lasciando un solo prodotto coerente con il contenuto visibile
- uniformati bordo gold e ombra delle principali pergamene della home con un sistema visivo piu coerente
- alleggerito il menu laterale sticky con larghezza ridotta, padding piu compatto e tipografia piu minuta
- confermata la logica narrativa della home, lasciando allo Shop futuro la gestione di eventuali varianti e listini piu dettagliati

## Ritratto premium - card editoriale con visual dedicato

Tredicesimo aggiornamento live pubblicato il `2026-04-28`.

- trasformata la sezione `Ritratto dell'Anima` in una card ampia a due colonne con contenuto a sinistra e copertina a destra
- spostati titolo, prezzo e CTA dentro la card per rendere il blocco piu autorevole e meno simile a una tabella prezzi
- ampliata la lista inclusi con struttura a due colonne su desktop e una colonna su mobile
- aggiunta una chiusura editoriale e mantenuta la CTA mailto verso `info@alessandroveneziani.it`
- introdotto breakpoint dedicato sotto `900px` per impilare contenuto e visual senza perdere leggibilita
