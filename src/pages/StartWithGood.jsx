import Header from "../components/Header";
import Footer from "../components/Footer";
import useParallax from "../hooks/useParallax";
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import usePageBodyClass from "../hooks/usePageBodyClass";
import "../styles/startWithGood.css";

const navItems = [
  { label: "The Good Identity", href: "The Good Identity/index.html#identity", active: true },
  { label: "The Good Expression", href: "The Good Identity/good-expression.html" },
  { label: "The Visual Identity", href: "The Good Identity/visual-identity.html" },
  { label: "Good at Every Touchpoint", href: "The Good Identity/touchpoints.html" },
  { label: "Learn, Check, Apply Good", href: "The Good Identity/learn-check-apply.html" },
];

export default function StartWithGood() {
  usePageBodyClass("pillar-page");
  useParallax();
  useRevealOnScroll(".modern-hub", "in-view");

  return (
    <>
      <Header
        logoTo="/the-good-identity-legacy"
        logoSrc="https://www.suzlon.com/images/logo-teal.svg"
        logoHeight={30}
        navItems={navItems}
      />

      <main className="editorial-main">
        <section className="pillar-hero cut-bottom-left">
          <div className="parallax-wrapper">
            <div
              className="hero-bg"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1920&q=80')",
              }}
            />
          </div>
          <div className="hero-overlay" />

          <div className="hero-content">
            <span className="hero-subtitle">The Good Identity</span>
            <h1>Start with Good</h1>
            <p>Creators of good energies that make the new world work.</p>
          </div>

          <div className="scroll-indicator">
            <span>Explore</span>
            <div className="mouse" />
          </div>
        </section>

        <div className="split-layout-container">
          <aside className="split-left">
            <div className="sticky-content">
              <span className="pillar-number">01</span>
              <h1>About Suzlon</h1>
              <div className="accent-line" />
              <p>Understanding who we are, what we stand for, and where we come from.</p>
            </div>
          </aside>

          <section className="split-right">
            <article className="modern-hub">
              <div className="hub-visual cut-top-right">
                <div className="parallax-wrapper">
                  <div
                    className="visual-bg"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1497435334941-8c899ee9e9e9?auto=format&fit=crop&w=1200&q=80')",
                    }}
                  />
                </div>
              </div>

              <div className="hub-content-grid content-only-grid">
                <div className="hub-text">
                  <h2>Integrated for Real-World Needs</h2>
                  <p>
                    Today, the world needs fundamentally better energy to unlock human
                    possibilities. That's why we bring good energies to work across Asia,
                    Australia, Europe, Africa, and the Americas through our full-stack renewable
                    energy solutions. Whether wind, solar, or storage, our seasoned experts and
                    global service network meet you wherever you are, whenever you want. From
                    'Concept to Commissioning,' as we call it. Always good, always smart.
                  </p>
                  <p style={{ marginTop: "1.5rem" }}>
                    From R&D and manufacturing to project execution, lifecycle care and long-term
                    partnerships, we bring the capabilities needed to make renewable energy work
                    across changing business and energy realities.
                  </p>
                </div>
              </div>
            </article>

            <article className="modern-hub">
              <div className="hub-content-grid content-only-grid">
                <div className="hub-text">
                  <h2>Good Energies, Wherever You Are</h2>
                  <p>
                    Our renewable energy assets operate across 17 countries in six continents,
                    supported by in-house global R&D centres, end-to-end manufacturing strength,
                    and service capabilities across markets.
                  </p>

                  <div className="stats-grid">
                    <div className="stat-box">
                      <h3>21,700+</h3>
                      <p>MW Renewable energy assets worldwide</p>
                    </div>
                    <div className="stat-box">
                      <h3>8,500+</h3>
                      <p>Good energy people driving the transition</p>
                    </div>
                    <div className="stat-box">
                      <h3>Top 10</h3>
                      <p>Among the World's Most Sustainable Organisations</p>
                    </div>
                    <div className="stat-box">
                      <h3>1,900+</h3>
                      <p>Clients served globally</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <article className="modern-hub">
              <div className="hub-visual cut-bottom-left">
                <div className="parallax-wrapper">
                  <div
                    className="visual-bg"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&w=1200&q=80')",
                    }}
                  />
                </div>
              </div>

              <div className="hub-content-grid content-only-grid">
                <div className="hub-text">
                  <h2>What We Stand By</h2>
                  <ul className="values-list">
                    <li>
                      <strong>Courage in every step.</strong> We take on complex energy challenges
                      with clarity, conviction, and responsibility.
                    </li>
                    <li>
                      <strong>Empathy for all.</strong> We create with care for clients, teams,
                      partners, shareholders, communities, and the planet.
                    </li>
                    <li>
                      <strong>Making it happen, now.</strong> We move with discipline, speed, and
                      accountability to turn clean energy ambition into action.
                    </li>
                  </ul>
                </div>
              </div>
            </article>

            <article className="modern-hub">
              <div className="hub-visual cut-top-right">
                <div className="parallax-wrapper">
                  <div
                    className="visual-bg"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80')",
                    }}
                  />
                </div>
              </div>

              <div className="hub-content-grid content-only-grid">
                <div className="hub-text">
                  <h2>Leadership & Legacy</h2>
                  <p>
                    <strong>Leadership:</strong> Early champions of renewable energy and climate
                    action, our leadership team has over three decades of expertise across the
                    clean energy value chain. This includes Vinod Tanti (Chairman and Managing
                    Director, Suzlon Group), Girish Tanti (Co-Founder & Vice Chairman, Suzlon
                    Group), and Ajay Kapur (Group Chief Executive Officer, Suzlon Group).
                  </p>
                  <p style={{ marginTop: "1.5rem" }}>
                    <strong>The belief that started it all:</strong> Tulsi Tanti believed that
                    renewable energy could solve real-world problems while creating lasting value
                    for society. That conviction continues to guide how we think, act, and build
                    energy ecosystems for the new world.
                  </p>
                </div>
              </div>
            </article>
          </section>
        </div>
      </main>

      <Footer className="support-section">
        <div className="support-content">
          <h2>Need help with these resources?</h2>
          <p>Feel free to reach out and one of our team members will get back to you as soon as possible.</p>
          <div style={{ marginTop: "2.5rem", display: "flex", justifyContent: "center" }}>
            <a href="mailto:corpcom@suzlon.com" className="suzlon-btn suzlon-btn-yellow">
              Contact Corporate Communications <span className="arrow">&rarr;</span>
            </a>
          </div>
        </div>
      </Footer>
    </>
  );
}
