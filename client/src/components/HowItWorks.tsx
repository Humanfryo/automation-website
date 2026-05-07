import ArrowIcon from "./ArrowIcon";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Learn your business",
    time: "2 weeks",
    body: "We sit with your sales team, your AEs, your founder. We read your last twelve closed-won deals. We don't write a single email until we can describe your buyer the way you do.",
    detail: "/ ICP workshops · win-loss interviews · objection mapping",
  },
  {
    n: "02",
    title: "Build your outreach system",
    time: "1 week",
    body: "Domains warmed, lists scrubbed, sequences written by humans, signal-based triggers wired up. We show you every email before it goes out.",
    detail: "/ 4–6 inboxes · domain warming · Clay enrichment · Smartlead",
  },
  {
    n: "03",
    title: "Land in your calendar",
    time: "Ongoing",
    body: "Replies route to a real person on our team. We qualify, push back on tire-kickers, and only book what fits your ICP. First qualified meeting usually lands in 30–45 days.",
    detail: "/ live human reply-handling · ICP gating · no-show recovery",
  },
  {
    n: "04",
    title: "Optimize and scale",
    time: "Ongoing",
    body: "Weekly call, monthly written report, quarterly strategy. Sequences that aren't working get killed. The ones that are get more volume.",
    detail: "/ weekly review · A/B at sequence level · honest reporting",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" style={{ background: "var(--bone)" }}>
      <div className="shell">
        <Reveal>
          <Eyebrow>§ 02 / How it works</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2
            className="display"
            style={{
              fontSize: "clamp(32px, 4vw, 56px)",
              margin: "20px 0 0",
              maxWidth: 880,
            }}
          >
            From kickoff to your first qualified meeting in{" "}
            <span
              className="serif-italic"
              style={{ color: "var(--accent)", fontWeight: 400 }}
            >
              30–45 days
            </span>
            .
          </h2>
        </Reveal>

        <div style={{ height: 80 }} />

        <div className="how-list">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 60}>
              <div
                className="how-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "120px 1fr 280px",
                  gap: 48,
                  padding: "40px 0",
                  borderTop: "1px solid var(--rule-strong)",
                  borderBottom:
                    i === steps.length - 1
                      ? "1px solid var(--rule-strong)"
                      : "none",
                  alignItems: "start",
                }}
              >
                <div
                  className="mono"
                  style={{ fontSize: 14, color: "var(--graphite)" }}
                >
                  {s.n}
                  <div
                    style={{
                      fontSize: 11,
                      color: "var(--graphite-dim)",
                      marginTop: 8,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                    }}
                  >
                    {s.time}
                  </div>
                </div>
                <div>
                  <h3
                    className="display"
                    style={{
                      fontSize: 30,
                      margin: 0,
                      fontWeight: 700,
                      letterSpacing: "-0.015em",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      margin: "16px 0 0",
                      fontSize: 17,
                      lineHeight: 1.6,
                      color: "var(--graphite)",
                      maxWidth: 620,
                    }}
                  >
                    {s.body}
                  </p>
                </div>
                <div
                  className="mono"
                  style={{
                    fontSize: 12,
                    color: "var(--graphite-dim)",
                    lineHeight: 1.6,
                  }}
                >
                  {s.detail}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div style={{ height: 80 }} />

        <Reveal>
          <div
            className="cta-strip"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto 1fr",
              gap: 48,
              alignItems: "center",
            }}
          >
            <div>
              <Eyebrow>Ready?</Eyebrow>
              <p
                className="serif-italic"
                style={{
                  fontSize: 22,
                  color: "var(--ink)",
                  margin: "12px 0 0",
                  lineHeight: 1.3,
                }}
              >
                Book a 30-minute call. We'll tell you whether we can help.
              </p>
            </div>
            <div
              className="cta-strip-divider"
              style={{ width: 1, height: 60, background: "var(--rule-strong)" }}
            />
            <div style={{ justifySelf: "end" }}>
              <a href="#cta" className="btn btn--primary">
                Book a Strategy Call <ArrowIcon />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
