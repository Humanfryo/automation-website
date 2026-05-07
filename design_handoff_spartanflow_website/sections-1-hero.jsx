// Nav + Hero
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["How It Works", "#how"],
    ["Results", "#results"],
    ["About", "#about"],
    ["Blog", "#blog"],
  ];

  return (
    <header
      style={{
        position: "sticky", top: 0, zIndex: 80,
        background: "var(--bone)",
        borderBottom: scrolled ? "1px solid var(--rule)" : "1px solid transparent",
        transition: "border-color 240ms ease",
      }}
    >
      <div className="shell" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        <a href="#top" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span aria-hidden="true" style={{
            display: "inline-block", width: 10, height: 10,
            background: "var(--accent)", transform: "rotate(45deg)"
          }} />
          <span className="display" style={{ fontSize: 19, letterSpacing: "-0.01em" }}>Spartan Flow</span>
        </a>

        <nav className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 36 }}>
          {links.map(([label, href]) => (
            <a key={href} href={href} style={{ fontSize: 14, color: "var(--graphite)", fontWeight: 500 }}>{label}</a>
          ))}
          <a href="#cta" className="btn btn--primary" style={{ padding: "10px 18px", fontSize: 14 }}>
            Book a Call
          </a>
        </nav>

        <button
          className="nav-burger"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          style={{
            display: "none", background: "transparent", border: "1px solid var(--rule-strong)",
            padding: "10px 14px", cursor: "pointer",
          }}
        >
          <span className="mono" style={{ fontSize: 11, letterSpacing: "0.16em" }}>MENU</span>
        </button>
      </div>

      {/* Off-canvas mobile */}
      <div
        aria-hidden={!open}
        style={{
          position: "fixed", inset: 0, zIndex: 100,
          background: "var(--bone)",
          transform: open ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 320ms cubic-bezier(0.2, 0.6, 0.2, 1)",
          padding: "32px",
          display: "flex", flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span className="display" style={{ fontSize: 19 }}>Spartan Flow</span>
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            style={{ background: "transparent", border: "1px solid var(--rule-strong)", padding: "10px 14px", cursor: "pointer" }}
          >
            <span className="mono" style={{ fontSize: 11, letterSpacing: "0.16em" }}>CLOSE</span>
          </button>
        </div>
        <hr className="hairline" style={{ margin: "24px 0" }} />
        <nav style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {[...links, ["Book a Call", "#cta"]].map(([label, href], i) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              style={{
                padding: "20px 0",
                borderBottom: "1px solid var(--rule)",
                fontSize: 22, fontWeight: 500, color: "var(--ink)",
                display: "flex", justifyContent: "space-between", alignItems: "center",
              }}
            >
              <span>{label}</span>
              <span className="mono" style={{ fontSize: 11, color: "var(--graphite-dim)" }}>{String(i + 1).padStart(2, "0")}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" style={{ paddingTop: 56, paddingBottom: 96 }}>
      <div className="shell">
        <Reveal>
          <Eyebrow>B2B Appointment Setting / Built for Industrial Operators</Eyebrow>
        </Reveal>

        <div style={{ height: 56 }} />

        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64, alignItems: "end" }}>
          <div>
            <Reveal as="h1" className="display" delay={80} style={{ fontSize: "clamp(44px, 6.4vw, 92px)", margin: 0 }}>
              We book the meetings<br/>
              your sales team<br/>
              <span className="serif-italic" style={{ color: "var(--accent)", fontWeight: 400 }}>actually closes.</span>
            </Reveal>

            <Reveal delay={160}>
              <p style={{ marginTop: 36, maxWidth: 540, fontSize: 18, lineHeight: 1.55, color: "var(--graphite)" }}>
                For manufacturing, distribution, MSPs, and B2B services teams that don't have time to chase cold leads.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div style={{ display: "flex", gap: 24, marginTop: 40, flexWrap: "wrap", alignItems: "center" }}>
                <a href="#cta" className="btn btn--primary">
                  Book a Strategy Call <ArrowIcon />
                </a>
                <a href="#how" className="btn btn--text" style={{ fontSize: 15 }}>
                  See how it works <ArrowIcon />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={320}>
            <div style={{ borderTop: "1px solid var(--rule-strong)", paddingTop: 24 }}>
              <Eyebrow dim>Per client, monthly</Eyebrow>
              <div className="bignum" style={{ fontSize: "clamp(96px, 14vw, 184px)", marginTop: 12 }}>
                8–12
              </div>
              <p style={{ marginTop: 16, fontSize: 14, color: "var(--graphite)", maxWidth: 280, lineHeight: 1.5 }}>
                Qualified meetings booked per month, per client. The kind your AEs don't ghost.
              </p>
            </div>
          </Reveal>
        </div>

        <div style={{ height: 96 }} />

        <Reveal delay={400}>
          <div style={{
            display: "flex", alignItems: "center", gap: 24,
            color: "var(--graphite-dim)",
          }}>
            <Eyebrow dim>Currently working with</Eyebrow>
            <div style={{ flex: 1, height: 1, background: "var(--rule)" }} />
            <span className="mono" style={{ fontSize: 12, color: "var(--graphite-dim)" }}>
              <TickNumber value={28} />&nbsp;industrial operators across NA
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { Nav, Hero });
