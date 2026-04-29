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
import mimetypes
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
CHECKOUT_PAGE_ID = 913
TECHNICAL_SHOP_SLUG = "archivio-shop-interno"
TECHNICAL_SHOP_TITLE = "Archivio Shop Interno"
RITRATTO_CATEGORY_NAME = "Ritratto dell'Anima"
RITRATTO_CATEGORY_SLUG = "ritratto-dell-anima"
NOINDEX_PAGE_IDS = {
    912: "Carrello",
    913: "Pagamento",
    914: "Il mio account",
    921: "ACCESSO - MINI PERCORSO",
}

WORKDIR = Path(__file__).resolve().parent
BACKUP_DIR = WORKDIR / "backups"
CSS_PATH = WORKDIR / "live-home-page.css"
SHOP_CSS_PATH = WORKDIR / "live-shop-page.css"
SCHEMA_PATH = WORKDIR / "schema" / "service-organization.jsonld"
SHOP_BG_ASSET_PATH = WORKDIR / "assets" / "sfondo-numeri.png"


@dataclass
class Session:
    opener: urllib.request.OpenerDirector
    username: str
    password: str


@dataclass(frozen=True)
class ProductSpec:
    key: str
    name: str
    slug: str
    price: str | None
    description: str
    short_description: str
    purchase_note: str
    virtual: bool
    status: str = "publish"
    category_slugs: tuple[str, ...] = ()
    catalog_visibility: str = "hidden"
    sku: str = ""


SHOP_PRODUCT_SPECS = (
    ProductSpec(
        key="ritratto_digitale",
        name="Ritratto dell'Anima Digitale",
        slug="ritratto-dell-anima-digitale",
        price="150",
        description="""
<p>Ricevi il tuo Ritratto dell'Anima in formato PDF, costruito su di te e consegnato via mail. E un primo ingresso chiaro e personale nel linguaggio dei numeri, dei simboli e della tua direzione interiore.</p>
<p>Dopo l'acquisto riceverai una mail con le istruzioni per inviare i dati necessari alla personalizzazione.</p>
""".strip(),
        short_description="""
<p>Dopo l'acquisto riceverai una mail con le istruzioni per inviare:</p>
<ul>
  <li>nome e cognome completi</li>
  <li>data di nascita</li>
  <li>recapito email da usare per la consegna</li>
</ul>
""".strip(),
        purchase_note="Dopo l'acquisto riceverai una mail con le istruzioni per inviare nome e cognome completi, data di nascita e recapito email utile alla consegna del Ritratto.",
        virtual=True,
        category_slugs=(RITRATTO_CATEGORY_SLUG,),
        sku="IVE-RDA-DIG-150",
    ),
    ProductSpec(
        key="ritratto_digitale_guidato",
        name="Ritratto dell'Anima Digitale Guidato",
        slug="ritratto-dell-anima-digitale-guidato",
        price="200",
        description="""
<p>Ricevi il tuo Ritratto dell'Anima in formato PDF e lo attraversiamo insieme in una guida di 30 minuti con Alessandro, per mettere a fuoco i passaggi piu importanti e orientare i primi passi concreti.</p>
<p>Dopo l'acquisto riceverai una mail con le istruzioni per inviare i dati necessari e concordare la guida.</p>
""".strip(),
        short_description="""
<p>Dopo l'acquisto riceverai una mail con le istruzioni per inviare:</p>
<ul>
  <li>nome e cognome completi</li>
  <li>data di nascita</li>
  <li>recapito telefonico per concordare la guida</li>
  <li>indirizzo email da usare per la consegna del PDF</li>
</ul>
""".strip(),
        purchase_note="Dopo l'acquisto riceverai una mail con le istruzioni per inviare nome e cognome completi, data di nascita, recapito email e recapito telefonico per concordare la guida con Alessandro.",
        virtual=True,
        category_slugs=(RITRATTO_CATEGORY_SLUG,),
        sku="IVE-RDA-DIGG-200",
    ),
    ProductSpec(
        key="ritratto_stampato",
        name="Ritratto dell'Anima Stampato",
        slug="ritratto-dell-anima-stampato",
        price="250",
        description="""
<p>Il tuo Ritratto dell'Anima prende forma su carta pergamena, rilegato a spirale e pensato per essere custodito, riletto e portato con te nel tempo.</p>
<p>Dopo l'acquisto riceverai una mail con le istruzioni per inviare i dati necessari e indicare se desideri spedizione o ritiro in studio.</p>
""".strip(),
        short_description="""
<p>Dopo l'acquisto riceverai una mail con le istruzioni per inviare:</p>
<ul>
  <li>nome e cognome completi</li>
  <li>data di nascita</li>
  <li>indirizzo di spedizione, se previsto</li>
  <li>preferenza tra spedizione o ritiro in studio</li>
</ul>
""".strip(),
        purchase_note="Dopo l'acquisto riceverai una mail con le istruzioni per inviare nome e cognome completi, data di nascita e, se prevista, l'indicazione dell'indirizzo di spedizione oppure del ritiro in studio.",
        virtual=False,
        category_slugs=(RITRATTO_CATEGORY_SLUG,),
        sku="IVE-RDA-PRINT-250",
    ),
    ProductSpec(
        key="ritratto_premium",
        name="Ritratto dell'Anima Premium",
        slug="ritratto-dell-anima-premium",
        price="350",
        description="""
<p>La versione piu completa del Ritratto dell'Anima: un libro personale stampato e curato come un oggetto simbolico da conservare, rileggere e ritrovare nel tempo.</p>
<p>Dopo l'acquisto riceverai una mail con le istruzioni per inviare i dati necessari alla personalizzazione e la preferenza di consegna.</p>
""".strip(),
        short_description="""
<p>Dopo l'acquisto riceverai una mail con le istruzioni per inviare:</p>
<ul>
  <li>nome e cognome completi</li>
  <li>data di nascita</li>
  <li>indirizzo di spedizione, se previsto</li>
  <li>recapito email per il contatto organizzativo</li>
</ul>
""".strip(),
        purchase_note="Dopo l'acquisto riceverai una mail con le istruzioni per inviare nome e cognome completi, data di nascita, recapito email e l'eventuale indirizzo di spedizione.",
        virtual=False,
        category_slugs=(RITRATTO_CATEGORY_SLUG,),
        sku="IVE-RDA-PREM-350",
    ),
    ProductSpec(
        key="ritratto_premium_guidato",
        name="Ritratto dell'Anima Premium Guidato",
        slug="ritratto-dell-anima-premium-guidato",
        price="420",
        description="""
<p>Libro personale premium + 1 ora di spiegazione con Alessandro per entrare con piu profondita nei simboli, nei cicli e nei punti di svolta che emergono dal tuo Ritratto.</p>
<p>Dopo l'acquisto riceverai una mail con le istruzioni per inviare i dati necessari e concordare la sessione.</p>
""".strip(),
        short_description="""
<p>Dopo l'acquisto riceverai una mail con le istruzioni per inviare:</p>
<ul>
  <li>nome e cognome completi</li>
  <li>data di nascita</li>
  <li>indirizzo di spedizione, se previsto</li>
  <li>recapito telefonico per concordare la guida</li>
</ul>
""".strip(),
        purchase_note="Dopo l'acquisto riceverai una mail con le istruzioni per inviare nome e cognome completi, data di nascita, recapito telefonico e l'eventuale indirizzo di spedizione per concordare la guida con Alessandro.",
        virtual=False,
        category_slugs=(RITRATTO_CATEGORY_SLUG,),
        sku="IVE-RDA-PREMG-420",
    ),
    ProductSpec(
        key="tarocchi_archetipici",
        name="Sessione Tarocchi Archetipici",
        slug="sessione-tarocchi-archetipici",
        price="100",
        description="""
<p>Una sessione simbolica individuale per leggere con chiarezza il momento che stai attraversando e dialogare con il tuo inconscio attraverso i Tarocchi Archetipici.</p>
<p>Dopo l'acquisto riceverai una mail per concordare disponibilita e dettagli della sessione.</p>
""".strip(),
        short_description="""
<p>Dopo l'acquisto riceverai una mail con le istruzioni per inviare:</p>
<ul>
  <li>nome e cognome completi</li>
  <li>recapito telefonico o email per concordare l'appuntamento</li>
</ul>
""".strip(),
        purchase_note="Dopo l'acquisto riceverai una mail per concordare la disponibilita della sessione di Tarocchi Archetipici.",
        virtual=True,
        sku="IVE-TARO-100",
    ),
)


