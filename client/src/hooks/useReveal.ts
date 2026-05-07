import { useEffect, useRef } from "react";

/**
 * Adds `is-in` class on first intersection so the element transitions in.
 * 250ms fallback timer guarantees the element shows even if IntersectionObserver
 * is flaky (iframes, some preview contexts).
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      el.classList.add("is-in");
    };
    const fallback = window.setTimeout(reveal, 250);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            reveal();
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => {
      window.clearTimeout(fallback);
      io.disconnect();
    };
  }, []);
  return ref;
}
