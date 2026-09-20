import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Standard shadcn/ui helper: merges conditional class names (clsx)
// and resolves conflicting Tailwind classes (twMerge), e.g.
// cn("p-2", condition && "p-4") -> "p-4" wins instead of both applying.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
