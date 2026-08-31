import { useMemo, useState } from "react";

/**
 * links: [{
 *   label: string,
 *   image?: string,          // single image
 *   slider?: string[],       // OR a set of images for the slider controls
 *   defaultActive?: boolean, // matches the original `.active-link` on load
 *   extra?: JSX.Element,     // e.g. the "inline-download" button block
 * }]
 */
export default function LinkSwapHub({ cutClass = "", title, description, links, action }) {
  const defaultIndex = useMemo(() => {
    const idx = links.findIndex((l) => l.defaultActive);
    return idx === -1 ? 0 : idx;
  }, [links]);

  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const [sliderIndex, setSliderIndex] = useState(0);

  const activeLink = links[activeIndex];
  const isSlider = Array.isArray(activeLink?.slider) && activeLink.slider.length > 0;
  const currentImage = isSlider ? activeLink.slider[sliderIndex] : activeLink?.image;

  const selectLink = (idx) => {
    setActiveIndex(idx);
    setSliderIndex(0);
  };

  const prevSlide = () => {
    if (!isSlider) return;
    setSliderIndex((i) => (i - 1 + activeLink.slider.length) % activeLink.slider.length);
  };

  const nextSlide = () => {
    if (!isSlider) return;
    setSliderIndex((i) => (i + 1) % activeLink.slider.length);
  };

  return (
    <article className="modern-hub">
      <div className={`hub-visual ${cutClass}`}>
        <div
          className="visual-bg"
          style={currentImage ? { backgroundImage: `url('${currentImage}')` } : undefined}
        />
        {isSlider && (
          <div className="slider-controls" style={{ display: "flex" }}>
            <button type="button" className="slider-btn prev-btn" onClick={prevSlide}>
              &#10094;
            </button>
            <button type="button" className="slider-btn next-btn" onClick={nextSlide}>
              &#10095;
            </button>
            <div className="slider-dots">
              {activeLink.slider.map((_, idx) => (
                <div
                  key={idx}
                  className={`dot${idx === sliderIndex ? " active" : ""}`}
                  onClick={() => setSliderIndex(idx)}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="hub-content-grid">
        <div className="hub-text">
          <h2>{title}</h2>
          <p>{description}</p>

          <ul className="interactive-links">
            {links.map((link, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className={idx === activeIndex ? "active-link" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    selectLink(idx);
                  }}
                >
                  {link.label}
                </a>
                {link.extra}
              </li>
            ))}
          </ul>
        </div>
        {action && <div className="hub-actions">{action}</div>}
      </div>
    </article>
  );
}
