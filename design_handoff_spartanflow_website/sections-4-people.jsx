// Guarantee + Testimonials + Founders
function Guarantee() {
  return (
    <section id="guarantee">
      <div className="shell shell--narrow" style={{ textAlign: "center" }}>
        <Reveal><Eyebrow>60-Day Guarantee</Eyebrow></Reveal>
        <Reveal delay={80}>
          <h2 className="display" style={{ fontSize: "clamp(32px, 4vw, 48px)", margin: "24px 0 32px", lineHeight: 1.15 }}>
            If we don't book a qualified meeting in <span className="serif-italic" style={{ color: "var(--accent)", fontWeight: 400 }}>sixty days</span>, you don't pay for the next sixty.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p style={{ fontSize: 18, lineHeight: 1.65, color: "var(--graphite)", margin: 0 }}>
            We extend your engagement at no cost until we do. We've activated this twice in three years. Both times we figured out the ICP needed re-cutting and the pipeline started two weeks later.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div style={{ marginTop: 40 }}>
            <a href="#cta" className="btn btn--primary">Start with the Guarantee <ArrowIcon /></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    {
      q: "We've tried four agencies. Spartan Flow is the first one that actually read our deck before writing a sequence. The meetings show up on the calendar with the right titles attached.",
      who: "Marcus Halloway",
      role: "VP Sales · Heartland Logistics",
    },
    {
      q: "The thing that sold me was the first call. Hari said, 'Here's the three reasons this might not work,' and walked through them. Nobody else did that.",
      who: "Priya Anand",
      role: "Founder · Northgate MSP",
    },
    {
      q: "Our AEs used to skip discovery calls because half were bad fits. They don't anymore. That's the whole pitch.",
      who: "Dale Reinhart",
      role: "Director of Sales · Reinhart Manufacturing",
    },
  ];
  return (
    <section id="voices" style={{ background: "#EFEBE2", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
      <div className="shell">
        <Reveal><Eyebrow>§ 05 / Voices</Eyebrow></Reveal>
        <div style={{ height: 64 }} />
        <div>
          {quotes.map((q, i) => (
            <Reveal key={q.who} delay={i * 60}>
              <div style={{
                borderTop: "1px solid var(--rule-strong)",
                borderBottom: i === quotes.length - 1 ? "1px solid var(--rule-strong)" : "none",
                padding: "64px 0",
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: 48,
                alignItems: "start",
              }} className="quote-row">
                <div className="mono" style={{ fontSize: 12, color: "var(--graphite-dim)", letterSpacing: "0.16em" }}>
                  {String(i + 1).padStart(2, "0")} / {String(quotes.length).padStart(2, "0")}
                </div>
                <div>
                  <p className="serif-italic" style={{
                    fontSize: "clamp(24px, 2.6vw, 38px)",
                    lineHeight: 1.3,
                    color: "var(--ink)",
                    margin: 0,
                    maxWidth: 880,
                  }}>
                    "{q.q}"
                  </p>
                  <div className="mono" style={{ marginTop: 24, fontSize: 12, color: "var(--graphite)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                    {q.who} &nbsp;·&nbsp; <span style={{ color: "var(--graphite-dim)" }}>{q.role}</span>
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

function Founders() {
  const team = [
    {
      name: "Chris Berkemeyer",
      role: "Co-founder",
      based: "Based in Austin, TX",
      bio: "I spent eleven years inside industrial sales orgs — first as an AE selling automation hardware to plant managers, then running a five-person SDR team at a logistics platform. I started Spartan Flow because I watched too many great products lose to mediocre ones with better outbound. I run our strategy and ICP work. If we get the targeting wrong, that's on me.",
    },
    {
      name: "Hari Rajashekar",
      role: "Co-founder",
      based: "Based in Pittsburgh, PA",
      bio: "I came up on the operator side — supply chain at a food manufacturer, then head of revenue ops at a fast-growing 3PL. I'm the one who'll actually be in your sequences and dashboards on a Tuesday at 7am. I care about clean data and short feedback loops. I'm allergic to vanity metrics and I won't put one in your monthly report.",
    },
  ];
  return (
    <section id="about">
      <div className="shell">
        <Reveal><Eyebrow>§ 06 / Who we are</Eyebrow></Reveal>
        <Reveal delay={80}>
          <h2 className="display" style={{ fontSize: "clamp(32px, 4vw, 56px)", margin: "20px 0 0", maxWidth: 800 }}>
            Two operators who got tired of watching outbound get botched.
          </h2>
        </Reveal>

        <div style={{ height: 80 }} />

        <div className="founder-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
          {team.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <div style={{ borderTop: "1px solid var(--rule-strong)", paddingTop: 32 }}>
                <div style={{ marginBottom: 28 }}>
                  <PlaceholderImage label={`Portrait · ${p.name}`} ratio="4 / 5" />
                </div>
                <h3 className="display" style={{ fontSize: 32, margin: 0 }}>{p.name}</h3>
                <div className="mono" style={{ fontSize: 12, marginTop: 6, color: "var(--graphite-dim)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                  {p.role}
                </div>
                <p style={{ marginTop: 24, fontSize: 17, lineHeight: 1.65, color: "var(--graphite)" }}>
                  {p.bio}
                </p>
                <div className="mono" style={{ marginTop: 20, fontSize: 12, color: "var(--graphite-dim)", letterSpacing: "0.1em" }}>
                  {p.based}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Guarantee, Testimonials, Founders });
