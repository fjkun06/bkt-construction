"use client";
import React from "react";

import Link from "next/link";
import { motion } from "framer-motion";

import ImageCarousel from "@/components/gallery/ImageCarousel";
import { slides } from "@/utils/constants";

function ServicesCTA(): React.ReactElement {
  return (
    <section className="bg-stone-200 py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-between border-l border-gray-400 pl-5 lg:col-span-4 dark:border-slate-600"
          >
            <div>
              <h2 className="text-primary text-[28px] leading-tight font-bold sm:text-[36px] lg:text-[40px] dark:text-white">
                Découvrez nos
                <br />
                réalisations
              </h2>
              <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-gray-600 dark:text-slate-400">
                De l&apos;étude de faisabilité à la livraison clé en main, nous proposons
                une gamme complète de services adaptés à vos besoins.
              </p>
            </div>
            <Link
              href="/realisations"
              className="border-primary text-primary hover:bg-primary dark:hover:text-primary mt-10 inline-flex cursor-pointer items-center gap-2 rounded-md border px-6 py-2.5 text-[13px] font-semibold tracking-wider uppercase transition-colors hover:text-white lg:mt-0 dark:border-white dark:text-white dark:hover:bg-white"
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
