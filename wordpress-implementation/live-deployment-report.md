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

## Chiusura home e rifiniture CSS aggiuntive

Quattordicesimo aggiornamento live pubblicato il `2026-04-28`.

- aggiunta la frase `Il tuo viaggio non finisce qui.` subito sopra il footer della home
- inserite le classi di supporto `ritratto-secondary-link`, `soul-visual`, `soul-price-box` e le relative rifiniture CSS
- applicato uno spostamento verticale controllato al visual di `Soul Design` con reset responsive sotto i breakpoint mobili
- aggiustati stile icone footer e micro-tipografia del footer nella vista home

## Nuova pagina Shop narrativa

Quindicesimo aggiornamento live pubblicato il `2026-04-28`.

- trasformata la pagina pubblica `/negozio/` in una vera landing shop narrativa, coerente con il tono premium del brand
- nuova struttura della pagina Shop:
  - hero `Scegli come iniziare il tuo viaggio`
  - blocco `Ritratto dell'Anima` con tre ingressi principali
  - blocco `Ritratto dell'Anima Premium`
  - sezione guidata `Non sai da dove partire?`
  - griglia `Altri modi per entrare nel viaggio`
  - recensioni e CTA finale
- introdotto il file CSS dedicato `live-shop-page.css` con:
  - palette oro, avorio e blu profondo
  - card con bordo gold coerente
  - griglie responsive per card, premium block, risorse e recensioni
  - rimozione della percezione da ecommerce classico in favore di un percorso guidato
- tutte le CTA della nuova pagina puntano per ora a email precompilate, in attesa di collegamento futuro con i prodotti Shop/WooCommerce definitivi
- `Digitale Guidato` evidenziato con badge `Consigliato`
- il blocco `Premium` reso il punto visivo piu importante dell'intera pagina

## Shop WooCommerce tecnico interno

Sedicesimo aggiornamento live pubblicato il `2026-04-28`.

- creata una pagina tecnica interna `Archivio Shop Interno` con slug `archivio-shop-interno`
- la pagina negozio WooCommerce e stata riassegnata internamente a questo archivio tecnico, cosi da liberare `/negozio/` per la nuova pagina narrativa pubblica
- aggiornato il plugin `IVE SEO Guardrails` alla versione `1.1.0`
- esteso il guardrail SEO per forzare `noindex, follow` anche sull'archivio shop tecnico WooCommerce tramite `is_shop()`
- verifica pubblica completata:
  - `/negozio/` risponde come pagina editoriale indicizzabile
  - `/archivio-shop-interno/` espone l'header `X-Robots-Tag: noindex, follow`

## Shop WooCommerce collegato alla landing custom

Diciassettesimo aggiornamento live pubblicato il `2026-04-28`.

- creati e verificati i prodotti WooCommerce reali necessari per la landing `/negozio/`
- prodotti pubblicati e collegati al checkout:
  - `Ritratto dell'Anima Digitale` — ID `946` — `150 EUR`
  - `Ritratto dell'Anima Digitale Guidato` — ID `947` — `200 EUR`
  - `Ritratto dell'Anima Stampato` — ID `948` — `250 EUR`
  - `Ritratto dell'Anima Premium` — ID `949` — `350 EUR`
  - `Ritratto dell'Anima Premium Guidato` — ID `950` — `420 EUR`
  - `Sessione Tarocchi Archetipici` — ID `951` — `100 EUR`
- prodotti futuri preparati come placeholder in bozza:
  - `Corso di Scrittura Automatica` — ID `952`
  - `Meditazioni Guidate` — ID `953`
  - `Laboratorio dell'Anima PDF` — ID `954`
  - `Prima Sessione Soul Design` — ID `955`
- ogni CTA acquisto nella pagina `/negozio/` ora punta al checkout WooCommerce reale tramite URL con `add-to-cart`
- rimossi i `mailto` dai prodotti acquistabili direttamente:
  - Digitale
  - Digitale Guidato
  - Stampato
  - Premium
  - Premium Guidato
  - Tarocchi Archetipici nello shop
