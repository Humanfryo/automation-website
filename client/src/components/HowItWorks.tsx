import { Phone, Settings, CalendarCheck, TrendingUp } from "lucide-react";
import BookCallButton from "./BookCallButton";

export default function HowItWorks() {
    const steps = [
        {
            number: "01",
            icon: Phone,
            title: "We Learn Your Business",
            description: "A 30-minute strategy call where we map your ideal customer profile, understand your value proposition, and define what a qualified meeting looks like for you.",
            timeline: "Day 1",
        },
        {
            number: "02",
            icon: Settings,
            title: "We Build Your Pipeline Engine",
            description: "Custom AI-powered outreach campaigns built for your specific market. Lead sourcing, messaging, and targeting — all configured and tested before we go live.",
            timeline: "Week 1–2",
        },
        {
            number: "03",
            icon: CalendarCheck,
            title: "Meetings Land on Your Calendar",
            description: "Decision-makers who match your ICP start appearing on your calendar. Every meeting comes with full context — who they are, why they're interested, and what they need.",
            timeline: "Week 3–8",
        },
        {
            number: "04",
            icon: TrendingUp,
            title: "We Optimize and Scale",
            description: "Continuous refinement based on what's converting. We expand what works, cut what doesn't. Your pipeline compounds month over month.",
            timeline: "Ongoing",
        },
    ];

    return (
        <section id="how-it-works" className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-14">
                    <span className="text-xs font-semibold text-accent-500 uppercase tracking-widest mb-3 block">
                        Simple Process
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                        From Strategy Call to Qualified Meetings in 4 Steps
                    </h2>
                    <p className="text-gray-600 text-lg max-w-xl mx-auto">
                        No complexity on your end. We handle everything.
                    </p>
                </div>

                {/* Steps */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Desktop connecting line */}
                    <div className="hidden lg:block absolute top-[52px] left-[12%] right-[12%] h-px bg-gray-200 z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
                        {steps.map((step, index) => (
                            <div key={index} className="relative text-center">
                                {/* Step Number Circle */}
                                <div className="inline-flex items-center justify-center w-[52px] h-[52px] rounded-full bg-primary-500 text-white text-lg font-heading font-bold mb-5 shadow-md mx-auto relative z-10">
                                    {step.number}
                                </div>

                                {/* Icon */}
                                <div className="inline-flex items-center justify-center w-10 h-10 bg-primary-50 rounded-lg mb-4 mx-auto block">
                                    <step.icon className="w-5 h-5 text-primary-500" />
                                </div>

                                <h3 className="text-base font-heading font-bold text-gray-900 mb-2">
                                    {step.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                    {step.description}
                                </p>

                                <span className="inline-block text-xs font-semibold text-accent-500 bg-accent-50 px-3 py-1 rounded-full">
                                    {step.timeline}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-14 text-center">
                    <BookCallButton className="bg-primary-500 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-primary-600 transition-all shadow-sm">
                        Book Your Strategy Call — Step 1 Starts Here
                    </BookCallButton>
                </div>
            </div>
        </section>
    );
}
