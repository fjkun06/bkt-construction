import React from "react";
import { render, screen } from "@testing-library/react";

import ServicesCTA from "./ServicesCTA";
import { slides } from "@/utils/constants";

jest.mock("@/components/gallery/ImageCarousel", () => ({
  __esModule: true,
  default: ({ slides: s }: { slides: typeof slides }) => (
    <div data-testid="image-carousel">{s.length} slides</div>
  ),
}));

describe("ServicesCTA", () => {
  beforeEach(() => {
    render(<ServicesCTA />);
  });

  it.each([
    {
      name: "heading",
      matcher: /Découvrez nos services/i,
      query: "getByRole" as const,
      role: "heading",
    },
    {
      name: "description paragraph",
      matcher: /De l'étude de faisabilité à la livraison clé en main/,
      query: "getByText" as const,
    },
  ])("renders the $name", ({ matcher, query, role }) => {
    if (role) {
      expect(screen.getByRole(role, { name: matcher })).toBeInTheDocument();
    } else {
      expect(screen.getByText(matcher)).toBeInTheDocument();
    }
  });

  it("renders the 'Voir plus' link pointing to /services", () => {
    const link = screen.getByRole("link", { name: /Voir plus/i });
    expect(link).toHaveAttribute("href", "/services");
  });

  it("renders ImageCarousel with all slides from constants", () => {
    expect(screen.getByTestId("image-carousel")).toHaveTextContent(
      `${slides.length} slides`,
    );
  });
});
