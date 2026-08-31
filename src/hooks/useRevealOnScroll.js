import { useEffect } from "react";

/**
 * Replicates the original site's scroll-reveal script.
 * @param {string} selector - elements to observe (default matches `.modern-hub`)
 * @param {string} activeClass - class added once the element intersects (default `in-view`)
 */
export default function useRevealOnScroll(selector = ".modern-hub", activeClass = "in-view") {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(activeClass);
            obs.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector, activeClass]);
}
