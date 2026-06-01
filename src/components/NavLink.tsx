"use client";
import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavLinkProps } from "@/interfaces/navbar.interface";

/**
 * NavLink
 *
 * Navigation link component that highlights the active route.
 * Compares the current pathname with the link href to determine active state.
 *
 * @param href - Target URL path
 * @param children - Link content
 * @param className - Optional additional CSS classes
 * @param onClick - Optional click handler
 */
function NavLink({ href, children, className, onClick }: NavLinkProps): React.ReactNode {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));

  const baseClasses = "rounded-md px-3 py-2 text-sm font-medium transition-colors";
  const activeClasses =
    "bg-primary-50 text-primary dark:bg-slate-800 dark:text-primary-100";
  const inactiveClasses =
    "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800";

  return (
    <Link
      href={href}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses} ${className ?? ""}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

export default NavLink;
