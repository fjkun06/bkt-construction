import React from "react";

import { SectionWrapperProps } from "@/interfaces/wrappers.interface";

/**
 * SectionWrapper
 *
 * Constrains content to a centered, responsive maximum width with padding.
 *
 * @param children - Section content
 * @param className - Optional additional CSS classes
 */
function SectionWrapper({
  children,
  className,
}: SectionWrapperProps): React.ReactElement {
  return (
    <section
      className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className ?? ""}`}
    >
      {children}
    </section>
  );
}

export default SectionWrapper;
