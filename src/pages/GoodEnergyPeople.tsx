import PageStyle from '../components/PageStyle';
import { useTitle } from '../hooks/useTitle';
import navPagesCss from '../styles/nav-pages.css?inline';
import pageCss from '../styles/pages/good-energy-people.css?inline';

export default function GoodEnergyPeople() {
  useTitle('Good energy people | Suzlon Brand Centre');
  return (
    <>
      <PageStyle css={[navPagesCss, pageCss]} />
      <main className="editorial-main mt-0 pt-0">
        <section className="page-hero mt-0 mb-0 p-[6rem_8%] [background:url(/Homepage%20Images/Good%20energy%20people.png)] [background-size:cover] [background-position:center] [background-repeat:no-repeat] w-[100vw] relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] box-border">
          <div className="page-hero-content reveal text-center m-[0_auto] max-w-[1200px]">
            <h1 className="mb-2 leading-[1.2] text-white">Good energy people</h1>
            <p className="mt-0 text-[1.2rem] leading-[1.6] text-white">
              Discover our employer brand. Tools, guidelines, and visual assets to nurture our internal culture, attract top talent, and
              empower our workforce.
            </p>
          </div>
        </section>
        <div className="showcase-container pt-0">
          <section>
            <div className="section-header mt-8">
              <h2>Employee Value Proposition</h2>
              <p>
                The core positioning and messaging framework that makes Suzlon an employer of choice. Use this banner for internal portals
                and hiring platforms.
              </p>
            </div>
            <div className="evp-banner" />
          </section>
          <section>
            <div className="section-header mb-8">
              <h2>Our Values</h2>
              <p>A standardized set of 3 posters highlighting the core values that drive our daily operations and global mindset.</p>
            </div>
            <div className="grid-3-cols">
              <div className="poster-item">
                <div className="flip-card-inner">
                  <div className="flip-card-front [background-image:url(/Homepage%20Images/Courage.jpg)]" />
                  <div className="flip-card-back">
                    <h3>Courage In Every Step</h3>
                    <p>
                      We bring courage to every decision and step; innovating, leading change, and pioneering new paths, even when it's
                      tough. This courage shows up in how we innovate: by questioning existing systems, taking responsibility for new ideas,
                      and committing to make them work in the real world. We keep moving forward with confidence, shaping reliable energy
                      solutions that meet today's needs and tomorrow's potential.
                    </p>
                  </div>
                </div>
              </div>
              <div className="poster-item">
                <div className="flip-card-inner">
                  <div className="flip-card-front [background-image:url(/Homepage%20Images/Empathy.jpg)]" />
                  <div className="flip-card-back">
                    <h3>Empathy For All</h3>
                    <p>
                      We listen deeply, stay humble in our approach, and understand diverse needs with genuine care. This empathy builds
                      strong, lasting relationships beyond contracts, strengthens self-reliance in communities, and supports our teams in
                      doing their best work. By valuing people and partnerships as a core strength, we ensure our progress lifts others
                      while delivering uninterrupted outcomes.
                    </p>
                  </div>
                </div>
              </div>
              <div className="poster-item">
                <div className="flip-card-inner">
                  <div className="flip-card-front [background-image:url(/Homepage%20Images/Making%20it%20happen.jpg)]" />
                  <div className="flip-card-back">
                    <h3>Making it happen Now</h3>
                    <p>
                      We take ownership to turn plans into reality, handling the details so our partners can focus on their growth. It's
                      about being dependable, adapting quickly, and delivering without excuses. This commitment builds trust and keeps
                      progress uninterrupted, for us and everyone we serve.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="section-header mb-8">
              <h2>Our Behaviours</h2>
              <p>A comprehensive set of 4 posters detailing the actionable behaviours expected across all our teams.</p>
            </div>
            <div className="grid-4-cols">
              <div className="poster-item">
                <div className="flip-card-inner">
                  <div className="flip-card-front [background-image:url(/Homepage%20Images/care.jpg)]" />
                  <div className="flip-card-back">
                    <h3>Lead With Care</h3>
                    <p>We nurture an environment of safety, respect, and well-being for everyone.</p>
                  </div>
                </div>
              </div>
              <div className="poster-item">
                <div className="flip-card-inner">
                  <div className="flip-card-front [background-image:url(/Homepage%20Images/boldly.jpg)]" />
                  <div className="flip-card-back">
                    <h3>Explore Boldly</h3>
                    <p>We step out of our comfort zones to innovate and embrace new challenges.</p>
                  </div>
                </div>
              </div>
              <div className="poster-item">
                <div className="flip-card-inner">
                  <div className="flip-card-front [background-image:url(/Homepage%20Images/One.jpg)]" />
                  <div className="flip-card-back">
                    <h3>Power of One</h3>
                    <p>We collaborate seamlessly across teams and borders as one unified Suzlon.</p>
                  </div>
                </div>
              </div>
              <div className="poster-item">
                <div className="flip-card-inner">
                  <div className="flip-card-front [background-image:url(/Homepage%20Images/Real.jpg)]" />
                  <div className="flip-card-back">
                    <h3>Remarkably Real</h3>
                    <p>We act with authenticity, transparency, and uncompromising integrity in all we do.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="section-header mb-8">
              <h2>Employee Value Proposition</h2>
              <p>A set of 4 posters detailing the core principles of our EVP: Good Energy People.</p>
            </div>
            <div className="grid-4-cols">
              <div className="poster-item">
                <div className="flip-card-inner">
                  <div className="flip-card-front [background-image:url(/Homepage%20Images/WorkWithTheBest.jpg)]" />
                  <div className="flip-card-back">
                    <h3>Work with the best</h3>
                    <p>
                      Join a team of industry pioneers and experts. We surround ourselves with top talent to continuously elevate our
                      standards and deliver unmatched green energy solutions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="poster-item">
                <div className="flip-card-inner">
                  <div className="flip-card-front [background-image:url(/Homepage%20Images/SetNoLimits.jpg)]" />
                  <div className="flip-card-back">
                    <h3>Set no limits</h3>
                    <p>
                      We empower our people to think bigger. Whether it's innovating new turbine technologies or optimizing grid controls,
                      we remove barriers so your potential is limitless.
                    </p>
                  </div>
                </div>
              </div>
              <div className="poster-item">
                <div className="flip-card-inner">
                  <div className="flip-card-front [background-image:url(/Homepage%20Images/ShapeTheNewWorldTogether.jpg)]" />
                  <div className="flip-card-back">
                    <h3>Shape the new world, together</h3>
                    <p>
                      Every role at Suzlon contributes directly to the global energy transition. We collaborate across borders to build a
                      sustainable, renewable future for generations to come.
                    </p>
                  </div>
                </div>
              </div>
              <div className="poster-item">
                <div className="flip-card-inner">
                  <div className="flip-card-front [background-image:url(/Homepage%20Images/LeadByLearning.jpg)]" />
                  <div className="flip-card-back">
                    <h3>Lead by learning</h3>
                    <p>
                      The energy landscape evolves rapidly, and so do we. We foster a culture of continuous growth, curiosity, and
                      upskilling to stay ahead of the curve.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="section-header mb-8">
              <h2>Culture Film</h2>
            </div>
            <div className="video-container [background-image:none] bg-black overflow-hidden mb-12">
              <iframe
                className="absolute top-[0] left-[0] w-[100%] h-[100%] [pointer-events:none]"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/ioabYpRdazY?autoplay=1&mute=1&loop=1&playlist=ioabYpRdazY&controls=0&disablekb=1&fs=0&modestbranding=1&iv_load_policy=3&cc_load_policy=0"
                title="Suzlon Culture Film"
                frameBorder="0"
                allow="autoplay; web-share"
                allowFullScreen
              />
              <div className="absolute top-[0] left-[0] right-[0] bottom-[0] [background:rgba(0,_112,_120,_0.1)] z-[1]" />
            </div>
            <div className="action-wrapper">
              <a className="contact-btn" href="https://www.youtube.com/watch?v=ioabYpRdazY" target="_blank">
                Watch Full Video <span className="arrow">→</span>
              </a>
            </div>
          </section>
        </div>
      </main>
      <footer className="support-section">
        <div className="support-content">
          <h2>Need customized recruitment collateral?</h2>
          <p>If you require specific hiring event branding or specialized HR communication designs, reach out to the central studio.</p>
          <div>
            <a className="contact-btn" href="mailto:corpcom@suzlon.com">
              Contact Central Studio <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
