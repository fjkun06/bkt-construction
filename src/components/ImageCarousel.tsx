"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
  className?: string;
}

interface GalleryCardProps {
  slide: Slide;
  index: number;
  aspect: string;
  failedImages: Set<number>;
  onError: (i: number) => void;
}

function GalleryCard({
  slide,
  index,
  aspect,
  failedImages,
  onError,
}: GalleryCardProps): React.ReactElement {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      className="group"
    >
      <Link href="/realisations" className="block cursor-pointer">
        <div className={`relative ${aspect} overflow-hidden bg-gray-200`}>
          <Image
            src={failedImages.has(index) ? FALLBACK_IMAGE : slide.src}
            alt={slide.alt}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            onError={() => onError(index)}
          />
        </div>
        {slide.caption && (
          <div className="mt-3 flex items-start justify-between gap-2">
            <div>
              <p className="text-primary text-[15px] font-semibold">{slide.caption}</p>
              <p className="mt-1 text-[13px] text-gray-500">
                Expertise et savoir-faire dans tous les corps d&apos;état
              </p>
            </div>
            <ArrowUpRight
              size={16}
              className="group-hover:text-primary mt-1 shrink-0 text-gray-400 transition-colors"
            />
          </div>
        )}
      </Link>
    </motion.div>
  );
}

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
      {/* Left: 2 medium images */}
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

      {/* Middle: 1 tall + 1 medium */}
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

      {/* Right: 2 stacked */}
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
