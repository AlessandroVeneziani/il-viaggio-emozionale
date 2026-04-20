# SEO Metadata Plan

## Nota Importante

Le ancore della home, come `#numerologia` o `#tarocchi`, non possono avere meta title o meta description separati perche condividono lo stesso documento HTML della home.

Per SEO reale:

- la home deve posizionarsi come hub generale del brand
- ogni servizio chiave dovrebbe avere una landing page dedicata

## URL Esistenti

### Home

- URL: `https://ilviaggioemozionale.it/`
- Robots: `index,follow`
- Meta title: `Percorsi di crescita personale | Il Viaggio Emozionale`
- Title length: `54`
- Meta description: `Tarocchi archetipici, numerologia indiana e Soul Design per ritrovare chiarezza, missione interiore e direzione nel tuo viaggio di crescita personale.`
- Description length: `150`
- OG title: `Ritrova la tua mappa interiore`
- OG description: `Percorsi simbolici e trasformativi per chi sente che e arrivato il momento di ritrovarsi.`
- OG/Twitter image: creare una social card 1200x630 dedicata; nell'immediato usare una immagine narrativa del brand, non il logo isolato

### Shop

- URL: `https://ilviaggioemozionale.it/negozio/`
- Robots: `index,follow`
- Meta title: `Shop percorsi e PDF | Il Viaggio Emozionale`
- Title length: `43`
- Meta description: `Acquista PDF, sessioni e strumenti simbolici per il tuo viaggio interiore: numerologia indiana, tarocchi archetipici, Soul Design e risorse evolutive.`
- Description length: `150`
- OG title: `Strumenti per il tuo viaggio interiore`
- OG description: `PDF, sessioni e risorse simboliche per accompagnare la tua crescita personale.`
- OG/Twitter image: cover dei prodotti o composizione dedicata 1200x630

### Pagina protetta ACCESSO - MINI PERCORSO

- URL: `https://ilviaggioemozionale.it/accesso-mini-percorso-non-mi-sento-piu-vivo/`
- Robots consigliato: `noindex,follow`
- Motivo: pagina protetta, non utile in SERP pubblica

### Carrello

- URL: `https://ilviaggioemozionale.it/carrello/`
- Robots consigliato: `noindex,follow`
- Motivo: pagina tecnica WooCommerce

### Checkout

- URL: `https://ilviaggioemozionale.it/pagamento/`
- Robots consigliato: `noindex,follow`
- Motivo: pagina tecnica WooCommerce

### Il mio account

- URL: `https://ilviaggioemozionale.it/mio-account/`
- Robots consigliato: `noindex,follow`
- Motivo: area personale e pagina tecnica

## Landing Page Consigliate Per I Servizi

### Numerologia Indiana

- URL consigliato: `/numerologia-indiana/`
- Meta title: `Numerologia Indiana | Crescita personale`
- Title length: `40`
- Meta description: `Scopri come la numerologia indiana illumina cicli, blocchi e talenti interiori, aiutandoti a leggere la tua storia e a ritrovare direzione consapevole.`
- Description length: `151`
- OG image: copertina del PDF o visual dedicata con simboli e numeri

### Ritratto dell'Anima

- URL consigliato: `/ritratto-dell-anima/`
- Meta title: `Ritratto dell'Anima | Lettura numerologica`
- Title length: `42`
- Meta description: `Ricevi un PDF personalizzato con sigillo del nome, numeri fondamentali e guidance evolutiva per comprendere meglio il tuo disegno interiore e la tua direzione.`
- Description length: `159`
- OG image: copertina del ritratto personalizzato

### Tarocchi Archetipici

- URL consigliato: `/tarocchi-archetipici/`
- Meta title: `Tarocchi Archetipici | Sessione individuale`
- Title length: `43`
- Meta description: `Una sessione con i Tarocchi di Marsiglia per fare chiarezza nel presente, riconoscere i blocchi interiori e ritrovare una guida concreta e simbolica oggi.`
- Description length: `154`
- OG image: immagine del Matto o card dedicata della sessione

### Soul Design

- URL consigliato: `/soul-design/`
- Meta title: `Soul Design | Percorso simbolico`
- Title length: `32`
- Meta description: `Un percorso esclusivo tra simboli, numeri e intuizione per trasformare sensibilita e visione interiore in scelte piu chiare nelle relazioni e nel lavoro.`
- Description length: `153`
- OG image: immagine `mondo.png` o creativita dedicata

### Laboratorio dell'Anima

- URL consigliato: `/laboratorio-dell-anima/`
- Meta title: `Laboratorio dell'Anima | Libro e PDF`
- Title length: `36`
- Meta description: `Un libro simbolico e pratico per attraversare caduta, risalita e chiusura, con miti, esercizi e spunti per iniziare un vero viaggio interiore guidato.`
- Description length: `150`
- OG image: copertina del libro o card dedicata

## Rank Math / Yoast Setup

### Se in admin trovi gia un plugin SEO attivo

- non installare un secondo plugin SEO
- completa Titles & Meta nello stesso plugin
- aggiorna Open Graph e Twitter nello stesso plugin
- imposta `noindex` sulle pagine tecniche

### Se non c'e alcun plugin SEO

- installa `Rank Math` oppure `Yoast SEO`
- scegline uno solo
- configura:
  - title templates
  - meta description manuali per URL chiave
  - Open Graph / Twitter
  - sitemap
  - `noindex` per pagine tecniche

## Open Graph Copy Suggerita Per La Home

- OG title: `Ritrova la tua mappa interiore`
- OG description: `Percorsi di crescita personale tra numeri, simboli e archetipi per chi sente che e tempo di tornare a se.`

## Twitter Card

- Tipo consigliato: `summary_large_image`
- Immagine: la stessa social card 1200x630 usata per Open Graph
