#!/usr/bin/env python3
"""
Apply the prepared WordPress / Elementor improvements to the live site.

Usage:
  WP_USERNAME='...' WP_PASSWORD='...' python3 wordpress-implementation/apply_live_changes.py

The script:
1. Logs into wp-admin with cookie auth.
2. Backs up the current Elementor payload for page 17.
3. Replaces the broken widget CSS with a consolidated stylesheet.
4. Updates the home page HTML widgets with cleaner copy, safer links and schema.
5. Saves SiteSEO metadata for the home, shop and technical pages.
6. Clears Elementor cache and purges SpeedyCache when available.
"""

from __future__ import annotations

import html
import http.cookiejar
import json
import os
import re
import sys
import urllib.parse
import urllib.request
from dataclasses import dataclass
from datetime import datetime
from pathlib import Path
from typing import Any


BASE_URL = "https://ilviaggioemozionale.it"
USER_AGENT = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15"

HOME_PAGE_ID = 17
SHOP_PAGE_ID = 911
NOINDEX_PAGE_IDS = {
    912: "Carrello",
    913: "Pagamento",
    914: "Il mio account",
    921: "ACCESSO - MINI PERCORSO",
}

WORKDIR = Path(__file__).resolve().parent
BACKUP_DIR = WORKDIR / "backups"
CSS_PATH = WORKDIR / "live-home-page.css"
SCHEMA_PATH = WORKDIR / "schema" / "service-organization.jsonld"


@dataclass
class Session:
    opener: urllib.request.OpenerDirector
    username: str
    password: str


def require_env(name: str) -> str:
    value = os.environ.get(name)
    if not value:
        raise SystemExit(f"Missing required environment variable: {name}")
    return value


def build_session(username: str, password: str) -> Session:
    jar = http.cookiejar.CookieJar()
    opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(jar))
    data = urllib.parse.urlencode(
        {
            "log": username,
            "pwd": password,
            "wp-submit": "Accedi",
            "redirect_to": BASE_URL + "/wp-admin/",
            "testcookie": "1",
        }
    ).encode("utf-8")
    request = urllib.request.Request(
        BASE_URL + "/wp-login.php",
        data=data,
        headers={"Content-Type": "application/x-www-form-urlencoded", "User-Agent": USER_AGENT},
    )
    opener.open(request).read()
    return Session(opener=opener, username=username, password=password)


def get_text(url: str, session: Session, referer: str | None = None) -> str:
    headers = {"User-Agent": USER_AGENT}
    if referer:
        headers["Referer"] = referer
    request = urllib.request.Request(url, headers=headers)
    return session.opener.open(request).read().decode("utf-8", "ignore")


def get_rest_nonce(session: Session, post_id: int) -> str:
    edit_url = f"{BASE_URL}/wp-admin/post.php?post={post_id}&action=edit"
    html_text = get_text(edit_url, session)
    match = re.search(r"wpApiSettings\s*=\s*(\{.*?\})\s*;", html_text, re.S)
    if not match:
        raise RuntimeError("Could not find wpApiSettings nonce")
    return json.loads(match.group(1))["nonce"]


def rest_get_page(session: Session, post_id: int, nonce: str) -> dict[str, Any]:
    edit_url = f"{BASE_URL}/wp-admin/post.php?post={post_id}&action=edit"
    request = urllib.request.Request(
        f"{BASE_URL}/wp-json/wp/v2/pages/{post_id}?context=edit",
        headers={
            "User-Agent": USER_AGENT,
            "X-WP-Nonce": nonce,
            "Referer": edit_url,
            "Accept": "application/json",
        },
    )
    return json.loads(session.opener.open(request).read().decode("utf-8"))


def rest_update_page(session: Session, post_id: int, nonce: str, payload: dict[str, Any]) -> dict[str, Any]:
    edit_url = f"{BASE_URL}/wp-admin/post.php?post={post_id}&action=edit"
    request = urllib.request.Request(
        f"{BASE_URL}/wp-json/wp/v2/pages/{post_id}",
        data=json.dumps(payload).encode("utf-8"),
        headers={
            "User-Agent": USER_AGENT,
            "X-WP-Nonce": nonce,
            "Referer": edit_url,
            "Content-Type": "application/json; charset=utf-8",
            "Accept": "application/json",
        },
        method="POST",
    )
    return json.loads(session.opener.open(request).read().decode("utf-8"))


