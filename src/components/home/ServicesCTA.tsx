"use client";
import React from "react";

import Link from "next/link";
import { motion } from "framer-motion";

import ImageCarousel from "@/components/ImageCarousel";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
    alt: "Chantier de construction avec grue",
    caption: "Construction de bâtiments",
  },
  {
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop",
    alt: "Route en construction",
    caption: "Travaux publics et infrastructures",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154343-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    alt: "Villa résidentielle moderne",
    caption: "Projets résidentiels",
  },
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    alt: "Immeuble commercial",
    caption: "Construction commerciale",
  },
  {
    src: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=800&auto=format&fit=crop",
    alt: "Usine industrielle",
    caption: "Construction industrielle",
  },
  {
    src: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=800&auto=format&fit=crop",
    alt: "École et bâtiment public",
    caption: "Bâtiments publics",
  },
];

function ServicesCTA(): React.ReactElement {
  return (
    <section className="bg-stone-200 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header row: text left, gallery right */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left text block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4"
          >
            <h2 className="text-[28px] leading-tight font-bold text-gray-900 sm:text-[36px] lg:text-[40px]">
              Découvrez nos
              <br />
              réalisations
            </h2>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-gray-600">
              De l&apos;étude de faisabilité à la livraison clé en main, nous proposons
              une gamme complète de services adaptés à vos besoins.
            </p>
            <Link
              href="/realisations"
              className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-md border border-gray-900 px-6 py-2.5 text-[13px] font-semibold tracking-wider text-gray-900 uppercase transition-colors hover:bg-gray-900 hover:text-white"
            >
              Voir plus
            </Link>
          </motion.div>

          {/* Right gallery */}
          <div className="lg:col-span-8">
            <ImageCarousel slides={slides} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesCTA;
