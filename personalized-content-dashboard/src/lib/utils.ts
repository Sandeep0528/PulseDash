import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges tailwind classes and handles conditional logic
 * Example: cn("text-red-500", isActive && "bg-blue-500")
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}