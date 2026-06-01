"use client";

import React, { useState } from "react";
import GalleryCard from "@/components/GalleryCard";
import { ImageCarouselProps } from "@/interfaces/gallery.interface";

function ImageCarousel({
  slides,
  className = "",
}: ImageCarouselProps): React.ReactElement {
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());
  if (slides.length === 0) return <></>;

  const handleError = (i: number) => {
    setFailedImages((prev) => new Set([...prev, i]));
  };

  return (
    <div
      className={`grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-12 lg:gap-6 ${className}`}
    >
      <div className="flex flex-col gap-6 md:col-span-1 lg:col-span-5 lg:gap-6">
        <GalleryCard
          slide={slides[0]}
          index={0}
          aspect="aspect-[4/3]"
          failedImages={failedImages}
          onError={handleError}
        />
        <GalleryCard
          slide={slides[1]}
          index={1}
          aspect="aspect-[4/3]"
          failedImages={failedImages}
          onError={handleError}
        />
      </div>

      <div className="flex flex-col gap-6 md:col-span-1 lg:col-span-4 lg:gap-6">
        <GalleryCard
          slide={slides[2]}
          index={2}
          aspect="aspect-[3/4]"
          failedImages={failedImages}
          onError={handleError}
        />
        <GalleryCard
          slide={slides[3]}
          index={3}
          aspect="aspect-[4/3]"
          failedImages={failedImages}
          onError={handleError}
        />
      </div>

      <div className="flex flex-col gap-6 md:col-span-1 lg:col-span-3 lg:gap-6">
        <GalleryCard
          slide={slides[4]}
          index={4}
          aspect="aspect-[4/3]"
          failedImages={failedImages}
          onError={handleError}
        />
        <GalleryCard
          slide={slides[5]}
          index={5}
          aspect="aspect-[4/3]"
          failedImages={failedImages}
          onError={handleError}
        />
      </div>
    </div>
  );
}

export default ImageCarousel;
