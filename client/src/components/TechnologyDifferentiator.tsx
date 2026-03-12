import { Brain, Crosshair, GitMerge, LayoutDashboard } from "lucide-react";

export default function TechnologyDifferentiator() {
    const features = [
        {
            icon: Brain,
            title: "AI-Powered Personalization",
            description: "Every email is unique and contextually relevant. Our AI researches each prospect and crafts messaging that resonates with their specific situation — no templates, no spray-and-pray.",
        },
        {
            icon: Crosshair,
            title: "Intelligent Lead Scoring",
            description: "We identify companies that match your ideal customer profile and filter out the noise before a single email is sent. Your team only talks to qualified prospects.",
        },
        {
            icon: GitMerge,
            title: "Multi-Sequence Campaigns",
            description: "Automated follow-up sequences that feel human. Timed to land when executives are most responsive, across the channels that actually work.",
        },
        {
            icon: LayoutDashboard,
            title: "Full Pipeline Visibility",
            description: "Track every lead, every email, every response. Your dashboard shows exactly what's working and what's being optimized — in real time.",
        },
    ];

    return (
        <section className="bg-gray-50 py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="text-xs font-semibold text-primary-500 uppercase tracking-widest mb-3 block">
                        The Spartan Flow Engine
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                        Your Pipeline, Automated End-to-End
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        AI-powered outreach that researches, personalizes, and delivers — while you focus on closing deals.
                    </p>
                </div>

                {/* Process Flow */}
                <div className="mb-14">
                    <div className="hidden md:flex items-center justify-between max-w-3xl mx-auto relative px-4">
                        <div className="absolute top-[14px] left-16 right-16 h-px bg-gray-300 z-0" />
                        {["Lead Intelligence", "AI Targeting", "Personalized Outreach", "Meeting Booked"].map((label, index) => (
                            <div key={index} className="flex flex-col items-center relative z-10">
                                <div className="w-7 h-7 rounded-full bg-white border-2 border-primary-500 flex items-center justify-center mb-2.5 shadow-sm">
                                    <div className="w-2.5 h-2.5 rounded-full bg-primary-500" />
                                </div>
                                <span className="text-xs font-medium text-gray-700">{label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-xl p-7 hover:shadow-md hover:border-primary-200 transition-all duration-300 group"
                        >
                            <div className="inline-flex items-center justify-center w-11 h-11 bg-primary-50 rounded-lg mb-4 group-hover:bg-primary-100 transition-colors">
                                <feature.icon className="w-5 h-5 text-primary-500" />
                            </div>
                            <h3 className="text-lg font-heading font-bold text-gray-900 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-500 italic">
                        The technology works behind the scenes. You just see meetings on your calendar.
                    </p>
                </div>
            </div>
        </section>
    );
}