def clear_elementor_cache(session: Session, nonce: str) -> None:
    request = urllib.request.Request(
        f"{BASE_URL}/wp-json/elementor/v1/cache",
        headers={
            "User-Agent": USER_AGENT,
            "X-WP-Nonce": nonce,
            "Referer": BASE_URL + "/wp-admin/",
            "Accept": "application/json",
        },
        method="DELETE",
    )
    session.opener.open(request).read()


def purge_speedycache(session: Session) -> str | None:
    admin_html = get_text(BASE_URL + "/wp-admin/", session)
    match = re.search(r"admin-post\.php\?action=speedycache_delete_cache[^\"']+", admin_html)
    if not match:
        return None
    purge_url = BASE_URL + "/wp-admin/" + html.unescape(match.group(0))
    request = urllib.request.Request(purge_url, headers={"User-Agent": USER_AGENT, "Referer": BASE_URL + "/wp-admin/"})
    session.opener.open(request).read()
    return purge_url


def save_backup(name: str, payload: dict[str, Any]) -> Path:
    BACKUP_DIR.mkdir(parents=True, exist_ok=True)
    timestamp = datetime.now().strftime("%Y%m%d-%H%M%S")
    path = BACKUP_DIR / f"{timestamp}-{name}.json"
    path.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
    return path


def read_schema_string() -> str:
    schema = json.loads(SCHEMA_PATH.read_text(encoding="utf-8"))
    return json.dumps(schema, ensure_ascii=False, separators=(",", ":"))


