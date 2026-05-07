import Eyebrow from "./Eyebrow";
import PlaceholderImage from "./PlaceholderImage";
import Reveal from "./Reveal";

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

export default function Founders() {
  return (
    <section id="about">
      <div className="shell">
        <Reveal>
          <Eyebrow>§ 06 / Who we are</Eyebrow>
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
            Two operators who got tired of watching outbound get botched.
          </h2>
        </Reveal>

        <div style={{ height: 80 }} />

        <div
          className="founder-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}
        >
          {team.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <div
                style={{
                  borderTop: "1px solid var(--rule-strong)",
                  paddingTop: 32,
                }}
              >
                <div style={{ marginBottom: 28 }}>
                  <PlaceholderImage label={`Portrait · ${p.name}`} ratio="4 / 5" />
                </div>
                <h3 className="display" style={{ fontSize: 32, margin: 0 }}>
                  {p.name}
                </h3>
                <div
                  className="mono"
                  style={{
                    fontSize: 12,
                    marginTop: 6,
                    color: "var(--graphite-dim)",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                  }}
                >
                  {p.role}
                </div>
                <p
                  style={{
                    marginTop: 24,
                    fontSize: 17,
                    lineHeight: 1.65,
                    color: "var(--graphite)",
                  }}
                >
                  {p.bio}
                </p>
                <div
                  className="mono"
                  style={{
                    marginTop: 20,
                    fontSize: 12,
                    color: "var(--graphite-dim)",
                    letterSpacing: "0.1em",
                  }}
                >
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
