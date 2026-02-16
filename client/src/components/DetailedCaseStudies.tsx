import { CheckCircle, ArrowRight } from "lucide-react";

export default function DetailedCaseStudies() {
    const cases = [
        {
            badge: "MANUFACTURING",
            headline: "From 2 to 12 Qualified Meetings Per Month",
            challenge: "Sales team at industrial equipment distributor wasting 15+ hours per week on cold calls. Only 2 quality meetings per month with plant managers. Deals stalling at 6+ months due to weak pipeline.",
            solution: [
                "Identified 500 plant managers at automotive & aerospace manufacturers",
                "Created personalized outreach addressing capacity planning",
                "Deployed 6-week multi-touch campaign with ROI calculators"
            ],
            results: {
                metrics: ["47 Meetings", "12 Qualified Opps", "$2.1M Pipeline"],
                quote: "We went from begging for meetings to having qualified buyers ask for proposals. Spartan Flow completely transformed our pipeline.",
                author: "Mike Patterson",
                title: "VP of Sales, Industrial Equipment Distributor"
            }
        },
        {
            badge: "SUPPLY CHAIN",
            headline: "Q2 Pipeline Filled in 8 Weeks",
            challenge: "Logistics software startup struggling to reach supply chain directors at 3PL providers. Founder spending 20 hours/week on LinkedIn outreach with minimal results.",
            solution: [
                "Targeted 400 supply chain directors at 3PL companies",
                "Positioned solution around labor shortage challenges",
                "Created video demos showing 40%+ time savings"
            ],
            results: {
                metrics: ["32 Meetings", "8 Qualified Opps", "$1.8M Pipeline"],
                quote: "Spartan Flow freed me up to actually run my company. They booked more qualified meetings in 2 months than I had in the entire previous quarter.",
                author: "Lisa Chen",
                title: "Founder & CEO, Supply Chain Software"
            }
        },
        {
            badge: "AUTOMATION",
            headline: "$2M Pipeline Created in 90 Days",
            challenge: "Factory automation consultancy with strong reputation but no systematic lead generation. Relied entirely on referrals. Needed to scale beyond founder's network.",
            solution: [
                "Identified 300 operations leaders at discrete manufacturing facilities",
                "Developed thought leadership content around labor shortages",
                "Built multi-phase nurture for long sales cycle"
            ],
            results: {
                metrics: ["38 Meetings", "14 Qualified Opps", "$2M Pipeline"],
                quote: "Our biggest challenge was building a predictable pipeline. Spartan Flow turned appointment setting into a science.",
                author: "James Rodriguez",
                title: "Managing Partner, Automation Consultancy"
            }
        }
    ];

    return (
        <section id="case-studies" className="bg-secondary py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">See Exactly How We Fill Sales Calendars</h2>
                    <p className="text-secondary-foreground text-lg">Real campaigns. Real results. No fluff.</p>
                </div>

                <div className="space-y-16">
                    {cases.map((study, index) => (
                        <div key={index} className="bg-black border-l-4 border-primary rounded-xl p-8 md:p-12 shadow-[0_8px_40px_rgba(0,0,0,0.4)]">
                            <div className="inline-block bg-primary text-black px-3 py-1 rounded text-xs font-bold uppercase tracking-wider mb-6">
                                {study.badge}
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">{study.headline}</h3>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                                {/* Challenge */}
                                <div>
                                    <h4 className="text-primary font-bold uppercase text-sm tracking-wider mb-4">The Challenge</h4>
                                    <p className="text-secondary-foreground leading-relaxed">{study.challenge}</p>
                                </div>

                                {/* Solution */}
                                <div>
                                    <h4 className="text-primary font-bold uppercase text-sm tracking-wider mb-4">What We Did</h4>
                                    <ul className="space-y-4">
                                        {study.solution.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                                <span className="text-secondary-foreground">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Results */}
                                <div>
                                    <h4 className="text-primary font-bold uppercase text-sm tracking-wider mb-6">The Results</h4>
                                    <div className="flex flex-wrap items-center gap-4 text-white font-bold text-xl mb-8">
                                        {study.results.metrics.map((metric, i) => (
                                            <div key={i} className="flex items-center gap-4">
                                                <span className="text-primary text-2xl md:text-3xl">{metric}</span>
                                                {i < study.results.metrics.length - 1 && <ArrowRight className="text-white/20 w-5 h-5" />}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="bg-white/5 border-l-2 border-primary pl-6 py-4 italic text-white/90 leading-relaxed mb-4">
                                        "{study.results.quote}"
                                    </div>
                                    <div className="text-secondary-foreground text-sm">
                                        — <span className="font-bold text-white">{study.results.author}</span>, {study.results.title}
                                    </div>

                                    <div className="mt-8 flex justify-end">
                                        <button className="text-primary border border-primary px-6 py-2 rounded hover:bg-primary hover:text-black transition-colors text-sm font-semibold">
                                            Read Full Case Study
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
