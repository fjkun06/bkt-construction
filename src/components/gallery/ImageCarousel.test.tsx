import React from "react";
import { render, screen } from "@testing-library/react";

import ImageCarousel from "./ImageCarousel";
import { slides } from "@/utils/constants";

jest.mock("./GalleryCard", () => ({
  __esModule: true,
  default: ({ slide, aspect }: { slide: { caption: string }; aspect: string }) => (
    <div data-testid="gallery-card" data-caption={slide.caption} data-aspect={aspect} />
  ),
}));

describe("ImageCarousel", () => {
  it("returns nothing when slides array is empty", () => {
    const { container } = render(<ImageCarousel slides={[]} />);
    expect(container.firstChild).toBeNull();
  });

  it("renders a gallery card for each slide", () => {
    render(<ImageCarousel slides={slides} />);
    expect(screen.getAllByTestId("gallery-card")).toHaveLength(slides.length);
  });

  it("applies custom className when provided", () => {
    const { container } = render(
      <ImageCarousel slides={slides} className="custom-class" />,
    );
    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("renders the correct aspect ratios per column", () => {
    render(<ImageCarousel slides={slides} />);
    const cards = screen.getAllByTestId("gallery-card");
    expect(cards[2]).toHaveAttribute("data-aspect", "aspect-[3/4]");
    expect(cards[0]).toHaveAttribute("data-aspect", "aspect-[4/3]");
  });
});
