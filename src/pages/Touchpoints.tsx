import PageStyle from '../components/PageStyle';
import { useTitle } from '../hooks/useTitle';
import { useReveal } from '../hooks/useReveal';
import ShowcaseHub from '../components/ShowcaseHub';
import { hubs } from '../data/touchpoints-hubs';
import navPagesCss from '../styles/nav-pages.css?inline';
import pageCss from '../styles/pages/touchpoints.css?inline';

export default function Touchpoints() {
  useTitle('Good at Every Touchpoint | Suzlon Brand Centre');
  useReveal({ threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
  return (
    <>
      <PageStyle css={[navPagesCss, pageCss]} />
      <main className="editorial-main mt-0 pt-0 bg-transparent">
        <section className="page-hero mt-0 mb-0 p-[6rem_8%] [background:url(/Homepage%20Images/Good%20at%20Every%20Touchpoint.jpg)] [background-size:cover] [background-position:center] [background-repeat:no-repeat] w-[100vw] relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] box-border">
          <div className="page-hero-content reveal text-center m-[0_auto] max-w-[1200px]">
            <h1 className="mb-2 leading-[1.2] text-white">Good at Every Touchpoint</h1>
            <p className="mt-0 text-[1.2rem] leading-[1.6] text-white">
              Preview our brand applications and download ready-to-use templates to ensure consistency across digital, physical, and
              operational environments.
            </p>
          </div>
        </section>
        <div className="hubs-container">
          {hubs.map((hub) => (
            <ShowcaseHub key={hub.title} hub={hub} mode="yoyo" />
          ))}
        </div>
      </main>
      <footer className="support-section reveal">
        <div className="support-content">
          <h2>Need help applying the brand?</h2>
          <p>
            If you require custom dimensions or a specific file format not provided in the template kits, reach out to the central studio.
          </p>
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