def build_widget_html() -> dict[str, str]:
    schema_json = read_schema_string()

    hero_html = """
<header class="hero" data-aos="fade-down">
  <div class="hero__container">
    <div class="hero__brand" data-aos="zoom-in" data-aos-delay="250">
      <img
        src="https://ilviaggioemozionale.it/wp-content/uploads/2025/06/logo-new.png"
        alt="Il Viaggio Emozionale"
        class="hero__logo"
        loading="eager"
        decoding="async"
      >
    </div>

    <nav class="menu-pergamena" aria-label="Percorsi e sezioni del sito" data-aos="fade-up" data-aos-delay="450">
      <ul>
        <li><a href="#chi">Chi sono</a></li>
        <li><a href="#numerologia">Numerologia Indiana</a></li>
        <li><a href="#ritratto">Ritratto dell&apos;Anima</a></li>
        <li><a href="#tarocchi">Tarocchi Archetipici</a></li>
        <li><a href="#soul-design">Soul Design</a></li>
        <li><a href="#lab">Laboratorio dell&apos;Anima</a></li>
      </ul>
    </nav>
  </div>
</header>

<section id="chi" class="chi-section" data-aos="fade-up">
  <div class="chi-shell">
    <div class="chi-content">
      <div class="chi-text hero-box" data-aos="fade-left" data-aos-delay="200">
        <h2>Un accompagnamento simbolico per quando senti di esserti perso</h2>
        <p class="subtitle">Alessandro Veneziani · Designer dell&apos;Anima e Ricercatore Simbolico</p>
        <p>Benvenutə nel mio sito. Integro Tarocchi evolutivi, numerologia, comunicazione consapevole e lettura simbolica per aiutarti a ritrovare una direzione chiara quando senti che qualcosa dentro si e fermato.</p>
        <p>Ci sono momenti in cui continui a fare, decidere e andare avanti, ma manca una mappa interiore che ti aiuti a leggere quello che stai vivendo. Il mio lavoro nasce proprio qui: trasformare simboli e intuizioni in passi concreti.</p>
        <div class="chi-buttons">
          <a href="#numerologia" class="btn btn--solid">Scopri il percorso piu adatto</a>
          <a href="mailto:info@alessandroveneziani.it?subject=Richiesta%20informazioni&body=Ciao%20Alessandro,%0D%0A%0D%0AVorrei%20ricevere%20maggiori%20informazioni%20sul%20percorso%20piu%20adatto%20a%20me.%0D%0A%0D%0AGrazie" class="btn btn--outline">Richiedi una prima disponibilita</a>
        </div>
      </div>

      <div class="chi-image" data-aos="fade-right" data-aos-delay="300">
        <img
          src="https://ilviaggioemozionale.it/wp-content/uploads/2025/06/bagatto.webp"
          alt="Il Bagatto, archetipo simbolico del viaggio interiore"
          class="image-right"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>

    <p class="hero-quote"><em>Un viaggio dedicato a chi sente che manca qualcosa e desidera tornare a se con piu presenza, senso e consapevolezza.</em></p>
  </div>
</section>

<script>
(function() {
  const breakpoint = 1360;
  const sectionIds = ['chi', 'numerologia', 'ritratto', 'tarocchi', 'soul-design', 'lab'];
  let trackedSections = [];
  let activeSectionId = '';

  function syncStickyRail() {
    const page = document.querySelector('.page-id-17 .elementor-17');
    const sourceMenu = document.querySelector('.page-id-17 .hero .menu-pergamena');

    if (!page || !sourceMenu) {
      return;
    }

    let rail = page.querySelector('.ive-sticky-menu-rail');

    if (window.innerWidth >= breakpoint) {
      if (!rail) {
        rail = document.createElement('aside');
        rail.className = 'ive-sticky-menu-rail';
        rail.appendChild(sourceMenu.cloneNode(true));
        page.appendChild(rail);
      }

      document.body.classList.add('ive-sticky-menu-active');
    } else {
      if (rail) {
        rail.remove();
      }

      document.body.classList.remove('ive-sticky-menu-active');
    }

    updateActiveMenu();
  }

  function collectSections() {
    trackedSections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);
  }

  function updateActiveMenu() {
    if (!trackedSections.length) {
      collectSections();
    }

    if (!trackedSections.length) {
      return;
    }

    const scrollOffset = window.scrollY + 180;
    let currentId = trackedSections[0].id;

    trackedSections.forEach((section) => {
      if (scrollOffset >= section.offsetTop) {
        currentId = section.id;
      }
    });

    if (currentId === activeSectionId) {
      return;
    }

    activeSectionId = currentId;

    document.querySelectorAll('.page-id-17 .menu-pergamena a').forEach((link) => {
      const isActive = link.getAttribute('href') === '#' + currentId;
      link.classList.toggle('is-active', isActive);

      if (isActive) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  let resizeFrame = null;
  function handleResize() {
    if (resizeFrame) {
      cancelAnimationFrame(resizeFrame);
    }

    resizeFrame = requestAnimationFrame(function() {
      collectSections();
      syncStickyRail();
    });
  }

  let scrollFrame = null;
  function handleScroll() {
    if (scrollFrame) {
      cancelAnimationFrame(scrollFrame);
    }

    scrollFrame = requestAnimationFrame(updateActiveMenu);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      collectSections();
      syncStickyRail();
      updateActiveMenu();
    });
  } else {
    collectSections();
    syncStickyRail();
    updateActiveMenu();
  }

  window.addEventListener('resize', handleResize);
  window.addEventListener('scroll', handleScroll, { passive: true });
})();
</script>
""".strip()

    numerologia_html = """
<section id="numerologia" class="section-numerologia">
  <div class="numerologia__header" data-aos="fade-down">
    <h2 class="numerologia__title">Scopri la tua missione dell&apos;anima con la Numerologia Indiana</h2>
    <p class="numerologia__lead">Quando vivi schemi che si ripetono o blocchi difficili da nominare, i numeri possono offrirti una chiave di lettura nuova e concreta.</p>
    <p class="section-story">La numerologia indiana ti aiuta a riconoscere cicli, talenti interiori e punti di disequilibrio, cosi da rileggere la tua storia con piu chiarezza e direzione senza perdere il contatto con la tua esperienza concreta.</p>
  </div>

  <div class="numerologia__summary">
    <div class="numerologia__visual" data-aos="zoom-in" data-aos-delay="200">
      <img src="https://ilviaggioemozionale.it/wp-content/uploads/2025/06/leone-e1751056944832.webp" class="numerologia__image lion-image" alt="Simbolo del leone per la Numerologia Indiana" loading="lazy" decoding="async" />
    </div>

    <div class="numerologia__text numerologia__text--compact card-pergamena" data-aos="fade-up" data-aos-delay="100">
      <p><strong>Cos&apos;e?</strong><br>Una bussola sottile per il tuo viaggio interiore: il linguaggio dei numeri, delle date e dei nomi.</p>
      <p><strong>Quando puo aiutarti?</strong><br>Quando senti che la tua storia ripete schemi, ma non riesci ancora a dare un nome preciso a cio che stai vivendo.</p>
      <ul class="numerologia__subpoints">
        <li>Ti aiuta a leggere cicli e ricorrenze con maggiore lucidita</li>
        <li>Rende visibili talenti interiori e punti di disequilibrio</li>
        <li>Offre una chiave simbolica che puo diventare pratica quotidiana</li>
      </ul>
      <div class="section-cta-row numerologia__actions">
        <a href="https://ilviaggioemozionale.it/negozio/" class="btn btn--solid">Approfondisci</a>
      </div>
      <p class="numerologia__shop-note">Le risorse dedicate alla numerologia e il PDF completo vengono raccolti nello Shop del sito, cosi la home resta piu essenziale e orientata al percorso.</p>
    </div>
  </div>
</section>

<section id="ritratto" class="ritratto-premium-section">
  <div class="ritratto-shell">
    <article class="ritratto-premium-card pergamena-card" data-aos="fade-up">
      <div class="ritratto-premium-content">
        <span class="ritratto-kicker">Lettura numerologica personalizzata</span>
        <h2>Ritratto dell&apos;Anima</h2>
        <p class="ritratto-subtitle">Libro personale stampato &middot; 350 EUR</p>
        <p>Il Ritratto dell&apos;Anima non e una semplice lettura numerologica. E un libro personale costruito su di te, che traduce numeri, simboli, cicli e vissuti in una mappa profonda della tua identita.</p>
        <p>Ogni Ritratto viene realizzato su richiesta, stampato e rilegato come un oggetto da conservare nel tempo.</p>

        <div class="ritratto-includes">
          <h3>Cosa troverai nel Ritratto dell&apos;Anima Premium</h3>
          <ul>
            <li>Profilo numerologico completo</li>
            <li>Lettura astrologica narrativa e identitaria</li>
            <li>Essenza e percorso karmico</li>
            <li>Memorie e vite precedenti</li>
            <li>Archetipi guida e figura mitologica</li>
            <li>Talenti, blocchi e direzione evolutiva</li>
            <li>Chakra e qualita energetica</li>
            <li>Cicli di vita e anno personale</li>
            <li>Carta oracolare canalizzata</li>
            <li>Animali totem e simboli guida</li>
            <li>Domande profonde per attivare il cambiamento</li>
            <li>Sintesi finale del tuo percorso</li>
          </ul>
        </div>

        <p class="ritratto-closing">Non e una lettura. E una mappa per muoverti davvero.</p>
        <a href="mailto:info@alessandroveneziani.it?subject=Richiesta%20Ritratto%20dell%27Anima&body=Ciao%20Alessandro,%0D%0A%0D%0AVorrei%20ricevere%20informazioni%20sul%20Ritratto%20dell%27Anima%20Premium.%0D%0A%0D%0AGrazie" class="btn btn--primary ritratto-cta">Richiedi il tuo Ritratto dell&apos;Anima</a>
      </div>

      <div class="ritratto-premium-visual" data-aos="fade-left" data-aos-delay="120">
        <img src="https://ilviaggioemozionale.it/wp-content/uploads/2025/06/ritratto-dellanima-copertina.png" alt="Ritratto dell&apos;Anima Premium - libro personale stampato" loading="lazy" decoding="async">
      </div>
    </article>

    <div class="ritratto-testimonials" data-aos="fade-up">
      <h3 class="ritratto-testimonials__title">Le parole di chi ha gia vissuto questo cammino</h3>
      <div class="ritratto-testimonial-grid">
        <blockquote class="ritratto-quote">
          <span class="ritratto-quote__badge" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false">
              <path d="M9.2 6.5c-2.9 1.7-4.6 4.1-5.2 7.3h4.1c0 2.2-1.4 3.8-3.8 4.7l.7 1.8c4.2-1.1 6.7-4.1 6.7-8.2V6.5H9.2Z"></path>
              <path d="M19.2 6.5c-2.9 1.7-4.6 4.1-5.2 7.3h4.1c0 2.2-1.4 3.8-3.8 4.7l.7 1.8c4.2-1.1 6.7-4.1 6.7-8.2V6.5h-2.5Z"></path>
            </svg>
            <span>Recensione</span>
          </span>
          <p>&ldquo;E stata una vera e propria immersione in energia positiva, pulita, rassicurante. Torni a casa alleggerita e consapevole del fatto che davvero nulla e a caso.&rdquo;</p>
          <cite>Rita Adamo · recensione Google</cite>
        </blockquote>
        <blockquote class="ritratto-quote">
          <span class="ritratto-quote__badge" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false">
              <path d="M9.2 6.5c-2.9 1.7-4.6 4.1-5.2 7.3h4.1c0 2.2-1.4 3.8-3.8 4.7l.7 1.8c4.2-1.1 6.7-4.1 6.7-8.2V6.5H9.2Z"></path>
              <path d="M19.2 6.5c-2.9 1.7-4.6 4.1-5.2 7.3h4.1c0 2.2-1.4 3.8-3.8 4.7l.7 1.8c4.2-1.1 6.7-4.1 6.7-8.2V6.5h-2.5Z"></path>
            </svg>
            <span>Recensione</span>
          </span>
          <p>&ldquo;Ho avuto proprio la sensazione che non vi fosse alcun timore o vergogna di farsi vedere con le proprie debolezze. Alessandro ci ha accolti con grande presenza.&rdquo;</p>
          <cite>Antonella Scabbia · recensione Google</cite>
        </blockquote>
        <blockquote class="ritratto-quote">
          <span class="ritratto-quote__badge" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false">
              <path d="M9.2 6.5c-2.9 1.7-4.6 4.1-5.2 7.3h4.1c0 2.2-1.4 3.8-3.8 4.7l.7 1.8c4.2-1.1 6.7-4.1 6.7-8.2V6.5H9.2Z"></path>
              <path d="M19.2 6.5c-2.9 1.7-4.6 4.1-5.2 7.3h4.1c0 2.2-1.4 3.8-3.8 4.7l.7 1.8c4.2-1.1 6.7-4.1 6.7-8.2V6.5h-2.5Z"></path>
            </svg>
            <span>Recensione</span>
          </span>
          <p>&ldquo;E stato un piacevole e interessante confronto tra anime. Alessandro e stato bravo a condurre il gruppo verso un confronto sincero.&rdquo;</p>
          <cite>Marco Ferrari · recensione Google</cite>
        </blockquote>
      </div>
      <p class="ritratto-note">Se hai gia ricevuto il tuo Ritratto dell&apos;Anima, racconta la tua esperienza con una testimonianza sincera: aiutera chi arriva qui a sentirsi rassicurato e accompagnato nella scelta.</p>
    </div>
  </div>
</section>

""".strip()

    tarocchi_html = """
<section id="tarocchi" class="tarocchi-section">
  <div class="tarocchi-wrapper">
    <div class="tarocchi-header" data-aos="fade-up">
      <h2>Fai chiarezza nel presente con i Tarocchi Archetipici</h2>
      <p class="subtitle">Le carte non dicono il futuro: rendono visibile il passaggio interiore che oggi chiede attenzione.</p>
      <p class="section-story">Quando senti che qualcosa non torna, una lettura simbolica puo aiutarti a nominare blocchi, desideri e movimenti profondi, trasformandoli in scelte piu consapevoli.</p>
      <div class="section-cta-row">
        <a href="mailto:info@alessandroveneziani.it?subject=Richiesta%20sessione%20Tarocchi%20Archetipici&body=Ciao%20Alessandro,%0D%0A%0D%0AVorrei%20ricevere%20maggiori%20informazioni%20o%20verificare%20una%20disponibilita%20per%20una%20sessione%20di%20Tarocchi%20Archetipici.%0D%0A%0D%0AGrazie" class="btn btn--outline">Richiedi disponibilita</a>
        <a href="https://www.paypal.com/paypalme/AVeneziani868/100EUR" class="btn btn--solid" target="_blank" rel="noopener noreferrer">Prenota una sessione</a>
      </div>
    </div>

    <div class="tarocchi-columns">
      <div class="tarocchi-card" data-aos="fade-right">
        <img src="https://ilviaggioemozionale.it/wp-content/uploads/2025/06/Matto.png" alt="Carta del Matto" class="tarocchi-image" loading="lazy" decoding="async">
      </div>

      <div class="tarocchi-box" data-aos="fade-left" data-aos-delay="200">
        <p><strong>Cos&apos;e?</strong><br>Un percorso intuitivo con i Tarocchi di Marsiglia per esplorare l&apos;adesso e dialogare con il tuo inconscio.</p>
        <p><strong>Perche li uso?</strong><br>Mettono in relazione razionale e irrazionale e aiutano a comprendere bisogni, blocchi e passaggi evolutivi che spesso restano senza nome.</p>
        <p><strong>Cosa puo portarti?</strong><br>Chiarezza sul momento attuale<br>Connessione con i tuoi archetipi<br>Una guida trasformativa, simbolica e concreta</p>
        <p class="tarocchi-price">Sessione individuale &middot; 100 EUR</p>
      </div>
    </div>
  </div>
</section>
""".strip()

    soul_html = """
<section id="soul-design" class="soul-wrapper">
  <div class="section-header" data-aos="fade-down">
    <h2 class="section-title">Trasforma intuizioni confuse in scelte concrete con Soul Design</h2>
    <p class="section-sub">Quando senti molto ma fai fatica a tradurre quella sensibilita in direzione, serve un ponte tra intuito e azione.</p>
    <p class="section-story">Soul Design nasce per accompagnarti nelle relazioni, nel lavoro e nella crescita personale con una lettura simbolica che diventa pratica, orientamento e passi possibili.</p>
    <div class="section-cta-row">
      <a href="mailto:info@alessandroveneziani.it?subject=Accesso%20percorso%20Soul%20Design&body=Ciao%20Alessandro,%0D%0A%0D%0AVorrei%20ricevere%20maggiori%20informazioni%20per%20accedere%20al%20percorso%20Soul%20Design.%0D%0A%0D%0AGrazie" class="btn btn--outline">Richiedi accesso al percorso</a>
      <a href="mailto:info@alessandroveneziani.it?subject=Soul%20Design%20-%20Prenotazione%20prima%20sessione" class="btn btn--primary">Prenota la prima sessione</a>
    </div>
  </div>

  <div class="soul-content-row">
    <div class="soul-description-card" data-aos="fade-right" data-aos-delay="100">
      <p><strong>Cos&apos;e:</strong> Una tecnica esclusiva creata da Alessandro Veneziani che crea un ponte tra razionale e irrazionale, tra intuito e azione.</p>
      <p><strong>Perche:</strong> Per aiutarti ad agire concretamente nelle relazioni, nel lavoro e nella tua crescita personale e spirituale.</p>
      <p><strong>Cosa ottieni:</strong></p>
      <ul>
        <li>Percorso trasformativo personalizzato</li>
        <li>Connessione con la missione dell&apos;anima</li>
        <li>Guida simbolica e pratica per le tue scelte</li>
        <li>Continuita nel tempo</li>
        <li>Lettura dei passaggi interiori mentre accadono</li>
      </ul>
    </div>

    <div class="soul-image-wrap" data-aos="fade-left" data-aos-delay="200">
      <img src="https://ilviaggioemozionale.it/wp-content/uploads/2025/06/mondo.png" alt="Il Mondo - Soul Design" class="soul-world-image" loading="lazy" decoding="async">
    </div>
  </div>

  <div class="soul-pricing-card" data-aos="fade-up" data-aos-delay="120">
    <p><strong>Prima sessione Soul Design · 150 EUR</strong><br>Durata: 90 minuti</p>
    <p>Un incontro piu lungo e strutturato per entrare davvero nella tua storia, leggere le dinamiche profonde e costruire una prima direzione chiara.</p>
    <p><strong>Sessioni successive · 100 EUR</strong><br>Durata: 60 minuti</p>
    <p>Incontri di continuita per approfondire cio che emerge, integrare le letture e trasformarle in scelte concrete.</p>
    <p class="soul-price__note"><strong>Nota finale:</strong><br>Il Ritratto dell&apos;Anima puo essere integrato nel percorso come libro personale separato. Non e incluso automaticamente.</p>
  </div>
</section>
""".strip()

    lab_html = f"""
<section id="lab" class="lab-section soul-wrapper">
  <div class="lab-header" data-aos="fade-up">
    <h2 class="lab-title">Inizia il tuo viaggio interiore con il Laboratorio dell&apos;Anima</h2>
    <p class="lab-subtitle">Una guida simbolica e pratica per quando senti che c&apos;e qualcosa di piu, ma non sai ancora da dove partire.</p>
    <p class="section-story">Tra mito, alchimia ed esercizi quotidiani, il Laboratorio dell&apos;Anima ti accompagna a trasformare intuizioni sparse in un percorso concreto di ascolto e cambiamento.</p>
    <div class="section-cta-row">
      <a href="https://www.paypal.com/paypalme/AVeneziani868/10EUR" class="btn btn--outline" target="_blank" rel="noopener noreferrer">Acquista PDF - 10 EUR</a>
      <a href="https://amzn.eu/d/3tNukjJ" class="btn btn--primary" target="_blank" rel="noopener noreferrer">Scopri il libro su Amazon</a>
    </div>
  </div>

  <div class="lab-container">
    <div class="lab-text-box" data-aos="fade-right">
      <p><strong>Un libro simbolico e pratico che attraversa i tre stadi dell&apos;alchimia: Caduta, Risalita e Chiusura.</strong></p>
      <p>Se senti che c&apos;e qualcosa di piu ma non sai da dove iniziare, qui trovi una mappa per dare forma al tuo lavoro interiore senza perderti in parole vuote.</p>
      <p>In un tempo dominato da velocita, social e distrazioni, questo percorso ti riporta verso interiorita, presenza e trasformazione attraverso immagini, miti e pratica quotidiana.</p>

      <p><strong>Cosa troverai al suo interno:</strong></p>
      <ul>
        <li>Racconti archetipici e miti alchemici che parlano all&apos;anima</li>
        <li>Pratiche trasformative quotidiane per allenare la consapevolezza</li>
        <li>Chiavi simboliche per interpretare la tua vita come un&apos;opera spirituale</li>
        <li>Spazi per scrivere, riflettere e iniziare il tuo processo di trasformazione</li>
      </ul>
    </div>

    <div class="lab-image-box" data-aos="fade-left">
      <img src="https://ilviaggioemozionale.it/wp-content/uploads/2025/06/libro.webp" alt="Copertina del Laboratorio dell&apos;Anima" class="book-image" loading="lazy" decoding="async">
    </div>
  </div>
</section>
<div class="footer-prelude" data-aos="fade-up">Il tuo viaggio non finisce qui.</div>
<script type="application/ld+json">{schema_json}</script>
""".strip()

    return {
        "368bd2b": hero_html,
        "89bc047": numerologia_html,
        "a49c25e": tarocchi_html,
        "87773f8": soul_html,
        "8808606": lab_html,
    }


