"use client";

import React from "react";
import { motion } from "framer-motion";

import constants from "@/utils/constants";
import { ImageCard } from "@/components/cards";

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

/**
 * PlatformDescription
 *
 * Brief introduction block describing what BKT Construction does
 * and the types of projects handled.
 */
function PlatformDescription(): React.ReactElement {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, ease }}
      className="bg-white py-20 dark:bg-slate-900"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease }}
            className="text-primary text-[28px] font-bold sm:text-[36px] lg:text-[40px] dark:text-white"
          >
            Une expertise complète en construction
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="max-w-3xl text-base leading-relaxed text-gray-600 lg:text-lg dark:text-slate-400"
          >
            BKT Construction est une entreprise de Bâtiment et Travaux Publics offrant des
            services complets allant de la conception à la livraison. Nous intervenons
            dans tous les secteurs de la construction avec professionnalisme et rigueur.
          </motion.p>

          <motion.div
            className="grid w-full grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
          >
            {constants.cards.map((card) => (
              <motion.div
                key={card.title}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.7, ease }}
              >
                <ImageCard card={card} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default PlatformDescription;
