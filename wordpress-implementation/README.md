# WordPress / Elementor Implementation Pack

Analisi eseguita sul sito live `https://ilviaggioemozionale.it` il `2026-04-21`.

Questo pacchetto e stato preparato senza accesso diretto a WordPress admin o al codice del server. Le raccomandazioni e gli snippet sono basati sull'ispezione del markup e delle risorse live.

## Stato Attuale Verificato

### Home e struttura Elementor

- Tema: Astra `4.11.3`
- Builder: Elementor `3.29.2` + Elementor Pro `3.29.2`
- Home page: ID `17`
- Il menu verticale della hero e dentro il widget HTML Elementor `368bd2b`
- Il menu usa la classe `.menu-pergamena`

### Problemi confermati sul sito live

1. Il menu verticale non e implementato come vero sticky Elementor.
   - Attualmente usa `position: fixed` nel custom CSS del widget.
   - Nel CSS della home compaiono regole duplicate e incoerenti per `.menu-pergamena`.

2. Il CSS della home contiene errori di parsing.
   - Selettore invalido: `..menu-pergamena`
   - Regola incompleta in Numerologia: `background-color: #fdf6ec` senza `;`
   - Stringa invalida in Laboratorio: `<.style>` dentro il CSS del container `ed4dba0`

3. Alcune parti HTML della home sono malformate o fragili.
   - In `Soul Design` il markup del prezzo e rotto
   - In `Laboratorio dell'Anima` sono presenti molti `<br>` usati come spaziatura

4. SEO presente ma poco strategico.
   - Meta title e description della home sono generici
   - Open Graph e Twitter usano il logo come immagine principale
   - Lo schema `Organization` e quasi vuoto

5. Alcune pagine tecniche sono indicizzabili e non dovrebbero esserlo.
   - `carrello`
   - `pagamento`
   - `mio-account`
   - La pagina protetta `accesso-mini-percorso-non-mi-sento-piu-vivo` risulta indicizzabile

6. Prestazioni migliorabili.
   - AOS e caricato due volte: plugin WordPress e CDN
   - Sono presenti asset esterni non essenziali sopra la piega
   - La home usa molto HTML custom in widget Elementor

7. Accessibilita e fiducia.
   - I link con `target="_blank"` non hanno `rel="noopener noreferrer"`
   - Alcune immagini informative o di link hanno `alt=""`
   - Il contrasto oro su beige attuale e debole in alcuni punti

8. Incoerenza commerciale da correggere subito.
   - `Soul Design` mostra a video `Prima Sessione: €150`
   - Il link PayPal punta invece a `120EUR`

## Raccomandazione Sul Menu Sticky

### Soluzione consigliata

Non lasciare il menu dentro lo stesso widget HTML della hero.

Motivo:

- Con la struttura attuale il menu e annidato dentro `header.hero`
- Un vero `position: sticky` funziona bene quando l'elemento si trova in un contenitore che accompagna tutta la sezione di scroll
- Dentro la hero attuale, lo sticky rischia di smettere di funzionare appena termina l'header

### Implementazione consigliata in Elementor

1. Apri la Home in Elementor.
2. Nel Navigator individua il widget HTML `368bd2b`.
3. Sposta il blocco menu in un container dedicato sulla destra.
4. Assegna al container la classe CSS `menu-verticale-sticky`.
5. Applica:
   - `Advanced -> Motion Effects -> Sticky: Top`
   - `Sticky On: Desktop`
   - `Offset: 100`
6. Su tablet e mobile lascia il container non sticky.
7. Sotto i `921px`, mostra il menu come blocco statico sotto la hero, non in overlay.

### Fallback minimo se non vuoi spostare subito il menu

Se vuoi una correzione rapida senza rifare la struttura:

- elimina il CSS difettoso dal widget `368bd2b`
- usa il file `elementor-home-optimizations.css`
- mantieni `.menu-pergamena` come menu fisso solo su desktop
- su mobile rendilo statico a tutta larghezza

