"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

function ImageCarousel({
  slides,
  autoPlay = true,
  autoPlayInterval = 5000,
  className = "",
  aspectRatio = "aspect-16/9",
}: ImageCarouselProps): React.ReactElement {
  if (slides.length === 0) return <></>;

  return (
    <div
      className={`group relative overflow-hidden rounded-xl ${aspectRatio} ${className}`}
      role="region"
      aria-roledescription="carousel"
      aria-label="Galerie d'images"
    >
      <Swiper
        modules={[Autoplay, Navigation, Pagination, A11y]}
        slidesPerView={1}
        loop={slides.length > 1}
        autoplay={
          autoPlay && slides.length > 1
            ? {
                delay: autoPlayInterval,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
            : false
        }
        navigation={slides.length > 1}
        pagination={slides.length > 1 ? { clickable: true } : false}
        a11y={{
          prevSlideMessage: "Image précédente",
          nextSlideMessage: "Image suivante",
        }}
        className="h-full w-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className={"relative h-full w-full"}>
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className={"object-cover"}
                sizes={"100vw"}
                loading={i === 0 ? "eager" : "lazy"}
                priority={i === 0}
              />
              {slide.caption && (
                <div
                  className={
                    "absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent p-6 pt-16"
                  }
                >
                  <p className={"text-[17px] font-medium text-white"}>{slide.caption}</p>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ImageCarousel;
