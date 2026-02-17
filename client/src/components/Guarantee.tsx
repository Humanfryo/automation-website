import { ShieldCheck, Calendar, DollarSign, Handshake } from "lucide-react";
import BookCallButton from "./BookCallButton";
import { useState } from "react";

export default function Guarantee() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className="bg-[#111111] py-12 md:py-20 relative overflow-hidden">
            {/* Subtle Gold Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#F59E0B]/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 max-w-[800px] relative z-10 text-center">

                {/* Icon & Badge */}
                <div className="flex justify-center mb-4">
                    <ShieldCheck className="text-[#F59E0B]" size={48} strokeWidth={1.5} />
                </div>
                <div className="inline-block mb-3">
                    <span className="text-[11px] font-bold text-[#F59E0B] uppercase tracking-[2px]">
                        RISK-FREE GUARANTEE
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Our 60-Day Pipeline Guarantee
                </h2>

                {/* Guarantee Statement */}
                <p className="text-lg md:text-xl text-[#D1D5DB] leading-relaxed max-w-2xl mx-auto mb-8">
                    If you don't see qualified meetings on your calendar within 60 days, we'll extend your service at no cost until you do. No fine print. No excuses.
                </p>

                {/* Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
                    <div className="flex flex-col items-center">
                        <Calendar className="text-[#F59E0B] mb-2" size={24} />
                        <div className="text-white text-sm font-semibold">60 days to see results</div>
                        <div className="text-[13px] text-[#9CA3AF]">Performance Period</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <DollarSign className="text-[#F59E0B] mb-2" size={24} />
                        <div className="text-white text-sm font-semibold">Free extension</div>
                        <div className="text-[13px] text-[#9CA3AF]">If we miss the mark</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <Handshake className="text-[#F59E0B] mb-2" size={24} />
                        <div className="text-white text-sm font-semibold">No long-term contracts</div>
                        <div className="text-[13px] text-[#9CA3AF]">Cancel anytime</div>
                    </div>
                </div>

                {/* FAQ Accordion */}
                <div className="mb-8">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-[#F59E0B] text-sm underline hover:text-[#D97706] transition-colors focus:outline-none"
                    >
                        What counts as a 'qualified meeting'?
                    </button>

                    {isExpanded && (
                        <div className="mt-4 bg-[#1A1A1A] p-4 rounded-lg border border-[#2A2A2A] text-left animate-fade-in-up">
                            <p className="text-[13px] text-[#D1D5DB] leading-relaxed">
                                A qualified meeting means the attendee is a decision-maker or direct influencer with purchasing authority, at a company matching your ICP, who has expressed genuine interest in a conversation. Junior researchers, interns, and no-shows don't count.
                            </p>
                        </div>
                    )}
                </div>

                {/* CTA */}
                <div>
                    <BookCallButton className="bg-[#F59E0B] text-black font-bold text-lg px-10 py-4 rounded-lg hover:bg-[#D97706] transition-colors shadow-[0_4px_20px_rgba(245,158,11,0.2)]">
                        Start Risk-Free — Book Your Strategy Call
                    </BookCallButton>
                </div>

            </div>
        </section>
    );
}
