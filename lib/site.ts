export const siteConfig = {
  name: "Il Viaggio Emozionale",
  description:
    "Percorsi di crescita personale attraverso numerologia, tarocchi evolutivi e letture simboliche dell'anima.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ilviaggioemozionale.it",
  ogImage: "/images/brand/ritratto-dell-anima.png",
  email: "info@alessandroveneziani.it",
  phone: "+39 392 912 4461",
  whatsapp:
    "https://wa.me/393929124461?text=Ciao%20Alessandro,%20vorrei%20ricevere%20maggiori%20informazioni.",
  socials: {
    tiktok: "https://www.tiktok.com/@ilviaggioemozionale",
    youtube: "https://www.youtube.com/@IlViaggioEmozionale",
  },
} as const;

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/ritratto-dell-anima", label: "Ritratto dell'Anima" },
  { href: "/letture-tarocchi", label: "Letture Tarocchi" },
  { href: "/laboratorio-dell-anima", label: "Laboratorio dell'Anima" },
  { href: "/chi-sono", label: "Chi sono" },
  { href: "/contatti", label: "Contatti" },
] as const;
