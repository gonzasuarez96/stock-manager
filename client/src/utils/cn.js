import { cx } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
/**
 * Permite mezclar clases de tailwind de un mismo tipo sin conflictos
 */
export function cn(...inputs) {
  return twMerge(cx(inputs));
}
