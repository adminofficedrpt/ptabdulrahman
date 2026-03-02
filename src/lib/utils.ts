import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names into a single string, handling conditional classes.
 * This is a utility for working with Tailwind CSS and dynamic class names.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(...inputs));
}

/**
 * Generates a fluid typography clamp expression based on viewport width.
 */
export function getFluidSize(
  minPx: number,
  maxPx: number,
  minViewport = 320,
  maxViewport = 1200
): string {
  const slope = (maxPx - minPx) / (maxViewport - minViewport);
  const intercept = minPx - slope * minViewport;
  return `clamp(${minPx}px, ${intercept.toFixed(4)}px + ${(slope * 100).toFixed(4)}vw, ${maxPx}px)`;
}
