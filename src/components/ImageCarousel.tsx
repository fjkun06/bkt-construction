"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FALLBACK_IMAGE } from "@/utils/constants";

interface Slide {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageCarouselProps {
  slides: Slide[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
  aspectRatio?: string;
}

interface GalleryItemProps {
  slide: Slide;
  index: number;
  aspect?: string;
  colSpan?: string;
  failedImages: Set<number>;
  onError: (index: number) => void;
}

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay: i * 0.12,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

function GalleryItem({
  slide,
  index,
  aspect = "aspect-[4/3]",
  colSpan = "",
  failedImages,
  onError,
}: GalleryItemProps): React.ReactElement {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={`group relative ${aspect} ${colSpan} overflow-hidden bg-gray-900`}
    >
      <Image
        src={failedImages.has(index) ? FALLBACK_IMAGE : slide.src}
        alt={slide.alt}
        fill
        className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
        sizes="100vw"
        onError={() => onError(index)}
      />

      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 flex items-end p-5 sm:p-7 md:p-8">
        <div className="w-full translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-[1px] w-6 bg-white/60" />
            <span className="text-[11px] font-medium tracking-[0.2em] text-white/70 uppercase">
              Projet
            </span>
          </div>
          <p className="text-lg font-semibold text-white sm:text-xl md:text-2xl">
            {slide.caption}
          </p>
          <div className="mt-4 flex items-center gap-2 text-sm text-white/80">
            <span>Voir le projet</span>
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ImageCarousel({ slides, className = "" }: ImageCarouselProps): React.ReactElement {
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());

  if (slides.length === 0) return <></>;

  const handleError = (index: number) => {
    setFailedImages((prev) => {
      const next = new Set(prev);
      next.add(index);
      return next;
    });
  };

  // Editorial layout: panoramic → 3/2 split → 2/3 split → panoramic
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {/* Row 1: Full-width panoramic */}
      <GalleryItem
        slide={slides[0]}
        index={0}
        aspect="aspect-[21/9]"
        failedImages={failedImages}
        onError={handleError}
      />

      {/* Row 2: 60/40 split */}
      <div className="grid grid-cols-1 gap-1 md:grid-cols-5">
        <GalleryItem
          slide={slides[1]}
          index={1}
          aspect="aspect-[4/3] md:aspect-[16/10]"
          colSpan="md:col-span-3"
          failedImages={failedImages}
          onError={handleError}
        />
        <GalleryItem
          slide={slides[2]}
          index={2}
          aspect="aspect-[4/3] md:aspect-[16/10]"
          colSpan="md:col-span-2"
          failedImages={failedImages}
          onError={handleError}
        />
      </div>

      {/* Row 3: 40/60 split */}
      <div className="grid grid-cols-1 gap-1 md:grid-cols-5">
        <GalleryItem
          slide={slides[3]}
          index={3}
          aspect="aspect-[4/3] md:aspect-[16/10]"
          colSpan="md:col-span-2"
          failedImages={failedImages}
          onError={handleError}
        />
        <GalleryItem
          slide={slides[4]}
          index={4}
          aspect="aspect-[4/3] md:aspect-[16/10]"
          colSpan="md:col-span-3"
          failedImages={failedImages}
          onError={handleError}
        />
      </div>

      {/* Row 4: Full-width panoramic */}
      <GalleryItem
        slide={slides[5]}
        index={5}
        aspect="aspect-[21/9]"
        failedImages={failedImages}
        onError={handleError}
      />
    </div>
  );
}

export default ImageCarousel;
