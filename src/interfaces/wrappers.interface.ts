import React from "react";

/**
 * SectionWrapperProps
 * Props for the SectionWrapper layout component.
 * @property children - Section content
 * @property className - Optional additional CSS classes
 */
export type SectionWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * PagesWrapperProps
 * Props for the PagesWrapper layout component.
 * @property children - Page content
 * @property className - Optional additional CSS classes
 */
export type PagesWrapperProps = {
  children: React.ReactNode;
  className?: string;
};