def walk_nodes(nodes: list[dict[str, Any]], callback) -> None:
    for node in nodes:
        callback(node)
        if node.get("elements"):
            walk_nodes(node["elements"], callback)


def update_home_content(page_payload: dict[str, Any]) -> dict[str, Any]:
    css_text = CSS_PATH.read_text(encoding="utf-8").strip()
    html_widgets = build_widget_html()
    image_alts = {
        "0e95f8e": "TikTok Il Viaggio Emozionale",
        "122ab1d": "YouTube Il Viaggio Emozionale",
        "ea95e64": "Invia una email a Alessandro Veneziani",
        "aa65e42": "Chat WhatsApp con Alessandro Veneziani",
        "55cc31f": "Chiama Alessandro Veneziani",
    }
    clear_css_ids = {"2d01f21", "ad10948", "89bc047", "a49c25e", "87773f8", "ed4dba0", "8808606"}
    elementor_data = json.loads(page_payload["meta"]["_elementor_data"])

    def mutate(node: dict[str, Any]) -> None:
        node_id = node.get("id")
        settings = node.setdefault("settings", {})

        if node_id == "368bd2b":
            settings["custom_css"] = css_text
            settings["html"] = html_widgets[node_id]

        if node_id in clear_css_ids and node_id != "368bd2b":
            settings["custom_css"] = ""

        if node_id in html_widgets and node_id != "368bd2b":
            settings["html"] = html_widgets[node_id]

        if node_id in image_alts:
            image = settings.get("image", {})
            if isinstance(image, dict):
                image["alt"] = image_alts[node_id]
                settings["image"] = image

    walk_nodes(elementor_data, mutate)
    page_payload["meta"]["_elementor_data"] = json.dumps(elementor_data, ensure_ascii=False)
    return page_payload


