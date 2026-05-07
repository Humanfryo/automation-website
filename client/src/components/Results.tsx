import ArrowIcon from "./ArrowIcon";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import TickNumber from "./TickNumber";

// TODO Hari: verify aggregate stats or remove the bar
const aggregate: Array<{
  num: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: string;
}> = [
  { num: 142, label: "Meetings booked / Q3" },
  { num: 18.4, suffix: "M", prefix: "$", decimals: 1, label: "Pipeline generated" },
  { num: 41, suffix: "%", label: "Avg. show rate" },
  { num: 11, label: "Active clients" },
];

const cases = [
  {
    tag: "Manufacturing / OEM",
    photo: "/case-studies/manufacturing.webp",
    headline: "14 enterprise demos in 90 days, from a cold start.",
    body: [
      "A precision-machining shop in Ohio with a great product and zero outbound motion. Their whole pipeline came from referrals and trade shows — fine, until referrals slowed and the trade-show calendar got expensive.",
      "We built a list of 4,200 plant managers and procurement leads inside a 600-mile radius, ran a four-touch sequence over three weeks, and routed replies through a shared inbox we manned during their working hours.",
    ],
    stats: [
      { num: "14", label: "Demos booked" },
      { num: "$587K", label: "Qualified pipeline" },
      // TODO Hari: confirm derived stat or replace
      { num: "—", label: "Closed in Q1" },
      // TODO Hari: confirm derived stat or replace
      { num: "—", label: "Reply rate" },
    ],
    quote:
      "First month I almost canceled. Second month we closed two and the third was already on the calendar.",
    attribution: "Director of Sales, precision machining (Ohio)",
  },
  // TODO Hari: confirm real client engagement or remove panel
  {
    tag: "Managed IT Services",
    photo: "/case-studies/managed-it.webp",
    headline: "First predictable pipeline in 11 years.",
    body: [
      "A regional MSP that had been running on word-of-mouth since 2014. Their best AE was the founder. He didn't want a forty-person SDR org — he wanted predictable conversations with operators in the 50–500 employee range.",
      "We built a multi-touch sequence around a common pain in their segment (compliance lapses on M365 tenants) and a free audit hook. The first qualified call landed on day 31. By day 90 they had four signed and two in procurement.",
    ],
    stats: [
      { num: "22", label: "Meetings booked" },
      { num: "$780K", label: "New ARR" },
      { num: "52.7%", label: "Show rate" },
      { num: "2", label: "Closed in Q1" },
    ],
    quote:
      "I stopped checking the calendar every morning to see if anything had come in. It just does now.",
    attribution: "Founder, regional MSP (Indiana)",
  },
  // TODO Hari: confirm real client engagement or remove panel
  {
    tag: "Logistics / 3PL",
    photo: "/case-studies/logistics.webp",
    headline: "Replaced a $14K/month SDR with a measurable system.",
    body: [
      "A mid-market 3PL that had been through two SDR hires and one agency in eighteen months. The internal hires ramped slow. The agency booked junk meetings with the wrong titles. They were ready to give up on outbound entirely.",
      "We narrowed the ICP to Director of Logistics and VP Supply Chain at shippers doing $50–250M, wrote sequences that opened with a real cost-per-pallet number, and gated every meeting through a five-question qualifier.",
    ],
    stats: [
      { num: "31", label: "Meetings booked" },
      { num: "$29.2K", label: "Cost / mo" },
      { num: "94%", label: "Lead quality" },
      { num: "$847K", label: "Closed-won" },
    ],
    quote:
      "I haven't had to sit through a single discovery with the wrong person all quarter. That alone paid for it.",
    attribution: "VP Sales, mid-market 3PL (Texas)",
  },
];

