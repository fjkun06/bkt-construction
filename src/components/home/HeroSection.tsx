"use client";
import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import constants from "@/utils/constants";

/**
 * HeroSection
 *
 * Landing page hero with company tagline and call-to-action buttons.
 * Features the main heading, description, and two CTA buttons.
 */
const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2940&auto=format&fit=crop";

function HeroSection(): React.ReactElement {
  const [src, setSrc] = useState(
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2940&auto=format&fit=crop",
  );

  return (
    <section className="relative flex min-h-140 items-center justify-center overflow-hidden px-4 py-20 text-white">
      <Image
        alt="Construction background"
        className="absolute inset-0 object-cover object-center"
        fill
        priority
        sizes="100vw"
        src={src}
        onError={() => setSrc(FALLBACK_IMAGE)}
      />
      <div className="absolute inset-0 bg-[#024a6a]/70" />
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
        <h1 className="text-[40px] leading-tight font-bold tracking-tight">
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
