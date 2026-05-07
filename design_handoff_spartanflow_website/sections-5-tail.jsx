// Integrations + FAQ + Final CTA + Footer
function Integrations() {
  const tools = ["HubSpot", "Salesforce", "Google Calendar", "Outlook", "Slack", "Zapier"];
  return (
    <section id="integrations" style={{ paddingTop: 64, paddingBottom: 64 }}>
      <div className="shell">
        <div style={{
          borderTop: "1px solid var(--rule-strong)",
          borderBottom: "1px solid var(--rule-strong)",
          padding: "32px 0",
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          gap: 48,
          alignItems: "center",
        }} className="integrations-row">
          <Eyebrow dim>Works with</Eyebrow>
          <div className="integrations-list" style={{
            display: "flex", flexWrap: "wrap", gap: 0,
            justifyContent: "space-between", alignItems: "center",
          }}>
            {tools.map((t, i) => (
              <span key={t} className="display" style={{
                fontSize: 20, color: "var(--graphite)", fontWeight: 600,
                letterSpacing: "-0.01em",
                opacity: 0.85,
              }}>
                {t}{i < tools.length - 1 && <span className="mono" style={{ marginLeft: 16, color: "var(--rule-strong)" }}>/</span>}
                {i < tools.length - 1 && <span style={{ marginLeft: 16 }} />}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    {
      q: "How is this different from other lead gen agencies?",
      a: "Most agencies operate on a 1-to-many model — same playbook, different logos. We take three to five clients per quarter, build the sequences ourselves, and have a human handling replies during your business hours. That's why we charge what we do and why we cap clients at twelve.",
    },
    {
      q: "How long until I see meetings on my calendar?",
      a: "Two weeks of onboarding, one week of build, then sequences go live. The first qualified meeting usually lands in 30–45 days. If your ICP is tight or your cycle is long, expect closer to 45.",
    },
    {
      q: "What if the leads aren't qualified?",
      a: "Every meeting is gated by a five-question qualifier you write with us during onboarding. If a meeting goes through that gate and is still bad fit, it doesn't count toward the month. We replace it.",
    },
    {
      q: "Do I need to provide my own lead lists?",
      a: "No. We build them, layered from Apollo, ZoomInfo, Clay, and any signal sources that fit your ICP. You get every list to review before sequences send.",
    },
    {
      q: "What industries do you work with?",
      a: "Manufacturing, distribution, MSPs, logistics and 3PL, recruiting firms, and B2B services. We're not the right fit for SMB SaaS, ecom, or anything with a sub-$10K ACV.",
    },
    {
      q: "How much of my time does this take?",
      a: "About four hours in onboarding, then a thirty-minute weekly review. We don't ask you to write copy, build lists, or sit in on prospect emails. That's the whole point.",
    },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" style={{ background: "#EFEBE2", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
      <div className="shell">
        <Reveal><Eyebrow>§ 07 / Common questions</Eyebrow></Reveal>
        <Reveal delay={80}>
          <h2 className="display" style={{ fontSize: "clamp(32px, 4vw, 56px)", margin: "20px 0 0", maxWidth: 800 }}>
            Things buyers ask before signing.
          </h2>
        </Reveal>

        <div style={{ height: 64 }} />

        <div style={{ borderTop: "1px solid var(--rule-strong)" }}>
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={it.q} style={{ borderBottom: "1px solid var(--rule-strong)" }}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    padding: "28px 0",
                    display: "grid",
                    gridTemplateColumns: "auto 1fr auto",
                    gap: 32,
                    alignItems: "baseline",
                    textAlign: "left",
                    color: "var(--ink)",
                  }}
                >
                  <span className="mono" style={{ fontSize: 12, color: "var(--graphite-dim)", letterSpacing: "0.14em" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="display" style={{ fontSize: "clamp(20px, 2vw, 26px)", fontWeight: 600 }}>
                    {it.q}
                  </span>
                  <span className="mono" style={{
                    fontSize: 18, color: "var(--accent)",
                    transition: "transform 240ms ease",
                    transform: isOpen ? "rotate(45deg)" : "rotate(0)",
                    display: "inline-block",
                  }}>+</span>
                </button>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr auto",
                  gap: 32,
                  maxHeight: isOpen ? 400 : 0,
                  overflow: "hidden",
                  transition: "max-height 360ms cubic-bezier(0.2, 0.6, 0.2, 1), padding 240ms ease",
                  paddingBottom: isOpen ? 32 : 0,
                }}>
                  <span />
                  <p style={{ margin: 0, fontSize: 17, lineHeight: 1.65, color: "var(--graphite)", maxWidth: 720 }}>
                    {it.a}
                  </p>
                  <span />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="cta" style={{ paddingTop: 160, paddingBottom: 160 }}>
      <div className="shell shell--narrow" style={{ textAlign: "center" }}>
        <Reveal><Eyebrow>§ 08 / Next step</Eyebrow></Reveal>
        <Reveal delay={80}>
          <h2 className="display" style={{ fontSize: "clamp(40px, 6vw, 80px)", margin: "32px 0", lineHeight: 1.05 }}>
            Thirty minutes. <span className="serif-italic" style={{ color: "var(--accent)", fontWeight: 400 }}>One honest answer.</span>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--graphite)", maxWidth: 520, margin: "0 auto 44px" }}>
            We'll look at your ICP, your last twelve closed deals, and tell you whether outbound is the right move right now. If it's not, we'll say so.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <a href="#" className="btn btn--primary" style={{ padding: "18px 28px", fontSize: 16 }}>
            Book a Strategy Call <ArrowIcon size={16} />
          </a>
        </Reveal>
        <Reveal delay={260}>
          <div className="mono" style={{ marginTop: 28, fontSize: 11, color: "var(--graphite-dim)", letterSpacing: "0.16em", textTransform: "uppercase" }}>
            Currently accepting 3 new clients for Q3
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: "var(--ink)", color: "var(--bone)" }}>
      <div className="shell" style={{ padding: "80px 32px 32px" }}>
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 64 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span aria-hidden="true" style={{
                display: "inline-block", width: 10, height: 10,
                background: "var(--accent)", transform: "rotate(45deg)"
              }} />
              <span className="display" style={{ fontSize: 22, color: "var(--bone)" }}>Spartan Flow</span>
            </div>
            <p className="serif-italic" style={{ marginTop: 24, fontSize: 20, color: "rgba(245,242,236,0.85)", maxWidth: 380, lineHeight: 1.4 }}>
              Outbound, run by people who've been in your industry.
            </p>
          </div>
          <div>
            <Eyebrow dim>Sitemap</Eyebrow>
            <ul style={{ listStyle: "none", padding: 0, margin: "20px 0 0", display: "flex", flexDirection: "column", gap: 12 }}>
              {["How It Works", "Results", "About", "Blog", "Book a Call"].map((t) => (
                <li key={t}><a href="#" style={{ color: "rgba(245,242,236,0.8)", fontSize: 15 }}>{t}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow dim>Contact</Eyebrow>
            <ul style={{ listStyle: "none", padding: 0, margin: "20px 0 0", display: "flex", flexDirection: "column", gap: 12 }}>
              <li><a href="mailto:hello@spartanflow.com" style={{ color: "rgba(245,242,236,0.8)", fontSize: 15 }}>hello@spartanflow.com</a></li>
              <li><a href="#" style={{ color: "rgba(245,242,236,0.8)", fontSize: 15 }}>LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div style={{ height: 64 }} />
        <div style={{
          borderTop: "1px solid rgba(245,242,236,0.15)",
          paddingTop: 24,
          display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16,
        }}>
          <span className="mono" style={{ fontSize: 11, color: "rgba(245,242,236,0.55)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
            © 2026 Spartan Flow LLC · Built in Austin & Pittsburgh
          </span>
          <span className="mono" style={{ fontSize: 11, color: "rgba(245,242,236,0.55)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
            v1.4 · Updated Apr 2026
          </span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Integrations, FAQ, FinalCTA, Footer });
