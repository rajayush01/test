import { useState } from "react";
import { Link } from "react-router-dom";

/**
 * navItems: [{ label, to?, href?, active? }]
 *  - `to`   -> internal route (rendered as a React Router <Link>)
 *  - `href` -> left exactly as the original site authored it
 *              (kept as a plain <a> since the target page/anchor
 *              doesn't exist as a route — matches original behaviour)
 */
export default function Header({
  logoTo = "/",
  logoSrc = "/images/Asset 1@2x-8.png",
  logoHeight = 45,
  navItems = [],
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="main-header">
      <div className="logo">
        <Link to={logoTo} onClick={() => setOpen(false)}>
          <img src={logoSrc} alt="Suzlon Logo" style={{ height: logoHeight, border: "none" }} />
        </Link>
      </div>

      <button
        type="button"
        className={`nav-toggle${open ? " is-open" : ""}`}
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`nav-links${open ? " nav-open" : ""}`}>
        {navItems.map((item, idx) =>
          item.to ? (
            <Link
              key={idx}
              to={item.to}
              className={item.active ? "active-nav" : ""}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ) : (
            <a
              key={idx}
              href={item.href}
              className={item.active ? "active-nav" : ""}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          )
        )}
      </nav>
    </header>
  );
}