Nota:

- Questa soluzione e un compromesso utile, ma meno elegante e meno robusta della versione con container sticky nativo Elementor

## Dove Intervenire In Elementor

### Widget e container da ripulire

- Widget HTML hero/menu: `368bd2b`
- Widget HTML Numerologia: `89bc047`
- Widget HTML Tarocchi: `a49c25e`
- Widget HTML Soul Design: verificare widget della sezione che contiene il markup con prezzo rotto
- Widget HTML Laboratorio: `8808606`
- Container Laboratorio con CSS invalido: `ed4dba0`

### Azioni da fare

1. Elimina dal custom CSS del widget hero:
   - le regole duplicate di `.menu-pergamena`
   - il selettore `..menu-pergamena`
   - ogni `position: fixed` non piu necessario

2. Elimina dal custom CSS Numerologia:
   - la regola `.section-numerologia` senza punto e virgola corretto

3. Elimina dal custom CSS Laboratorio:
   - la stringa `<.style>`

4. Correggi l'HTML di `Soul Design`:
   - chiusura errata di `<strong>` e `<p>`
   - allinea il prezzo tra testo e link

5. Correggi l'HTML di `Laboratorio dell'Anima`:
   - sostituisci i `<br>` usati per spaziatura con margin/padding CSS

6. Aggiungi `rel="noopener noreferrer"` a tutti i link con `target="_blank"`

## SEO: Principio Chiave

Le ancore della one-page non possono avere meta title o meta description diversi.

Quindi:

- la home puo avere un solo set di meta
- per posizionare davvero `Numerologia Indiana`, `Tarocchi Archetipici`, `Soul Design` e `Laboratorio dell'Anima` servono landing page dedicate

Nel file `seo-metadata.md` trovi:

- meta per gli URL gia esistenti
- proposta di landing page dedicate per i servizi
- raccomandazione `noindex` per le pagine tecniche

## Open Graph E Twitter

### Problema attuale

- L'immagine social della home e il logo
- Questo riduce impatto visivo e click-through

### Correzione consigliata

Usa una visual 1200x630 con:

- logo piccolo
- volto o simbolo principale
- payoff breve
- texture beige/oro coerente con il brand

Interim:

- se non hai ancora una social card dedicata, usa una immagine piu narrativa del logo solo

## Performance

### Interventi prioritari

1. Mantieni AOS da una sola fonte.
   - oppure plugin WordPress
   - oppure CDN
   - non entrambi

2. Riduci l'uso di HTML widget enormi quando una sezione puo essere costruita con widget Elementor nativi.

3. Mantieni WebP e lazy loading.

4. Attiva cache e minificazione con un solo plugin di performance.
   - WP Rocket oppure LiteSpeed Cache se il server lo supporta

5. Verifica che gli script di recensioni e asset social non blocchino il rendering above the fold.

## Accessibilita

### Da fare

- contrasto minimo AA per testi e pulsanti
- focus visibile su menu e CTA
- `alt` descrittivi per immagini informative
- `alt=""` solo per immagini decorative
- `aria-label` sui link social se mostrano solo icone
- pulsanti e link con area cliccabile minima di `44px`

## Audit Finale Da Eseguire Dopo L'Implementazione

### Desktop

- il menu resta visibile durante lo scroll
- non copre titoli, testi o CTA
- i pulsanti hanno contrasto e focus chiari

### Tablet e mobile

- il menu non resta in overlay
- il menu non copre il contenuto
- CTA leggibili e cliccabili con il pollice
- spaziature coerenti tra sezioni

### SEO

- title e description corretti per ogni URL indicizzabile
- `noindex` attivo su carrello, checkout, account e pagina protetta
- Open Graph aggiornato
- schema valido e coerente con prezzi e URL

### QA funzionale

- tutti i link PayPal aprono l'importo corretto
- il prezzo mostrato coincide con il prezzo di acquisto
- nessuna regressione estetica nelle sezioni esistenti
