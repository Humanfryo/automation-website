import { Fragment } from "react";
import Eyebrow from "./Eyebrow";

const tools = [
  "HubSpot",
  "Salesforce",
  "Google Calendar",
  "Outlook",
  "Slack",
  "Zapier",
];

export default function Integrations() {
  return (
    <section id="integrations" style={{ paddingTop: 64, paddingBottom: 64 }}>
      <div className="shell">
        <div
          className="integrations-row"
          style={{
            borderTop: "1px solid var(--rule-strong)",
            borderBottom: "1px solid var(--rule-strong)",
            padding: "32px 0",
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: 48,
            alignItems: "center",
          }}
        >
          <Eyebrow dim>Works with</Eyebrow>
          <div
            className="integrations-list"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              rowGap: 16,
            }}
          >
            {tools.map((t, i) => (
              <Fragment key={t}>
                <span
                  className="display"
                  style={{
                    fontSize: 20,
                    color: "var(--graphite)",
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                    opacity: 0.85,
                  }}
                >
                  {t}
                </span>
                {i < tools.length - 1 && (
                  <span
                    className="mono"
                    style={{ color: "var(--rule-strong)", margin: "0 16px" }}
                    aria-hidden="true"
                  >
                    /
                  </span>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
