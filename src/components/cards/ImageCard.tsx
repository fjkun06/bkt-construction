"use client";

import React, { useState } from "react";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { FALLBACK_IMAGE } from "@/utils/constants";
import { CardData } from "@/interfaces/platform-description.interface";

interface ImageCardProps {
  card: CardData;
}

function ImageCard({ card }: ImageCardProps): React.ReactElement {
  const [src, setSrc] = useState(card.src);

  return (
    <Link
      href={card.href}
      className="group relative flex h-80 flex-col justify-end overflow-hidden rounded-lg p-6 text-white sm:h-96"
    >
      <Image
        alt={card.title}
        className="absolute inset-0 object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
        fill
        sizes="(max-width: 640px) 50vw, 25vw"
        src={src}
        onError={() => setSrc(FALLBACK_IMAGE)}
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
      <div className="relative z-10 flex flex-col gap-1 transition-transform duration-500 ease-out group-hover:-translate-y-2">
        <span className="text-xs font-medium tracking-wider text-white/80 uppercase">
          {card.label}
        </span>
        <span className="text-2xl font-bold sm:text-3xl">{card.title}</span>
        <span className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-white/90 transition-all duration-300 group-hover:gap-3">
          <span className="transition hover:underline">En savoir plus</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export default ImageCard;