FUTURE_PRODUCT_SPECS = (
    ProductSpec(
        key="corso_scrittura_automatica",
        name="Corso di Scrittura Automatica",
        slug="corso-di-scrittura-automatica",
        price=None,
        description="<p>Placeholder prodotto da completare con programma, formato e prezzo definitivo.</p>",
        short_description="<p>Prodotto in preparazione.</p>",
        purchase_note="Prodotto in preparazione.",
        virtual=True,
        status="draft",
        sku="IVE-SCR-AUTO-DRAFT",
    ),
    ProductSpec(
        key="meditazioni_guidate",
        name="Meditazioni Guidate",
        slug="meditazioni-guidate",
        price=None,
        description="<p>Placeholder prodotto da completare con raccolta audio, formato e prezzo definitivo.</p>",
        short_description="<p>Prodotto in preparazione.</p>",
        purchase_note="Prodotto in preparazione.",
        virtual=True,
        status="draft",
        sku="IVE-MEDIT-DRAFT",
    ),
    ProductSpec(
        key="laboratorio_anima_pdf",
        name="Laboratorio dell'Anima PDF",
        slug="laboratorio-dell-anima-pdf",
        price=None,
        description="<p>Placeholder prodotto da completare con formato finale e prezzo definitivo.</p>",
        short_description="<p>Prodotto in preparazione.</p>",
        purchase_note="Prodotto in preparazione.",
        virtual=True,
        status="draft",
        sku="IVE-LAB-PDF-DRAFT",
    ),
    ProductSpec(
        key="soul_design_prima_sessione",
        name="Prima Sessione Soul Design",
        slug="prima-sessione-soul-design",
        price="150",
        description="<p>Placeholder di prodotto per la prima sessione Soul Design. Il flusso commerciale resta attualmente guidato via contatto diretto.</p>",
        short_description="<p>Prodotto in preparazione.</p>",
        purchase_note="Dopo l'acquisto riceverai una mail per concordare data e dettagli del percorso.",
        virtual=True,
        status="draft",
        sku="IVE-SOUL-150-DRAFT",
    ),
)


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


def extract_wp_api_nonce(html_text: str) -> str:
    match = re.search(r"wpApiSettings\s*=\s*(\{.*?\})\s*;", html_text, re.S)
    if match:
        return json.loads(match.group(1))["nonce"]

    fallback = re.search(r'"nonce":"([a-f0-9]+)"', html_text)
    if fallback:
        return fallback.group(1)

    raise RuntimeError("Could not find wpApiSettings nonce")


def get_rest_nonce(session: Session, post_id: int) -> str:
    edit_url = f"{BASE_URL}/wp-admin/post.php?post={post_id}&action=edit"
    html_text = get_text(edit_url, session)
    return extract_wp_api_nonce(html_text)


def rest_request_json(
    session: Session,
    endpoint: str,
    nonce: str,
    *,
    method: str = "GET",
    payload: Any | None = None,
    referer: str | None = None,
) -> Any:
    data = None if payload is None else json.dumps(payload).encode("utf-8")
    request = urllib.request.Request(
        BASE_URL + endpoint,
        data=data,
        headers={
            "User-Agent": USER_AGENT,
            "X-WP-Nonce": nonce,
            "Referer": referer or BASE_URL + "/wp-admin/",
            "Content-Type": "application/json; charset=utf-8",
            "Accept": "application/json",
        },
        method=method,
    )
    return json.loads(session.opener.open(request).read().decode("utf-8"))


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