- mantenuti i `mailto` solo per:
  - richiesta di aiuto nella scelta
  - richieste informative generiche
  - risorse non ancora commercializzate direttamente
  - percorso `Soul Design`
- i prodotti digitali risultano `virtual`
- i prodotti fisici del Ritratto risultano non virtuali e sono stati arricchiti con descrizione breve e nota acquisto che richiedono:
  - nome e cognome completi
  - data di nascita
  - eventuale indirizzo di spedizione
  - recapito telefonico quando e inclusa una guida

## Verifiche WooCommerce

Controlli eseguiti il `2026-04-28`.

- valuta WooCommerce confermata su `EUR`
- gateway pagamento rilevati nel checkout/store API:
  - `PayPal`
  - `Stripe`
  - `Stripe Klarna`
- il menu pubblico continua a puntare a `/negozio/`
- la landing `/negozio/` mantiene il layout custom premium e non usa il layout archivio WooCommerce
- verifica via Store API:
  - il prodotto digitale aggiunto al checkout espone `needs_payment: true` e `needs_shipping: false`
  - il prodotto stampato aggiunto al checkout espone `needs_payment: true`

Nota tecnica importante:

- la spedizione WooCommerce del negozio risulta attualmente disabilitata a livello store (`Località di spedizione: Disabilita spedizione e relativo calcolo`)
- per questo motivo i prodotti fisici non calcolano ancora spedizione via Woo e il flusso pratico continua a raccogliere indirizzo o preferenza di ritiro tramite follow-up email post acquisto
- non e stata forzata una configurazione di spedizione live senza una regola commerciale esplicita su costi o zone, per evitare effetti collaterali sul checkout reale

## Restyling premium della landing Shop

Diciottesimo aggiornamento live pubblicato il `2026-04-29`.

- trasformata la pagina `/negozio/` in una landing piu coerente con la home:
  - hero editoriale con kicker `SHOP PERCORSI E PDF`
  - sezione guida `Non sai da dove partire?`
  - griglia `Ritratto dell'Anima` a quattro card
  - sezione `Premium` come blocco editoriale forte
  - griglia `Altri modi per entrare nel viaggio`
  - CTA finale dedicata
- unificata la palette della pagina con:
  - blu profondo `#073B57`
  - oro `#C6A75E`
  - oro scuro `#9E7728`
  - avorio `#F8F3E8`
  - pergamena `#F4F1EA`
- rimossi dal markup pubblico gli elementi della versione precedente:
  - `shop-card-grid`
  - `guided-choice-grid`
  - recensioni nella landing shop
  - vecchi bottoni `.shop-cta` come sistema principale
- introdotto un nuovo sistema di bottoni premium `.ive-btn`
- mantenuti i checkout Woo diretti per:
  - `946` Ritratto Digitale
  - `947` Ritratto Digitale Guidato
  - `948` Ritratto Stampato
  - `949` Ritratto Premium
  - `950` Ritratto Premium Guidato
- i blocchi `Tarocchi Archetipici` e `Soul Design` nella sezione risorse puntano ora alle rispettive ancore della home:
  - `/#tarocchi`
  - `/#soul-design`

## Correzione rendering HTML pagina Shop

Diciannovesimo aggiornamento live pubblicato il `2026-04-29`.

- il contenuto custom della pagina `/negozio/` e stato incapsulato in un blocco HTML puro Gutenberg
- corretto il problema di autop di WordPress che inseriva `<p>` e `<br>` indesiderati dentro il template custom
- verifica pubblica completata:
  - il markup della landing non contiene piu paragrafi automatici indesiderati nei wrapper delle sezioni
  - le CTA acquisto mantengono i link Woo reali verso `/pagamento/?add-to-cart=...`

## Sticky header premium e sfondo numeri shop

Ventesimo aggiornamento live pubblicato il `2026-04-29`.

