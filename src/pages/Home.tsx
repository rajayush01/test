import { Link } from 'react-router-dom';
import { useTitle } from '../hooks/useTitle';
import BrandSearch from '../components/BrandSearch';
import ManifestoCarousel from '../components/ManifestoCarousel';

export default function Home() {
  useTitle('Suzlon Brand Centre');
  return (
    <>
      <main>
        <section className="video-banner">
          <img className="bg-video" src="/Homepage Images/Main Banner.jpg" alt="Our Brand Banner" />
          <div className="video-overlay" />
          <div className="banner-content">
            <h1>
              Suzlon
              <br />
              Brand Center
            </h1>
            <p>
              Find the right brand guidance, assets,
              <br />
              templates and approvals — organised around
              <br />
              the "Good" navigation system.
            </p>
          </div>
        </section>
        <BrandSearch />
        <section className="journeys-section">
          <div className="journeys-grid">
            <Link className="journey-card cut-top-right" to="/the-good-identity">
              <span className="need">I need a logo or template</span>
              <div className="action-row">
                <span className="action">Create with Confidence</span> <span className="arrow">→</span>
              </div>
            </Link>{' '}
            <Link className="journey-card cut-top-right" to="/the-good-voice">
              <span className="need">I'm creating communication</span>
              <div className="action-row">
                <span className="action">Speak with Goodness</span> <span className="arrow">→</span>
              </div>
            </Link>{' '}
            <Link className="journey-card cut-top-right" to="/touchpoints">
              <span className="need">I need inspiration/examples</span>
              <div className="action-row">
                <span className="action">Brand in Action</span> <span className="arrow">→</span>
              </div>
            </Link>{' '}
            <Link className="journey-card cut-top-right" to="/good-energy-people">
              <span className="need">I am new to suzlon culture</span>
              <div className="action-row">
                <span className="action">Live our culture</span> <span className="arrow">→</span>
              </div>
            </Link>
          </div>
        </section>
        <ManifestoCarousel>
          <div className="carousel-slide [background-image:linear-gradient(to_right,_rgba(0,_0,_0,_0.85)_0%,_rgba(0,_0,_0,_0)_65%),_url(/Homepage%20Images/Manifesto%20Image.png)] [background-size:cover] [background-position:center] w-[100%] min-h-[60vh] relative flex items-center box-border">
            <div className="evolving-content-wrapper flex items-center justify-start w-[100%] max-w-[1650px] m-[0_auto] p-[0_4rem] box-border">
              <div className="evolving-text-group text-left max-w-[550px]">
                <h2>
                  <span className="text-prime-yellow text-[2rem] leading-[2.5rem]">THE WORLD IS CHANGING</span>
                  <br />
                  <span className="text-prime-yellow text-[2rem] leading-[2.5rem]">AND SO MUST THE ENERGY THAT POWERS IT</span>
                </h2>
                <p className="text-[1.05rem] leading-[1.6] text-white mb-6 font-normal">
                  We are in the middle of the fastest, widest and deepest energy transition in human history. The world is becoming
                  dramatically more energy-intensive. Cities are growing.
                </p>
                <p className="text-[1.05rem] leading-[1.6] text-white mb-6 font-normal">
                  AI, data centres, manufacturing, mobility, and digital infrastructure are driving unprecedented energy demand. Humanity
                  needs more power than ever before. But the old energy model can no longer sustain the future safely or affordably.
                </p>
              </div>
            </div>
          </div>
          <div
            className="carousel-slide [background-size:cover] [background-position:center] w-[100%] min-h-[60vh] relative flex items-center box-border"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0) 65%), url('/Homepage%20Images/SUZLON%20IS%20EVOLVING%20(2).jpg')",
            }}
          >
            <div className="evolving-content-wrapper flex items-center justify-start w-[100%] max-w-[1650px] m-[0_auto] p-[0_4rem] box-border">
              <div className="evolving-text-group text-left max-w-[650px]">
                <p className="body-desc">
                  Wind, solar, battery storage, digital intelligence, predictive analytics, and grid-smart controls must now work together
                  as one coordinated system to deliver flexible, stable, round-the-clock renewable power.
                </p>
                <h2 className="text-white text-[2rem] leading-[2.5rem]">
                  THAT'S WHY{' '}
                  <span className="highlight-yellow">
                    <br />
                    SUZLON IS EVOLVING.
                  </span>
                  <br />
                  TO REFLECT THIS LARGER SHIFT
                  <br />
                  IN THE ENERGY WORLD.
                </h2>
                <p className="history-desc">
                  Three decades ago, Suzlon pioneered wind energy in India at a time when renewable energy itself was still emerging.
                </p>
                <p className="history-desc">
                  We built deep expertise across wind technology, manufacturing, development, EPC, and lifecycle services. But the future of
                  energy now demands more than standalone wind solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-slide [background-image:linear-gradient(to_right,_rgba(0,_0,_0,_0.8)_0%,_rgba(0,_0,_0,_0)_55%),_url(/Homepage%20Images/WindSolarStorage%202.jpg)] [background-size:cover] [background-position:center] w-[100%] min-h-[60vh] relative flex items-center box-border">
            <div className="evolving-content-wrapper flex items-center justify-start w-[100%] max-w-[1650px] m-[0_auto] p-[0_4rem] box-border">
              <div className="evolving-text-group text-left max-w-[750px]">
                <h2>
                  <span className="text-prime-yellow text-[2rem] leading-[2.5rem]">
                    THAT'S WHY TO SOLVE
                    <br />
                    THE MODERN ENERGY CHALLENGE,
                  </span>
                  <br />
                  <span className="text-white text-[2rem] leading-[2.5rem]">
                    SUZLON IS NOW A FULL-STACK
                    <br />
                    RENEWABLE ENERGY SOLUTIONS
                    <br />
                    CONGLOMERATE.
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </ManifestoCarousel>
        <section className="boap-framework [font-family:Monda,_sans-serif]">
          <div className="boap-row-light bg-humble-beige p-[3rem_0_1rem_0]">
            <div className="boap-container max-w-[1200px] m-[0_auto] p-0 text-center">
              <div className="boap-text inline-block [transform:scale(0.8)] [transform-origin:center_center]">
                <h2 className="main-heading m-0">
                  <span className="teal-text text-[3rem] text-ever-teal">know more about our brand</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="bg-humble-beige p-[4rem_0]">
            <div className="boap-container max-w-[1200px] m-[0_auto] flex flex-col gap-16 p-[0_2rem]">
              <div className="flex items-start gap-8 [border-bottom:1px_solid_rgba(0,_112,_120,_0.2)] pb-16 w-[100%] flex-wrap">
                <div className="[flex:0_0_auto] mt-[5px]">
                  <span className="w-[32px] h-[32px] [background:#007078] text-white rounded-[50%] flex justify-center items-center text-[0.9rem] font-bold">
                    1
                  </span>
                </div>
                <div className="[flex:0_0_220px] mt-[8px]">
                  <strong className="text-ever-teal tracking-[1px] text-[1.1rem]">PURPOSE</strong>
                </div>
                <div className="[flex:1] min-w-[300px] text-left">
                  <h2 className="text-ever-teal text-[length:clamp(1.4rem,_2vw,_1.8rem)] font-bold m-0 leading-[1.4]">
                    CONSTANTLY ADVANCING
                    <br />
                    <span className="text-prime-yellow">GOOD ENERGIES</span> THAT MAKE THE
                    <br />
                    NEW WORLD WORK
                  </h2>
                </div>
              </div>
              <div className="flex items-start gap-8 w-[100%] flex-wrap">
                <div className="[flex:0_0_auto] mt-[5px]">
                  <span className="w-[32px] h-[32px] [background:#007078] text-white rounded-[50%] flex justify-center items-center text-[0.9rem] font-bold">
                    2
                  </span>
                </div>
                <div className="[flex:0_0_220px] mt-[8px]">
                  <strong className="text-ever-teal tracking-[1px] text-[1.1rem]">AMBITION</strong>
                </div>
                <div className="[flex:1] min-w-[300px] text-left">
                  <h3 className="text-ever-teal text-[length:clamp(1.4rem,_2vw,_1.8rem)] font-medium m-0 leading-[1.4]">
                    A global green energy technology and
                    <br />
                    management company offering solutions.
                  </h3>
                  <div className="flex gap-12 flex-wrap mt-10 text-ever-teal">
                    <div className="flex gap-8 flex-wrap mt-10 text-ever-teal">
                      <div className="[flex:1] min-w-[390px] flex items-start gap-4">
                        <div className="[flex:0_0_auto] mt-[2px]">
                          <span className="w-[32px] h-[32px] [background:#FFC600] text-ever-teal rounded-[50%] flex justify-center items-center text-[0.8rem] font-bold">
                            2A
                          </span>
                        </div>
                        <div className="[flex:1] flex gap-4 flex-wrap">
                          <div className="[flex:0_0_200px] text-left">
                            <strong className="text-[1.1rem] block leading-[1.2] [white-space:nowrap]">POINTS OF DIFFERENCE</strong>{' '}
                            <span className="opacity-[0.8] text-[0.9rem] block mt-[4px] [white-space:nowrap]">
                              How we beat the competition
                            </span>
                          </div>
                          <div className="[flex:1] min-w-[140px] text-left">
                            <ul className="[list-style:disc] p-[0_0_0_1.5rem] font-bold leading-[1.8] m-0">
                              <li>ENDURING PERFORMANCE</li>
                              <li>SERVICE LEADERSHIP</li>
                              <li>TRUST OF A PIONEER</li>
                              <li>LIFETIME PARTNERSHIP</li>
                              <li>END-TO-END SOLUTIONS</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="[flex:1] min-w-[390px] flex items-start gap-4">
                        <div className="[flex:0_0_auto] mt-[2px]">
                          <span className="w-[32px] h-[32px] [background:#FFC600] text-ever-teal rounded-[50%] flex justify-center items-center text-[0.8rem] font-bold">
                            2B
                          </span>
                        </div>
                        <div className="[flex:1] flex gap-4 flex-wrap">
                          <div className="[flex:0_0_200px] text-left">
                            <strong className="text-[1.1rem] block leading-[1.2] [white-space:nowrap]">POINTS OF PARITY</strong>{' '}
                            <span className="opacity-[0.8] text-[0.9rem] block mt-[4px] [white-space:nowrap]">Our playing field</span>
                          </div>
                          <div className="[flex:1] min-w-[140px] text-left">
                            <ul className="[list-style:disc] p-[0_0_0_1.5rem] font-bold leading-[1.8] m-0">
                              <li>MANUFACTURING SCALE</li>
                              <li>ON-TIME EXECUTION</li>
                              <li>R&amp;D-BACKED INNOVATION</li>
                              <li>PRICE COMPETITIVENESS</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="boap-row-yellow bg-prime-yellow p-[4rem_0]">
            <div className="boap-container max-w-[1200px] m-[0_auto] p-[0_2rem]">
              <div className="flex items-start gap-8 w-[100%] flex-wrap">
                <div className="[flex:0_0_auto] mt-[5px]">
                  <span className="w-[32px] h-[32px] [background:#007078] text-white rounded-[50%] flex justify-center items-center text-[0.9rem] font-bold">
                    3
                  </span>
                </div>
                <div className="[flex:0_0_220px] mt-[8px]">
                  <strong className="text-ever-teal tracking-[1px] text-[1.1rem]">VALUES</strong>
                </div>
                <div className="[flex:1] min-w-[300px] flex gap-16 flex-wrap text-ever-teal text-left">
                  <h3 className="m-0 text-[length:clamp(1.1rem,_1.5vw,_1.4rem)] font-bold leading-[1]">
                    COURAGE
                    <br />
                    <span className="font-normal text-[length:clamp(1.1rem,_1.5vw,_1.4rem)] font-bold leading-[1.3]">IN EVERY STEP</span>
                  </h3>
                  <h3 className="m-0 text-[length:clamp(1.1rem,_1.5vw,_1.4rem)] font-bold leading-[1]">
                    EMPATHY
                    <br />
                    <span className="font-normal text-[length:clamp(1.1rem,_1.5vw,_1.4rem)] font-bold leading-[1.3]">FOR ALL</span>
                  </h3>
                  <h3 className="m-0 text-[length:clamp(1.1rem,_1.5vw,_1.4rem)] font-bold leading-[1]">
                    MAKING IT
                    <br />
                    <span className="font-normal text-[length:clamp(1.1rem,_1.5vw,_1.4rem)] font-bold leading-[1.3]">HAPPEN, NOW</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="boap-row-teal bg-ever-teal p-[4rem_0]">
            <div className="boap-container max-w-[1200px] m-[0_auto] flex flex-col gap-16 p-[0_2rem]">
              <div className="flex items-start gap-8 w-[100%] [border-bottom:1px_solid_rgba(255,_255,_255,_0.2)] pb-16 flex-wrap">
                <div className="[flex:0_0_auto] mt-[5px]">
                  <span className="w-[32px] h-[32px] [background:#FFC600] text-ever-teal rounded-[50%] flex justify-center items-center text-[0.9rem] font-bold">
                    4
                  </span>
                </div>
                <div className="[flex:0_0_220px] mt-[8px]">
                  <strong className="text-prime-yellow tracking-[1px] text-[1.1rem]">BEHAVIOURS</strong>
                </div>
                <div className="[flex:1] min-w-[300px] flex gap-16 flex-wrap text-prime-yellow text-left">
                  <h3 className="m-0 text-[length:clamp(1.1rem,_1.5vw,_1.4rem)] font-bold leading-[1]">
                    LEAD
                    <br />
                    <span className="font-normal text-[length:clamp(1.1rem,_1.5vw,_1.4rem)] font-bold leading-[1.3]">WITH CARE</span>
                  </h3>
                  <h3 className="m-0 text-[length:clamp(1.1rem,_1.5vw,_1.4rem)] font-bold leading-[1]">
                    EXPLORE
                    <br />
                    <span className="font-normal text-[length:clamp(1.1rem,_1.5vw,_1.4rem)] font-bold leading-[1.3]">BOLDLY</span>
                  </h3>
                  <h3 className="m-0 text-[length:clamp(1.1rem,_1.5vw,_1.4rem)] font-bold leading-[1]">
                    POWER
                    <br />
                    <span className="font-normal text-[length:clamp(1.1rem,_1.5vw,_1.4rem)] font-bold leading-[1.3]">OF ONE</span>
                  </h3>
                  <h3 className="m-0 text-[length:clamp(1.1rem,_1.5vw,_1.4rem)] font-bold leading-[1]">
                    REMARKABLY
                    <br />
                    <span className="font-normal text-[length:clamp(1.1rem,_1.5vw,_1.4rem)] font-bold leading-[1.3]">REAL</span>
                  </h3>
                </div>
              </div>
              <div className="flex items-start gap-8 w-[100%] [border-bottom:1px_solid_rgba(255,_255,_255,_0.2)] pb-16 flex-wrap">
                <div className="[flex:0_0_auto] mt-[5px]">
                  <span className="w-[32px] h-[32px] [background:#FFC600] text-ever-teal rounded-[50%] flex justify-center items-center text-[0.9rem] font-bold">
                    5
                  </span>
                </div>
                <div className="[flex:0_0_220px] mt-[8px]">
                  <strong className="text-prime-yellow tracking-[1px] text-[1.1rem] leading-[1.4] block">
                    EMPLOYEE VALUE
                    <br />
                    PROPOSITION
                  </strong>
                </div>
                <div className="[flex:1] min-w-[300px] flex gap-12 flex-wrap text-left">
                  <div className="[flex:1] min-w-[250px]">
                    <h2 className="text-prime-yellow text-[length:clamp(2rem,_3vw,_2.5rem)] m-0 leading-[1.2]">
                      GOOD ENERGY
                      <br />
                      <span className="text-white">PEOPLE</span>
                    </h2>
                  </div>
                  <div className="[flex:1] min-w-[250px]">
                    <strong className="text-prime-yellow text-[1rem] opacity-[0.9]">PRINCIPLES</strong>
                    <ul className="[list-style:disc] p-[0_0_0_1.5rem] text-white leading-[1.8] mt-2 text-[1.1rem]">
                      <li>Work with the best</li>
                      <li>Set no limits</li>
                      <li>Shape the new world, together</li>
                      <li>Lead by learning</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-8 w-[100%] flex-wrap">
                <div className="[flex:0_0_auto] mt-[5px]">
                  <span className="w-[32px] h-[32px] [background:#FFC600] text-ever-teal rounded-[50%] flex justify-center items-center text-[0.9rem] font-bold">
                    6
                  </span>
                </div>
                <div className="[flex:0_0_220px] mt-[8px]">
                  <strong className="text-prime-yellow tracking-[1px] text-[1.1rem] leading-[1.4] block">
                    CUSTOMER VALUE
                    <br />
                    PROPOSITION
                  </strong>
                </div>
                <div className="[flex:1] min-w-[300px] flex gap-12 flex-wrap text-left">
                  <div className="[flex:1] min-w-[250px]">
                    <h2 className="text-prime-yellow text-[length:clamp(2rem,_3vw,_2.5rem)] m-0 leading-[1.2]">
                      GOOD ENERGIES
                      <br />
                      <span className="text-white">THAT WORK</span>
                    </h2>
                  </div>
                  <div className="[flex:1] min-w-[250px] flex justify-between items-end flex-wrap gap-8">
                    <div>
                      <strong className="text-[color:#FFC627] text-[1rem] opacity-[0.9]">EXPERIENCE PRINCIPLES</strong>
                      <ul className="[list-style:disc] p-[0_0_0_1.5rem] text-white leading-[1.8] mt-2 text-[1.1rem]">
                        <li>Scale reassurance</li>
                        <li>Excitingly positive</li>
                        <li>Outcomes in beta</li>
                        <li>Expert confidence</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mb-2 flex justify-end w-[100%]">
                    <a className="contact-btn" href="#">
                      Know more about Brand <span className="arrow">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="support-section">
        <p>© 2026 Suzlon Energy Ltd. All Rights Reserved</p>
      </footer>
    </>
  );
}
