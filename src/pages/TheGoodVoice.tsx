import PageStyle from '../components/PageStyle';
import { useTitle } from '../hooks/useTitle';
import { useReveal } from '../hooks/useReveal';
import navPagesCss from '../styles/nav-pages.css?inline';
import pageCss from '../styles/pages/the-good-voice.css?inline';

export default function TheGoodVoice() {
  useTitle('Speak with Goodness | Suzlon Brand Centre');
  useReveal({ threshold: 0.1, rootMargin: '0px 0px -20px 0px' });
  return (
    <>
      <PageStyle css={[navPagesCss, pageCss]} />
      <main className="editorial-main mt-0 pt-0 bg-transparent">
        <section className="page-hero mt-0 mb-0 p-[6rem_8%] [background:linear-gradient(rgba(0,_0,_0,_0.5),_rgba(0,_0,_0,_0.5)),_url(/Homepage%20Images/Speak%20with%20good.jpg)] [background-size:cover] [background-position:center] [background-repeat:no-repeat] w-[100vw] relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] box-border">
          <div className="page-hero-content reveal text-center m-[0_auto] max-w-[1200px]">
            <h1 className="mb-2 leading-[1.2] text-white">Speak with Goodness</h1>
            <p className="mt-0 text-[1.2rem] leading-[1.6] text-white">
              Establishing our verbal identity, tone of voice, and the core principles for writing the Suzlon way.
            </p>
          </div>
        </section>
        <div className="voice-grid reveal">
          <div className="voice-text-card">
            <div className="embedded-banner">
              <div className="banner-text-content">
                <h3>Tone of Voice</h3>
                <p>
                  Our voice is progressive, authoritative yet approachable, and deeply purposeful. We speak with the confidence of an
                  industry leader driving a sustainable future.
                </p>
                <div className="voice-actions">
                  <a className="contact-btn" href="/Homepage Images/Suzlon Tone of Voice.pdf" target="_blank">
                    Tone of Voice Guide (.PDF) <span className="arrow">→</span>
                  </a>
                </div>
              </div>
              <div className="banner-image-content chamfer-image-cut">
                <img src="/Homepage Images/Main Banner - Copy.jpg" alt="Tone of Voice Preview" />
              </div>
            </div>
          </div>
          <div className="voice-text-card">
            <div className="embedded-banner alt-tone p-[0_4rem_0_0] [grid-template-columns:1fr_1.2fr]">
              <div className="banner-image-content chamfer-image-cut m-0 p-0">
                <img
                  className="m-0 block w-[100%] h-[100%] object-cover"
                  src="/Homepage Images/WorkWithTheBest - Copy.jpg"
                  alt="Brand Voice Preview"
                />
              </div>
              <div className="banner-text-content">
                <h3>Brand Voice</h3>
                <p>
                  Clear, concise, and structured. Guidelines on active voice, plain English standards, and formatting terminology to ensure
                  consistent communication across all channels.
                </p>
                <div className="voice-actions">
                  <a className="contact-btn" href="/Homepage Images/Suzlon Brand Voice.pdf" target="_blank">
                    Brand Voice Guide (.PDF) <span className="arrow">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="support-section reveal">
        <div className="support-content">
          <h2>Need help with messaging or copy review?</h2>
          <p>Reach out to the corporate communications team for editorial guidance on major announcements or campaigns.</p>
          <div>
            <a className="contact-btn" href="mailto:corpcom@suzlon.com">
              Contact Corporate Communications <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
