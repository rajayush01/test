import { useEffect } from "react";

/**
 * Adds `className` to <html> while this component is mounted, removing
 * it on unmount. Used to scope CSS that, in the original multi-page
 * site, only ever applied to specific pages (because those pages were
 * the only ones that `<link>`-ed the relevant stylesheet).
 */
export default function usePageBodyClass(className) {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add(className);
    return () => root.classList.remove(className);
  }, [className]);
}
