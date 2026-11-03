import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

interface SearchItem {
  title: string;
  to: string;
  description: string;
  keywords: string;
}

// The content index for the site
const searchIndex: SearchItem[] = [
  {
    title: 'The Good Expression',
    to: '/the-good-expression',
    description: 'Icons, photography style, motion principles, and layout grids.',
    keywords: 'icon, dual tone, photography, images, warmth, motion, layout, grid, system',
  },
  {
    title: 'Speak with Goodness (Tone of Voice)',
    to: '/the-good-voice',
    description: 'Verbal identity, grammar, and writing style guidelines.',
    keywords: 'voice, tone, writing, grammar, checklist, active voice, copy, messaging',
  },
  {
    title: 'The Good Energy People',
    to: '/good-energy-people',
    description: 'Culture, EVP, Values, Behaviours, and Recruitment assets.',
    keywords: 'people, culture, video, film, evp, employer brand, values, behaviours, recruitment, posters',
  },
  {
    title: 'Good at Every Touchpoint',
    to: '/touchpoints',
    description: 'Download PPT, Word, and digital UI templates.',
    keywords: 'templates, presentation template, ready to use, ppt, powerpoint, word, document, ui, physical, operations, signage',
  },
  {
    title: 'The Visual Identity',
    to: '/the-good-identity',
    description: 'Logos, colour palettes, typography, and core brand identity.',
    keywords: 'logo, colours, colour palette, fonts, typography, identity, brand, yellow, teal',
  },
];

export default function BrandSearch() {
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const query = value.toLowerCase().trim();
  const results = query
    ? searchIndex.filter(
        (item) => item.title.toLowerCase().includes(query) || item.keywords.toLowerCase().includes(query) || item.description.toLowerCase().includes(query),
      )
    : [];

  // Close when clicking outside
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      const t = e.target as Node;
      if (!inputRef.current?.contains(t) && !dropdownRef.current?.contains(t) && !buttonRef.current?.contains(t)) setOpen(false);
    };
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  return (
    <div className="search-container relative">
      <div className="search-box cut-top-right">
        <input
          ref={inputRef}
          type="text"
          id="brandSearchInput"
          placeholder="Search the Brand Center (e.g., logo, templates, tone of voice)..."
          autoComplete="off"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setOpen(e.target.value.trim().length > 0);
          }}
          onClick={() => {
            if (value.trim().length > 0) setOpen(true);
          }}
        />
        <button
          ref={buttonRef}
          id="brandSearchBtn"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setOpen(query.length > 0);
          }}
        >
          Search
        </button>
      </div>

      <div id="brandSearchResults" ref={dropdownRef} className={`search-results-dropdown${open ? ' active' : ''}`}>
        {query.length > 0 &&
          (results.length > 0 ? (
            results.map((item) => (
              <Link key={item.to} to={item.to} className="search-result-item">
                <span className="search-result-title">{item.title}</span>
                <span className="search-result-desc">{item.description}</span>
              </Link>
            ))
          ) : (
            <div className="no-results">No results found for "{query}"</div>
          ))}
      </div>

      <div className="search-hint">
        Popular: <Link to="/touchpoints">presentation template</Link>, <Link to="/visual-identity">colour palette</Link>,{' '}
        <a href="mailto:corpcom@suzlon.com">approval</a>
      </div>
    </div>
  );
}
