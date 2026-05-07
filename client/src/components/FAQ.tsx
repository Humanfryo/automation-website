import { useState } from "react";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

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

export default function FAQ() {
  const [open, setOpen] = useState<number>(0);
  return (
    <section
      id="faq"
      style={{
        background: "#EFEBE2",
        borderTop: "1px solid var(--rule)",
        borderBottom: "1px solid var(--rule)",
      }}
    >
      <div className="shell">
        <Reveal>
          <Eyebrow>§ 07 / Common questions</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2
            className="display"
            style={{
              fontSize: "clamp(32px, 4vw, 56px)",
              margin: "20px 0 0",
              maxWidth: 800,
            }}
          >
            Things buyers ask before signing.
          </h2>
        </Reveal>

        <div style={{ height: 64 }} />

        <div style={{ borderTop: "1px solid var(--rule-strong)" }}>
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div
                key={it.q}
                style={{ borderBottom: "1px solid var(--rule-strong)" }}
              >
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
                  <span
                    className="mono"
                    style={{
                      fontSize: 12,
                      color: "var(--graphite-dim)",
                      letterSpacing: "0.14em",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="display"
                    style={{
                      fontSize: "clamp(20px, 2vw, 26px)",
                      fontWeight: 600,
                    }}
                  >
                    {it.q}
                  </span>
                  <span
                    className="mono"
                    style={{
                      fontSize: 18,
                      color: "var(--accent)",
                      transition: "transform 240ms ease",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0)",
                      display: "inline-block",
                    }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr auto",
                    gap: 32,
                    maxHeight: isOpen ? 400 : 0,
                    overflow: "hidden",
                    transition:
                      "max-height 360ms cubic-bezier(0.2, 0.6, 0.2, 1), padding 240ms ease",
                    paddingBottom: isOpen ? 32 : 0,
                  }}
                >
                  <span />
                  <p
                    style={{
                      margin: 0,
                      fontSize: 17,
                      lineHeight: 1.65,
                      color: "var(--graphite)",
                      maxWidth: 720,
                    }}
                  >
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
