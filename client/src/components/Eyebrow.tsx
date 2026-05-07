import { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  dim?: boolean;
  className?: string;
};

export default function Eyebrow({ children, dim = false, className = "" }: EyebrowProps) {
  return (
    <div className={`eyebrow ${dim ? "eyebrow--dim" : ""} ${className}`.trim()}>
      {children}
    </div>
  );
}
