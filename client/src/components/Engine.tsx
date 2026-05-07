import { Fragment } from "react";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

const stages = [
  { label: "Lead Intelligence", sub: "Clay + signals" },
  { label: "ICP Filtering", sub: "Hand-reviewed" },
  { label: "Personalized Outreach", sub: "Written by humans" },
  { label: "Meeting Booked", sub: "Live qualifier" },
];

const cells = [
  {
    label: "01 / Lead intelligence",
    body: "We pull from Apollo, ZoomInfo, and Clay, then layer in firmographic signals — funding, hiring, tech stack, ownership changes. Every list gets a human pass before send.",
  },
  {
    label: "02 / Personalization at volume",
    body: "Every first email gets one custom line tied to something on the prospect's site, LinkedIn, or recent press. Generated, then read by a human before it ships.",
  },
  {
    label: "03 / Multi-channel sequencing",
    body: "Email primary, LinkedIn touches on relevant accounts, occasional voicemail drops. Six to eight touches over twenty-one days, no spray.",
  },
  {
    label: "04 / Reply handling",
    body: "Replies hit a shared inbox monitored by a real person on our team during business hours. Qualifying questions go in writing before anything reaches your calendar.",
  },
];

export default function Engine() {
  return (
    <section
      id="engine"
      style={{
        background: "#EFEBE2",
        borderTop: "1px solid var(--rule)",
        borderBottom: "1px solid var(--rule)",
      }}
    >
      <div className="shell">
        <Reveal>
          <Eyebrow>§ 03 / The engine</Eyebrow>
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
            What actually runs under the hood.
          </h2>
        </Reveal>

        <div style={{ height: 64 }} />

        <Reveal>
          <div
            className="stage-diagram"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto 1fr auto 1fr auto 1fr",
              alignItems: "center",
              padding: "32px 0",
              borderTop: "1px solid var(--rule-strong)",
              borderBottom: "1px solid var(--rule-strong)",
            }}
          >
            {stages.map((s, i) => (
              <Fragment key={s.label}>
                <div style={{ textAlign: "center", padding: "0 16px" }}>
                  <div
                    className="mono"
                    style={{
                      fontSize: 11,
                      color: "var(--graphite-dim)",
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                    }}
                  >
                    Stage {String(i + 1).padStart(2, "0")}
                  </div>
                  <div
                    className="display"
                    style={{
                      fontSize: 18,
                      marginTop: 10,
                      color: "var(--ink)",
                      fontWeight: 600,
                    }}
                  >
                    {s.label}
                  </div>
                  <div
                    className="mono"
                    style={{
                      fontSize: 11,
                      color: "var(--graphite)",
                      marginTop: 6,
                    }}
                  >
                    {s.sub}
                  </div>
                </div>
                {i < stages.length - 1 && (
                  <div
                    className="stage-arrow"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent)",
                    }}
                  >
                    <svg
                      width="32"
                      height="14"
                      viewBox="0 0 32 14"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M0 7H30M30 7L24 1.5M30 7L24 12.5"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="square"
                      />
                    </svg>
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </Reveal>

        <div style={{ height: 64 }} />

        <div
          className="engine-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 1,
            border: "1px solid var(--rule-strong)",
            background: "var(--rule-strong)",
          }}
        >
          {cells.map((c, i) => (
            <Reveal
              key={c.label}
              delay={i * 60}
              style={{ background: "#EFEBE2", padding: "40px 36px" }}
            >
              <div
                className="mono"
                style={{
                  fontSize: 11,
                  color: "var(--graphite-dim)",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                }}
              >
                {c.label}
              </div>
              <p
                style={{
                  margin: "16px 0 0",
                  fontSize: 17,
                  lineHeight: 1.6,
                  color: "var(--graphite)",
                  maxWidth: 540,
                }}
              >
                {c.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
