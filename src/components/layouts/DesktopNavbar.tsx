"use client";
import React from "react";

import Link from "next/link";

import { DesktopNavbarProps } from "@/interfaces/navbar.interface";
import NavLink from "../NavLink";
import ThemeToggle from "../ThemeToggle";

/**
 * DesktopNavbar
 *
 * Desktop-only navigation bar with nav links, theme toggle,
 * and client space CTA.
 */
function DesktopNavbar({ navItems }: DesktopNavbarProps): React.ReactNode {
  return (
    <nav className="hidden items-center gap-0 lg:flex">
      {navItems.map((item) => (
        <NavLink key={item.name} href={item.href}>
          {item.name}
        </NavLink>
      ))}
      <ThemeToggle />
      <Link
        href="/espace-client"
        className="bg-primary hover:bg-primary-dark ml-4 rounded px-5 py-2 text-[17px] font-semibold text-white transition-colors"
      >
        Espace Client
      </Link>
    </nav>
  );
}

export default DesktopNavbar;
