export interface Slide {
  src: string;
  alt: string;
  caption?: string;
}

export interface ImageCarouselProps {
  slides: Slide[];
  className?: string;
}

export interface GalleryCardProps {
  slide: Slide;
  index: number;
  aspect: string;
  failedImages: Set<number>;
  onError: (i: number) => void;
}
