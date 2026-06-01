"use client";
import React from "react";

import Link from "next/link";

import { MobileNavbarProps } from "@/interfaces/navbar.interface";
import NavLink from "../NavLink";
import ThemeToggle from "../ThemeToggle";

/**
 * MobileNavbar
 *
 * Collapsible mobile navigation menu.
 */
function MobileNavbar({
  navItems,
  isMobileOpen,
  toggleMobileOpen,
}: MobileNavbarProps): React.ReactNode {
  return (
    <div
      className={`transform overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
        isMobileOpen ? "max-h-96" : "max-h-0"
      }`}
    >
      <nav className="space-y-1 border-t border-gray-200 px-4 py-4 dark:border-slate-800">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            href={item.href}
            className="block px-3 py-2 text-[17px] font-medium"
            onClick={toggleMobileOpen}
          >
            {item.name}
          </NavLink>
        ))}
        <ThemeToggle showLabel className="mt-2 px-3" />
        <Link
          href="/espace-client"
          className="bg-primary hover:bg-primary-dark mt-2 block rounded px-3 py-2 text-center text-[17px] font-semibold text-white transition-colors"
          onClick={toggleMobileOpen}
        >
          Espace Client
        </Link>
      </nav>
    </div>
  );
}

export default MobileNavbar;
