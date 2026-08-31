import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/goodEnergyPeople.css";

const navItems = [
  { label: "The Good Expression", to: "/" },
  { label: "The Visual Identity", to: "/visual-identity" },
  { label: "Speak with Goodness", href: "goodvoice.html" },
  { label: "Good at Every Touchpoint", to: "/touchpoints" },
  { label: "The Good Energy People", to: "/good-energy-people", active: true },
];

export default function GoodEnergyPeople() {
  return (
    <div className="ge-page">
      <Header navItems={navItems} />

      <main className="editorial-main">
        <section className="page-hero" style={{ padding: "4rem 2rem 2rem 2rem" }}>
          <div className="page-hero-content">
            <h1>Good at Work: Culture & People</h1>
            <p>
              Discover our employer brand. Tools, guidelines, and visual assets to nurture our
              internal culture, attract top talent, and empower our workforce.
            </p>
          </div>
        </section>

        <div className="showcase-container">
          <section>
            <div className="section-header">
              <h2>Employee Value Proposition</h2>
              <p>
                The core positioning and messaging framework that makes Suzlon an employer of
                choice. Use this banner for internal portals and hiring platforms.
              </p>
            </div>
            <div className="evp-banner" />
          </section>

          <section>
            <div className="section-header">
              <h2>Our Values</h2>
              <p>
                A standardized set of 3 posters highlighting the core values that drive our daily
                operations and global mindset.
              </p>
            </div>
            <div className="grid-3-cols">
              <div className="poster-item" style={{ backgroundImage: "url('/images/Courage.jpg')" }} />
              <div className="poster-item" style={{ backgroundImage: "url('/images/Empathy.jpg')" }} />
              <div
                className="poster-item"
                style={{ backgroundImage: "url('/images/Making it happen.jpg')" }}
              />
            </div>
          </section>

          <section>
            <div className="section-header">
              <h2>Behaviours & Principles</h2>
              <p>
                A comprehensive set of 4 posters detailing the guiding principles and actionable
                behaviours expected across all our teams.
              </p>
            </div>
            <div className="grid-4-cols">
              <div className="poster-item" style={{ backgroundImage: "url('/images/care.jpg')" }} />
              <div className="poster-item" style={{ backgroundImage: "url('/images/boldly.jpg')" }} />
              <div className="poster-item" style={{ backgroundImage: "url('/images/One.jpg')" }} />
              <div className="poster-item" style={{ backgroundImage: "url('/images/Real.jpg')" }} />
            </div>
          </section>

          <section>
            <div className="section-header">
              <h2>Culture Film</h2>
            </div>

            <div
              className="video-container"
              style={{ backgroundImage: "none", backgroundColor: "#000", overflow: "hidden" }}
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/ioabYpRdazY?autoplay=1&mute=1&loop=1&playlist=ioabYpRdazY&controls=0&disablekb=1&fs=0&modestbranding=1&iv_load_policy=3&cc_load_policy=0"
                title="Suzlon Culture Film"
                frameBorder="0"
                allow="autoplay; web-share"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: "rgba(0, 112, 120, 0.1)",
                  zIndex: 1,
                }}
              />
            </div>

            <div className="action-wrapper">
              <a
                href="https://www.youtube.com/watch?v=ioabYpRdazY"
                className="contact-btn"
                target="_blank"
                rel="noreferrer"
              >
                Watch Full Video on YouTube <span className="arrow">&rarr;</span>
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer
        heading="Need customized recruitment collateral?"
        body="If you require specific hiring event branding or specialized HR communication designs, reach out to the central studio."
        buttonHref="mailto:corpcom@suzlon.com"
        buttonLabel="Contact Central Studio"
      />
    </div>
  );
}
