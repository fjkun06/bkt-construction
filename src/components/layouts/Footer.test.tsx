import React from "react";
import { render, screen } from "@testing-library/react";

import Footer from "./Footer";

jest.mock("@/components/icons/ConstructionSkyline", () => {
  const MockSkyline = () => <svg data-testid="construction-skyline" />;
  MockSkyline.displayName = "MockSkyline";
  return MockSkyline;
});

describe("Footer", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it("renders the brand name and tagline", () => {
    expect(screen.getByText("BKT Construction")).toBeInTheDocument();
    expect(
      screen.getByText(/Entreprise de Bâtiment et Travaux Publics/),
    ).toBeInTheDocument();
  });

  it.each([
    "Navigation",
    "Accueil",
    "Nos Réalisations",
  ])("renders navigation link: %s", (label) => {
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it.each([
    "Études et Ingénierie",
    "Construction de Bâtiments",
    "Travaux Publics",
    "Rénovation",
    "Clé en Main",
  ])("renders service link: %s", (label) => {
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it.each([
    "+237 6XX XXX XXX",
    "contact@bktconstruction.com",
    "Douala, Cameroun",
    "Lun - Ven: 8h00 - 17h00",
  ])("renders contact info: %s", (label) => {
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it.each(["Mentions légales", "Politique de confidentialité"])(
    "renders legal link: %s",
    (label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    },
  );

  it("renders copyright notice with current year", () => {
    const currentYear = new Date().getFullYear().toString();
    expect(
      screen.getByText(
        (content) =>
          content.includes(currentYear) && content.includes("BKT Construction"),
      ),
    ).toBeInTheDocument();
  });

  it("renders the Espace Client link", () => {
    expect(screen.getByText("Espace Client")).toBeInTheDocument();
  });

  it("renders the ConstructionSkyline SVG", () => {
    expect(screen.getByTestId("construction-skyline")).toBeInTheDocument();
  });
});
