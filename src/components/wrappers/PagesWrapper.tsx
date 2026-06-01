import React from "react";

import { PagesWrapperProps } from "@/interfaces/wrappers.interface";

/**
 * PagesWrapper
 *
 * Provides consistent page-level layout with minimum height and centering.
 *
 * @param children - Page content
 * @param className - Optional additional CSS classes
 */
function PagesWrapper({
  children,
  className,
}: PagesWrapperProps): React.ReactElement {
  return (
    <main
      className={`flex min-h-screen flex-1 flex-col items-center ${className ?? ""}`}
    >
      {children}
    </main>
  );
}

export default PagesWrapper;
