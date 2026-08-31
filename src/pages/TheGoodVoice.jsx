import Header from "../components/Header";
import Footer from "../components/Footer";
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import "../styles/theGoodVoice.css";

const navItems = [
  { label: "The Good Expression", to: "/" },
  { label: "The Visual Identity", to: "/visual-identity" },
  { label: "Good at Every Touchpoint", to: "/touchpoints" },
  { label: "Speak with Goodness", to: "/speak-with-goodness", active: true },
  { label: "The Good Energy People", to: "/good-energy-people" },
];

export default function TheGoodVoice() {
  useRevealOnScroll(".reveal", "active");

  return (
    <>
      <Header navItems={navItems} />

      <main className="editorial-main">
        <section className="page-hero" style={{ padding: "4rem 2rem 2rem 2rem" }}>
          <div className="page-hero-content reveal">
            <h1>Speak with Goodness</h1>
            <p>
              Establishing our verbal identity, tone of voice, and the core principles for
              writing the Suzlon way.
            </p>
          </div>
        </section>

        <div className="voice-section-container">
          <div className="voice-grid reveal">
            <div className="voice-text-card">
              <div className="embedded-banner">
                <div className="accent-shape-1" />
                <div className="accent-shape-2" />
                <h3>Tone of Voice</h3>
                <p>
                  Our voice is progressive, authoritative yet approachable, and deeply purposeful.
                  We speak with the confidence of an industry leader driving a sustainable future.
                </p>
                <div className="brand-logo-area">Suzlon Brand Centre</div>
              </div>

              <div className="voice-actions">
                <a href="/images/Suzlon Tone of Voice.pdf" className="contact-btn" target="_blank" rel="noreferrer">
                  Tone of Voice Guide (.PDF) <span className="arrow">&rarr;</span>
                </a>
              </div>
            </div>

            <div className="voice-text-card">
              <div className="embedded-banner alt-tone">
                <div className="accent-shape-1" />
                <div className="accent-shape-2" />
                <h3>Brand Voice</h3>
                <p>
                  Clear, concise, and structured. Guidelines on active voice, plain English
                  standards, and formatting terminology to ensure consistent communication across
                  all channels.
                </p>
                <div className="brand-logo-area">Suzlon Brand Centre</div>
              </div>

              <div className="voice-actions">
                <a href="/images/Suzlon Brand Voice.pdf" className="contact-btn" target="_blank" rel="noreferrer">
                  Brand Voice Guide (.PDF) <span className="arrow">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer className="support-section reveal">
        <div className="support-content">
          <h2>Need help with messaging or copy review?</h2>
          <p>
            Reach out to the corporate communications team for editorial guidance on major
            announcements or campaigns.
          </p>
          <div>
            <a href="mailto:corpcom@suzlon.com" className="contact-btn">
              Contact Corporate Communications <span className="arrow">&rarr;</span>
            </a>
          </div>
        </div>
      </Footer>
    </>
  );
}
