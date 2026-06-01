import { render, screen, fireEvent } from "@testing-library/react";

import MobileNavbar from "./MobileNavbar";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(() => "/"),
}));

const mockNavItems = [
  { name: "Accueil", href: "/" },
  { name: "Services", href: "/services" },
];

const mockToggle = jest.fn();

function renderMobileNavbar(isOpen = true) {
  return render(
    <MobileNavbar
      navItems={mockNavItems}
      isMobileOpen={isOpen}
      toggleMobileOpen={mockToggle}
    />,
  );
}

describe("MobileNavbar", () => {
  beforeEach(() => {
    mockToggle.mockClear();
  });

  describe("when open", () => {
    beforeEach(() => {
      renderMobileNavbar(true);
    });

    it("renders all nav items", () => {
      expect(screen.getByText("Accueil")).toBeInTheDocument();
      expect(screen.getByText("Services")).toBeInTheDocument();
    });

    it("renders Espace Client link", () => {
      expect(screen.getByText("Espace Client")).toBeInTheDocument();
    });

    it("has max-h-96 class", () => {
      const div = document.querySelector("div.lg\\:hidden");
      expect(div?.className).toContain("max-h-96");
    });
  });

  describe("when closed", () => {
    beforeEach(() => {
      renderMobileNavbar(false);
    });

    it("has max-h-0 class", () => {
      const div = document.querySelector("div.lg\\:hidden");
      expect(div?.className).toContain("max-h-0");
    });
  });

  describe("interaction", () => {
    beforeEach(() => {
      renderMobileNavbar(true);
    });

    it.each([
      ["nav link", "Accueil"],
      ["Espace Client link", "Espace Client"],
    ])("calls toggleMobileOpen when %s is clicked", (_label, text) => {
      const link = screen.getByText(text);
      fireEvent.click(link);
      expect(mockToggle).toHaveBeenCalledTimes(1);
    });
  });

  it("has lg:hidden class to hide on desktop", () => {
    const { container } = renderMobileNavbar(true);
    const div = container.querySelector("div");
    expect(div?.className).toContain("lg:hidden");
  });
});
