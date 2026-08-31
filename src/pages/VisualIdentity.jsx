import Header from "../components/Header";
import Footer from "../components/Footer";
import LinkSwapHub from "../components/LinkSwapHub";
import usePageBodyClass from "../hooks/usePageBodyClass";

const navItems = [
  { label: "The Good Expression", to: "/" },
  { label: "The Visual Identity", to: "/visual-identity", active: true },
  { label: "Good at Every Touchpoint", to: "/touchpoints" },
  { label: "Speak with Goodness", to: "/speak-with-goodness" },
  { label: "The Good Energy People", to: "/good-energy-people" },
];

export default function VisualIdentity() {
  usePageBodyClass("nav-page");

  return (
    <>
      <Header navItems={navItems} />

      <main className="editorial-main">
        <section className="page-hero">
          <div className="page-hero-content">
            <h1>The Visual Identity</h1>
            <p>Defining our look and feel: iconography, photography, motion, and layouts that flow.</p>
          </div>
        </section>

        <div className="hubs-container">
          <LinkSwapHub
            cutClass="cut-top-right"
            title="Icons with Meaning"
            description="Our iconography system is designed to be functional, clear, and distinct, helping users navigate information effortlessly while reflecting our new-age identity."
            links={[
              { label: "System Overview", image: "/images/Icons/Icon System Overview.jpg", defaultActive: true },
              { label: "Single tone line icons", image: "/images/Icons/Single tone line icons.jpg" },
              { label: "Dual tone line icons", image: "/images/Icons/Icon System Overview.jpg" },
              { label: "Solid icons", image: "/images/Icons/Solid icons.jpg" },
              { label: "Sizing", image: "/images/Icons/Sizing & Placement.jpg" },
            ]}
            action={
              <a
                href="https://drive.google.com/drive/folders/1MCd53nJ3AEqaToDv5ETVFpXxWbxaLrL5?usp=sharing"
                className="contact-btn"
              >
                Download Icons <span className="arrow">&rarr;</span>
              </a>
            }
          />

          <LinkSwapHub
            cutClass="cut-bottom-left"
            title="Images with Warmth"
            description="Our photography style captures the human element and the scale of our impact, focusing on authenticity, natural energy, and the communities we empower."
            links={[
              { label: "Photography Style", image: "/images/Binder1.pdf_Page_01.jpg", defaultActive: true },
              { label: "Composition Principles", image: "/images/Binder1.pdf_Page_02.jpg" },
              {
                label: "Selection & Editing Guidance",
                slider: [
                  "/images/Binder1.pdf_Page_10.jpg",
                  "/images/Binder1.pdf_Page_09.jpg",
                  "/images/Binder1.pdf_Page_08.jpg",
                  "/images/Binder1.pdf_Page_07.jpg",
                  "/images/Binder1.pdf_Page_06.jpg",
                ],
              },
              { label: "Image Don'ts", image: "/images/Binder1.pdf_Page_12.jpg" },
            ]}
            action={
              <a href="#" className="contact-btn">
                Explore Hub <span className="arrow">&rarr;</span>
              </a>
            }
          />

          <LinkSwapHub
            cutClass="cut-top-right"
            title="Motion with Purpose"
            description="Bringing our brand to life across digital touchpoints with motion that feels natural, energetic, and purposefully paced."
            links={[
              { label: "Motion Principles", image: "/images/Motion/Motion Principles.jpg", defaultActive: true },
              {
                label: "Pace & Behavior",
                slider: ["/images/Motion/Pace & Behavior.jpg", "/images/Motion/Pace & Behavior 2.jpg"],
              },
              { label: "Transitions", image: "/images/Motion/Transitions.jpg" },
              { label: "Don'ts", image: "/images/Motion/Donts.jpg" },
            ]}
            action={
              <a href="#" className="contact-btn">
                Explore Hub <span className="arrow">&rarr;</span>
              </a>
            }
          />

          <LinkSwapHub
            cutClass="cut-both"
            title="Layouts that Flow"
            description="A structural grid system that ensures balance, guides the eye, and creates a consistent rhythm across all printed and digital brand communications."
            links={[
              { label: "Layout", image: "/images/Layout/Layout.jpg", defaultActive: true },
              { label: "Grids", image: "/images/Layout/Grids.jpg" },
              { label: "Logo Placement", image: "/images/Layout/Logo Placement.jpg" },
              { label: "Don'ts", image: "/images/Layout/Donts.jpg" },
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
