import ArrowIcon from "./ArrowIcon";
import BookCallButton from "./BookCallButton";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section id="cta" style={{ paddingTop: 160, paddingBottom: 160 }}>
      <div className="shell shell--narrow" style={{ textAlign: "center" }}>
        <Reveal>
          <Eyebrow>§ 08 / Next step</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2
            className="display"
            style={{
              fontSize: "clamp(40px, 6vw, 80px)",
              margin: "32px 0",
              lineHeight: 1.05,
            }}
          >
            Thirty minutes.{" "}
            <span
              className="serif-italic"
              style={{ color: "var(--accent)", fontWeight: 400 }}
            >
              One honest answer.
            </span>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              color: "var(--graphite)",
              maxWidth: 520,
              margin: "0 auto 44px",
            }}
          >
            We'll look at your ICP, your last twelve closed deals, and tell you whether outbound is the right move right now. If it's not, we'll say so.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <BookCallButton style={{ padding: "18px 28px", fontSize: 16 }}>
            Book a Strategy Call <ArrowIcon size={16} />
          </BookCallButton>
        </Reveal>
        <Reveal delay={260}>
          <div
            className="mono"
            style={{
              marginTop: 28,
              fontSize: 11,
              color: "var(--graphite-dim)",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            Currently accepting 3 new clients for Q3
          </div>
        </Reveal>
      </div>
    </section>
  );
}
