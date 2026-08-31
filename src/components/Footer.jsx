export default function Footer({ heading, body, buttonHref, buttonLabel, className = "support-section", children }) {
  if (children) {
    return <footer className={className}>{children}</footer>;
  }

  return (
    <footer className={className}>
      <div className="support-content">
        {heading && <h2>{heading}</h2>}
        {body && <p>{body}</p>}
        {buttonHref && (
          <div>
            <a href={buttonHref} className="contact-btn">
              {buttonLabel} <span className="arrow">&rarr;</span>
            </a>
          </div>
        )}
      </div>
    </footer>
  );
}
