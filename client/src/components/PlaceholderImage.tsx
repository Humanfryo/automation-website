type PlaceholderImageProps = {
  label: string;
  ratio?: string;
  tone?: "warm" | "dark";
};

export default function PlaceholderImage({
  label,
  ratio = "4 / 3",
  tone = "warm",
}: PlaceholderImageProps) {
  const stripes =
    tone === "dark"
      ? "repeating-linear-gradient(135deg, #1a2030 0 8px, #131826 8px 16px)"
      : "repeating-linear-gradient(135deg, #e7e2d6 0 8px, #ddd6c5 8px 16px)";
  const fg = tone === "dark" ? "#9aa1ad" : "#6B6F77";
  return (
    <div
      style={{
        aspectRatio: ratio,
        background: stripes,
        position: "relative",
        border: "1px solid var(--rule)",
      }}
      role="img"
      aria-label={label}
    >
      <div
        className="mono"
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 11,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: fg,
          padding: "0 16px",
          textAlign: "center",
        }}
      >
        {label}
      </div>
    </div>
  );
}
