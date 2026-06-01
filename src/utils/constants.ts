import { CardData } from "@/interfaces/platform-description.interface";

/**
 * Application-wide constants for BKT Construction.
 * Contains navigation items, service categories, construction packs,
 * contact information, and other static data.
 */

export const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2940&auto=format&fit=crop";

const constants = {
  appName: "BKT Construction",
  tagline: "Entreprise de Bâtiment et Travaux Publics",

  cards: [
    {
      label: "Nous construisons",
      title: "Résidentiel",
      href: "/realisations",
      src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
    },
    {
      label: "Nous construisons",
      title: "Commercial",
      href: "/realisations",
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    },
    {
      label: "Nous construisons",
      title: "Industriel",
      href: "/realisations",
      src: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=800&auto=format&fit=crop",
    },
    {
      label: "Nous construisons",
      title: "Travaux Publics",
      href: "/realisations",
      src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop",
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
