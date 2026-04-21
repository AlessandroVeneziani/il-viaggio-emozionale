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
