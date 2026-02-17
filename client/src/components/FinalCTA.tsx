import BookCallButton from "./BookCallButton";

// Assuming we want to trigger the Lead Magnet modal from the secondary link, 
// we might need to accept a prop or use a global state if not passed down.
// For now, I'll assume we can pass an optional onOpenLeadMagnet prop or similar, 
// but since this component is reused, I should update the props interface if needed.
// However, looking at Home.tsx, FinalCTA typically sits at the bottom.
// I'll add the onOpenLeadMagnet prop to the component to make it functional.

interface FinalCTAProps {
    onOpenLeadMagnet?: () => void;
}

export default function FinalCTA({ onOpenLeadMagnet }: FinalCTAProps) {
    return (
        <section className="bg-[#111111] py-20 md:py-32 relative overflow-hidden border-t border-[#F59E0B]">
            {/* Subtle background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#F59E0B]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 max-w-[700px] relative z-10 text-center">

                {/* Heading */}
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                    Ready to Stop Guessing and Start Booking?
                </h2>

                {/* Sub-heading */}
                <p className="text-[#D1D5DB] text-lg md:text-xl leading-relaxed mb-10">
                    Join B2B companies that fill their calendars on autopilot — without hiring another salesperson.
                </p>

                {/* Primary CTA */}
                <div className="mb-6">
                    <BookCallButton className="bg-[#F59E0B] text-black font-bold text-lg px-12 py-5 rounded-lg hover:bg-[#D97706] hover:scale-[1.02] transition-all shadow-[0_4px_20px_rgba(245,158,11,0.2)]">
                        Book Your Free Pipeline Strategy Call
                    </BookCallButton>
                </div>

                {/* Reassurance */}
                <p className="text-[#9CA3AF] text-sm mb-8">
                    No commitment. No pressure. Just a 30-minute conversation about your pipeline.
                </p>

                {/* Trust Metrics */}
                <div className="flex flex-wrap justify-center gap-2 mb-8 text-[13px] text-[#6B7280]">
                    <span>Typical results: 8-12 qualified meetings/month</span>
                    <span className="opacity-50">•</span>
                    <span>60-day guarantee</span>
                    <span className="opacity-50">•</span>
                    <span>Setup in days, not months</span>
                </div>

                {/* Secondary CTA */}
                {onOpenLeadMagnet && (
                    <button
                        onClick={onOpenLeadMagnet}
                        className="text-[#D1D5DB] text-sm underline hover:text-[#F59E0B] transition-colors"
                    >
                        Or Download: The $312/Meeting Framework (PDF)
                    </button>
                )}

            </div>
        </section>
    );
}
