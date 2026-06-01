"use client";

import { useEffect, useRef } from "react";

/**
 * Controller for ConstructionSkyline.
 *
 * Sets up a staggered stroke-drawing animation on every <path> and <circle>
 * inside the SVG: each shape draws on, holds, erases, and rests in a loop.
 */
export function useConstructionSkyline() {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const shapes = ref.current.querySelectorAll<SVGGeometryElement>("path, circle");
    shapes.forEach((shape, index) => {
      const length = shape.getTotalLength();
      shape.style.setProperty("--length", String(length));
      shape.style.strokeDasharray = "var(--length)";
      shape.style.strokeDashoffset = "var(--length)";
      shape.style.animation = `draw 26s ${index * 0.04}s ease-in-out infinite`;
    });
  }, []);

  return ref;
}
