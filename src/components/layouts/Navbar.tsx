"use client";
import React from "react";

import Link from "next/link";
import { Menu, X } from "lucide-react";

import constants from "@/utils/constants";
import NavLink from "../NavLink";
import useNavbarController from "./Navbar.controller";

/**
 * Navbar
 *
 * Main navigation bar component with responsive desktop/mobile layout.
 * Includes the company brand, navigation links, and a mobile menu toggle.
 */
function Navbar(): React.ReactNode {
  const { isMobileOpen, toggleMobileOpen, closeMobileMenu, navRef } =
    useNavbarController();

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/95"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-primary dark:text-primary-100 text-lg font-bold">
              {constants.appName}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {constants.navItems.map((item) => (
              <NavLink key={item.name} href={item.href}>
                {item.name}
              </NavLink>
            ))}
            <Link
              href="/espace-client"
              className="bg-accent hover:bg-accent-dark ml-4 rounded-md px-4 py-2 text-sm font-semibold text-white transition-colors"
            >
              Espace Client
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileOpen}
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden dark:text-slate-300 dark:hover:bg-slate-800"
            aria-expanded={isMobileOpen}
            aria-label={isMobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`transform overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          isMobileOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="space-y-1 border-t border-slate-200 px-4 py-4 dark:border-slate-800">
          {constants.navItems.map((item) => (
            <NavLink
              key={item.name}
              href={item.href}
              className="block px-3 py-2 text-base font-medium"
              onClick={toggleMobileOpen}
            >
              {item.name}
            </NavLink>
          ))}
          <Link
            href="/espace-client"
            className="bg-accent hover:bg-accent-dark mt-2 block rounded-md px-3 py-2 text-center text-sm font-semibold text-white transition-colors"
            onClick={toggleMobileOpen}
          >
            Espace Client
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
