import ArrowIcon from "./ArrowIcon";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

export default function Guarantee() {
  return (
    <section id="guarantee">
      {/* TODO Hari: confirm exact guarantee terms before publishing */}
      <div className="shell shell--narrow" style={{ textAlign: "center" }}>
        <Reveal>
          <Eyebrow>60-Day Guarantee</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2
            className="display"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              margin: "24px 0 32px",
              lineHeight: 1.15,
            }}
          >
            If we don't book a qualified meeting in{" "}
            <span
              className="serif-italic"
              style={{ color: "var(--accent)", fontWeight: 400 }}
            >
              sixty days
            </span>
            , you don't pay for the next sixty.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.65,
              color: "var(--graphite)",
              margin: 0,
            }}
          >
            We extend your engagement at no cost until we do. We've activated this twice in three years. Both times we figured out the ICP needed re-cutting and the pipeline started two weeks later.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div style={{ marginTop: 40 }}>
            <a href="#cta" className="btn btn--primary">
              Start with the Guarantee <ArrowIcon />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
