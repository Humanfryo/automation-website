import ArrowIcon from "./ArrowIcon";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

const items = [
  {
    title: "The revolving door of SDRs",
    body: "You hire one. They ramp for three months, send 4,000 emails, book six meetings, and quit for a tech company. You start over. Salary, benefits, a CRM seat — gone.",
  },
  {
    title: "DIY outreach that fizzled",
    body: "Your ops lead bought Apollo and ZoomInfo on a Tuesday. By Friday they were back in the plant. The lists are stale. The sequences never went out.",
  },
  {
    title: "The agency that booked junk",
    body: "Twelve meetings a month, on paper. Eight no-shows. Three intern-level discoveries. One real buyer, who said they'd asked to be removed twice. You churned in 90 days.",
  },
];

export default function Problem() {
  return (
    <section id="problem">
      <div className="shell">
        <div
          className="problem-head"
          style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: 48,
            alignItems: "baseline",
          }}
        >
          <Reveal>
            <Eyebrow>§ 01 / The problem</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2
              className="display"
              style={{
                fontSize: "clamp(32px, 4vw, 56px)",
                margin: 0,
                maxWidth: 760,
              }}
            >
              Three ways outbound usually goes wrong.
            </h2>
          </Reveal>
        </div>

        <div style={{ height: 80 }} />

        <hr className="hairline hairline--strong" />
        <div
          className="problem-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}
        >
          {items.map((it, i) => (
            <Reveal
              key={it.title}
              delay={i * 90}
              style={{
                padding: "48px 32px 56px 0",
                borderRight:
                  i < items.length - 1 ? "1px solid var(--rule)" : "none",
                paddingLeft: i > 0 ? 32 : 0,
              }}
            >
              <div
                className="mono"
                style={{
                  fontSize: 11,
                  color: "var(--graphite-dim)",
                  letterSpacing: "0.16em",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3
                className="serif-italic"
                style={{
                  fontSize: 28,
                  color: "var(--ink)",
                  margin: "16px 0 20px",
                  lineHeight: 1.15,
                }}
              >
                {it.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: "var(--graphite)",
                }}
              >
                {it.body}
              </p>
            </Reveal>
          ))}
        </div>
        <hr className="hairline hairline--strong" />

        <div style={{ height: 80 }} />

        <Reveal>
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
            <p
              className="serif-italic"
              style={{
                fontSize: 26,
                color: "var(--ink)",
                lineHeight: 1.35,
                margin: 0,
              }}
            >
              There's a way to run outbound that doesn't require any of those.
            </p>
            <a
              href="#how"
              className="btn btn--text"
              style={{ marginTop: 20, fontSize: 14 }}
            >
              How we do it <ArrowIcon />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
