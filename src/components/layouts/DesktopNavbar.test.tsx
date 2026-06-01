import React from "react";
import { render, screen } from "@testing-library/react";

import DesktopNavbar from "./DesktopNavbar";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(() => "/"),
}));

const mockNavItems = [
  { name: "Accueil", href: "/" },
  { name: "Services", href: "/services" },
];

describe("DesktopNavbar", () => {
  it("renders all nav items", () => {
    render(<DesktopNavbar navItems={mockNavItems} />);

    expect(screen.getByText("Accueil")).toBeInTheDocument();
    expect(screen.getByText("Services")).toBeInTheDocument();
  });

  it("renders Espace Client link", () => {
    render(<DesktopNavbar navItems={mockNavItems} />);

    expect(screen.getByText("Espace Client")).toBeInTheDocument();
  });

  it("has lg:flex class for desktop visibility", () => {
    const { container } = render(<DesktopNavbar navItems={mockNavItems} />);

    const nav = container.querySelector("nav");
    expect(nav?.className).toContain("lg:flex");
  });

  it("has hidden class to hide on mobile", () => {
    const { container } = render(<DesktopNavbar navItems={mockNavItems} />);

    const nav = container.querySelector("nav");
    expect(nav?.className).toContain("hidden");
  });
});