def rest_create_page(session: Session, nonce: str, payload: dict[str, Any]) -> dict[str, Any]:
    request = urllib.request.Request(
        f"{BASE_URL}/wp-json/wp/v2/pages",
        data=json.dumps(payload).encode("utf-8"),
        headers={
            "User-Agent": USER_AGENT,
            "X-WP-Nonce": nonce,
            "Referer": BASE_URL + "/wp-admin/post-new.php?post_type=page",
            "Content-Type": "application/json; charset=utf-8",
            "Accept": "application/json",
        },
        method="POST",
    )
    return json.loads(session.opener.open(request).read().decode("utf-8"))


def rest_find_page_by_slug(session: Session, nonce: str, slug: str) -> dict[str, Any] | None:
    request = urllib.request.Request(
        f"{BASE_URL}/wp-json/wp/v2/pages?slug={urllib.parse.quote(slug)}&context=edit&per_page=100",
        headers={
            "User-Agent": USER_AGENT,
            "X-WP-Nonce": nonce,
            "Referer": BASE_URL + "/wp-admin/edit.php?post_type=page",
            "Accept": "application/json",
        },
    )
    pages = json.loads(session.opener.open(request).read().decode("utf-8"))
    return pages[0] if pages else None


def rest_find_media_by_slug(session: Session, nonce: str, slug: str) -> dict[str, Any] | None:
    request = urllib.request.Request(
        f"{BASE_URL}/wp-json/wp/v2/media?slug={urllib.parse.quote(slug)}&context=edit&per_page=100",
        headers={
            "User-Agent": USER_AGENT,
            "X-WP-Nonce": nonce,
            "Referer": BASE_URL + "/wp-admin/upload.php",
            "Accept": "application/json",
        },
    )
    media_items = json.loads(session.opener.open(request).read().decode("utf-8"))
    return media_items[0] if media_items else None


def ensure_media_upload(
    session: Session,
    nonce: str,
    file_path: Path,
    *,
    filename: str,
    slug: str,
    alt_text: str,
) -> dict[str, Any]:
    existing = rest_find_media_by_slug(session, nonce, slug)
    if existing:
        return existing

    mime_type = mimetypes.guess_type(filename)[0] or "application/octet-stream"
    file_bytes = file_path.read_bytes()
    request = urllib.request.Request(
        f"{BASE_URL}/wp-json/wp/v2/media",
        data=file_bytes,
        headers={
            "User-Agent": USER_AGENT,
            "X-WP-Nonce": nonce,
            "Referer": BASE_URL + "/wp-admin/upload.php",
            "Content-Type": mime_type,
            "Content-Disposition": f'attachment; filename="{filename}"',
            "Content-Length": str(len(file_bytes)),
            "Accept": "application/json",
        },
        method="POST",
    )
    uploaded = json.loads(session.opener.open(request).read().decode("utf-8"))
    return rest_request_json(
        session,
        f"/wp-json/wp/v2/media/{uploaded['id']}",
        nonce,
        method="POST",
        payload={"alt_text": alt_text},
        referer=BASE_URL + "/wp-admin/upload.php",
    )


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


def extract_tag_attrs(tag: str) -> dict[str, str]:
    attrs = {}
    for key, _, value in re.findall(r'([:\w-]+)\s*=\s*(["\'])(.*?)\2', tag, re.S):
        attrs[key] = html.unescape(value)
    return attrs


def parse_selected_settings(form_html: str) -> dict[str, str]:
    values: dict[str, str] = {}

    for tag_match in re.finditer(r"<input\b[^>]*>", form_html, re.I | re.S):
        tag = tag_match.group(0)
        attrs = extract_tag_attrs(tag)
        name = attrs.get("name")
        input_type = attrs.get("type", "").lower()
        if not name:
            continue
        if input_type == "checkbox":
            if re.search(r"\bchecked(?:\s*=\s*['\"]?checked['\"]?)?", tag, re.I):
                values[name] = attrs.get("value", "1")
            else:
                values.pop(name, None)
        elif input_type == "radio":
            if re.search(r"\bchecked(?:\s*=\s*['\"]?checked['\"]?)?", tag, re.I):
                values[name] = attrs.get("value", "")
        else:
            values[name] = attrs.get("value", "")

    for name, select_html in re.findall(r"<select\b[^>]*name=['\"]([^'\"]+)['\"][^>]*>(.*?)</select>", form_html, re.I | re.S):
        selected = re.search(r"<option\b[^>]*value=['\"]([^'\"]*)['\"][^>]*selected=['\"]selected['\"][^>]*>", select_html, re.I | re.S)
        if not selected:
            selected = re.search(r"<option\b[^>]*value=['\"]([^'\"]*)['\"][^>]*\bselected\b[^>]*>", select_html, re.I | re.S)
        if selected:
            values[name] = html.unescape(selected.group(1))

    return values


def ensure_technical_shop_page(session: Session, nonce: str) -> int:
    existing = rest_find_page_by_slug(session, nonce, TECHNICAL_SHOP_SLUG)
    if existing:
        post_id = int(existing["id"])
        rest_update_page(
            session,
            post_id,
            nonce,
            {
                "title": TECHNICAL_SHOP_TITLE,
                "status": "publish",
                "content": "<p>Pagina tecnica riservata all&apos;archivio prodotti WooCommerce.</p>",
            },
        )
        return post_id

    created = rest_create_page(
        session,
        nonce,
        {
            "title": TECHNICAL_SHOP_TITLE,
            "slug": TECHNICAL_SHOP_SLUG,
            "status": "publish",
            "content": "<p>Pagina tecnica riservata all&apos;archivio prodotti WooCommerce.</p>",
        },
    )
    return int(created["id"])


