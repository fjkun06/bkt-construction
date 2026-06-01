"use client";
import React from "react";

import Link from "next/link";
import { motion } from "framer-motion";

import ImageCarousel from "@/components/ImageCarousel";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
    alt: "Chantier de construction avec grue",
    caption: "Construction de bâtiments",
  },
  {
    src: "https://images.unsplash.com/photo-1581094794329-cd0e5ad2b48d?q=80&w=800&auto=format&fit=crop",
    alt: "Route en construction",
    caption: "Travaux publics et infrastructures",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154343-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    alt: "Villa résidentielle moderne",
    caption: "Projets résidentiels",
  },
  {
    src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=800&auto=format&fit=crop",
    alt: "Immeuble commercial",
    caption: "Construction commerciale",
  },
  {
    src: "https://images.unsplash.com/photo-1504917595218-6f1f8e0a7c5d?q=80&w=800&auto=format&fit=crop",
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
            className="flex flex-col justify-between border-l border-gray-400 pl-5 lg:col-span-4"
          >
            <div>
              <h2 className="text-primary text-[28px] leading-tight font-bold sm:text-[36px] lg:text-[40px]">
                Découvrez nos
                <br />
                réalisations
              </h2>
              <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-gray-600">
                De l&apos;étude de faisabilité à la livraison clé en main, nous proposons
                une gamme complète de services adaptés à vos besoins.
              </p>
            </div>
            <Link
              href="/realisations"
              className="border-primary text-primary hover:bg-primary mt-10 inline-flex cursor-pointer items-center gap-2 rounded-md border px-6 py-2.5 text-[13px] font-semibold tracking-wider uppercase transition-colors hover:text-white lg:mt-0"
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
