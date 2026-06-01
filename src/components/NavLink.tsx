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

  const baseClasses = "relative px-4 py-2 text-sm font-medium transition-colors";
  const activeClasses =
    "text-primary after:absolute after:bottom-0 after:left-2 after:right-2 after:h-0.5 after:bg-primary dark:text-primary-100 dark:after:bg-primary-100";
  const inactiveClasses =
    "text-gray-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary-100";

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
