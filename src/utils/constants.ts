import { CardData } from "@/interfaces/platform-description.interface";

/**
 * Application-wide constants for BKT Construction.
 * Contains navigation items, service categories, construction packs,
 * contact information, and other static data.
 */

export const images = {
  hero: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2940&auto=format&fit=crop",
  heroFallback:
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2940&auto=format&fit=crop",
  gallery: {
    building:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
    road: "https://images.unsplash.com/photo-1581094794329-cd0e5ad2b48d?q=80&w=800&auto=format&fit=crop",
    residential:
      "https://images.unsplash.com/photo-1600585154343-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    commercial:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=800&auto=format&fit=crop",
    industrial:
      "https://images.unsplash.com/photo-1504917595218-6f1f8e0a7c5d?q=80&w=800&auto=format&fit=crop",
    public:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=800&auto=format&fit=crop",
  },
  cards: {
    residential:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c77445e?q=80&w=800&auto=format&fit=crop",
    commercial:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    industrial:
      "https://images.unsplash.com/photo-1581091226825-a8a7c9f3f4c0?q=80&w=800&auto=format&fit=crop",
    publicWorks:
      "https://images.unsplash.com/photo-1531835551805-16d864c8d311?q=80&w=800&auto=format&fit=crop",
  },
} as const;

export const FALLBACK_IMAGE = images.heroFallback;

const constants = {
  appName: "BKT Construction",
  tagline: "Entreprise de Bâtiment et Travaux Publics",

  cards: [
    {
      label: "Nous construisons",
      title: "Résidentiel",
      href: "/realisations",
      src: images.cards.residential,
    },
    {
      label: "Nous construisons",
      title: "Commercial",
      href: "/realisations",
      src: images.cards.commercial,
    },
    {
      label: "Nous construisons",
      title: "Industriel",
      href: "/realisations",
      src: images.cards.industrial,
    },
    {
      label: "Nous construisons",
      title: "Travaux Publics",
      href: "/realisations",
      src: images.cards.publicWorks,
    },
  ] as CardData[],

  navItems: [
    { name: "Accueil", href: "/" },
    { name: "Nos Services", href: "/services" },
    { name: "Nos Réalisations", href: "/realisations" },
    { name: "Contact", href: "/contact" },
  ],

  services: [
    {
      title: "Études et Ingénierie",
      description:
        "Études de faisabilité, plans architecturaux (2D/3D), études de sol, levés topographiques, estimation des coûts, permis de construire, assistance technique.",
      icon: "Compass",
    },
    {
      title: "Construction de Bâtiments",
      description:
        "Résidentiel (maisons, villas, immeubles), commercial (bureaux, centres commerciaux, hôtels), industriel (entrepôts, usines) et bâtiments publics (écoles, hôpitaux).",
      icon: "Building2",
    },
    {
      title: "Travaux Publics et Infrastructures",
      description:
        "Routes, voiries urbaines, ponts, drainage, réseaux d'eau et d'électricité, parking.",
      icon: "Route",
    },
    {
      title: "Gros Œuvre",
      description:
        "Terrassement, fondations, élévation des murs, béton armé, dalles, toiture.",
      icon: "Hammer",
    },
    {
      title: "Second Œuvre",
      description:
        "Électricité, plomberie, menuiserie bois et aluminium, carrelage, plafonds, peinture, isolation thermique et acoustique.",
      icon: "Paintbrush",
    },
    {
      title: "Rénovation & Réhabilitation",
      description:
        "Rénovation complète, réhabilitation de bâtiments, extensions, réaménagement intérieur, mise aux normes.",
      icon: "RefreshCw",
    },
    {
      title: "Aménagements Extérieurs",
      description:
        "Clôtures, pavage, aménagement de jardins, parking, portails, aménagement de cours.",
      icon: "Trees",
    },
    {
      title: "Gestion et Suivi de Chantier",
      description:
        "Planification de projet, coordination des équipes, contrôle qualité, suivi budgétaire, respect des délais.",
      icon: "ClipboardCheck",
    },
  ],

  footerServices: [
    "Études et Ingénierie",
    "Construction de Bâtiments",
    "Travaux Publics",
    "Rénovation",
    "Clé en Main",
  ],

  packs: [
    {
      name: "Étude & Plans",
      description: "Plans + dossier technique",
      target: "Auto-constructeurs ayant besoin de plans professionnels",
      included: [
        "Étude de terrain",
        "Plans architecturaux",
        "Visualisation 3D",
        "Estimation budgétaire",
        "Dossier permis de construire",
      ],
      excluded: [],
    },
    {
      name: "Gros Œuvre",
      description: "Structure uniquement",
      target: "Clients avec budget limité",
      included: ["Terrassement", "Fondations", "Murs", "Dalles", "Toiture"],
      excluded: ["Finitions intérieures", "Électricité", "Plomberie", "Peinture"],
    },
    {
      name: "Semi-Fini",
      description: "Structure + installations de base",
      target: "Clients qui finissent eux-mêmes",
      included: [
        "Gros œuvre complet",
        "Enduit extérieur",
        "Électricité de base",
        "Plomberie de base",
        "Portes et fenêtres",
      ],
      excluded: ["Peinture", "Carrelage", "Cuisine", "Décoration"],
    },
    {
      name: "Prête à Finir",
      description: "Maison quasi complète",
      target: "Clients gagnant du temps",
      included: [
        "Gros œuvre complet",
        "Électricité et plomberie",
        "Menuiserie",
        "Cloisons intérieures",
      ],
      excluded: ["Peinture", "Carrelage", "Sanitaires", "Cuisine"],
    },
    {
      name: "Clé en Main",
      description: "Maison entièrement terminée",
      target: "Confort maximal / aucune implication",
      included: [
        "Conception",
        "Construction",
        "Électricité",
        "Plomberie",
        "Carrelage",
        "Peinture",
        "Cuisine",
        "Sanitaires",
        "Aménagement intérieur",
      ],
      excluded: [],
    },
  ],

  paymentMethods: [
    { name: "Orange Money (OM)", icon: "Smartphone" },
    { name: "MTN Mobile Money (MoMo)", icon: "Smartphone" },
    { name: "Virement bancaire", icon: "Landmark" },
    { name: "Cash contre reçu", icon: "Banknote" },
  ],

  contact: {
    phone: "+237 6XX XXX XXX",
    email: "contact@bktconstruction.com",
    address: "Douala, Cameroun",
    hours: "Lun - Ven: 8h00 - 17h00",
  },

  socialLinks: [
    { name: "Facebook", href: "#", icon: "Facebook" },
    { name: "LinkedIn", href: "#", icon: "Linkedin" },
    { name: "WhatsApp", href: "#", icon: "MessageCircle" },
  ],
};

export default constants;
