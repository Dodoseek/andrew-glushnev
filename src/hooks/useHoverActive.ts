import { useState, useEffect, useRef } from "react";

export function useHoverActive() {
  const [isHovering, setIsHovering] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);
    const handleTouchStart = () => setIsActive(true);
    const handleTouchEnd = () => setIsActive(false);

    const element = ref.current;

    if (element) {
      element.addEventListener("mouseenter", handleMouseEnter, {
        passive: true,
      });
      element.addEventListener("mouseleave", handleMouseLeave, {
        passive: true,
      });
      element.addEventListener("mousedown", handleMouseDown, { passive: true });
      element.addEventListener("mouseup", handleMouseUp, { passive: true });
      element.addEventListener("touchstart", handleTouchStart, {
        passive: true,
      });
      element.addEventListener("touchend", handleTouchEnd, { passive: true });
    }

    return () => {
      if (element) {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
        element.removeEventListener("mousedown", handleMouseDown);
        element.removeEventListener("mouseup", handleMouseUp);
        element.removeEventListener("touchstart", handleTouchStart);
        element.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, []);

  const isHoverEffect = window.matchMedia("(hover: hover)").matches
    ? isHovering
    : isActive;

  return { ref, isHoverEffect };
}
