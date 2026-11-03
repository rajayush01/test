import { memo, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

export interface HubItem {
  label: string;
  media: string[];
  effect?: 'blink';
  download?: { href: string; label: string; target?: string; download?: boolean };
}

export interface Hub {
  title: string;
  description: string;
  items: HubItem[];
}

/**
 * loop — Good Identity / Good Expression: slides move left and wrap seamlessly (a clone of slide 1 sits at the end)
 * yoyo — Good at Every Touchpoint: slides travel forward, then back
 */
type Mode = 'loop' | 'yoyo';

const SLIDE_TRANSITION = 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.3s ease-in-out';
const INTERVAL_MS = 3500;

const Slide = memo(function Slide({ url, blinkFirst, clone }: { url: string; blinkFirst?: boolean; clone?: boolean }) {
  // blinkFirst: undefined → normal slide, true/false → absolutely stacked "blink" slide (true = the visible one)
  const style =
    blinkFirst === undefined
      ? undefined
      : ({ position: 'absolute', top: 0, left: 0, opacity: blinkFirst ? 1 : 0, display: blinkFirst ? 'flex' : 'none' } as const);
  return (
    <div className={`slide-item${clone ? ' slide-clone' : ''}`} style={style}>
      {url.toLowerCase().endsWith('.mp4') ? <video src={url} autoPlay loop muted playsInline /> : <img src={url} alt="Showcase Media" />}
    </div>
  );
});

export default function ShowcaseHub({ hub, mode }: { hub: Hub; mode: Mode }) {
  const [activeItem, setActiveItem] = useState(0);
  const [urls, setUrls] = useState<string[]>([]);
  const [blink, setBlink] = useState(false);
  const [renderId, setRenderId] = useState(0);
  const [activeDot, setActiveDot] = useState(0);

  const trackRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  // Mutable slider state lives in a ref: the interval callbacks always see the latest values
  const st = useRef({ urls: [] as string[], blink: false, index: 0, dir: 1, interval: undefined as number | undefined, timers: [] as number[] });

  const later = useCallback((fn: () => void, ms: number) => {
    st.current.timers.push(window.setTimeout(fn, ms));
  }, []);

  const clearTimers = useCallback(() => {
    st.current.timers.forEach((t) => window.clearTimeout(t));
    st.current.timers = [];
  }, []);

  const stopAuto = useCallback(() => {
    window.clearInterval(st.current.interval);
    st.current.interval = undefined;
  }, []);

  const goTo = useCallback(
    (index: number) => {
      const s = st.current;
      const track = trackRef.current;
      if (!track || s.urls.length === 0) return;
      s.index = index;

      if (s.blink) {
        // Blink / fade transition
        track.querySelectorAll<HTMLElement>('.slide-item').forEach((slide, idx) => {
          if (idx === index) {
            slide.style.display = 'flex';
            later(() => {
              slide.style.opacity = '1';
            }, 50);
          } else {
            slide.style.opacity = '0';
            later(() => {
              if (st.current.index !== idx) slide.style.display = 'none';
            }, 300);
          }
        });
        track.style.transform = 'translateX(0%)';
        setActiveDot(index);
      } else if (mode === 'loop') {
        track.style.transition = SLIDE_TRANSITION;
        track.style.transform = `translateX(calc(-${index * 100}%))`;
        setActiveDot(index % s.urls.length); // the clone at the end maps back to dot 0
        if (index === s.urls.length) {
          // wait for the slide to finish, then jump back to the real first slide with no transition
          later(() => {
            track.style.transition = 'none';
            s.index = 0;
            track.style.transform = 'translateX(0%)';
          }, 800);
        }
      } else {
        track.style.transform = `translateX(calc(-${index * 100}%))`;
        setActiveDot(index);
      }
    },
    [mode, later],
  );

  const startAuto = useCallback(() => {
    stopAuto();
    if (st.current.urls.length <= 1) return;
    st.current.interval = window.setInterval(() => {
      const s = st.current;
      if (s.blink) {
        goTo((s.index + 1) % s.urls.length);
      } else if (mode === 'loop') {
        goTo(s.index + 1);
      } else {
        if (s.index >= s.urls.length - 1) s.dir = -1;
        else if (s.index <= 0) s.dir = 1;
        goTo(s.index + s.dir);
      }
    }, INTERVAL_MS);
  }, [mode, goTo, stopAuto]);

  const select = useCallback(
    (i: number) => {
      const item = hub.items[i];
      const s = st.current;
      setActiveItem(i);
      clearTimers();
      stopAuto();
      s.blink = item.effect === 'blink';
      if (trackRef.current) trackRef.current.style.opacity = '0';
      // fade the old media out, then swap in the new set
      later(() => {
        s.urls = item.media;
        s.index = 0;
        s.dir = 1;
        setUrls(item.media);
        setBlink(s.blink);
        setActiveDot(0);
        setRenderId((n) => n + 1);
      }, 200);
    },
    [hub.items, later, clearTimers, stopAuto],
  );

  // After the new slides are in the DOM
  useLayoutEffect(() => {
    if (renderId === 0) return;
    const track = trackRef.current;
    if (!track) return;
    const s = st.current;
    if (mode === 'loop') track.style.transition = 'none';
    track.style.transform = 'translateX(0%)';
    track.style.opacity = '1';
    if (s.urls.length > 1) {
      if (mode === 'yoyo') goTo(0);
      startAuto();
    } else {
      stopAuto();
    }
  }, [renderId, mode, goTo, startAuto, stopAuto]);

  // Default tab on mount; clean everything up on unmount
  useEffect(() => {
    select(0);
    return () => {
      clearTimers();
      stopAuto();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onDot = (idx: number) => {
    const s = st.current;
    const track = trackRef.current;
    stopAuto();
    if (mode === 'loop') {
      if (track && s.index === s.urls.length && !s.blink) {
        track.style.transition = 'none';
        s.index = 0;
        track.style.transform = 'translateX(0%)';
        void track.offsetWidth; // force reflow so the jump is instant
      }
    } else {
      s.dir = idx > s.index ? 1 : -1;
    }
    goTo(idx);
    startAuto();
  };

  const onEnter = () => {
    stopAuto();
    if (mode === 'loop') canvasRef.current?.querySelectorAll('video').forEach((v) => v.pause());
  };
  const onLeave = () => {
    startAuto();
    if (mode === 'loop') canvasRef.current?.querySelectorAll('video').forEach((v) => void v.play().catch(() => undefined));
  };

  return (
    <article className="showcase-hub reveal">
      <div className="showcase-canvas" ref={canvasRef} onMouseEnter={onEnter} onMouseLeave={onLeave}>
        <div className="slider-track" ref={trackRef}>
          {urls.map((url, idx) => (
            <Slide key={`${renderId}-${idx}`} url={url} blinkFirst={blink ? idx === 0 : undefined} />
          ))}
          {mode === 'loop' && urls.length > 1 && !blink && <Slide key={`${renderId}-clone`} url={urls[0]} clone />}
        </div>
        <div className="slider-dots" style={{ display: urls.length > 1 ? 'flex' : 'none' }}>
          {urls.map((_, idx) => (
            <div key={`${renderId}-${idx}`} className={`dot ${idx === activeDot ? 'active' : ''}`} onClick={() => onDot(idx)} />
          ))}
        </div>
      </div>

      <div className="showcase-controls">
        <div className="showcase-info">
          <h2>{hub.title}</h2>
          <p>{hub.description}</p>
        </div>
        <div className="showcase-nav">
          {hub.items.map((item, i) => (
            <div key={item.label} className={`nav-item${i === activeItem ? ' active-item' : ''}`}>
              <a
                href="#"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  select(i);
                }}
              >
                {item.label}
              </a>
              {item.download && (
                <a
                  href={item.download.href}
                  className="nav-download"
                  target={item.download.target}
                  rel={item.download.target === '_blank' ? 'noreferrer' : undefined}
                  download={item.download.download}
                >
                  {item.download.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
