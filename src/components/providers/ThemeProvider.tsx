"use client";
import React from "react";

import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * ThemeProvider
 *
 * Wraps the application with next-themes provider for dark/light mode support.
 * Defaults to dark theme with system preference detection.
 *
 * @param children - Application content to wrap with theme context.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="data-theme" defaultTheme="light">
      {children}
    </NextThemesProvider>
  );
}
