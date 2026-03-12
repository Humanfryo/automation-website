import React from 'react';
import { CheckCircle, ArrowRight, Layers, Settings, Mail, Shield, BarChart3, Users, Search, FileCheck, Send, Activity } from 'lucide-react';
import { Link } from 'wouter';
import BookCallButton from '../components/BookCallButton';

const CaseStudyChannelFusion = () => {
    React.useEffect(() => {
        document.title = "Case Study: Channel Fusion — 14 Enterprise Demos in 90 Days | Spartan Flow";
    }, []);

    return (
        <div className="bg-white text-gray-900 selection:bg-primary-100 selection:text-black font-sans">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 border-b border-gray-200">
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

                <div className="container mx-auto px-4 max-w-[900px]">
                    <div className="text-sm text-gray-500 mb-8 font-medium">
                        <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link> &gt; <a href="/#results" className="hover:text-primary-600 transition-colors">Results</a> &gt; <span className="text-gray-900">Channel Fusion Case Study</span>
                    </div>

                    <div className="text-center">
                        <span className="inline-block bg-primary-500 text-black text-xs font-bold uppercase py-2 px-4 rounded mb-6 tracking-widest">
                            Spotlight Case Study
                        </span>

                        <h1 className="text-4xl md:text-[64px] font-bold text-gray-900 leading-tight mb-8">
                            From Zero Pipeline to 14 Enterprise Demos in 90 Days
                        </h1>

                        <div className="flex flex-wrap justify-center gap-4 text-gray-500 text-base mb-12 font-medium">
                            <span>Channel Partner Management / SaaS</span>
                            <span className="text-primary-500">&bull;</span>
                            <span>Overland Park, Kansas</span>
                            <span className="text-primary-500">&bull;</span>
                            <span>90+ Employees</span>
                        </div>

                        {/* Key Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { label: "Enterprise Demos Booked", value: "14" },
                                { label: "Pipeline Value", value: "$2.4M+" },
                                { label: "Total Investment", value: "$4,869" },
                            ].map((stat, i) => (
                                <div key={i} className="bg-gray-50 border border-gray-200 rounded-lg p-8 transform hover:-translate-y-1 transition-transform duration-300">
                                    <div className="text-[48px] font-bold text-primary-500 mb-2">{stat.value}</div>
                                    <div className="text-gray-900 font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="container mx-auto px-4 max-w-[800px] py-16 space-y-24">

                {/* The Challenge */}
                <section>
                    <h2 className="text-4xl font-bold text-gray-900 mb-8 inline-block relative pb-2">
                        The Challenge
                        <span className="absolute bottom-0 left-0 w-20 h-1 bg-primary-500"></span>
                    </h2>

                    <div className="bg-gray-50 border-l-4 border-primary-500 p-8 rounded-r mb-10">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Company Background</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Channel Fusion builds dealer and channel partner management platforms for large brands — co-op fund distribution, incentive programs, loyalty platforms, and sales performance tracking. Their client roster includes Fortune 500 companies with complex dealer networks spanning thousands of locations.
                        </p>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-6">The Problem</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        They had 90 developers building world-class products. What they didn't have was any way to consistently fill the sales pipeline.
                    </p>

                    <ul className="space-y-4 mb-10">
                        {[
                            "Hired a sales director with intent data tools (Sixth Sense, Bombora) — 12 months, zero replies",
                            "Brought on AEs, BDRs, and SDRs — thousands of emails, hundreds of cold calls, zero meetings booked",
                            "Generic job title filtering missed actual decision-makers in the channel management space",
                            "The same buyer role has completely different titles across companies: \"Co-op Manager\" at one, \"Global Dealer Experience Manager\" at another",
                            "Messaging was too broad to resonate with anyone specific"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-4 text-lg text-gray-700 leading-relaxed">
                                <span className="text-primary-500 mt-1.5">&bull;</span>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="bg-primary-50 border-l-4 border-primary-500 p-8 rounded-r my-10">
                        <p className="text-xl text-gray-900 italic leading-relaxed mb-4">
                            "We tried everything the traditional playbook recommends. After 12 months with a full-time sales director, intent data tools, AEs, BDRs, and SDRs — thousands of emails and hundreds of cold calls — we had exactly zero meetings booked. The problem wasn't effort. It was targeting."
                        </p>
                        <p className="text-gray-500 font-medium">— Channel Fusion Leadership</p>
                    </div>

                    <div className="border border-red-500/30 rounded-lg p-6 bg-gray-50">
                        <h4 className="text-gray-900 font-bold text-lg mb-4">The Core Issue</h4>
                        <p className="text-gray-700 leading-relaxed">
                            In the channel management space, a "Dealer Program Coordinator" at a tire manufacturer and a "Partner Incentive Manager" at an insurance company are the same buyer. Standard keyword filters and generic job title targeting missed these decision-makers every time.
                        </p>
                    </div>
                </section>

                {/* The Solution */}
                <section>
                    <h2 className="text-4xl font-bold text-gray-900 mb-8 inline-block relative pb-2">
                        The Solution
                        <span className="absolute bottom-0 left-0 w-20 h-1 bg-primary-500"></span>
                    </h2>
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">Eight-Stage Human-in-the-Loop Automation System</h3>

                    <div className="space-y-8">
                        {[
                            {
                                stage: "Stage 1",
                                title: "Lead Sourcing",
                                description: "Pulled prospects from target companies across a 250M+ B2B contact database, extracting contact information, titles, employment history, and company data.",
                                icon: <Search size={20} />
                            },
                            {
                                stage: "Stage 2",
                                title: "AI-Powered Title Matching",
                                description: "Built a scoring agent that evaluated each lead on a 0–100 scale based on title relevance to actual channel management buyers — not generic \"VP of Marketing\" filtering, but industry-specific role mapping.",
                                icon: <Users size={20} />
                            },
                            {
                                stage: "Stage 3",
                                title: "Company Context Research",
                                description: "A second AI agent researched each prospect's company — recent news, industry pain points, co-op program challenges, dealer network size — to provide personalization context.",
                                icon: <BarChart3 size={20} />
                            },
                            {
                                stage: "Stage 4",
                                title: "Personalized Email Generation",
                                description: "A third agent drafted emails using the prospect's specific context. If a tire company was expanding its dealer network, the email referenced that. If an insurance brand consolidated its incentive programs, the outreach spoke to that challenge.",
                                icon: <Mail size={20} />
                            },
                            {
                                stage: "Stage 5",
                                title: "HITL Review Gate",
                                description: "Every email passed through a Google Sheets review interface where Channel Fusion's team could approve, edit, or reject before anything sent. Nothing went out without a human green light.",
                                icon: <FileCheck size={20} />
                            },
                            {
                                stage: "Stage 6",
                                title: "Authenticated Email Delivery",
                                description: "Messages sent through 10 fully warmed, SPF/DKIM/DMARC-authenticated mailboxes with staggered sending schedules to protect domain reputation.",
                                icon: <Shield size={20} />
                            },
                            {
                                stage: "Stage 7",
                                title: "Multi-Step Follow-Up Sequences",
                                description: "Three automated follow-ups per prospect, each referencing different pain points and proof points, timed for optimal engagement windows.",
                                icon: <Send size={20} />
                            },
                            {
                                stage: "Stage 8",
                                title: "Real-Time Event Tracking",
                                description: "Every open, click, reply, and bounce captured via webhooks and logged to a central dashboard. Reply classification routed hot leads to the sales team within minutes.",
                                icon: <Activity size={20} />
                            },
                        ].map((step, i) => (
                            <div key={i} className="flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center text-white">
                                    {step.icon}
                                </div>
                                <div className="flex-1">
                                    <span className="inline-block bg-white text-gray-500 text-xs font-bold px-3 py-1 rounded border border-gray-200 mb-3">{step.stage}</span>
                                    <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
                                    <p className="text-gray-700 leading-relaxed">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="mt-16 bg-gray-50 border border-gray-200 rounded-lg p-8">
                        <h4 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <Settings size={20} className="text-primary-500" /> The Tech Stack
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                            {["Apollo.io", "ZeroBounce", "n8n (VPS)", "Apify", "OpenAI", "Primeforge", "Instantly.ai"].map((tool, i) => (
                                <div key={i} className="bg-white border border-gray-200 rounded px-4 py-3 text-center text-sm font-medium text-gray-700">
                                    {tool}
                                </div>
                            ))}
                        </div>
                        <div className="border-t border-gray-200 pt-4 text-center">
                            <span className="text-gray-500 text-sm">Monthly infrastructure cost to client: </span>
                            <span className="text-primary-500 font-bold text-lg">$373</span>
                        </div>
                    </div>
                </section>

                {/* The Results */}
                <section>
                    <h2 className="text-4xl font-bold text-gray-900 mb-8 inline-block relative pb-2">
                        The Results
                        <span className="absolute bottom-0 left-0 w-20 h-1 bg-primary-500"></span>
                    </h2>
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">90-Day Pilot Performance</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-gray-50 border border-gray-200 p-8 rounded-lg">
                            <h4 className="text-xl font-bold text-gray-900 mb-6">Email Performance</h4>
                            <ul className="space-y-6">
                                {[
                                    { label: "Emails Sent", value: "14,200", sub: "Across 90 days" },
                                    { label: "Average Open Rate", value: "38.4%", sub: "Industry: ~20%" },
                                    { label: "Reply Rate", value: "5.2%", sub: "738 total replies" },
                                    { label: "Positive Reply Rate", value: "2.8%", sub: "Interested prospects" },
                                ].map((stat, i) => (
                                    <li key={i}>
                                        <div className="text-2xl font-bold text-primary-500">{stat.value}</div>
                                        <div className="text-gray-900">{stat.label}</div>
                                        <div className="text-sm text-gray-500">{stat.sub}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-gray-50 border border-gray-200 p-8 rounded-lg">
                            <h4 className="text-xl font-bold text-gray-900 mb-6">Pipeline Impact</h4>
                            <ul className="space-y-6">
                                {[
                                    { label: "Qualified Meetings Booked", value: "14", sub: "Enterprise-level demos" },
                                    { label: "Avg Deal Size in Pipeline", value: "$175K+", sub: "ARR per opportunity" },
                                    { label: "Pipeline Value Generated", value: "$2.4M+", sub: "Total qualified pipeline" },
                                    { label: "Cost Per Qualified Meeting", value: "$348", sub: "Total: $4,869 for 90 days" },
                                ].map((stat, i) => (
                                    <li key={i}>
                                        <div className="text-2xl font-bold text-primary-500">{stat.value}</div>
                                        <div className="text-gray-900">{stat.label}</div>
                                        <div className="text-sm text-gray-500">{stat.sub}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Comparison callout */}
                    <div className="bg-green-500/10 border-2 border-green-500 p-8 rounded-lg mb-12">
                        <h4 className="text-green-600 font-bold text-lg mb-6 uppercase tracking-wider">THE COMPARISON</h4>
                        <div className="space-y-3">
                            <div className="flex justify-between text-gray-900 border-b border-green-500/30 pb-3">
                                <span>Previous 12 months (sales director + SDRs + intent data)</span>
                                <span className="font-bold text-red-500">0 meetings</span>
                            </div>
                            <div className="flex justify-between text-gray-900 border-b border-green-500/30 pb-3">
                                <span>Spartan Flow (90-day pilot)</span>
                                <span className="font-bold text-green-600">14 enterprise demos</span>
                            </div>
                            <div className="flex justify-between text-gray-900 pt-2">
                                <span>Cost comparison</span>
                                <span className="font-bold text-green-600">~1/20th the cost</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What Made the Difference */}
                <section>
                    <h2 className="text-4xl font-bold text-gray-900 mb-8 inline-block relative pb-2">
                        What Made the Difference
                        <span className="absolute bottom-0 left-0 w-20 h-1 bg-primary-500"></span>
                    </h2>

                    <div className="space-y-8">
                        <div className="bg-gray-50 border border-gray-200 p-8 rounded-lg">
                            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <Layers size={20} className="text-primary-500" /> Precision Over Volume
                            </h4>
                            <p className="text-gray-700 leading-relaxed">
                                The AI title-matching agent caught decision-makers that keyword filters missed entirely. The industry-specific personalization meant emails actually referenced problems the recipient was dealing with, not generic B2B platitudes.
                            </p>
                        </div>

                        <div className="bg-gray-50 border border-gray-200 p-8 rounded-lg">
                            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <Shield size={20} className="text-primary-500" /> Human Quality Control
                            </h4>
                            <p className="text-gray-700 leading-relaxed">
                                The HITL review gate caught 8–10% of emails where the AI misidentified the prospect's role or company context. Those catches prevented reputation damage that would have compounded over the campaign.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Testimonial */}
                <section>
                    <div className="bg-gray-50 border-2 border-primary-500 p-10 rounded-lg shadow-[0_8px_32px_rgba(253,183,44,0.1)]">
                        <div className="text-primary-500 text-xl mb-6">★★★★★</div>
                        <p className="text-xl md:text-2xl text-gray-900 italic leading-relaxed mb-8">
                            "Channel Fusion extended beyond the pilot into an ongoing engagement. The playbook built during the 90-day pilot — persona mapping, messaging frameworks, scoring rubrics — now serves as the template for each new vertical, reducing setup time from weeks to days."
                        </p>
                        <div className="border-t border-gray-200 pt-8">
                            <div className="font-bold text-gray-900 text-lg">Channel Fusion</div>
                            <div className="text-gray-500">Ongoing Engagement — Expanding to Additional Verticals</div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="text-center py-10">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Get Similar Results?</h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10">
                        Book a 15-minute strategy call to see how AI-powered outbound can generate qualified enterprise demos for your company.
                    </p>
                    <BookCallButton className="bg-primary-500 text-black h-14 px-8 rounded font-bold text-lg flex items-center gap-3 mx-auto hover:bg-white hover:scale-105 transition-all">
                        Book Your Strategy Call <ArrowRight size={20} />
                    </BookCallButton>
                    <div className="flex justify-center gap-6 mt-8 text-sm text-gray-400">
                        <span className="flex items-center gap-2"><CheckCircle size={14} className="text-primary-500" /> No contracts</span>
                        <span className="flex items-center gap-2"><CheckCircle size={14} className="text-primary-500" /> 60-day guarantee</span>
                        <span className="flex items-center gap-2"><CheckCircle size={14} className="text-primary-500" /> Enterprise focused</span>
                    </div>
                </section>

                <div className="mt-20 pt-10 border-t border-gray-200 flex justify-between text-sm font-bold uppercase tracking-wider text-gray-500">
                    <Link href="/" className="hover:text-primary-600 flex items-center gap-2">&larr; Back to Home</Link>
                    <Link href="/case-studies/precision-networks-first-predictable-pipeline" className="hover:text-primary-600 flex items-center gap-2">Case Study #2: Precision Networks &rarr;</Link>
                </div>
            </div>
        </div>
    );
};

export default CaseStudyChannelFusion;
