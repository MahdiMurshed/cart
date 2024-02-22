import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const METHODS = {
  GET: "GET",
  POST: "POST",
  PATCH: "PATCH",
  DELETE: "DELETE",
  PUT: "PUT",
};
