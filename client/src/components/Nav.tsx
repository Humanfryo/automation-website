import { useEffect, useState } from "react";

const links: Array<[string, string]> = [
  ["How It Works", "#how"],
  ["Results", "#results"],
  ["About", "#about"],
  ["Blog", "#blog"],
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 80,
        background: "var(--bone)",
        borderBottom: scrolled ? "1px solid var(--rule)" : "1px solid transparent",
        transition: "border-color 240ms ease",
      }}
    >
      <div
        className="shell"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 72,
        }}
      >
        <a href="#top" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span
            aria-hidden="true"
            style={{
              display: "inline-block",
              width: 10,
              height: 10,
              background: "var(--accent)",
              transform: "rotate(45deg)",
            }}
          />
          <span className="display" style={{ fontSize: 19, letterSpacing: "-0.01em" }}>
            Spartan Flow
          </span>
        </a>

        <nav
          className="nav-desktop"
          style={{ display: "flex", alignItems: "center", gap: 36 }}
        >
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              style={{ fontSize: 14, color: "var(--graphite)", fontWeight: 500 }}
            >
              {label}
            </a>
          ))}
          <a
            href="#cta"
            className="btn btn--primary"
            style={{ padding: "10px 18px", fontSize: 14 }}
          >
            Book a Call
          </a>
        </nav>

        <button
          className="nav-burger"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          style={{
            display: "none",
            background: "transparent",
            border: "1px solid var(--rule-strong)",
            padding: "10px 14px",
            cursor: "pointer",
          }}
        >
          <span className="mono" style={{ fontSize: 11, letterSpacing: "0.16em" }}>
            MENU
          </span>
        </button>
      </div>

      {/* Off-canvas mobile drawer */}
      <div
        aria-hidden={!open}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 100,
          background: "var(--bone)",
          transform: open ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 320ms cubic-bezier(0.2, 0.6, 0.2, 1)",
          padding: 32,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span className="display" style={{ fontSize: 19 }}>
            Spartan Flow
          </span>
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            style={{
              background: "transparent",
              border: "1px solid var(--rule-strong)",
              padding: "10px 14px",
              cursor: "pointer",
            }}
          >
            <span className="mono" style={{ fontSize: 11, letterSpacing: "0.16em" }}>
              CLOSE
            </span>
          </button>
        </div>
        <hr className="hairline" style={{ margin: "24px 0" }} />
        <nav style={{ display: "flex", flexDirection: "column" }}>
          {[...links, ["Book a Call", "#cta"] as [string, string]].map(
            ([label, href], i) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                style={{
                  padding: "20px 0",
                  borderBottom: "1px solid var(--rule)",
                  fontSize: 22,
                  fontWeight: 500,
                  color: "var(--ink)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>{label}</span>
                <span
                  className="mono"
                  style={{ fontSize: 11, color: "var(--graphite-dim)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </a>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
