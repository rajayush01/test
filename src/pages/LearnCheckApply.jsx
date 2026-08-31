import Header from "../components/Header";
import Footer from "../components/Footer";
import useParallax from "../hooks/useParallax";
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import usePageBodyClass from "../hooks/usePageBodyClass";

const navItems = [
  { label: "The Good Identity", to: "/the-good-identity-legacy" },
  { label: "The Good Expression", href: "The Good Expression/good-expression.html" },
  { label: "The Visual Identity", to: "/visual-identity" },
  { label: "Good at Every Touchpoint", to: "/touchpoints" },
  { label: "Learn, Check, Apply Good", to: "/learn-check-apply", active: true },
];

export default function LearnCheckApply() {
  usePageBodyClass("pillar-page");
  useParallax();
  useRevealOnScroll(".modern-hub", "in-view");

  return (
    <>
      <Header
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
                  "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80')",
              }}
            />
          </div>
          <div className="hero-overlay" />

          <div className="hero-content">
            <span className="hero-subtitle">Pillar 05</span>
            <h1>Learn, Check, Apply Good</h1>
            <p>Learn, request, check and govern brand usage.</p>

            <div style={{ marginTop: "2.5rem" }}>
              <a href="#learn-hub" className="suzlon-btn suzlon-btn-yellow">
                Explore Guidelines <span className="arrow">&rarr;</span>
              </a>
            </div>
          </div>

          <div className="scroll-indicator">
            <span>Explore</span>
            <div className="mouse" />
          </div>
        </section>

        <div className="split-layout-container" id="learn-hub">
          <aside className="split-left">
            <div className="sticky-content">
              <span className="pillar-number">05</span>
              <h1>
                Learn, Check,
                <br />
                Apply Good
              </h1>
              <div className="accent-line" />
              <p>Learn, request, check and govern brand usage.</p>

              <div className="page-stats">
                <span>4 Hubs</span>
                <span>19 Pages</span>
              </div>
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
                        "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80')",
                    }}
                  />
                </div>
              </div>

              <div className="hub-content-grid">
                <div className="hub-text">
                  <h2>Learn the Brand</h2>
                  <p>
                    Essential resources and training materials to seamlessly onboard new team
                    members and understand our evolving identity.
                  </p>
                </div>
                <div className="hub-actions">
                  <ul className="sleek-links">
                    <li><a href="#">What's New</a></li>
                    <li><a href="#">Onboarding to the Brand</a></li>
                    <li><a href="training.html">Training</a></li>
                    <li><a href="#">FAQs</a></li>
                  </ul>
                  <a href="#" className="suzlon-btn">
                    Explore Hub <span className="arrow">&rarr;</span>
                  </a>
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
                        "url('https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80')",
                    }}
                  />
                </div>
              </div>

              <div className="hub-content-grid">
                <div className="hub-text">
                  <h2>Brand in Action</h2>
                  <p>
                    Real-world examples and inspiration showcasing the Suzlon brand successfully
                    deployed across various channels.
                  </p>
                </div>
                <div className="hub-actions">
                  <ul className="sleek-links">
                    <li><a href="#">Campaigns</a></li>
                    <li><a href="#">Social Media</a></li>
                    <li><a href="#">Ads</a></li>
                    <li><a href="#">Films</a></li>
                    <li><a href="#">Gallery</a></li>
                  </ul>
                  <a href="#" className="suzlon-btn">
                    Explore Hub <span className="arrow">&rarr;</span>
                  </a>
                </div>
              </div>
            </article>

            <article className="modern-hub">
              <div className="hub-visual cut-both">
                <div className="parallax-wrapper">
                  <div
                    className="visual-bg"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80')",
                    }}
                  />
                </div>
              </div>

              <div className="hub-content-grid">
                <div className="hub-text">
                  <h2>Create with Confidence</h2>
                  <p>
                    Direct access to request forms, downloadable brand assets, and templates to
                    start your communications accurately.
                  </p>
                </div>
                <div className="hub-actions">
                  <ul className="sleek-links">
                    <li><a href="#">Naming Requests</a></li>
                    <li><a href="#">Logo Requests</a></li>
                    <li><a href="#">Download Brand Assets</a></li>
                    <li><a href="templates.html">Download Templates</a></li>
                    <li><a href="#">Usage Requests</a></li>
                  </ul>
                  <a href="#" className="suzlon-btn">
                    Explore Hub <span className="arrow">&rarr;</span>
                  </a>
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
                        "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80')",
                    }}
                  />
                </div>
              </div>

              <div className="hub-content-grid">
                <div className="hub-text">
                  <h2>Check Before You Share</h2>
                  <p>
                    Mandatory governance guidance and approval processes to ensure all output
                    meets Suzlon's high standards of quality.
                  </p>
                </div>
                <div className="hub-actions">
                  <ul className="sleek-links">
                    <li><a href="#">Branding Checklist</a></li>
                    <li><a href="#">Approval Process</a></li>
                    <li><a href="#">Governance Guidance</a></li>
                    <li><a href="#">Compliance Essentials</a></li>
                    <li><a href="#">Contact Brand & Digital</a></li>
                  </ul>
                  <a href="#" className="suzlon-btn">
                    Explore Hub <span className="arrow">&rarr;</span>
                  </a>
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
