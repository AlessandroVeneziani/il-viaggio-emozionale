export const siteConfig = {
  name: "Il Viaggio Emozionale",
  defaultTitle: "Il Viaggio Emozionale — Metodo Simbolico Contemporaneo",
  description:
    "Il Viaggio Emozionale è un metodo simbolico contemporaneo dedicato alla comprensione dell’essere attraverso numeri, archetipi, immaginario e orientamento evolutivo.",
  schemaDescription:
    "Metodo simbolico contemporaneo dedicato alla comprensione dell’essere.",
  keywords: [
    "metodo simbolico contemporaneo",
    "ritratto dell’anima",
    "soul design",
    "numerologia evolutiva",
    "archetipi",
    "percorso evolutivo",
    "simboli interiori",
    "identità simbolica",
    "lettura simbolica contemporanea",
  ],
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ilviaggioemozionale.it",
  ogImage: "/images/backgrounds/homepage-symbolic-background.png",
  ogImageWidth: 1536,
  ogImageHeight: 1024,
  ogImageAlt: "Il Viaggio Emozionale — Metodo Simbolico Contemporaneo",
  founder: "Alessandro Veneziani",
  email: "info@alessandroveneziani.it",
  phone: "+39 392 912 4461",
  whatsapp:
    "https://wa.me/393929124461?text=Ciao%20Alessandro,%20vorrei%20ricevere%20maggiori%20informazioni.",
  telegram:
    "https://t.me/ilviaggioemozionale",
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
