import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import BookCallButton from "./BookCallButton";

export default function ClientResults() {
    const metrics = [
        { value: "140+", label: "Meetings Booked", sublabel: "Across all active campaigns" },
        { value: "22%", label: "Average Reply Rate", sublabel: "vs. 3% industry standard" },
        { value: "$19.8M+", label: "Pipeline Generated", sublabel: "Total qualified pipeline value" },
        { value: "94%", label: "Client Retention", sublabel: "Clients who renew after 90 days" },
    ];

    const caseStudies = [
        {
            badge: "CHANNEL PARTNER MANAGEMENT / SAAS",
            title: "14 Enterprise Demos in 90 Days — From Zero Pipeline",
            descriptor: "Channel Fusion — 90+ Employees — Overland Park, Kansas",
            before: "12 months with a sales director, intent data tools, AEs, BDRs, and SDRs produced zero meetings. Generic job title filtering missed decision-makers in the channel management space.",
            results: [
                { value: "14", label: "Enterprise Demos" },
                { value: "$2.4M+", label: "Pipeline Created" },
                { value: "$348", label: "Cost/Meeting" },
                { value: "38.4%", label: "Open Rate" },
            ],
            quote: "The AI title-matching agent caught decision-makers that keyword filters missed entirely. The system we built generated 14 enterprise demos at roughly 1/20th the cost of our previous efforts.",
            author: "Channel Fusion",
            authorTitle: "Leadership Team",
            photo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=120&h=120&fit=crop&crop=face",
            link: "/case-studies/channel-fusion-14-demos-90-days",
        },
        {
            badge: "MANAGED IT SERVICES",
            title: "First Predictable Pipeline in 11 Years",
            descriptor: "Precision Networks — 18 Employees — Kansas City, Missouri",
            before: "Referral-dependent for 11 years. Part-time BDR produced zero clients in 6 months at $4,500/month. Owner spending 15 hours/week on BD with no results.",
            results: [
                { value: "22", label: "Meetings Booked" },
                { value: "$7,600", label: "New MRR" },
                { value: "52.7%", label: "Open Rate" },
                { value: "2", label: "Signed MSAs" },
            ],
            quote: "This is the first time I've ever known what's actually happening with my outreach. Every piece of the system belongs to me.",
            author: "Owner",
            authorTitle: "Precision Networks",
            photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face",
            link: "/case-studies/precision-networks-first-predictable-pipeline",
        },
        {
            badge: "HOME SERVICES / VOICE AI",
            title: "93% Cost Reduction with Voice AI Agent",
            descriptor: "AustinAnswerPro — 12 Employees — Austin, Texas",
            before: "$1,850/month answering service that lost 30–40% of after-hours leads. Operators couldn't answer HVAC questions or book appointments — every call required a callback.",
            results: [
                { value: "93%", label: "Cost Reduction" },
                { value: "847", label: "Calls Handled" },
                { value: "94%", label: "Lead Capture" },
                { value: "$28.2K", label: "New Revenue (90d)" },
            ],
            quote: "The thing that mattered most wasn't the 93% cost reduction — it was the Sunday morning report. I stopped checking my phone at 11 PM and started trusting the system.",
            author: "Owner",
            authorTitle: "AustinAnswerPro",
            photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face",
            link: "/case-studies/austin-answer-pro-voice-ai-agent",
        },
    ];

    return (
        <section id="results" className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="text-xs font-semibold text-accent-500 uppercase tracking-widest mb-3 block">
                        Proven Results
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                        Real Campaigns. Real Numbers.
                    </h2>
                    <p className="text-gray-600 text-lg max-w-xl mx-auto leading-relaxed">
                        Every metric below comes from actual client campaigns.
                    </p>
                </div>

                {/* Aggregate Metrics */}
                <div className="bg-primary-500 rounded-xl p-8 mb-14">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
                        {metrics.map((metric, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-4xl font-heading font-bold text-white mb-1">
                                    {metric.value}
                                </div>
                                <div className="text-primary-100 text-sm font-medium mb-0.5">
                                    {metric.label}
                                </div>
                                <div className="text-primary-200 text-xs">
                                    {metric.sublabel}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Case Study Cards */}
                <div className="space-y-8">
                    {caseStudies.map((study, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="flex flex-col lg:flex-row gap-8">
                                {/* Left Content */}
                                <div className="flex-1">
                                    <span className="inline-block bg-primary-50 text-primary-500 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
                                        {study.badge}
                                    </span>
                                    <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                                        {study.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm mb-4">
                                        {study.descriptor}
                                    </p>
                                    <div className="border-l-3 border-l-[3px] border-red-300 pl-3 mb-6">
                                        <p className="text-sm text-gray-500 italic">
                                            {study.before}
                                        </p>
                                    </div>

                                    {/* Quote */}
                                    <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
                                        <p className="text-gray-700 text-sm italic mb-3 leading-relaxed">
                                            "{study.quote}"
                                        </p>
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={study.photo}
                                                alt={study.author}
                                                className="w-10 h-10 rounded-full object-cover"
                                                loading="lazy"
                                            />
                                            <div>
                                                <p className="text-gray-900 text-sm font-semibold">
                                                    {study.author}
                                                </p>
                                                <p className="text-gray-500 text-xs">
                                                    {study.authorTitle}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Metrics Grid */}
                                <div className="lg:w-[320px] flex-shrink-0">
                                    <div className="grid grid-cols-2 gap-4 h-full">
                                        {study.results.map((result, i) => (
                                            <div
                                                key={i}
                                                className="bg-gray-50 rounded-lg p-5 flex flex-col justify-center text-center border border-gray-100"
                                            >
                                                <div className="text-2xl font-heading font-bold text-primary-500 mb-1">
                                                    {result.value}
                                                </div>
                                                <div className="text-xs text-gray-600 font-medium">
                                                    {result.label}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {study.link && (
                                <div className="mt-6 pt-4 border-t border-gray-100">
                                    <Link href={study.link}>
                                        <a className="text-primary-500 text-sm font-semibold inline-flex items-center gap-2 hover:text-primary-600 transition-colors">
                                            Read Full Case Study <ArrowRight className="w-4 h-4" />
                                        </a>
                                    </Link>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <BookCallButton className="bg-accent-500 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-accent-600 transition-all shadow-sm inline-flex items-center gap-2">
                        Get Results Like These <ArrowRight className="w-4 h-4" />
                    </BookCallButton>
                </div>
            </div>
        </section>
    );
}
