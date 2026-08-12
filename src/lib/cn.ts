import cx, { type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Merge Tailwind classes, de-duplicating conflicts (mirrors @repo/ui utils.ts).
export function cn(...inputs: ClassValue[]) {
  return twMerge(cx(inputs))
}
