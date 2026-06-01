"use client";
import React from "react";

import Link from "next/link";
import { Menu, X } from "lucide-react";

import constants from "@/utils/constants";
import useNavbarController from "./Navbar.controller";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

/**
 * Navbar
 *
 * Main navigation bar component with responsive desktop/mobile layout.
 * Includes the company brand, navigation links, and a mobile menu toggle.
 */
function Navbar(): React.ReactNode {
  const { isMobileOpen, toggleMobileOpen, navRef } = useNavbarController();

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2">
            <img src="/icon.svg" alt="BKT" className="h-8 w-8 rounded-md" />
            <span className="text-primary dark:text-primary-100 text-xl font-bold tracking-tight">
              {constants.appName}
            </span>
          </Link>

          <DesktopNavbar navItems={constants.navItems} />

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileOpen}
            className="hover:text-primary dark:hover:text-primary-100 inline-flex cursor-pointer items-center justify-center rounded-md p-2 text-gray-700 transition lg:hidden dark:text-slate-300"
            aria-expanded={isMobileOpen}
            aria-label={isMobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <MobileNavbar
        navItems={constants.navItems}
        isMobileOpen={isMobileOpen}
        toggleMobileOpen={toggleMobileOpen}
      />
    </header>
  );
}

export default Navbar;
