import { Brain, Crosshair, GitMerge, LayoutDashboard } from "lucide-react";

export default function TechnologyDifferentiator() {
    const processSteps = [
        { label: "Lead Intelligence" },
        { label: "AI Targeting" },
        { label: "Personalized Outreach" },
        { label: "Meeting Booked" }
    ];

    const features = [
        {
            icon: Brain,
            title: "AI-Powered Personalization",
            description: "Every email is unique and contextually relevant. No templates, no spray-and-pray. Our AI researches each prospect and crafts messaging that resonates with their specific situation."
        },
        {
            icon: Crosshair,
            title: "Intelligent Lead Scoring",
            description: "We don't just find contacts. Our system identifies companies that match your ideal customer profile and filters out the noise before a single email is sent."
        },
        {
            icon: GitMerge,
            title: "Multi-Sequence Campaigns",
            description: "Automated follow-up sequences that feel human. Timed to land when executives are most responsive, across the channels that actually work."
        },
        {
            icon: LayoutDashboard,
            title: "Full Pipeline Visibility",
            description: "Track every lead, every email, every response. Your dashboard shows exactly what's working and what's being optimized in real time."
        }
    ];

    return (
        <section className="bg-[#0F0F0F] border-y border-[#2A2A2A] py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6 max-w-[1100px]">

                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-block mb-3">
                        <span className="text-[11px] font-bold text-[#F59E0B] uppercase tracking-[2px]">
                            The Spartan Flow Engine
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                        Your Pipeline, Automated End-to-End
                    </h2>
                    <p className="text-[#9CA3AF] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                        AI-powered outreach that researches, personalizes, and delivers — while you focus on closing deals.
                    </p>
                </div>

                {/* Process Flow Visual */}
                <div className="mb-12 md:mb-16">
                    {/* Desktop View */}
                    <div className="hidden md:flex items-center justify-between relative px-8">
                        {/* Connecting Line */}
                        <div className="absolute top-[14px] left-12 right-12 h-[2px] border-t-2 border-dotted border-[#F59E0B]/30 -z-0" />

                        {processSteps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center relative z-10">
                                <div className="w-8 h-8 rounded-full bg-[#1A1A1A] border-2 border-[#F59E0B] flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                                </div>
                                <span className="text-[13px] font-medium text-white">{step.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Mobile View */}
                    <div className="md:hidden flex flex-col gap-6 pl-8 relative border-l-2 border-dotted border-[#F59E0B]/30 ml-4">
                        {processSteps.map((step, index) => (
                            <div key={index} className="flex items-center gap-4 -ml-[9px]">
                                <div className="w-4 h-4 rounded-full bg-[#1A1A1A] border-2 border-[#F59E0B] shrink-0" />
                                <span className="text-[13px] font-medium text-white">{step.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-8 hover:border-[#F59E0B] hover:shadow-[0_4px_20px_rgba(245,158,11,0.1)] transition-all duration-300 group"
                        >
                            <div className="mb-4 text-[#F59E0B]">
                                <feature.icon size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-[#D1D5DB] text-sm leading-1.6">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom Note */}
                <div className="mt-8 text-center">
                    <p className="text-sm text-[#6B7280] italic">
                        The technology works behind the scenes. You just see meetings on your calendar.
                    </p>
                </div>

            </div>
        </section>
    );
}