- home aggiornata con un nuovo sticky header desktop piu coerente con il posizionamento premium del sito:
  - logo piccolo a sinistra
  - voci `Chi sono`, `Numerologia Indiana`, `Ritratto dell'Anima`, `Tarocchi Archetipici`, `Soul Design`, `Negozio`
  - CTA finale `Inizia il tuo viaggio`
  - stile con blur leggero, fondo avorio traslucido e bordo gold sottile
- rimosso dal menu hero il link `Laboratorio dell'Anima` e sostituito con `Negozio`
- disattivata la vecchia logica della rail laterale sticky sulla home
- caricato nello stack locale di deploy l'asset `sfondo-numeri.png` e pubblicato via media library per l'uso nello shop
- pagina `/negozio/` aggiornata con sfondo globale numeri/pergamena visibile anche ai lati:
  - body `page-id-911` con background dedicato
  - wrapper Astra e contenitori principali resi trasparenti
  - sezioni `.ive-shop-section` convertite a overlay avorio semi-trasparente
  - card mantenute in pergamena piena `#F4F1EA`
- verifiche pubbliche completate:
  - home con nuovo markup `header-sticky`, `logo-sticky` e voce `Negozio`
  - shop che serve il nuovo asset `sfondo-numeri.png`
  - CTA WooCommerce dello shop ancora puntate ai prodotti reali su `/pagamento/?add-to-cart=...`

## Header e footer condivisi tra home e shop

Ventunesimo aggiornamento live pubblicato il `2026-04-29`.

- rimossa dalla home la presenza del vecchio menu verticale `menu-pergamena` nel markup pubblico
- introdotto un header sticky orizzontale condiviso tra home e `/negozio/` con:
  - logo piccolo del brand
  - link `Chi sono`, `Numerologia Indiana`, `Ritratto dell'Anima`, `Tarocchi Archetipici`, `Soul Design`, `Negozio`
  - CTA `Inizia il tuo viaggio`
  - link uniformati verso `/#chi-sono`, `/#numerologia`, `/#ritratto`, `/#tarocchi`, `/#soul-design`, `/negozio/`
- home aggiornata con ancora dedicata `#chi-sono` per allineare la navigazione tra pagine
- sezione `Ritratto dell'Anima` della home ampliata con CTA secondaria:
  - `Scopri tutte le opzioni`
  - link a `/negozio/#ritratto-shop`
- rimossa la frase `Il tuo viaggio non finisce qui.`
- eliminata la banda piena collegata alla frase e sostituita con una sola linea di separazione gold `ive-separator-gold`
- aggiunto un footer premium condiviso su home e shop con:
  - claim `Il viaggio continua anche fuori da qui.`
  - sottotesto dedicato a simboli, numeri, archetipi e trasformazione interiore
  - link `TikTok`, `YouTube`, `Email`, `WhatsApp`, `Telefono`
  - copyright `© 2026 Il Viaggio Emozionale · Alessandro Veneziani`
- nello shop i blocchi Astra standard `#masthead`, `#colophon`, titolo pagina e title bar sono stati soppressi via CSS per lasciare visibile solo il sistema custom premium
- nella home gli elementi Elementor legacy del vecchio footer sono stati nascosti per evitare doppioni visivi
- verifiche pubbliche completate con cache-busting:
  - home senza `menu-pergamena`
  - home con CTA `Scopri tutte le opzioni`
  - home con nuovo footer `ive-footer`
  - shop con header sticky custom e footer premium custom

## Rifinitura spaziatura footer home

Ventiduesimo aggiornamento live pubblicato il `2026-04-29`.

- rimossa l'area avorio residua tra la linea gold `ive-separator-gold` e il footer premium della home
- azzerato il margine inferiore del separatore gold sulla home
- rimosso il bordo-top gold del footer per lasciare come unica separazione visiva la linea già presente sopra
- mantenuto il comportamento responsive con margine inferiore azzerato anche su mobile
- verifica pubblica completata sul CSS live `post-17.css`:
  - `.page-id-17 .ive-separator-gold { margin: 60px auto 0; }`
  - `.page-id-17 .ive-footer { border-top: none; }`

## Shop: Ritratto a 3 card e hero rifinita