def update_woocommerce_shop_page(session: Session, technical_shop_page_id: int) -> None:
    settings_url = f"{BASE_URL}/wp-admin/admin.php?page=wc-settings&tab=products"
    settings_html = get_text(settings_url, session, referer=BASE_URL + "/wp-admin/")
    form_match = re.search(r'(<form method="post" id="mainform".*?</form>)', settings_html, re.S)
    if not form_match:
        raise RuntimeError("Could not find WooCommerce products settings form")
    payload = parse_selected_settings(form_match.group(1))
    payload["woocommerce_shop_page_id"] = str(technical_shop_page_id)
    payload["save"] = "Salva le modifiche"

    request = urllib.request.Request(
        settings_url,
        data=urllib.parse.urlencode(payload).encode("utf-8"),
        headers={
            "User-Agent": USER_AGENT,
            "Content-Type": "application/x-www-form-urlencoded",
            "Referer": settings_url,
        },
    )
    session.opener.open(request).read()


def ensure_product_category(session: Session, nonce: str, *, name: str, slug: str) -> int:
    categories = rest_request_json(
        session,
        f"/wp-json/wp/v2/product_cat?slug={urllib.parse.quote(slug)}&context=edit&per_page=100",
        nonce,
        referer=BASE_URL + "/wp-admin/edit-tags.php?taxonomy=product_cat&post_type=product",
    )
    if categories:
        category = categories[0]
        if category.get("name") != name:
            category = rest_request_json(
                session,
                f"/wp-json/wp/v2/product_cat/{category['id']}",
                nonce,
                method="POST",
                payload={"name": name, "slug": slug},
                referer=BASE_URL + f"/wp-admin/term.php?taxonomy=product_cat&tag_ID={category['id']}&post_type=product",
            )
        return int(category["id"])

    created = rest_request_json(
        session,
        "/wp-json/wp/v2/product_cat",
        nonce,
        method="POST",
        payload={"name": name, "slug": slug},
        referer=BASE_URL + "/wp-admin/edit-tags.php?taxonomy=product_cat&post_type=product",
    )
    return int(created["id"])


def wc_request_json(
    session: Session,
    endpoint: str,
    nonce: str,
    *,
    method: str = "GET",
    payload: Any | None = None,
) -> Any:
    return rest_request_json(
        session,
        endpoint,
        nonce,
        method=method,
        payload=payload,
        referer=BASE_URL + "/wp-admin/edit.php?post_type=product",
    )


def wc_find_product_by_slug(session: Session, nonce: str, slug: str) -> dict[str, Any] | None:
    products = wc_request_json(session, f"/wp-json/wc/v3/products?slug={urllib.parse.quote(slug)}", nonce)
    return products[0] if products else None


def build_checkout_link(checkout_page_link: str, product_id: int) -> str:
    path = urllib.parse.urlparse(checkout_page_link).path or "/pagamento/"
    if not path.endswith("/"):
        path += "/"
    return f"{path}?add-to-cart={product_id}"


def product_payload(spec: ProductSpec, category_ids: dict[str, int]) -> dict[str, Any]:
    payload: dict[str, Any] = {
        "name": spec.name,
        "slug": spec.slug,
        "status": spec.status,
        "type": "simple",
        "description": spec.description,
        "short_description": spec.short_description,
        "virtual": spec.virtual,
        "downloadable": False,
        "catalog_visibility": spec.catalog_visibility,
        "sku": spec.sku,
        "stock_status": "instock",
        "manage_stock": False,
        "sold_individually": True,
        "reviews_allowed": False,
        "purchase_note": spec.purchase_note,
        "categories": [{"id": category_ids[slug]} for slug in spec.category_slugs if slug in category_ids],
    }
    if spec.price is not None:
        payload["regular_price"] = spec.price
    return payload


def ensure_wc_product(session: Session, nonce: str, spec: ProductSpec, category_ids: dict[str, int]) -> dict[str, Any]:
    payload = product_payload(spec, category_ids)
    existing = wc_find_product_by_slug(session, nonce, spec.slug)
    if existing:
        return wc_request_json(session, f"/wp-json/wc/v3/products/{existing['id']}", nonce, method="POST", payload=payload)
    return wc_request_json(session, "/wp-json/wc/v3/products", nonce, method="POST", payload=payload)


def ensure_wc_products(session: Session, nonce: str, checkout_page_link: str) -> dict[str, dict[str, Any]]:
    ritratto_category_id = ensure_product_category(
        session,
        nonce,
        name=RITRATTO_CATEGORY_NAME,
        slug=RITRATTO_CATEGORY_SLUG,
    )
    category_ids = {
        RITRATTO_CATEGORY_SLUG: ritratto_category_id,
    }

    products: dict[str, dict[str, Any]] = {}
    for spec in SHOP_PRODUCT_SPECS + FUTURE_PRODUCT_SPECS:
        product = ensure_wc_product(session, nonce, spec, category_ids)
        products[spec.key] = {
            "id": int(product["id"]),
            "name": product["name"],
            "status": product["status"],
            "price": product.get("regular_price", ""),
            "checkout_url": build_checkout_link(checkout_page_link, int(product["id"])),
        }
    return products


def delete_wc_product_if_exists(session: Session, nonce: str, slug: str) -> None:
    existing = wc_find_product_by_slug(session, nonce, slug)
    if not existing:
        return
    wc_request_json(session, f"/wp-json/wc/v3/products/{existing['id']}?force=true", nonce, method="DELETE")


def save_backup(name: str, payload: dict[str, Any]) -> Path:
    BACKUP_DIR.mkdir(parents=True, exist_ok=True)
    timestamp = datetime.now().strftime("%Y%m%d-%H%M%S")
    path = BACKUP_DIR / f"{timestamp}-{name}.json"
    path.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
    return path


