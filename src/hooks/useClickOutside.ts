"use client";

import { useEffect, RefObject } from "react";

/**
 * useClickOutside
 *
 * Calls the provided callback when a click or touch occurs outside the given ref's element.
 * Only listens when `active` is true.
 *
 * @param ref - React ref attached to the element to protect.
 * @param callback - Function to call when an outside interaction is detected.
 * @param active - Whether the listener should be active. Defaults to true.
 */
function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T | null>,
  callback: () => void,
  active = true,
): void {
  useEffect(() => {
    if (!active) return;

    const handleEvent = (event: MouseEvent | TouchEvent) => {
      const element = ref.current;
      if (element && !element.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleEvent);
    document.addEventListener("touchstart", handleEvent);

    return () => {
      document.removeEventListener("mousedown", handleEvent);
      document.removeEventListener("touchstart", handleEvent);
    };
  }, [ref, callback, active]);
}

export default useClickOutside;
