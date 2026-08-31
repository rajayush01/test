import Header from "../components/Header";
import Footer from "../components/Footer";

const navItems = [
  { label: "The Good Expression", href: "goodexpression.html", active: true },
  { label: "The Visual Identity", to: "/visual-identity" },
  { label: "Good at Every Touchpoint", to: "/touchpoints" },
  { label: "Speak with Goodness", to: "/speak-with-goodness" },
];

export default function Home() {
  return (
    <>
      <Header navItems={navItems} />

      <main>
        {/* Modern Hero Banner */}
        <section className="video-banner">
          <img src="/images/Main Banner.jpg" alt="Our Brand Banner" className="bg-video" />
          <div className="video-overlay" />
          <div className="banner-content">
            <h1>Suzlon Brand Center</h1>
            <p>
              Find the right brand guidance, assets, templates and approvals — organised around
              the "Good" navigation system.
            </p>
          </div>
        </section>

        {/* Floating Global Search Component */}
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

        {/* Priority User Journeys */}
        <section className="journeys-section">
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

        {/* SECTION 3: The World is Changing */}
        <section className="brand-book-section world-changing-modern">
          <div className="content-wrapper">
            <div className="text-content">
              <h2>
                <span className="heading-green">The World is Changing </span>
                <span className="heading-yellow">and so must the energy that powers it</span>
              </h2>
              <p>
                We are in the middle of the fastest, widest and deepest energy transition in
                human history. The world is becoming dramatically more energy-intensive. Cities
                are growing.
              </p>
              <p>
                AI, data centres, manufacturing, mobility, and digital infrastructure are driving
                unprecedented energy demand. Humanity needs more power than ever before. But the
                old energy model can no longer sustain the future safely or affordably.
              </p>
            </div>

            <div className="image-content cut-bottom-left">
              <img
                src="https://www.suzlon.com/images/our-brand/Our%20Brand%20Banner%201920x1080.jpg"
                alt="The Changing World of Energy"
              />
            </div>
          </div>
        </section>

        {/* SECTION 6: Suzlon is Evolving */}
        <section className="brand-book-section suzlon-evolving-modern">
          <div className="evolving-content-wrapper">
            <div className="evolving-text-group">
              <p className="body-desc">
                Wind, solar, battery storage, digital intelligence, predictive analytics, and
                grid-smart controls must now work together as one coordinated system to deliver
                flexible, stable, round-the-clock renewable power.
              </p>

              <h2>
                THAT'S WHY{" "}
                <span className="highlight-yellow">
                  <br />
                  SUZLON IS EVOLVING.
                </span>
                <br /> TO REFLECT THIS LARGER SHIFT IN THE ENERGY WORLD.
              </h2>

              <p className="history-desc">
                Three decades ago, Suzlon pioneered wind energy in India at a time when renewable
                energy itself was still emerging.
              </p>
              <p className="history-desc">
                We built deep expertise across wind technology, manufacturing, development, EPC,
                and lifecycle services. But the future of energy now demands more than standalone
                wind solutions.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 7: Full-Stack Solutions */}
        <section className="brand-book-section full-stack-modern-grid">
          <div className="content-wrapper">
            <div className="text-content">
              <h2>
                <span className="heading-teal">
                  TO SOLVE
                  <br />
                  THE MODERN ENERGY
                  <br />
                  CHALLENGE,
                  <br />
                  SUZLON IS NOW A
                </span>
                <span className="heading-yellow">
                  FULL-STACK
                  <br />
                  RENEWABLE ENERGY
                  <br />
                  SOLUTIONS
                  <br />
                  CONGLOMERATE.
                </span>
              </h2>
            </div>

            <div className="image-content cut-bottom-left">
              <img
                src="/images/RE Assets.jpg"
                alt="Suzlon Renewable Energy Ecosystem with Wind, Solar, and Storage"
              />
            </div>
          </div>
        </section>

        {/* SECTION 8: Solar & Storage Visual Banner (Parallax) */}
        <section className="solar-storage-banner">
          <div className="banner-image-container parallax-bg">
            <div className="teal-tint-overlay" />
            <div className="banner-text-overlay">
              <div className="text-line-1">THIS IS WHAT</div>
              <div className="text-line-2">SUZLON</div>
              <div className="text-line-3">
                <span className="yellow-highlight">2.0</span>
                <span className="stacked-text">
                  LOOKS
                  <br />
                  LIKE.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8.5: Architecture Bar */}
        <section className="architecture-bar">
          <div className="architecture-content">
            <p className="arch-subtitle">
              Wind-first, full-stack renewable energy solutions across
            </p>

            <div className="arch-row">
              <div className="arch-items">
                <div className="arch-item">
                  <img src="/images/SUM.svg" alt="Spark" className="spark-icon" />
                  RE TECH : WIND | STORAGE | SOLAR
                </div>
                <div className="arch-item">
                  <img src="/images/SUM.svg" alt="Spark" className="spark-icon" />
                  RE DEV CO
                </div>
                <div className="arch-item">
                  <img src="/images/SUM.svg" alt="Spark" className="spark-icon" />
                  RE PROJECTS
                </div>
                <div className="arch-item">
                  <img src="/images/SUM.svg" alt="Spark" className="spark-icon" />
                  RE AMS
                </div>
              </div>

              <div className="arch-url">suzlon.com</div>
            </div>
          </div>
        </section>

        {/* SECTION 10: Brand on a Page */}
        <section className="boap-section">
          <div className="boap-content-wrapper">
            <div className="boap-image">
              <img src="/images/BOAP.png" alt="Suzlon Brand on a Page Document" />
            </div>

            <div className="boap-text">
              <h2 className="main-heading">
                <span className="teal-text">THE SUZLON</span>
                <br />
                <span className="yellow-highlight-block">BRAND ON A PAGE</span>
              </h2>
              <a href="/images/BOAP.png" download className="contact-btn">
                Download BOAP <span className="arrow">&darr;</span>
              </a>

              <p>
                to know more about <b>SUZLON 2.0</b>
              </p>
              <a href="/images/Brand Book.pdf" download className="contact-btn">
                Download brand book <span>&rarr;</span>
              </a>
            </div>
            <div className="support-content" />
          </div>
        </section>
      </main>

      <Footer className="support-section">
        <p>© 2026 Suzlon Energy Ltd. All Rights Reserved</p>
      </Footer>
    </>
  );
}
