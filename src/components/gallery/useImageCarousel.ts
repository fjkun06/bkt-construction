"use client";

import { useCallback, useState } from "react";

/**
 * Controller hook for ImageCarousel.
 * Encapsulates image-failure tracking so the component stays purely presentational.
 */
export function useImageCarousel() {
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());

  const hasFailed = useCallback(
    (index: number) => failedImages.has(index),
    [failedImages],
  );

  const handleError = useCallback((index: number) => {
    setFailedImages((prev) => new Set([...prev, index]));
  }, []);

  /**
   * Column layout for the editorial masonry grid.
   * Each entry defines its Tailwind span and the cards it holds.
   * Kept outside the component so it never recreates on render.
   */
  const COLUMNS = [
    {
      span: "lg:col-span-5",
      cards: [
        { index: 0, aspect: "aspect-[4/3]" },
        { index: 1, aspect: "aspect-[4/3]" },
      ],
    },
    {
      span: "lg:col-span-4",
      cards: [
        { index: 2, aspect: "aspect-[3/4]" },
        { index: 3, aspect: "aspect-[4/3]" },
      ],
    },
    {
      span: "lg:col-span-3",
      cards: [
        { index: 4, aspect: "aspect-[4/3]" },
        { index: 5, aspect: "aspect-[4/3]" },
      ],
    },
  ];

  return { hasFailed, handleError, COLUMNS };
}
