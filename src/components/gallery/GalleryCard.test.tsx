import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import GalleryCard from "./GalleryCard";
import { FALLBACK_IMAGE } from "@/utils/constants";
import { Slide } from "@/interfaces/gallery.interface";

const mockSlide: Slide = {
  src: "https://example.com/image.jpg",
  alt: "Test image",
  caption: "Test Caption",
};

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement> & { fill?: boolean }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img {...props} src={props.src} alt={props.alt} />
  ),
}));

interface RenderOptions {
  slide?: Slide;
  index?: number;
  hasFailed?: boolean;
}

function renderGalleryCard(
  { slide = mockSlide, index = 0, hasFailed = false }: RenderOptions = {},
  onError = jest.fn(),
) {
  render(
    <GalleryCard
      slide={slide}
      index={index}
      aspect="aspect-[4/3]"
      hasFailed={hasFailed}
      onError={onError}
    />,
  );
  return { onError };
}

describe("GalleryCard", () => {
  it("renders the image with provided src", () => {
    renderGalleryCard();
    expect((screen.getByAltText("Test image") as HTMLImageElement).src).toBe(
      mockSlide.src,
    );
  });

  it("renders the caption", () => {
    renderGalleryCard();
    expect(screen.getByText("Test Caption")).toBeInTheDocument();
  });

  it("renders the fallback image when hasFailed is true", () => {
    renderGalleryCard({ hasFailed: true });
    expect((screen.getByAltText("Test image") as HTMLImageElement).src).toBe(
      FALLBACK_IMAGE,
    );
  });

  it("calls onError with the index when image fails to load", () => {
    const onError = jest.fn();
    renderGalleryCard({ index: 3 }, onError);
    fireEvent.error(screen.getByAltText("Test image"));
    expect(onError).toHaveBeenCalledWith(3);
  });

  it("links to /realisations", () => {
    renderGalleryCard();
    expect(screen.getByRole("link")).toHaveAttribute("href", "/realisations");
  });

  it("does not render caption when caption is undefined", () => {
    renderGalleryCard({
      slide: { src: "https://example.com/image.jpg", alt: "No caption" },
    });
    expect(screen.queryByText("Test Caption")).not.toBeInTheDocument();
  });
});
