"use client";

import React from "react";
import GalleryCard from "./GalleryCard";
import { useImageCarousel } from "./useImageCarousel";
import { ImageCarouselProps } from "@/interfaces/gallery.interface";

/**
 * ImageCarousel
 *
 * Renders a responsive 3-column editorial masonry gallery.
 * - Mobile: 2 equal columns
 * - Tablet (md): 3 equal columns
 * - Desktop (lg): custom 5/4/3-column layout
 *
 * Tracks failed images so each broken slide falls back to a placeholder.
 */
function ImageCarousel({
  slides,
  className = "",
}: ImageCarouselProps): React.ReactElement {
  const { hasFailed, handleError, COLUMNS } = useImageCarousel();
  /* return empty gallery if no images are available */
  if (slides.length === 0) return <></>;

  return (
    <div
      className={`grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-12 lg:gap-6 ${className}`}
    >
      {COLUMNS.map((col) => (
        <div
          key={col.span}
          className={`flex flex-col gap-6 md:col-span-1 ${col.span} lg:gap-6`}
        >
          {col.cards.map((card) => (
            <GalleryCard
              key={card.index}
              slide={slides[card.index]}
              index={card.index}
              aspect={card.aspect}
              hasFailed={hasFailed(card.index)}
              onError={handleError}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default ImageCarousel;
