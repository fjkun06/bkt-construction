import React from "react";

import Link from "next/link";

import ConstructionSkyline from "@/components/icons/ConstructionSkyline";
import constants from "@/utils/constants";
import strings from "@/utils/strings";

/**
 * Footer
 *
 * Features a decorative geometric SVG background inspired by Hochtief.
 */
function Footer(): React.ReactElement {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="overflow-hidden bg-[#04305D] pt-14 text-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Column 1 — Brand + Legal */}
          <div className="flex flex-col gap-3">
            <span className="text-[17px] font-bold text-white">{strings.appName}</span>
            <p className="max-w-xs text-[17px] leading-relaxed text-[#CCD1D5]">
              {strings.tagline}. Votre partenaire de confiance pour tous vos projets de
              construction.
            </p>

            <div className="mt-8 flex gap-4 border-t border-[#CCD1D5]/40 pt-5 pr-3 text-xs text-[#CCD1D5]">
              <Link href="#" className="transition-colors hover:text-white">
                Mentions légales
              </Link>
              <Link href="#" className="transition-colors hover:text-white">
                Politique de confidentialité
              </Link>
            </div>
            <p className="mt-2 text-[17px] text-white/80">
              © {currentYear} {strings.appName}. {strings.copyright}
            </p>
          </div>

          {/* Column 2 — Navigation */}
          <div className="flex flex-col gap-2 *:text-[17px]">
            <span className="font-semibold tracking-wider text-white uppercase">
              Navigation
            </span>
            <nav className="flex flex-col gap-1.5">
              {constants.navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[#CCD1D5] transition-colors hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3 — Services */}
          <div className="flex flex-col gap-2 *:text-[17px]">
            <span className="font-semibold tracking-wider text-white uppercase">
              Nos Services
            </span>
            <nav className="flex flex-col gap-1.5">
              {constants.footerServices.map((name) => (
                <Link
                  key={name}
                  href="/services"
                  className="text-[#CCD1D5] transition-colors hover:text-white"
                >
                  {name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 4 — Contact */}
          <div className="flex flex-col gap-2">
            <span className="text-[17px] font-semibold tracking-wider text-white uppercase">
              Contact
            </span>
            <div className="flex flex-col gap-1.5 text-[17px] text-[#CCD1D5]">
              <span>{constants.contact.phone}</span>
              <span>{constants.contact.email}</span>
              <span>{constants.contact.address}</span>
              <span>{constants.contact.hours}</span>
            </div>
            <Link
              href="/espace-client"
              className="mt-2 inline-flex w-fit items-center rounded bg-white/10 px-3 py-1.5 text-[17px] font-medium text-white transition-colors hover:bg-white/20"
            >
              Espace Client
            </Link>
          </div>
        </div>
      </div>

      <ConstructionSkyline />
    </footer>
  );
}

export default Footer;
