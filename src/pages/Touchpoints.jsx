import Header from "../components/Header";
import Footer from "../components/Footer";
import LinkSwapHub from "../components/LinkSwapHub";
import usePageBodyClass from "../hooks/usePageBodyClass";

const navItems = [
  { label: "The Good Expression", to: "/" },
  { label: "The Visual Identity", to: "/visual-identity" },
  { label: "Good at Every Touchpoint", to: "/touchpoints", active: true },
  { label: "Speak with Goodness", to: "/speak-with-goodness" },
  { label: "The Good Energy People", to: "/good-energy-people" },
];

export default function Touchpoints() {
  usePageBodyClass("nav-page");

  return (
    <>
      <Header navItems={navItems} />

      <main className="editorial-main">
        <section className="page-hero">
          <div className="page-hero-content">
            <h1>Good at Every Touchpoint</h1>
            <p>
              Preview our brand applications and download ready-to-use templates to ensure
              consistency across digital, physical, and operational environments.
            </p>
          </div>
        </section>

        <div className="hubs-container">
          <LinkSwapHub
            cutClass="cut-top-right"
            title="Ready to Use"
            description="Essential templates and assets built for immediate application. Download these tools to create on-brand communications effortlessly."
            links={[
              {
                label: "Presentation Templates",
                image: "/images/PPT.jpg",
                defaultActive: true,
                extra: (
                  <div className="inline-download">
                    <a
                      href="https://suzlonenergy365-my.sharepoint.com/:p:/g/personal/47001_suzlon_com/IQDZ8Oi2UmMDTLXPlUHW2x3IAX2yDcyfMA0SrHI9NTRghdY?e=gHpMEM"
                      className="inline-btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download (.ppt)
                    </a>
                  </div>
                ),
              },
              {
                label: "Document Templates",
                image: "/images/word template.jpg",
                extra: (
                  <div className="inline-download">
                    <a href="/images/Word Template.docx" className="inline-btn" download>
                      Download (.doc)
                    </a>
                  </div>
                ),
              },
              { label: "Social Media Assets", image: "/images/Social Media Assets.jpg" },
              { label: "Email Signatures", image: "/images/E-mail signature.jpg" },
            ]}
            action={
              <a href="Downloads/Suzlon_ReadyToUse_MasterKit.zip" className="contact-btn" download>
                Download All Templates (.ZIP) <span className="arrow">&darr;</span>
              </a>
            }
          />

          <LinkSwapHub
            cutClass="cut-bottom-left"
            title="Digitally Good"
            description="Guidelines and UI components that ensure a consistent, engaging experience across all digital screens and online platforms."
            links={[
              {
                label: "Social Media Expression",
                image: "/images/Suzlon Design Exploration_Feb 3_Page_28.jpg",
                defaultActive: true,
              },
              {
                label: "Emailers",
                image: "/images/26Mar26_IB_for_Suzlon_emailers_v1_Page_2.jpg",
              },
              {
                label: "Banners",
                image: "/images/Suzlon Design Exploration_Feb 3_Page_12.jpg",
              },
            ]}
            action={
              <a href="Downloads/Suzlon_Digital_Assets.zip" className="contact-btn" download>
                Download Digital Kit (.ZIP) <span className="arrow">&darr;</span>
              </a>
            }
          />

          <LinkSwapHub
            cutClass="cut-top-right"
            title="Good Spaces"
            description="Branding the physical environment. See how our identity translates into corporate offices, large-scale events, and architectural signage."
            links={[
              { label: "Office Branding", image: "/images/Office Branding.jpeg", defaultActive: true },
              { label: "Site Branding", image: "/images/Site Branding.jpeg" },
              { label: "Event & Booth Branding", image: "/images/Booth.jpeg" },
            ]}
          />

          <LinkSwapHub
            cutClass="cut-both"
            title="Good Operations"
            description="Showcasing the brand on the ground. Specifications for industrial application, from product marking to safety gear and logistics fleets."
            links={[
              { label: "Product Branding", image: "/images/Product Branding.jpg", defaultActive: true },
              { label: "Logistics", image: "/images/Logistics.jpg" },
              { label: "Uniforms", image: "/images/Uniforms.png" },
            ]}
          />
        </div>
      </main>

      <Footer
        heading="Need help applying the brand?"
        body="If you require custom dimensions or a specific file format not provided in the template kits, reach out to the central studio."
        buttonHref="mailto:corpcom@suzlon.com"
        buttonLabel="Contact Central Studio"
      />
    </>
  );
}
