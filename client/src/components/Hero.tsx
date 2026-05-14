import ArrowIcon from "./ArrowIcon";
import BookCallButton from "./BookCallButton";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import TickNumber from "./TickNumber";

export default function Hero() {
  return (
    <section id="top" style={{ paddingTop: 56, paddingBottom: 96 }}>
      <div className="shell">
        <Reveal>
          <Eyebrow>B2B Appointment Setting / Built for Industrial Operators</Eyebrow>
        </Reveal>

        <div style={{ height: 56 }} />

        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr",
            gap: 64,
            alignItems: "end",
          }}
        >
          <div>
            <Reveal
              as="h1"
              className="display"
              delay={80}
              style={{ fontSize: "clamp(44px, 6.4vw, 92px)", margin: 0 }}
            >
              We book the meetings
              <br />
              your sales team
              <br />
              <span
                className="serif-italic"
                style={{ color: "var(--accent)", fontWeight: 400 }}
              >
                actually closes.
              </span>
            </Reveal>

            <Reveal delay={160}>
              <p
                style={{
                  marginTop: 36,
                  maxWidth: 540,
                  fontSize: 18,
                  lineHeight: 1.55,
                  color: "var(--graphite)",
                }}
              >
                For manufacturing, distribution, MSPs, and B2B services teams that don't have time to chase cold leads.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div
                style={{
                  display: "flex",
                  gap: 24,
                  marginTop: 40,
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                <BookCallButton>
                  Book a Strategy Call <ArrowIcon />
                </BookCallButton>
                <a href="#how" className="btn btn--text" style={{ fontSize: 15 }}>
                  See how it works <ArrowIcon />
                </a>
              </div>
            </Reveal>
          </div>

          {/* TODO Hari: confirm number against actual client averages */}
          <Reveal delay={320}>
            <div style={{ borderTop: "1px solid var(--rule-strong)", paddingTop: 24 }}>
              <Eyebrow dim>Per client, monthly</Eyebrow>
              <div
                className="bignum"
                style={{ fontSize: "clamp(96px, 14vw, 184px)", marginTop: 12 }}
              >
                8–12
              </div>
              <p
                style={{
                  marginTop: 16,
                  fontSize: 14,
                  color: "var(--graphite)",
                  maxWidth: 280,
                  lineHeight: 1.5,
                }}
              >
                Qualified meetings booked per month, per client. The kind your AEs don't ghost.
              </p>
            </div>
          </Reveal>
        </div>

        <div style={{ height: 96 }} />

        <Reveal delay={400}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 24,
              color: "var(--graphite-dim)",
              flexWrap: "wrap",
            }}
          >
            <Eyebrow dim>Currently working with</Eyebrow>
            <div style={{ flex: 1, height: 1, background: "var(--rule)", minWidth: 60 }} />
            <span
              className="mono"
              style={{ fontSize: 12, color: "var(--graphite-dim)" }}
            >
              <TickNumber value={28} />
              &nbsp;industrial operators across NA
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
