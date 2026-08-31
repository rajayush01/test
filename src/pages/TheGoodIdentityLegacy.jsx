import Header from "../components/Header";
import Footer from "../components/Footer";

const navItems = [
  { label: "The Good Expression", href: "good-expression.html" },
  { label: "The Visual Identity", to: "/visual-identity", active: true },
  { label: "Good at Every Touchpoint", to: "/touchpoints" },
  { label: "Speak with Goodness", to: "/speak-with-goodness" },
  { label: "The Good Energy People", to: "/good-energy-people" },
];

export default function TheGoodIdentityLegacy() {
  return (
    <>
      <Header
        logoSrc="https://www.suzlon.com/images/logo-teal.svg"
        logoHeight={30}
        navItems={navItems}
      />

      <main>
        <section className="video-banner">
          <img
            src="https://www.suzlon.com/images/our-brand/Our%20Brand%20Banner%201920x1080.jpg"
            alt="Our Brand Banner"
            className="bg-video"
          />
          <div className="video-overlay" />
          <div className="banner-content">
            <h1>Suzlon Brand Center</h1>
            <p>
              Find the right brand guidance, assets, templates and approvals — organized around
              the "Good" navigation system.
            </p>
          </div>
        </section>

        <div className="search-container">
          <div className="search-box cut-top-right">
            <input
              type="text"
              placeholder="Search the Brand Center (e.g., logo, templates, tone of voice)..."
            />
            <button type="button">Search</button>
          </div>
          <div className="search-hint">
            Popular: <a href="#">presentation template</a>, <a href="#">colour palette</a>,{" "}
            <a href="#">approval</a>
          </div>
        </div>

        <section className="journeys-section">
          <div className="section-header">
            <h2>Priority User Journeys</h2>
            <div className="accent-line" />
          </div>
          <div className="journeys-grid">
            <a href="#" className="journey-card cut-bottom-left">
              <span className="need">I'm new to Suzlon brand</span>
              <div className="action-row">
                <span className="action">Start with Good</span>
                <span className="arrow">&rarr;</span>
              </div>
            </a>
            <a href="#" className="journey-card cut-top-right">
              <span className="need">I need a logo or template</span>
              <div className="action-row">
                <span className="action">Create with Confidence</span>
                <span className="arrow">&rarr;</span>
              </div>
            </a>
            <a href="#" className="journey-card cut-bottom-left">
              <span className="need">I'm creating communication</span>
              <div className="action-row">
                <span className="action">Speak with Goodness</span>
                <span className="arrow">&rarr;</span>
              </div>
            </a>
            <a href="#" className="journey-card cut-top-right">
              <span className="need">I need inspiration/examples</span>
              <div className="action-row">
                <span className="action">Brand in Action</span>
                <span className="arrow">&rarr;</span>
              </div>
            </a>
            <a href="#" className="journey-card cut-both">
              <span className="need">I need review or approval</span>
              <div className="action-row">
                <span className="action">Check Before You Share</span>
                <span className="arrow">&rarr;</span>
              </div>
            </a>
          </div>
        </section>

        <div className="divider-line" />

        {/* PILLAR 1: The Good Identity */}
        <section className="pillar-section" id="identity">
          <div className="pillar-layout">
            <div className="pillar-sidebar">
              <h2 className="pillar-title">The Good Identity</h2>
              <p className="pillar-desc">Start here: purpose, promise, story and snapshot</p>
            </div>

            <div className="hub-grid">
              <div className="hub-card cut-bottom-left">
                <div className="hub-title">Start with Good</div>
                <div className="hub-links">
                  <a href="#">About Suzlon</a>
                  <a href="#">Why We're Here</a>
                  <a href="#">Our Promise</a>
                  <a href="#">Where We're Going</a>
                  <a href="#">The Suzlon Manifesto</a>
                  <a href="#">Snapshot (Brand on a Page)</a>
                </div>
              </div>

              <div className="hub-card cut-top-right">
                <div className="hub-title">Speak with Goodness</div>
                <div className="hub-links">
                  <a href="#">Voice & Messaging Principles</a>
                  <a href="#">Tone of Voice</a>
                  <a href="#">Writing the Suzlon Way</a>
                  <a href="#">Quick Style Guide</a>
                </div>
              </div>

              <div className="hub-card cut-both">
                <div className="hub-title">Promise in Action</div>
                <div className="hub-links">
                  <a href="#">Promise Framework</a>
                  <a href="#">Promise in Communications</a>
                  <a href="#">Promise in Employee Experience</a>
                  <a href="#">Promise in Customer Experience</a>
                  <a href="#">Customer Value Proposition</a>
                </div>
              </div>

              <div className="hub-card cut-bottom-left">
                <div className="hub-title">Good at Work: Culture & People</div>
                <div className="hub-links">
                  <a href="#">Employee Value Proposition</a>
                  <a href="culture.html">Values & Behaviours</a>
                  <a href="#">Culture Statement</a>
                  <a href="#">Employee Experience</a>
                  <a href="#">Culture Film</a>
                </div>
              </div>

              <div className="hub-card cut-top-right">
                <div className="hub-title">Experience Principles</div>
                <div className="hub-links">
                  <a href="#">Scale</a>
                  <a href="#">Reassurance</a>
                  <a href="#">Outcomes in Beta</a>
                  <a href="#">Expert Confidence</a>
                  <a href="#">Excitingly Positive</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PILLAR 2: The Good Expression */}
        <section className="pillar-section" id="expression">
          <div className="pillar-layout">
            <div className="pillar-sidebar">
              <h2 className="pillar-title">The Good Expression</h2>
              <p className="pillar-desc">Build the brand: logo, colour, type, promise line and The Sum</p>
            </div>

            <div className="hub-grid">
              <div className="hub-card cut-both">
                <div className="hub-title">The Suzlon Logo</div>
                <div className="hub-links">
                  <a href="logo-system.html">Logo Overview</a>
                  <a href="#">Logo Lock-ups</a>
                  <a href="#">Clear Space & Minimum Size</a>
                  <a href="#">Colour Versions</a>
                  <a href="#">Placement & Backgrounds</a>
                  <a href="#">Logo Don'ts</a>
                </div>
              </div>

              <div className="hub-card cut-bottom-left">
                <div className="hub-title">The Promise Line</div>
                <div className="hub-links">
                  <a href="#">Understanding the Promise</a>
                  <a href="#">Promise Lock-ups</a>
                  <a href="#">Colour Applications</a>
                  <a href="#">Minimum Size</a>
                  <a href="#">Informal Uses</a>
                  <a href="#">Promise Line Don'ts</a>
                </div>
              </div>

              <div className="hub-card cut-top-right">
                <div className="hub-title">The Sum Design System</div>
                <div className="hub-links">
                  <a href="visual-device.html">Introducing the Sum</a>
                  <a href="#">Using the Lock-up</a>
                  <a href="#">Minimum Size</a>
                  <a href="#">Applications</a>
                  <a href="#">Patterns & Expression</a>
                  <a href="#">The Sum Don'ts</a>
                </div>
              </div>

              <div className="hub-card cut-both">
                <div className="hub-title">Colours of Good</div>
                <div className="hub-links">
                  <a href="colour-palette.html">Primary Palette</a>
                  <a href="#">Secondary Palette</a>
                  <a href="#">Colour Combinations</a>
                  <a href="#">Digital & Print Specifications</a>
                  <a href="#">Accessibility & Contrast</a>
                  <a href="#">Colour Don'ts</a>
                </div>
              </div>

              <div className="hub-card cut-bottom-left">
                <div className="hub-title">Type with Clarity</div>
                <div className="hub-links">
                  <a href="typography.html">Primary Typeface</a>
                  <a href="#">Secondary Typeface</a>
                  <a href="#">Hierarchy & Scale</a>
                  <a href="#">Digital Use</a>
                  <a href="#">Presentation Use</a>
                  <a href="#">Typography Don'ts</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer className="support-section">
        <div className="support-content">
          <h2>Need help with these resources?</h2>
          <p>Feel free to reach out and one of our team members will get back to you as soon as possible.</p>
          <a href="mailto:corpcom@suzlon.com" className="contact-btn">
            Contact Corporate Communications <span>&rarr;</span>
          </a>
        </div>
      </Footer>
    </>
  );
}