def read_schema_string() -> str:
    schema = json.loads(SCHEMA_PATH.read_text(encoding="utf-8"))
    return json.dumps(schema, ensure_ascii=False, separators=(",", ":"))


def read_shop_css_string(shop_bg_url: str) -> str:
    return SHOP_CSS_PATH.read_text(encoding="utf-8").strip().replace("__SHOP_BG_URL__", shop_bg_url)


def build_shared_header_html(*, current_page: str) -> str:
    links = [
        ("/#chi-sono", "Chi sono"),
        ("/#numerologia", "Numerologia Indiana"),
        ("/#ritratto", "Ritratto dell'Anima"),
        ("/#tarocchi", "Tarocchi Archetipici"),
        ("/#soul-design", "Soul Design"),
        ("/negozio/", "Negozio"),
    ]
    nav_items = []
    mobile_items = []
    for href, label in links:
        current_attr = ' aria-current="page"' if current_page == "shop" and href == "/negozio/" else ""
        nav_items.append(f'<li><a href="{href}"{current_attr}>{label}</a></li>')
        mobile_items.append(f'<a href="{href}"{current_attr} data-mobile-link="true">{label}</a>')

    return f"""
<header class="ive-sticky-header">
  <div class="header-sticky">
    <a class="logo-sticky" href="/#chi-sono" aria-label="Il Viaggio Emozionale">
      <img
        src="https://ilviaggioemozionale.it/wp-content/uploads/2025/06/logo-new.png"
        alt="Il Viaggio Emozionale"
        loading="eager"
        decoding="async"
      >
    </a>
    <nav class="menu" aria-label="Navigazione principale del sito">
      <ul>
        {''.join(nav_items)}
      </ul>
    </nav>
    <a
      class="ive-btn small menu-cta"
      href="/#ritratto"
    >
      Inizia il tuo viaggio
    </a>
  </div>
</header>

<div class="ive-mobile-header">
  <a class="logo-sticky" href="/#chi-sono" aria-label="Il Viaggio Emozionale">
    <img
      src="https://ilviaggioemozionale.it/wp-content/uploads/2025/06/logo-new.png"
      alt="Il Viaggio Emozionale"
      loading="eager"
      decoding="async"
    >
  </a>
  <button
    class="ive-mobile-toggle"
    type="button"
    aria-expanded="false"
    aria-controls="ive-mobile-menu"
    aria-label="Apri il menu di navigazione"
  >
    <span></span>
    <span></span>
    <span></span>
  </button>
</div>

<nav class="ive-mobile-menu" id="ive-mobile-menu" aria-label="Navigazione mobile" hidden>
  <div class="ive-mobile-menu__inner">
    {''.join(mobile_items)}
    <a class="menu-cta" href="/negozio/" data-mobile-link="true">Inizia il tuo viaggio</a>
  </div>
</nav>

<script>
(function() {{
  function initIveMobileMenu() {{
    const toggle = document.querySelector('.ive-mobile-toggle');
    const menu = document.querySelector('.ive-mobile-menu');
    if (!toggle || !menu || menu.dataset.ready === 'true') {{
      return;
    }}

    menu.dataset.ready = 'true';

    function setOpen(isOpen) {{
      menu.hidden = !isOpen;
      menu.classList.toggle('is-open', isOpen);
      toggle.classList.toggle('is-open', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
      document.body.classList.toggle('ive-menu-open', isOpen);
    }}

    toggle.addEventListener('click', function() {{
      setOpen(!menu.classList.contains('is-open'));
    }});

    menu.querySelectorAll('a').forEach(function(link) {{
      link.addEventListener('click', function() {{
        setOpen(false);
      }});
    }});

    document.addEventListener('keydown', function(event) {{
      if (event.key === 'Escape') {{
        setOpen(false);
      }}
    }});

    window.addEventListener('resize', function() {{
      if (window.innerWidth > 900) {{
        setOpen(false);
      }}
    }});
  }}

  if (document.readyState === 'loading') {{
    document.addEventListener('DOMContentLoaded', initIveMobileMenu, {{ once: true }});
  }} else {{
    initIveMobileMenu();
  }}
}})();
</script>
""".strip()


def build_shared_footer_html() -> str:
    return """
<footer class="ive-footer">
  <div class="ive-footer-inner">
    <div class="ive-footer-claim">
      <h2>Il viaggio continua anche fuori da qui.</h2>
      <p>Uno spazio dedicato a simboli, numeri, archetipi e trasformazione interiore.</p>
    </div>

    <div class="ive-footer-icons">
      <a href="https://www.tiktok.com/@ilviaggioemozionale" target="_blank" rel="noopener noreferrer" aria-label="TikTok">TikTok</a>
      <a href="https://www.youtube.com/@IlViaggioEmozionale" target="_blank" rel="noopener noreferrer" aria-label="YouTube">YouTube</a>
      <a href="mailto:info@alessandroveneziani.it?subject=Richiesta%20informazioni%20da%20ilviaggioemozionale.it" aria-label="Email">Email</a>
      <a href="https://wa.me/393929124461?text=Ciao%20Alessandro%2C%20ho%20trovato%20il%20tuo%20sito%20ilviaggioemozionale.it%20e%20vorrei%20ricevere%20pi%C3%B9%20informazioni." target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">WhatsApp</a>
      <a href="tel:+393929124461" aria-label="Telefono">Telefono</a>
    </div>

    <div class="ive-footer-copy">© 2026 Il Viaggio Emozionale · Alessandro Veneziani</div>
  </div>
</footer>
""".strip()


