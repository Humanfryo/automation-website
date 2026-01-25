import React from 'react';
import { FileText, CheckCircle, ArrowRight, AlertTriangle, Zap, Check, BarChart, Users, TrendingUp } from 'lucide-react';
import { Link } from 'wouter';
import BookCallButton from '../components/BookCallButton';

const CaseStudyChemicalDistributor = () => {
    return (
        <div className="bg-black text-white selection:bg-yellow selection:text-black font-sans">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 border-b border-gray-dark/50">
                {/* Noise Texture */}
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

                <div className="container mx-auto px-4 max-w-[900px]">
                    {/* Breadcrumb */}
                    <div className="text-sm text-[#A0A0A0] mb-8 font-medium">
                        <Link href="/" className="hover:text-yellow transition-colors">Home</Link> &gt; <a href="/#results" className="hover:text-yellow transition-colors">Results</a> &gt; <span className="text-white">Chemical Distributor Case Study</span>
                    </div>

                    <div className="text-center">
                        <span className="inline-block bg-yellow text-black text-xs font-bold uppercase py-2 px-4 rounded mb-6 tracking-widest">
                            ENTERPRISE CASE STUDY
                        </span>

                        <h1 className="text-4xl md:text-[64px] font-bold text-white leading-tight mb-8">
                            Chemical Distributor Creates $8.4M Pipeline and Closes $2.1M in New Business Over 6 Months
                        </h1>

                        <div className="flex flex-wrap justify-center gap-4 text-[#A0A0A0] text-base mb-12 font-medium">
                            <span>Chemical Distribution & Specialty Materials</span>
                            <span className="text-yellow">•</span>
                            <span>$78M Revenue</span>
                            <span className="text-yellow">•</span>
                            <span>240 Employees</span>
                        </div>

                        {/* Key Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                            {[
                                { label: "Meetings Booked", value: "140" },
                                { label: "Pipeline Created", value: "$8.4M" },
                                { label: "Closed Revenue", value: "$2.1M" },
                                { label: "ROI", value: "51x" },
                            ].map((stat, i) => (
                                <div key={i} className="bg-[#151515] border border-gray-dark rounded-lg p-6 transform hover:-translate-y-1 transition-transform duration-300">
                                    <div className="text-[40px] font-bold text-yellow mb-2">{stat.value}</div>
                                    <div className="text-white text-sm font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <div className="inline-flex items-center gap-2 bg-yellow/10 border border-yellow text-yellow px-5 py-3 rounded font-bold text-sm tracking-wide">
                            🏆 ENTERPRISE TIER - Full Salesforce Integration
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="container mx-auto px-4 max-w-[900px] py-16 space-y-24">

                {/* Section 1: The Challenge */}
                <section>
                    <h2 className="text-4xl font-bold text-white mb-8 inline-block relative pb-2">
                        The Challenge
                        <span className="absolute bottom-0 left-0 w-20 h-1 bg-yellow"></span>
                    </h2>

                    <div className="bg-yellow/5 border-l-4 border-yellow p-6 rounded-r mb-10 flex items-start gap-4">
                        <BarChart className="text-yellow shrink-0 mt-1" size={32} />
                        <div>
                            <h3 className="text-lg font-bold text-white mb-1">STRATEGIC PLATEAU</h3>
                            <p className="text-[#F5F5F5] leading-relaxed">
                                Revenue flat for 3 years. Board demanding growth. Second-largest customer lost ($4.2M annually). No systematic pipeline generation.
                            </p>
                        </div>
                    </div>

                    <div className="bg-[#151515] border-l-4 border-yellow p-8 rounded-r mb-10">
                        <h3 className="text-lg font-bold text-white mb-4">Company Background</h3>
                        <p className="text-[#F5F5F5] leading-relaxed">
                            Gulf Coast Chemical Distribution (name changed for privacy) is a 31-year-old specialty chemical distributor serving manufacturers across industrial coatings, adhesives, lubricants, water treatment, and industrial cleaning. They distribute technical chemicals from 40+ global manufacturers to mid-market and enterprise customers across the Southeast and Midwest US.
                        </p>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-6 relative inline-block">
                        The Strategic Problem
                        <span className="absolute bottom-1 left-0 w-full h-0.5 bg-blue-500"></span>
                    </h3>
                    <p className="text-[#A0A0A0] text-lg mb-6">Unlike the previous two case studies (which were crisis-driven), Gulf Coast Chemical wasn't in immediate danger. They were successful but strategically plateaued:</p>
                    <ul className="space-y-4 mb-10">
                        {[
                            "Revenue flat for 3 years ($76M → $78M → $78M)",
                            "Heavy reliance on existing accounts (80% of revenue from customers 5+ years old)",
                            "Minimal new business development (only 8-12 new customers per year, mostly referrals)",
                            "Sales team reactive, not proactive—responded to RFPs but didn't generate outbound opportunities",
                            "No formal prospecting process—'if we build it, they will come' mentality",
                            "Market share erosion—competitors gaining ground with aggressive outbound strategies"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-4 text-lg text-[#F5F5F5] leading-relaxed">
                                <span className="text-yellow mt-1.5">•</span>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="bg-yellow/5 border-l-4 border-yellow p-8 rounded-r my-10">
                        <p className="text-xl text-white italic leading-relaxed mb-4">
                            "We were comfortable but not growing. Our existing customers were stable, but what happens when one leaves? We had no pipeline of new logos. Our board kept asking, 'Where's the growth?' and we had no answer. We needed a systematic way to generate new business, not just hope for referrals."
                        </p>
                        <p className="text-[#A0A0A0] font-medium">— Thomas Brennan, VP of Sales</p>
                    </div>

                    <div className="border border-red-500/30 rounded-lg p-6 bg-[#151515] mb-10">
                        <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2"><AlertTriangle size={20} className="text-red-500" /> The Math That Forced Change</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <div className="text-[#A0A0A0] text-sm">Lost Annual Revenue</div>
                                <div className="text-2xl font-bold text-red-500">$4.2M</div>
                            </div>
                            <div>
                                <div className="text-[#A0A0A0] text-sm">Pipeline of New Logos</div>
                                <div className="text-2xl font-bold text-white">$800K <span className="text-sm font-normal text-red-400">(19% replacement)</span></div>
                            </div>
                            <div>
                                <div className="text-[#A0A0A0] text-sm">Time to Replace Organically</div>
                                <div className="text-2xl font-bold text-white">18-24 Months</div>
                            </div>
                            <div>
                                <div className="text-[#A0A0A0] text-sm">Board Directive</div>
                                <div className="text-xl font-bold text-white">"Fix this."</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2: Why Enterprise Tier */}
                <section>
                    <h2 className="text-4xl font-bold text-white mb-2">Why They Chose Enterprise Tier</h2>
                    <p className="text-[#A0A0A0] text-xl mb-8">Strategic requirements that demanded Enterprise-level sophistication</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        <div className="bg-[#151515] p-8 rounded-lg">
                            <h4 className="text-lg font-bold text-white mb-6">What He Required</h4>
                            <ul className="space-y-4">
                                {[
                                    "Full Salesforce integration (leads auto-created, attributed, tracked)",
                                    "Technical industry knowledge (chemicals/materials expertise)",
                                    "High meeting volume (20-30/month minimum)",
                                    "Multi-channel approach (email + LinkedIn for hard-to-reach buyers)",
                                    "Dedicated account manager (not rotating contact support)",
                                    "Weekly strategy calls with VP of Sales",
                                    "Long-term commitment (6-12 months, not a 90-day test)"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-[#F5F5F5]">
                                        <CheckCircle size={18} className="text-green-500 shrink-0 mt-1" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-yellow/10 border border-yellow p-8 rounded-lg relative">
                            <div className="absolute top-4 right-4 bg-yellow text-black text-xs font-bold px-2 py-1 rounded">WINNER</div>
                            <h4 className="text-lg font-bold text-white mb-4">Why Enterprise Won</h4>
                            <p className="text-[#F5F5F5] mb-6">SpartanFlow's Enterprise offering delivered all requirements:</p>
                            <div className="text-3xl font-bold text-yellow mb-2">$6,495<span className="text-lg text-white font-normal">/mo</span></div>
                            <div className="text-[#A0A0A0] text-sm mb-6">+$1,997 Setup Fee (One-time)</div>

                            <div className="border-t border-yellow/30 pt-4">
                                <div className="text-sm text-[#A0A0A0] mb-2 uppercase tracking-wide font-bold">Compare to Alternatives:</div>
                                <ul className="space-y-2 text-sm text-[#F5F5F5]">
                                    <li>• 1 SDR salary + benefits: $80K+/year</li>
                                    <li>• Generic agency: $8K/month (failed)</li>
                                    <li>• Internal build: 6-12 months + hiring costs</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: The Solution */}
                <section>
                    <h2 className="text-4xl font-bold text-white mb-2">The Solution</h2>
                    <p className="text-[#A0A0A0] text-xl mb-8">A 6-month strategic engagement with full Salesforce integration</p>

                    {/* Timeline visualization could go here, simplifying to text for code */}
                    <div className="flex border-b border-gray-dark mb-12 overflow-x-auto">
                        {['Month 1: Setup', 'Month 2: Launch', 'Month 3: Optimize', 'Month 4-6: Scale'].map((step, i) => (
                            <div key={i} className={`px-6 py-4 font-bold whitespace-nowrap ${i === 0 ? 'text-yellow border-b-2 border-yellow' : 'text-[#777]'}`}>{step}</div>
                        ))}
                    </div>

                    <div className="space-y-12">
                        {/* Month 1 */}
                        <div>
                            <span className="inline-block bg-gray-600 text-white text-xs font-bold px-3 py-1 rounded mb-4">MONTH 1</span>
                            <h4 className="text-xl font-bold text-white mb-4">Deep Discovery & Technical Setup</h4>

                            <div className="grid md:grid-cols-3 gap-4 mb-8">
                                {[
                                    { title: "Technical ICP Session", desc: "Mapped 8 buyer personas & requirements" },
                                    { title: "Salesforce Review", desc: "Mapped fields, routing, & dashboards" },
                                    { title: "Messaging Workshop", desc: "Aligned brand voice & credibility" }
                                ].map((card, i) => (
                                    <div key={i} className="bg-[#151515] p-4 rounded border border-gray-dark">
                                        <div className="font-bold text-white mb-2">{card.title}</div>
                                        <div className="text-sm text-[#A0A0A0]">{card.desc}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-[#151515] border-l-4 border-green-500 p-6 rounded-r mb-6">
                                <h5 className="text-green-500 font-bold mb-4 flex items-center gap-2"><CheckCircle size={18} /> Salesforce Integration Completed</h5>
                                <ul className="grid md:grid-cols-2 gap-3 text-sm text-[#F5F5F5]">
                                    <li>✓ Lead auto-creation from campaign responses</li>
                                    <li>✓ Opportunity attribution tracking</li>
                                    <li>✓ Automated lead assignment by territory</li>
                                    <li>✓ Real-time Pipeline Performance Dashboard</li>
                                </ul>
                            </div>
                        </div>

                        {/* Campaigns */}
                        <div>
                            <span className="inline-block bg-white text-black text-xs font-bold px-3 py-1 rounded mb-4">CAMPAIGNS</span>
                            <h4 className="text-xl font-bold text-white mb-4">Technical Messaging Strategy</h4>
                            <div className="bg-[#0D0D0D] border border-gray-dark p-6 rounded-lg mb-6">
                                <h5 className="text-yellow text-sm font-bold mb-4">Email 1 (Day 1)</h5>
                                <pre className="font-mono text-sm text-[#F5F5F5] whitespace-pre-wrap leading-relaxed">
                                    {`Subject: Your powder coating line expansion - raw material supplier capacity

[Name],

Saw you're adding a second Gema line to the Decatur plant.

Typically when lines expand, maintaining consistent cure times with 
standard epoxy resins becomes a bottleneck.

We've helped formulators like [Customer] switch to a high-functional 
resin that:
1. Reduced cure time by 15% (improving throughput)
2. Meets specific NSF/ANSI 61 certifications
3. Delivered from stock in Atlanta (2-day lead time)

Open to sending a 5lb sample for your lab to test next week?

Regards,
Thomas`}
                                </pre>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 5: The Results */}
                <section>
                    <h2 className="text-4xl font-bold text-white mb-2">The Results</h2>
                    <p className="text-[#A0A0A0] text-xl mb-8">6 months of systematic pipeline generation</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <div className="bg-[#151515] border border-gray-dark p-6 rounded-lg">
                            <h4 className="text-lg font-bold text-white mb-6">Email & LinkedIn</h4>
                            <ul className="space-y-4">
                                {[
                                    { label: "Emails Sent", value: "24,800", sub: "1,033/week" },
                                    { label: "Replies", value: "1,612", sub: "6.5% rate" },
                                    { label: "LinkedIn Convos", value: "65", sub: "High value" },
                                ].map((stat, i) => (
                                    <li key={i}>
                                        <div className="text-2xl font-bold text-yellow">{stat.value}</div>
                                        <div className="text-white text-sm">{stat.label}</div>
                                        <div className="text-xs text-[#A0A0A0]">{stat.sub}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-[#151515] border border-gray-dark p-6 rounded-lg">
                            <h4 className="text-lg font-bold text-white mb-6">Pipeline Impact</h4>
                            <ul className="space-y-4">
                                {[
                                    { label: "Meetings Booked", value: "140", sub: "23/month avg" },
                                    { label: "Pipeline Created", value: "$19.8M", sub: "Total value" },
                                    { label: "Attributed Pipeline", value: "$8.4M", sub: "SpartanFlow Source" },
                                ].map((stat, i) => (
                                    <li key={i}>
                                        <div className="text-2xl font-bold text-yellow">{stat.value}</div>
                                        <div className="text-white text-sm">{stat.label}</div>
                                        <div className="text-xs text-[#A0A0A0]">{stat.sub}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-[#151515] border border-gray-dark p-6 rounded-lg">
                            <h4 className="text-lg font-bold text-white mb-6">Revenue Impact</h4>
                            <ul className="space-y-4">
                                {[
                                    { label: "Deals Closed", value: "22", sub: "New Logos" },
                                    { label: "Closed Revenue", value: "$2.1M", sub: "Recognized 6-mo" },
                                    { label: "Future Value", value: "$3.5M+", sub: "Contract value" },
                                ].map((stat, i) => (
                                    <li key={i}>
                                        <div className="text-2xl font-bold text-green-500">{stat.value}</div>
                                        <div className="text-white text-sm">{stat.label}</div>
                                        <div className="text-xs text-[#A0A0A0]">{stat.sub}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Compounding Chart */}
                    <div className="bg-[#151515] border border-gray-dark rounded-lg p-8 mb-12">
                        <h3 className="text-2xl font-bold text-white mb-2">The Compounding Value Effect</h3>
                        <p className="text-[#A0A0A0] mb-8">Why Month 4-6 generated 3x more revenue than Month 1-3</p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                            <div className="p-4 border border-gray-dark rounded bg-[#0D0D0D]">
                                <div className="text-[#A0A0A0] text-sm mb-2">Metric</div>
                                <div className="font-bold text-white py-2 border-t border-gray-dark">Closed Revenue</div>
                                <div className="font-bold text-white py-2 border-t border-gray-dark">ROI</div>
                            </div>
                            <div className="p-4 border border-gray-dark rounded bg-[#0D0D0D]">
                                <div className="text-[#A0A0A0] text-sm mb-2">Month 1-3</div>
                                <div className="font-bold text-white py-2 border-t border-gray-dark">$1.4M</div>
                                <div className="font-bold text-white py-2 border-t border-gray-dark">7.2x</div>
                            </div>
                            <div className="p-4 border border-green-500/30 rounded bg-green-500/5">
                                <div className="text-green-400 text-sm mb-2 font-bold">Month 4-6</div>
                                <div className="font-bold text-white py-2 border-t border-green-500/30">$4.2M</div>
                                <div className="font-bold text-white py-2 border-t border-green-500/30">21.6x</div>
                            </div>
                            <div className="p-4 border border-yellow/30 rounded bg-yellow/5">
                                <div className="text-yellow text-sm mb-2 font-bold">Growth</div>
                                <div className="font-bold text-yellow py-2 border-t border-yellow/30">+200%</div>
                                <div className="font-bold text-yellow py-2 border-t border-yellow/30">+200%</div>
                            </div>
                        </div>
                    </div>

                    {/* Breakdown Table */}
                    <div className="bg-[#151515] border border-gray-dark rounded-lg overflow-hidden mb-8">
                        <div className="p-6 bg-yellow text-black font-bold text-lg">Month-by-Month Breakdown</div>
                        <div className="grid grid-cols-7 p-4 border-b border-gray-dark/50 font-bold text-[#A0A0A0] text-xs uppercase tracking-wider">
                            <div>Mo</div>
                            <div className="col-span-1 hidden md:block">Emails</div>
                            <div className="col-span-1">Booked</div>
                            <div className="col-span-1 hidden md:block">Held</div>
                            <div className="col-span-1">Opps</div>
                            <div className="col-span-1">Pipeline</div>
                            <div className="col-span-1">Closed</div>
                        </div>
                        {[
                            { month: "1", emails: "0", booked: "0", held: "0", opps: "0", pipe: "$0", closed: "0" },
                            { month: "2", emails: "3.8k", booked: "24", held: "20", opps: "11", pipe: "$2.8M", closed: "0" },
                            { month: "3", emails: "4.8k", booked: "28", held: "23", opps: "15", pipe: "$3.9M", closed: "2" },
                            { month: "4", emails: "4.4k", booked: "26", held: "22", opps: "13", pipe: "$3.2M", closed: "4" },
                            { month: "5", emails: "5.2k", booked: "30", held: "25", opps: "18", pipe: "$4.7M", closed: "7" },
                            { month: "6", emails: "6.6k", booked: "32", held: "28", opps: "21", pipe: "$5.1M", closed: "9" },
                        ].map((row, i) => (
                            <div key={i} className={`grid grid-cols-7 p-4 border-b border-gray-dark/20 text-[#E0E0E0] items-center text-sm ${i % 2 === 1 ? 'bg-[#0D0D0D]' : ''}`}>
                                <div>{row.month}</div>
                                <div className="hidden md:block">{row.emails}</div>
                                <div className="font-bold text-yellow">{row.booked}</div>
                                <div className="hidden md:block">{row.held}</div>
                                <div>{row.opps}</div>
                                <div>{row.pipe}</div>
                                <div className={`font-bold ${row.closed !== "0" ? 'text-green-500' : 'text-[#777]'}`}>{row.closed}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section 6: Testimonial */}
                <section>
                    <div className="bg-[#151515] border-2 border-yellow p-10 rounded-lg shadow-[0_8px_32px_rgba(253,183,44,0.1)]">
                        <div className="text-yellow text-xl mb-6">★★★★★</div>
                        <p className="text-xl md:text-2xl text-white italic leading-relaxed mb-8">
                            "If someone asked me, 'Should I do 3 months or 6 months?' I'd say 6 months without hesitation. The first 3 months are learning. The second 3 months are earning. The real ROI came in Month 4-6 when everything compounded."
                        </p>
                        <div className="border-t border-gray-dark pt-8">
                            <div className="font-bold text-white text-lg">Thomas Brennan</div>
                            <div className="text-[#A0A0A0]">VP of Sales, Gulf Coast Chemical Distribution</div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="text-center py-10">
                    <h2 className="text-4xl font-bold text-white mb-6">Ready to Build a Predictable Growth Engine?</h2>
                    <p className="text-xl text-[#A0A0A0] max-w-2xl mx-auto mb-10">
                        If you're a $50M+ industrial company with Salesforce and need 20-30 qualified meetings per month with full attribution, our Enterprise tier delivers at scale.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <BookCallButton className="bg-yellow text-black h-14 px-8 rounded font-bold text-lg flex items-center justify-center gap-3 hover:bg-white hover:scale-105 transition-all">
                            Book a Strategy Call <ArrowRight size={20} />
                        </BookCallButton>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-[#777]">
                        <span className="flex items-center gap-2"><CheckCircle size={14} className="text-yellow" /> Full Salesforce Integration</span>
                        <span className="flex items-center gap-2"><CheckCircle size={14} className="text-yellow" /> 6-12 Month Partnership</span>
                        <span className="flex items-center gap-2"><CheckCircle size={14} className="text-yellow" /> Dedicated Account Manager</span>
                    </div>
                </section>

                <div className="mt-20 pt-10 border-t border-gray-dark flex justify-between text-sm font-bold uppercase tracking-wider text-[#A0A0A0]">
                    <Link href="/case-studies/packaging-distributor-q2-pipeline-6-weeks" className="hover:text-yellow flex items-center gap-2">← Case Study #2: Packaging</Link>
                    <Link href="/" className="hover:text-yellow flex items-center gap-2">Back to Home →</Link>
                </div>
            </div>
        </div>
    );
};

export default CaseStudyChemicalDistributor;
