import React from "react";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * ServicesCTA
 *
 * Call-to-action section on the home page linking to the services page.
 */
function ServicesCTA(): React.ReactElement {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="from-primary to-primary-dark flex flex-col items-center gap-6 rounded-2xl bg-linear-to-r px-8 py-12 text-center text-white shadow-xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Découvrez nos services</h2>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            De l&apos;étude de faisabilité à la livraison clé en main, nous proposons une
            gamme complète de services adaptés à vos besoins.
          </p>
          <Link
            href="/services"
            className="text-primary inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold transition-all hover:scale-105 hover:bg-slate-100 sm:text-base"
          >
            Voir nos services
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServicesCTA;
