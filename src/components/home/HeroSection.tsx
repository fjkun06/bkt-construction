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
    <section className="from-primary-dark via-primary to-primary-light relative flex min-h-140 items-center justify-center bg-linear-to-br px-4 py-20 text-white">
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[url('/grid-pattern.svg')] bg-repeat" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
        <h1 className="text-4xl leading-tight font-bold tracking-tight sm:text-5xl lg:text-6xl">
          {constants.appName}
          <span className="mt-4 block text-xl font-normal text-slate-300 sm:text-2xl">
            {constants.tagline}
          </span>
        </h1>

        <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Nous vous accompagnons à chaque étape de votre projet de construction —
          résidentiel, commercial, industriel et travaux publics.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-dark rounded-md px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 sm:text-base"
          >
            Demander un devis
          </Link>
          <Link
            href="/espace-client"
            className="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-white/10 sm:text-base"
          >
            Espace Client
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
