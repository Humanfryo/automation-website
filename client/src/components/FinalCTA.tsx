import BookCallButton from "./BookCallButton";
import { Check } from "lucide-react";

export default function FinalCTA() {
    return (
        <section className="bg-secondary py-20 px-4 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />

            <div className="container mx-auto max-w-4xl text-center relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                    Ready to Fill Your Pipeline with <span className="text-primary">Qualified Buyers?</span>
                </h2>

                <p className="text-xl md:text-2xl text-secondary-foreground leading-relaxed mb-12 max-w-3xl mx-auto">
                    Book a 14-minute strategy call. We'll discuss your target market, ideal deal size,
                    and figure out exactly how we'd generate 8-12 meetings per month for your team.
                </p>

                <div className="flex flex-col items-center gap-6">
                    <BookCallButton className="bg-primary text-black hover:bg-white font-bold text-2xl px-16 py-6 rounded-lg shadow-[0_0_40px_rgba(255,184,0,0.4)] hover:shadow-[0_0_60px_rgba(255,184,0,0.6)] transition-all transform hover:-translate-y-1">
                        Book Your Strategy Call
                    </BookCallButton>

                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8 text-white/90 font-medium">
                        <span className="flex items-center gap-2"><Check size={18} className="text-primary" /> 14-minute commitment</span>
                        <span className="flex items-center gap-2"><Check size={18} className="text-primary" /> We'll tell you honestly if we're not a fit</span>
                    </div>

                    <a href="#" className="mt-8 text-primary hover:text-white underline decoration-primary/50 underline-offset-4 transition-colors">
                        Or download our free framework: How to Book Industrial Meetings at $312 Each
                    </a>

                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs text-secondary-foreground/50 mt-8 uppercase tracking-wider">
                        <span>No credit card required</span>
                        <span className="hidden md:inline">|</span>
                        <span>No long-term contracts</span>
                        <span className="hidden md:inline">|</span>
                        <span>100% transparent pricing</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
