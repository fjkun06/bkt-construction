/**
 * Services Interface Definitions
 * Type definitions for service-related components.
 */

/**
 * ServiceCardProps
 * Props for a single service category card.
 * @property title - Service category title
 * @property description - Brief description of the service
 * @property icon - Lucide icon name to display
 */
export type ServiceCardProps = {
  title: string;
  description: string;
  icon: string;
};

/**
 * ConstructionPack
 * Represents a construction pack offering.
 * @property name - Pack name
 * @property description - Short description of the pack
 * @property target - Target audience description
 * @property included - Array of included features
 * @property excluded - Array of excluded features
 */
export type ConstructionPack = {
  name: string;
  description: string;
  target: string;
  included: string[];
  excluded: string[];
};

/**
 * PackCardProps
 * Props for the construction pack card component.
 */
export type PackCardProps = ConstructionPack;
