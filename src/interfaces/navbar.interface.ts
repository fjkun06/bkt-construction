/**
 * Navbar Interface Definitions
 * Type definitions for navigation components and their props.
 */

/**
 * NavItem
 * Represents a single navigation link item.
 * @property name - Display text for the navigation item
 * @property href - URL path for the navigation link
 */
export type NavItem = {
  name: string;
  href: string;
};

/**
 * NavLinkProps
 * Props for the NavLink component.
 * @property href - URL path for the link
 * @property children - Link content (text or elements)
 * @property className - Optional additional CSS classes
 * @property activeClassName - CSS classes applied when link is active
 * @property inactiveClassName - CSS classes applied when link is inactive
 * @property onClick - Optional click handler
 */
export type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  inactiveClassName?: string;
  onClick?: () => void;
};

/**
 * NavbarProps
 * Props for the Navbar component and its children.
 * @property isMobileOpen - Whether the mobile menu is currently open
 * @property toggleMobileOpen - Function to toggle mobile menu state
 * @property navItems - Array of navigation items to display
 */
export type NavbarProps = {
  isMobileOpen: boolean;
  toggleMobileOpen: () => void;
  navItems: NavItem[];
};
