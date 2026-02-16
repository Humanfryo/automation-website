import { TrendingUp, Package, Wrench, ArrowRight } from "lucide-react";

export default function ClientResults() {
    const results = [
        {
            badge: "MANUFACTURING",
            icon: TrendingUp,
            title: "47 Meetings Booked in 90 Days",
            companyDescriptor: "Midwest Industrial Valve Distributor • 45 Employees",
            context: "Zero outbound process before Spartan Flow. Now averaging 5 qualified meetings per week with plant managers and procurement leads.",
            mainMetric: { value: "47 Meetings", label: "90 Days" },
            subMetrics: [
                { value: "12", label: "Qualified Opps" },
                { value: "$2.1M", label: "Pipeline" },
                { value: "18%", label: "Convert Rate" }
            ],
            tags: ["AUTOMOTIVE", "AEROSPACE", "$50K-$200K DEALS"]
        },
        {
            badge: "SUPPLY CHAIN",
            icon: Package,
            title: "Q2 Pipeline Filled in 8 Weeks",
            companyDescriptor: "Southeast CNC Machining & Fabrication Shop • 120 Employees",
            context: "Replaced two underperforming SDRs and cut cost-per-meeting by 60% within the first 8 weeks.",
            mainMetric: { value: "32 Meetings", label: "56 Days" },
            subMetrics: [
                { value: "8", label: "Qualified Opps" },
                { value: "$1.8M", label: "Pipeline" },
                { value: "25%", label: "Convert Rate" }
            ],
            tags: ["LOGISTICS", "3PL", "$100K+ DEALS"]
        },
        {
            badge: "AUTOMATION",
            icon: Wrench,
            title: "$2M Pipeline Created in 90 Days",
            companyDescriptor: "Texas-Based Industrial Supply Chain Company • 200+ Employees",
            context: "Built a $2M qualified pipeline targeting logistics directors at Fortune 1000 manufacturers.",
            mainMetric: { value: "$2M Pipeline", label: "14 Opportunities" },
            subMetrics: [
                { value: "38", label: "Meetings Booked" },
                { value: "$143K", label: "Avg Deal Size" },
                { value: "37%", label: "Convert Rate" }
            ],
            tags: ["MANUFACTURING", "AUTOMATION", "$100K-$300K"]
        }
    ];

    return (
        <section id="results" className="bg-black py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <div className="inline-block bg-primary px-3 py-1 rounded text-xs font-bold uppercase tracking-wider text-black mb-4">
                        Proven Results
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-6 relative">
                        <h2 className="text-3xl md:text-5xl font-bold text-white">Client Results</h2>
                        <a href="#case-studies" className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 text-primary text-sm font-semibold hover:underline flex items-center gap-1">
                            VIEW ALL RESULTS <ArrowRight size={16} />
                        </a>
                    </div>
                    <p className="text-secondary-foreground text-lg max-w-2xl mx-auto">
                        See how we've filled sales calendars for industrial companies across manufacturing, distribution, and supply chain sectors.
                    </p>
                    <a href="#case-studies" className="md:hidden mt-6 inline-flex items-center gap-1 text-primary text-sm font-semibold hover:underline">
                        VIEW ALL RESULTS <ArrowRight size={16} />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {results.map((result, index) => (
                        <div
                            key={index}
                            className="bg-card border-t-4 border-primary rounded-xl p-6 md:p-8 hover:-translate-y-2 transition-transform duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_rgba(255,184,0,0.15)] flex flex-col h-full"
                        >
                            <div className="inline-block bg-primary/20 text-primary px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider mb-6 self-start border border-primary/20">
                                {result.badge}
                            </div>

                            <div className="flex justify-center mb-6">
                                <result.icon className="w-16 h-16 text-primary stroke-[1] opacity-90" />
                            </div>

                            <h3 className="text-xl font-bold text-white text-center mb-2">{result.title}</h3>
                            <div className="text-center mb-6">
                                <div className="text-[#D1D5DB] text-sm font-medium mb-3">
                                    {result.companyDescriptor}
                                </div>
                                <p className="text-[#9CA3AF] text-[13px] italic leading-relaxed max-w-[90%] mx-auto">
                                    "{result.context}"
                                </p>
                            </div>

                            {/* Main Metric */}
                            <div className="text-center mb-8">
                                <div className="text-4xl font-bold text-primary mb-1">{result.mainMetric.value}</div>
                                <div className="text-sm text-white/50 uppercase tracking-widest">{result.mainMetric.label}</div>
                            </div>

                            {/* Sub Metrics */}
                            <div className="flex justify-between items-center border-t border-b border-white/10 py-4 mb-6">
                                {result.subMetrics.map((sub, i) => (
                                    <div key={i} className="text-center px-2 first:pl-0 last:pr-0 border-r border-white/10 last:border-0 flex-1">
                                        <div className="text-lg font-bold text-white">{sub.value}</div>
                                        <div className="text-[10px] text-secondary-foreground uppercase mt-1">{sub.label}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-2 justify-center mb-6 mt-auto">
                                {result.tags.map((tag, i) => (
                                    <span key={i} className="text-[10px] bg-white/5 text-white/70 px-2 py-1 rounded border border-white/5">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <a href="#" className="flex items-center justify-center gap-2 text-primary text-sm font-bold hover:underline py-2">
                                VIEW CASE STUDY <ArrowRight size={14} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
