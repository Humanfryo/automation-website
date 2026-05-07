import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

const team = [
  {
    name: "Chris Barkhurst",
    role: "Head of Operations",
    based: "Based in Kansas City, KS",
    photo: "/founders/chris-barkhurst.webp",
    bio: "I spent years inside industrial sales orgs — first as an AE selling automation hardware to plant managers, then running a five-person SDR team at a logistics platform. I watched outbound get botched the same way for a decade: bad SDR hires, agencies that booked junk, in-house teams that fizzled out three months in. I came on to run the client side and sales ops. Hari builds the system. I run the rooms.",
  },
  {
    name: "Hari Rajashekar",
    role: "Founder",
    based: "Based in Austin, TX",
    photo: "/founders/hari-rajashekar.webp",
    bio: "I spent two years at Accenture as an automation solutions engineer — enterprise automation work, Veeva Vault rollouts for Roche, medical device monitoring builds. Left to build outbound systems for B2B services and manufacturing. I build the Spartan Flow platform end to end — the data layer, the sequences, the reply routing, the dashboards you see on Mondays. If something breaks, it breaks in front of me first.",
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
                  <img
                    src={p.photo}
                    alt={`${p.name}, ${p.role}`}
                    loading="lazy"
                    decoding="async"
                    style={{
                      display: "block",
                      width: "100%",
                      aspectRatio: "4 / 5",
                      objectFit: "cover",
                      border: "1px solid var(--rule)",
                    }}
                  />
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
