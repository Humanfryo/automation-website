import { CSSProperties, ElementType, ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  delay?: number;
};

export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  style,
  delay = 0,
}: RevealProps) {
  const ref = useReveal<HTMLElement>();
  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}
