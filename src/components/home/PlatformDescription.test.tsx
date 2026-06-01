import React from "react";
import { render, screen } from "@testing-library/react";

import PlatformDescription from "./PlatformDescription";
import constants from "@/utils/constants";

jest.mock("@/components/cards", () => ({
  ImageCard: ({ card }: { card: { title: string } }) => (
    <div data-testid="image-card">{card.title}</div>
  ),
}));

function renderPlatformDescription() {
  render(<PlatformDescription />);
}

describe("PlatformDescription", () => {
  it.each([
    {
      name: "section heading",
      matcher: /Une expertise complète en construction/,
      get: () =>
        screen.getByRole("heading", { name: /Une expertise complète en construction/ }),
    },
    {
      name: "description paragraph",
      matcher: /BKT Construction est une entreprise de Bâtiment et Travaux Publics/,
      get: () =>
        screen.getByText(
          /BKT Construction est une entreprise de Bâtiment et Travaux Publics/,
        ),
    },
  ])("renders the $name", ({ get }) => {
    renderPlatformDescription();
    expect(get()).toBeInTheDocument();
  });

  it("renders an ImageCard for each card in constants.cards", () => {
    renderPlatformDescription();
    expect(screen.getAllByTestId("image-card")).toHaveLength(constants.cards.length);
    constants.cards.forEach((card) => {
      expect(screen.getByText(card.title)).toBeInTheDocument();
    });
  });
});
