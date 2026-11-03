import { useEffect } from 'react';

interface RevealOptions {
  threshold: number;
  rootMargin: string;
}

/** Scroll-reveal: adds `.active` to every `.reveal` element the first time it enters the viewport. */
export function useReveal({ threshold, rootMargin }: RevealOptions) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin },
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [threshold, rootMargin]);
}
