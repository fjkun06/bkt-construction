"use client";
import React, { useEffect, useState } from "react";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  showLabel?: boolean;
  className?: string;
}

/**
 * ThemeToggle
 *
 * A button that toggles between light and dark themes.
 * Shows a sun icon in dark mode and a moon icon in light mode.
 * When showLabel is true, displays the label text inside the button.
 */
function ThemeToggle({ showLabel, className }: ThemeToggleProps): React.ReactNode {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={`h-9 ${showLabel ? "w-full" : "w-9"} ${className ?? ""}`} />;
  }

  const isDark = theme === "dark";

  if (showLabel) {
    return (
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className={`hover:text-primary dark:hover:text-primary-100 inline-flex cursor-pointer items-center gap-2 rounded-md py-2 text-sm font-medium text-gray-600 transition-colors dark:text-slate-300 ${className ?? ""}`}
        aria-label={isDark ? "Passer en mode clair" : "Passer en mode sombre"}
      >
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
        <span>{isDark ? "Mode clair" : "Mode sombre"}</span>
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md text-gray-600 transition-colors hover:bg-gray-100 dark:text-slate-300 dark:hover:bg-slate-800 ${className ?? ""}`}
      aria-label={isDark ? "Passer en mode clair" : "Passer en mode sombre"}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

export default ThemeToggle;
