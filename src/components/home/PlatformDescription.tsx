"use client";

import React from "react";

import constants from "@/utils/constants";
import { ImageCard } from "@/components/cards";

/**
 * PlatformDescription
 *
 * Brief introduction block describing what BKT Construction does
 * and the types of projects handled.
 */
function PlatformDescription(): React.ReactElement {
  return (
    <section className="bg-white py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 text-center">
          <h2 className="text-primary text-[40px] font-bold dark:text-white">
            Une expertise complète en construction
          </h2>
          <p className="max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg dark:text-slate-400">
            BKT Construction est une entreprise de Bâtiment et Travaux Publics offrant des
            services complets allant de la conception à la livraison. Nous intervenons
            dans tous les secteurs de la construction avec professionnalisme et rigueur.
          </p>

          <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-4">
            {constants.cards.map((card) => (
              <ImageCard key={card.title} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlatformDescription;
