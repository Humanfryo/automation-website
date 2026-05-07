// Reusable bits
const { useEffect, useRef, useState } = React;

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      el.classList.add("is-in");
    };
    // Fallback: if the observer hasn't fired in 250ms (e.g. in iframes
    // where IntersectionObserver is flaky), reveal anyway.
    const fallback = setTimeout(reveal, 250);
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          reveal();
          io.unobserve(el);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    io.observe(el);
    return () => {
      clearTimeout(fallback);
      io.disconnect();
    };
  }, []);
  return ref;
}

function Reveal({ children, as: Tag = "div", className = "", style, delay = 0 }) {
  const ref = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}

function TickNumber({ value, suffix = "", prefix = "", duration = 1400, decimals = 0 }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let triggered = false;
    const start = () => {
      if (triggered) return;
      triggered = true;
      const t0 = performance.now();
      const from = 0;
      const to = value;
      const tick = (t) => {
        const p = Math.min(1, (t - t0) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setDisplay(from + (to - from) * eased);
        if (p < 1) requestAnimationFrame(tick);
        else setDisplay(to);
      };
      requestAnimationFrame(tick);
    };
    const fallback = setTimeout(start, 250);
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          start();
          io.unobserve(el);
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => {
      clearTimeout(fallback);
      io.disconnect();
    };
  }, [value, duration]);
  const formatted = decimals > 0 ? display.toFixed(decimals) : Math.round(display).toLocaleString();
  return <span ref={ref}>{prefix}{formatted}{suffix}</span>;
}

function Eyebrow({ children, dim = false, className = "" }) {
  return <div className={`eyebrow ${dim ? "eyebrow--dim" : ""} ${className}`}>{children}</div>;
}

function ArrowIcon({ size = 14 }) {
  return (
    <svg className="arrow" width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square"/>
    </svg>
  );
}

function PlaceholderImage({ label, ratio = "4 / 3", tone = "warm" }) {
  // subtly-striped placeholder
  const stripes = tone === "dark"
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
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase",
          color: fg,
        }}
      >
        {label}
      </div>
    </div>
  );
}

Object.assign(window, { Reveal, TickNumber, Eyebrow, ArrowIcon, PlaceholderImage, useReveal });
