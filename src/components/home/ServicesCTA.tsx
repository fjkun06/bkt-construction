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
    <section className="bg-primary py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-[40px] font-bold text-white">Découvrez nos services</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80">
          De l&apos;étude de faisabilité à la livraison clé en main, nous proposons une
          gamme complète de services adaptés à vos besoins.
        </p>
        <Link
          href="/services"
          className="text-primary mt-8 inline-flex items-center gap-2 rounded-md bg-white px-8 py-3 text-sm font-semibold transition-colors hover:bg-gray-100 sm:text-base"
        >
          Voir nos services
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}

export default ServicesCTA;
