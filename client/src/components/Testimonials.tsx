import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

const quotes = [
  // TODO Hari: confirm real quote with attribution permission
  {
    q: "We've tried four agencies. Spartan Flow is the first one that actually read our deck before writing a sequence. The meetings show up on the calendar with the right titles attached.",
    who: "Marcus Halloway",
    role: "VP Sales · Heartland Logistics",
  },
  // TODO Hari: confirm real quote with attribution permission
  {
    q: "The thing that sold me was the first call. Hari said, 'Here's the three reasons this might not work,' and walked through them. Nobody else did that.",
    who: "Priya Anand",
    role: "Founder · Northgate MSP",
  },
  // TODO Hari: confirm real quote with attribution permission
  {
    q: "Our AEs used to skip discovery calls because half were bad fits. They don't anymore. That's the whole pitch.",
    who: "Dale Reinhart",
    role: "Director of Sales · Reinhart Manufacturing",
  },
];

export default function Testimonials() {
  return (
    <section
      id="voices"
      style={{
        background: "#EFEBE2",
        borderTop: "1px solid var(--rule)",
        borderBottom: "1px solid var(--rule)",
      }}
    >
      <div className="shell">
        <Reveal>
          <Eyebrow>§ 05 / Voices</Eyebrow>
        </Reveal>
        <div style={{ height: 64 }} />
        <div>
          {quotes.map((q, i) => (
            <Reveal key={q.who} delay={i * 60}>
              <div
                className="quote-row"
                style={{
                  borderTop: "1px solid var(--rule-strong)",
                  borderBottom:
                    i === quotes.length - 1
                      ? "1px solid var(--rule-strong)"
                      : "none",
                  padding: "64px 0",
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: 48,
                  alignItems: "start",
                }}
              >
                <div
                  className="mono"
                  style={{
                    fontSize: 12,
                    color: "var(--graphite-dim)",
                    letterSpacing: "0.16em",
                  }}
                >
                  {String(i + 1).padStart(2, "0")} /{" "}
                  {String(quotes.length).padStart(2, "0")}
                </div>
                <div>
                  <p
                    className="serif-italic"
                    style={{
                      fontSize: "clamp(24px, 2.6vw, 38px)",
                      lineHeight: 1.3,
                      color: "var(--ink)",
                      margin: 0,
                      maxWidth: 880,
                    }}
                  >
                    "{q.q}"
                  </p>
                  <div
                    className="mono"
                    style={{
                      marginTop: 24,
                      fontSize: 12,
                      color: "var(--graphite)",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                    }}
                  >
                    {q.who} &nbsp;·&nbsp;{" "}
                    <span style={{ color: "var(--graphite-dim)" }}>{q.role}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
