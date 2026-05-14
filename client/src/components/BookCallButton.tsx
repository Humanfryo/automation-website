import { CSSProperties, MouseEvent, ReactNode } from "react";

type BookCallButtonProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

/**
 * Trigger button for the Cal.com booking modal.
 *
 * Cal's embed loader is initialised once in App.tsx and listens for clicks on
 * any element carrying `data-cal-link`. The modal is rendered into a portal,
 * so this component just provides a styled trigger — no modal logic lives here.
 */
export default function BookCallButton({
  children,
  className = "btn btn--primary",
  style,
  onClick,
}: BookCallButtonProps) {
  return (
    <button
      type="button"
      className={className}
      style={style}
      onClick={onClick}
      data-cal-namespace="spartan-flow-discovery"
      data-cal-link="humanfryo/spartan-flow-discovery"
      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
    >
      {children}
    </button>
  );
}