def extract_hidden_fields(metabox_html: str) -> dict[str, str]:
    values: dict[str, str] = {}
    for name, value in re.findall(r'<input type="hidden"[^>]*name="([^"]+)"[^>]*value="([^"]*)"', metabox_html):
        values[name] = html.unescape(value)
    return values


def save_siteseo_meta(session: Session, post_id: int, overrides: dict[str, str]) -> None:
    wizard_url = f"{BASE_URL}/wp-admin/admin.php?page=siteseo-metabox-wizard&post={post_id}"
    metabox_html = get_text(wizard_url, session, referer=BASE_URL + "/wp-admin/")
    hidden_fields = extract_hidden_fields(metabox_html)

    payload = {
        "action": "siteseo_save_universal_metabox",
        "post_id": str(post_id),
        "security": hidden_fields.get("security", ""),
        "siteseo_metabox_nonce": hidden_fields.get("siteseo_metabox_nonce", ""),
        "siteseo_content_analysis_nonce": hidden_fields.get("siteseo_content_analysis_nonce", ""),
        "siteseo_analysis_target_kw": hidden_fields.get("siteseo_analysis_target_kw", ""),
        "_wp_http_referer": hidden_fields.get("_wp_http_referer", f"/wp-admin/admin.php?page=siteseo-metabox-wizard&post={post_id}"),
        "analysis_tabs": hidden_fields.get("analysis_tabs", '["content-analysis","title-settings","social-settings","advanced-settings","redirect"]'),
        "siteseo_titles_title": "",
        "siteseo_titles_desc": "",
        "siteseo_social_fb_title": "",
        "siteseo_social_fb_desc": "",
        "siteseo_social_fb_img": "",
        "siteseo_social_fb_img_attachment_id": hidden_fields.get("siteseo_social_fb_img_attachment_id", ""),
        "siteseo_social_fb_img_width": hidden_fields.get("siteseo_social_fb_img_width", ""),
        "siteseo_social_fb_img_height": hidden_fields.get("siteseo_social_fb_img_height", ""),
        "siteseo_social_twitter_title": "",
        "siteseo_social_twitter_desc": "",
        "siteseo_social_twitter_img": "",
        "siteseo_social_twitter_img_attachment_id": hidden_fields.get("siteseo_social_twitter_img_attachment_id", ""),
        "siteseo_social_twitter_img_width": hidden_fields.get("siteseo_social_twitter_img_width", ""),
        "siteseo_social_twitter_img_height": hidden_fields.get("siteseo_social_twitter_img_height", ""),
        "siteseo_robots_canonical": "",
    }
    payload.update(overrides)

    request = urllib.request.Request(
        BASE_URL + "/wp-admin/admin-ajax.php",
        data=urllib.parse.urlencode(payload).encode("utf-8"),
        headers={
            "User-Agent": USER_AGENT,
            "Content-Type": "application/x-www-form-urlencoded",
            "Referer": wizard_url,
        },
    )
    session.opener.open(request).read()


