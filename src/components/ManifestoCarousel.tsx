import { Children, useEffect, useState, type ReactNode } from 'react';

const AUTOPLAY_MS = 4000;

export default function ManifestoCarousel({ children }: { children: ReactNode }) {
  const slides = Children.toArray(children);
  const total = slides.length;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setCurrent((c) => (c === total - 1 ? 0 : c + 1)), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [total]);

  return (
    <section className="manifesto-carousel">
      <div className="carousel-track" id="manifestoTrack" style={{ transform: `translateX(-${current * 100}%)` }}>
        {slides}
      </div>
      {/* Dots sit outside the sliding track. In the original HTML the track div was never closed, so the dots
          slid away with it after the first slide; this keeps them pinned as intended. */}
      <div className="carousel-dots" id="carouselDots">
        {slides.map((_, i) => (
          <div key={i} className={`dot${i === current ? ' active' : ''}`} onClick={() => setCurrent(i)} />
        ))}
      </div>
    </section>
  );
}
