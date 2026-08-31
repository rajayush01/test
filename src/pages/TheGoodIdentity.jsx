import Header from "../components/Header";
import Footer from "../components/Footer";
import LinkSwapHub from "../components/LinkSwapHub";

const navItems = [
  { label: "The Good Expression", href: "good-expression.html" },
  { label: "The Visual Identity", to: "/visual-identity", active: true },
  { label: "Good at Every Touchpoint", to: "/touchpoints" },
  { label: "Speak with Goodness", to: "/speak-with-goodness" },
  { label: "The Good Energy People", to: "/good-energy-people" },
];

export default function TheGoodIdentity() {
  return (
    <>
      <Header navItems={navItems} />

      <main className="editorial-main">
        <section className="page-hero">
          <div className="page-hero-content">
            <h1>The Good Identity</h1>
            <p>Build the brand: logo, colour, type, promise line and The Sum.</p>
          </div>
        </section>

        <div className="hubs-container">
          <LinkSwapHub
            cutClass="cut-top-right"
            title="The Suzlon Logo"
            description="The primary identifier of our brand, capturing our heritage and future in a single mark."
            links={[
              { label: "Logo Overview", image: "/images/Logo Overveiw@2x.png", defaultActive: true },
              { label: "Logo Lock-ups", image: "/images/Logo Lock-ups.png" },
              { label: "Clear Space and Minimum Size", image: "/images/Clear Space & Minimum Size 2@2x.png" },
              { label: "Colour Versions", image: "/images/Colour Versions@2x.png" },
              { label: "Placement and Backgrounds", image: "/images/Placement & Backgrounds@2x.png" },
              { label: "Logo Don'ts", image: "/images/LogoDonts@2x.png" },
            ]}
            action={
              <a href="logo.html" className="contact-btn">
                Download Guidelines <span className="arrow">&rarr;</span>
              </a>
            }
          />

          <LinkSwapHub
            cutClass="cut-bottom-left"
            title="The Promise Line"
            description="The articulation of our commitment, designed to accompany and strengthen our visual communications."
            links={[
              { label: "Understanding the Promise", image: "/images/UnderstandingthePromise2x.png", defaultActive: true },
              { label: "Promise Lock-ups", image: "/images/PromiseLockups2x.png" },
              { label: "Colour Applications", image: "/images/ColourApplications2x.png" },
              { label: "Minimum Size", image: "/images/MinimumSize2x.png" },
              { label: "Informal Uses", image: "/images/InformalUses2x.png" },
              { label: "Promise Line Don'ts", image: "/images/PromiseLineDonts2x.png" },
            ]}
            action={
              <a href="#" className="contact-btn">
                Explore Hub <span className="arrow">&rarr;</span>
              </a>
            }
          />

          <LinkSwapHub
            cutClass="cut-top-right"
            title="The Sum Design System"
            description="Our proprietary visual device that creates a distinctive, ownable look across all touchpoints."
            links={[
              { label: "Introducing the Sum", image: "/images/Introducing the Sum.jpg", defaultActive: true },
              { label: "Using the Lock-up", image: "/images/Using the Lock up.jpg" },
              { label: "Minimum Size", image: "/images/Minimum Size.jpg" },
              { label: "Applications", image: "/images/Applications.png" },
              { label: "Patterns and Expression", image: "/images/Patterns and Expression.jpg" },
              { label: "The Sum Don'ts", image: "/images/The Sum Donts.jpg" },
            ]}
            action={
              <a href="#" className="contact-btn">
                Explore Hub <span className="arrow">&rarr;</span>
              </a>
            }
          />

          <LinkSwapHub
            cutClass="cut-both"
            title="Colours of Good"
            description="The precise palette that gives our brand its distinctive warmth, energy, and reliable presence."
            links={[
              { label: "Primary Palette", image: "/images/Primary Palette.jpg", defaultActive: true },
              { label: "Secondary Palette", image: "/images/Secondary Palette.jpg" },
              { label: "Colour Combinations", image: "/images/Colour Combinations.jpg" },
              { label: "Digital & Print Specs", image: "/images/Digital & Print Specs.jpg" },
            ]}
            action={
              <a href="#" className="contact-btn">
                Explore Hub <span className="arrow">&rarr;</span>
              </a>
            }
          />

          <LinkSwapHub
            cutClass="cut-bottom-left"
            title="Type with Clarity"
            description="Our typographic system designed for legibility, hierarchy, and a confident corporate voice."
            links={[
              { label: "Primary Typeface", image: "/images/PrimaryTypeface.jpg", defaultActive: true },
              { label: "Secondary Typeface", image: "/images/SecondaryTypeface.jpg" },
              { label: "Hierarchy and Scale", image: "/images/HierarchyScale.jpg" },
              { label: "Digital Use", image: "/images/DigitalUse.jpg" },
            ]}
            action={
              <a href="#" className="contact-btn">
                Explore Hub <span className="arrow">&rarr;</span>
              </a>
            }
          />
        </div>
      </main>

      <Footer
        heading="Need help with these resources?"
        body="Feel free to reach out and one of our team members will get back to you as soon as possible."
        buttonHref="mailto:corpcom@suzlon.com"
        buttonLabel="Contact Corporate Communications"
      />
    </>
  );
}
