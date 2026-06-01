import React from "react";

import Link from "next/link";

import constants from "@/utils/constants";

/**
 * HeroSection
 *
 * Landing page hero with company tagline and call-to-action buttons.
 * Features the main heading, description, and two CTA buttons.
 */
function HeroSection(): React.ReactElement {
  return (
    <section className="bg-primary relative flex min-h-140 items-center justify-center px-4 py-20 text-white">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
        <h1 className="text-4xl leading-tight font-bold tracking-tight sm:text-5xl lg:text-6xl">
          {constants.appName}
          <span className="mt-4 block text-lg font-normal text-white/80 sm:text-xl">
            {constants.tagline}
          </span>
        </h1>

        <p className="max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
          Nous vous accompagnons à chaque étape de votre projet de construction —
          résidentiel, commercial, industriel et travaux publics.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="text-primary rounded-md bg-white px-8 py-3 text-sm font-semibold transition-colors hover:bg-gray-100 sm:text-base"
          >
            Demander un devis
          </Link>
          <Link
            href="/espace-client"
            className="hover:text-primary rounded-md border-2 border-white px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white sm:text-base"
          >
            Espace Client
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