def main() -> int:
    username = require_env("WP_USERNAME")
    password = require_env("WP_PASSWORD")
    session = build_session(username, password)
    nonce = get_rest_nonce(session, HOME_PAGE_ID)
    current_home = rest_get_page(session, HOME_PAGE_ID, nonce)
    backup_path = save_backup("home-page-17-before", current_home)

    updated_home = update_home_content(current_home)
    response = rest_update_page(
        session,
        HOME_PAGE_ID,
        nonce,
        {"meta": {"_elementor_data": updated_home["meta"]["_elementor_data"]}},
    )

    home_social_image = "https://ilviaggioemozionale.it/wp-content/uploads/2025/06/colline-scaled.webp"
    save_siteseo_meta(
        session,
        HOME_PAGE_ID,
        {
            "siteseo_titles_title": "Percorsi di crescita personale | Il Viaggio Emozionale",
            "siteseo_titles_desc": "Tarocchi archetipici, numerologia indiana e Soul Design per ritrovare chiarezza, missione interiore e direzione nel tuo viaggio di crescita personale.",
            "siteseo_social_fb_title": "Ritrova la tua mappa interiore",
            "siteseo_social_fb_desc": "Percorsi di crescita personale tra numeri, simboli e archetipi per chi sente che e tempo di tornare a se.",
            "siteseo_social_fb_img": home_social_image,
            "siteseo_social_twitter_title": "Ritrova la tua mappa interiore",
            "siteseo_social_twitter_desc": "Percorsi di crescita personale tra numeri, simboli e archetipi per chi sente che e tempo di tornare a se.",
            "siteseo_social_twitter_img": home_social_image,
        },
    )
    save_siteseo_meta(
        session,
        SHOP_PAGE_ID,
        {
            "siteseo_titles_title": "Shop percorsi e PDF | Il Viaggio Emozionale",
            "siteseo_titles_desc": "Acquista PDF, sessioni e strumenti simbolici per il tuo viaggio interiore: numerologia indiana, tarocchi archetipici, Soul Design e risorse evolutive.",
            "siteseo_social_fb_title": "Strumenti per il tuo viaggio interiore",
            "siteseo_social_fb_desc": "PDF, sessioni e risorse simboliche per accompagnare la tua crescita personale.",
            "siteseo_social_fb_img": home_social_image,
            "siteseo_social_twitter_title": "Strumenti per il tuo viaggio interiore",
            "siteseo_social_twitter_desc": "PDF, sessioni e risorse simboliche per accompagnare la tua crescita personale.",
            "siteseo_social_twitter_img": home_social_image,
        },
    )
    for post_id in NOINDEX_PAGE_IDS:
        save_siteseo_meta(session, post_id, {"siteseo_robots_index": "yes"})

    clear_elementor_cache(session, nonce)
    purge_url = purge_speedycache(session)

    print(f"Home page updated: {response.get('link', BASE_URL)}")
    print(f"Backup saved to: {backup_path}")
    if purge_url:
        print(f"SpeedyCache purged via: {purge_url}")
    else:
        print("SpeedyCache purge link not found; Elementor cache was cleared.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
