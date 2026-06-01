import React from "react";

import Link from "next/link";

import constants from "@/utils/constants";
import strings from "@/utils/strings";

/**
 * Footer
 *
 * Site-wide footer component displaying company info, navigation links,
 * contact details, and copyright notice.
 */
function Footer(): React.ReactElement {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Company info */}
          <div className="flex flex-col gap-4">
            <span className="text-lg font-bold text-white">
              {strings.appName}
            </span>
            <p className="text-sm leading-relaxed text-slate-400">
              {strings.tagline}. Nous vous accompagnons à chaque étape de votre
              projet de construction.
            </p>
          </div>

          {/* Navigation links */}
          <div className="flex flex-col gap-4">
            <span className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </span>
            <nav className="flex flex-col gap-2">
              {constants.navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/espace-client"
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                Espace Client
              </Link>
            </nav>
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-4">
            <span className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </span>
            <div className="flex flex-col gap-2 text-sm text-slate-400">
              <span>{constants.contact.phone}</span>
              <span>{constants.contact.email}</span>
              <span>{constants.contact.address}</span>
              <span>{constants.contact.hours}</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-slate-700 pt-8 text-center text-sm text-slate-500">
          © {currentYear} {strings.appName}. {strings.copyright}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
