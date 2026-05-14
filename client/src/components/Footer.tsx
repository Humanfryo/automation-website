import BookCallButton from "./BookCallButton";
import Eyebrow from "./Eyebrow";

const sitemap: Array<[string, string]> = [
  ["How It Works", "#how"],
  ["Results", "#results"],
  ["About", "#about"],
  ["Blog", "#blog"],
];

const footerLinkStyle = {
  color: "rgba(245,242,236,0.8)",
  fontSize: 15,
  background: "transparent",
  border: 0,
  padding: 0,
  margin: 0,
  cursor: "pointer",
  fontFamily: "inherit",
  textAlign: "left" as const,
};

export default function Footer() {
  return (
    <footer style={{ background: "var(--ink)", color: "var(--bone)" }}>
      <div className="shell" style={{ padding: "80px 32px 32px" }}>
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr",
            gap: 64,
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span
                aria-hidden="true"
                style={{
                  display: "inline-block",
                  width: 10,
                  height: 10,
                  background: "var(--accent)",
                  transform: "rotate(45deg)",
                }}
              />
              <span
                className="display"
                style={{ fontSize: 22, color: "var(--bone)" }}
              >
                Spartan Flow
              </span>
            </div>
            <p
              className="serif-italic"
              style={{
                marginTop: 24,
                fontSize: 20,
                color: "rgba(245,242,236,0.85)",
                maxWidth: 380,
                lineHeight: 1.4,
              }}
            >
              Outbound, run by people who've been in your industry.
            </p>
          </div>
          <div>
            <Eyebrow dim>Sitemap</Eyebrow>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "20px 0 0",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {sitemap.map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    style={{ color: "rgba(245,242,236,0.8)", fontSize: 15 }}
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <BookCallButton className="" style={footerLinkStyle}>
                  Book a Call
                </BookCallButton>
              </li>
            </ul>
          </div>
          <div>
            <Eyebrow dim>Contact</Eyebrow>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "20px 0 0",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <li>
                <a
                  href="mailto:hello@spartanflow.com"
                  style={{ color: "rgba(245,242,236,0.8)", fontSize: 15 }}
                >
                  hello@spartanflow.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/spartan-flow"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "rgba(245,242,236,0.8)", fontSize: 15 }}
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div style={{ height: 64 }} />
        <div
          style={{
            borderTop: "1px solid rgba(245,242,236,0.15)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <span
            className="mono"
            style={{
              fontSize: 11,
              color: "rgba(245,242,236,0.55)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            © 2026 Spartan Flow LLC · Built in Austin & Kansas City
          </span>
          <span
            className="mono"
            style={{
              fontSize: 11,
              color: "rgba(245,242,236,0.55)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            v1.4 · Updated Apr 2026
          </span>
        </div>
      </div>
    </footer>
  );
}
