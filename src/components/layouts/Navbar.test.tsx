import { render, screen, fireEvent } from "@testing-library/react";

import Navbar from "./Navbar";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(() => "/"),
}));

function renderNavbar() {
  return render(<Navbar />);
}

describe("Navbar", () => {
  describe("brand", () => {
    beforeEach(() => {
      renderNavbar();
    });

    it("renders the brand name", () => {
      expect(screen.getByText("BKT Construction")).toBeInTheDocument();
    });

    it("renders the brand logo", () => {
      const img = screen.getByAltText("BKT");
      expect(img).toBeInTheDocument();
      expect(img.tagName.toLowerCase()).toBe("img");
    });
  });

  describe("mobile menu button", () => {
    it("renders with open label initially", () => {
      renderNavbar();
      expect(screen.getByLabelText("Ouvrir le menu")).toBeInTheDocument();
    });

    it("toggles label when clicked", () => {
      renderNavbar();
      const button = screen.getByLabelText("Ouvrir le menu");
      fireEvent.click(button);
      expect(screen.getByLabelText("Fermer le menu")).toBeInTheDocument();
      fireEvent.click(screen.getByLabelText("Fermer le menu"));
      expect(screen.getByLabelText("Ouvrir le menu")).toBeInTheDocument();
    });

    it("has aria-expanded=false initially", () => {
      renderNavbar();
      expect(screen.getByLabelText("Ouvrir le menu")).toHaveAttribute(
        "aria-expanded",
        "false",
      );
    });

    it("has aria-expanded=true after opening", () => {
      renderNavbar();
      fireEvent.click(screen.getByLabelText("Ouvrir le menu"));
      expect(screen.getByLabelText("Fermer le menu")).toHaveAttribute(
        "aria-expanded",
        "true",
      );
    });
  });

  describe("navigation", () => {
    beforeEach(() => {
      renderNavbar();
    });

    it.each(["Accueil", "Nos Services", "Nos Réalisations", "Contact"])(
      "renders nav link: %s",
      (label) => {
        expect(screen.getAllByText(label).length).toBeGreaterThanOrEqual(1);
      },
    );

    it("renders Espace Client links in both desktop and mobile", () => {
      expect(screen.getAllByText("Espace Client")).toHaveLength(2);
    });
  });

  describe("structure", () => {
    it("renders the desktop navbar container", () => {
      const { container } = renderNavbar();
      expect(container.querySelector("nav.hidden")).not.toBeNull();
    });

    it("renders the mobile navbar container", () => {
      const { container } = renderNavbar();
      expect(container.querySelector("div.lg\\:hidden")).not.toBeNull();
    });
  });
});
