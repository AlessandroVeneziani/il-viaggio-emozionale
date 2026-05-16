export const siteConfig = {
  name: "Il Viaggio Emozionale",
  description:
    "Studio contemporaneo di orientamento simbolico per ritrovare chiarezza, direzione personale e leggibilità del presente.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ilviaggioemozionale.it",
  ogImage: "/images/brand/ritratto-dell-anima.png",
  email: "info@alessandroveneziani.it",
  phone: "+39 392 912 4461",
  whatsapp:
    "https://wa.me/393929124461?text=Ciao%20Alessandro,%20vorrei%20ricevere%20maggiori%20informazioni.",
  telegram:
    "mailto:info@alessandroveneziani.it?subject=Richiesta%20accesso%20Telegram",
  socials: {
    tiktok: "https://www.tiktok.com/@ilviaggioemozionale",
    youtube: "https://www.youtube.com/@IlViaggioEmozionale",
  },
} as const;

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/il-metodo", label: "Il Metodo" },
  { href: "/ritratto-dell-anima", label: "Ritratto dell'Anima" },
  { href: "/soul-design", label: "Soul Design" },
  { href: "/percorsi", label: "Percorsi" },
  { href: "/chi-sono", label: "Chi sono" },
  { href: "/contatti", label: "Contatti" },
] as const;
