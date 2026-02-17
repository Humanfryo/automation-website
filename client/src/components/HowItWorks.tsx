import { Phone, Settings, CalendarCheck, TrendingUp } from "lucide-react";
import BookCallButton from "./BookCallButton";

export default function HowItWorks() {
    const steps = [
        {
            number: "01",
            icon: Phone,
            title: "We Learn Your Business",
            description: "A 30-minute strategy call where we map your ideal customer profile, understand your value proposition, and define exactly what a qualified meeting looks like for you.",
            timeline: "Day 1"
        },
        {
            number: "02",
            icon: Settings,
            title: "We Build Your Pipeline Engine",
            description: "Custom AI-powered outreach campaigns built for your specific market. Lead sourcing, messaging, and targeting — all configured and tested before we go live.",
            timeline: "Week 1-2"
        },
        {
            number: "03",
            icon: CalendarCheck,
            title: "Qualified Meetings Hit Your Calendar",
            description: "Decision-makers who match your ICP start appearing on your calendar. Every meeting comes with full context — who they are, why they're interested, and what they care about.",
            timeline: "Week 3-8"
        },
        {
            number: "04",
            icon: TrendingUp,
            title: "We Optimize and Scale",
            description: "Continuous refinement based on what's converting. We expand what works, cut what doesn't. Your pipeline grows month over month with compounding results.",
            timeline: "Ongoing"
        }
    ];

    return (
        <section id="how-it-works" className="bg-[#111111] py-12 md:py-20 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 max-w-[1000px] relative z-10">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                        How It Works
                    </h2>
                    <p className="text-[#9CA3AF] text-base md:text-lg max-w-xl mx-auto">
                        From strategy call to qualified meetings in 4 steps. No complexity on your end.
                    </p>
                </div>

                {/* Steps Container */}
                <div className="relative">
                    {/* Desktop Connecting Line */}
                    <div className="hidden md:block absolute top-[30px] left-[10%] right-[10%] h-[2px] border-t-2 border-dotted border-[#F59E0B]/30 z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4 relative z-10">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="bg-[#1A1A1A] border border-[#2A2A2A] border-l-4 border-l-[#F59E0B] rounded-xl p-8 relative pt-12 flex flex-col h-full hover:border-t-[#F59E0B]/50 transition-colors"
                            >
                                {/* Step Number Badge */}
                                <div className="absolute -top-5 -left-3 w-[60px] h-[60px] bg-[#F59E0B] rounded-full flex items-center justify-center text-black text-2xl font-bold border-4 border-[#111111] shadow-lg">
                                    {step.number}
                                </div>

                                <div className="mb-4 mt-2">
                                    <step.icon className="text-[#F59E0B]" size={32} strokeWidth={1.5} />
                                </div>

                                <h3 className="text-lg font-bold text-white mb-3">
                                    {step.title}
                                </h3>

                                <p className="text-[#D1D5DB] text-sm leading-relaxed flex-grow">
                                    {step.description}
                                </p>

                                <div className="mt-4 pt-4 border-t border-[#2A2A2A] text-xs font-bold text-[#F59E0B] uppercase tracking-wide">
                                    {step.timeline}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <BookCallButton className="bg-[#F59E0B] text-black font-bold text-base px-8 py-4 rounded-lg hover:bg-[#D97706] transition-colors shadow-[0_4px_20px_rgba(245,158,11,0.2)]">
                        Book Your Strategy Call — Step 1 Starts Here
                    </BookCallButton>
                </div>

            </div>
        </section>
    );
}
