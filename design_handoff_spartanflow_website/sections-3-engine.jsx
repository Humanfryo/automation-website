// Engine + Real numbers
function Engine() {
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

  return (
    <section id="engine" style={{ background: "#EFEBE2", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
      <div className="shell">
        <Reveal><Eyebrow>§ 03 / The engine</Eyebrow></Reveal>
        <Reveal delay={80}>
          <h2 className="display" style={{ fontSize: "clamp(32px, 4vw, 56px)", margin: "20px 0 0", maxWidth: 880 }}>
            What actually runs under the hood.
          </h2>
        </Reveal>

        <div style={{ height: 64 }} />

        {/* Stage diagram */}
        <Reveal>
          <div className="stage-diagram" style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr auto 1fr auto 1fr",
            alignItems: "center",
            gap: 0,
            padding: "32px 0",
            borderTop: "1px solid var(--rule-strong)",
            borderBottom: "1px solid var(--rule-strong)",
          }}>
            {stages.map((s, i) => (
              <React.Fragment key={s.label}>
                <div style={{ textAlign: "center", padding: "0 16px" }}>
                  <div className="mono" style={{ fontSize: 11, color: "var(--graphite-dim)", letterSpacing: "0.16em", textTransform: "uppercase" }}>
                    Stage {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="display" style={{ fontSize: 18, marginTop: 10, color: "var(--ink)", fontWeight: 600 }}>
                    {s.label}
                  </div>
                  <div className="mono" style={{ fontSize: 11, color: "var(--graphite)", marginTop: 6 }}>
                    {s.sub}
                  </div>
                </div>
                {i < stages.length - 1 && (
                  <div className="stage-arrow" style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)" }}>
                    <svg width="32" height="14" viewBox="0 0 32 14" fill="none" aria-hidden="true">
                      <path d="M0 7H30M30 7L24 1.5M30 7L24 12.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square"/>
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </Reveal>

        <div style={{ height: 64 }} />

        {/* 2x2 grid */}
        <div className="engine-grid" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 0,
          border: "1px solid var(--rule-strong)",
          background: "var(--rule-strong)",
        }}>
          {cells.map((c, i) => (
            <Reveal key={c.label} delay={i * 60} style={{
              background: "#EFEBE2",
              padding: "40px 36px",
            }}>
              <div className="mono" style={{ fontSize: 11, color: "var(--graphite-dim)", letterSpacing: "0.16em", textTransform: "uppercase" }}>
                {c.label}
              </div>
              <p style={{ margin: "16px 0 0", fontSize: 17, lineHeight: 1.6, color: "var(--graphite)", maxWidth: 540 }}>
                {c.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Results() {
  const aggregate = [
    { num: 142, suffix: "", label: "Meetings booked / Q3" },
    { num: 18.4, suffix: "M", prefix: "$", decimals: 1, label: "Pipeline generated" },
    { num: 41, suffix: "%", label: "Avg. show rate" },
    { num: 11, suffix: "", label: "Active clients" },
  ];

  const cases = [
    {
      tag: "Manufacturing / OEM",
      headline: "14 enterprise demos in 90 days, from a cold start.",
      body: [
        "A precision-machining shop in Ohio with a great product and zero outbound motion. Their whole pipeline came from referrals and trade shows — fine, until referrals slowed and the trade-show calendar got expensive.",
        "We built a list of 4,200 plant managers and procurement leads inside a 600-mile radius, ran a four-touch sequence over three weeks, and routed replies through a shared inbox we manned during their working hours.",
      ],
      stats: [
        { num: "14", label: "Demos booked" },
        { num: "$2.4M", label: "Pipeline" },
        { num: "$340K", label: "Closed in Q1" },
        { num: "38.4%", label: "Reply rate" },
      ],
      quote: "First month I almost canceled. Second month we closed two and the third was already on the calendar.",
      attribution: "Director of Sales, precision machining (Ohio)",
    },
    {
      tag: "Managed IT Services",
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
      quote: "I stopped checking the calendar every morning to see if anything had come in. It just does now.",
      attribution: "Founder, regional MSP (Indiana)",
    },
    {
      tag: "Logistics / 3PL",
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
      quote: "I haven't had to sit through a single discovery with the wrong person all quarter. That alone paid for it.",
      attribution: "VP Sales, mid-market 3PL (Texas)",
    },
  ];

  return (
    <section id="results">
      <div className="shell">
        <Reveal><Eyebrow>§ 04 / Real numbers</Eyebrow></Reveal>
        <Reveal delay={80}>
          <h2 className="display" style={{ fontSize: "clamp(32px, 4vw, 56px)", margin: "20px 0 0", maxWidth: 880 }}>
            <span className="serif-italic" style={{ color: "var(--accent)", fontWeight: 400 }}>Real</span> campaigns. Pulled straight from client dashboards.
          </h2>
        </Reveal>

        <div style={{ height: 64 }} />

        {/* Aggregate stats — quarterly report style */}
        <Reveal>
          <div style={{
            background: "var(--ink)",
            color: "var(--bone)",
            padding: "40px 0",
          }}>
            <div className="agg-grid" style={{
              display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
              alignItems: "end",
            }}>
              {aggregate.map((a, i) => (
                <div key={a.label} style={{
                  padding: "0 32px",
                  borderRight: i < aggregate.length - 1 ? "1px solid rgba(245,242,236,0.18)" : "none",
                }}>
                  <div className="bignum" style={{ fontSize: "clamp(48px, 6vw, 80px)", color: "var(--bone)" }}>
                    <TickNumber value={a.num} prefix={a.prefix || ""} suffix={a.suffix || ""} decimals={a.decimals || 0} />
                  </div>
                  <div className="mono" style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", marginTop: 16, color: "rgba(245,242,236,0.7)" }}>
                    {a.label}
                  </div>
                </div>
              ))}
            </div>
            <div className="shell" style={{ marginTop: 24, paddingTop: 24, borderTop: "1px solid rgba(245,242,236,0.18)" }}>
              <span className="mono" style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(245,242,236,0.55)" }}>
                Aggregate, all clients · Trailing 90 days · Updated weekly
              </span>
            </div>
          </div>
        </Reveal>

        <div style={{ height: 96 }} />

        {/* Case studies as editorial blocks */}
        <div className="case-list">
          {cases.map((cs, idx) => (
            <Reveal key={cs.headline} delay={idx * 60}>
              <article style={{
                borderTop: "1px solid var(--rule-strong)",
                borderBottom: idx === cases.length - 1 ? "1px solid var(--rule-strong)" : "none",
                padding: "56px 0",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 64,
              }} className="case-row">
                <div>
                  <div className="mono" style={{ fontSize: 11, color: "var(--graphite-dim)", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 20 }}>
                    Case {String(idx + 1).padStart(2, "0")} / {cs.tag}
                  </div>
                  <h3 className="display" style={{ fontSize: "clamp(28px, 3vw, 40px)", margin: 0, lineHeight: 1.1 }}>
                    {cs.headline}
                  </h3>
                  <div style={{ marginTop: 28 }}>
                    {cs.body.map((p, i) => (
                      <p key={i} style={{ margin: "0 0 18px", fontSize: 16, lineHeight: 1.65, color: "var(--graphite)" }}>{p}</p>
                    ))}
                  </div>
                  <blockquote style={{ margin: "32px 0 0", paddingLeft: 0, borderLeft: "none" }}>
                    <p className="serif-italic" style={{ fontSize: 22, lineHeight: 1.35, color: "var(--ink)", margin: 0 }}>
                      "{cs.quote}"
                    </p>
                    <div className="mono" style={{ marginTop: 14, fontSize: 11, color: "var(--graphite-dim)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                      — {cs.attribution}
                    </div>
                  </blockquote>
                </div>
                <div className="case-figure">
                  <div style={{ marginBottom: 24 }}>
                    <PlaceholderImage label={`Industrial scene · ${cs.tag}`} ratio="4 / 3" />
                  </div>
                  <div style={{
                    display: "grid", gridTemplateColumns: "1fr 1fr",
                    border: "1px solid var(--rule-strong)",
                  }}>
                    {cs.stats.map((s, i) => (
                      <div key={s.label} style={{
                        padding: "24px 20px",
                        borderRight: i % 2 === 0 ? "1px solid var(--rule)" : "none",
                        borderTop: i >= 2 ? "1px solid var(--rule)" : "none",
                        background: "var(--paper)",
                      }}>
                        <div className="bignum" style={{ fontSize: 32, color: "var(--ink)" }}>{s.num}</div>
                        <div className="mono" style={{ fontSize: 10, color: "var(--graphite-dim)", letterSpacing: "0.14em", textTransform: "uppercase", marginTop: 10 }}>
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  <a href="#cta" className="btn btn--text" style={{ marginTop: 24, fontSize: 13 }}>
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

Object.assign(window, { Engine, Results });
