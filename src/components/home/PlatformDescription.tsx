import React from "react";

import { Building2, HardHat, Ruler, ShieldCheck } from "lucide-react";

/**
 * PlatformDescription
 *
 * Brief introduction block describing what BKT Construction does
 * and the types of projects handled.
 */
function PlatformDescription(): React.ReactElement {
  const highlights = [
    { icon: Building2, label: "Résidentiel" },
    { icon: HardHat, label: "Commercial" },
    { icon: Ruler, label: "Industriel" },
    { icon: ShieldCheck, label: "Travaux Publics" },
  ];

  return (
    <section className="bg-slate-50 py-16 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
            Une expertise complète en construction
          </h2>
          <p className="max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
            BKT Construction est une entreprise de Bâtiment et Travaux Publics offrant des
            services complets allant de la conception à la livraison. Nous intervenons
            dans tous les secteurs de la construction avec professionnalisme et rigueur.
          </p>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {highlights.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-2 rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800"
              >
                <Icon className="text-primary h-8 w-8" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlatformDescription;
