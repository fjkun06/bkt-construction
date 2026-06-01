"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FALLBACK_IMAGE } from "@/utils/constants";
import { GalleryCardProps } from "@/interfaces/gallery.interface";

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

export default GalleryCard;
