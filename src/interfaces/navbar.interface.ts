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
 * BaseNavbarProps
 * Common props shared by DesktopNavbar and MobileNavbar.
 * @property navItems - Array of navigation items to display
 */
export type BaseNavbarProps = {
  navItems: NavItem[];
};

/**
 * DesktopNavbarProps
 * Props for the DesktopNavbar component.
 */
export type DesktopNavbarProps = BaseNavbarProps;

/**
 * MobileNavbarProps
 * Props for the MobileNavbar component.
 * @property isMobileOpen - Whether the mobile menu is currently open
 * @property toggleMobileOpen - Function to toggle mobile menu state
 */
export type MobileNavbarProps = BaseNavbarProps & {
  isMobileOpen: boolean;
  toggleMobileOpen: () => void;
};