def build_widget_html() -> dict[str, str]:
    schema_json = read_schema_string()
    shared_header = build_shared_header_html(current_page="home")
    shared_footer = build_shared_footer_html()

    hero_html = (
        shared_header
        + """
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
  </div>
</header>

<div id="chi-sono" class="ive-anchor-target" aria-hidden="true"></div>
<section id="chi" class="chi-section" data-aos="fade-up">
  <div class="chi-shell">
    <div class="chi-content">
      <div class="chi-text hero-box" data-aos="fade-left" data-aos-delay="200">
        <h2>Un accompagnamento simbolico per quando senti di esserti perso</h2>
        <p class="subtitle">Alessandro Veneziani · Designer dell&apos;Anima e Ricercatore Simbolico</p>
        <p>Benvenutə nel mio sito. Integro Tarocchi evolutivi, numerologia, comunicazione consapevole e lettura simbolica per aiutarti a ritrovare una direzione chiara quando senti che qualcosa dentro si e fermato.</p>
        <div class="chi-credentials">
          <p class="chi-credentials__title">Formazione e ricerca</p>
          <p>Il mio percorso unisce ricerca simbolica, formazione accademica e comunicazione.</p>
          <p>La mia base nasce da una laurea in Economia e Commercio presso l&apos;Universita Bocconi, con specializzazione in marketing e comunicazione. A questa formazione ho affiancato un secondo percorso di laurea in Antropologia Esoterica presso HETG, realta accademica con sede a Ginevra e Roma, dove oggi collaboro anche come professore.</p>
          <p>Questa doppia direzione, economica, comunicativa e simbolico-antropologica, e il fondamento del mio lavoro: trasformare intuizioni, numeri, archetipi e vissuti interiori in strumenti concreti di lettura, scelta e cambiamento.</p>
        </div>
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
  const sectionIds = ['chi-sono', 'numerologia', 'ritratto', 'tarocchi', 'soul-design'];
  let trackedSections = [];
  let activeSectionId = '';

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

    document
      .querySelectorAll('.page-id-17 .ive-sticky-header .menu a, .page-id-17 .ive-mobile-menu a[data-mobile-link="true"]')
      .forEach((link) => {
      let linkHash = '';

      try {
        linkHash = new URL(link.href, window.location.origin).hash.replace('#', '');
      } catch (error) {
        linkHash = '';
      }

      const isActive = linkHash === currentId;
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
      updateActiveMenu();
    });
  }

  let scrollFrame = null;
  function handleScroll() {
    if (scrollFrame) {
      cancelAnimationFrame(scrollFrame);
    }

    scrollFrame = requestAnimationFrame(function() {
      updateActiveMenu();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      collectSections();
      updateActiveMenu();
    });
  } else {
    collectSections();
    updateActiveMenu();
  }

  window.addEventListener('resize', handleResize);
  window.addEventListener('scroll', handleScroll, { passive: true });
})();
</script>
""".strip()
    )

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
        <div class="ritratto-cta-row">
          <a href="mailto:info@alessandroveneziani.it?subject=Richiesta%20Ritratto%20dell%27Anima&body=Ciao%20Alessandro,%0D%0A%0D%0AVorrei%20ricevere%20informazioni%20sul%20Ritratto%20dell%27Anima%20Premium.%0D%0A%0D%0AGrazie" class="btn btn--primary ritratto-cta">Richiedi il tuo Ritratto dell&apos;Anima</a>
          <a href="/negozio/#ritratto-shop" class="ritratto-secondary-cta">Scopri tutte le opzioni</a>
        </div>
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
{shared_footer}
<script type="application/ld+json">{schema_json}</script>
""".strip()

    return {
        "368bd2b": hero_html,
        "89bc047": numerologia_html,
        "a49c25e": tarocchi_html,
        "87773f8": soul_html,
        "8808606": lab_html,
    }


def build_shop_content(product_links: dict[str, str], shop_bg_url: str) -> str:
    shop_css = read_shop_css_string(shop_bg_url)
    shared_header = build_shared_header_html(current_page="shop")
    shared_footer = build_shared_footer_html()
    inner_html = f"""
