import { useEffect } from "react";
import { brand } from "../data/brand.js";

export function usePageTitle(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | ${brand.name}` : `${brand.name} | Premium Custom Cakes`;

    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      metaDescription?.setAttribute("content", description);
    }
  }, [title, description]);
}
