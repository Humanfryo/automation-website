import BookCallButton from "./BookCallButton";

export default function ClientResults() {
    const metrics = [
        { value: "140+", label: "Total Meetings Booked", sublabel: "Across all active campaigns" },
        { value: "$312", label: "Average Cost Per Meeting", sublabel: "vs. $500-$800 with internal SDRs" },
        { value: "22%", label: "Average Reply Rate", sublabel: "vs. 3% industry standard" },
        { value: "$19.8M+", label: "Pipeline Generated", sublabel: "Total qualified pipeline value" }
    ];

    const caseStudies = [
        {
            badge: "MANUFACTURING",
            title: "47 Meetings Booked in 90 Days",
            descriptor: "Midwest Industrial Valve Distributor • 45 Employees",
            before: "Before: Sales team spending 60% of time prospecting. Only 2 quality meetings per month.",
            results: [
                { value: "47", label: "Meetings Booked" },
                { value: "15.7", label: "Meetings/Month avg." },
                { value: "$1.8M", label: "Pipeline Created" },
                { value: "$191", label: "Cost Per Meeting" }
            ],
            quote: "We went from chasing leads to cherry-picking opportunities. Game-changer for our Q4 pipeline.",
            author: "VP of Sales"
        },
        {
            badge: "DISTRIBUTION",
            title: "32 Meetings in 8 Weeks",
            descriptor: "Southeast CNC Machining & Fabrication Shop • 120 Employees",
            before: "Before: Two underperforming SDRs costing $160K/year combined. 4 meetings per month.",
            results: [
                { value: "32", label: "Meetings Booked" },
                { value: "16", label: "Meetings/Month avg." },
                { value: "$4.8M", label: "Pipeline Created" },
                { value: "60%", label: "Cost Reduction" }
            ],
            quote: "Replaced two SDRs and got better results in half the time. The math was a no-brainer.",
            author: "Sales Director"
        },
        {
            badge: "SUPPLY CHAIN",
            title: "$2M Pipeline Created in 90 Days",
            descriptor: "Texas-Based Industrial Supply Chain Company • 200+ Employees",
            before: "Before: Relying on trade shows and referrals. No outbound system in place.",
            results: [
                { value: "140", label: "Meetings Booked (6 mo)" },
                { value: "$19.8M", label: "Total Pipeline" },
                { value: "22", label: "Deals Closed" },
                { value: "51.3x", label: "ROI" }
            ],
            quote: "If someone asked me 'should I do 3 months or 6 months?' — I'd say six, without hesitation.",
            author: "VP of Business Development"
        }
    ];

    return (
        <section className="bg-[#0F0F0F] border-y border-[#2A2A2A] py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6 max-w-[1100px]">

                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-block mb-3">
                        <span className="text-[11px] font-bold text-[#F59E0B] uppercase tracking-[2px]">
                            PROVEN RESULTS
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                        Real Campaigns. Real Numbers. No Fluff.
                    </h2>
                    <p className="text-[#9CA3AF] text-base md:text-lg max-w-xl mx-auto leading-relaxed">
                        Every metric below comes from actual client campaigns. We show our work.
                    </p>
                </div>

                {/* Aggregate Metrics Bar */}
                <div className="bg-[#1A1A1A] rounded-xl p-8 mb-12 border border-[#2A2A2A]">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
                        {metrics.map((metric, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-[#F59E0B] mb-2">
                                    {metric.value}
                                </div>
                                <div className="text-white text-sm font-semibold mb-1">
                                    {metric.label}
                                </div>
                                <div className="text-[11px] text-[#9CA3AF]">
                                    {metric.sublabel}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Case Study Cards */}
                <div className="space-y-6 md:space-y-8">
                    {caseStudies.map((study, index) => (
                        <div
                            key={index}
                            className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 md:p-8 hover:border-[#F59E0B]/30 transition-colors"
                        >
                            <div className="flex flex-col md:flex-row gap-8">
                                {/* Left Content */}
                                <div className="flex-1">
                                    <div className="inline-block bg-[#F59E0B] text-black text-[11px] font-bold px-2 py-1 rounded uppercase mb-4">
                                        {study.badge}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">
                                        {study.title}
                                    </h3>
                                    <p className="text-[#9CA3AF] text-sm mb-4">
                                        {study.descriptor}
                                    </p>
                                    <div className="border-l-4 border-red-500/40 pl-3 mb-6">
                                        <p className="text-[13px] text-[#9CA3AF] italic">
                                            {study.before}
                                        </p>
                                    </div>

                                    {/* Quote Block */}
                                    <div className="bg-[#111111] rounded-lg p-4 border border-[#2A2A2A]">
                                        <p className="text-[#FDE68A] text-sm italic mb-2">
                                            "{study.quote}"
                                        </p>
                                        <p className="text-[#9CA3AF] text-xs">
                                            — {study.author}
                                        </p>
                                    </div>
                                </div>

                                {/* Right Metrics Grid */}
                                <div className="flex-1">
                                    <div className="grid grid-cols-2 gap-4 h-full">
                                        {study.results.map((result, i) => (
                                            <div key={i} className="bg-[#111111] rounded-lg p-4 flex flex-col justify-center text-center border border-[#2A2A2A]">
                                                <div className="text-2xl font-bold text-[#F59E0B] mb-1">
                                                    {result.value}
                                                </div>
                                                <div className="text-xs text-white">
                                                    {result.label}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <BookCallButton className="bg-[#F59E0B] text-black font-bold text-base px-8 py-3.5 rounded-lg hover:bg-[#D97706] transition-colors inline-block shadow-[0_4px_20px_rgba(245,158,11,0.2)]">
                        Get Results Like These — Book Your Strategy Call
                    </BookCallButton>
                </div>

            </div>
        </section>
    );
}
