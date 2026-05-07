// Problem + How it works
function Problem() {
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
  return (
    <section id="problem">
      <div className="shell">
        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 48, alignItems: "baseline" }} className="problem-head">
          <Reveal>
            <Eyebrow>§ 01 / The problem</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display" style={{ fontSize: "clamp(32px, 4vw, 56px)", margin: 0, maxWidth: 760 }}>
              Three ways outbound usually goes wrong.
            </h2>
          </Reveal>
        </div>

        <div style={{ height: 80 }} />

        <hr className="hairline hairline--strong" />
        <div className="problem-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0 }}>
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 90} style={{
              padding: "48px 32px 56px 0",
              borderRight: i < items.length - 1 ? "1px solid var(--rule)" : "none",
              paddingLeft: i > 0 ? 32 : 0,
            }}>
              <div className="mono" style={{ fontSize: 11, color: "var(--graphite-dim)", letterSpacing: "0.16em" }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="serif-italic" style={{ fontSize: 28, color: "var(--ink)", margin: "16px 0 20px", lineHeight: 1.15 }}>
                {it.title}
              </h3>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "var(--graphite)" }}>
                {it.body}
              </p>
            </Reveal>
          ))}
        </div>
        <hr className="hairline hairline--strong" />

        <div style={{ height: 80 }} />

        <Reveal>
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
            <p className="serif-italic" style={{ fontSize: 26, color: "var(--ink)", lineHeight: 1.35, margin: 0 }}>
              There's a way to run outbound that doesn't require any of those.
            </p>
            <a href="#how" className="btn btn--text" style={{ marginTop: 20, fontSize: 14 }}>
              How we do it <ArrowIcon />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function HowItWorks() {
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

  return (
    <section id="how" style={{ background: "var(--bone)" }}>
      <div className="shell">
        <Reveal>
          <Eyebrow>§ 02 / How it works</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="display" style={{ fontSize: "clamp(32px, 4vw, 56px)", margin: "20px 0 0", maxWidth: 880 }}>
            From kickoff to your first qualified meeting in <span className="serif-italic" style={{ color: "var(--accent)", fontWeight: 400 }}>30–45 days</span>.
          </h2>
        </Reveal>

        <div style={{ height: 80 }} />

        <div className="how-list">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 60}>
              <div className="how-row" style={{
                display: "grid",
                gridTemplateColumns: "120px 1fr 280px",
                gap: 48,
                padding: "40px 0",
                borderTop: "1px solid var(--rule-strong)",
                borderBottom: i === steps.length - 1 ? "1px solid var(--rule-strong)" : "none",
                alignItems: "start",
              }}>
                <div className="mono" style={{ fontSize: 14, color: "var(--graphite)" }}>
                  {s.n}
                  <div style={{ fontSize: 11, color: "var(--graphite-dim)", marginTop: 8, letterSpacing: "0.16em", textTransform: "uppercase" }}>
                    {s.time}
                  </div>
                </div>
                <div>
                  <h3 className="display" style={{ fontSize: 30, margin: 0, fontWeight: 700, letterSpacing: "-0.015em" }}>{s.title}</h3>
                  <p style={{ margin: "16px 0 0", fontSize: 17, lineHeight: 1.6, color: "var(--graphite)", maxWidth: 620 }}>
                    {s.body}
                  </p>
                </div>
                <div className="mono" style={{ fontSize: 12, color: "var(--graphite-dim)", lineHeight: 1.6 }}>
                  {s.detail}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div style={{ height: 80 }} />

        <Reveal>
          <div style={{
            display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 48, alignItems: "center",
          }} className="cta-strip">
            <div>
              <Eyebrow>Ready?</Eyebrow>
              <p className="serif-italic" style={{ fontSize: 22, color: "var(--ink)", margin: "12px 0 0", lineHeight: 1.3 }}>
                Book a 30-minute call. We'll tell you whether we can help.
              </p>
            </div>
            <div style={{ width: 1, height: 60, background: "var(--rule-strong)" }} className="cta-strip-divider" />
            <div style={{ justifySelf: "end" }}>
              <a href="#cta" className="btn btn--primary">Book a Strategy Call <ArrowIcon /></a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { Problem, HowItWorks });
