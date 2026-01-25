import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

interface BookCallButtonProps {
    className?: string; // Allow custom styling passed from parent
    children?: React.ReactNode; // Allow custom text/icons
}

export default function BookCallButton({ className, children }: BookCallButtonProps) {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "15min" });
            cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, []);

    return (
        <button
            data-cal-namespace="15min"
            data-cal-link="hari-rajashekar-ssactw/15min"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            className={className}
        >
            {children || "Book a Call"}
        </button>
    );
};
