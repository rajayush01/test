import { useEffect } from "react";

/**
 * Replicates the original site's scroll parallax script:
 * translates every `.parallax-wrapper` element based on its
 * parent's position in the viewport.
 */
export default function useParallax() {
  useEffect(() => {
    let ticking = false;

    const doParallax = () => {
      const wrappers = document.querySelectorAll(".parallax-wrapper");
      wrappers.forEach((wrapper) => {
        const parent = wrapper.parentElement;
        if (!parent) return;
        const rect = parent.getBoundingClientRect();

        if (rect.top < window.innerHeight + 200 && rect.bottom > -200) {
          const scrollRatio = rect.top / window.innerHeight - 0.5;
          wrapper.style.transform = `translate3d(0, ${scrollRatio * 15}%, 0)`;
        }
      });
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          doParallax();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    doParallax();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}
