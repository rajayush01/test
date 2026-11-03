import PageStyle from '../components/PageStyle';
import { useTitle } from '../hooks/useTitle';
import { useReveal } from '../hooks/useReveal';
import ShowcaseHub from '../components/ShowcaseHub';
import { hubs } from '../data/the-good-identity-hubs';
import navPagesCss from '../styles/nav-pages.css?inline';
import pageCss from '../styles/pages/the-good-identity.css?inline';

export default function TheGoodIdentity() {
  useTitle('The Good Identity | Suzlon Brand Centre');
  useReveal({ threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
  return (
    <>
      <PageStyle css={[navPagesCss, pageCss]} />
      <main className="editorial-main mt-0 pt-0 bg-transparent">
        <section className="page-hero mt-0 mb-0 p-[3.5rem_8%] [background:url(/Homepage%20Images/The%20Good%20Identity.jpg)] [background-size:cover] [background-position:center] [background-repeat:no-repeat] w-[100vw] relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] box-border">
          <div className="page-hero-content reveal text-center m-[0_auto] max-w-[1200px]">
            <h1 className="mb-[0.4rem] leading-[1.2] text-white">The Good Identity</h1>
            <p className="mt-0 text-[1.1rem] leading-[1.5] text-white">Build the brand: logo, colour, type, promise line and The Sum.</p>
          </div>
        </section>
        <div className="hubs-container">
          {hubs.map((hub) => (
            <ShowcaseHub key={hub.title} hub={hub} mode="loop" />
          ))}
        </div>
      </main>
      <footer className="support-section reveal">
        <div className="support-content">
          <h2>Need help with these resources?</h2>
          <p>Feel free to reach out and one of our team members will get back to you as soon as possible.</p>
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
