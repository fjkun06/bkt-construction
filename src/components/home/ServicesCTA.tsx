import React from "react";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import ImageCarousel from "@/components/ImageCarousel";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop",
    alt: "Chantier de construction avec grue",
    caption: "Construction de bâtiments",
  },
  {
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1600&auto=format&fit=crop",
    alt: "Route en construction",
    caption: "Travaux publics et infrastructures",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154343-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    alt: "Villa résidentielle moderne",
    caption: "Projets résidentiels",
  },
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
    alt: "Immeuble commercial",
    caption: "Construction commerciale",
  },
  {
    src: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1600&auto=format&fit=crop",
    alt: "Usine industrielle",
    caption: "Construction industrielle",
  },
  {
    src: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1600&auto=format&fit=crop",
    alt: "École et bâtiment public",
    caption: "Bâtiments publics",
  },
];

/**
 * ServicesCTA
 *
 * Call-to-action section with a performant image carousel showcasing projects.
 */
function ServicesCTA(): React.ReactElement {
  return (
    <section className="bg-primary py-20">
      {/* Heading */}
      <div className="mx-auto max-w-3xl px-4 pb-10 text-center sm:px-6 lg:px-8">
        <h2 className="text-[28px] font-bold text-white sm:text-[36px] lg:text-[40px]">
          Découvrez nos services
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-relaxed text-white/80">
          De l&apos;étude de faisabilité à la livraison clé en main, nous proposons une
          gamme complète de services adaptés à vos besoins.
        </p>
      </div>

      {/* Full-width carousel */}
      <ImageCarousel slides={slides} className="w-full shadow-2xl" />

      {/* CTA */}
      <div className="mx-auto mt-10 max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <Link
          href="/services"
          className="text-primary inline-flex items-center gap-2 rounded-md bg-white px-8 py-3 text-[17px] font-semibold transition-colors hover:bg-gray-100"
        >
          Voir nos services
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}

export default ServicesCTA;
