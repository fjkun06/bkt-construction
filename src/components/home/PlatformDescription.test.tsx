import React from "react";
import { render, screen } from "@testing-library/react";

import PlatformDescription from "./PlatformDescription";
import constants from "@/utils/constants";

jest.mock("@/components/cards", () => ({
  ImageCard: ({ card }: { card: { title: string } }) => (
    <div data-testid="image-card">{card.title}</div>
  ),
}));

describe("PlatformDescription", () => {
  it("renders the section heading", () => {
    render(<PlatformDescription />);

    expect(
      screen.getByRole("heading", { name: /Une expertise complète en construction/ }),
    ).toBeInTheDocument();
  });

  it("renders the description paragraph", () => {
    render(<PlatformDescription />);

    expect(
      screen.getByText(/BKT Construction est une entreprise de Bâtiment et Travaux Publics/),
    ).toBeInTheDocument();
  });

  it("renders an ImageCard for each card in constants.cards", () => {
    render(<PlatformDescription />);

    const cards = screen.getAllByTestId("image-card");
    expect(cards).toHaveLength(constants.cards.length);

    constants.cards.forEach((card) => {
      expect(screen.getByText(card.title)).toBeInTheDocument();
    });
  });
});
