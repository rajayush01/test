import Header from "../components/Header";
import Footer from "../components/Footer";

const navItems = [
  { label: "The Good Identity", to: "/the-good-identity-legacy" },
  { label: "The Good Expression", href: "good-expression.html" },
  { label: "The Visual Identity", to: "/the-good-identity/logo", active: true },
  { label: "Good at Every Touchpoint", to: "/touchpoints" },
  { label: "Learn, Check, Apply Good", to: "/learn-check-apply" },
];

export default function Logo() {
  return (
    <>
      <Header
        logoTo="/the-good-identity-legacy"
        logoSrc="https://www.suzlon.com/images/logo-teal.svg"
        navItems={navItems}
      />

      <main>
        <section className="page-hero">
          <div className="page-hero-content">
            <span className="category-tag">VISUAL IDENTITY GUIDELINES</span>
            <h1>THE SUZLON LOGO</h1>
            <p>
              The primary identifier of our brand,
              <br />
              capturing our heritage and future in a single mark.
            </p>
          </div>
        </section>

        <nav className="page-jump-nav">
          <a href="#overview">Logo Overview</a>
          <a href="#lockups">Logo Lock-ups</a>
          <a href="#clearspace">Clear Space & Size</a>
          <a href="#colours">Colour Versions</a>
          <a href="#placement">Placement & Backgrounds</a>
          <a href="#donts">Logo Don'ts</a>
        </nav>

        <section id="overview" className="brand-book-section logo-section-white">
          <div className="section-title-group">
            <h2>LOGO OVERVIEW</h2>
            <div className="yellow-bar" />
          </div>

          <div className="logo-grid">
            <div className="logo-card">
              <p>
                Our logo is bolder, sharper reflecting efficiency and precision of technology yet
                softened by goodness and the textures of nature. The wordmark is custom-made with
                clean lines, ready for today's screens and tomorrow's scales.
              </p>
            </div>
          </div>
        </section>

        <section id="lockups" className="brand-book-section logo-section-beige">
          <div className="section-title-group">
            <h2>02 / LOGO LOCK-UPS</h2>
            <div className="yellow-bar" />
          </div>

          <div className="guideline-row">
            <div className="asset-card">
              <div className="asset-preview-box" style={{ backgroundColor: "var(--humble-beige)" }}>
                <img src="https://www.suzlon.com/images/logo-teal.svg" alt="Primary Logo Lock-up" />
              </div>
              <div className="asset-details">
                <h3>Primary Wordmark</h3>
                <p>
                  Our standard primary identifier for all digital, corporate, and broadcast
                  communications.
                </p>
              </div>
            </div>

            <div className="asset-card">
              <div className="asset-preview-box dark-box">
                <img
                  src="https://www.suzlon.com/images/logo-teal.svg"
                  alt="Reversed Logo Lock-up"
                  className="invert-logo"
                />
              </div>
              <div className="asset-details">
                <h3>Reversed Lock-up</h3>
                <p>
                  Used strictly on Ever Teal backgrounds or dark imagery where the primary logo
                  lacks contrast.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="clearspace" className="brand-book-section logo-section-white">
          <div className="section-title-group">
            <h2>03 / CLEAR SPACE & MINIMUM SIZE</h2>
            <div className="yellow-bar" />
          </div>

          <div className="two-column-layout">
            <div className="rule-box">
              <h3>Clear Space Rule</h3>
              <p>
                To ensure the logo retains maximum visual impact and legibility, always maintain a
                clear zone around it. No text, graphic elements, or image focal points should
                intrude into this boundary.
              </p>
              <div className="asset-preview-box">
                <img src="/images/Logo clear space.jpg" alt="Primary Logo Lock-up" />
              </div>
            </div>

            <div className="rule-box">
              <h3>Minimum Reproducible Size</h3>
              <p>
                To preserve sharp clarity across print and digital media, do not render the
                primary logo below these established minimum dimensions:
              </p>
              <ul className="spec-list">
                <li><strong>Digital / Web:</strong> 80px wide</li>
                <li><strong>Print Collateral:</strong> 25mm wide</li>
                <li><strong>Large Format / Signage:</strong> 150mm wide</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="colours" className="brand-book-section logo-section-beige">
          <div className="section-title-group">
            <h2>Colourway Matrix</h2>
            <div className="yellow-bar" />
          </div>

          <div className="colour-swatch-grid">
            <div className="swatch-card">
              <div className="asset-preview-box">
                <img src="/images/Colourway Matrix.jpg" alt="Primary Logo Lock-up" />
              </div>
            </div>
          </div>
        </section>

        <section id="placement" className="brand-book-section logo-section-white">
          <div className="section-title-group">
            <h2>05 / PLACEMENT & BACKGROUNDS</h2>
            <div className="yellow-bar" />
          </div>

          <div className="placement-grid">
            <div className="placement-card cut-top-right">
              <h3>Top Left Placement</h3>
              <p>
                Preferred positioning for standard corporate stationery, letters, slide decks, and
                digital banners.
              </p>
            </div>

            <div className="placement-card cut-bottom-left">
              <h3>Top Right Alignment</h3>
              <p>
                Secondary positioning used when layout constraints require left-aligned primary
                headlines.
              </p>
            </div>
          </div>
        </section>

        <section id="donts" className="brand-book-section logo-section-beige">
          <div className="section-title-group">
            <h2>06 / LOGO DON'TS</h2>
            <div className="yellow-bar" />
          </div>

          <div className="donts-grid">
            <div className="dont-card">
              <div className="dont-badge">DONT</div>
              <p>Do not stretch, squeeze, or alter the proportion of the letterforms.</p>
            </div>

            <div className="dont-card">
              <div className="dont-badge">DONT</div>
              <p>Do not change the official logo colours or use unapproved gradients.</p>
            </div>

            <div className="dont-card">
              <div className="dont-badge">DONT</div>
              <p>Do not add drop shadows, outlines, or glow effects behind the mark.</p>
            </div>

            <div className="dont-card">
              <div className="dont-badge">DONT</div>
              <p>Do not place the dark Ever Teal logo over busy or low-contrast photography.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer className="support-section">
        <div className="support-content">
          <h2>Need help with these resources?</h2>
          <p>Feel free to reach out and one of our team members will get back to you as soon as possible.</p>
          <a href="mailto:corpcom@suzlon.com" className="contact-btn">
            Contact Corporate Communications <span className="arrow">&rarr;</span>
          </a>
        </div>
      </Footer>
    </>
  );
}