<style>{shop_css}</style>
<div class="shop-page">
  {shared_header}
  <section class="shop-hero ive-shop-section">
    <div class="shop-hero-inner">
      <span class="shop-kicker">NEGOZIO DEL VIAGGIO</span>
      <h1>Scegli come entrare nel tuo Viaggio</h1>
      <p>Ogni percorso e una porta diversa. Sta a te scegliere da dove iniziare.</p>
    </div>
  </section>

  <section class="shop-choice ive-shop-section">
    <div class="shop-section-header">
      <div class="choice-symbol">
        <img src="https://ilviaggioemozionale.it/wp-content/uploads/2025/06/Matto.png" alt="Il Matto - simbolo del primo passo" loading="lazy" decoding="async">
      </div>
      <h2>Non sai da dove partire?</h2>
      <p>Ogni persona arriva in un momento diverso. Scegli il punto piu adatto al tuo passaggio.</p>
    </div>

    <div class="choice-grid">
      <div class="choice-card">
        <h3>Se vuoi capire</h3>
        <p>Inizia dal Ritratto Digitale.</p>
        <a href="#ritratto-digitale" class="ive-btn secondary">Vai al Digitale</a>
      </div>

      <div class="choice-card featured-soft">
        <h3>Se vuoi essere guidato</h3>
        <p>Scegli il Ritratto che senti piu vicino e affiancalo a una sessione personalizzata con Alessandro.</p>
        <a href="#ritratto-shop" class="ive-btn">Vai alle opzioni</a>
      </div>

      <div class="choice-card">
        <h3>Se vuoi custodire</h3>
        <p>Scegli lo Stampato o il Premium.</p>
        <a href="#ritratto-premium" class="ive-btn secondary">Vai al Premium</a>
      </div>
    </div>

    <div class="choice-help">
      <a href="mailto:info@alessandroveneziani.it?subject=Aiuto%20scelta%20percorso&body=Ciao%20Alessandro,%0D%0A%0D%0AVorrei%20capire%20quale%20percorso%20o%20prodotto%20e%20piu%20adatto%20a%20me.%0D%0A%0D%0AGrazie">Scrivimi e ti aiuto a scegliere</a>
    </div>
  </section>

  <section class="ritratto-shop ive-shop-section ive-ritratto-options" id="ritratto-shop">
    <div class="shop-section-header ive-section-header">
      <span class="shop-kicker ive-kicker">RITRATTO DELL&apos;ANIMA</span>
      <h2>Scegli il tuo livello di profondita</h2>
      <p>Dal formato digitale al libro personale da custodire: ogni versione apre un modo diverso di attraversare la tua mappa simbolica.</p>
    </div>

    <div class="product-grid">
      <article class="ive-product-card ive-card-digitale" id="ritratto-digitale">
        <span class="ive-card-label">Digitale</span>
        <h3>Ritratto dell&apos;Anima via mail</h3>
        <p class="ive-card-subtitle">Il primo passo per comprendere la tua mappa interiore.</p>
        <p>Ricevi il tuo Ritratto dell&apos;Anima in formato PDF: una lettura completa che unisce numeri, simboli e direzione evolutiva.</p>
        <ul>
          <li>PDF personalizzato</li>
          <li>Consegna via mail</li>
          <li>Lettura numerologica e simbolica</li>
        </ul>
        <div class="ive-price">150 EUR</div>
        <a class="ive-btn" href="{product_links['ritratto_digitale']}">Inizia il tuo viaggio</a>
      </article>

      <article class="ive-product-card ive-card-stampato" id="ritratto-stampato">
        <span class="ive-card-label">Stampato</span>
        <h3>Ritratto dell&apos;Anima stampato</h3>
        <p class="ive-card-subtitle">Un oggetto da custodire e ritrovare nel tempo.</p>
        <p>Il tuo Ritratto prende forma su carta: stampato e rilegato come un libro personale da conservare, rileggere e vivere.</p>
        <ul>
          <li>Ritratto stampato</li>
          <li>Carta pergamena</li>
          <li>Spedizione o ritiro in studio</li>
        </ul>
        <div class="ive-price">250 EUR</div>
        <a class="ive-btn" href="{product_links['ritratto_stampato']}">Custodisci il tuo Ritratto</a>
      </article>

      <article class="ive-product-card ive-card-premium" id="ritratto-premium-card">
        <span class="ive-card-label">Premium</span>
        <h3>Ritratto dell&apos;Anima Premium</h3>
        <p class="ive-card-subtitle">La versione piu completa e profonda del tuo percorso.</p>
        <p>Un libro personale costruito su di te: un viaggio completo tra numerologia, simboli e direzione evolutiva, pensato per accompagnarti nel tempo.</p>
        <ul>
          <li>Versione completa</li>
          <li>Libro stampato e curato</li>
          <li>Approccio simbolico ed evolutivo</li>
        </ul>
        <div class="ive-price">da 350 EUR</div>
        <a class="ive-btn" href="/negozio#ritratto-premium">Scopri il tuo Ritratto</a>
      </article>
    </div>

    <div class="ive-session-note" id="sessioni-ritratto">
      <p>Ogni Ritratto puo essere affiancato a una sessione personalizzata con Alessandro Veneziani, per trasformare cio che emerge in direzione concreta.</p>
      <div class="ive-session-prices">
        30 minuti — 40 EUR<br>
        60 minuti — 80 EUR<br>
        <span>tariffa riservata in abbinamento al Ritratto</span>
      </div>
      <p class="ive-final-line">Perche comprendere e solo l&apos;inizio.</p>
    </div>
  </section>

  <section class="premium-shop-section ive-shop-section" id="ritratto-premium">
    <div class="premium-shop-card">
      <div class="premium-shop-content">
        <span class="shop-kicker">VERSIONE PREMIUM</span>
        <h2>Ritratto dell&apos;Anima Premium</h2>
        <p class="premium-lead">Un libro personale pensato per essere custodito nel tempo.</p>
        <p>Il Ritratto dell&apos;Anima Premium e la versione piu completa e profonda: un libro personale costruito su di te, stampato e curato come un oggetto simbolico da conservare, rileggere e ritrovare nel tempo.</p>

        <div class="premium-includes">
          <h3>Cosa include</h3>
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

        <div class="premium-options">
          <div class="premium-option">
            <h3>Premium</h3>
            <p>Libro personale stampato e curato, senza sessione.</p>
            <div class="product-price">350 EUR</div>
            <a class="ive-btn" href="{product_links['ritratto_premium']}">Richiedi il Premium</a>
          </div>
          <div class="premium-option">
            <h3>Premium Guidato</h3>
            <p>Libro personale premium + 1 ora di spiegazione con Alessandro.</p>
            <div class="product-price">420 EUR</div>
            <a class="ive-btn" href="{product_links['ritratto_premium_guidato']}">Scegli il Premium Guidato</a>
          </div>
        </div>
      </div>

      <div class="premium-shop-visual">
        <img src="https://ilviaggioemozionale.it/wp-content/uploads/2025/06/ritratto-dellanima-copertina.png" alt="Ritratto dell&apos;Anima Premium">
      </div>
    </div>
  </section>

  <section class="resources-shop ive-shop-section">
    <div class="shop-section-header">
      <h2>Altri modi per entrare nel viaggio</h2>
      <p>Risorse e percorsi per iniziare da una pratica, da una voce o da un ascolto.</p>
    </div>

    <div class="resource-grid">
      <article class="resource-card">
        <h3>Corso di Scrittura Automatica</h3>
        <p>Un percorso per aprire il dialogo interiore e lasciare emergere parole, immagini e intuizioni senza forzatura.</p>
        <a class="ive-btn secondary" href="mailto:info@alessandroveneziani.it?subject=Richiesta%20corso%20di%20Scrittura%20Automatica&body=Ciao%20Alessandro,%0D%0A%0D%0AVorrei%20ricevere%20informazioni%20sul%20corso%20di%20Scrittura%20Automatica.%0D%0A%0D%0AGrazie">Scopri il corso</a>
      </article>
      <article class="resource-card">
        <h3>Meditazioni Guidate</h3>
        <p>Tracce audio per accompagnarti nei momenti di ascolto, centratura e trasformazione.</p>
        <a class="ive-btn secondary" href="mailto:info@alessandroveneziani.it?subject=Richiesta%20Meditazioni%20Guidate&body=Ciao%20Alessandro,%0D%0A%0D%0AVorrei%20ricevere%20informazioni%20sulle%20Meditazioni%20Guidate.%0D%0A%0D%0AGrazie">Ascolta le meditazioni</a>
      </article>
      <article class="resource-card">
        <h3>Tarocchi Archetipici</h3>
        <p>Una sessione simbolica per leggere il momento che stai attraversando e portare chiarezza nel presente.</p>
        <a class="ive-btn secondary" href="/#tarocchi">Prenota una sessione</a>
      </article>
      <article class="resource-card">
        <h3>Soul Design</h3>
        <p>Un percorso continuativo per trasformare intuizioni, blocchi e passaggi interiori in scelte concrete.</p>
        <a class="ive-btn secondary" href="/#soul-design">Scopri il percorso</a>
      </article>
    </div>
  </section>

  <section class="shop-final-cta ive-shop-section">
    <div class="final-cta-card">
      <h2>Il momento giusto non arriva. Lo scegli.</h2>
      <p>Non serve fare tutto subito. Serve iniziare dal punto giusto.</p>
      <a class="ive-btn" href="mailto:info@alessandroveneziani.it?subject=Inizio%20percorso%20Il%20Viaggio%20Emozionale&body=Ciao%20Alessandro,%0D%0A%0D%0AVorrei%20iniziare%20il%20mio%20percorso%20e%20capire%20da%20dove%20partire.%0D%0A%0D%0AGrazie">Inizia il tuo viaggio</a>
    </div>
  </section>

  {shared_footer}
