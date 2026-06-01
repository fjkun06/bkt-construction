import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import ImageCard from "./ImageCard";
import { FALLBACK_IMAGE } from "@/utils/constants";

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ alt, src, onError, className }: any) => (
    <img
      alt={alt}
      src={src}
      onError={onError}
      className={className}
      data-testid="next-image"
    />
  ),
}));

const mockCard = {
  label: "Nous construisons",
  title: "Résidentiel",
  href: "/realisations",
  src: "https://example.com/image.jpg",
};

function renderImageCard(card = mockCard) {
  return render(<ImageCard card={card} />);
}

describe("ImageCard", () => {
  it("renders a link wrapping the card content", () => {
    renderImageCard();

    expect(screen.getByRole("link")).toHaveAttribute("href", "/realisations");
  });

  it("displays the image with the provided src and alt", () => {
    renderImageCard();

    const img = screen.getByTestId("next-image");
    expect(img).toHaveAttribute("alt", "Résidentiel");
    expect(img).toHaveAttribute("src", "https://example.com/image.jpg");
  });

  it("displays label, title and call-to-action text", () => {
    renderImageCard();

    expect(screen.getByText("Nous construisons")).toBeInTheDocument();
    expect(screen.getByText("Résidentiel")).toBeInTheDocument();
    expect(screen.getByText("En savoir plus")).toBeInTheDocument();
  });

  it("falls back to the fallback image when the primary image fails to load", () => {
    renderImageCard();

    const img = screen.getByTestId("next-image");
    fireEvent.error(img);

    expect(img).toHaveAttribute("src", FALLBACK_IMAGE);
  });
});
