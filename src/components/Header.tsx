import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const NAV = [
  { to: '/the-good-identity', label: 'The Good Identity' },
  { to: '/the-good-expression', label: 'The Good Expression' },
  { to: '/touchpoints', label: 'Good at Every Touchpoint' },
  { to: '/the-good-voice', label: 'Speak with Goodness' },
  { to: '/good-energy-people', label: 'The Good Energy People' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="main-header">
      <div className="logo">
        <Link to="/">
          <img src="/Homepage Images/Asset 1@2x-8.png" alt="Suzlon Logo" className="md:h-[45px] h-[35px] border-none" />
        </Link>
      </div>

      {/* Desktop navigation — identical markup/classes to the original, so the underline hover etc. still apply */}
      <nav className="nav-links max-[1100px]:hidden" aria-label="Primary">
        {NAV.map((item) => (
          <NavLink key={item.to} to={item.to} className={({ isActive }) => (isActive ? 'active-nav' : undefined)}>
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* Mobile / tablet: the original simply hid the links below 768px; this gives them a menu instead */}
      <button
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((o) => !o)}
        className="hidden max-[1100px]:flex flex-col justify-center items-center gap-[5px] w-11 h-11 -mr-2 bg-transparent border-none cursor-pointer"
      >
        <span className={`block h-[2px] w-6 bg-ever-teal transition-transform duration-300 ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
        <span className={`block h-[2px] w-6 bg-ever-teal transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
        <span className={`block h-[2px] w-6 bg-ever-teal transition-transform duration-300 ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
      </button>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="min-[1101px]:hidden absolute left-0 right-0 top-full flex flex-col bg-white shadow-[0_14px_30px_rgba(0,112,120,0.12)]"
        >
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `block px-[5vw] py-4 text-[0.85rem] font-bold uppercase tracking-[0.5px] text-ever-teal no-underline border-t border-[rgba(0,112,120,0.1)] ${
                  isActive ? 'bg-humble-beige shadow-[inset_4px_0_0_#FFC600]' : ''
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