</div>
""".strip()
    return f"<!-- wp:html -->\n{inner_html}\n<!-- /wp:html -->"


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


def update_shop_content(page_payload: dict[str, Any], product_links: dict[str, str], shop_bg_url: str) -> dict[str, Any]:
    page_payload["content"]["raw"] = build_shop_content(product_links, shop_bg_url)
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
    technical_shop_page_id = ensure_technical_shop_page(session, nonce)
    update_woocommerce_shop_page(session, technical_shop_page_id)
    current_home = rest_get_page(session, HOME_PAGE_ID, nonce)
    current_shop = rest_get_page(session, SHOP_PAGE_ID, nonce)
    current_checkout = rest_get_page(session, CHECKOUT_PAGE_ID, nonce)
    home_backup_path = save_backup("home-page-17-before", current_home)
    shop_backup_path = save_backup("shop-page-911-before", current_shop)
    products = ensure_wc_products(session, nonce, current_checkout["link"])
    delete_wc_product_if_exists(session, nonce, "zz-test-prodotto-codex")
    product_links = {key: product["checkout_url"] for key, product in products.items()}
    shop_bg_media = ensure_media_upload(
        session,
        nonce,
        SHOP_BG_ASSET_PATH,
        filename="sfondo-numeri.png",
        slug="sfondo-numeri",
        alt_text="Sfondo con numeri simbolici in stile pergamena per la pagina Shop",
    )
    shop_bg_url = shop_bg_media.get("source_url") or shop_bg_media.get("guid", {}).get("rendered", "")
    if not shop_bg_url:
        raise RuntimeError("Could not resolve the shop background image URL")
    updated_home = update_home_content(current_home)
    home_response = rest_update_page(
        session,
        HOME_PAGE_ID,
        nonce,
        {"meta": {"_elementor_data": updated_home["meta"]["_elementor_data"]}},
    )
    updated_shop = update_shop_content(current_shop, product_links, shop_bg_url)
    shop_response = rest_update_page(
        session,
        SHOP_PAGE_ID,
        nonce,
        {"content": updated_shop["content"]["raw"]},
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
            "siteseo_titles_title": "Scegli come iniziare il tuo viaggio | Il Viaggio Emozionale",
            "siteseo_titles_desc": "Ritratto dell'Anima, percorsi guidati e risorse simboliche per iniziare il tuo viaggio interiore con chiarezza.",
            "siteseo_social_fb_title": "Scegli come iniziare il tuo viaggio",
            "siteseo_social_fb_desc": "Ingressi guidati, Ritratto dell'Anima Premium e percorsi simbolici per il tuo momento presente.",
            "siteseo_social_fb_img": home_social_image,
            "siteseo_social_twitter_title": "Scegli come iniziare il tuo viaggio",
            "siteseo_social_twitter_desc": "Ingressi guidati, Ritratto dell'Anima Premium e percorsi simbolici per il tuo momento presente.",
            "siteseo_social_twitter_img": home_social_image,
        },
    )
    for post_id in NOINDEX_PAGE_IDS:
        save_siteseo_meta(session, post_id, {"siteseo_robots_index": "yes"})
    save_siteseo_meta(session, technical_shop_page_id, {"siteseo_robots_index": "yes"})

    clear_elementor_cache(session, nonce)
    purge_url = purge_speedycache(session)

    print(f"Home page updated: {home_response.get('link', BASE_URL)}")
    print(f"Shop page updated: {shop_response.get('link', BASE_URL + '/negozio/')}")
    print(f"Home backup saved to: {home_backup_path}")
    print(f"Shop backup saved to: {shop_backup_path}")
    print(f"Technical Woo shop page id: {technical_shop_page_id}")
    for key, product in products.items():
        print(f"Product {key}: id={product['id']} status={product['status']} price={product['price']} checkout={product['checkout_url']}")
    if purge_url:
        print(f"SpeedyCache purged via: {purge_url}")
    else:
        print("SpeedyCache purge link not found; Elementor cache was cleared.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