Ventitreesimo aggiornamento live pubblicato il `2026-04-29`.

- pagina `/negozio/` aggiornata con hero rifinita:
  - kicker sostituito da `NEGOZIO DEL VIAGGIO`
  - ridotta la distanza verticale tra hero e blocco guida
- aggiunta immagine del Matto sopra `Non sai da dove partire?`
- blocco guida aggiornato per rimuovere il riferimento alla vecchia opzione `Digitale Guidato` come card dedicata
- sezione `Scegli il tuo livello di profondita` riscritta con sole 3 card:
  - `Digitale`
  - `Stampato`
  - `Premium`
- rimossa la card `Digitale Guidato`
- inserito sotto le card il box centrale `ive-session-note` con sessione personalizzata in abbinamento al Ritratto:
  - `30 minuti — 40 EUR`
  - `60 minuti — 80 EUR`
  - nota `tariffa riservata in abbinamento al Ritratto`
- mantenuti i link WooCommerce reali:
  - Digitale `946`
  - Stampato `948`
  - Premium con ancora interna verso `#ritratto-premium`
- verifiche pubbliche completate con cache-busting:
  - `NEGOZIO DEL VIAGGIO` presente
  - `Digitale Guidato` assente
  - `choice-symbol` presente con immagine del Matto
  - `ive-session-note` presente
  - conteggio `ive-product-card` pari a `3`

## Home: rimozione menu pergamena residuo

Ventiquattresimo aggiornamento live pubblicato il `2026-04-29`.

- aggiunto un override difensivo nella home per nascondere qualsiasi menu verticale legacy residuo sotto la hero
- disattivati i selettori legacy:
  - `.menu-pergamena`
  - `.menu-verticale-sticky`
  - fallback sugli stessi selettori dentro `.elementor-element-368bd2b`
- mantenuto come unica navigazione visibile il menu sticky orizzontale premium
- home ripubblicata e cache Elementor/SpeedyCache svuotate
- verifica pubblica completata sul CSS live `post-17.css` con regola:
  - `display: none !important` sui selettori del vecchio menu pergamena

## Shop: inserimento immagine degli Amanti nella CTA finale

Venticinquesimo aggiornamento live pubblicato il `2026-04-29`.

- caricata in media library l'immagine `amanti.jpg`
- aggiunta nella pagina `/negozio/` sopra la CTA finale `Il momento giusto non arriva. Lo scegli.`
- immagine posizionata in chiusura pagina con allineamento verso destra su desktop e centrata su mobile
- mantenuto il blocco CTA finale come elemento principale, con l'immagine usata come simbolo di scelta e passaggio
- verifiche pubbliche completate con cache-busting:
  - `shop-final-symbol` presente nel markup
  - URL live `https://ilviaggioemozionale.it/wp-content/uploads/2026/04/amanti.jpg` presente nel markup
  - CTA finale ancora presente e invariata nel contenuto

## Shop: rifinitura card Premium e rimozione immagine finale

Ventiseiesimo aggiornamento live pubblicato il `2026-04-29`.

- rimosso dalla pagina `/negozio/` il blocco immagine `shop-final-symbol` con la foto degli Amanti sopra la CTA finale
- ripristinata una chiusura piu pulita e compatta del negozio
- rifinite le due card della sezione `Ritratto dell'Anima Premium`:
  - `Premium`
  - `Premium Guidato`
- migliorato l'allineamento interno delle card con layout flex verticale
- prezzi `350 EUR` e `420 EUR` resi piu forti, in blu profondo e con allineamento visivo coerente
- aggiunto piu spazio tra prezzo e bottone
- aumentato il respiro interno dei bottoni `Richiedi il Premium` e `Scegli il Premium Guidato`
- verifiche pubbliche completate con cache-busting:
  - `shop-final-symbol` assente
  - `amanti.jpg` assente
  - regola `.premium-option .product-price` presente nel sorgente pubblico
  - contenuti `350 EUR`, `420 EUR`, `Richiedi il Premium` e `Scegli il Premium Guidato` presenti