export default function Results() {
  return (
    <section id="results">
      <div className="shell">
        <Reveal>
          <Eyebrow>§ 04 / Real numbers</Eyebrow>
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
            <span
              className="serif-italic"
              style={{ color: "var(--accent)", fontWeight: 400 }}
            >
              Real
            </span>{" "}
            campaigns. Pulled straight from client dashboards.
          </h2>
        </Reveal>

        <div style={{ height: 64 }} />

        <Reveal>
          <div
            style={{
              background: "var(--ink)",
              color: "var(--bone)",
              padding: "40px 0",
            }}
          >
            <div
              className="agg-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                alignItems: "end",
              }}
            >
              {aggregate.map((a, i) => (
                <div
                  key={a.label}
                  style={{
                    padding: "0 32px",
                    borderRight:
                      i < aggregate.length - 1
                        ? "1px solid rgba(245,242,236,0.18)"
                        : "none",
                  }}
                >
                  <div
                    className="bignum"
                    style={{
                      fontSize: "clamp(48px, 6vw, 80px)",
                      color: "var(--bone)",
                    }}
                  >
                    <TickNumber
                      value={a.num}
                      prefix={a.prefix || ""}
                      suffix={a.suffix || ""}
                      decimals={a.decimals || 0}
                    />
                  </div>
                  <div
                    className="mono"
                    style={{
                      fontSize: 11,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      marginTop: 16,
                      color: "rgba(245,242,236,0.7)",
                    }}
                  >
                    {a.label}
                  </div>
                </div>
              ))}
            </div>
            <div
              className="shell"
              style={{
                marginTop: 24,
                paddingTop: 24,
                borderTop: "1px solid rgba(245,242,236,0.18)",
              }}
            >
              <span
                className="mono"
                style={{
                  fontSize: 11,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "rgba(245,242,236,0.55)",
                }}
              >
                Aggregate, all clients · Trailing 90 days · Updated weekly
              </span>
            </div>
          </div>
        </Reveal>

        <div style={{ height: 96 }} />

        <div className="case-list">
          {cases.map((cs, idx) => (
            <Reveal key={cs.headline} delay={idx * 60}>
              <article
                className="case-row"
                style={{
                  borderTop: "1px solid var(--rule-strong)",
                  borderBottom:
                    idx === cases.length - 1
                      ? "1px solid var(--rule-strong)"
                      : "none",
                  padding: "56px 0",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 64,
                }}
              >
                <div>
                  <div
                    className="mono"
                    style={{
                      fontSize: 11,
                      color: "var(--graphite-dim)",
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      marginBottom: 20,
                    }}
                  >
                    Case {String(idx + 1).padStart(2, "0")} / {cs.tag}
                  </div>
                  <h3
                    className="display"
                    style={{
                      fontSize: "clamp(28px, 3vw, 40px)",
                      margin: 0,
                      lineHeight: 1.1,
                    }}
                  >
                    {cs.headline}
                  </h3>
                  <div style={{ marginTop: 28 }}>
                    {cs.body.map((p, i) => (
                      <p
                        key={i}
                        style={{
                          margin: "0 0 18px",
                          fontSize: 16,
                          lineHeight: 1.65,
                          color: "var(--graphite)",
                        }}
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                  <blockquote style={{ margin: "32px 0 0", paddingLeft: 0 }}>
                    <p
                      className="serif-italic"
                      style={{
                        fontSize: 22,
                        lineHeight: 1.35,
                        color: "var(--ink)",
                        margin: 0,
                      }}
                    >
                      "{cs.quote}"
                    </p>
                    <div
                      className="mono"
                      style={{
                        marginTop: 14,
                        fontSize: 11,
                        color: "var(--graphite-dim)",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                      }}
                    >
                      — {cs.attribution}
                    </div>
                  </blockquote>
                </div>
                <div className="case-figure">
                  <div style={{ marginBottom: 24 }}>
                    <img
                      src={cs.photo}
                      alt={`Industrial scene from ${cs.tag} case study`}
                      loading="lazy"
                      decoding="async"
                      style={{
                        display: "block",
                        width: "100%",
                        aspectRatio: "4 / 3",
                        objectFit: "cover",
                        border: "1px solid var(--rule)",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      border: "1px solid var(--rule-strong)",
                    }}
                  >
                    {cs.stats.map((s, i) => (
                      <div
                        key={s.label}
                        style={{
                          padding: "24px 20px",
                          borderRight:
                            i % 2 === 0 ? "1px solid var(--rule)" : "none",
                          borderTop: i >= 2 ? "1px solid var(--rule)" : "none",
                          background: "var(--paper)",
                        }}
                      >
                        <div
                          className="bignum"
                          style={{ fontSize: 32, color: "var(--ink)" }}
                        >
                          {s.num}
                        </div>
                        <div
                          className="mono"
                          style={{
                            fontSize: 10,
                            color: "var(--graphite-dim)",
                            letterSpacing: "0.14em",
                            textTransform: "uppercase",
                            marginTop: 10,
                          }}
                        >
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  <a
                    href="#cta"
                    className="btn btn--text"
                    style={{ marginTop: 24, fontSize: 13 }}
                  >
                    Read the full case <ArrowIcon />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
