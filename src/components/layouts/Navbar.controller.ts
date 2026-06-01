"use client";
import { useState, useRef } from "react";

/**
 * useNavbarController
 *
 * Manages Navbar state including mobile menu open/close and ref.
 *
 * @returns Object containing mobile menu state, toggle handler, and nav ref.
 */
const useNavbarController = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const toggleMobileOpen = () => setIsMobileOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileOpen(false);

  return {
    isMobileOpen,
    toggleMobileOpen,
    closeMobileMenu,
    navRef,
  };
};

export default useNavbarController;
